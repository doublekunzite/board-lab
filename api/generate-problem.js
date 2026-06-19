// ============================================
// LAYER 1: DATA (Structured Board + Movement Archetypes)
// ============================================

const MOVEMENT_ARCHETYPES = [
  {
    id: "compression-sidepulls",
    name: "Compression Sidepulls",
    description: "Two opposing sidepulls or steeply angled holds facing each other, requiring body tension between them.",
    holdProfile: "2x sidepull (opposing) or 2x angled hold (60°+ opposing) + feet for opposition",
    biomechanics: "Body stays close to wall, elbows out, feet push outward.",
    keyPrinciple: "Opposing force vectors create stability without needing positive downward pulls.",
    difficultyFactors: ["Hold angle steepness", "Distance between holds", "Foot quality"],
    exampleConfigurations: [
      "Left sidepull + right sidepull, feet below",
      "Left 70° angled + right 70° angled, feet staggered"
    ]
  },
  {
    id: "gaston-sequence",
    name: "Gaston Sequence",
    description: "Using a hold with outward pull direction (elbow up, hand pushing away from body).",
    holdProfile: "1x angled hold (30°+) or sidepull used as gaston + 1x positive hold for counterbalance + high opposing foot",
    biomechanics: "High elbow, shoulder external rotation. The gaston hand pushes OUTWARD while the other hand pulls DOWN or INWARD.",
    keyPrinciple: "Gaston is a movement, not a hold type. Any angled or sidepull hold can become a gaston depending on body position.",
    difficultyFactors: ["Hold positivity", "Shoulder mobility", "Opposing foot quality", "Body tension"],
    exampleConfigurations: [
      "Left hand gaston on 45° right-angled hold + right hand on jug + right foot high",
      "Right hand gaston on sidepull-left + left hand undercling + left foot heel hook"
    ]
  },
  {
    id: "undercling-pullthrough",
    name: "Undercling Pull-Through",
    description: "Start on an undercling, pull up and through to a positive hold above.",
    holdProfile: "1x undercling + 1x jug/crimp above + feet high for opposition",
    biomechanics: "Feet must be above or level with undercling to create tension. Body moves up and through, not out.",
    keyPrinciple: "Undercling angle determines optimal hand: angled left = left hand natural, right hand awkward.",
    difficultyFactors: ["Undercling depth", "Angle compatibility with hand", "Foot height", "Target hold distance"],
    exampleConfigurations: [
      "Vertical undercling + jug directly above + feet on same row",
      "Undercling angled 45° left (natural for left hand) + finish on right-side jug"
    ]
  },
  {
    id: "sloper-stack",
    name: "Sloper Stack",
    description: "Two slopers in sequence, requiring open-hand grip and precise body positioning.",
    holdProfile: "2x sloper (can be same or opposing angles) + precise foot placement",
    biomechanics: "Body must stay directly under holds. Any outward lean = slip. Open-hand grip essential.",
    keyPrinciple: "Slopers reward body tension and punish poor positioning.",
    difficultyFactors: ["Sloper angle", "Wall steepness", "Foot precision", "Body tension"],
    exampleConfigurations: [
      "Left sloper + right sloper, feet directly below",
      "Sloper gaston (outward pull) + opposing sloper, drop knee for stability"
    ]
  },
  {
    id: "deadpoint-nearlyjug",
    name: "Deadpoint to Nearly-Jug",
    description: "Dynamic move to a hold that's 'almost a jug'—good enough to catch but requires commitment.",
    holdProfile: "1x nearly-jug crimp/sloper (grade 2.3-2.5) + launch from stable base",
    biomechanics: "Stable base required. Launch with legs, catch with controlled momentum.",
    keyPrinciple: "Nearly-jugs are the Kilter Board's signature dynamic targets.",
    difficultyFactors: ["Launch hold stability", "Target hold positivity", "Distance", "Body position at catch"],
    exampleConfigurations: [
      "Jug start + deadpoint to nearly-jug crimp 4 units away",
      "Sidepull + undercling base, dyno to sloper-jug"
    ]
  },
  {
    id: "pinch-compression",
    name: "Pinch Compression",
    description: "Two pinches facing each other or angled to create inward pull.",
    holdProfile: "2x pinch (opposing or angled inward) + feet for stability",
    biomechanics: "Thumb opposition is key. Angled pinches are more positive than vertical pinches.",
    keyPrinciple: "Vertical pinches are hardest because thumb-finger opposition is straight-on.",
    difficultyFactors: ["Pinch angle", "Pinch depth", "Wall steepness", "Opposing foot quality"],
    exampleConfigurations: [
      "Left vertical pinch + right vertical pinch, feet wide",
      "Left 45° angled pinch + right 45° angled pinch (opposing), feet staggered"
    ]
  },
  {
    id: "crimp-ladder-directionchange",
    name: "Crimp Ladder with Direction Change",
    description: "Sequence of small crimps requiring precise foot swaps and body rotation.",
    holdProfile: "3-4x crimp (varied angles/directions) + feet that follow hand movement",
    biomechanics: "Static precision. Feet must move with hands to maintain balance.",
    keyPrinciple: "Direction changes force body rotation and prevent ladder-style climbing.",
    difficultyFactors: ["Crimp size", "Angle variety", "Foot precision", "Sequence length"],
    exampleConfigurations: [
      "Left sidepull crimp → right angled crimp → left undercling crimp → right jug",
      "Heart-shaped crimp → square-edge crimp → heart-shaped crimp (opposite angle)"
    ]
  },
  {
    id: "jug-rest-to-crux",
    name: "Jug Rest to Crux",
    description: "A comfortable jug mid-sequence that allows recovery before a hard crux.",
    holdProfile: "1x jug/mega-jug + transition to tier 3 or bad tier 2",
    biomechanics: "Full rest on jug: drop heels, relax grip, shake out. Then engage core and lock off for crux.",
    keyPrinciple: "Rest quality determines crux difficulty.",
    difficultyFactors: ["Rest hold positivity", "Distance to crux", "Crux hold quality", "Foot options at crux"],
    exampleConfigurations: [
      "Mega-jug at mid-height → 2-unit reach to bad crimp → finish on jug",
      "Jug → drop knee to set up for gaston crux → match on finish"
    ]
  },
  {
    id: "opposition-undercling-sidepull",
    name: "Opposition Undercling + Sidepull",
    description: "Undercling with one hand, sidepull with other, creating upward and sideways force vectors.",
    holdProfile: "1x undercling + 1x sidepull (opposing) + feet below undercling",
    biomechanics: "Undercling pulls UP, sidepull pulls ACROSS. Feet push DOWN and OUT.",
    keyPrinciple: "Undercling angle determines hand choice: angled left undercling is natural for left hand.",
    difficultyFactors: ["Undercling angle/hand compatibility", "Sidepull direction", "Foot height", "Body tension"],
    exampleConfigurations: [
      "Left hand on vertical undercling + right hand on right sidepull + feet below",
      "Right hand on undercling angled 45° left (awkward) + left hand gaston"
    ]
  },
  {
    id: "drop-knee-setup",
    name: "Drop Knee Setup",
    description: "Hold configuration that invites a drop knee for stability before a big move.",
    holdProfile: "1x good foothold (jug/crimp) + 1x handhold that pulls away from the foot",
    biomechanics: "Foot high and across body, knee drops down and in. Hip turns into wall.",
    keyPrinciple: "Drop knees convert lateral instability into rotational stability.",
    difficultyFactors: ["Foothold quality", "Handhold direction", "Hip flexibility", "Target hold distance"],
    exampleConfigurations: [
      "Left foot high on jug + right hand on right-pulling sidepull + big left reach",
      "Right foot on good edge + left hand on left-angled hold + right hand dyno"
    ]
  },
  {
    id: "heel-hook-tension",
    name: "Heel Hook Tension",
    description: "Using a heel hook to create upward pull and stabilize the body during a reach or lockoff.",
    holdProfile: "1x heel hook hold (usually jug or good edge) + 1x handhold for lockoff + 1x target hold",
    biomechanics: "Heel pulls UP and IN, counteracting the hand's pull DOWN and OUT.",
    keyPrinciple: "Heel hooks convert a hand movement into a full-body tension sequence.",
    difficultyFactors: ["Heel hold positivity", "Heel hold height", "Handhold quality", "Flexibility"],
    exampleConfigurations: [
      "Right heel on jug + left hand on sidepull + right hand reaches up",
      "Left heel on undercling + right hand on crimp + left hand dyno to finish"
    ]
  },
  {
    id: "toe-hook-compression",
    name: "Toe Hook Compression",
    description: "Toe hook on an upper hold to pull the hips into the wall while hands compress on lower holds.",
    holdProfile: "1x toe hook hold (usually edge or jug) + 2x handholds for compression",
    biomechanics: "Toe pulls DOWN and IN, hands push IN and UP.",
    keyPrinciple: "Toe hooks are the inverse of heel hooks—they pull from above rather than push from below.",
    difficultyFactors: ["Toe hold positivity", "Toe hold height", "Handhold quality", "Core strength"],
    exampleConfigurations: [
      "Left toe on upper jug + both hands on lower pinches, compressing",
      "Right toe on sidepull-edge + left hand undercling + right hand reaches"
    ]
  },
  {
    id: "barn-door-prevention",
    name: "Barn-Door Prevention",
    description: "Sequence where the natural tendency is to swing off the wall, countered by specific hold choice and body positioning.",
    holdProfile: "1x sidepull or angled hold + 1x marginal foot + 1x counterbalance hold or flag",
    biomechanics: "Sidepulls create rotational torque around the foot. Counter with opposite-side foot, flag, or diagonal hand-foot pairing.",
    keyPrinciple: "Barn-doors happen when the pulling hand and weighted foot are on the same side.",
    difficultyFactors: ["Hold direction", "Foot quality", "Body awareness", "Counterbalance options"],
    exampleConfigurations: [
      "Right hand on right sidepull + left foot high + right leg flagged",
      "Left hand on left-angled hold + right foot on good edge + left foot smearing"
    ]
  },
  {
    id: "match-and-shift",
    name: "Match and Shift",
    description: "Matching both hands on a single hold, then shifting weight to free one hand for the next move.",
    holdProfile: "1x large matchable hold (jug/mega-jug) + 1x next hold within reach after shift",
    biomechanics: "Both hands on hold, weight centered. Shift hips toward the hand that will stay.",
    keyPrinciple: "Matching is a rest and a setup. The shift direction determines which hand moves next.",
    difficultyFactors: ["Hold size for matching", "Hold positivity", "Next hold distance", "Foot options during shift"],
    exampleConfigurations: [
      "Match on mega-jug → shift left → right hand reaches to crimp",
      "Match on undercling → shift right → left hand reaches to sidepull"
    ]
  },
  {
    id: "cross-through",
    name: "Cross-Through",
    description: "One hand crosses in front of or behind the other to reach the next hold.",
    holdProfile: "2-3 holds in a line or slight diagonal + stable feet",
    biomechanics: "Crossing hand reaches across the body, rotating the torso. Feet must be set to allow rotation.",
    keyPrinciple: "Cross-throughs create flow and prevent ladder climbing.",
    difficultyFactors: ["Hold spacing", "Hold stability", "Foot placement", "Shoulder mobility"],
    exampleConfigurations: [
      "Left hand on jug → right hand crosses left to reach sidepull → body rotates left",
      "Right hand on crimp → left hand crosses behind to reach undercling"
    ]
  }
];

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

    // Check Start Hold Spacing
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

  // 5. Check Feet Rules
  const startHands = problem.start || [];
  const feet = problem.feet || [];

  feet.forEach(footId => {
    const foot = holdsMap[footId];
    if (!foot) return;

    const footTypes = Array.isArray(foot.type) ? foot.type : [foot.type];

    if (footTypes.some(t => t && t.toLowerCase().includes('undercling'))) {
      errors.push(`Foot hold ${footId} is an undercling. Feet must be positive holds.`);
    }

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

function getRandomArchetypes(count = 4) {
  const shuffled = [...MOVEMENT_ARCHETYPES].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function formatArchetypes(archetypes) {
  return archetypes.map(a => 
    `## ${a.name}\n${a.description}\nHold Profile: ${a.holdProfile}\nKey Principle: ${a.keyPrinciple}\nExample: ${a.exampleConfigurations[0]}`
  ).join('\n\n');
}

async function callDeepSeek(boardContext, userHeight, style, grade, errorFeedback = null) {
  const maxReach = Math.floor(0.75 * userHeight / 15); 

  const selectedArchetypes = getRandomArchetypes(4);
  const archetypeContext = formatArchetypes(selectedArchetypes);

  const systemPrompt = `You are an expert Kilter Board routesetter.
Your goal is to output a JSON object representing a boulder problem.

HOLD GRADING SYSTEM:
- Holds have a Tier (1=Jug, 2=Medium, 3=Crimp) and a precise difficulty grade: 1.1 to 1.5, 2.1 to 2.5, and 3.1 to 3.5.
- .1 is the "worst" hold in that tier, .5 is the "best" hold in that tier.

HOLD ANGLE & FORCE DIRECTION SYSTEM:
- angleCategory: vertical | angled-left | angled-right | sidepull-left | sidepull-right | undercling-left | undercling-right
- forceDirection: down | down-left | down-right | left | right | up | up-left | up-right | outward-left | outward-right
- canGaston: true/false

BIOMECHANICAL RULES:
- Gaston: ANY angled or sidepull hold can be used as a gaston when body position forces outward pull.
- Undercline angle: "angled left" means pull is up-and-right. Natural for LEFT hand, awkward for RIGHT hand.
- Vertical pinches are hardest. Angled pinches are more positive.
- Slopers: Body must stay directly under the hold.

DIFFICULTY LOGIC (Target Grade: ${grade}):
- Easy: Use mostly Tier 1 (1.3-1.5) and easy Tier 2 (2.4-2.5).
- Medium: Use mostly Tier 2 (2.1-2.3) and some Tier 3 (3.4-3.5).
- Hard: Use mostly Tier 3 (3.1-3.3) and worst Tier 2 (2.1-2.2).

MOVEMENT ARCHETYPES (use as inspiration):
 ${archetypeContext}

RULES:
1. Start holds: Must be in rows 1-6. Provide 1 or 2 start holds. Do NOT place 2 start holds in Row 1.
   - If you use 2 start holds, they MUST be within ${maxReach} units of each other.
2. Finish hold: Must be in rows 16-18. Provide 1 finish hold.
3. Sequence: 3-10 total handholds is ideal.
4. Max Reach Distance: ${maxReach} units.
5. Feet: You MUST designate specific feet. Feet must be positive holds, NEVER underclings.
   - If feet are in the same row as start hands, they MUST be at least 3 columns apart.

OUTPUT FORMAT - Return ONLY valid JSON:
{
  "start": ["HoldID"],
  "intermediate": ["HoldID", ...],
  "finish": ["HoldID"],
  "feet": ["HoldID", ...]
}

CURRENT BOARD LAYOUT (ID | Row | Col | Type | Grade | AngleCategory | ForceDirection | CanGaston | Family | Desc):
 ${boardContext}`;

  let userPrompt = "";
  if (errorFeedback) {
    userPrompt = `The previous attempt failed validation. ERRORS: ${errorFeedback.join(', ')}\nPlease fix the sequence and output the corrected JSON object.`;
  } else {
    userPrompt = `Create a "${style}" problem. Output ONLY the JSON object.`;
  }

  // Check for API key
  if (!process.env.DEEPSEEK_API_KEY) {
    throw new Error("DEEPSEEK_API_KEY environment variable is not set. Please configure it in your Vercel project settings.");
  }

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

  // Handle API errors properly
  if (!response.ok) {
    let errorDetails = `HTTP ${response.status}`;
    try {
      const errorBody = await response.json();
      errorDetails = errorBody.error?.message || errorBody.message || JSON.stringify(errorBody);
    } catch {
      const errorText = await response.text();
      errorDetails = errorText.substring(0, 200);
    }
    throw new Error(`DeepSeek API error: ${errorDetails}`);
  }

  const data = await response.json();
  
  // Safely extract and parse the content
  if (!data.choices || !data.choices[0] || !data.choices[0].message || !data.choices[0].message.content) {
    throw new Error(`Unexpected DeepSeek response structure: ${JSON.stringify(data).substring(0, 200)}`);
  }

  try {
    return JSON.parse(data.choices[0].message.content);
  } catch (parseError) {
    throw new Error(`Failed to parse AI response as JSON: ${parseError.message}`);
  }
}

// ============================================
// MAIN HANDLER
// ============================================

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: "Method not allowed" });

  // Wrap EVERYTHING in try-catch to ensure JSON responses
  try {
    const { holdsMap, userHeight, style, grade } = req.body;

    if (!holdsMap || !userHeight || !style || !grade) {
      return res.status(400).json({ error: "Missing required fields: holdsMap, userHeight, style, grade" });
    }

    // Prepare Spatial Context
    let boardContext = "ID | Row | Col | Type | Grade | AngleCategory | ForceDirection | CanGaston | Family | Desc\n";
    boardContext += "--------------------------------------------------------------------------\n";

    for (const [id, hold] of Object.entries(holdsMap)) {
      const typeStr = Array.isArray(hold.type) ? hold.type.join('/') : hold.type;
      const gradeStr = hold.grade || 'N/A';
      const angleCat = hold.angleCategory || 'N/A';
      const forceDir = hold.forceDirection || 'N/A';
      const canGaston = hold.canGaston !== undefined ? hold.canGaston : 'N/A';
      const family = hold.holdFamily || 'none';

      let orientDesc = `${hold.desc || ""} ${hold.notes || ""}`.replace(/\n/g, ' ').trim();
      if (orientDesc.length > 40) orientDesc = orientDesc.substring(0, 40) + '...';

      boardContext += `${id} | ${hold.row} | ${hold.col} | ${typeStr} | ${gradeStr} | ${angleCat} | ${forceDir} | ${canGaston} | ${family} | ${orientDesc}\n`;
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

  } catch (error) {
    // Log the full error for debugging
    console.error("Handler error:", error);
    
    // Always return JSON, never let Vercel return HTML
    return res.status(500).json({ 
      error: `Internal server error: ${error.message}` 
    });
  }
}