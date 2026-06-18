// ============================================
// LAYER 2: VALIDATOR (Hard Constraints)
// ============================================

const calculateDistance = (p1, p2) => {
  return Math.sqrt(Math.pow(p1.row - p2.row, 2) + Math.pow(p1.col - p2.col, 2));
};

const validateSequence = (problem, holdsMap, maxReach) => {
  const errors = [];
  
  const allHands = [...(problem.start || []), ...(problem.intermediate || []), ...(problem.finish || [])];

  // 1. Check Sequence Length (3-10 hands)
  if (allHands.length < 3 || allHands.length > 10) {
    errors.push(`Sequence length is ${allHands.length}. Must be between 3 and 10 handholds.`);
  }

  // 2. Check Start Zone (Rows 1-6) & Count (1 or 2 holds, max 1 in row 1)
  if (!problem.start || problem.start.length === 0 || problem.start.length > 2) {
    errors.push("Must have 1 or 2 start holds.");
  } else {
    let row1Count = 0;
    problem.start.forEach(id => {
      if (holdsMap[id]) {
        if (holdsMap[id].row > 6) {
          errors.push(`Start hold ${id} is not in rows 1-6.`);
        }
        if (holdsMap[id].row === 1) {
          row1Count++;
        }
      }
    });
    if (row1Count > 1) {
      errors.push("Cannot have 2 start holds in Row 1.");
    }

    // NEW: Check Start Hold Spacing (must be within maxReach of each other)
    if (problem.start.length === 2) {
      const h1 = holdsMap[problem.start[0]];
      const h2 = holdsMap[problem.start[1]];
      if (h1 && h2) {
        const startDist = calculateDistance(h1, h2);
        if (startDist > maxReach) {
          errors.push(`Start holds ${problem.start[0]} and ${problem.start[1]} are too far apart (${startDist.toFixed(1)} units vs max ${maxReach}).`);
        }
      }
    }
  }

  // 3. Check Finish Zone (Rows 16-18)
  if (!problem.finish || problem.finish.length === 0) {
    errors.push("No finish hold provided.");
  } else {
    problem.finish.forEach(id => {
      if (holdsMap[id] && holdsMap[id].row < 16) errors.push(`Finish hold ${id} is not in rows 16-18.`);
    });
  }

  // 4. Check Reach
  for (let i = 0; i < allHands.length - 1; i++) {
    const currentHold = holdsMap[allHands[i]];
    const nextHold = holdsMap[allHands[i+1]];
    if (!currentHold || !nextHold) continue;

    const dist = calculateDistance(currentHold, nextHold);
    if (dist > maxReach) {
      errors.push(`Move from ${allHands[i]} to ${allHands[i+1]} is too long (${dist.toFixed(1)} units vs max ${maxReach}).`);
    }
  }

  // 5. Check Feet Rules (Spacing & No Underclings)
  const startHands = problem.start || [];
  const feet = problem.feet || [];

  feet.forEach(footId => {
    const foot = holdsMap[footId];
    if (!foot) return;

    // Normalize type to array so .some() works safely
    const footTypes = Array.isArray(foot.type) ? foot.type : [foot.type];
    
    // Check for Underclings
    if (footTypes.some(t => t && t.toLowerCase().includes('undercling'))) {
      errors.push(`Foot hold ${footId} is an undercling. Feet must be positive holds.`);
    }

    // Check spacing if in same row as a start hand
    startHands.forEach(handId => {
      const hand = holdsMap[handId];
      if (hand && hand.row === foot.row) {
        const colDist = Math.abs(hand.col - foot.col);
        if (colDist < 3) {
          errors.push(`Foot ${footId} is too close to start hand ${handId} (same row, only ${colDist} columns apart). Needs at least 3.`);
        }
      }
    });
  });

  return { valid: errors.length === 0, errors };
};

// ============================================
// LAYER 3: LLM CALL
// ============================================

async function callDeepSeek(boardContext, userHeight, style, grade, errorFeedback = null) {
  const maxReach = Math.floor(0.75 * userHeight / 15); 
  
  let systemPrompt = `You are an expert Kilter Board routesetter.
Your goal is to output a JSON object representing a boulder problem.

HOLD GRADING SYSTEM:
- Holds have a Tier (1=Jug, 2=Medium, 3=Crimp) and a precise difficulty grade: 1.1 to 1.5, 2.1 to 2.5, and 3.1 to 3.5.
- .1 is the "worst" hold in that tier, .5 is the "best" hold in that tier.
- Combining positive holds with bad holds is essential for creating difficult, tension-heavy sequences.

HOLD ORIENTATION, GEOMETRY & BIOMECHANICS:
- Pay close attention to the "Orientation/Desc" column in the board layout.
- "angled X° left/right": The hold is rotated by X degrees.
- "sidepull": Rotated 90 degrees (labeled left or right). Requires pulling sideways.
- "vertical" pinches: The edge you grip is parallel to the side edges of the wall.
- If no orientation is mentioned, the hold is in standard positive orientation.
- OPPOSING FORCES: A hold angled left (or left sidepull) is often unusable unless paired with a hold angled right (opposition), creating tension. 
- OPPOSING FEET FOR SIDEPUTLLS/GASTONS: Sidepulls and Gastons (holds pulled outward/inward at 45-90 degrees) REQUIRE stable opposing feet. If a start hand is a left-facing sidepull, you MUST place a foot on the RIGHT side of the hold so the climber can push against it to maintain tension.

DIFFICULTY LOGIC (Target Grade: ${grade}):
- Easy: Use mostly Tier 1 (1.3-1.5) and easy Tier 2 (2.4-2.5).
- Medium: Use mostly Tier 2 (2.1-2.3) and some Tier 3 (3.4-3.5).
- Hard: Use mostly Tier 3 (3.1-3.3) and worst Tier 2 (2.1-2.2). Combine intermediate holds with bad holds to force tension.

RULES:
1. Start holds: Must be in rows 1-6. Provide 1 or 2 start holds. Do NOT place 2 start holds in Row 1.
   - If you use 2 start holds, they MUST be within ${maxReach} units of each other.
2. Finish hold: Must be in rows 16-18. Provide 1 finish hold.
3. Sequence: 3-10 total handholds is ideal.
4. Movement: Avoid ladders (straight up one column). Create interesting movement based on hold angles, opposition, and orientations.
5. Max Reach Distance: ${maxReach} units.
6. Feet: You MUST designate specific feet.
   - Feet must be positive holds (Jugs, Pinches), NEVER underclings.
   - If feet are in the same row as start hands, they MUST be at least 3 columns apart.
   - CRITICAL: If start hands are sidepulls, gastons, or heavily angled, you MUST set feet that oppose the pull direction to create biomechanical stability.

OUTPUT FORMAT:
Return a valid JSON object with these keys:
{
  "start": ["HoldID"],
  "intermediate": ["HoldID", ...],
  "finish": ["HoldID"],
  "feet": ["HoldID", ...]
}

CURRENT BOARD LAYOUT (ID | Row | Col | Type | Grade | Orientation/Desc):
 ${boardContext}
`;

  let userPrompt = "";
  if (errorFeedback) {
    userPrompt = `The previous attempt failed validation. 
ERRORS: ${errorFeedback.join(', ')}
Please fix the sequence and output the corrected JSON object.`;
  } else {
    userPrompt = `Create a "${style}" problem. Output ONLY the JSON object.`;
  }

  try {
    const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.DEEPSEEK_API_KEY}`
      },
      body: JSON.stringify({
        model: "deepseek-chat", 
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt }
        ],
        response_format: { type: "json_object" }
      })
    });

    const data = await response.json();
    if (data.choices && data.choices[0].message.content) {
      return JSON.parse(data.choices[0].message.content);
    }
    return null;
  } catch (e) {
    console.error("DeepSeek API Error:", e);
    return null;
  }
}

// ============================================
// MAIN HANDLER
// ============================================

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: "Method not allowed" });

  const { holdsMap, userHeight, style, grade } = req.body;
  
  if (!holdsMap || !userHeight || !style || !grade) {
    return res.status(400).json({ error: "Missing required fields: holdsMap, userHeight, style, grade" });
  }

  // Prepare Spatial Context (Including Orientation/Desc so AI can read angles)
  let boardContext = "ID | Row | Col | Type | Grade | Orientation/Desc\n";
  boardContext += "----------------------------------------------------------\n";
  
  for (const [id, hold] of Object.entries(holdsMap)) {
    // Ensure type is a string if it's an array
    const typeStr = Array.isArray(hold.type) ? hold.type.join('/') : hold.type;
    const gradeStr = hold.grade || 'N/A';
    
    // Combine desc and notes, remove newlines, and limit length to save tokens
    let orientDesc = `${hold.desc || ""} ${hold.notes || ""}`.replace(/\n/g, ' ').trim();
    if (orientDesc.length > 50) orientDesc = orientDesc.substring(0, 50) + '...';
    
    boardContext += `${id} | ${hold.row} | ${hold.col} | ${typeStr} | ${gradeStr} | ${orientDesc}\n`;
  }

  const maxReach = Math.floor(0.75 * userHeight / 15);

  // Generate
  let problem = await callDeepSeek(boardContext, userHeight, style, grade);

  if (!problem) {
    return res.status(500).json({ error: "AI failed to generate a valid response." });
  }

  // Validate & Repair Loop
  let attempts = 0;
  let validationResult = validateSequence(problem, holdsMap, maxReach);

  while (!validationResult.valid && attempts < 2) {
    console.log(`Validation failed, retrying... (${attempts + 1})`, validationResult.errors);
    problem = await callDeepSeek(boardContext, userHeight, style, grade, validationResult.errors);
    if (problem) {
      validationResult = validateSequence(problem, holdsMap, maxReach);
    }
    attempts++;
  }

  if (!validationResult.valid) {
    return res.status(200).json({ 
      ...problem,
      warning: "Problem generated, but might have some impossible moves or invalid feet.", 
      errors: validationResult.errors 
    });
  }

  return res.status(200).json(problem);
}