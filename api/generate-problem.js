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
    description: "Dynamic move to a hold that's 'almost a jug' — good enough to catch but requires commitment.",
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
    keyPrinciple: "Toe hooks are the inverse of heel hooks — they pull from above.",
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
// LAYER 2: HELPERS
// ============================================

const calculateDistance = (p1, p2) => {
  return Math.sqrt(Math.pow(p1.row - p2.row, 2) + Math.pow(p1.col - p2.col, 2));
};

/**
 * Get the compass direction of a move between two holds.
 * Row increases upward, Col increases rightward.
 */
const getMoveDirection = (from, to) => {
  const dr = to.row - from.row;
  const dc = to.col - from.col;

  if (dr === 0 && dc === 0) return 'same';
  if (dr > 0 && dc === 0) return 'up';
  if (dr > 0 && dc > 0) return 'up-right';
  if (dr === 0 && dc > 0) return 'right';
  if (dr < 0 && dc > 0) return 'down-right';
  if (dr < 0 && dc === 0) return 'down';
  if (dr < 0 && dc < 0) return 'down-left';
  if (dr === 0 && dc < 0) return 'left';
  if (dr > 0 && dc < 0) return 'up-left';
  return 'other';
};

// ============================================
// LAYER 3: VALIDATORS
// ============================================

/**
 * HARD validation for intermediate holds.
 * These must pass before moving to Phase 2.
 */
const validateIntermediate = (intermediate, holdsMap, maxReach, startIds, finishIds) => {
  const errors = [];
  const allHands = [...startIds, ...intermediate, ...finishIds];

  // 1. Total sequence length (including start + finish)
  if (allHands.length < 3) errors.push(`Total sequence too short (${allHands.length}). Need at least 3.`);
  if (allHands.length > 10) errors.push(`Total sequence too long (${allHands.length}). Max 10.`);

  // 2. No duplicates
  const seen = new Set();
  for (const id of allHands) {
    if (seen.has(id)) errors.push(`Duplicate hold: ${id}`);
    seen.add(id);
  }

  // 3. All intermediate holds exist on the board
  for (const id of intermediate) {
    if (!holdsMap[id]) errors.push(`Hold "${id}" does not exist on the board.`);
  }

  // 4. Reach: check every consecutive pair in the full sequence
  for (let i = 0; i < allHands.length - 1; i++) {
    const from = holdsMap[allHands[i]];
    const to = holdsMap[allHands[i + 1]];
    if (!from || !to) continue; // Missing hold already reported
    const dist = calculateDistance(from, to);
    if (dist > maxReach) {
      errors.push(`${allHands[i]} → ${allHands[i + 1]} = ${dist.toFixed(1)} units (max ${maxReach}).`);
    }
  }

  return { valid: errors.length === 0, errors };
};

/**
 * QUALITY validation for the full sequence.
 * These trigger retries but don't hard-fail the request.
 */
const validateQuality = (intermediate, holdsMap, startIds, finishIds) => {
  const warnings = [];
  const allHands = [...startIds, ...intermediate, ...finishIds];

  if (allHands.length < 4) return { valid: true, warnings }; // Too short to evaluate quality

  // --- Direction Analysis ---
  const directions = [];
  for (let i = 0; i < allHands.length - 1; i++) {
    const from = holdsMap[allHands[i]];
    const to = holdsMap[allHands[i + 1]];
    if (from && to) directions.push(getMoveDirection(from, to));
  }

  // Count direction changes (transitions between different directions)
  let directionChanges = 0;
  for (let i = 1; i < directions.length; i++) {
    if (directions[i] !== directions[i - 1] && directions[i] !== 'same' && directions[i - 1] !== 'same') {
      directionChanges++;
    }
  }

  if (directionChanges < 2) {
    warnings.push(`Only ${directionChanges} direction change(s). Need at least 2 for interesting movement.`);
  }

  // Count max consecutive same-direction moves
  let consecCount = 1;
  let maxConsec = 1;
  for (let i = 1; i < directions.length; i++) {
    if (directions[i] === directions[i - 1] && directions[i] !== 'same') {
      consecCount++;
      maxConsec = Math.max(maxConsec, consecCount);
    } else {
      consecCount = 1;
    }
  }

  if (maxConsec > 2) {
    warnings.push(`${maxConsec} consecutive moves in the same direction. Max 2 allowed.`);
  }

  // --- Hold Type Diversity ---
  const types = new Set();
  for (const id of allHands) {
    const hold = holdsMap[id];
    if (hold) {
      const t = Array.isArray(hold.type) ? hold.type : [hold.type];
      t.forEach(type => { if (type) types.add(type.toLowerCase()); });
    }
  }

  if (types.size < 2) {
    warnings.push(`Only 1 hold type used ([${[...types].join(', ')}]). Need at least 2 different types.`);
  }

  return { valid: warnings.length === 0, warnings };
};

/**
 * Light validation for feet (Phase 2).
 * Warnings only — never blocks the response.
 */
const validateFeet = (feet, holdsMap, startIds) => {
  const warnings = [];

  for (const footId of feet) {
    const foot = holdsMap[footId];
    if (!foot) { warnings.push(`Foot "${footId}" does not exist.`); continue; }

    const footTypes = Array.isArray(foot.type) ? foot.type : [foot.type];
    if (footTypes.some(t => t && t.toLowerCase().includes('undercling'))) {
      warnings.push(`Foot ${footId} is an undercling — not ideal for feet.`);
    }

    for (const handId of startIds) {
      const hand = holdsMap[handId];
      if (hand && hand.row === foot.row) {
        const colDist = Math.abs(hand.col - foot.col);
        if (colDist < 3) {
          warnings.push(`Foot ${footId} too close to start hand ${handId} (same row, ${colDist} cols apart).`);
        }
      }
    }
  }

  return { valid: warnings.length === 0, warnings };
};

// ============================================
// LAYER 4: CONTEXT BUILDERS
// ============================================

/**
 * Build filtered board context for Phase 1 (intermediate generation).
 * Only includes: start holds, finish holds, and holds in between.
 */
function buildIntermediateContext(holdsMap, startIds, finishIds) {
  const startRows = startIds.map(id => holdsMap[id]?.row).filter(Boolean);
  const finishRows = finishIds.map(id => holdsMap[id]?.row).filter(Boolean);

  const minRow = Math.max(1, Math.min(...startRows) - 1);
  const maxRow = Math.min(18, Math.max(...finishRows) + 1);

  let ctx = "ID | Row | Col | Type | Grade | Angle | Force | Gaston | Family | Desc\n";
  ctx += "------------------------------------------------------------------------\n";

  for (const [id, hold] of Object.entries(holdsMap)) {
    const isStart = startIds.includes(id);
    const isFinish = finishIds.includes(id);

    // Only include start, finish, and holds in the intermediate zone
    if (!isStart && !isFinish && (hold.row < minRow || hold.row > maxRow)) continue;

    const typeStr = Array.isArray(hold.type) ? hold.type.join('/') : (hold.type || 'N/A');
    const gradeStr = hold.grade || 'N/A';
    const angleCat = hold.angleCategory || 'N/A';
    const forceDir = hold.forceDirection || 'N/A';
    const canGaston = hold.canGaston !== undefined ? hold.canGaston : 'N/A';
    const family = hold.holdFamily || 'none';

    let desc = `${hold.desc || ""} ${hold.notes || ""}`.replace(/\n/g, ' ').trim();
    if (desc.length > 35) desc = desc.substring(0, 35) + '…';

    const marker = isStart ? ' ← START' : isFinish ? ' ← FINISH' : '';
    ctx += `${id} | ${hold.row} | ${hold.col} | ${typeStr} | ${gradeStr} | ${angleCat} | ${forceDir} | ${canGaston} | ${family} | ${desc}${marker}\n`;
  }

  return ctx;
}

/**
 * Build focused board context for Phase 2 (feet generation).
 * Only includes holds near the hand sequence.
 */
function buildFeetContext(holdsMap, fullProblem) {
  const allHandIds = [
    ...(fullProblem.start || []),
    ...(fullProblem.intermediate || []),
    ...(fullProblem.finish || [])
  ];

  const handRows = allHandIds.map(id => holdsMap[id]?.row).filter(Boolean);
  const handCols = allHandIds.map(id => holdsMap[id]?.col).filter(Boolean);

  const minRow = Math.max(1, Math.min(...handRows) - 2);
  const maxRow = Math.max(...handRows);
  const minCol = Math.max(1, Math.min(...handCols) - 4);
  const maxCol = Math.min(17, Math.max(...handCols) + 4);

  // Build hand detail summary
  const handDetails = allHandIds.map(id => {
    const h = holdsMap[id];
    if (!h) return `${id}: UNKNOWN`;
    const t = Array.isArray(h.type) ? h.type.join('/') : h.type;
    return `${id}: row=${h.row} col=${h.col} type=${t} angle=${h.angleCategory || 'N/A'} force=${h.forceDirection || 'N/A'} gaston=${h.canGaston}`;
  }).join('\n');

  let ctx = "ID | Row | Col | Type | Grade | Angle | Force | Desc\n";
  ctx += "--------------------------------------------------\n";

  for (const [id, hold] of Object.entries(holdsMap)) {
    if (hold.row < minRow || hold.row > maxRow) continue;
    if (hold.col < minCol || hold.col > maxCol) continue;

    const typeStr = Array.isArray(hold.type) ? hold.type.join('/') : (hold.type || 'N/A');
    const gradeStr = hold.grade || 'N/A';
    const angleCat = hold.angleCategory || 'N/A';
    const forceDir = hold.forceDirection || 'N/A';

    let desc = `${hold.desc || ""}`.replace(/\n/g, ' ').trim();
    if (desc.length > 30) desc = desc.substring(0, 30) + '…';

    const marker = allHandIds.includes(id) ? ' [HAND]' : '';
    ctx += `${id} | ${hold.row} | ${hold.col} | ${typeStr} | ${gradeStr} | ${angleCat} | ${forceDir} | ${desc}${marker}\n`;
  }

  return { handDetails, boardTable: ctx };
}

// ============================================
// LAYER 5: LLM CALL
// ============================================

function getRandomArchetypes(count = 3) {
  const shuffled = [...MOVEMENT_ARCHETYPES].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function formatArchetypes(archetypes) {
  return archetypes.map(a =>
    `## ${a.name}\n${a.description}\nProfile: ${a.holdProfile}\nPrinciple: ${a.keyPrinciple}\nExample: ${a.exampleConfigurations[0]}`
  ).join('\n\n');
}

async function callDeepSeek(context, userHeight, style, grade, feedback, phase, extra = {}) {
  const maxReach = Math.floor(0.75 * userHeight / 15);

  if (!process.env.DEEPSEEK_API_KEY) {
    throw new Error("DEEPSEEK_API_KEY environment variable is not set.");
  }

  let systemPrompt = '';
  let userPrompt = '';

  if (phase === 'intermediate') {
    // ==========================================
    // PHASE 1: Generate intermediate holds only
    // ==========================================
    const archetypes = formatArchetypes(getRandomArchetypes(3));

    systemPrompt = `You are an expert Kilter Board routesetter.
Your ONLY job is to select INTERMEDIATE handholds between a fixed START and a fixed FINISH.
Do NOT change the start or finish. Do NOT generate feet.

SPATIAL ORIENTATION (CRITICAL):
- Row 1 = BOTTOM of the climbing wall (floor level)
- Row 18 = TOP of the climbing wall (ceiling level)
- Climbers move UPWARD from low row numbers to high row numbers
- Column A (col 1) is the LEFT side, Column Q (col 17) is the RIGHT side

FIXED START HOLDS:
 ${extra.startDetails}

FIXED FINISH HOLD:
 ${extra.finishDetails}

HOLD PROPERTIES:
- Tier 1 = Jug (grades 1.1-1.5). Tier 2 = Medium (2.1-2.5). Tier 3 = Crimp (3.1-3.5)
- .1 = worst in tier, .5 = best in tier
- angleCategory: vertical, angled-left, angled-right, sidepull-left, sidepull-right, undercling-left, undercling-right
- forceDirection: down, down-left, down-right, left, right, up, up-left, up-right, outward-left, outward-right
- canGaston: true/false

BIOMECHANICS:
- Gaston: Any angled/sidepull hold becomes a gaston when body position forces outward pull
- Undercling "angled-left" = pulls up-and-right = natural for LEFT hand, awkward for RIGHT hand
- Vertical pinches are hardest; angled pinches are more positive
- Slopers: body must stay directly under the hold

DIFFICULTY (${grade}):
- Easy: Mostly Tier 1 (1.3-1.5) + easy Tier 2 (2.4-2.5)
- Medium: Mostly Tier 2 (2.1-2.3) + some Tier 3 (3.4-3.5)
- Hard: Mostly Tier 3 (3.1-3.3) + worst Tier 2 (2.1-2.2)

MOVEMENT INSPIRATION (do NOT copy these exactly):
 ${archetypes}

STRICT RULES:
1. Generate 1-8 intermediate holds
2. First intermediate must be within ${maxReach} units of the LAST start hold
3. Last intermediate must be within ${maxReach} units of the finish hold
4. Every consecutive pair must be within ${maxReach} units
5. No duplicates — do NOT reuse start or finish hold IDs
6. DIRECTION CHANGES: At least 2 changes in movement direction across the full sequence
7. NO MORE THAN 2 consecutive moves in the same direction (e.g., no 3 "up-right" moves in a row)
8. Use at least 2 different hold types (e.g., mix crimps, slopers, sidepulls, pinches)
9. Do NOT create diagonal ladders or straight lines

MOVEMENT PATTERN TO AVOID (boring diagonal):
start → [hold 2 rows up + 2 cols right] → [hold 2 rows up + 2 cols right] → [hold 2 rows up + 2 cols right] → finish

MOVEMENT PATTERN TO AIM FOR (interesting with direction changes):
start → [hold slightly left and up] → [hold far right and up] → [hold back left and up] → [hold right and up] → finish

OUTPUT — Return ONLY this JSON:
{"intermediate": ["HoldID", ...]}

AVAILABLE HOLDS (marked ← START / ← FINISH):
 ${context}`;

    if (feedback) {
      userPrompt = `FIX THESE ISSUES with the intermediate sequence:\n${feedback.join('\n')}\n\nOutput the corrected JSON.`;
    } else {
      userPrompt = `Create "${style}" intermediate holds. Output ONLY the JSON.`;
    }

  } else if (phase === 'feet') {
    // ==========================================
    // PHASE 2: Generate feet only
    // ==========================================

    systemPrompt = `You are an expert Kilter Board routesetter.
Your ONLY job is to select FEET for a given hand sequence.

SPATIAL ORIENTATION:
- Row 1 = BOTTOM of wall. Row 18 = TOP of wall.
- Climbers move upward from low to high row numbers.

HAND SEQUENCE (with properties):
 ${context.handDetails}

FEET RULES:
1. Feet must be POSITIVE holds: jugs, good crimps, good pinches, edges.
2. NEVER use underclings as feet.
3. Feet should generally be BELOW or level with the hand they support.
4. SIDEPULL hands: place opposing foot on the OPPOSITE side to prevent barn-dooring.
   - Left-facing sidepull → right-side foot pressure
   - Right-facing sidepull → left-side foot pressure
5. GASTON hands: need high opposing foot on the opposite side.
6. Start feet: near start hands but NOT in same row within 3 columns.
7. Select 2-5 feet total.
8. Do NOT reuse hold IDs that are already in the hand sequence.
9. Every foot ID must exist in the board layout below.

OUTPUT — Return ONLY this JSON:
{"feet": ["FootID", ...]}

AVAILABLE HOLDS ([HAND] = already used, do not select these):
 ${context.boardTable}`;

    userPrompt = `Select appropriate feet for this hand sequence. Output ONLY the JSON.`;
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
      response_format: { type: "json_object" },
      temperature: 0.7
    })
  });

  if (!response.ok) {
    let errorDetails = `HTTP ${response.status}`;
    try {
      const errBody = await response.json();
      errorDetails = errBody.error?.message || errBody.message || JSON.stringify(errBody);
    } catch {
      errorDetails = await response.text().then(t => t.substring(0, 300));
    }
    throw new Error(`DeepSeek API error: ${errorDetails}`);
  }

  const data = await response.json();

  if (!data.choices?.[0]?.message?.content) {
    throw new Error(`Unexpected API response: ${JSON.stringify(data).substring(0, 200)}`);
  }

  try {
    return JSON.parse(data.choices[0].message.content);
  } catch (e) {
    throw new Error(`Failed to parse AI response: ${e.message}`);
  }
}

// ============================================
// LAYER 6: MAIN HANDLER
// ============================================

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: "Method not allowed" });

  try {
    const { holdsMap, userHeight, style, grade, start, finish } = req.body;

    if (!holdsMap || !userHeight || !style || !grade || !start || !finish) {
      return res.status(400).json({
        error: "Missing required fields: holdsMap, userHeight, style, grade, start, finish"
      });
    }

    if (!Array.isArray(start) || start.length < 1 || start.length > 2) {
      return res.status(400).json({ error: "start must be an array of 1-2 hold IDs." });
    }
    if (!Array.isArray(finish) || finish.length !== 1) {
      return res.status(400).json({ error: "finish must be an array of exactly 1 hold ID." });
    }

    // Verify holds exist
    for (const id of [...start, ...finish]) {
      if (!holdsMap[id]) {
        return res.status(400).json({ error: `Hold "${id}" not found in holdsMap.` });
      }
    }

    const maxReach = Math.floor(0.75 * userHeight / 15);

    // Build start/finish detail strings for the prompt
    const buildHoldDetail = (id) => {
      const h = holdsMap[id];
      const t = Array.isArray(h.type) ? h.type.join('/') : h.type;
      return `${id}: row=${h.row} col=${h.col} type=${t} grade=${h.grade || 'N/A'} angle=${h.angleCategory || 'N/A'} force=${h.forceDirection || 'N/A'} gaston=${h.canGaston}`;
    };

    const startDetails = start.map(buildHoldDetail).join('\n');
    const finishDetails = finish.map(buildHoldDetail).join('\n');

    // ========================================
    // PHASE 1: Generate Intermediate Holds
    // ========================================
    console.log(`[Phase 1] Generating intermediate for "${style}" ${grade}, maxReach=${maxReach}`);
    console.log(`[Phase 1] Start: ${start.join(', ')} | Finish: ${finish.join(', ')}`);

    const intermediateContext = buildIntermediateContext(holdsMap, start, finish);

    let result = await callDeepSeek(
      intermediateContext, userHeight, style, grade,
      null, 'intermediate',
      { startDetails, finishDetails }
    );

    let intermediate = result?.intermediate || [];
    let hardResult = validateIntermediate(intermediate, holdsMap, maxReach, start, finish);
    let qualityResult = hardResult.valid
      ? validateQuality(intermediate, holdsMap, start, finish)
      : { valid: true, warnings: [] };

    let attempts = 0;
    const MAX_ATTEMPTS = 5;

    while ((!hardResult.valid || !qualityResult.valid) && attempts < MAX_ATTEMPTS) {
      attempts++;

      // Build feedback: hard errors take priority, then quality warnings
      const feedback = [];
      if (!hardResult.valid) {
        feedback.push(...hardResult.errors.map(e => `ERROR: ${e}`));
      } else if (!qualityResult.valid) {
        feedback.push(...qualityResult.warnings.map(w => `QUALITY: ${w}`));
      }

      console.log(`[Phase 1] Retry ${attempts}/${MAX_ATTEMPTS}: ${feedback.slice(0, 3).join(' | ')}`);

      result = await callDeepSeek(
        intermediateContext, userHeight, style, grade,
        feedback, 'intermediate',
        { startDetails, finishDetails }
      );

      intermediate = result?.intermediate || [];
      hardResult = validateIntermediate(intermediate, holdsMap, maxReach, start, finish);
      qualityResult = hardResult.valid
        ? validateQuality(intermediate, holdsMap, start, finish)
        : { valid: true, warnings: [] };
    }

    if (!hardResult.valid) {
      console.error(`[Phase 1] FAILED after ${MAX_ATTEMPTS} attempts:`, hardResult.errors);
      return res.status(200).json({
        start,
        intermediate,
        finish,
        warning: `Could not generate valid sequence after ${MAX_ATTEMPTS} attempts.`,
        errors: hardResult.errors
      });
    }

    console.log(`[Phase 1] ✓ Valid: ${start.join(',')} → ${intermediate.join(' → ')} → ${finish.join(',')}`);

    // ========================================
    // PHASE 2: Generate Feet
    // ========================================
    console.log(`[Phase 2] Generating feet...`);

    const fullProblem = { start, intermediate, finish };
    const feetContext = buildFeetContext(holdsMap, fullProblem);

    let feetResult = null;
    let feetWarnings = [];
    let feetAttempts = 0;

    try {
      feetResult = await callDeepSeek(
        feetContext, userHeight, style, grade,
        null, 'feet'
      );

      if (feetResult?.feet) {
        const feetValidation = validateFeet(feetResult.feet, holdsMap, start);

        while (!feetValidation.valid && feetAttempts < 2) {
          feetAttempts++;
          console.log(`[Phase 2] Feet retry ${feetAttempts}:`, feetValidation.warnings);

          feetResult = await callDeepSeek(
            feetContext, userHeight, style, grade,
            feetValidation.warnings, 'feet'
          );

          if (feetResult?.feet) {
            feetValidation = validateFeet(feetResult.feet, holdsMap, start);
          }
        }

        if (!feetValidation.valid) {
          feetWarnings = feetValidation.warnings;
        }
      }
    } catch (feetError) {
      console.warn(`[Phase 2] Feet generation failed:`, feetError.message);
    }

    // ========================================
    // Assemble Result
    // ========================================
    const finalProblem = {
      start,
      intermediate,
      finish,
      feet: feetResult?.feet || []
    };

    // Attach quality warnings if any survived
    const allWarnings = [];
    if (!qualityResult.valid) allWarnings.push(...qualityResult.warnings);
    if (feetWarnings.length > 0) allWarnings.push(...feetWarnings);

    if (allWarnings.length > 0) {
      finalProblem.feetWarnings = allWarnings;
    }

    console.log(`[Complete] ${finalProblem.start.length} start + ${finalProblem.intermediate.length} intermediate + ${finalProblem.finish.length} finish + ${finalProblem.feet.length} feet`);

    return res.status(200).json(finalProblem);

  } catch (error) {
    console.error("[Handler Error]", error);
    return res.status(500).json({
      error: `Internal server error: ${error.message}`
    });
  }
}