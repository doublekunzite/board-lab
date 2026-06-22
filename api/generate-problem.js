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

const validateIntermediate = (intermediate, holdsMap, maxReach, startIds, finishIds) => {
  const errors = [];
  const allHands = [...startIds, ...intermediate, ...finishIds];

  if (allHands.length < 3) errors.push(`Total sequence too short (${allHands.length}). Need at least 3.`);
  if (allHands.length > 10) errors.push(`Total sequence too long (${allHands.length}). Max 10.`);

  const seen = new Set();
  for (const id of allHands) {
    if (seen.has(id)) errors.push(`Duplicate hold: ${id}`);
    seen.add(id);
  }

  for (const id of intermediate) {
    if (!holdsMap[id]) errors.push(`Hold "${id}" does not exist on the board.`);
  }

  for (let i = 0; i < allHands.length - 1; i++) {
    const from = holdsMap[allHands[i]];
    const to = holdsMap[allHands[i + 1]];
    if (!from || !to) continue;
    const dist = calculateDistance(from, to);
    if (dist > maxReach) {
      errors.push(`${allHands[i]} → ${allHands[i + 1]} = ${dist.toFixed(1)} units (max ${maxReach}).`);
    }
  }

  return { valid: errors.length === 0, errors };
};

const validateQuality = (intermediate, holdsMap, startIds, finishIds) => {
  const warnings = [];
  const allHands = [...startIds, ...intermediate, ...finishIds];

  if (allHands.length < 4) return { valid: true, warnings };

  const directions = [];
  for (let i = 0; i < allHands.length - 1; i++) {
    const from = holdsMap[allHands[i]];
    const to = holdsMap[allHands[i + 1]];
    if (from && to) directions.push(getMoveDirection(from, to));
  }

  let directionChanges = 0;
  for (let i = 1; i < directions.length; i++) {
    if (directions[i] !== directions[i - 1] && directions[i] !== 'same' && directions[i - 1] !== 'same') {
      directionChanges++;
    }
  }

  if (directionChanges < 2) {
    warnings.push(`Only ${directionChanges} direction change(s). Need at least 2 for interesting movement.`);
  }

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

// ============================================
// LAYER 3B: FOOT PAIRING VALIDATOR
// ============================================

/**
 * Validates that each foot is intentionally paired with a specific handhold.
 * Rules:
 * 1. Every foot must be below its paired hand (lower row number)
 * 2. Foot must be within reasonable horizontal distance (not scrunched)
 * 3. Foot must not be in the same row as its paired hand
 * 4. Foot must not be an undercling
 * 5. Foot must be positive (jugs, crimps, edges — not slopers unless specified)
 * 6. No two feet should occupy the same hold
 */
const validateFootPairing = (feet, handSequence, holdsMap, userHeight) => {
  const warnings = [];
  const usedFootIds = new Set();

  // Calculate ideal foot distance based on height
  // Taller climbers need wider stances
  const minVerticalDist = 1; // at least 1 row below
  const idealHorizontalDist = Math.max(2, Math.min(5, Math.floor(userHeight / 40)));
  const maxVerticalDist = Math.max(3, Math.floor(userHeight / 50)); // rows below hand

  for (let i = 0; i < feet.length; i++) {
    const footId = feet[i];
    const foot = holdsMap[footId];

    if (!foot) {
      warnings.push(`Foot "${footId}" does not exist on the board.`);
      continue;
    }

    if (usedFootIds.has(footId)) {
      warnings.push(`Duplicate foot: ${footId}`);
      continue;
    }
    usedFootIds.add(footId);

    // Check if foot is an undercling
    const footTypes = Array.isArray(foot.type) ? foot.type : [foot.type];
    const isUndercling = footTypes.some(t => t && t.toLowerCase().includes('undercling'));
    if (isUndercling) {
      warnings.push(`Foot ${footId} is an undercling — not usable as a foothold.`);
    }

    // Find the paired handhold (cycle through hand sequence)
    const pairedHandIndex = i % handSequence.length;
    const pairedHandId = handSequence[pairedHandIndex];
    const pairedHand = holdsMap[pairedHandId];

    if (!pairedHand) continue;

    // Rule: foot must be below paired hand
    const verticalDist = pairedHand.row - foot.row;
    if (verticalDist < minVerticalDist) {
      warnings.push(`Foot ${footId} (row ${foot.row}) is not below paired hand ${pairedHandId} (row ${pairedHand.row}). Need at least ${minVerticalDist} row(s) below.`);
    }
    if (verticalDist > maxVerticalDist) {
      warnings.push(`Foot ${footId} (row ${foot.row}) is too far below paired hand ${pairedHandId} (row ${pairedHand.row}). Max ${maxVerticalDist} rows below.`);
    }

    // Rule: foot must not be in same row as paired hand
    if (foot.row === pairedHand.row) {
      warnings.push(`Foot ${footId} is in the same row as paired hand ${pairedHandId} — awkward body position.`);
    }

    // Rule: horizontal distance should be reasonable
    const horizontalDist = Math.abs(foot.col - pairedHand.col);
    if (horizontalDist < 1) {
      warnings.push(`Foot ${footId} is directly below paired hand ${pairedHandId} — too scrunched.`);
    }
    if (horizontalDist > idealHorizontalDist + 2) {
      warnings.push(`Foot ${footId} is too far horizontally from paired hand ${pairedHandId} (${horizontalDist} cols vs ideal ~${idealHorizontalDist}).`);
    }

    // Rule: foot should be on the opposite side of the body from the hand it's supporting
    // (prevents barn-dooring)
    const handForce = pairedHand.forceDirection || '';
    if (handForce.includes('left') && foot.col < pairedHand.col) {
      warnings.push(`Foot ${footId} is on the same side as left-pulling hand ${pairedHandId} — risk of barn-door.`);
    }
    if (handForce.includes('right') && foot.col > pairedHand.col) {
      warnings.push(`Foot ${footId} is on the same side as right-pulling hand ${pairedHandId} — risk of barn-door.`);
    }
  }

  return { valid: warnings.length === 0, warnings };
};

// ============================================
// LAYER 4: CONTEXT BUILDERS
// ============================================

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
 * Build foot pairing context for Phase 2.
 * Each handhold gets paired with an intentional foot.
 */
function buildFootPairingContext(holdsMap, fullProblem, userHeight) {
  const allHandIds = [
    ...(fullProblem.start || []),
    ...(fullProblem.intermediate || []),
    ...(fullProblem.finish || [])
  ];

  const handRows = allHandIds.map(id => holdsMap[id]?.row).filter(Boolean);
  const handCols = allHandIds.map(id => holdsMap[id]?.col).filter(Boolean);

  const minRow = Math.max(1, Math.min(...handRows) - 3);
  const maxRow = Math.max(...handRows);
  const minCol = Math.max(1, Math.min(...handCols) - 5);
  const maxCol = Math.min(17, Math.max(...handCols) + 5);

  // Build hand sequence with pairing instructions
  const handDetails = allHandIds.map((id, idx) => {
    const h = holdsMap[id];
    if (!h) return `${id}: UNKNOWN`;
    const t = Array.isArray(h.type) ? h.type.join('/') : h.type;
    const force = h.forceDirection || 'N/A';
    const angle = h.angleCategory || 'N/A';

    // Determine ideal foot position for this hand
    let idealFoot = "";
    if (force.includes('left')) {
      idealFoot = "Place foot on RIGHT side, below this hand";
    } else if (force.includes('right')) {
      idealFoot = "Place foot on LEFT side, below this hand";
    } else if (force.includes('down')) {
      idealFoot = "Place foot directly below or slightly to either side";
    } else {
      idealFoot = "Place foot below and slightly to the side for stability";
    }

    return `HAND ${idx + 1}: ${id} | row=${h.row} col=${h.col} | type=${t} | force=${force} | angle=${angle} | IDEAL FOOT: ${idealFoot}`;
  }).join('\n');

  const minVerticalDist = 1;
  const idealHDist = Math.max(2, Math.min(5, Math.floor(userHeight / 40)));
  const maxVDist = Math.max(3, Math.floor(userHeight / 50));

  let ctx = `FOOT PAIRING RULES (based on user height ${userHeight}cm):\n`;
  ctx += `- Each foot must be paired with a specific handhold below\n`;
  ctx += `- Foot must be ${minVerticalDist}-${maxVDist} rows BELOW its paired hand\n`;
  ctx += `- Foot must be ~${idealHDist} columns horizontally from its paired hand\n`;
  ctx += `- Foot must NOT be in the same row as its paired hand\n`;
  ctx += `- Foot must NOT be an undercling\n`;
  ctx += `- Foot should be on the OPPOSITE side from the hand's pull direction to prevent barn-dooring\n`;
  ctx += `- Select ${allHandIds.length} feet total (one per handhold)\n\n`;

  ctx += "HAND SEQUENCE (pair each with a foot below):\n";
  ctx += handDetails;
  ctx += "\n\n";

  ctx += "AVAILABLE FOOTHOLDS (do NOT select [HAND] holds):\n";
  ctx += "ID | Row | Col | Type | Grade | Force | Desc\n";
  ctx += "--------------------------------------------------\n";

  for (const [id, hold] of Object.entries(holdsMap)) {
    if (hold.row < minRow || hold.row > maxRow) continue;
    if (hold.col < minCol || hold.col > maxCol) continue;

    const typeStr = Array.isArray(hold.type) ? hold.type.join('/') : (hold.type || 'N/A');
    const gradeStr = hold.grade || 'N/A';
    const forceDir = hold.forceDirection || 'N/A';

    let desc = `${hold.desc || ""}`.replace(/\n/g, ' ').trim();
    if (desc.length > 30) desc = desc.substring(0, 30) + '…';

    const marker = allHandIds.includes(id) ? ' [HAND — DO NOT SELECT]' : '';
    ctx += `${id} | ${hold.row} | ${hold.col} | ${typeStr} | ${gradeStr} | ${forceDir} | ${desc}${marker}\n`;
  }

  return ctx;
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

async function callDeepSeek(context, userHeight, feedback, phase, extra = {}) {
  const maxReach = Math.floor(0.75 * userHeight / 15);

  if (!process.env.DEEPSEEK_API_KEY) {
    throw new Error("DEEPSEEK_API_KEY environment variable is not set.");
  }

  let systemPrompt = '';
  let userPrompt = '';

  if (phase === 'intermediate') {
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

DIFFICULTY (Medium):
- Mostly Tier 2 (2.1-2.3) + some Tier 3 (3.4-3.5)

MOVEMENT INSPIRATION (do NOT copy these exactly):
 ${archetypes}

STRICT RULES:
1. Generate 1-8 intermediate holds
2. First intermediate must be within ${maxReach} units of the LAST start hold
3. Last intermediate must be within ${maxReach} units of the finish hold
4. Every consecutive pair must be within ${maxReach} units
5. No duplicates — do NOT reuse start or finish hold IDs
6. DIRECTION CHANGES: At least 2 changes in movement direction across the full sequence
7. NO MORE THAN 2 consecutive moves in the same direction
8. Use at least 2 different hold types
9. Do NOT create diagonal ladders or straight lines

OUTPUT — Return ONLY this JSON:
{"intermediate": ["HoldID", ...]}

AVAILABLE HOLDS (marked ← START / ← FINISH):
 ${context}`;

    if (feedback) {
      userPrompt = `FIX THESE ISSUES with the intermediate sequence:\n${feedback.join('\n')}\n\nOutput the corrected JSON.`;
    } else {
      userPrompt = `Create an interesting intermediate sequence. Output ONLY the JSON.`;
    }

  } else if (phase === 'feet') {
    const idealHDist = Math.max(2, Math.min(5, Math.floor(userHeight / 40)));
    const maxVDist = Math.max(3, Math.floor(userHeight / 50));

    systemPrompt = `You are an expert Kilter Board routesetter.
Your ONLY job is to select FEET for a given hand sequence.

SPATIAL ORIENTATION:
- Row 1 = BOTTOM of wall. Row 18 = TOP of wall.
- Climbers move upward from low to high row numbers.

CRITICAL FOOT PAIRING RULES:
1. Each foot must be INTENTIONALLY PAIRED with a specific handhold
2. Foot must be BELOW its paired hand (lower row number)
3. Foot must be 1-${maxVDist} rows below paired hand, NOT in the same row
4. Foot must be ~${idealHDist} columns horizontally from paired hand (not directly below, not too far)
5. Foot must NOT be an undercling
6. Foot should be on the OPPOSITE side from the hand's pull direction:
   - Left-pulling hand → foot on RIGHT side
   - Right-pulling hand → foot on LEFT side
   - Down-pulling hand → foot directly below or slightly to either side
7. Do NOT select holds that are already in the hand sequence
8. Select exactly as many feet as there are handholds (one foot per hand)
9. Feet should be positive holds: jugs, crimps, edges, pinches

OUTPUT — Return ONLY this JSON:
{"feet": ["FootID", ...]}

${context}`;

    userPrompt = `Select appropriate feet paired with each handhold. Output ONLY the JSON.`;
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
    const { holdsMap, userHeight, start, finish } = req.body;

    if (!holdsMap || !userHeight || !start || !finish) {
      return res.status(400).json({
        error: "Missing required fields: holdsMap, userHeight, start, finish"
      });
    }

    if (!Array.isArray(start) || start.length < 1 || start.length > 2) {
      return res.status(400).json({ error: "start must be an array of 1-2 hold IDs." });
    }
    if (!Array.isArray(finish) || finish.length !== 1) {
      return res.status(400).json({ error: "finish must be an array of exactly 1 hold ID." });
    }

    for (const id of [...start, ...finish]) {
      if (!holdsMap[id]) {
        return res.status(400).json({ error: `Hold "${id}" not found in holdsMap.` });
      }
    }

    const maxReach = Math.floor(0.75 * userHeight / 15);

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
    console.log(`[Phase 1] Generating intermediate, maxReach=${maxReach}`);
    console.log(`[Phase 1] Start: ${start.join(', ')} | Finish: ${finish.join(', ')}`);

    const intermediateContext = buildIntermediateContext(holdsMap, start, finish);

    let result = await callDeepSeek(
      intermediateContext, userHeight,
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

      const feedback = [];
      if (!hardResult.valid) {
        feedback.push(...hardResult.errors.map(e => `ERROR: ${e}`));
      } else if (!qualityResult.valid) {
        feedback.push(...qualityResult.warnings.map(w => `QUALITY: ${w}`));
      }

      console.log(`[Phase 1] Retry ${attempts}/${MAX_ATTEMPTS}: ${feedback.slice(0, 3).join(' | ')}`);

      result = await callDeepSeek(
        intermediateContext, userHeight,
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
    // PHASE 2: Generate Paired Feet
    // ========================================
    console.log(`[Phase 2] Generating paired feet...`);

    const fullProblem = { start, intermediate, finish };
    const allHandIds = [...start, ...intermediate, ...finish];
    const feetContext = buildFootPairingContext(holdsMap, fullProblem, userHeight);

    let feetResult = null;
    let feetWarnings = [];
    let feetAttempts = 0;
    const MAX_FEET_ATTEMPTS = 3;

    try {
      feetResult = await callDeepSeek(
        feetContext, userHeight,
        null, 'feet'
      );

      if (feetResult?.feet) {
        // Validate foot pairing with geometric rules
        let feetValidation = validateFootPairing(feetResult.feet, allHandIds, holdsMap, userHeight);

        while (!feetValidation.valid && feetAttempts < MAX_FEET_ATTEMPTS) {
          feetAttempts++;
          console.log(`[Phase 2] Feet retry ${feetAttempts}:`, feetValidation.warnings);

          feetResult = await callDeepSeek(
            feetContext, userHeight,
            feetValidation.warnings, 'feet'
          );

          if (feetResult?.feet) {
            feetValidation = validateFootPairing(feetResult.feet, allHandIds, holdsMap, userHeight);
          } else {
            break;
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