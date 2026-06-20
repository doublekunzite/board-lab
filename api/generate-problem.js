// ============================================
// LAYER 1: DATA (Movement Archetypes)
// ============================================

const MOVEMENT_ARCHETYPES = [
  {
    id: "compression-sidepulls",
    name: "Compression Sidepulls",
    description: "Two opposing sidepulls or steeply angled holds facing each other, requiring body tension between them.",
    holdProfile: "2x sidepull (opposing) or 2x angled hold (60°+ opposing) + feet for opposition",
    keyPrinciple: "Opposing force vectors create stability without needing positive downward pulls.",
    exampleConfigurations: ["Left sidepull + right sidepull, feet below", "Left 70° angled + right 70° angled, feet staggered"]
  },
  {
    id: "gaston-sequence",
    name: "Gaston Sequence",
    description: "Using a hold with outward pull direction (elbow up, hand pushing away from body).",
    holdProfile: "1x angled hold (30°+) or sidepull used as gaston + 1x positive hold for counterbalance",
    keyPrinciple: "Gaston is a movement, not a hold type. Any angled or sidepull hold can become a gaston depending on body position.",
    exampleConfigurations: ["Left hand gaston on 45° right-angled hold + right hand on jug", "Right hand gaston on sidepull-left + left hand undercling"]
  },
  {
    id: "undercling-pullthrough",
    name: "Undercling Pull-Through",
    description: "Start on an undercling, pull up and through to a positive hold above.",
    holdProfile: "1x undercling + 1x jug/crimp above + feet high for opposition",
    keyPrinciple: "Undercling angle determines optimal hand: angled left = left hand natural, right hand awkward.",
    exampleConfigurations: ["Vertical undercling + jug directly above", "Undercling angled 45° left + finish on right-side jug"]
  },
  {
    id: "sloper-stack",
    name: "Sloper Stack",
    description: "Two slopers in sequence, requiring open-hand grip and precise body positioning.",
    holdProfile: "2x sloper (can be same or opposing angles) + precise foot placement",
    keyPrinciple: "Slopers reward body tension and punish poor positioning.",
    exampleConfigurations: ["Left sloper + right sloper, feet directly below", "Sloper gaston + opposing sloper, drop knee"]
  },
  {
    id: "deadpoint-nearlyjug",
    name: "Deadpoint to Nearly-Jug",
    description: "Dynamic move to a hold that's 'almost a jug'—good enough to catch but requires commitment.",
    holdProfile: "1x nearly-jug crimp/sloper (grade 2.3-2.5) + launch from stable base",
    keyPrinciple: "Nearly-jugs are the Kilter Board's signature dynamic targets.",
    exampleConfigurations: ["Jug start + deadpoint to nearly-jug crimp 4 units away", "Sidepull + undercling base, dyno to sloper-jug"]
  },
  {
    id: "pinch-compression",
    name: "Pinch Compression",
    description: "Two pinches facing each other or angled to create inward pull.",
    holdProfile: "2x pinch (opposing or angled inward) + feet for stability",
    keyPrinciple: "Vertical pinches are hardest because thumb-finger opposition is straight-on.",
    exampleConfigurations: ["Left vertical pinch + right vertical pinch, feet wide", "Left 45° angled pinch + right 45° angled pinch"]
  },
  {
    id: "crimp-ladder-directionchange",
    name: "Crimp Ladder with Direction Change",
    description: "Sequence of small crimps requiring precise foot swaps and body rotation.",
    holdProfile: "3-4x crimp (varied angles/directions) + feet that follow hand movement",
    keyPrinciple: "Direction changes force body rotation and prevent ladder-style climbing.",
    exampleConfigurations: ["Left sidepull crimp → right angled crimp → left undercling crimp", "Heart-shaped crimp → square-edge crimp → opposite angle"]
  },
  {
    id: "jug-rest-to-crux",
    name: "Jug Rest to Crux",
    description: "A comfortable jug mid-sequence that allows recovery before a hard crux.",
    holdProfile: "1x jug/mega-jug + transition to tier 3 or bad tier 2",
    keyPrinciple: "Rest quality determines crux difficulty.",
    exampleConfigurations: ["Mega-jug at mid-height → 2-unit reach to bad crimp → finish", "Jug → drop knee → gaston crux → match finish"]
  },
  {
    id: "opposition-undercling-sidepull",
    name: "Opposition Undercling + Sidepull",
    description: "Undercling with one hand, sidepull with other, creating upward and sideways force vectors.",
    holdProfile: "1x undercling + 1x sidepull (opposing) + feet below undercling",
    keyPrinciple: "Undercling angle determines hand choice: angled left undercling is natural for left hand.",
    exampleConfigurations: ["Left hand vertical undercling + right hand right sidepull", "Right hand undercling angled 45° left + left hand gaston"]
  },
  {
    id: "drop-knee-setup",
    name: "Drop Knee Setup",
    description: "Hold configuration that invites a drop knee for stability before a big move.",
    holdProfile: "1x good foothold (jug/crimp) + 1x handhold that pulls away from the foot",
    keyPrinciple: "Drop knees convert lateral instability into rotational stability.",
    exampleConfigurations: ["Left foot high on jug + right hand on right-pulling sidepull", "Right foot on good edge + left hand on left-angled hold"]
  },
  {
    id: "heel-hook-tension",
    name: "Heel Hook Tension",
    description: "Using a heel hook to create upward pull and stabilize the body during a reach or lockoff.",
    holdProfile: "1x heel hook hold (usually jug or good edge) + 1x handhold for lockoff",
    keyPrinciple: "Heel hooks convert a hand movement into a full-body tension sequence.",
    exampleConfigurations: ["Right heel on jug + left hand on sidepull + right hand reaches", "Left heel on undercling + right hand on crimp + dyno"]
  },
  {
    id: "toe-hook-compression",
    name: "Toe Hook Compression",
    description: "Toe hook on an upper hold to pull the hips into the wall while hands compress on lower holds.",
    holdProfile: "1x toe hook hold (usually edge or jug) + 2x handholds for compression",
    keyPrinciple: "Toe hooks are the inverse of heel hooks—they pull from above.",
    exampleConfigurations: ["Left toe on upper jug + both hands on lower pinches", "Right toe on sidepull-edge + left hand undercling"]
  },
  {
    id: "barn-door-prevention",
    name: "Barn-Door Prevention",
    description: "Sequence where the natural tendency is to swing off, countered by hold choice and body positioning.",
    holdProfile: "1x sidepull or angled hold + 1x marginal foot + 1x counterbalance hold or flag",
    keyPrinciple: "Barn-doors happen when pulling hand and weighted foot are on same side.",
    exampleConfigurations: ["Right hand right sidepull + left foot high + right leg flagged", "Left hand left-angled hold + right foot on good edge"]
  },
  {
    id: "match-and-shift",
    name: "Match and Shift",
    description: "Matching both hands on a single hold, then shifting weight to free one hand.",
    holdProfile: "1x large matchable hold (jug/mega-jug) + 1x next hold within reach",
    keyPrinciple: "Matching is a rest and a setup. The shift direction determines which hand moves next.",
    exampleConfigurations: ["Match on mega-jug → shift left → right hand reaches crimp", "Match on undercling → shift right → left hand reaches sidepull"]
  },
  {
    id: "cross-through",
    name: "Cross-Through",
    description: "One hand crosses in front of or behind the other to reach the next hold.",
    holdProfile: "2-3 holds in a line or slight diagonal + stable feet",
    keyPrinciple: "Cross-throughs create flow and prevent ladder climbing.",
    exampleConfigurations: ["Left hand jug → right hand crosses left to sidepull", "Right hand crimp → left hand crosses behind to undercling"]
  }
];

// ============================================
// LAYER 2: VALIDATORS (Split for Two-Phase)
// ============================================

const calculateDistance = (p1, p2) => {
  return Math.sqrt(Math.pow(p1.row - p2.row, 2) + Math.pow(p1.col - p2.col, 2));
};

/**
 * Validate hand sequence only (Phase 1)
 * Strict validation - must pass before moving to Phase 2
 */
const validateHands = (problem, holdsMap, maxReach) => {
  const errors = [];

  // Check required fields exist
  if (!problem.start || !Array.isArray(problem.start)) {
    errors.push("Missing or invalid 'start' array.");
    return { valid: false, errors };
  }
  if (!problem.finish || !Array.isArray(problem.finish)) {
    errors.push("Missing or invalid 'finish' array.");
    return { valid: false, errors };
  }
  // intermediate is optional but must be array if present
  const intermediate = Array.isArray(problem.intermediate) ? problem.intermediate : [];
  
  // Build ordered hand sequence
  const allHands = [...problem.start, ...intermediate, ...problem.finish];

  // 1. Sequence Length (3-10 hands)
  if (allHands.length < 3) {
    errors.push(`Sequence too short (${allHands.length} hands). Need at least 3.`);
  }
  if (allHands.length > 10) {
    errors.push(`Sequence too long (${allHands.length} hands). Max 10.`);
  }

  // 2. Start Zone Validation
  if (problem.start.length === 0 || problem.start.length > 2) {
    errors.push(`Start has ${problem.start.length} holds. Must have 1 or 2.`);
  } else {
    let row1Count = 0;
    for (const id of problem.start) {
      const hold = holdsMap[id];
      if (!hold) {
        errors.push(`Start hold "${id}" does not exist on the board.`);
        continue;
      }
      if (hold.row > 6) {
        errors.push(`Start hold ${id} is in row ${hold.row}. Must be rows 1-6.`);
      }
      if (hold.row === 1) row1Count++;
    }
    if (row1Count > 1) {
      errors.push("Cannot have 2 start holds in Row 1.");
    }

    // Start hold spacing
    if (problem.start.length === 2) {
      const h1 = holdsMap[problem.start[0]];
      const h2 = holdsMap[problem.start[1]];
      if (h1 && h2) {
        const dist = calculateDistance(h1, h2);
        if (dist > maxReach) {
          errors.push(`Start holds too far apart: ${dist.toFixed(1)} units (max ${maxReach}).`);
        }
      }
    }
  }

  // 3. Finish Zone Validation
  if (problem.finish.length === 0) {
    errors.push("No finish hold provided.");
  } else {
    for (const id of problem.finish) {
      const hold = holdsMap[id];
      if (!hold) {
        errors.push(`Finish hold "${id}" does not exist on the board.`);
        continue;
      }
      if (hold.row < 16) {
        errors.push(`Finish hold ${id} is in row ${hold.row}. Must be rows 16-18.`);
      }
    }
  }

  // 4. Reach Validation (consecutive hands only)
  for (let i = 0; i < allHands.length - 1; i++) {
    const current = holdsMap[allHands[i]];
    const next = holdsMap[allHands[i + 1]];
    if (!current || !next) continue; // Already reported missing holds above

    const dist = calculateDistance(current, next);
    if (dist > maxReach) {
      errors.push(`Reach too far: ${allHands[i]} → ${allHands[i + 1]} = ${dist.toFixed(1)} units (max ${maxReach}).`);
    }
  }

  // 5. Check for duplicate holds
  const seen = new Set();
  for (const id of allHands) {
    if (seen.has(id)) {
      errors.push(`Hold ${id} appears multiple times in the sequence.`);
    }
    seen.add(id);
  }

  // 6. Check intermediate holds exist
  for (const id of intermediate) {
    if (!holdsMap[id]) {
      errors.push(`Intermediate hold "${id}" does not exist on the board.`);
    }
  }

  return { valid: errors.length === 0, errors };
};

/**
 * Validate feet only (Phase 2)
 * Light validation - warnings, not hard failures
 */
const validateFeet = (problem, holdsMap) => {
  const warnings = [];
  const feet = problem.feet || [];
  const startHands = problem.start || [];

  for (const footId of feet) {
    const foot = holdsMap[footId];
    if (!foot) {
      warnings.push(`Foot hold "${footId}" does not exist.`);
      continue;
    }

    // Normalize type for checking
    const footTypes = Array.isArray(foot.type) ? foot.type : [foot.type];

    // No underclings as feet
    if (footTypes.some(t => t && t.toLowerCase().includes('undercling'))) {
      warnings.push(`Foot ${footId} is an undercling - not ideal for feet.`);
    }

    // Spacing from start hands
    for (const handId of startHands) {
      const hand = holdsMap[handId];
      if (hand && hand.row === foot.row) {
        const colDist = Math.abs(hand.col - foot.col);
        if (colDist < 3) {
          warnings.push(`Foot ${footId} close to start hand ${handId} (same row, ${colDist} cols apart).`);
        }
      }
    }
  }

  return { valid: warnings.length === 0, warnings };
};

// ============================================
// LAYER 3: LLM CALL (Phase-Aware)
// ============================================

function getRandomArchetypes(count = 4) {
  const shuffled = [...MOVEMENT_ARCHETYPES].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function formatArchetypes(archetypes) {
  return archetypes.map(a => 
    `## ${a.name}\n${a.description}\nProfile: ${a.holdProfile}\nPrinciple: ${a.keyPrinciple}\nExample: ${a.exampleConfigurations[0]}`
  ).join('\n\n');
}

/**
 * Call DeepSeek API
 * @param {string} boardContext - Formatted board data
 * @param {number} userHeight - User height in cm
 * @param {string} style - Climbing style
 * @param {string} grade - Difficulty grade
 * @param {string[]|null} errorFeedback - Validation errors to fix
 * @param {'hands'|'feet'} phase - Which phase we're in
 * @param {object|null} handSequence - For Phase 2: the validated hand sequence
 */
async function callDeepSeek(boardContext, userHeight, style, grade, errorFeedback, phase, handSequence = null) {
  const maxReach = Math.floor(0.75 * userHeight / 15);

  // Check for API key BEFORE making the call
  if (!process.env.DEEPSEEK_API_KEY) {
    throw new Error("DEEPSEEK_API_KEY environment variable is not set.");
  }

  let systemPrompt = '';
  let userPrompt = '';

  if (phase === 'hands') {
    // ==========================================
    // PHASE 1 PROMPT: Hands Only
    // ==========================================
    const selectedArchetypes = getRandomArchetypes(4);
    const archetypeContext = formatArchetypes(selectedArchetypes);

    systemPrompt = `You are an expert Kilter Board routesetter.
Your ONLY job is to generate a HAND SEQUENCE. Do NOT include feet.

HOLD GRADING SYSTEM:
- Tier 1 = Jug (grades 1.1-1.5, where .1=worst, .5=best)
- Tier 2 = Medium (grades 2.1-2.5)
- Tier 3 = Crimp (grades 3.1-3.5)

HOLD ANGLE SYSTEM:
- angleCategory: vertical, angled-left, angled-right, sidepull-left, sidepull-right, undercling-left, undercling-right
- forceDirection: down, down-left, down-right, left, right, up, up-left, up-right, outward-left, outward-right
- canGaston: true/false

BIOMECHANICAL RULES:
- Gaston: Any angled/sidepull hold can become a gaston when body position forces outward pull
- Undercling angle: "angled left" = pull up-and-right = natural for LEFT hand, awkward for RIGHT hand
- Vertical pinches are hardest; angled pinches are more positive
- Slopers: Body must stay directly under the hold

DIFFICULTY TARGET (${grade}):
- Easy: Mostly Tier 1 (1.3-1.5) + easy Tier 2 (2.4-2.5)
- Medium: Mostly Tier 2 (2.1-2.3) + some Tier 3 (3.4-3.5)
- Hard: Mostly Tier 3 (3.1-3.3) + worst Tier 2 (2.1-2.2)

MOVEMENT ARCHETYPES (use as inspiration):
 ${archetypeContext}

STRICT RULES:
1. Start: 1-2 holds in rows 1-6. NEVER 2 holds in row 1.
2. If 2 start holds, they MUST be within ${maxReach} units of each other.
3. Finish: Exactly 1 hold in rows 16-18.
4. Intermediate: 1-8 holds between start and finish.
5. Total hands: 3-10.
6. Max reach between CONSECUTIVE hands: ${maxReach} units.
7. No duplicate holds.
8. Avoid ladders (straight up one column). Create interesting movement using hold angles and opposition.
9. Every hold ID must exist in the board layout below.

OUTPUT FORMAT - Return ONLY this JSON, nothing else:
{
  "start": ["HoldID1"],
  "intermediate": ["HoldID2", "HoldID3"],
  "finish": ["HoldID4"]
}

BOARD LAYOUT (ID | Row | Col | Type | Grade | Angle | Force | Gaston | Family | Desc):
 ${boardContext}`;

    if (errorFeedback) {
      userPrompt = `FIX THESE ERRORS in the hand sequence:\n${errorFeedback.join('\n')}\n\nOutput the corrected JSON.`;
    } else {
      userPrompt = `Create a "${style}" hand sequence. Output ONLY the JSON.`;
    }

  } else if (phase === 'feet') {
    // ==========================================
    // PHASE 2 PROMPT: Feet Only
    // ==========================================
    
    // Build a summary of the hand sequence with hold details
    const handsDetail = [];
    const allHandIds = [...(handSequence.start || []), ...(handSequence.intermediate || []), ...(handSequence.finish || [])];
    
    // We need to parse the boardContext to get hold info, or we pass holdsMap separately
    // Since we have the hand IDs, we'll describe them in the prompt
    systemPrompt = `You are an expert Kilter Board routesetter.
Your ONLY job is to select FEET for a given hand sequence.

HAND SEQUENCE:
 ${JSON.stringify(handSequence, null, 2)}

FEET SELECTION RULES:
1. Feet must be POSITIVE holds: jugs, good crimps, good pinches, edges.
2. NEVER use underclings as feet.
3. Feet should generally be BELOW or level with the hand they support.
4. For SIDEPULL hands: place opposing foot on the OPPOSITE side to prevent barn-dooring.
   - Left-facing sidepull → need right-side foot pressure
   - Right-facing sidepull → need left-side foot pressure
5. For GASTON hands: need high opposing foot on the opposite side.
6. Start feet: near start hands but NOT in same row within 3 columns.
7. Select 2-5 feet total.
8. Every foot ID must exist in the board layout below.

OUTPUT FORMAT - Return ONLY this JSON:
{
  "feet": ["FootID1", "FootID2", "FootID3"]
}

BOARD LAYOUT (ID | Row | Col | Type | Grade | Angle | Force | Gaston | Family | Desc):
 ${boardContext}`;

    userPrompt = `Select appropriate feet for this hand sequence. Output ONLY the JSON with "feet" array.`;
  }

  // Make the API call
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
      response_format: { type: "json_object" },
      temperature: 0.7
    })
  });

  // Handle API errors
  if (!response.ok) {
    let errorDetails = `HTTP ${response.status}`;
    try {
      const errorBody = await response.json();
      errorDetails = errorBody.error?.message || errorBody.message || JSON.stringify(errorBody);
    } catch {
      const errorText = await response.text();
      errorDetails = errorText.substring(0, 300);
    }
    throw new Error(`DeepSeek API error: ${errorDetails}`);
  }

  const data = await response.json();

  // Validate response structure
  if (!data.choices?.[0]?.message?.content) {
    throw new Error(`Unexpected API response: ${JSON.stringify(data).substring(0, 200)}`);
  }

  // Parse the JSON content
  try {
    return JSON.parse(data.choices[0].message.content);
  } catch (parseError) {
    throw new Error(`Failed to parse AI response: ${parseError.message}`);
  }
}

// ============================================
// HELPER: Build Board Context String
// ============================================

function buildBoardContext(holdsMap) {
  let ctx = "ID | Row | Col | Type | Grade | Angle | Force | Gaston | Family | Desc\n";
  ctx += "------------------------------------------------------------------------\n";

  for (const [id, hold] of Object.entries(holdsMap)) {
    const typeStr = Array.isArray(hold.type) ? hold.type.join('/') : (hold.type || 'N/A');
    const gradeStr = hold.grade || 'N/A';
    const angleCat = hold.angleCategory || 'N/A';
    const forceDir = hold.forceDirection || 'N/A';
    const canGaston = hold.canGaston !== undefined ? hold.canGaston : 'N/A';
    const family = hold.holdFamily || 'none';
    
    let desc = `${hold.desc || ""} ${hold.notes || ""}`.replace(/\n/g, ' ').trim();
    if (desc.length > 35) desc = desc.substring(0, 35) + '…';

    ctx += `${id} | ${hold.row} | ${hold.col} | ${typeStr} | ${gradeStr} | ${angleCat} | ${forceDir} | ${canGaston} | ${family} | ${desc}\n`;
  }

  return ctx;
}

// ============================================
// MAIN HANDLER (Two-Phase Architecture)
// ============================================

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: "Method not allowed" });

  // Top-level try-catch to ALWAYS return JSON
  try {
    const { holdsMap, userHeight, style, grade } = req.body;

    if (!holdsMap || !userHeight || !style || !grade) {
      return res.status(400).json({ 
        error: "Missing required fields: holdsMap, userHeight, style, grade" 
      });
    }

    const maxReach = Math.floor(0.75 * userHeight / 15);
    const boardContext = buildBoardContext(holdsMap);

    // ========================================
    // PHASE 1: Generate Hand Sequence
    // ========================================
    console.log(`[Phase 1] Generating hands for "${style}" ${grade}, maxReach=${maxReach}`);

    let handsResult = await callDeepSeek(boardContext, userHeight, style, grade, null, 'hands');
    let handValidation = validateHands(handsResult, holdsMap, maxReach);

    // Retry loop for hands (strict - must pass)
    let handAttempts = 0;
    const MAX_HAND_ATTEMPTS = 5;

    while (!handValidation.valid && handAttempts < MAX_HAND_ATTEMPTS) {
      handAttempts++;
      console.log(`[Phase 1] Validation failed (attempt ${handAttempts}/${MAX_HAND_ATTEMPTS}):`, handValidation.errors);
      
      handsResult = await callDeepSeek(
        boardContext, userHeight, style, grade, 
        handValidation.errors, 'hands'
      );
      
      if (handsResult) {
        handValidation = validateHands(handsResult, holdsMap, maxReach);
      } else {
        console.log(`[Phase 1] API returned null on attempt ${handAttempts}`);
      }
    }

    // If hands still invalid after all retries, fail
    if (!handValidation.valid) {
      console.error(`[Phase 1] FAILED after ${MAX_HAND_ATTEMPTS} attempts:`, handValidation.errors);
      return res.status(200).json({
        ...handsResult,
        warning: `Could not generate valid hand sequence after ${MAX_HAND_ATTEMPTS} attempts.`,
        errors: handValidation.errors
      });
    }

    console.log(`[Phase 1] ✓ Valid hand sequence:`, {
      start: handsResult.start,
      intermediate: handsResult.intermediate,
      finish: handsResult.finish
    });

    // ========================================
    // PHASE 2: Generate Feet
    // ========================================
    console.log(`[Phase 2] Generating feet...`);

    let feetResult = null;
    let feetValidation = null;
    let feetAttempts = 0;
    const MAX_FEET_ATTEMPTS = 2;

    try {
      feetResult = await callDeepSeek(
        boardContext, userHeight, style, grade, 
        null, 'feet', handsResult
      );

      if (feetResult?.feet) {
        const fullProblem = { ...handsResult, feet: feetResult.feet };
        feetValidation = validateFeet(fullProblem, holdsMap);

        // Light retry for feet (don't be strict)
        while (!feetValidation.valid && feetAttempts < MAX_FEET_ATTEMPTS) {
          feetAttempts++;
          console.log(`[Phase 2] Feet validation warning (attempt ${feetAttempts}):`, feetValidation.warnings);
          
          feetResult = await callDeepSeek(
            boardContext, userHeight, style, grade,
            feetValidation.warnings, 'feet', handsResult
          );
          
          if (feetResult?.feet) {
            feetValidation = validateFeet({ ...handsResult, feet: feetResult.feet }, holdsMap);
          }
        }
      }
    } catch (feetError) {
      console.warn(`[Phase 2] Feet generation failed:`, feetError.message);
      // Don't fail the whole request - just continue without feet
    }

    // ========================================
    // Assemble Final Result
    // ========================================
    const finalProblem = {
      start: handsResult.start,
      intermediate: handsResult.intermediate || [],
      finish: handsResult.finish,
      feet: feetResult?.feet || []
    };

    // Add feet warnings if any
    if (feetValidation && !feetValidation.valid) {
      finalProblem.feetWarnings = feetValidation.warnings;
    }

    console.log(`[Complete] Problem generated:`, {
      hands: finalProblem.start.length + (finalProblem.intermediate?.length || 0) + finalProblem.finish.length,
      feet: finalProblem.feet.length
    });

    return res.status(200).json(finalProblem);

  } catch (error) {
    console.error("[Handler Error]", error);
    return res.status(500).json({ 
      error: `Internal server error: ${error.message}` 
    });
  }
}