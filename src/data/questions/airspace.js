// Airspace Questions
// Source: FAA Part 107 Test Prep Materials
// Total: 60 questions

export const airspaceQuestions = [
  {
    id: "air-001",
    category: "airspace",
    categoryName: "Airspace",
    question: "(Refer to Figure 26, area 5.) The airspace overlying and within 5 miles of Barnes County Airport is",
    options: [
      { id: "A", text: "Class D airspace from the surface to the floor of the overlying Class E airspace." },
      { id: "B", text: "Class E airspace from the surface to 1,200 feet MSL." },
      { id: "C", text: "Class G airspace from the surface to 700 feet AGL." }
    ],
    correctAnswer: "C",
    explanation: "Barnes County Airport has Class G airspace from the surface to 700 feet AGL. The magenta shading around the airport indicates Class E airspace begins at 700 feet AGL. Below that is uncontrolled Class G airspace. There's no control tower (no blue airport symbol), so it's not Class D.",
    hint: "Look for the magenta shading pattern around the airport to determine where Class E begins.",
    figureRef: "figure-26",
    difficulty: "medium",
    tags: ["class-g", "class-e", "sectional-chart"],
    relatedQuestions: ["air-008", "air-020"],
    faaReference: null
  },
  {
    id: "air-002",
    category: "airspace",
    categoryName: "Airspace",
    question: "(Refer to Figure 21.) What airport is located approximately 47 (degrees) 40 (minutes) N latitude and 101 (degrees) 26 (minutes) W longitude?",
    options: [
      { id: "A", text: "Mercer County Regional Airport." },
      { id: "B", text: "Semshenko Airport." },
      { id: "C", text: "Garrison Airport." }
    ],
    correctAnswer: "C",
    explanation: "Using latitude and longitude coordinates on a sectional chart: 47°40'N and 101°26'W pinpoints Garrison Airport. Reading coordinates requires finding where the latitude line (horizontal) and longitude line (vertical) intersect.",
    hint: "Latitude lines run east-west, longitude lines run north-south. Find where they intersect.",
    figureRef: "figure-21",
    difficulty: "medium",
    tags: ["coordinates", "latitude-longitude", "sectional-chart"],
    relatedQuestions: ["air-013", "air-037"],
    faaReference: null
  },
  {
    id: "air-003",
    category: "airspace",
    categoryName: "Airspace",
    question: "Checking the NOTAMs confirms the Blue Angels are scheduled to perform at the local airport. When can UAS operations resume relative to this NOTAM?",
    options: [
      { id: "A", text: "Once the Blue Angels have landed." },
      { id: "B", text: "With ATC authorization." },
      { id: "C", text: "Immediately, if 1NM is maintained." }
    ],
    correctAnswer: "B",
    explanation: "Airshows typically establish Temporary Flight Restrictions (TFRs). Even during or after the performance, you need ATC authorization to operate in the affected airspace. You cannot simply resume operations when the show ends or by maintaining distance - formal authorization is required.",
    hint: "TFRs for special events require formal authorization to enter.",
    figureRef: null,
    difficulty: "medium",
    tags: ["notams", "tfr", "atc-authorization"],
    relatedQuestions: ["air-051"],
    faaReference: null
  },
  {
    id: "air-004",
    category: "airspace",
    categoryName: "Airspace",
    question: "Information concerning parachute jumping sites may be found in the",
    options: [
      { id: "A", text: "NOTAMs." },
      { id: "B", text: "Chart Supplement." },
      { id: "C", text: "Graphic Notices and Supplemental Data." }
    ],
    correctAnswer: "B",
    explanation: "The Chart Supplement (formerly Airport/Facility Directory) contains detailed information about parachute jumping sites, including locations, altitudes, and contact information. While NOTAMs may have temporary notices, the Chart Supplement is the primary reference for established jump sites.",
    hint: "The Chart Supplement contains detailed airport and facility information.",
    figureRef: null,
    difficulty: "easy",
    tags: ["chart-supplement", "parachute-operations", "resources"],
    relatedQuestions: ["air-045"],
    faaReference: null
  },
  {
    id: "air-005",
    category: "airspace",
    categoryName: "Airspace",
    question: "(Refer to Figure 78.) You have been hired to use your small UAS to inspect the railroad tracks from Blencoe (SE of Sioux City) to Onawa. Will ATC authorization be required?",
    options: [
      { id: "A", text: "Yes, Onawa is in Class D airspace that is designated for an airport." },
      { id: "B", text: "No, your entire flight is in Class G airspace." },
      { id: "C", text: "Yes, you must contact the Onawa control tower to operate within 5 miles of the airport." }
    ],
    correctAnswer: "B",
    explanation: "Looking at Figure 78, the route from Blencoe to Onawa lies entirely within Class G (uncontrolled) airspace. Onawa does not have a control tower and is not within controlled airspace that would require ATC authorization. The entire flight path is in uncontrolled airspace.",
    hint: "Check the chart symbology - Class G has no special shading or boundaries shown.",
    figureRef: "figure-78",
    difficulty: "medium",
    tags: ["class-g", "atc-authorization", "sectional-chart"],
    relatedQuestions: ["air-006", "air-054"],
    faaReference: null
  },
  {
    id: "air-006",
    category: "airspace",
    categoryName: "Airspace",
    question: "(Refer to Figure 78) You have been hired to fly your UA to inspect train tracks from the town of Hinton to the town of Winnebago. Will you be able to conduct this flight without contacting ATC?",
    options: [
      { id: "A", text: "Yes, because you will remain under 400 feet." },
      { id: "B", text: "No, because you will pass through Echo airspace." },
      { id: "C", text: "No, because you will pass through Delta airspace." }
    ],
    correctAnswer: "C",
    explanation: "The route from Hinton to Winnebago passes through Class D airspace (shown by blue dashed lines around an airport with a control tower). Class D airspace requires ATC authorization for UAS operations. The answer isn't about altitude - it's about the CLASS of airspace.",
    hint: "Look for blue dashed circles indicating Class D airspace along the route.",
    figureRef: "figure-78",
    difficulty: "medium",
    tags: ["class-d", "atc-authorization", "sectional-chart"],
    relatedQuestions: ["air-005", "air-054"],
    faaReference: null
  },
  {
    id: "air-007",
    category: "airspace",
    categoryName: "Airspace",
    question: "(Refer to Figure 20, area 2.) The flag symbol at Lake Drummond represents a",
    options: [
      { id: "A", text: "compulsory reporting point for Norfolk Class C airspace." },
      { id: "B", text: "compulsory reporting point for Hampton Roads Airport." },
      { id: "C", text: "visual checkpoint used to identify position for initial callup to Norfolk Approach Control." }
    ],
    correctAnswer: "C",
    explanation: "The flag symbol on a sectional chart indicates a VFR checkpoint - a prominent landmark used by pilots to identify their position when contacting approach control. These help pilots communicate their location clearly to ATC.",
    hint: "Flag symbols mark visual reference points for communicating with ATC.",
    figureRef: "figure-20",
    difficulty: "medium",
    tags: ["vfr-checkpoint", "sectional-chart", "symbols"],
    relatedQuestions: ["air-019"],
    faaReference: null
  },
  {
    id: "air-008",
    category: "airspace",
    categoryName: "Airspace",
    question: "(Refer to Figure 26, area 1.) Identify the airspace over Tomlinson Airport (8J7).",
    options: [
      { id: "A", text: "Class G airspace - surface up to but not including 1,200 feet AGL, Class E airspace - 1,200 feet AGL up to but not including 18,000 feet MSL." },
      { id: "B", text: "Class G airspace - surface up to but not including 18,000 feet MSL." },
      { id: "C", text: "Class G airspace - surface up to but not including 700 feet MSL, Class E airspace - 700 feet to 14,500 feet MSL." }
    ],
    correctAnswer: "A",
    explanation: "Tomlinson Airport has no magenta shading around it, indicating Class G airspace extends from the surface up to 1,200 feet AGL, where Class E airspace then begins. Without the magenta vignette (which would indicate Class E starting at 700 feet), the default floor of Class E is 1,200 feet AGL.",
    hint: "No magenta shading means Class G goes higher - up to 1,200 feet AGL.",
    figureRef: "figure-26",
    difficulty: "hard",
    tags: ["class-g", "class-e", "sectional-chart"],
    relatedQuestions: ["air-001", "air-052"],
    faaReference: null
  },
  {
    id: "air-009",
    category: "airspace",
    categoryName: "Airspace",
    question: "Under what condition, if any, may you operate an unmanned aircraft in a restricted area?",
    options: [
      { id: "A", text: "When flying on airways with an ATC clearance." },
      { id: "B", text: "With the controlling agency's authorization." },
      { id: "C", text: "Regulations do not allow this." }
    ],
    correctAnswer: "B",
    explanation: "You CAN operate in a Restricted Area, but only with authorization from the controlling agency (not just ATC). Restricted areas contain hazards like artillery firing, aerial gunnery, or guided missiles. The controlling agency determines when entry is permitted.",
    hint: "Restricted areas require special permission from whoever controls that airspace.",
    figureRef: null,
    difficulty: "medium",
    tags: ["restricted-area", "special-use-airspace", "authorization"],
    relatedQuestions: ["air-026", "air-043", "air-060"],
    faaReference: null
  },
  {
    id: "air-010",
    category: "airspace",
    categoryName: "Airspace",
    question: "(Refer to Figure 22, area 3.) The vertical limits of that portion of Class E airspace designated as a Federal Airway over Magee Airport are",
    options: [
      { id: "A", text: "700 feet MSL to 12,500 feet MSL." },
      { id: "B", text: "7,500 feet MSL to 17,999 feet MSL." },
      { id: "C", text: "1,200 feet AGL to 17,999 feet MSL." }
    ],
    correctAnswer: "C",
    explanation: "Federal Airways (Victor airways) are Class E airspace extending from 1,200 feet AGL up to but not including 18,000 feet MSL (17,999 feet MSL). The floor of 1,200 feet AGL is standard for Federal Airways unless otherwise noted.",
    hint: "Federal Airways are Class E from 1,200 feet AGL to just under 18,000 feet MSL.",
    figureRef: "figure-22",
    difficulty: "hard",
    tags: ["federal-airway", "class-e", "vertical-limits"],
    relatedQuestions: ["air-012", "air-050"],
    faaReference: null
  },
  {
    id: "air-011",
    category: "airspace",
    categoryName: "Airspace",
    question: "(Refer to Figure 23, area 3.) The top of the group obstruction approximately 11 nautical miles from the Savannah VORTAC on the 007° radial is",
    options: [
      { id: "A", text: "253 feet AGL." },
      { id: "B", text: "454 feet MSL." },
      { id: "C", text: "417 feet MSL." }
    ],
    correctAnswer: "C",
    explanation: "Obstruction symbols show two numbers: the top number is height MSL (in bold), the bottom number in parentheses is height AGL. The obstruction top is 417 feet MSL. The AGL height would be shown in parentheses below.",
    hint: "The bold number on obstruction symbols is the MSL altitude.",
    figureRef: "figure-23",
    difficulty: "hard",
    tags: ["obstructions", "sectional-chart", "msl-agl"],
    relatedQuestions: ["air-027"],
    faaReference: null
  },
  {
    id: "air-012",
    category: "airspace",
    categoryName: "Airspace",
    question: "Unless otherwise specified, Federal Airways include that Class E airspace extending upward from",
    options: [
      { id: "A", text: "700 feet above the surface up to and including 17,999 feet MSL." },
      { id: "B", text: "1,200 feet above the surface up to and including 17,999 feet MSL." },
      { id: "C", text: "the surface up to and including 18,000 feet MSL." }
    ],
    correctAnswer: "B",
    explanation: "Federal Airways (Victor airways shown in blue on charts) are Class E airspace from 1,200 feet AGL up to but not including 18,000 feet MSL. At 18,000 feet MSL, Class A airspace begins. The floor is 1,200 feet AGL unless otherwise specified.",
    hint: "The standard floor for Federal Airways is 1,200 feet AGL.",
    figureRef: null,
    difficulty: "medium",
    tags: ["federal-airway", "class-e", "vertical-limits"],
    relatedQuestions: ["air-010", "air-050", "air-056"],
    faaReference: null
  },
  {
    id: "air-013",
    category: "airspace",
    categoryName: "Airspace",
    question: "(Refer to Figure 26, area 2.) What is the approximate latitude and longitude of Cooperstown Airport?",
    options: [
      { id: "A", text: "47°25'N - 98°06'W." },
      { id: "B", text: "47°25'N - 99°54'W." },
      { id: "C", text: "47°55'N - 98°06'W." }
    ],
    correctAnswer: "A",
    explanation: "Reading the sectional chart coordinates, Cooperstown Airport is located at approximately 47°25' North latitude and 98°06' West longitude. Use the grid lines on the chart to determine position.",
    hint: "Find the airport and read the nearest latitude and longitude lines.",
    figureRef: "figure-26",
    difficulty: "medium",
    tags: ["coordinates", "latitude-longitude", "sectional-chart"],
    relatedQuestions: ["air-002", "air-037"],
    faaReference: null
  },
  {
    id: "air-014",
    category: "airspace",
    categoryName: "Airspace",
    question: "(Refer to Figure 78.) You have been contracted to inspect towers located approximately 4NM southwest of the Sioux Gateway (SUX) airport operating an unmanned aircraft. What is the maximum altitude above ground level (AGL) that you are authorized to operate over the top of the towers?",
    options: [
      { id: "A", text: "400 feet AGL." },
      { id: "B", text: "402 feet AGL." },
      { id: "C", text: "802 feet AGL." }
    ],
    correctAnswer: "B",
    explanation: "Under Part 107, you can fly up to 400 feet AGL, OR you can fly higher than 400 feet if you're within 400 feet of a structure. If the towers are 402 feet tall, you can fly up to 400 feet above their top - but the question asks about operating over the TOP of the towers. The towers shown are 402 feet, so 402 feet AGL is the max you'd be at when directly over their tops.",
    hint: "You can operate up to 400 feet above a structure when within 400 feet of it.",
    figureRef: "figure-78",
    difficulty: "hard",
    tags: ["altitude-limits", "structures", "part-107"],
    relatedQuestions: [],
    faaReference: "14 CFR 107.51"
  },
  {
    id: "air-015",
    category: "airspace",
    categoryName: "Airspace",
    question: "The typical uncharted outer radius limits of Class C airspace are normally",
    options: [
      { id: "A", text: "10 nautical miles." },
      { id: "B", text: "30 nautical miles." },
      { id: "C", text: "20 nautical miles." }
    ],
    correctAnswer: "C",
    explanation: "Class C airspace has an outer area (not charted) extending out to 20 nautical miles where pilots are encouraged to participate in radar services. The charted Class C goes out to about 10 NM, but the outer area extends to 20 NM.",
    hint: "There's a larger outer area beyond the charted Class C boundaries.",
    figureRef: null,
    difficulty: "medium",
    tags: ["class-c", "airspace-dimensions"],
    relatedQuestions: ["air-040"],
    faaReference: null
  },
  {
    id: "air-016",
    category: "airspace",
    categoryName: "Airspace",
    question: "(Refer to Figure 25, area 7.) The airspace overlying McKinney (TKI) is controlled from the surface to",
    options: [
      { id: "A", text: "2,900 feet MSL." },
      { id: "B", text: "2,500 feet MSL." },
      { id: "C", text: "700 feet AGL." }
    ],
    correctAnswer: "A",
    explanation: "McKinney Airport (TKI) has Class D airspace indicated by the blue dashed circle. The number shown in brackets indicates the ceiling - in this case, 2,900 feet MSL. Class D extends from the surface to this altitude.",
    hint: "Look for the number in brackets near the Class D airspace symbol.",
    figureRef: "figure-25",
    difficulty: "medium",
    tags: ["class-d", "sectional-chart", "vertical-limits"],
    relatedQuestions: ["air-025", "air-047"],
    faaReference: null
  },
  {
    id: "air-017",
    category: "airspace",
    categoryName: "Airspace",
    question: "(Refer to Figure 21.) You have been hired by a farmer to use your small UA to inspect his crops. The area that you are to survey is in the Devil's Lake West MOA, east of area 2. How would you find out if the MOA is active?",
    options: [
      { id: "A", text: "Refer to the legend for special use airspace phone number." },
      { id: "B", text: "This information is available in the Small UAS database." },
      { id: "C", text: "In the Military Operations Directory." }
    ],
    correctAnswer: "A",
    explanation: "To find out if a MOA is active, you can contact the controlling agency. The phone numbers for special use airspace are listed in the chart legend or Chart Supplement. MOA status information is not in a 'Small UAS database' or 'Military Operations Directory.'",
    hint: "The chart legend and Chart Supplement contain contact information for special use airspace.",
    figureRef: "figure-21",
    difficulty: "medium",
    tags: ["moa", "special-use-airspace", "resources"],
    relatedQuestions: ["air-023", "air-053"],
    faaReference: null
  },
  {
    id: "air-018",
    category: "airspace",
    categoryName: "Airspace",
    question: "According to 14 CFR part 107, how may a remote pilot operate an unmanned aircraft in class C airspace?",
    options: [
      { id: "A", text: "The remote pilot must have prior authorization from the Air Traffic Control (ATC) facility having jurisdiction over that airspace." },
      { id: "B", text: "The remote pilot must monitor the Air Traffic Control (ATC) frequency from launch to recovery." },
      { id: "C", text: "The remote pilot must contact the Air Traffic Control (ATC) facility after launching the unmanned aircraft." }
    ],
    correctAnswer: "A",
    explanation: "Part 107 requires PRIOR authorization from ATC to operate in Class B, C, D airspace or within the lateral boundaries of Class E surface area. You must get authorization BEFORE operating, not after or by just monitoring frequencies.",
    hint: "Authorization must be obtained BEFORE the flight, not during or after.",
    figureRef: null,
    difficulty: "easy",
    tags: ["class-c", "atc-authorization", "part-107"],
    relatedQuestions: ["air-042"],
    faaReference: "14 CFR 107.41"
  },
  {
    id: "air-019",
    category: "airspace",
    categoryName: "Airspace",
    question: "(Refer to Figure 23.) The flag symbols at Statesboro Bulloch County Airport, Claxton-Evans County Airport, and Ridgeland Airport are",
    options: [
      { id: "A", text: "outer boundaries of Savannah Class C airspace." },
      { id: "B", text: "airports with special traffic patterns." },
      { id: "C", text: "visual checkpoints to identify position for initial callup prior to entering Savannah Class C airspace." }
    ],
    correctAnswer: "C",
    explanation: "Flag symbols indicate VFR checkpoints - visual landmarks pilots use when contacting approach control. They help pilots identify their position clearly for 'initial callup' when requesting to enter controlled airspace.",
    hint: "Flags mark recognizable positions for pilots to report when contacting ATC.",
    figureRef: "figure-23",
    difficulty: "medium",
    tags: ["vfr-checkpoint", "class-c", "sectional-chart"],
    relatedQuestions: ["air-007"],
    faaReference: null
  },
  {
    id: "air-020",
    category: "airspace",
    categoryName: "Airspace",
    question: "(Refer to Figure 71, area 1.) The floor of the Class E airspace above Georgetown Airport (E36) is at",
    options: [
      { id: "A", text: "the surface." },
      { id: "B", text: "700 feet AGL." },
      { id: "C", text: "3,823 feet MSL." }
    ],
    correctAnswer: "B",
    explanation: "The magenta shading around Georgetown Airport indicates Class E airspace beginning at 700 feet AGL. This is shown by the magenta vignette (fuzzy edge facing outward from the airport). Below 700 feet AGL is Class G.",
    hint: "Magenta shading indicates where Class E begins at 700 feet AGL.",
    figureRef: "figure-71",
    difficulty: "medium",
    tags: ["class-e", "sectional-chart", "airspace-floor"],
    relatedQuestions: ["air-001", "air-052"],
    faaReference: null
  },
  {
    id: "air-021",
    category: "airspace",
    categoryName: "Airspace",
    question: "(Refer to Figure 24, area 6.) What type of airport is Card Airport?",
    options: [
      { id: "A", text: "Public towered." },
      { id: "B", text: "Public non-towered." },
      { id: "C", text: "Private non-towered." }
    ],
    correctAnswer: "C",
    explanation: "Card Airport is shown with an 'R' in the airport symbol, indicating it's a private/restricted airport. It has no control tower symbol (CT or blue). Private airports require prior permission to use.",
    hint: "Look for the 'R' marking that indicates a private/restricted airport.",
    figureRef: "figure-24",
    difficulty: "medium",
    tags: ["airport-symbols", "private-airport", "sectional-chart"],
    relatedQuestions: ["air-041"],
    faaReference: null
  },
  {
    id: "air-022",
    category: "airspace",
    categoryName: "Airspace",
    question: "Responsibility for collision avoidance in an alert area rests with",
    options: [
      { id: "A", text: "the controlling agency." },
      { id: "B", text: "all pilots." },
      { id: "C", text: "Air Traffic Control." }
    ],
    correctAnswer: "B",
    explanation: "In alert areas, ALL pilots share responsibility for collision avoidance. Alert areas contain high volumes of pilot training or unusual aerial activity. ATC doesn't provide separation services, and there's no controlling agency - pilots must see and avoid.",
    hint: "Alert areas have no special protection - everyone must look out for themselves.",
    figureRef: null,
    difficulty: "easy",
    tags: ["alert-area", "collision-avoidance", "special-use-airspace"],
    relatedQuestions: [],
    faaReference: null
  },
  {
    id: "air-023",
    category: "airspace",
    categoryName: "Airspace",
    question: "What action should a remote pilot take when operating in a Military Operations Area (MOA)?",
    options: [
      { id: "A", text: "Obtain a clearance from the controlling agency prior to entering the MOA." },
      { id: "B", text: "Operate only on the airways that transverse the MOA." },
      { id: "C", text: "Exercise extreme caution when military activity is being conducted." }
    ],
    correctAnswer: "C",
    explanation: "MOAs don't require a clearance - they're not restricted like Prohibited or Restricted areas. However, military activity like aerobatics and high-speed flight occurs there. Remote pilots should exercise extreme caution and be aware of potential military traffic.",
    hint: "MOAs allow civil traffic but caution is advised due to military activity.",
    figureRef: null,
    difficulty: "medium",
    tags: ["moa", "special-use-airspace", "caution"],
    relatedQuestions: ["air-017"],
    faaReference: null
  },
  {
    id: "air-024",
    category: "airspace",
    categoryName: "Airspace",
    question: "(Refer to Figure 21.) The terrain elevation of the light tan area between Minot (area 1) and Audubon Lake (area 2) varies from",
    options: [
      { id: "A", text: "sea level to 2,000 feet MSL." },
      { id: "B", text: "2,000 feet to 2,500 feet MSL." },
      { id: "C", text: "2,000 feet to 2,700 feet MSL." }
    ],
    correctAnswer: "B",
    explanation: "Sectional chart colors indicate terrain elevation. Light tan typically represents elevations between 2,000-2,500 feet MSL. Different colors represent different elevation ranges as shown in the chart legend.",
    hint: "Chart colors indicate elevation bands - check the legend for specific ranges.",
    figureRef: "figure-21",
    difficulty: "hard",
    tags: ["terrain", "elevation", "sectional-chart"],
    relatedQuestions: [],
    faaReference: null
  },
  {
    id: "air-025",
    category: "airspace",
    categoryName: "Airspace",
    question: "(Refer to Figure 25, area 4.) The airspace directly overlying Fort Worth Meacham is",
    options: [
      { id: "A", text: "Class B airspace to 10,000 feet MSL." },
      { id: "B", text: "Class C airspace to 5,000 feet MSL." },
      { id: "C", text: "Class D airspace to 3,200 feet MSL." }
    ],
    correctAnswer: "C",
    explanation: "Fort Worth Meacham Airport has Class D airspace (blue dashed circle) with a ceiling of 3,200 feet MSL shown in brackets. Class D surrounds airports with operating control towers but not the traffic levels to warrant Class B or C.",
    hint: "Look for the blue dashed circle and the number in brackets for the ceiling.",
    figureRef: "figure-25",
    difficulty: "medium",
    tags: ["class-d", "sectional-chart", "vertical-limits"],
    relatedQuestions: ["air-016", "air-055"],
    faaReference: null
  },
  {
    id: "air-026",
    category: "airspace",
    categoryName: "Airspace",
    question: "Under what condition, if any, may remote pilots fly through a Restricted Area?",
    options: [
      { id: "A", text: "When flying on airways with an ATC clearance." },
      { id: "B", text: "With the controlling agency's authorization." },
      { id: "C", text: "Regulations do not allow this." }
    ],
    correctAnswer: "B",
    explanation: "Restricted Areas CAN be entered with authorization from the controlling agency. These areas contain activities like artillery firing or missile testing that may be hazardous. The controlling agency determines when it's safe to enter.",
    hint: "Unlike Prohibited Areas, Restricted Areas can be entered with proper authorization.",
    figureRef: null,
    difficulty: "medium",
    tags: ["restricted-area", "authorization", "special-use-airspace"],
    relatedQuestions: ["air-009", "air-043"],
    faaReference: null
  },
  {
    id: "air-027",
    category: "airspace",
    categoryName: "Airspace",
    question: "(Refer to Figure 20, area 4.) A small UA is being launched 2 NM northeast of the town of Hertford. What is the height of the highest obstacle?",
    options: [
      { id: "A", text: "399 feet MSL." },
      { id: "B", text: "500 feet MSL." },
      { id: "C", text: "500 feet AGL." }
    ],
    correctAnswer: "A",
    explanation: "Reading obstruction information from the chart, the highest obstacle in that area is 399 feet MSL. The bold number represents the height above Mean Sea Level, not AGL.",
    hint: "Obstruction heights in bold are MSL altitudes.",
    figureRef: "figure-20",
    difficulty: "hard",
    tags: ["obstructions", "msl-agl", "sectional-chart"],
    relatedQuestions: ["air-011"],
    faaReference: null
  },
  {
    id: "air-028",
    category: "airspace",
    categoryName: "Airspace",
    question: "(Refer to Figure 20, area 5.) The CAUTION box denotes what hazard to aircraft?",
    options: [
      { id: "A", text: "Unmarked balloon on cable to 3,008 feet MSL." },
      { id: "B", text: "Unmarked balloon on cable to 3,008 feet AGL." },
      { id: "C", text: "Unmarked blimp hangars at 300 feet MSL." }
    ],
    correctAnswer: "A",
    explanation: "The CAUTION box warns of an unmarked balloon on a cable reaching up to 3,008 feet MSL. These tethered balloons are hazardous because the cable is nearly invisible and can extend to significant altitudes.",
    hint: "CAUTION boxes warn of specific hazards - read the details carefully.",
    figureRef: "figure-20",
    difficulty: "medium",
    tags: ["caution-areas", "hazards", "sectional-chart"],
    relatedQuestions: ["air-029", "air-044"],
    faaReference: null
  },
  {
    id: "air-029",
    category: "airspace",
    categoryName: "Airspace",
    question: "(Refer to Figure 20, area 5.) How would a remote PIC 'CHECK NOTAMS' as noted in the CAUTION box regarding the unmarked balloon?",
    options: [
      { id: "A", text: "By utilizing the B4UFLY mobile application." },
      { id: "B", text: "By contacting the FAA district office." },
      { id: "C", text: "By obtaining a briefing via an online source such as: 1800WXBrief.com." }
    ],
    correctAnswer: "C",
    explanation: "NOTAMs can be obtained through official briefing services like 1800WXBrief.com (Leidos Flight Service). While B4UFLY shows some airspace information, it's not the official source for detailed NOTAMs. 1800WXBrief provides comprehensive pilot briefings including all NOTAMs.",
    hint: "Official pilot briefing services provide complete NOTAM information.",
    figureRef: "figure-20",
    difficulty: "medium",
    tags: ["notams", "preflight-resources", "flight-service"],
    relatedQuestions: ["air-028"],
    faaReference: null
  },
  {
    id: "air-030",
    category: "airspace",
    categoryName: "Airspace",
    question: "(Refer to Figure 76.) What ATC permissions are required to operate near Anderson Airport?",
    options: [
      { id: "A", text: "ATC clearance required." },
      { id: "B", text: "No ATC permission is required." },
      { id: "C", text: "Waiver must be issued." }
    ],
    correctAnswer: "B",
    explanation: "Anderson Airport is in uncontrolled (Class G) airspace with no tower or controlled airspace boundaries nearby. Therefore, no ATC authorization is required to operate there under Part 107.",
    hint: "Check if the airport is within controlled airspace requiring authorization.",
    figureRef: "figure-76",
    difficulty: "medium",
    tags: ["class-g", "atc-authorization", "sectional-chart"],
    relatedQuestions: ["air-005"],
    faaReference: null
  },
  {
    id: "air-031",
    category: "airspace",
    categoryName: "Airspace",
    question: "(Refer to Figure 26.) What does the line of latitude at area 4 measure?",
    options: [
      { id: "A", text: "The degrees of latitude east and west of the Prime Meridian." },
      { id: "B", text: "The degrees of latitude north and south from the equator." },
      { id: "C", text: "The degrees of latitude east and west of the line that passes through Greenwich, England." }
    ],
    correctAnswer: "B",
    explanation: "Lines of LATITUDE run east-west and measure distance NORTH or SOUTH from the equator (0° to 90° N or S). Lines of LONGITUDE run north-south and measure east/west from the Prime Meridian at Greenwich.",
    hint: "Latitude = horizontal lines = how far north or south from equator.",
    figureRef: "figure-26",
    difficulty: "medium",
    tags: ["coordinates", "latitude", "navigation"],
    relatedQuestions: ["air-002", "air-013"],
    faaReference: null
  },
  {
    id: "air-032",
    category: "airspace",
    categoryName: "Airspace",
    question: "(Refer to Figure 59, area 2.) The chart shows a gray line with 'VR1667, VR1617, VR1638, and VR1668.' Could this area present a hazard to the operations of a small UA?",
    options: [
      { id: "A", text: "No, all operations will be above 400 feet." },
      { id: "B", text: "Yes, this is a Military Training Route from the surface to 1,500 feet AGL." },
      { id: "C", text: "Yes, the defined route provides traffic separation to manned aircraft." }
    ],
    correctAnswer: "B",
    explanation: "VR routes are Visual Military Training Routes. Routes with 4-digit numbers (like VR1667) are flown at or below 1,500 feet AGL. This means high-speed military aircraft may be operating at UAS altitudes, presenting a significant collision hazard.",
    hint: "VR routes with 4 digits are flown at 1,500 feet AGL and below - right in UAS territory!",
    figureRef: "figure-59",
    difficulty: "hard",
    tags: ["military-training-routes", "hazards", "sectional-chart"],
    relatedQuestions: [],
    faaReference: null
  },
  {
    id: "air-033",
    category: "airspace",
    categoryName: "Airspace",
    question: "(Refer to Figure 20, area 2.) The elevation of the Chesapeake Regional Airport is",
    options: [
      { id: "A", text: "19 feet." },
      { id: "B", text: "36 feet." },
      { id: "C", text: "360 feet." }
    ],
    correctAnswer: "A",
    explanation: "Airport elevation is shown in the airport data block on sectional charts. Chesapeake Regional Airport has a field elevation of 19 feet MSL. This is important for calculating density altitude and setting altimeters.",
    hint: "Look for the elevation number in the airport information block.",
    figureRef: "figure-20",
    difficulty: "easy",
    tags: ["airport-elevation", "sectional-chart"],
    relatedQuestions: [],
    faaReference: null
  },
  {
    id: "air-034",
    category: "airspace",
    categoryName: "Airspace",
    question: "(Refer to Figure 23.) You have been hired to inspect a farm 3 miles west of Hilton Head Airport, in what type of airspace will you be operating?",
    options: [
      { id: "A", text: "Class G" },
      { id: "B", text: "Class E." },
      { id: "C", text: "Class C." }
    ],
    correctAnswer: "C",
    explanation: "The area 3 miles west of Hilton Head Airport falls within the Savannah Class C airspace (shown by solid magenta lines). Class C airspace typically extends 10 nautical miles from the primary airport.",
    hint: "Look for the solid magenta circle/ring indicating Class C airspace boundaries.",
    figureRef: "figure-23",
    difficulty: "medium",
    tags: ["class-c", "sectional-chart"],
    relatedQuestions: ["air-018", "air-042"],
    faaReference: null
  },
  {
    id: "air-035",
    category: "airspace",
    categoryName: "Airspace",
    question: "(Refer to Figure 78.) In what airspace is Onawa (K36) located?",
    options: [
      { id: "A", text: "Class E." },
      { id: "B", text: "Class G." },
      { id: "C", text: "Class D." }
    ],
    correctAnswer: "B",
    explanation: "Onawa Airport (K36) is located in Class G (uncontrolled) airspace. There's no magenta shading, no Class D blue dashed circle, and no Class E surface area indicated. It's simply uncontrolled airspace.",
    hint: "No special shading or boundaries means Class G airspace.",
    figureRef: "figure-78",
    difficulty: "medium",
    tags: ["class-g", "sectional-chart"],
    relatedQuestions: ["air-005"],
    faaReference: null
  },
  {
    id: "air-036",
    category: "airspace",
    categoryName: "Airspace",
    question: "The airspace system designations used throughout the United States",
    options: [
      { id: "A", text: "makes our airspace system more complex than it is in other countries." },
      { id: "B", text: "standardizes airspace classifications with other countries." },
      { id: "C", text: "separates all IFR and VFR operations." }
    ],
    correctAnswer: "B",
    explanation: "The U.S. airspace classification system (Class A, B, C, D, E, G) is based on ICAO (International Civil Aviation Organization) standards. This standardization allows pilots to understand airspace when flying internationally.",
    hint: "The A through G classification is an international standard.",
    figureRef: null,
    difficulty: "easy",
    tags: ["airspace-classification", "icao"],
    relatedQuestions: [],
    faaReference: null
  },
  {
    id: "air-037",
    category: "airspace",
    categoryName: "Airspace",
    question: "(Refer to Figure 21, area 2.) Which airport is located at approximately 47°34'30\"N latitude and 100°44'00\"W longitude?",
    options: [
      { id: "A", text: "Turtle Lake." },
      { id: "B", text: "Makeeff." },
      { id: "C", text: "Johnson." }
    ],
    correctAnswer: "B",
    explanation: "Using the coordinate grid on the sectional chart, the intersection of 47°34'30\"N and 100°44'00\"W locates Makeeff Airport. Read latitude (north-south position) and longitude (east-west position) carefully.",
    hint: "Find where the latitude and longitude lines intersect on the chart.",
    figureRef: "figure-21",
    difficulty: "hard",
    tags: ["coordinates", "sectional-chart", "latitude-longitude"],
    relatedQuestions: ["air-002", "air-013"],
    faaReference: null
  },
  {
    id: "air-038",
    category: "airspace",
    categoryName: "Airspace",
    question: "(Refer to Figure 25, area 2.) The control tower frequency for Addison Airport is",
    options: [
      { id: "A", text: "122.95 MHz." },
      { id: "B", text: "126.0 MHz." },
      { id: "C", text: "133.4 MHz." }
    ],
    correctAnswer: "B",
    explanation: "Control tower frequencies are shown in the airport data block on sectional charts, indicated by 'CT' followed by the frequency. For Addison Airport, the tower frequency is 126.0 MHz.",
    hint: "Look for 'CT' (Control Tower) in the airport information.",
    figureRef: "figure-25",
    difficulty: "easy",
    tags: ["frequencies", "sectional-chart", "airport-data"],
    relatedQuestions: [],
    faaReference: null
  },
  {
    id: "air-039",
    category: "airspace",
    categoryName: "Airspace",
    question: "(Refer to Figure 25, area 2.) The floor of Class B airspace at Air Park-Dallas Airport is",
    options: [
      { id: "A", text: "at the surface." },
      { id: "B", text: "3,000 feet MSL." },
      { id: "C", text: "3,100 feet MSL." }
    ],
    correctAnswer: "C",
    explanation: "Class B airspace has shelves at different altitudes. The numbers shown in blue indicate floor/ceiling (e.g., 110/31 means ceiling 11,000 feet, floor 3,100 feet MSL). At Air Park-Dallas, the Class B floor is 3,100 feet MSL.",
    hint: "The lower number in the Class B altitude block shows the floor.",
    figureRef: "figure-25",
    difficulty: "medium",
    tags: ["class-b", "sectional-chart", "airspace-floor"],
    relatedQuestions: ["air-048", "air-055"],
    faaReference: null
  },
  {
    id: "air-040",
    category: "airspace",
    categoryName: "Airspace",
    question: "The vertical limit of Class C airspace above the primary airport is normally",
    options: [
      { id: "A", text: "1,200 feet AGL." },
      { id: "B", text: "3,000 feet AGL." },
      { id: "C", text: "4,000 feet AGL." }
    ],
    correctAnswer: "C",
    explanation: "Class C airspace typically extends from the surface to 4,000 feet AGL above the primary airport. The inner core is surface to 4,000 feet, and the outer shelf is typically 1,200 feet AGL to 4,000 feet AGL.",
    hint: "Class C has a standard ceiling above the primary airport.",
    figureRef: null,
    difficulty: "medium",
    tags: ["class-c", "vertical-limits"],
    relatedQuestions: ["air-015"],
    faaReference: null
  },
  {
    id: "air-041",
    category: "airspace",
    categoryName: "Airspace",
    question: "(Refer to Figure 71, area 6) Sky Way Airport is",
    options: [
      { id: "A", text: "an airport restricted to use by private and recreational pilots." },
      { id: "B", text: "a restricted military stage field within restricted airspace." },
      { id: "C", text: "a non-public use airport." }
    ],
    correctAnswer: "C",
    explanation: "Sky Way Airport is indicated as a private/non-public use airport by its symbology. Non-public airports require prior permission from the owner to use and are not open to the general public.",
    hint: "Look for the 'R' or private airport symbol indicator.",
    figureRef: "figure-71",
    difficulty: "medium",
    tags: ["private-airport", "sectional-chart"],
    relatedQuestions: ["air-021"],
    faaReference: null
  },
  {
    id: "air-042",
    category: "airspace",
    categoryName: "Airspace",
    question: "According to 14 CFR part 107 the remote pilot in command (PIC) of a small unmanned aircraft planning to operate within Class C airspace",
    options: [
      { id: "A", text: "must use a visual observer." },
      { id: "B", text: "is required to file a flight plan." },
      { id: "C", text: "is required to receive ATC authorization." }
    ],
    correctAnswer: "C",
    explanation: "Under Part 107, you MUST receive ATC authorization BEFORE operating in Class B, C, or D airspace or within Class E surface areas. This can be done through LAANC or by requesting authorization directly. No flight plan or visual observer is required for this.",
    hint: "Controlled airspace requires prior authorization, obtainable through LAANC.",
    figureRef: null,
    difficulty: "easy",
    tags: ["class-c", "atc-authorization", "part-107"],
    relatedQuestions: ["air-018"],
    faaReference: "14 CFR 107.41"
  },
  {
    id: "air-043",
    category: "airspace",
    categoryName: "Airspace",
    question: "Flight through a restricted area should not be accomplished unless the remote pilot has",
    options: [
      { id: "A", text: "filed an IFR flight plan." },
      { id: "B", text: "received prior authorization from the controlling agency." },
      { id: "C", text: "received prior permission from the commanding officer of the nearest military base." }
    ],
    correctAnswer: "B",
    explanation: "To enter a Restricted Area, you need authorization from the CONTROLLING AGENCY (not necessarily military). The controlling agency information is found in the Chart Supplement. Filing a flight plan doesn't grant access to restricted areas.",
    hint: "The controlling agency for the restricted area must authorize entry.",
    figureRef: null,
    difficulty: "medium",
    tags: ["restricted-area", "authorization", "special-use-airspace"],
    relatedQuestions: ["air-009", "air-026"],
    faaReference: null
  },
  {
    id: "air-044",
    category: "airspace",
    categoryName: "Airspace",
    question: "(Refer to Figure 20, area 3.) With ATC authorization, you are operating your small unmanned aircraft approximately 4 SM southeast of Elizabeth City Regional Airport (ECG). What hazard is indicated to be in that area?",
    options: [
      { id: "A", text: "High density military operations in the vicinity." },
      { id: "B", text: "Unmarked balloon on a cable up to 3,008 feet AGL." },
      { id: "C", text: "Unmarked balloon on a cable up to 3,008 feet MSL." }
    ],
    correctAnswer: "C",
    explanation: "The chart shows a CAUTION box indicating an unmarked balloon on a cable to 3,008 feet MSL (not AGL). Tethered balloons with cables are extremely hazardous because the cable is difficult to see.",
    hint: "CAUTION boxes indicate specific hazards - read whether it's MSL or AGL.",
    figureRef: "figure-20",
    difficulty: "medium",
    tags: ["caution-areas", "hazards", "msl-agl"],
    relatedQuestions: ["air-028"],
    faaReference: null
  },
  {
    id: "air-045",
    category: "airspace",
    categoryName: "Airspace",
    question: "(Refer to Figure 24, area 1.) For information about the parachute jumping at Caddo Mills Airport, refer to",
    options: [
      { id: "A", text: "notes on the border of the chart." },
      { id: "B", text: "the Chart Supplement." },
      { id: "C", text: "the Notices to Airmen (NOTAM) publication." }
    ],
    correctAnswer: "B",
    explanation: "The Chart Supplement (formerly Airport/Facility Directory) contains detailed information about parachute jumping sites including hours of operation, altitudes used, and contact information. It's the primary reference for permanent jump site information.",
    hint: "The Chart Supplement has detailed facility and special operation information.",
    figureRef: "figure-24",
    difficulty: "easy",
    tags: ["chart-supplement", "parachute-operations"],
    relatedQuestions: ["air-004"],
    faaReference: null
  },
  {
    id: "air-046",
    category: "airspace",
    categoryName: "Airspace",
    question: "(Refer to Figure 26, area 4.) You have been hired to inspect the tower under construction at 46.9N and 98.6W, near Jamestown Regional (JMS). What must you receive prior to flying your unmanned aircraft in this area?",
    options: [
      { id: "A", text: "Authorization from the military." },
      { id: "B", text: "Authorization from ATC." },
      { id: "C", text: "Authorization from the National Park Service." }
    ],
    correctAnswer: "B",
    explanation: "Jamestown Regional Airport has controlled airspace (Class D or Class E surface area) around it. To operate a UAS in this airspace, you must receive prior ATC authorization through LAANC or direct request.",
    hint: "Check if the location is within controlled airspace requiring ATC authorization.",
    figureRef: "figure-26",
    difficulty: "medium",
    tags: ["atc-authorization", "controlled-airspace"],
    relatedQuestions: ["air-018", "air-042"],
    faaReference: null
  },
  {
    id: "air-047",
    category: "airspace",
    categoryName: "Airspace",
    question: "The lateral dimensions of Class D airspace are based on",
    options: [
      { id: "A", text: "the number of airports that lie within the Class D airspace." },
      { id: "B", text: "5 statute miles from the geographical center of the primary airport." },
      { id: "C", text: "the instrument procedures for which the controlled airspace is established." }
    ],
    correctAnswer: "C",
    explanation: "Class D airspace dimensions are tailored to accommodate the instrument approach procedures at that airport. This is why Class D isn't always a perfect circle - it's shaped to protect the approaches.",
    hint: "Class D is designed to protect instrument approach and departure procedures.",
    figureRef: null,
    difficulty: "hard",
    tags: ["class-d", "airspace-dimensions"],
    relatedQuestions: ["air-016"],
    faaReference: null
  },
  {
    id: "air-048",
    category: "airspace",
    categoryName: "Airspace",
    question: "(Refer to Figure 25, area 3.) The floor of Class B airspace at Dallas Executive (RBD) is",
    options: [
      { id: "A", text: "at the surface." },
      { id: "B", text: "3,000 feet MSL." },
      { id: "C", text: "3,100 feet MSL." }
    ],
    correctAnswer: "C",
    explanation: "Looking at the Class B airspace tier over Dallas Executive, the altitude notation shows the floor is 3,100 feet MSL. Class B has multiple shelves at different altitudes extending outward from the primary airport.",
    hint: "Read the lower number in the Class B altitude stack for the floor.",
    figureRef: "figure-25",
    difficulty: "medium",
    tags: ["class-b", "sectional-chart", "airspace-floor"],
    relatedQuestions: ["air-039", "air-055"],
    faaReference: null
  },
  {
    id: "air-049",
    category: "airspace",
    categoryName: "Airspace",
    question: "(Refer to Figure 31.) Within what airspace is Coeur D'Alene Pappy Boyington Fld located?",
    options: [
      { id: "A", text: "Class B" },
      { id: "B", text: "Class E" },
      { id: "C", text: "Class D" }
    ],
    correctAnswer: "C",
    explanation: "Coeur D'Alene Airport has Class D airspace, indicated by the blue dashed segmented circle around the airport. This shows it has an operating control tower with Class D airspace from the surface to the specified ceiling.",
    hint: "Blue dashed circles indicate Class D airspace.",
    figureRef: "figure-31",
    difficulty: "medium",
    tags: ["class-d", "sectional-chart"],
    relatedQuestions: ["air-016", "air-025"],
    faaReference: null
  },
  {
    id: "air-050",
    category: "airspace",
    categoryName: "Airspace",
    question: "The width of a Federal Airway from either side of the centerline is",
    options: [
      { id: "A", text: "4 nautical miles." },
      { id: "B", text: "6 nautical miles." },
      { id: "C", text: "8 nautical miles." }
    ],
    correctAnswer: "A",
    explanation: "Federal Airways (Victor airways) extend 4 nautical miles on each side of the centerline, for a total width of 8 nautical miles. The airways are shown as blue lines on sectional charts.",
    hint: "Airways extend 4 NM on each side = 8 NM total width.",
    figureRef: null,
    difficulty: "medium",
    tags: ["federal-airway", "airspace-dimensions"],
    relatedQuestions: ["air-010", "air-012"],
    faaReference: null
  },
  {
    id: "air-051",
    category: "airspace",
    categoryName: "Airspace",
    question: "One of the purposes for issuing a Temporary Flight Restriction (TFR) is to",
    options: [
      { id: "A", text: "announce Parachute Jump Areas." },
      { id: "B", text: "protect public figures." },
      { id: "C", text: "identify Airport Advisory Areas." }
    ],
    correctAnswer: "B",
    explanation: "TFRs are issued for various reasons including protecting public figures (VIPs), disaster/hazard areas, space operations, and special events. Parachute jump areas are in the Chart Supplement, not TFRs. Airport advisories are separate communications.",
    hint: "TFRs provide temporary protection for specific events or people.",
    figureRef: null,
    difficulty: "easy",
    tags: ["tfr", "notams"],
    relatedQuestions: ["air-003"],
    faaReference: null
  },
  {
    id: "air-052",
    category: "airspace",
    categoryName: "Airspace",
    question: "You know when looking at a chart that the floor of Class E airspace is 700 feet AGL when it's within",
    options: [
      { id: "A", text: "the fuzzy side of the blue vignette." },
      { id: "B", text: "the fuzzy side of the magenta vignette." },
      { id: "C", text: "the magenta dashed line." }
    ],
    correctAnswer: "B",
    explanation: "The magenta vignette (shading that fades from solid to nothing) indicates where Class E airspace begins at 700 feet AGL. The fuzzy/fading edge faces away from the airport. Inside this shading, Class G extends only to 700 feet AGL.",
    hint: "Magenta shading = Class E floor at 700 feet AGL.",
    figureRef: null,
    difficulty: "medium",
    tags: ["class-e", "sectional-chart", "symbology"],
    relatedQuestions: ["air-008", "air-020"],
    faaReference: null
  },
  {
    id: "air-053",
    category: "airspace",
    categoryName: "Airspace",
    question: "(Refer to Figure 75, area 6.) During preflight planning, you plan to operate in R-2305. Where would you find additional information regarding this airspace?",
    options: [
      { id: "A", text: "In the Aeronautical Information Manual." },
      { id: "B", text: "In the Charts Supplements U.S." },
      { id: "C", text: "In the Special Use Airspace area of the chart." }
    ],
    correctAnswer: "B",
    explanation: "Detailed information about Restricted Areas (controlling agency, times of use, altitudes, etc.) is found in the Chart Supplement. The chart shows the boundaries, but the Chart Supplement has the operational details.",
    hint: "The Chart Supplement contains detailed special use airspace information.",
    figureRef: "figure-75",
    difficulty: "medium",
    tags: ["restricted-area", "chart-supplement", "resources"],
    relatedQuestions: ["air-017"],
    faaReference: null
  },
  {
    id: "air-054",
    category: "airspace",
    categoryName: "Airspace",
    question: "(Refer to Figure 78.) You are hired to inspect the railroad tracks from the town of Hinton, north of Sioux City, to the town of Winnebago. Will you require ATC authorization?",
    options: [
      { id: "A", text: "No, the flight will remain clear of controlled airspace." },
      { id: "B", text: "Yes, your route of flight will pass through Class D airspace." },
      { id: "C", text: "Yes, your route of flight will pass through Class E airspace." }
    ],
    correctAnswer: "B",
    explanation: "The route from Hinton to Winnebago passes through Class D airspace (indicated by blue dashed circle around an airport). Class D requires ATC authorization for UAS operations.",
    hint: "Look for blue dashed circles (Class D) along the route.",
    figureRef: "figure-78",
    difficulty: "medium",
    tags: ["class-d", "atc-authorization", "sectional-chart"],
    relatedQuestions: ["air-005", "air-006"],
    faaReference: null
  },
  {
    id: "air-055",
    category: "airspace",
    categoryName: "Airspace",
    question: "(Refer to Figure 25, area 4.) The floor of Class B airspace overlying Hicks Airport (T67) north-northwest of Fort Worth Meacham Field is",
    options: [
      { id: "A", text: "at the surface." },
      { id: "B", text: "3,200 feet MSL." },
      { id: "C", text: "4,000 feet MSL." }
    ],
    correctAnswer: "C",
    explanation: "At the location of Hicks Airport, the Class B airspace shelf has a floor of 4,000 feet MSL. Class B has multiple tiers with different floors - always check the specific location on the chart.",
    hint: "Read the altitude numbers for the Class B shelf at that specific location.",
    figureRef: "figure-25",
    difficulty: "medium",
    tags: ["class-b", "sectional-chart", "airspace-floor"],
    relatedQuestions: ["air-039", "air-048"],
    faaReference: null
  },
  {
    id: "air-056",
    category: "airspace",
    categoryName: "Airspace",
    question: "With certain exceptions, Class E airspace extends upward from either 700 feet or 1,200 feet AGL to, but does not include,",
    options: [
      { id: "A", text: "10,000 feet MSL." },
      { id: "B", text: "14,500 feet MSL." },
      { id: "C", text: "18,000 feet MSL." }
    ],
    correctAnswer: "C",
    explanation: "Class E airspace generally extends up to but NOT including 18,000 feet MSL. At 18,000 feet MSL, Class A airspace begins. Class A requires an IFR flight plan and is not accessible to VFR traffic or Part 107 UAS operations.",
    hint: "Class A airspace begins at 18,000 feet MSL.",
    figureRef: null,
    difficulty: "medium",
    tags: ["class-e", "class-a", "vertical-limits"],
    relatedQuestions: ["air-012"],
    faaReference: null
  },
  {
    id: "air-057",
    category: "airspace",
    categoryName: "Airspace",
    question: "The VFR pilot flying in Class G airspace",
    options: [
      { id: "A", text: "has tighter cloud and visibility restrictions because IFR aircraft flying in Class G airspace do not have air traffic control service." },
      { id: "B", text: "has no cloud and visibility restrictions because IFR operations are prohibited in Class G airspace." },
      { id: "C", text: "has reduced cloud and visibility restrictions because it's unlikely that IFR traffic will be operating in Class G airspace." }
    ],
    correctAnswer: "C",
    explanation: "Class G (uncontrolled) airspace has REDUCED visibility and cloud clearance requirements compared to controlled airspace. This is because ATC doesn't control traffic there, and IFR traffic is less likely to be present.",
    hint: "Uncontrolled airspace = less stringent weather requirements.",
    figureRef: null,
    difficulty: "hard",
    tags: ["class-g", "weather-minimums"],
    relatedQuestions: [],
    faaReference: null
  },
  {
    id: "air-058",
    category: "airspace",
    categoryName: "Airspace",
    question: "A blue segmented circle on a Sectional Chart depicts which class airspace?",
    options: [
      { id: "A", text: "Class B." },
      { id: "B", text: "Class C." },
      { id: "C", text: "Class D." }
    ],
    correctAnswer: "C",
    explanation: "A blue dashed (segmented) circle indicates Class D airspace around an airport with an operating control tower. Class B uses solid blue lines, Class C uses solid magenta lines.",
    hint: "Blue DASHED = Class D. Blue SOLID = Class B.",
    figureRef: null,
    difficulty: "easy",
    tags: ["class-d", "sectional-chart", "symbology"],
    relatedQuestions: ["air-016"],
    faaReference: null
  },
  {
    id: "air-059",
    category: "airspace",
    categoryName: "Airspace",
    question: "Uncontrolled airspace is",
    options: [
      { id: "A", text: "Class G airspace." },
      { id: "B", text: "for flying VFR only." },
      { id: "C", text: "primarily for instrument flight operations." }
    ],
    correctAnswer: "A",
    explanation: "Class G is the only UNCONTROLLED airspace class. It's where ATC doesn't provide separation services. IFR flights CAN operate in Class G (though less common), and it's definitely not 'primarily' for instrument operations.",
    hint: "G = 'Ground-based' uncontrolled airspace.",
    figureRef: null,
    difficulty: "easy",
    tags: ["class-g", "airspace-classification"],
    relatedQuestions: ["air-057"],
    faaReference: null
  },
  {
    id: "air-060",
    category: "airspace",
    categoryName: "Airspace",
    question: "(Refer to Figure 20 area 4.) What hazards to aircraft may exist in restricted areas such as R-5302B?",
    options: [
      { id: "A", text: "Unusual, often invisible, hazards such as aerial gunnery or guided missiles." },
      { id: "B", text: "Military training activities that necessitate acrobatic or abrupt flight maneuvers." },
      { id: "C", text: "High volume of pilot training or an unusual type of aerial activity." }
    ],
    correctAnswer: "A",
    explanation: "Restricted Areas contain hazards that are often INVISIBLE and extremely dangerous - like artillery firing, aerial gunnery, and guided missiles. Option B describes MOAs, and Option C describes Alert Areas. Restricted Areas have the most serious hazards.",
    hint: "Restricted Areas = dangerous, often invisible hazards like weapons testing.",
    figureRef: "figure-20",
    difficulty: "medium",
    tags: ["restricted-area", "hazards", "special-use-airspace"],
    relatedQuestions: ["air-009", "air-026"],
    faaReference: null
  }
];

export default airspaceQuestions;
