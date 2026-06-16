// ============================================
// LAYER 2: VALIDATOR (Hard Constraints)
// ============================================

// Calculate Euclidean distance on the grid
const calculateDistance = (p1, p2) => {
  return Math.sqrt(Math.pow(p1.row - p2.row, 2) + Math.pow(p1.col - p2.col, 2));
};

const validateSequence = (problem, holdsMap, maxReach) => {
  const errors = [];
  
  // Combine all hands for reach checking
  const allHands = [...(problem.start || []), ...(problem.intermediate || []), ...(problem.finish || [])];

  // Check Start Zone (Rows 1-3)
  if (!problem.start || problem.start.length === 0) {
    errors.push("No start holds provided.");
  } else {
    problem.start.forEach(id => {
      if (holdsMap[id] && holdsMap[id].row > 3) errors.push(`Start hold ${id} is not in rows 1-3.`);
    });
  }

  // Check Finish Zone (Rows 16-18)
  if (!problem.finish || problem.finish.length === 0) {
    errors.push("No finish hold provided.");
  } else {
    problem.finish.forEach(id => {
      if (holdsMap[id] && holdsMap[id].row < 16) errors.push(`Finish hold ${id} is not in rows 16-18.`);
    });
  }

  // Check Reach (Simple sequential check for now)
  // A more complex check would involve tracking left/right hand state
  for (let i = 0; i < allHands.length - 1; i++) {
    const currentHold = holdsMap[allHands[i]];
    const nextHold = holdsMap[allHands[i+1]];
    
    if (!currentHold || !nextHold) continue;

    const dist = calculateDistance(currentHold, nextHold);
    
    // Simple heuristic: limit static moves to ~3 units, allow dynamic up to maxReach
    // For this validation, we'll flag anything > maxReach as impossible
    if (dist > maxReach) {
      errors.push(`Move from ${allHands[i]} to ${allHands[i+1]} is too long (${dist.toFixed(1)} units vs max ${maxReach}).`);
    }
  }

  return { valid: errors.length === 0, errors };
};

// ============================================
// LAYER 3: LLM CALL
// ============================================

async function callDeepSeek(boardContext, userHeight, style, errorFeedback = null) {
  const maxReach = Math.floor(0.75 * userHeight / 15); 
  
  // Constructing the prompt
  let systemPrompt = `You are an expert Kilter Board routesetter.
Your goal is to output a JSON object representing a boulder problem.

RULES:
1. Start holds: Must be in rows 1-3.
2. Finish hold: Must be in rows 16-18.
3. Sequence: 6-10 hand moves is ideal.
4. Movement: Avoid ladders (straight up one column). Create interesting movement.
5. Max Reach Distance: ${maxReach} units.
6. Feet: You MAY designate specific feet, or leave the array empty if not critical.

OUTPUT FORMAT:
Return a valid JSON object with these keys:
{
  "start": ["HoldID"],
  "intermediate": ["HoldID", ...],
  "finish": ["HoldID"],
  "feet": ["HoldID", ...]
}

CURRENT BOARD LAYOUT (Row | Col | Type | Tier):
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
        response_format: { type: "json_object" } // Force JSON output
      })
    });

    const data = await response.json();
    
    if (data.choices && data.choices[0].message.content) {
      const content = data.choices[0].message.content;
      return JSON.parse(content);
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
  // Set CORS headers to allow your frontend to call this
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { holdsMap, userHeight, style } = req.body;
  
  if (!holdsMap || !userHeight || !style) {
    return res.status(400).json({ error: 'Missing required fields: holdsMap, userHeight, style' });
  }

  // 1. Prepare Spatial Context (Compressed to save tokens)
  let boardContext = "ID | Row | Col | Type | Tier\n";
  boardContext += "----------------------------------\n";
  
  // We only need to send essential info to the LLM
  for (const [id, hold] of Object.entries(holdsMap)) {
    boardContext += `${id} | ${hold.row} | ${hold.col} | ${hold.type} | T${hold.tier}\n`;
  }

  const maxReach = Math.floor(0.75 * userHeight / 15);

  // 2. Generate (Layer 3)
  let problem = await callDeepSeek(boardContext, userHeight, style);

  if (!problem) {
    return res.status(500).json({ error: "AI failed to generate a valid response." });
  }

  // 3. Validate & Repair Loop (Layer 2)
  let attempts = 0;
  let validationResult = validateSequence(problem, holdsMap, maxReach);

  while (!validationResult.valid && attempts < 2) {
    console.log(`Validation failed, retrying... (${attempts + 1})`, validationResult.errors);
    problem = await callDeepSeek(boardContext, userHeight, style, validationResult.errors);
    if (problem) {
      validationResult = validateSequence(problem, holdsMap, maxReach);
    }
    attempts++;
  }

  // 4. Return Result
  if (!validationResult.valid) {
    // Return the best effort but warn the user
    return res.status(200).json({ 
      ...problem,
      warning: "Problem generated, but might have some impossible moves.", 
      errors: validationResult.errors 
    });
  }

  return res.status(200).json(problem);
}