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
    explanation: "High density altitude means the air is less dense (thinner). A propeller works by accelerating air molecules to create thrust. When the air is thinner, there are fewer molecules for the propeller to 'grab' and push, making it less efficient. Think of it like trying to row a boat in water versus in thick mud - you get more push from thicker substances.",
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
    explanation: "The Pilot's Operating Handbook (POH) or UAS Flight Manual is the official document for YOUR specific aircraft. It contains the exact CG limits and loading instructions for that particular model. The AIM contains general aviation information, and the Weight and Balance Handbook is a training document - neither are specific to your aircraft.",
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
    explanation: "When you overload an aircraft, it needs MORE power to stay in the air and move. This means the motors work harder and drain the battery faster, resulting in SHORTER flight time (endurance). It won't go faster or be more maneuverable - quite the opposite! Overweight aircraft are sluggish and harder to control.",
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
    explanation: "The Remote Pilot-in-Command (RPIC) is responsible for everything related to the safe operation of the flight - this includes knowing the aircraft's performance capabilities. While manufacturers provide data, it's YOUR job as the RPIC to understand how YOUR aircraft performs in the current conditions. Remember: 'If something goes wrong, the RPIC is responsible.'",
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
    explanation: "Load factor is the ratio of lift to weight - basically how many 'G's' the aircraft experiences. In straight-and-level flight, load factor is 1G. But when you turn, climb abruptly, or do any maneuver, you increase the load factor. In a 60° bank turn, for example, the load factor is 2G - meaning the wings must support twice the aircraft's weight!",
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
    explanation: "A stall is NOT about speed - it's about the ANGLE OF ATTACK. The angle of attack is the angle between the wing's chord line and the oncoming air. When this angle gets too steep (exceeds the critical angle, typically around 15-20°), the air can no longer flow smoothly over the wing - it separates and becomes turbulent. This causes a sudden loss of lift = STALL. A stall can happen at ANY speed if the critical angle of attack is exceeded.",
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
    explanation: "Using Figure 2 (Load Factor Chart), a 30° bank angle produces a load factor of approximately 1.15. To find the apparent weight: 33 lbs × 1.15 = 37.95 lbs ≈ 38 lbs. The aircraft structure must support this increased weight during the turn. The steeper the bank, the higher the load factor!",
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
    explanation: "High density altitude = thin air. Thin air means: 1) Less lift from wings/rotors (fewer air molecules to push against), 2) Less thrust from propellers (same reason), 3) Less power from engines (less oxygen for combustion, if applicable). All of this adds up to DECREASED performance. Your drone will feel 'sluggish' on hot days or at high elevations.",
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
    explanation: "Operating outside weight and balance limits is dangerous and can definitely cause loss of control! If the aircraft is too heavy, it may not be able to maintain altitude or respond to controls properly. If the CG is out of limits, the aircraft can become unstable and uncontrollable. Modern aircraft designs don't prevent you from overloading - that's the pilot's responsibility!",
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
    explanation: "At a 60° bank angle, the load factor is 2.0 (the aircraft experiences 2 G's). So: 20 lbs × 2.0 = 40 lbs. The structure must support DOUBLE the weight during a 60° bank! This is why steep turns put significant stress on aircraft structures and why the stall speed increases in steep turns.",
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
    explanation: "When the CG is too far AFT (toward the tail), the aircraft becomes nose-high and unstable. The most dangerous consequence is that stall recovery becomes very difficult or impossible! The aircraft wants to pitch up further instead of down. This is extremely hazardous because a stall you can't recover from means a crash. An aft CG makes the aircraft LESS stable at ALL speeds.",
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
    explanation: "At a 45° bank angle, the load factor is approximately 1.4. So: 45 lbs × 1.4 = 63 lbs. The aircraft structure must support about 63 pounds during this turn. Remember, as bank angle increases, load factor increases exponentially - it's not a linear relationship!",
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
    explanation: "The angle of ATTACK is the angle between the wing's chord line and the relative wind (the direction of airflow). This is what you control with pitch inputs. The angle of INCIDENCE is fixed - it's the angle the wing is mounted to the fuselage. DIHEDRAL is the upward angle of the wings when viewed from the front. The angle of attack is the one you can change and the one that determines if you stall!",
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
    explanation: "Angle of attack (AOA) is specifically the angle between the CHORD LINE (an imaginary line from the leading edge to trailing edge of the wing) and the RELATIVE WIND (the direction air is flowing past the wing). It's NOT measured from the fuselage or aircraft centerline - it's purely about the wing's orientation to the airflow.",
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
    explanation: "In straight-and-level, unaccelerated flight, the four forces are in EQUILIBRIUM: Lift = Weight (keeps you at the same altitude, not climbing or descending), and Thrust = Drag (keeps you at the same speed, not accelerating or decelerating). If any of these weren't equal, the aircraft would be changing altitude or speed!",
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
    explanation: "The faster an airplane flies, the more lift its wings generate for any given angle of attack. This means at higher speeds, you can pull harder (impose more load) before stalling. At slow speeds, the wings are already working near their maximum capability, so there's less 'excess' load capacity available. This is why aerobatic maneuvers require higher speeds!",
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
    explanation: "TURNS increase load factor because the aircraft must produce more lift to both support its weight AND turn. In a turn, part of the lift is used to change direction while still maintaining altitude. A 60° bank turn produces 2G - the wings must produce twice normal lift! Climbs and stalls don't inherently increase load factor in the same way.",
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
    explanation: "High density altitude = thin air. A propeller generates thrust by accelerating air molecules backward. With fewer air molecules (thin air), there's less mass to accelerate, so the propeller produces less thrust/force. It's like trying to push yourself forward in a swimming pool versus in a bathtub with very little water - less water (air) = less to push against = less propulsion.",
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
    explanation: "Density altitude is pressure altitude CORRECTED for temperature variations from standard. It tells you how the air 'feels' to the aircraft in terms of performance. On a hot day, even at sea level, the density altitude could be several thousand feet because hot air is less dense. This is why aircraft perform worse on hot days - they're effectively flying at a higher 'density altitude.'",
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
    explanation: "Warm air is LESS dense than cold air (hot air rises, remember?). Less dense air = higher density altitude. So on a hot day, even if your altimeter says 1,000 feet, the density altitude could be 3,000+ feet because the warm, thin air makes the aircraft perform as if it were at that higher altitude. Hot = High density altitude = Worse performance.",
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
    explanation: "High density altitude REDUCES all performance: climb rate is reduced (less lift and thrust), takeoff distance is increased (need more speed for lift in thin air), and engine/motor efficiency decreases. Everything gets WORSE at high density altitude. Your drone will climb slower, need more runway/space, and have less power available.",
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
    explanation: "Humid air is actually LESS dense than dry air! Water vapor (H₂O) is lighter than nitrogen (N₂) and oxygen (O₂) molecules that make up most of air. So humid air = less dense air = reduced aircraft performance. Additionally, for combustion engines, humid air means less oxygen for burning fuel. The effect isn't as dramatic as temperature, but it's still a factor.",
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
    explanation: "The critical angle of attack (the angle at which the wing stalls) is a characteristic of the wing's design - its shape, camber, and airfoil. It does NOT change with weight, CG position, or other factors. What DOES change is the SPEED at which you reach that angle. A heavier aircraft will stall at a higher speed, but at the same angle of attack (typically around 15-20° for most wings).",
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
    explanation: "Density altitude equals pressure altitude when the temperature matches the 'standard' temperature for that altitude. Standard temperature at sea level is 15°C (59°F), and it decreases about 2°C per 1,000 feet. When temperature matches standard, there's no correction needed, so density altitude = pressure altitude. On non-standard temperature days, you must add or subtract to get density altitude.",
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
    explanation: "Higher temperature = less dense air = higher density altitude. Remember: Hot = High (density altitude). Increased barometric pressure would actually DECREASE density altitude (more pressure = denser air). Decreased humidity would also decrease density altitude (dry air is denser than humid air). Hot days are the enemy of aircraft performance!",
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
    explanation: "This is the definition of angle of ATTACK. The chord line is an imaginary straight line from the leading edge to the trailing edge of the wing. The relative wind is the direction air flows past the wing. The angle between them is what the pilot controls with pitch inputs, and it determines how much lift the wing produces (up to the stall angle).",
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
    explanation: "Same concept as before - increased temperature increases density altitude. Hot air is less dense, so the aircraft 'feels' like it's at a higher altitude even though it isn't. This affects performance negatively. Always check temperature when planning flights, especially on hot summer days!",
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
    explanation: "When adding any payload to your drone, the #1 concern is maintaining proper center of gravity (CG). An off-center or improperly positioned load can make the aircraft unstable, hard to control, or even uncontrollable. Always mount equipment so the CG stays within limits. Visibility and easy removal are nice but not the primary concern.",
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
    explanation: "You must use the MOST CURRENT weight and balance data. Aircraft can be modified, equipment added or removed, repairs made - all of which can change weight and balance. Factory data may be outdated, and 'recent' isn't specific enough. Always verify you have the latest information for the actual current configuration of your aircraft.",
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
    explanation: "Operating outside weight and balance limits is dangerous and CAN cause loss of control! CG CAN change during flight (fuel burn, payload shifts, etc.), and lateral CG IS important - an off-center weight can cause roll issues. The only true statement is C: exceeding limits = potential loss of control = potential crash.",
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
    explanation: "At 60° bank, the load factor is 2.0 (2 G's). So: 10 lbs × 2.0 = 20 lbs. The structure must support double the aircraft's weight during a 60° banked turn. This is significant stress! This is why steep turns require more power and can lead to stalls if you're not careful.",
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
    explanation: "At 30° bank, the load factor is approximately 1.15. So: 50 lbs × 1.15 = 57.5 lbs ≈ 60 lbs (closest answer). Even a relatively shallow 30° bank increases the structural load by about 15%! The closest answer choice is 60 pounds.",
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
    explanation: "A stall happens when the critical angle of attack is exceeded - period. It's not about weight or speed directly. When the angle between the wing/propeller and the airflow gets too steep, the air can't follow the surface smoothly anymore. It separates, becomes turbulent, and lift is lost. This can happen at ANY speed!",
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
    explanation: "Increased load factor means the wing must produce more lift to support the apparent increased weight. To produce more lift at the same angle of attack, you need more speed. Therefore, the STALL SPEED INCREASES with load factor. In a 60° bank (2G), the stall speed increases by about 40%! This is why steep turns at low speed are dangerous.",
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
    explanation: "High humidity DECREASES performance. Water vapor (H₂O) is lighter than the nitrogen and oxygen molecules it displaces in the air. So humid air is actually LESS dense than dry air, which means reduced lift and thrust. It's a smaller effect than temperature, but still a factor to consider, especially combined with heat.",
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
    explanation: "A rearward (aft) CG makes an aircraft LESS stable at ALL speeds. The further aft the CG, the more 'tail heavy' the aircraft becomes, making it want to pitch up uncontrollably. This reduces the aircraft's natural tendency to return to stable flight after a disturbance. At the extreme, an aft CG can make the aircraft uncontrollable and unrecoverable from unusual attitudes.",
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
    explanation: "In a 45° bank, the load factor is about 1.4G. To support this increased load, the wing must produce more lift. The stall speed increases proportionally - by about 18% in a 45° bank. So if your drone normally stalls at 20 mph, in a 45° bank it would stall at about 23.6 mph. Always maintain extra airspeed when turning!",
    hint: "Higher load factor means the wing needs to work harder, which requires more speed.",
    figureRef: null,
    difficulty: "medium",
    tags: ["bank-angle", "stall-speed", "load-factor"],
    relatedQuestions: ["perf-017", "perf-034"],
    faaReference: null
  }
];

export default performanceQuestions;
