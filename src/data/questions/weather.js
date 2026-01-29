// Weather Questions
// Source: FAA Part 107 Test Prep Materials
// Total: 60 questions

export const weatherQuestions = [
  {
    id: "wx-001",
    category: "weather",
    categoryName: "Weather",
    question: "Clouds are divided into four families according to their",
    options: [
      { id: "A", text: "outward shape." },
      { id: "B", text: "height range." },
      { id: "C", text: "composition." }
    ],
    correctAnswer: "B",
    explanation: "Clouds are classified into four families based on their HEIGHT: High clouds (cirrus family, above 20,000 ft), Middle clouds (alto family, 6,500-20,000 ft), Low clouds (stratus family, surface-6,500 ft), and Clouds with vertical development (cumulus/cumulonimbus). Shape and composition vary within these families.",
    hint: "Think about how meteorologists categorize clouds - by what primary characteristic?",
    figureRef: null,
    difficulty: "easy",
    tags: ["clouds", "classification"],
    relatedQuestions: ["wx-045"],
    faaReference: null
  },
  {
    id: "wx-002",
    category: "weather",
    categoryName: "Weather",
    question: "Low-level turbulence can occur and icing can become hazardous in which type of fog?",
    options: [
      { id: "A", text: "Rain-induced fog." },
      { id: "B", text: "Upslope fog." },
      { id: "C", text: "Steam fog." }
    ],
    correctAnswer: "C",
    explanation: "Steam fog (also called sea smoke) forms when cold air moves over warm water. The temperature difference creates convective currents that cause low-level turbulence. When temperatures are near freezing, icing can occur. This type is particularly hazardous for low-flying aircraft.",
    hint: "Which type of fog involves warm water and cold air creating instability?",
    figureRef: null,
    difficulty: "hard",
    tags: ["fog", "turbulence", "icing"],
    relatedQuestions: ["wx-026", "wx-036"],
    faaReference: null
  },
  {
    id: "wx-003",
    category: "weather",
    categoryName: "Weather",
    question: "(Refer to Figure 15.) In the TAF for KMEM, what does 'SHRA' stand for?",
    options: [
      { id: "A", text: "Rain showers." },
      { id: "B", text: "A shift in wind direction is expected." },
      { id: "C", text: "A significant change in precipitation is possible." }
    ],
    correctAnswer: "A",
    explanation: "In aviation weather reports, SH = showers and RA = rain. So SHRA means 'rain showers' - precipitation that starts and stops, typical of convective weather. Weather codes combine intensity, descriptor, and type.",
    hint: "Aviation weather codes: SH = showers, RA = rain.",
    figureRef: "figure-15",
    difficulty: "medium",
    tags: ["taf", "weather-codes"],
    relatedQuestions: ["wx-019", "wx-42", "wx-56"],
    faaReference: null
  },
  {
    id: "wx-004",
    category: "weather",
    categoryName: "Weather",
    question: "What feature is normally associated with the cumulus stage of a thunderstorm?",
    options: [
      { id: "A", text: "Roll cloud." },
      { id: "B", text: "Continuous updraft." },
      { id: "C", text: "Frequent lightning." }
    ],
    correctAnswer: "B",
    explanation: "The CUMULUS (building) stage of a thunderstorm is characterized by CONTINUOUS UPDRAFTS as warm, moist air rises. There's no precipitation yet - the storm is just building. Downdrafts, precipitation, and lightning come in the MATURE stage. The DISSIPATING stage has mostly downdrafts.",
    hint: "In the building stage, what's happening to the air inside the cloud?",
    figureRef: null,
    difficulty: "medium",
    tags: ["thunderstorms", "stages"],
    relatedQuestions: ["wx-008", "wx-017", "wx-028"],
    faaReference: null
  },
  {
    id: "wx-005",
    category: "weather",
    categoryName: "Weather",
    question: "(Refer to Figure 15.) Between 1000Z and 1200Z the visibility at KMEM is forecast to be?",
    options: [
      { id: "A", text: "1/2 statute mile." },
      { id: "B", text: "3 statute miles." },
      { id: "C", text: "6 statute miles." }
    ],
    correctAnswer: "C",
    explanation: "Reading the TAF for KMEM during the 1000Z-1200Z timeframe, the visibility forecast is 6 statute miles (6SM). TAFs list visibility in statute miles, with 'P6SM' meaning greater than 6 miles.",
    hint: "Look for the visibility value in the TAF for that specific time period.",
    figureRef: "figure-15",
    difficulty: "medium",
    tags: ["taf", "visibility"],
    relatedQuestions: ["wx-54"],
    faaReference: null
  },
  {
    id: "wx-006",
    category: "weather",
    categoryName: "Weather",
    question: "The boundary between two different air masses is referred to as a",
    options: [
      { id: "A", text: "frontolysis." },
      { id: "B", text: "frontogenesis." },
      { id: "C", text: "front." }
    ],
    correctAnswer: "C",
    explanation: "A FRONT is the boundary between two different air masses. Frontogenesis is the FORMATION of a front. Frontolysis is the DISSIPATION of a front. The front itself is where you find weather changes - wind shifts, temperature changes, and often precipitation.",
    hint: "What's the simple term for the boundary between air masses?",
    figureRef: null,
    difficulty: "easy",
    tags: ["fronts", "definitions"],
    relatedQuestions: ["wx-007"],
    faaReference: null
  },
  {
    id: "wx-007",
    category: "weather",
    categoryName: "Weather",
    question: "One weather phenomenon which will always occur when flying across a front is a change in the",
    options: [
      { id: "A", text: "wind direction." },
      { id: "B", text: "type of precipitation." },
      { id: "C", text: "stability of the air mass." }
    ],
    correctAnswer: "A",
    explanation: "When crossing ANY front, wind direction will ALWAYS change - this is because fronts separate air masses with different pressure patterns. Precipitation and stability changes are common but not guaranteed - a weak front might have neither. Wind shift is the one constant.",
    hint: "What's the one thing that ALWAYS changes at a frontal boundary?",
    figureRef: null,
    difficulty: "medium",
    tags: ["fronts", "wind"],
    relatedQuestions: ["wx-006"],
    faaReference: null
  },
  {
    id: "wx-008",
    category: "weather",
    categoryName: "Weather",
    question: "Which weather phenomenon is always associated with a thunderstorm?",
    options: [
      { id: "A", text: "Lightning." },
      { id: "B", text: "Heavy rain." },
      { id: "C", text: "Hail." }
    ],
    correctAnswer: "A",
    explanation: "LIGHTNING is the defining characteristic of a thunderstorm - by definition, if there's no lightning, it's not a thunderstorm! Heavy rain is common but not always present (dry thunderstorms exist). Hail occurs in many but not all thunderstorms.",
    hint: "What makes a 'thunderstorm' different from just a rainstorm?",
    figureRef: null,
    difficulty: "easy",
    tags: ["thunderstorms", "lightning"],
    relatedQuestions: ["wx-004", "wx-014", "wx-058", "wx-059"],
    faaReference: null
  },
  {
    id: "wx-009",
    category: "weather",
    categoryName: "Weather",
    question: "If there is thunderstorm activity in the vicinity of an airport at which you plan to land, which hazardous atmospheric phenomenon might be expected on the landing approach?",
    options: [
      { id: "A", text: "Precipitation static." },
      { id: "B", text: "Wind-shear turbulence." },
      { id: "C", text: "Steady rain." }
    ],
    correctAnswer: "B",
    explanation: "Wind shear and turbulence are the primary hazards near thunderstorms, especially on approach. Thunderstorm downdrafts can create sudden, dangerous changes in wind speed and direction. This can cause aircraft to suddenly lose lift - extremely hazardous at low altitudes during landing.",
    hint: "Thunderstorms produce downdrafts that create what dangerous condition?",
    figureRef: null,
    difficulty: "medium",
    tags: ["thunderstorms", "wind-shear", "turbulence"],
    relatedQuestions: ["wx-046"],
    faaReference: null
  },
  {
    id: "wx-010",
    category: "weather",
    categoryName: "Weather",
    question: "For aviation purposes, ceiling is defined as the height above the Earth's surface of the",
    options: [
      { id: "A", text: "lowest reported obscuration and the highest layer of clouds reported as overcast." },
      { id: "B", text: "lowest broken or overcast layer or vertical visibility into an obscuration." },
      { id: "C", text: "lowest layer of clouds reported as scattered, broken, or thin." }
    ],
    correctAnswer: "B",
    explanation: "CEILING is the height AGL of the lowest layer that is BROKEN (5/8-7/8 coverage) or OVERCAST (8/8 coverage), or vertical visibility into an obscuration. Scattered clouds (3/8-4/8) and Few (1/8-2/8) don't constitute a ceiling because you can see between them.",
    hint: "What coverage must clouds have to be considered a 'ceiling'?",
    figureRef: null,
    difficulty: "medium",
    tags: ["ceiling", "definitions", "clouds"],
    relatedQuestions: [],
    faaReference: null
  },
  {
    id: "wx-011",
    category: "weather",
    categoryName: "Weather",
    question: "Every physical process of weather is accompanied by, or is the result of, a",
    options: [
      { id: "A", text: "movement of air." },
      { id: "B", text: "pressure differential." },
      { id: "C", text: "heat exchange." }
    ],
    correctAnswer: "C",
    explanation: "HEAT EXCHANGE is the fundamental driver of all weather. The sun heats the Earth unevenly, creating temperature differences. These temperature differences create pressure differences, which cause air movement (wind). Clouds, precipitation, fronts - all result from heat exchange processes.",
    hint: "What's the fundamental energy source driving all weather?",
    figureRef: null,
    difficulty: "medium",
    tags: ["weather-basics", "heat"],
    relatedQuestions: [],
    faaReference: null
  },
  {
    id: "wx-012",
    category: "weather",
    categoryName: "Weather",
    question: "What is the approximate base of the cumulus clouds if the surface air temperature at 1,000 feet MSL is 70 °F and the dewpoint is 48 °F?",
    options: [
      { id: "A", text: "4,000 feet MSL." },
      { id: "B", text: "5,000 feet MSL." },
      { id: "C", text: "6,000 feet MSL." }
    ],
    correctAnswer: "C",
    explanation: "Cloud base can be estimated using the spread between temperature and dewpoint. The spread is 70°F - 48°F = 22°F. Divide by the convergence rate (approximately 4.4°F per 1,000 feet): 22 ÷ 4.4 ≈ 5,000 feet AGL. Add the surface elevation of 1,000 feet MSL: 5,000 + 1,000 = 6,000 feet MSL.",
    hint: "Use the temperature/dewpoint spread divided by convergence rate, then add surface elevation.",
    figureRef: null,
    difficulty: "hard",
    tags: ["clouds", "calculations", "temperature-dewpoint"],
    relatedQuestions: ["wx-043"],
    faaReference: null
  },
  {
    id: "wx-013",
    category: "weather",
    categoryName: "Weather",
    question: "(Refer to Figure 12.) What are the current conditions for Chicago Midway Airport (KMDW)?",
    options: [
      { id: "A", text: "Sky 700 feet overcast, visibility 1-1/2SM, rain." },
      { id: "B", text: "Sky 7,000 feet overcast, visibility 1-1/2SM, heavy rain." },
      { id: "C", text: "Sky 700 feet overcast, visibility 11, occasionally 2SM, with rain." }
    ],
    correctAnswer: "A",
    explanation: "Reading the METAR for KMDW: Cloud layer at 700 feet overcast (OVC007), visibility 1.5 statute miles (1 1/2SM), with rain (RA). METARs report cloud heights in hundreds of feet (007 = 700 feet).",
    hint: "In METARs, cloud heights are in hundreds of feet.",
    figureRef: "figure-12",
    difficulty: "medium",
    tags: ["metar", "reading-weather"],
    relatedQuestions: ["wx-020", "wx-023", "wx-048"],
    faaReference: null
  },
  {
    id: "wx-014",
    category: "weather",
    categoryName: "Weather",
    question: "What conditions are necessary for the formation of thunderstorms?",
    options: [
      { id: "A", text: "High humidity, lifting force, and unstable conditions." },
      { id: "B", text: "High humidity, high temperature, and cumulus clouds." },
      { id: "C", text: "Lifting force, moist air, and extensive cloud cover." }
    ],
    correctAnswer: "A",
    explanation: "Three ingredients for thunderstorms: 1) MOISTURE (high humidity), 2) LIFTING mechanism (fronts, mountains, heating), and 3) UNSTABLE air (air that continues rising when lifted). Without all three, thunderstorms cannot form.",
    hint: "Thunderstorms need moisture, lift, and instability.",
    figureRef: null,
    difficulty: "medium",
    tags: ["thunderstorms", "formation"],
    relatedQuestions: ["wx-008", "wx-024"],
    faaReference: null
  },
  {
    id: "wx-015",
    category: "weather",
    categoryName: "Weather",
    question: "What cloud types would indicate convective turbulence?",
    options: [
      { id: "A", text: "Cirrus clouds." },
      { id: "B", text: "Nimbostratus clouds." },
      { id: "C", text: "Towering cumulus clouds." }
    ],
    correctAnswer: "C",
    explanation: "TOWERING CUMULUS (TCU) clouds indicate strong convection (vertical air movement) and turbulence. They're building into thunderstorms. Cirrus are high, thin ice clouds with no turbulence. Nimbostratus are thick rain clouds but with smooth, stable air.",
    hint: "Which clouds show strong vertical air movement?",
    figureRef: null,
    difficulty: "easy",
    tags: ["clouds", "turbulence", "convection"],
    relatedQuestions: ["wx-058"],
    faaReference: null
  },
  {
    id: "wx-016",
    category: "weather",
    categoryName: "Weather",
    question: "When warm, moist, stable air flows upslope, it",
    options: [
      { id: "A", text: "produces stratus type clouds." },
      { id: "B", text: "causes showers and thunderstorms." },
      { id: "C", text: "develops convective turbulence." }
    ],
    correctAnswer: "A",
    explanation: "STABLE air, when lifted (upslope), cools and produces STRATUS (layered) clouds. The air doesn't want to keep rising - it just spreads out horizontally. Unstable air would produce cumulus clouds and potentially thunderstorms with turbulence.",
    hint: "Stable air + lifting = what type of clouds?",
    figureRef: null,
    difficulty: "medium",
    tags: ["stability", "clouds", "stratus"],
    relatedQuestions: ["wx-027", "wx-022"],
    faaReference: null
  },
  {
    id: "wx-017",
    category: "weather",
    categoryName: "Weather",
    question: "Which weather phenomenon signals the beginning of the mature stage of a thunderstorm?",
    options: [
      { id: "A", text: "The appearance of an anvil top." },
      { id: "B", text: "Precipitation beginning to fall." },
      { id: "C", text: "Maximum growth rate of the clouds." }
    ],
    correctAnswer: "B",
    explanation: "The MATURE stage begins when PRECIPITATION starts falling from the cloud. This creates downdrafts alongside the updrafts. The anvil top develops during mature stage. Maximum growth rate is during cumulus stage.",
    hint: "What event marks the transition from cumulus (building) to mature stage?",
    figureRef: null,
    difficulty: "medium",
    tags: ["thunderstorms", "stages"],
    relatedQuestions: ["wx-004", "wx-028"],
    faaReference: null
  },
  {
    id: "wx-018",
    category: "weather",
    categoryName: "Weather",
    question: "One in-flight condition necessary for structural icing to form is",
    options: [
      { id: "A", text: "small temperature/dewpoint spread." },
      { id: "B", text: "stratiform clouds." },
      { id: "C", text: "visible moisture." }
    ],
    correctAnswer: "C",
    explanation: "For structural icing: you need 1) VISIBLE MOISTURE (clouds, rain, etc.) and 2) freezing temperatures. Small T/DP spread indicates potential fog/clouds but not necessarily icing. Stratiform clouds can have icing, but cumulus can too. Visible moisture is essential.",
    hint: "What must be present for ice to form on an aircraft?",
    figureRef: null,
    difficulty: "medium",
    tags: ["icing", "hazards"],
    relatedQuestions: ["wx-039"],
    faaReference: null
  },
  {
    id: "wx-019",
    category: "weather",
    categoryName: "Weather",
    question: "(Refer to Figure 15.) In the TAF from KOKC, the 'FM (FROM) Group' is forecast for the hours from 1600Z to 2200Z with the wind from",
    options: [
      { id: "A", text: "180° at 10 knots." },
      { id: "B", text: "180° at 10 knots, becoming 200° at 13 knots." },
      { id: "C", text: "160° at 10 knots." }
    ],
    correctAnswer: "A",
    explanation: "Reading the TAF for KOKC, the FM (FROM) group starting at 1600Z shows wind 18010KT - meaning wind FROM 180° at 10 knots. FM groups indicate a significant change expected at that time.",
    hint: "FM groups show new conditions expected at a specific time.",
    figureRef: "figure-15",
    difficulty: "medium",
    tags: ["taf", "wind"],
    relatedQuestions: ["wx-003", "wx-42"],
    faaReference: null
  },
  {
    id: "wx-020",
    category: "weather",
    categoryName: "Weather",
    question: "(Refer to Figure 12.) Which of the reporting stations have VFR weather?",
    options: [
      { id: "A", text: "All." },
      { id: "B", text: "KINK, KBOI, and KJFK." },
      { id: "C", text: "KINK, KBOI, and KLAX." }
    ],
    correctAnswer: "C",
    explanation: "VFR weather requires at least 3 SM visibility and ceiling at least 1,000 feet (for basic VFR). Looking at the METARs, KINK, KBOI, and KLAX meet VFR minimums. KJFK and KMDW show IFR conditions with low visibility or ceiling.",
    hint: "VFR requires 3 miles visibility and 1,000 foot ceiling minimum.",
    figureRef: "figure-12",
    difficulty: "medium",
    tags: ["metar", "vfr-ifr"],
    relatedQuestions: ["wx-013"],
    faaReference: null
  },
  {
    id: "wx-021",
    category: "weather",
    categoryName: "Weather",
    question: "The wind at 5,000 feet AGL is southwesterly while the surface wind is southerly. This difference in direction is primarily due to",
    options: [
      { id: "A", text: "stronger pressure gradient at higher altitudes." },
      { id: "B", text: "friction between the wind and the surface." },
      { id: "C", text: "stronger Coriolis force at the surface." }
    ],
    correctAnswer: "B",
    explanation: "Surface FRICTION slows the wind and causes it to deflect from the upper winds. At the surface, wind blows more toward low pressure (crossing isobars). At altitude, with no friction, wind flows more parallel to isobars. The Coriolis effect is actually the same at both levels.",
    hint: "What force acts on wind at the surface that doesn't affect winds aloft?",
    figureRef: null,
    difficulty: "hard",
    tags: ["wind", "friction"],
    relatedQuestions: [],
    faaReference: null
  },
  {
    id: "wx-022",
    category: "weather",
    categoryName: "Weather",
    question: "What are characteristics of unstable air?",
    options: [
      { id: "A", text: "Turbulence and good surface visibility." },
      { id: "B", text: "Turbulence and poor surface visibility." },
      { id: "C", text: "Nimbostratus clouds and good surface visibility." }
    ],
    correctAnswer: "A",
    explanation: "UNSTABLE air has TURBULENCE (vertical movement) but GOOD visibility because particles are dispersed upward rather than concentrated. Stable air has smooth flying but poor visibility (haze/fog trapped). Unstable air produces cumulus clouds, not nimbostratus.",
    hint: "Unstable air moves vertically - what does that do to visibility?",
    figureRef: null,
    difficulty: "medium",
    tags: ["stability", "visibility", "turbulence"],
    relatedQuestions: ["wx-027", "wx-053", "wx-055"],
    faaReference: null
  },
  {
    id: "wx-023",
    category: "weather",
    categoryName: "Weather",
    question: "(Refer to Figure 12.) The wind direction and velocity at KJFK is from",
    options: [
      { id: "A", text: "180° true at 4 knots." },
      { id: "B", text: "180° magnetic at 4 knots." },
      { id: "C", text: "040° true at 18 knots." }
    ],
    correctAnswer: "A",
    explanation: "METARs report wind direction in degrees TRUE (not magnetic) and speed in knots. Reading the METAR for KJFK, the wind is 18004KT - FROM 180° TRUE at 4 knots.",
    hint: "METAR wind directions are always TRUE north, not magnetic.",
    figureRef: "figure-12",
    difficulty: "medium",
    tags: ["metar", "wind"],
    relatedQuestions: ["wx-048"],
    faaReference: null
  },
  {
    id: "wx-024",
    category: "weather",
    categoryName: "Weather",
    question: "The conditions necessary for the formation of cumulonimbus clouds are a lifting action and",
    options: [
      { id: "A", text: "unstable air containing an excess of condensation nuclei." },
      { id: "B", text: "unstable, moist air." },
      { id: "C", text: "either stable or unstable air." }
    ],
    correctAnswer: "B",
    explanation: "Cumulonimbus (thunderstorm) clouds require LIFTING + UNSTABLE air + MOISTURE. Condensation nuclei are always present in sufficient quantity. Stable air cannot produce cumulonimbus - it would only produce stratus if lifted.",
    hint: "Thunderstorm clouds need what type of air conditions?",
    figureRef: null,
    difficulty: "medium",
    tags: ["clouds", "cumulonimbus", "thunderstorms"],
    relatedQuestions: ["wx-014"],
    faaReference: null
  },
  {
    id: "wx-025",
    category: "weather",
    categoryName: "Weather",
    question: "Clouds, fog, or dew will always form when",
    options: [
      { id: "A", text: "water vapor condenses." },
      { id: "B", text: "water vapor is present." },
      { id: "C", text: "relative humidity reaches 100 percent." }
    ],
    correctAnswer: "A",
    explanation: "Clouds/fog/dew form when water vapor CONDENSES - changes from gas to liquid. Just having water vapor or 100% humidity doesn't guarantee visible moisture - condensation must actually occur. Condensation requires cooling to the dewpoint.",
    hint: "What physical process creates visible moisture?",
    figureRef: null,
    difficulty: "medium",
    tags: ["condensation", "fog", "clouds"],
    relatedQuestions: ["wx-043"],
    faaReference: null
  },
  {
    id: "wx-026",
    category: "weather",
    categoryName: "Weather",
    question: "What types of fog depend upon wind in order to exist?",
    options: [
      { id: "A", text: "Radiation fog and ice fog." },
      { id: "B", text: "Steam fog and ground fog." },
      { id: "C", text: "Advection fog and upslope fog." }
    ],
    correctAnswer: "C",
    explanation: "ADVECTION fog forms when warm, moist air moves OVER a cold surface - requires wind to move the air. UPSLOPE fog forms when air is pushed up terrain - requires wind. Radiation fog forms in calm, clear conditions. Steam fog forms over warm water regardless of wind.",
    hint: "Which fog types require air to be moving?",
    figureRef: null,
    difficulty: "medium",
    tags: ["fog", "wind"],
    relatedQuestions: ["wx-002", "wx-036"],
    faaReference: null
  },
  {
    id: "wx-027",
    category: "weather",
    categoryName: "Weather",
    question: "What is a characteristic of stable air?",
    options: [
      { id: "A", text: "Stratiform clouds." },
      { id: "B", text: "Unlimited visibility." },
      { id: "C", text: "Cumulus clouds." }
    ],
    correctAnswer: "A",
    explanation: "STABLE air produces STRATIFORM (layered) clouds because air doesn't want to rise - it spreads horizontally. Stable air also has poor visibility (haze trapped) and smooth flying. Cumulus clouds indicate unstable air.",
    hint: "Stable air spreads out horizontally, producing what type of clouds?",
    figureRef: null,
    difficulty: "easy",
    tags: ["stability", "clouds", "stratus"],
    relatedQuestions: ["wx-016", "wx-022"],
    faaReference: null
  },
  {
    id: "wx-028",
    category: "weather",
    categoryName: "Weather",
    question: "During the life cycle of a thunderstorm, which stage is characterized predominately by downdrafts?",
    options: [
      { id: "A", text: "Cumulus." },
      { id: "B", text: "Dissipating." },
      { id: "C", text: "Mature." }
    ],
    correctAnswer: "B",
    explanation: "The DISSIPATING stage has predominantly DOWNDRAFTS as the storm dies. Cumulus stage = updrafts only. Mature stage = both updrafts and downdrafts. Dissipating = downdrafts cut off the updrafts, and the storm dies.",
    hint: "In which stage does the storm 'exhale' and die?",
    figureRef: null,
    difficulty: "medium",
    tags: ["thunderstorms", "stages"],
    relatedQuestions: ["wx-004", "wx-017"],
    faaReference: null
  },
  {
    id: "wx-029",
    category: "weather",
    categoryName: "Weather",
    question: "What feature is associated with a temperature inversion?",
    options: [
      { id: "A", text: "A stable layer of air." },
      { id: "B", text: "An unstable layer of air." },
      { id: "C", text: "Chinook winds on mountain slopes." }
    ],
    correctAnswer: "A",
    explanation: "Temperature inversions create STABLE layers of air. Normally temperature decreases with altitude. An inversion is where temperature INCREASES with altitude - this prevents vertical movement (stability) and traps pollutants, fog, and haze below.",
    hint: "Inversions trap air below them - what does that make the air?",
    figureRef: null,
    difficulty: "medium",
    tags: ["temperature-inversion", "stability"],
    relatedQuestions: ["wx-032", "wx-034", "wx-041", "wx-050"],
    faaReference: null
  },
  {
    id: "wx-030",
    category: "weather",
    categoryName: "Weather",
    question: "Possible mountain wave turbulence could be anticipated when winds of 40 knots or greater blow",
    options: [
      { id: "A", text: "across a mountain ridge, and the air is stable." },
      { id: "B", text: "down a mountain valley, and the air is unstable." },
      { id: "C", text: "parallel to a mountain peak, and the air is stable." }
    ],
    correctAnswer: "A",
    explanation: "Mountain waves form when strong winds blow ACROSS (perpendicular to) mountain ridges and the air is STABLE. The stable air flows over the ridge like water over a rock, creating waves downstream. These can extend for miles and cause severe turbulence.",
    hint: "Mountain waves need perpendicular wind flow and stable air.",
    figureRef: null,
    difficulty: "hard",
    tags: ["turbulence", "mountain-wave"],
    relatedQuestions: ["wx-052"],
    faaReference: null
  },
  {
    id: "wx-031",
    category: "weather",
    categoryName: "Weather",
    question: "An air mass moving inland from the coast in winter is likely to result in",
    options: [
      { id: "A", text: "rain." },
      { id: "B", text: "fog." },
      { id: "C", text: "frost." }
    ],
    correctAnswer: "A",
    explanation: "In winter, coastal air moving inland is typically warmer and moister than the cold land. This warm, moist air meets cold land, causing precipitation (rain or snow depending on temperatures). This is different from summer patterns.",
    hint: "What happens when warm, moist ocean air meets cold winter land?",
    figureRef: null,
    difficulty: "hard",
    tags: ["air-masses", "precipitation"],
    relatedQuestions: ["wx-036"],
    faaReference: null
  },
  {
    id: "wx-032",
    category: "weather",
    categoryName: "Weather",
    question: "The most frequent type of ground or surface-based temperature inversion is that which is produced by",
    options: [
      { id: "A", text: "terrestrial radiation on a clear, relatively still night." },
      { id: "B", text: "warm air being lifted rapidly aloft in the vicinity of mountainous terrain." },
      { id: "C", text: "the movement of colder air under warm air, or the movement of warm air over cold air." }
    ],
    correctAnswer: "A",
    explanation: "RADIATION inversions are most common. On clear, calm nights, the ground radiates heat and cools rapidly. The air touching the ground cools while air above stays warmer - creating an inversion. This is why fog often forms on clear, calm nights.",
    hint: "Clear nights allow heat to escape - what happens to surface air?",
    figureRef: null,
    difficulty: "hard",
    tags: ["temperature-inversion", "radiation"],
    relatedQuestions: ["wx-029", "wx-034"],
    faaReference: null
  },
  {
    id: "wx-033",
    category: "weather",
    categoryName: "Weather",
    question: "What measurement can be used to determine the stability of the atmosphere?",
    options: [
      { id: "A", text: "Atmospheric pressure." },
      { id: "B", text: "Actual lapse rate." },
      { id: "C", text: "Surface temperature." }
    ],
    correctAnswer: "B",
    explanation: "The ACTUAL LAPSE RATE (how fast temperature decreases with altitude in the real atmosphere) compared to the standard rate determines stability. If actual lapse rate is greater than standard, air is unstable. If less, air is stable.",
    hint: "Stability depends on how temperature changes with altitude.",
    figureRef: null,
    difficulty: "hard",
    tags: ["stability", "lapse-rate"],
    relatedQuestions: [],
    faaReference: null
  },
  {
    id: "wx-034",
    category: "weather",
    categoryName: "Weather",
    question: "A temperature inversion would most likely result in which weather condition?",
    options: [
      { id: "A", text: "Clouds with extensive vertical development above an inversion aloft." },
      { id: "B", text: "Good visibility in the lower levels of the atmosphere and poor visibility above an inversion aloft." },
      { id: "C", text: "An increase in temperature as altitude is increased." }
    ],
    correctAnswer: "C",
    explanation: "By DEFINITION, a temperature inversion means temperature INCREASES with altitude (opposite of normal). This is what makes it an 'inversion' of the normal lapse rate. It also causes poor visibility below and traps pollutants/fog.",
    hint: "What makes an inversion an 'inversion'?",
    figureRef: null,
    difficulty: "medium",
    tags: ["temperature-inversion", "definitions"],
    relatedQuestions: ["wx-029", "wx-041", "wx-050"],
    faaReference: null
  },
  {
    id: "wx-035",
    category: "weather",
    categoryName: "Weather",
    question: "Steady precipitation preceding a front is an indication of",
    options: [
      { id: "A", text: "stratiform clouds with moderate turbulence." },
      { id: "B", text: "cumuliform clouds with little or no turbulence." },
      { id: "C", text: "stratiform clouds with little or no turbulence." }
    ],
    correctAnswer: "C",
    explanation: "STEADY precipitation (not showery) comes from STRATIFORM clouds, which have LITTLE or NO turbulence. Cumuliform clouds produce showery precipitation with turbulence. Steady rain ahead of a warm front is classic stratus with smooth flying.",
    hint: "Steady rain = stratus clouds = what kind of flying conditions?",
    figureRef: null,
    difficulty: "medium",
    tags: ["fronts", "precipitation", "clouds"],
    relatedQuestions: ["wx-053"],
    faaReference: null
  },
  {
    id: "wx-036",
    category: "weather",
    categoryName: "Weather",
    question: "In which situation is advection fog most likely to form?",
    options: [
      { id: "A", text: "A warm, moist air mass on the windward side of mountains." },
      { id: "B", text: "An air mass moving inland from the coast in winter." },
      { id: "C", text: "A light breeze blowing colder air out to sea." }
    ],
    correctAnswer: "B",
    explanation: "ADVECTION fog forms when warm, moist air moves over a COLDER surface. In winter, coastal air moving inland encounters cold land - perfect for advection fog. Wind is required to 'advect' (move) the warm air over the cold surface.",
    hint: "Advection fog needs warm moist air moving over cold surface.",
    figureRef: null,
    difficulty: "medium",
    tags: ["fog", "advection"],
    relatedQuestions: ["wx-026", "wx-002"],
    faaReference: null
  },
  {
    id: "wx-037",
    category: "weather",
    categoryName: "Weather",
    question: "A nonfrontal, narrow band of active thunderstorms that often develop ahead of a cold front is a known as a",
    options: [
      { id: "A", text: "prefrontal system." },
      { id: "B", text: "squall line." },
      { id: "C", text: "dry line." }
    ],
    correctAnswer: "B",
    explanation: "A SQUALL LINE is a line of severe thunderstorms that forms ahead of (but separate from) a cold front. It's NOT part of the front itself. Squall lines contain the most intense thunderstorms and are extremely hazardous.",
    hint: "What's the term for a line of severe storms ahead of a cold front?",
    figureRef: null,
    difficulty: "medium",
    tags: ["thunderstorms", "squall-line", "fronts"],
    relatedQuestions: ["wx-059"],
    faaReference: null
  },
  {
    id: "wx-038",
    category: "weather",
    categoryName: "Weather",
    question: "(Refer to Figure 19.) What weather is forecast for the Florida area just ahead of the stationary front during the first 12 hours?",
    options: [
      { id: "A", text: "Ceiling 1,000 to 3,000 feet and/or visibility 3 to 5 miles with continuous precipitation." },
      { id: "B", text: "Ceiling 1,000 to 3,000 feet and/or visibility 3 to 5 miles with intermittent precipitation." },
      { id: "C", text: "Ceiling less than 1,000 feet and/or visibility less than 3 miles with continuous precipitation." }
    ],
    correctAnswer: "B",
    explanation: "Reading the Significant Weather Prognostic Chart for Florida near the stationary front: the symbology indicates MVFR conditions (ceiling 1,000-3,000 feet, visibility 3-5 miles) with intermittent precipitation.",
    hint: "Read the chart symbols for ceiling, visibility, and precipitation type.",
    figureRef: "figure-19",
    difficulty: "hard",
    tags: ["prognostic-chart", "fronts"],
    relatedQuestions: ["wx-040", "wx-047", "wx-060"],
    faaReference: null
  },
  {
    id: "wx-039",
    category: "weather",
    categoryName: "Weather",
    question: "In which environment is aircraft structural ice most likely to have the highest accumulation rate?",
    options: [
      { id: "A", text: "Cumulus clouds with below freezing temperatures." },
      { id: "B", text: "Freezing drizzle." },
      { id: "C", text: "Freezing rain." }
    ],
    correctAnswer: "C",
    explanation: "FREEZING RAIN produces the highest ice accumulation rate because the water drops are large and immediately freeze on contact. It's the most dangerous icing condition. Freezing drizzle is also dangerous but has smaller drops. Cloud icing is generally slower.",
    hint: "Larger water drops = faster ice accumulation.",
    figureRef: null,
    difficulty: "medium",
    tags: ["icing", "hazards"],
    relatedQuestions: ["wx-018"],
    faaReference: null
  },
  {
    id: "wx-040",
    category: "weather",
    categoryName: "Weather",
    question: "(Refer to Figure 19.) At what altitude is the freezing level over the middle of Florida on the 12-hour Significant Weather Prognostic Chart?",
    options: [
      { id: "A", text: "4,000 feet." },
      { id: "B", text: "12,000 feet." },
      { id: "C", text: "8,000 feet." }
    ],
    correctAnswer: "B",
    explanation: "The Significant Weather Prognostic Chart shows freezing level contours. Over the middle of Florida on the 12-hour prog, the freezing level is indicated at 12,000 feet MSL.",
    hint: "Find the freezing level lines on the chart for the Florida area.",
    figureRef: "figure-19",
    difficulty: "medium",
    tags: ["prognostic-chart", "freezing-level"],
    relatedQuestions: ["wx-038", "wx-047"],
    faaReference: null
  },
  {
    id: "wx-041",
    category: "weather",
    categoryName: "Weather",
    question: "You have received an outlook briefing from flight service through 1800wxbrief.com. The briefing indicates you can expect a low-level temperature inversion with high relative humidity. What weather conditions would you expect when operating within the inversion?",
    options: [
      { id: "A", text: "Smooth air, poor visibility, fog, haze, or low clouds." },
      { id: "B", text: "Light wind shear, poor visibility, haze, and light rain." },
      { id: "C", text: "Turbulent air, poor visibility, fog, low stratus type clouds, and showery precipitation." }
    ],
    correctAnswer: "A",
    explanation: "Temperature inversions create STABLE air (smooth flying) but trap moisture and pollutants, causing POOR VISIBILITY, fog, haze, and low stratus clouds. There's no turbulence (stable air) and no showery precipitation (that requires instability).",
    hint: "Inversions = stability = smooth air but trapped pollutants.",
    figureRef: null,
    difficulty: "medium",
    tags: ["temperature-inversion", "visibility"],
    relatedQuestions: ["wx-029", "wx-050"],
    faaReference: null
  },
  {
    id: "wx-042",
    category: "weather",
    categoryName: "Weather",
    question: "(Refer to Figure 15.) What is the forecast wind for KMEM from 1600Z until the end of the forecast?",
    options: [
      { id: "A", text: "Variable in direction at 4 knots." },
      { id: "B", text: "No significant wind." },
      { id: "C", text: "Variable in direction at 6 knots." }
    ],
    correctAnswer: "C",
    explanation: "Reading the TAF for KMEM from 1600Z to the end, the wind is shown as VRB06KT - variable in direction at 6 knots. VRB indicates variable wind direction (typically used when speed is low).",
    hint: "VRB = variable wind direction.",
    figureRef: "figure-15",
    difficulty: "medium",
    tags: ["taf", "wind"],
    relatedQuestions: ["wx-003", "wx-019"],
    faaReference: null
  },
  {
    id: "wx-043",
    category: "weather",
    categoryName: "Weather",
    question: "What is meant by the term 'dewpoint'?",
    options: [
      { id: "A", text: "The temperature at which condensation and evaporation are equal." },
      { id: "B", text: "The temperature at which dew will always form." },
      { id: "C", text: "The temperature to which air must be cooled to become saturated." }
    ],
    correctAnswer: "C",
    explanation: "DEWPOINT is the temperature to which air must be COOLED (at constant pressure) to become SATURATED (100% relative humidity). When temperature equals dewpoint, condensation occurs. Dew doesn't 'always' form at dewpoint - other factors matter.",
    hint: "It's the temperature for saturation, not automatic dew formation.",
    figureRef: null,
    difficulty: "medium",
    tags: ["dewpoint", "definitions"],
    relatedQuestions: ["wx-012", "wx-025", "wx-051"],
    faaReference: null
  },
  {
    id: "wx-044",
    category: "weather",
    categoryName: "Weather",
    question: "If an unstable air mass is forced upward, what type clouds can be expected?",
    options: [
      { id: "A", text: "Stratus clouds with little vertical development." },
      { id: "B", text: "Stratus clouds with considerable associated turbulence." },
      { id: "C", text: "Clouds with considerable vertical development and associated turbulence." }
    ],
    correctAnswer: "C",
    explanation: "UNSTABLE air, when lifted, CONTINUES to rise, producing clouds with VERTICAL DEVELOPMENT (cumulus-type) and TURBULENCE. Stratus clouds come from stable air. Turbulence is associated with vertical movement, not stratus.",
    hint: "Unstable air rises vigorously, producing what shape clouds?",
    figureRef: null,
    difficulty: "easy",
    tags: ["stability", "clouds", "cumulus"],
    relatedQuestions: ["wx-016", "wx-022", "wx-053"],
    faaReference: null
  },
  {
    id: "wx-045",
    category: "weather",
    categoryName: "Weather",
    question: "The suffix 'nimbus,' used in naming clouds, means",
    options: [
      { id: "A", text: "a cloud with extensive vertical development." },
      { id: "B", text: "a rain cloud." },
      { id: "C", text: "a middle cloud containing ice pellets." }
    ],
    correctAnswer: "B",
    explanation: "'NIMBUS' means RAIN-bearing. Cumulonimbus = cumulus + nimbus = towering + rain = thunderstorm cloud. Nimbostratus = stratus + nimbus = layered rain cloud. When you see 'nimbus' in a cloud name, expect precipitation.",
    hint: "Nimbus relates to precipitation.",
    figureRef: null,
    difficulty: "easy",
    tags: ["clouds", "terminology"],
    relatedQuestions: ["wx-001"],
    faaReference: null
  },
  {
    id: "wx-046",
    category: "weather",
    categoryName: "Weather",
    question: "Where does wind shear occur?",
    options: [
      { id: "A", text: "Only at higher altitudes." },
      { id: "B", text: "Only at lower altitudes." },
      { id: "C", text: "At all altitudes, in all directions." }
    ],
    correctAnswer: "C",
    explanation: "Wind shear can occur at ANY altitude and in ANY direction - horizontal, vertical, or both. It occurs near fronts, around thunderstorms, near temperature inversions, around mountains, and from microbursts. It's a universal hazard.",
    hint: "Wind shear isn't limited to any specific altitude or direction.",
    figureRef: null,
    difficulty: "easy",
    tags: ["wind-shear"],
    relatedQuestions: ["wx-009"],
    faaReference: null
  },
  {
    id: "wx-047",
    category: "weather",
    categoryName: "Weather",
    question: "(Refer to Figure 19.) Interpret the weather symbol depicted in Utah on the 12-hour Significant Weather Prognostic Chart.",
    options: [
      { id: "A", text: "Moderate turbulence, surface to 18,000 feet." },
      { id: "B", text: "Base of clear air turbulence, 18,000 feet." },
      { id: "C", text: "Thunderstorm tops at 18,000 feet." }
    ],
    correctAnswer: "A",
    explanation: "The symbol on the prognostic chart for Utah shows moderate turbulence expected from the surface to 18,000 feet MSL. Prognostic charts use standard symbols to indicate turbulence, icing, and other hazards.",
    hint: "Interpret the specific symbol shown for the Utah area.",
    figureRef: "figure-19",
    difficulty: "hard",
    tags: ["prognostic-chart", "turbulence"],
    relatedQuestions: ["wx-038", "wx-040"],
    faaReference: null
  },
  {
    id: "wx-048",
    category: "weather",
    categoryName: "Weather",
    question: "(Refer to Figure 12.) What are the wind conditions at Wink, Texas (KINK)?",
    options: [
      { id: "A", text: "Calm." },
      { id: "B", text: "110° at 12 knots, gusts 18 knots." },
      { id: "C", text: "111° at 2 knots, gusts 18 knots." }
    ],
    correctAnswer: "B",
    explanation: "Reading the METAR for KINK, the wind is 11012G18KT - from 110° at 12 knots with gusts to 18 knots. The G indicates gusts. Wind format: direction (3 digits) + speed + optional gust.",
    hint: "Read the wind group: direction + speed + gust if present.",
    figureRef: "figure-12",
    difficulty: "medium",
    tags: ["metar", "wind"],
    relatedQuestions: ["wx-023"],
    faaReference: null
  },
  {
    id: "wx-049",
    category: "weather",
    categoryName: "Weather",
    question: "What are the processes by which moisture is added to unsaturated air?",
    options: [
      { id: "A", text: "Evaporation and sublimation." },
      { id: "B", text: "Heating and condensation." },
      { id: "C", text: "Supersaturation and evaporation." }
    ],
    correctAnswer: "A",
    explanation: "Moisture is ADDED to air by EVAPORATION (liquid to gas) and SUBLIMATION (solid directly to gas, like snow evaporating). Condensation REMOVES moisture from air (gas to liquid). Heating doesn't add moisture, just changes humidity percentage.",
    hint: "What processes turn water from solid/liquid into vapor?",
    figureRef: null,
    difficulty: "medium",
    tags: ["humidity", "evaporation"],
    relatedQuestions: ["wx-051"],
    faaReference: null
  },
  {
    id: "wx-050",
    category: "weather",
    categoryName: "Weather",
    question: "Which weather conditions should be expected beneath a low-level temperature inversion layer when the relative humidity is high?",
    options: [
      { id: "A", text: "Smooth air, poor visibility, fog, haze, or low clouds." },
      { id: "B", text: "Light wind shear, poor visibility, haze, and light rain." },
      { id: "C", text: "Turbulent air, poor visibility, fog, low stratus type clouds, and showery precipitation." }
    ],
    correctAnswer: "A",
    explanation: "Under a temperature inversion with high humidity: SMOOTH air (stable), POOR VISIBILITY (moisture trapped), fog or haze. No turbulence (stable air), no showery precipitation (requires instability). Classic inversion weather.",
    hint: "Inversions trap moisture below, creating what conditions?",
    figureRef: null,
    difficulty: "medium",
    tags: ["temperature-inversion", "visibility"],
    relatedQuestions: ["wx-029", "wx-041"],
    faaReference: null
  },
  {
    id: "wx-051",
    category: "weather",
    categoryName: "Weather",
    question: "The amount of water vapor which air can hold depends on the",
    options: [
      { id: "A", text: "dewpoint." },
      { id: "B", text: "air temperature." },
      { id: "C", text: "stability of the air." }
    ],
    correctAnswer: "B",
    explanation: "The air's capacity to hold water vapor depends on TEMPERATURE - warm air can hold MORE moisture than cold air. This is why cooling air to the dewpoint causes condensation - the air can no longer hold all its moisture.",
    hint: "Warm air holds more moisture than cold air.",
    figureRef: null,
    difficulty: "medium",
    tags: ["humidity", "temperature"],
    relatedQuestions: ["wx-043", "wx-049"],
    faaReference: null
  },
  {
    id: "wx-052",
    category: "weather",
    categoryName: "Weather",
    question: "Crests of standing mountain waves may be marked by stationary, lens-shaped clouds known as",
    options: [
      { id: "A", text: "mammatocumulus clouds." },
      { id: "B", text: "standing lenticular clouds." },
      { id: "C", text: "roll clouds." }
    ],
    correctAnswer: "B",
    explanation: "STANDING LENTICULAR clouds (also called lenticularis or 'lennies') are lens-shaped clouds that form at the crests of mountain waves. They appear stationary even in strong winds. They indicate significant turbulence - stay away!",
    hint: "What lens-shaped clouds mark mountain wave crests?",
    figureRef: null,
    difficulty: "medium",
    tags: ["clouds", "mountain-wave"],
    relatedQuestions: ["wx-030"],
    faaReference: null
  },
  {
    id: "wx-053",
    category: "weather",
    categoryName: "Weather",
    question: "What are characteristics of a moist, unstable air mass?",
    options: [
      { id: "A", text: "Cumuliform clouds and showery precipitation." },
      { id: "B", text: "Poor visibility and smooth air." },
      { id: "C", text: "Stratiform clouds and showery precipitation." }
    ],
    correctAnswer: "A",
    explanation: "Moist UNSTABLE air produces CUMULIFORM clouds (vertical development) and SHOWERY precipitation (convective, starting and stopping). Poor visibility and smooth air go with STABLE air. Stratiform clouds go with stable air.",
    hint: "Unstable air rises, producing what type of clouds and precipitation?",
    figureRef: null,
    difficulty: "easy",
    tags: ["stability", "clouds", "precipitation"],
    relatedQuestions: ["wx-022", "wx-044", "wx-055"],
    faaReference: null
  },
  {
    id: "wx-054",
    category: "weather",
    categoryName: "Weather",
    question: "(Refer to Figure 15.) During the time period from 0600Z to 0800Z, what visibility is forecast for KOKC?",
    options: [
      { id: "A", text: "Possibly 6 statute miles." },
      { id: "B", text: "Not forecasted." },
      { id: "C", text: "Greater than 6 statute miles." }
    ],
    correctAnswer: "C",
    explanation: "Reading the TAF for KOKC during 0600Z-0800Z, the visibility shows P6SM - 'P' means 'greater than' 6 statute miles. This is good VFR visibility.",
    hint: "P6SM means 'plus' or greater than 6 statute miles.",
    figureRef: "figure-15",
    difficulty: "medium",
    tags: ["taf", "visibility"],
    relatedQuestions: ["wx-005"],
    faaReference: null
  },
  {
    id: "wx-055",
    category: "weather",
    categoryName: "Weather",
    question: "What are characteristics of a moist, unstable air mass?",
    options: [
      { id: "A", text: "Turbulence and showery precipitation." },
      { id: "B", text: "Poor visibility and smooth air." },
      { id: "C", text: "Haze and smoke." }
    ],
    correctAnswer: "A",
    explanation: "Moist, UNSTABLE air = TURBULENCE (vertical movement) and SHOWERY precipitation (convective). Smooth air and poor visibility go with STABLE air. Haze/smoke are trapped by stable air, not unstable.",
    hint: "Unstable air has vertical movement - causing what conditions?",
    figureRef: null,
    difficulty: "easy",
    tags: ["stability", "turbulence", "precipitation"],
    relatedQuestions: ["wx-022", "wx-053"],
    faaReference: null
  },
  {
    id: "wx-056",
    category: "weather",
    categoryName: "Weather",
    question: "(Refer to Figure 15.) In the TAF from KOKC, the clear sky becomes",
    options: [
      { id: "A", text: "overcast at 2,000 feet during the forecast period between 2200Z and 2400Z." },
      { id: "B", text: "overcast at 200 feet with a 40 percent probability of becoming overcast at 600 feet during the forecast period between 2200Z and 2400Z." },
      { id: "C", text: "overcast at 200 feet with the probability of becoming overcast at 400 feet during the forecast period between 2200Z and 2400Z." }
    ],
    correctAnswer: "A",
    explanation: "Reading the TAF for KOKC, during the 2200Z-2400Z period, the sky condition changes to OVC020 - overcast at 2,000 feet. Remember TAF cloud heights are in hundreds of feet.",
    hint: "TAF cloud heights are coded in hundreds of feet (020 = 2,000 feet).",
    figureRef: "figure-15",
    difficulty: "medium",
    tags: ["taf", "clouds"],
    relatedQuestions: ["wx-003"],
    faaReference: null
  },
  {
    id: "wx-057",
    category: "weather",
    categoryName: "Weather",
    question: "What are the standard temperature and pressure values for sea level?",
    options: [
      { id: "A", text: "15 °C and 29.92 inches Hg." },
      { id: "B", text: "59 °C and 1013.2 millibars." },
      { id: "C", text: "59 °F and 29.92 millibars." }
    ],
    correctAnswer: "A",
    explanation: "Standard atmosphere at sea level: 15°C (59°F) temperature and 29.92 inches of mercury (or 1013.2 mb) pressure. These are the values used for calibrating instruments and calculating performance. Memorize: 15°C and 29.92.",
    hint: "Standard day: 15°C and 29.92\" Hg at sea level.",
    figureRef: null,
    difficulty: "easy",
    tags: ["standard-atmosphere", "definitions"],
    relatedQuestions: [],
    faaReference: null
  },
  {
    id: "wx-058",
    category: "weather",
    categoryName: "Weather",
    question: "What clouds have the greatest turbulence?",
    options: [
      { id: "A", text: "Towering cumulus." },
      { id: "B", text: "Cumulonimbus." },
      { id: "C", text: "Nimbostratus." }
    ],
    correctAnswer: "B",
    explanation: "CUMULONIMBUS (thunderstorm) clouds have the GREATEST turbulence - they have the strongest updrafts and downdrafts, sometimes exceeding 6,000 feet per minute! Towering cumulus has significant turbulence but not as severe. Nimbostratus is relatively smooth.",
    hint: "Thunderstorm clouds have the most violent vertical air movement.",
    figureRef: null,
    difficulty: "easy",
    tags: ["clouds", "turbulence", "cumulonimbus"],
    relatedQuestions: ["wx-015"],
    faaReference: null
  },
  {
    id: "wx-059",
    category: "weather",
    categoryName: "Weather",
    question: "Thunderstorms which generally produce the most intense hazard to aircraft are",
    options: [
      { id: "A", text: "squall line thunderstorms." },
      { id: "B", text: "steady-state thunderstorms." },
      { id: "C", text: "warm front thunderstorms." }
    ],
    correctAnswer: "A",
    explanation: "SQUALL LINE thunderstorms are the most hazardous because they contain multiple severe cells in a line, making them impossible to penetrate or circumnavigate easily. They have the most intense winds, turbulence, and hail.",
    hint: "Lines of severe storms are harder to avoid than isolated storms.",
    figureRef: null,
    difficulty: "medium",
    tags: ["thunderstorms", "squall-line", "hazards"],
    relatedQuestions: ["wx-037"],
    faaReference: null
  },
  {
    id: "wx-060",
    category: "weather",
    categoryName: "Weather",
    question: "(Refer to Figure 19.) The enclosed shaded area associated with the low pressure system over northern Utah is forecast to have",
    options: [
      { id: "A", text: "continuous snow." },
      { id: "B", text: "intermittent snow." },
      { id: "C", text: "continuous snow showers." }
    ],
    correctAnswer: "A",
    explanation: "Reading the Significant Weather Prognostic Chart, the shaded area over northern Utah associated with the low pressure shows continuous snow precipitation. The symbology on prog charts distinguishes between continuous and intermittent precipitation.",
    hint: "Read the precipitation type and character symbols on the chart.",
    figureRef: "figure-19",
    difficulty: "hard",
    tags: ["prognostic-chart", "precipitation"],
    relatedQuestions: ["wx-038"],
    faaReference: null
  }
];

export default weatherQuestions;
