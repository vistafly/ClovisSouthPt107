// Performance & Weight/Balance Questions
// Source: FAA Part 107 Test Prep Materials
// Total: 37 questions

export const performanceQuestions = [
  {
    id: "perf-001",
    category: "performance",
    categoryName: "Performance & Weight/Balance",
    question: "What effect does high density altitude have on the efficiency of a UA propeller?",
    options: [
      { id: "A", text: "Propeller efficiency is increased." },
      { id: "B", text: "Propeller efficiency is decreased." },
      { id: "C", text: "Density altitude does not affect propeller efficiency." }
    ],
    correctAnswer: "B",
    explanation: "High density altitude = THIN AIR. Propellers push air to create thrust, so less air means less thrust. Efficiency drops.",
    hint: "Think about what happens when there's less 'stuff' in the air for the propeller blades to push against.",
    figureRef: null,
    difficulty: "medium",
    tags: ["density-altitude", "propeller", "performance"],
    relatedQuestions: ["perf-008", "perf-018", "perf-021"],
    faaReference: null
  },
  {
    id: "perf-002",
    category: "performance",
    categoryName: "Performance & Weight/Balance",
    question: "To ensure that the unmanned aircraft center of gravity (CG) limits are not exceeded, follow the aircraft loading instructions specified in the",
    options: [
      { id: "A", text: "Pilot's Operating Handbook or UAS Flight Manual." },
      { id: "B", text: "Aeronautical Information Manual (AIM)." },
      { id: "C", text: "Aircraft Weight and Balance Handbook." }
    ],
    correctAnswer: "A",
    explanation: "The POH or Flight Manual is specific to YOUR aircraft model. The other documents are general references, not tailored to your drone's exact limits.",
    hint: "Which document is specific to your particular aircraft model?",
    figureRef: null,
    difficulty: "easy",
    tags: ["center-of-gravity", "documentation", "weight-balance"],
    relatedQuestions: ["perf-029"],
    faaReference: null
  },
  {
    id: "perf-003",
    category: "performance",
    categoryName: "Performance & Weight/Balance",
    question: "What could be a consequence of operating a small unmanned aircraft above its maximum allowable weight?",
    options: [
      { id: "A", text: "Shorter endurance." },
      { id: "B", text: "Faster speed." },
      { id: "C", text: "Increased maneuverability." }
    ],
    correctAnswer: "A",
    explanation: "Heavier aircraft = motors work harder = battery drains faster = SHORTER flight time. Overloaded drones are also sluggish, not faster or more agile.",
    hint: "If the aircraft is heavier, what happens to battery consumption?",
    figureRef: null,
    difficulty: "easy",
    tags: ["weight", "endurance", "performance"],
    relatedQuestions: ["perf-009"],
    faaReference: null
  },
  {
    id: "perf-004",
    category: "performance",
    categoryName: "Performance & Weight/Balance",
    question: "According to 14 CFR part 107, who is responsible for determining the performance of a small unmanned aircraft?",
    options: [
      { id: "A", text: "Remote pilot-in-command." },
      { id: "B", text: "Manufacturer." },
      { id: "C", text: "Owner or operator." }
    ],
    correctAnswer: "A",
    explanation: "The RPIC is always responsible for safe flight operations, including knowing how the aircraft performs in current conditions. If something goes wrong, the FAA looks at the pilot.",
    hint: "Who is ultimately responsible for the safe operation of any flight?",
    figureRef: null,
    difficulty: "easy",
    tags: ["regulations", "responsibility", "rpic"],
    relatedQuestions: [],
    faaReference: "14 CFR 107.19"
  },
  {
    id: "perf-005",
    category: "performance",
    categoryName: "Performance & Weight/Balance",
    question: "When operating an unmanned airplane, the remote pilot should consider that the load factor on the wings may be increased any time",
    options: [
      { id: "A", text: "the CG is shifted rearward to the aft CG limit." },
      { id: "B", text: "the airplane is subjected to maneuvers other than straight-and-level flight." },
      { id: "C", text: "the gross weight is reduced." }
    ],
    correctAnswer: "B",
    explanation: "LOAD FACTOR measures stress on the wings (in G's). Straight flight = 1G. Any maneuver (turns, climbs, dives) increases load factor. A 60° turn = 2G, meaning wings support twice the weight.",
    hint: "What happens to the forces on an aircraft when it's turning or maneuvering?",
    figureRef: null,
    difficulty: "medium",
    tags: ["load-factor", "maneuvers", "aerodynamics"],
    relatedQuestions: ["perf-017", "perf-034"],
    faaReference: null
  },
  {
    id: "perf-006",
    category: "performance",
    categoryName: "Performance & Weight/Balance",
    question: "A stall occurs when the smooth airflow over the unmanned airplane's wing is disrupted, and the lift degenerates rapidly. This is caused when the wing",
    options: [
      { id: "A", text: "exceeds the maximum speed." },
      { id: "B", text: "exceeds maximum allowable operating weight." },
      { id: "C", text: "exceeds its critical angle of attack." }
    ],
    correctAnswer: "C",
    explanation: "Stalls are about ANGLE, not speed. When the wing's angle of attack exceeds the critical angle (~15-20°), airflow separates and lift is lost. This can happen at ANY speed.",
    hint: "A stall is about the angle of the wing relative to the airflow, not speed.",
    figureRef: null,
    difficulty: "medium",
    tags: ["stall", "angle-of-attack", "aerodynamics"],
    relatedQuestions: ["perf-013", "perf-014", "perf-023", "perf-033"],
    faaReference: null
  },
  {
    id: "perf-007",
    category: "performance",
    categoryName: "Performance & Weight/Balance",
    question: "(Refer to Figure 2.) If an unmanned airplane weighs 33 pounds, what approximate weight would the airplane structure be required to support during a 30° banked turn while maintaining altitude?",
    options: [
      { id: "A", text: "34 pounds." },
      { id: "B", text: "47 pounds." },
      { id: "C", text: "38 pounds." }
    ],
    correctAnswer: "C",
    explanation: "From Figure 2: 30° bank = ~1.15 load factor. Multiply: 33 × 1.15 = 38 lbs.",
    hint: "Find the load factor for 30° bank on the chart, then multiply by the aircraft weight.",
    figureRef: "figure-2",
    difficulty: "medium",
    tags: ["load-factor", "bank-angle", "calculations"],
    relatedQuestions: ["perf-010", "perf-012", "perf-031", "perf-032"],
    faaReference: null
  },
  {
    id: "perf-008",
    category: "performance",
    categoryName: "Performance & Weight/Balance",
    question: "How would high density altitude affect the performance of a small unmanned aircraft?",
    options: [
      { id: "A", text: "Increased performance." },
      { id: "B", text: "Decreased performance." },
      { id: "C", text: "No change in performance." }
    ],
    correctAnswer: "B",
    explanation: "High density altitude = thin air = DECREASED performance across the board: less lift, less thrust, less power. Hot days and high elevations both cause this. Remember: HIGH density altitude = LOW performance.",
    hint: "Think about what 'thin air' means for everything that needs air to work - wings, propellers, engines.",
    figureRef: null,
    difficulty: "easy",
    tags: ["density-altitude", "performance"],
    relatedQuestions: ["perf-001", "perf-018", "perf-021"],
    faaReference: null
  },
  {
    id: "perf-009",
    category: "performance",
    categoryName: "Performance & Weight/Balance",
    question: "Operating outside of the weight and balance limits of an unmanned aircraft",
    options: [
      { id: "A", text: "can result in loss of control of the aircraft." },
      { id: "B", text: "increases performance." },
      { id: "C", text: "is not possible per aircraft design." }
    ],
    correctAnswer: "A",
    explanation: "Exceeding weight/balance limits can cause LOSS OF CONTROL. Too heavy = can't maintain altitude. CG out of limits = unstable and potentially uncontrollable. The aircraft won't stop you from overloading - that's your job.",
    hint: "What happens to an aircraft that's improperly loaded? Can it still fly normally?",
    figureRef: null,
    difficulty: "easy",
    tags: ["weight-balance", "safety", "control"],
    relatedQuestions: ["perf-030"],
    faaReference: null
  },
  {
    id: "perf-010",
    category: "performance",
    categoryName: "Performance & Weight/Balance",
    question: "(Refer to Figure 2.) If an unmanned aircraft weighs 20 pounds, what approximate weight would the aircraft structure be required to support during a 60° banked turn while maintaining altitude?",
    options: [
      { id: "A", text: "23 pounds." },
      { id: "B", text: "28 pounds." },
      { id: "C", text: "40 pounds." }
    ],
    correctAnswer: "C",
    explanation: "60° bank = 2.0 load factor (2G). So: 20 × 2 = 40 lbs. The structure supports DOUBLE the weight in a 60° turn.",
    hint: "A 60° bank produces a load factor of 2.0 - what's 20 × 2?",
    figureRef: "figure-2",
    difficulty: "medium",
    tags: ["load-factor", "bank-angle", "calculations"],
    relatedQuestions: ["perf-007", "perf-012", "perf-031", "perf-032"],
    faaReference: null
  },
  {
    id: "perf-011",
    category: "performance",
    categoryName: "Performance & Weight/Balance",
    question: "An unmanned aircraft has been loaded in such a manner that the CG is located aft of the aft CG limit. One undesirable flight characteristic a remote pilot might experience with this aircraft would be",
    options: [
      { id: "A", text: "a longer takeoff run." },
      { id: "B", text: "difficulty in recovering from a stalled condition." },
      { id: "C", text: "stalling at higher-than-normal airspeed." }
    ],
    correctAnswer: "B",
    explanation: "AFT (rearward) CG = tail heavy = DANGEROUS. During stall recovery, you need the nose to drop, but a tail-heavy aircraft wants to pitch UP instead. Stall recovery becomes difficult or impossible.",
    hint: "If the aircraft is 'tail heavy,' what happens when it tries to nose down during stall recovery?",
    figureRef: null,
    difficulty: "hard",
    tags: ["center-of-gravity", "stall-recovery", "stability"],
    relatedQuestions: ["perf-036"],
    faaReference: null
  },
  {
    id: "perf-012",
    category: "performance",
    categoryName: "Performance & Weight/Balance",
    question: "(Refer to Figure 2.) If an unmanned aircraft weighs 45 pounds, what approximate weight would the aircraft structure be required to support during a 45° banked turn while maintaining altitude?",
    options: [
      { id: "A", text: "45 pounds." },
      { id: "B", text: "63 pounds." },
      { id: "C", text: "72 pounds." }
    ],
    correctAnswer: "B",
    explanation: "45° bank = ~1.4 load factor. So: 45 × 1.4 = 63 lbs.",
    hint: "Find the 45° bank angle on the load factor chart - it should show approximately 1.4 G's.",
    figureRef: "figure-2",
    difficulty: "medium",
    tags: ["load-factor", "bank-angle", "calculations"],
    relatedQuestions: ["perf-007", "perf-010", "perf-031", "perf-032"],
    faaReference: null
  },
  {
    id: "perf-013",
    category: "performance",
    categoryName: "Performance & Weight/Balance",
    question: "(Refer to Figure 1.) The acute angle A is the angle of",
    options: [
      { id: "A", text: "incidence." },
      { id: "B", text: "attack." },
      { id: "C", text: "dihedral." }
    ],
    correctAnswer: "B",
    explanation: "ANGLE OF ATTACK = angle between wing chord line and oncoming air. You control this with pitch. INCIDENCE is how the wing is mounted (fixed). DIHEDRAL is the upward wing angle from front view.",
    hint: "Which angle describes the relationship between the wing and the oncoming air?",
    figureRef: "figure-1",
    difficulty: "medium",
    tags: ["angle-of-attack", "aerodynamics", "terminology"],
    relatedQuestions: ["perf-014", "perf-026"],
    faaReference: null
  },
  {
    id: "perf-014",
    category: "performance",
    categoryName: "Performance & Weight/Balance",
    question: "The term 'angle of attack' is defined as the angle between the",
    options: [
      { id: "A", text: "chord line of the wing and the relative wind." },
      { id: "B", text: "airplane's longitudinal axis and that of the air striking the airfoil." },
      { id: "C", text: "airplane's centerline and the relative wind." }
    ],
    correctAnswer: "A",
    explanation: "Angle of attack = angle between the CHORD LINE (front to back of wing) and RELATIVE WIND (airflow direction). It's about the wing, not the aircraft body.",
    hint: "The chord line is on the wing, and relative wind is the airflow direction.",
    figureRef: null,
    difficulty: "medium",
    tags: ["angle-of-attack", "definitions", "aerodynamics"],
    relatedQuestions: ["perf-013", "perf-026"],
    faaReference: null
  },
  {
    id: "perf-015",
    category: "performance",
    categoryName: "Performance & Weight/Balance",
    question: "What is the relationship of lift, drag, thrust, and weight when the airplane is in straight-and-level flight?",
    options: [
      { id: "A", text: "Lift equals weight and thrust equals drag." },
      { id: "B", text: "Lift, drag, and weight equal thrust." },
      { id: "C", text: "Lift and weight equal thrust and drag." }
    ],
    correctAnswer: "A",
    explanation: "In steady, straight-and-level flight: LIFT = WEIGHT (constant altitude) and THRUST = DRAG (constant speed). All forces are balanced.",
    hint: "For 'straight-and-level' flight at constant speed, all forces must be balanced.",
    figureRef: null,
    difficulty: "medium",
    tags: ["four-forces", "aerodynamics", "equilibrium"],
    relatedQuestions: [],
    faaReference: null
  },
  {
    id: "perf-016",
    category: "performance",
    categoryName: "Performance & Weight/Balance",
    question: "The amount of excess load that can be imposed on the wing of an airplane depends upon the",
    options: [
      { id: "A", text: "position of the CG." },
      { id: "B", text: "speed of the airplane." },
      { id: "C", text: "abruptness at which the load is applied." }
    ],
    correctAnswer: "B",
    explanation: "Higher speed = more lift capacity = wings can handle more extra load before stalling. At slow speeds, wings are already near their limit with less reserve available.",
    hint: "At what speed do the wings generate more lift and have more capacity for extra loading?",
    figureRef: null,
    difficulty: "hard",
    tags: ["load-factor", "speed", "aerodynamics"],
    relatedQuestions: ["perf-005"],
    faaReference: null
  },
  {
    id: "perf-017",
    category: "performance",
    categoryName: "Performance & Weight/Balance",
    question: "Which basic flight maneuver increases the load factor on an airplane as compared to straight-and-level flight?",
    options: [
      { id: "A", text: "Climbs." },
      { id: "B", text: "Turns." },
      { id: "C", text: "Stalls." }
    ],
    correctAnswer: "B",
    explanation: "TURNS increase load factor because the wings must produce lift for both weight support AND direction change. A 60° bank = 2G load factor.",
    hint: "In which maneuver does the aircraft need to produce extra lift to change direction while maintaining altitude?",
    figureRef: null,
    difficulty: "easy",
    tags: ["load-factor", "turns", "maneuvers"],
    relatedQuestions: ["perf-005", "perf-034", "perf-037"],
    faaReference: null
  },
  {
    id: "perf-018",
    category: "performance",
    categoryName: "Performance & Weight/Balance",
    question: "What effect does high density altitude, as compared to low density altitude, have on propeller efficiency and why?",
    options: [
      { id: "A", text: "Efficiency is increased due to less friction on the propeller blades." },
      { id: "B", text: "Efficiency is reduced because the propeller exerts less force at high density altitudes than at low density altitudes." },
      { id: "C", text: "Efficiency is reduced due to the increased force of the propeller in the thinner air." }
    ],
    correctAnswer: "B",
    explanation: "High density altitude = thin air = less air mass for the propeller to accelerate = less thrust produced = reduced efficiency.",
    hint: "A propeller pushes air molecules. What happens when there are fewer molecules to push?",
    figureRef: null,
    difficulty: "medium",
    tags: ["density-altitude", "propeller", "efficiency"],
    relatedQuestions: ["perf-001", "perf-008"],
    faaReference: null
  },
  {
    id: "perf-019",
    category: "performance",
    categoryName: "Performance & Weight/Balance",
    question: "What is density altitude?",
    options: [
      { id: "A", text: "The height above the standard datum plane." },
      { id: "B", text: "The pressure altitude corrected for non-standard temperature." },
      { id: "C", text: "The altitude read directly from the altimeter." }
    ],
    correctAnswer: "B",
    explanation: "Density altitude = pressure altitude adjusted for temperature. It tells you how the air 'feels' to the aircraft. Hot days increase density altitude even at low elevations.",
    hint: "Density altitude accounts for temperature's effect on air density.",
    figureRef: null,
    difficulty: "medium",
    tags: ["density-altitude", "definitions", "performance"],
    relatedQuestions: ["perf-020", "perf-024"],
    faaReference: null
  },
  {
    id: "perf-020",
    category: "performance",
    categoryName: "Performance & Weight/Balance",
    question: "If the outside air temperature (OAT) at a given altitude is warmer than standard, the density altitude is",
    options: [
      { id: "A", text: "equal to pressure altitude." },
      { id: "B", text: "lower than pressure altitude." },
      { id: "C", text: "higher than pressure altitude." }
    ],
    correctAnswer: "C",
    explanation: "HOT = HIGH density altitude. Warm air is less dense, so aircraft performs as if at a higher altitude. HOT = HIGH = POOR performance.",
    hint: "Hot air is less dense. Less dense air = the aircraft 'thinks' it's at a higher altitude.",
    figureRef: null,
    difficulty: "medium",
    tags: ["density-altitude", "temperature", "performance"],
    relatedQuestions: ["perf-019", "perf-024", "perf-025", "perf-027"],
    faaReference: null
  },
  {
    id: "perf-021",
    category: "performance",
    categoryName: "Performance & Weight/Balance",
    question: "What effect does high density altitude have on aircraft performance?",
    options: [
      { id: "A", text: "It increases engine performance." },
      { id: "B", text: "It reduces climb performance." },
      { id: "C", text: "It increases takeoff performance." }
    ],
    correctAnswer: "B",
    explanation: "High density altitude REDUCES all performance: slower climb, longer takeoff, less power. Everything gets worse in thin air.",
    hint: "Think of high density altitude as making everything harder for the aircraft.",
    figureRef: null,
    difficulty: "easy",
    tags: ["density-altitude", "climb", "performance"],
    relatedQuestions: ["perf-001", "perf-008", "perf-018"],
    faaReference: null
  },
  {
    id: "perf-022",
    category: "performance",
    categoryName: "Performance & Weight/Balance",
    question: "What effect, if any, does high humidity have on aircraft performance?",
    options: [
      { id: "A", text: "It increases performance." },
      { id: "B", text: "It decreases performance." },
      { id: "C", text: "It has no effect on performance." }
    ],
    correctAnswer: "B",
    explanation: "Humid air DECREASES performance. Water vapor is lighter than nitrogen/oxygen, so humid air is less dense. Effect is smaller than temperature but still matters.",
    hint: "Water vapor molecules are lighter than nitrogen and oxygen molecules.",
    figureRef: null,
    difficulty: "medium",
    tags: ["humidity", "density-altitude", "performance"],
    relatedQuestions: ["perf-035"],
    faaReference: null
  },
  {
    id: "perf-023",
    category: "performance",
    categoryName: "Performance & Weight/Balance",
    question: "The angle of attack at which an airplane wing stalls will",
    options: [
      { id: "A", text: "increase if the CG is moved forward." },
      { id: "B", text: "change with an increase in gross weight." },
      { id: "C", text: "remain the same regardless of gross weight." }
    ],
    correctAnswer: "C",
    explanation: "The CRITICAL ANGLE OF ATTACK is fixed by wing design (~15-20°). Weight changes the stall SPEED, not the stall angle. Heavier = stalls at higher speed, same angle.",
    hint: "The stall angle is determined by wing design, not by how you load the aircraft.",
    figureRef: null,
    difficulty: "hard",
    tags: ["stall", "angle-of-attack", "aerodynamics"],
    relatedQuestions: ["perf-006"],
    faaReference: null
  },
  {
    id: "perf-024",
    category: "performance",
    categoryName: "Performance & Weight/Balance",
    question: "Under what condition is pressure altitude and density altitude the same value?",
    options: [
      { id: "A", text: "At sea level, when the temperature is 0 °F." },
      { id: "B", text: "When the altimeter has no installation error." },
      { id: "C", text: "At standard temperature." }
    ],
    correctAnswer: "C",
    explanation: "They're equal at STANDARD TEMPERATURE (15°C/59°F at sea level). Density altitude is pressure altitude corrected for temp - no correction needed at standard temp.",
    hint: "Density altitude is pressure altitude corrected for temperature. When is no correction needed?",
    figureRef: null,
    difficulty: "medium",
    tags: ["density-altitude", "pressure-altitude", "standard-atmosphere"],
    relatedQuestions: ["perf-019", "perf-020"],
    faaReference: null
  },
  {
    id: "perf-025",
    category: "performance",
    categoryName: "Performance & Weight/Balance",
    question: "Which factor would tend to increase the density altitude at a given airport?",
    options: [
      { id: "A", text: "An increase in barometric pressure." },
      { id: "B", text: "An increase in ambient temperature." },
      { id: "C", text: "A decrease in relative humidity." }
    ],
    correctAnswer: "B",
    explanation: "Higher TEMPERATURE = higher density altitude. Hot air is less dense. Higher pressure or lower humidity would actually decrease density altitude.",
    hint: "What makes air less dense? That will increase density altitude.",
    figureRef: null,
    difficulty: "medium",
    tags: ["density-altitude", "temperature", "factors"],
    relatedQuestions: ["perf-020", "perf-027"],
    faaReference: null
  },
  {
    id: "perf-026",
    category: "performance",
    categoryName: "Performance & Weight/Balance",
    question: "The angle between the chord line of an airfoil and the relative wind is known as the angle of",
    options: [
      { id: "A", text: "lift." },
      { id: "B", text: "attack." },
      { id: "C", text: "incidence." }
    ],
    correctAnswer: "B",
    explanation: "This defines ANGLE OF ATTACK: chord line (wing front to back) vs. relative wind (airflow direction). You control it with pitch, and it determines lift and stall.",
    hint: "This angle is what pilots control and it determines lift production.",
    figureRef: null,
    difficulty: "easy",
    tags: ["angle-of-attack", "definitions", "aerodynamics"],
    relatedQuestions: ["perf-013", "perf-014"],
    faaReference: null
  },
  {
    id: "perf-027",
    category: "performance",
    categoryName: "Performance & Weight/Balance",
    question: "Which factor would tend to increase the density altitude at a given airport referenced in the weather briefing?",
    options: [
      { id: "A", text: "An increase in barometric pressure." },
      { id: "B", text: "An increase in ambient temperature." },
      { id: "C", text: "A decrease in relative humidity." }
    ],
    correctAnswer: "B",
    explanation: "Higher temperature = higher density altitude = worse performance. Always check temps before flying, especially in summer.",
    hint: "Hot = High density altitude = Poor performance.",
    figureRef: null,
    difficulty: "medium",
    tags: ["density-altitude", "temperature", "weather-briefing"],
    relatedQuestions: ["perf-020", "perf-025"],
    faaReference: null
  },
  {
    id: "perf-028",
    category: "performance",
    categoryName: "Performance & Weight/Balance",
    question: "When loading cameras or other equipment on an sUAS, mount the items in a manner that",
    options: [
      { id: "A", text: "is visible to the visual observer or other crewmembers." },
      { id: "B", text: "does not adversely affect the center of gravity." },
      { id: "C", text: "can be easily removed without the use of tools." }
    ],
    correctAnswer: "B",
    explanation: "Keep the CENTER OF GRAVITY within limits. Off-balance payloads make the aircraft unstable or uncontrollable. Visibility and easy removal are secondary concerns.",
    hint: "What's the most critical factor for flight safety when adding equipment?",
    figureRef: null,
    difficulty: "easy",
    tags: ["center-of-gravity", "loading", "payloads"],
    relatedQuestions: ["perf-002", "perf-030"],
    faaReference: null
  },
  {
    id: "perf-029",
    category: "performance",
    categoryName: "Performance & Weight/Balance",
    question: "When operating an aircraft, the remote PIC is responsible for using",
    options: [
      { id: "A", text: "the most current weight and balance data." },
      { id: "B", text: "weight and balance data from the factory." },
      { id: "C", text: "recent weight and balance data." }
    ],
    correctAnswer: "A",
    explanation: "Use MOST CURRENT data. Aircraft get modified over time - factory data may be outdated, 'recent' isn't specific enough. Use the actual current configuration.",
    hint: "Aircraft change over time - what version of the data should you use?",
    figureRef: null,
    difficulty: "easy",
    tags: ["weight-balance", "documentation", "responsibility"],
    relatedQuestions: ["perf-002"],
    faaReference: null
  },
  {
    id: "perf-030",
    category: "performance",
    categoryName: "Performance & Weight/Balance",
    question: "Which of the following is true regarding weight and balance of small unmanned aircraft?",
    options: [
      { id: "A", text: "CG cannot change during flight." },
      { id: "B", text: "Lateral CG is not important to small unmanned aircraft operations." },
      { id: "C", text: "Operations outside weight and balance limitations may result in loss of control." }
    ],
    correctAnswer: "C",
    explanation: "Outside limits = possible LOSS OF CONTROL. The other statements are false: CG CAN change in flight, and lateral (side-to-side) CG DOES matter.",
    hint: "What's the consequence of ignoring weight and balance limits?",
    figureRef: null,
    difficulty: "easy",
    tags: ["weight-balance", "safety", "control"],
    relatedQuestions: ["perf-009"],
    faaReference: null
  },
  {
    id: "perf-031",
    category: "performance",
    categoryName: "Performance & Weight/Balance",
    question: "(Refer to Figure 2.) If an sUAS weighs 10 pounds, what approximate weight would the sUAS structure be required to support during a 60 degrees banked turn while maintaining altitude?",
    options: [
      { id: "A", text: "10.15 pounds." },
      { id: "B", text: "30 pounds." },
      { id: "C", text: "20 pounds." }
    ],
    correctAnswer: "C",
    explanation: "60° bank = 2G load factor. So: 10 × 2 = 20 lbs. Quick tip: 60° bank always doubles the weight.",
    hint: "60° bank = 2G load factor. Multiply the weight by 2.",
    figureRef: "figure-2",
    difficulty: "medium",
    tags: ["load-factor", "bank-angle", "calculations"],
    relatedQuestions: ["perf-007", "perf-010", "perf-012", "perf-032"],
    faaReference: null
  },
  {
    id: "perf-032",
    category: "performance",
    categoryName: "Performance & Weight/Balance",
    question: "(Refer to Figure 2.) If an sUAS weighs 50 pounds, what approximate weight would the sUAS structure be required to support during a 30-degree banked turn while maintaining altitude?",
    options: [
      { id: "A", text: "60 pounds." },
      { id: "B", text: "45 pounds." },
      { id: "C", text: "30 pounds." }
    ],
    correctAnswer: "A",
    explanation: "30° bank = ~1.15G. So: 50 × 1.15 = 57.5 lbs ≈ 60 lbs (closest answer).",
    hint: "30° bank = approximately 1.15 G. 50 × 1.15 = ?",
    figureRef: "figure-2",
    difficulty: "medium",
    tags: ["load-factor", "bank-angle", "calculations"],
    relatedQuestions: ["perf-007", "perf-010", "perf-012", "perf-031"],
    faaReference: null
  },
  {
    id: "perf-033",
    category: "performance",
    categoryName: "Performance & Weight/Balance",
    question: "A stall occurs when the smooth airflow over the unmanned aircraft's wing/propeller(s) is disrupted, and the lift degenerates rapidly. This is caused when the wing/propeller(s)",
    options: [
      { id: "A", text: "exceeds maximum allowable operating weight." },
      { id: "B", text: "exceeds the maximum speed." },
      { id: "C", text: "exceeds its critical angle of attack." }
    ],
    correctAnswer: "C",
    explanation: "Stalls occur when the CRITICAL ANGLE OF ATTACK is exceeded. Airflow separates, becomes turbulent, and lift is lost. Can happen at any speed.",
    hint: "Stalls are about the ANGLE of the surface relative to the air.",
    figureRef: null,
    difficulty: "medium",
    tags: ["stall", "angle-of-attack", "aerodynamics"],
    relatedQuestions: ["perf-006"],
    faaReference: null
  },
  {
    id: "perf-034",
    category: "performance",
    categoryName: "Performance & Weight/Balance",
    question: "An increase in load factor will cause an unmanned aircraft to",
    options: [
      { id: "A", text: "stall at a higher speed." },
      { id: "B", text: "have a tendency to spin." },
      { id: "C", text: "be more difficult to control." }
    ],
    correctAnswer: "A",
    explanation: "Higher load factor = HIGHER stall speed. Wings must produce more lift under load, requiring more speed to avoid stall. At 2G, stall speed increases ~40%.",
    hint: "If the wing needs to produce more lift to avoid stalling, what does that require?",
    figureRef: null,
    difficulty: "hard",
    tags: ["load-factor", "stall-speed", "aerodynamics"],
    relatedQuestions: ["perf-017", "perf-037"],
    faaReference: null
  },
  {
    id: "perf-035",
    category: "performance",
    categoryName: "Performance & Weight/Balance",
    question: "What affect does humidity have on performance?",
    options: [
      { id: "A", text: "It has no effect on performance." },
      { id: "B", text: "It increases performance." },
      { id: "C", text: "It decreases performance." }
    ],
    correctAnswer: "C",
    explanation: "Humidity DECREASES performance. Water vapor is lighter than dry air molecules, so humid air is less dense = less lift and thrust.",
    hint: "Water molecules are lighter than oxygen and nitrogen molecules.",
    figureRef: null,
    difficulty: "medium",
    tags: ["humidity", "performance", "density"],
    relatedQuestions: ["perf-022"],
    faaReference: null
  },
  {
    id: "perf-036",
    category: "performance",
    categoryName: "Performance & Weight/Balance",
    question: "A small unmanned aircraft loaded with the most rearward center of gravity is",
    options: [
      { id: "A", text: "less stable at all speeds." },
      { id: "B", text: "more stable at slow speeds." },
      { id: "C", text: "more stable at fast speeds." }
    ],
    correctAnswer: "A",
    explanation: "Rearward (aft) CG = LESS STABLE at ALL speeds. Tail-heavy aircraft are harder to control and can become uncontrollable at the extreme.",
    hint: "A 'tail heavy' aircraft is harder to control and less stable.",
    figureRef: null,
    difficulty: "medium",
    tags: ["center-of-gravity", "stability", "aft-cg"],
    relatedQuestions: ["perf-011"],
    faaReference: null
  },
  {
    id: "perf-037",
    category: "performance",
    categoryName: "Performance & Weight/Balance",
    question: "In a 45-degree banking turn, a small unmanned aircraft will",
    options: [
      { id: "A", text: "be more susceptible to spinning." },
      { id: "B", text: "stall at a higher airspeed." },
      { id: "C", text: "stall at a lower airspeed." }
    ],
    correctAnswer: "B",
    explanation: "45° bank = ~1.4G = stall speed increases ~18%. More load on wings requires more speed to maintain lift. Keep extra speed in turns.",
    hint: "Higher load factor means the wing needs to work harder, which requires more speed.",
    figureRef: null,
    difficulty: "medium",
    tags: ["bank-angle", "stall-speed", "load-factor"],
    relatedQuestions: ["perf-017", "perf-034"],
    faaReference: null
  }
];

export default performanceQuestions;
