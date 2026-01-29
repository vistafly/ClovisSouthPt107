// FAA Test Figure Index
// These figures are from FAA-CT-8080-2H Testing Supplement
// Download from: https://www.faa.gov/sites/faa.gov/files/training_testing/testing/supplements/sport_rec_private_akts.pdf
// Alternative: https://www.dronepilotgroundschool.com/wp-content/uploads/2017/09/sport_rec_private_akts.pdf

export const figures = {
  "figure-1": {
    id: "figure-1",
    title: "Angle of Attack Diagram",
    description: "Diagram showing the acute angle between the chord line and relative wind (angle of attack)",
    faaReference: "FAA-CT-8080-2H, Figure 1",
    placeholder: false,
    imagePath: "/images/fig1.jpg",
    usedInQuestions: ["perf-013"],
    instructions: "Shows a wing cross-section with labeled chord line and relative wind direction. The angle A between them is the angle of attack."
  },
  
  "figure-2": {
    id: "figure-2",
    title: "Load Factor Chart",
    description: "Graph showing relationship between bank angle and load factor (G forces)",
    faaReference: "FAA-CT-8080-2H, Figure 2",
    placeholder: true,
    imagePath: "/figures/figure-2.png",
    usedInQuestions: ["perf-007", "perf-010", "perf-012", "perf-031", "perf-032"],
    instructions: "X-axis: Bank angle (0° to 90°). Y-axis: Load factor (1.0 to 9.0 G). Key values: 30°≈1.15G, 45°≈1.4G, 60°=2.0G",
    keyData: {
      "0°": 1.0,
      "30°": 1.15,
      "45°": 1.41,
      "60°": 2.0,
      "70°": 2.92,
      "80°": 5.76
    }
  },

  "figure-12": {
    id: "figure-12",
    title: "METAR Examples",
    description: "Sample METAR weather reports for various airports",
    faaReference: "FAA-CT-8080-2H, Figure 12",
    placeholder: false,
    imagePath: "/images/fig12.jpg",
    usedInQuestions: ["wx-013", "wx-020", "wx-023", "wx-048"],
    instructions: "Contains METAR data for: KINK (Wink, TX), KBOI (Boise, ID), KJFK (JFK, NY), KMDW (Chicago Midway), KLAX (Los Angeles)"
  },

  "figure-15": {
    id: "figure-15",
    title: "TAF Examples",
    description: "Sample Terminal Aerodrome Forecast (TAF) reports",
    faaReference: "FAA-CT-8080-2H, Figure 15",
    placeholder: false,
    imagePath: "/images/fig15.jpg",
    usedInQuestions: ["wx-003", "wx-005", "wx-019", "wx-42", "wx-054", "wx-056"],
    instructions: "Contains TAF data for KMEM (Memphis) and KOKC (Oklahoma City) with FROM groups, visibility, and cloud forecasts"
  },

  "figure-19": {
    id: "figure-19",
    title: "Significant Weather Prognostic Chart",
    description: "12-hour and 24-hour surface prognostic charts",
    faaReference: "FAA-CT-8080-2H, Figure 19",
    placeholder: false,
    imagePath: "/images/fig19.jpg",
    usedInQuestions: ["wx-038", "wx-040", "wx-047", "wx-060"],
    instructions: "Shows surface fronts, pressure systems, and weather areas for the continental US"
  },

  "figure-20": {
    id: "figure-20",
    title: "Sectional Chart Excerpt - Norfolk/Chesapeake Area",
    description: "VFR Sectional Chart excerpt showing Norfolk, Elizabeth City, and surrounding Virginia/North Carolina area",
    faaReference: "FAA-CT-8080-2H, Figure 20",
    placeholder: true,
    imagePath: "/figures/figure-20.png",
    usedInQuestions: ["air-007", "air-027", "air-028", "air-029", "air-033", "air-044", "air-060"],
    instructions: "Shows Class C airspace around Norfolk, VFR checkpoints, restricted areas including R-5302, and CAUTION box for tethered balloon",
    keyFeatures: ["Lake Drummond VFR checkpoint", "Chesapeake Regional Airport", "Elizabeth City Regional Airport", "R-5302 Restricted Area", "Tethered balloon CAUTION"]
  },

  "figure-21": {
    id: "figure-21",
    title: "Sectional Chart Excerpt - North Dakota Area",
    description: "VFR Sectional Chart excerpt showing Minot, Garrison, and surrounding North Dakota area",
    faaReference: "FAA-CT-8080-2H, Figure 21",
    placeholder: true,
    imagePath: "/figures/figure-21.png",
    usedInQuestions: ["air-002", "air-017", "air-024", "air-037", "ops-023"],
    instructions: "Shows Minot International Airport, Garrison Airport, Devil's Lake West MOA, and terrain contours",
    keyFeatures: ["Minot Intl (MOT)", "Garrison Airport", "Devil's Lake West MOA", "Terrain 2000-2500 ft MSL"]
  },

  "figure-22": {
    id: "figure-22",
    title: "Sectional Chart Excerpt - Idaho Area",
    description: "VFR Sectional Chart excerpt showing Coeur d'Alene and Magee Airport area",
    faaReference: "FAA-CT-8080-2H, Figure 22",
    placeholder: true,
    imagePath: "/figures/figure-22.png",
    usedInQuestions: ["air-010", "ops-031", "ops-036"],
    instructions: "Shows Victor Airways, Class E airspace, Coeur d'Alene Airport with Class D",
    keyFeatures: ["Coeur d'Alene Airport", "Victor Airways (Federal Airways)", "Magee Airport"]
  },

  "figure-23": {
    id: "figure-23",
    title: "Sectional Chart Excerpt - Savannah Area",
    description: "VFR Sectional Chart excerpt showing Savannah Class C and surrounding Georgia area",
    faaReference: "FAA-CT-8080-2H, Figure 23",
    placeholder: true,
    imagePath: "/figures/figure-23.png",
    usedInQuestions: ["air-011", "air-019", "air-034", "reg-031"],
    instructions: "Shows Savannah Class C airspace, VFR checkpoints with flag symbols, Hilton Head area",
    keyFeatures: ["Savannah Class C", "VFR checkpoints (flag symbols)", "Plantation Airport (JYL)", "Hilton Head Airport"]
  },

  "figure-24": {
    id: "figure-24",
    title: "Sectional Chart Excerpt - North Texas Area",
    description: "VFR Sectional Chart showing area with parachute operations",
    faaReference: "FAA-CT-8080-2H, Figure 24",
    placeholder: true,
    imagePath: "/figures/figure-24.png",
    usedInQuestions: ["air-021", "air-045"],
    instructions: "Shows Caddo Mills Airport with parachute activity, Card Airport (private)",
    keyFeatures: ["Caddo Mills Airport (parachute jumping)", "Card Airport (private)"]
  },

  "figure-25": {
    id: "figure-25",
    title: "Sectional Chart Excerpt - Dallas-Fort Worth Area",
    description: "VFR Sectional Chart showing DFW Class B and surrounding airports",
    faaReference: "FAA-CT-8080-2H, Figure 25",
    placeholder: true,
    imagePath: "/figures/figure-25.png",
    usedInQuestions: ["air-016", "air-025", "air-038", "air-039", "air-048", "air-055"],
    instructions: "Shows Dallas-Fort Worth Class B airspace with multiple altitude shelves, Class D airports including McKinney, Addison, Fort Worth Meacham",
    keyFeatures: ["DFW Class B airspace", "McKinney (TKI)", "Addison Airport", "Fort Worth Meacham", "Dallas Executive (RBD)", "Hicks Airport (T67)"]
  },

  "figure-26": {
    id: "figure-26",
    title: "Sectional Chart Excerpt - Eastern North Dakota",
    description: "VFR Sectional Chart showing Jamestown and Cooperstown area",
    faaReference: "FAA-CT-8080-2H, Figure 26",
    placeholder: true,
    imagePath: "/figures/figure-26.png",
    usedInQuestions: ["air-001", "air-008", "air-013", "air-031", "air-046", "ops-006"],
    instructions: "Shows Barnes County Airport, Jamestown Regional (JMS) with Class D, Cooperstown Airport, Tomlinson Airport",
    keyFeatures: ["Barnes County Airport", "Jamestown Regional (JMS) - Class D", "Cooperstown Airport", "Tomlinson Airport (8J7)"]
  },

  "figure-31": {
    id: "figure-31",
    title: "Coeur d'Alene Airport Diagram",
    description: "Airport diagram for Coeur d'Alene Pappy Boyington Field",
    faaReference: "FAA-CT-8080-2H, Figure 31",
    placeholder: true,
    imagePath: "/figures/figure-31.png",
    usedInQuestions: ["air-049", "ops-031"],
    instructions: "Shows airport layout, runways, taxiways, and frequencies for Coeur d'Alene"
  },

  "figure-48": {
    id: "figure-48",
    title: "Runway Diagram",
    description: "Runway with displaced threshold markings",
    faaReference: "FAA-CT-8080-2H, Figure 48",
    placeholder: false,
    imagePath: "/images/fig48.png",
    usedInQuestions: ["ops-047"],
    instructions: "Shows runway markings including displaced threshold area (marked as A)"
  },

  "figure-49": {
    id: "figure-49",
    title: "Segmented Circle and Wind Indicator",
    description: "Airport segmented circle with wind indicator and runway pattern indicators",
    faaReference: "FAA-CT-8080-2H, Figure 49",
    placeholder: true,
    imagePath: "/figures/figure-49.png",
    usedInQuestions: ["ops-027", "ops-034"],
    instructions: "Shows wind direction indicator, traffic pattern indicators, and runway layout"
  },

  "figure-50": {
    id: "figure-50",
    title: "Airport Traffic Pattern Diagram",
    description: "Segmented circle showing traffic patterns for different runways",
    faaReference: "FAA-CT-8080-2H, Figure 50",
    placeholder: true,
    imagePath: "/figures/figure-50.png",
    usedInQuestions: ["ops-022", "ops-053"],
    instructions: "Shows segmented circle indicating right and left traffic patterns for different runways"
  },

  "figure-52": {
    id: "figure-52",
    title: "Lincoln Municipal Airport Area Chart",
    description: "Chart showing Lincoln Municipal Airport and surrounding area",
    faaReference: "FAA-CT-8080-2H, Figure 52",
    placeholder: true,
    imagePath: "/figures/figure-52.png",
    usedInQuestions: ["ops-001", "ops-016", "ops-020", "ops-060"],
    instructions: "Shows Lincoln Municipal with Class C, traffic pattern information, frequencies, and Loup City Municipal"
  },

  "figure-59": {
    id: "figure-59",
    title: "Military Training Routes",
    description: "Chart excerpt showing VR (Visual) Military Training Routes",
    faaReference: "FAA-CT-8080-2H, Figure 59",
    placeholder: true,
    imagePath: "/figures/figure-59.png",
    usedInQuestions: ["air-032"],
    instructions: "Shows VR routes (VR1667, VR1617, VR1638, VR1668) - gray lines indicating military training routes below 1,500 ft AGL"
  },

  "figure-65": {
    id: "figure-65",
    title: "Airport Signs and Markings",
    description: "Diagram showing runway and taxiway signs, markings, and their meanings",
    faaReference: "FAA-CT-8080-2H, Figure 65",
    placeholder: true,
    imagePath: "/figures/figure-65.png",
    usedInQuestions: ["ops-003", "ops-042"],
    instructions: "Shows holding position signs (Sign G), runway signs (Sign D), and taxiway markings"
  },

  "figure-69": {
    id: "figure-69",
    title: "Sectional Chart Excerpt - Corpus Christi Area",
    description: "VFR Sectional Chart showing Corpus Christi International Airport area",
    faaReference: "FAA-CT-8080-2H, Figure 69",
    placeholder: false,
    imagePath: "/images/fig69.png",
    usedInQuestions: ["reg-008"],
    instructions: "Shows Corpus Christi Class C airspace, tower locations, and airport information"
  },

  "figure-71": {
    id: "figure-71",
    title: "Sectional Chart Excerpt - California Area",
    description: "VFR Sectional Chart showing Georgetown and Sky Way airports",
    faaReference: "FAA-CT-8080-2H, Figure 71",
    placeholder: true,
    imagePath: "/figures/figure-71.png",
    usedInQuestions: ["air-020", "air-041"],
    instructions: "Shows Georgetown Airport (E36), Sky Way Airport (private), Class E boundaries"
  },

  "figure-74": {
    id: "figure-74",
    title: "Sectional Chart Excerpt - Southwest Area",
    description: "VFR Sectional Chart showing restricted areas in the Southwest",
    faaReference: "FAA-CT-8080-2H, Figure 74",
    placeholder: true,
    imagePath: "/figures/figure-74.png",
    usedInQuestions: [],
    instructions: "Shows restricted airspace areas in the southwestern United States"
  },

  "figure-75": {
    id: "figure-75",
    title: "Sectional Chart Excerpt with R-2305",
    description: "VFR Sectional Chart showing R-2305 restricted area",
    faaReference: "FAA-CT-8080-2H, Figure 75",
    placeholder: true,
    imagePath: "/figures/figure-75.png",
    usedInQuestions: ["air-053"],
    instructions: "Shows R-2305 restricted area with boundaries and information"
  },

  "figure-76": {
    id: "figure-76",
    title: "Sectional Chart Excerpt - Anderson Airport Area",
    description: "VFR Sectional Chart showing Anderson Airport and surrounding airspace",
    faaReference: "FAA-CT-8080-2H, Figure 76",
    placeholder: true,
    imagePath: "/figures/figure-76.png",
    usedInQuestions: ["air-030"],
    instructions: "Shows Anderson Airport in uncontrolled (Class G) airspace"
  },

  "figure-78": {
    id: "figure-78",
    title: "Sectional Chart Excerpt - Sioux City Area",
    description: "VFR Sectional Chart showing Sioux Gateway and surrounding Iowa/Nebraska area",
    faaReference: "FAA-CT-8080-2H, Figure 78",
    placeholder: true,
    imagePath: "/figures/figure-78.png",
    usedInQuestions: ["air-005", "air-006", "air-014", "air-035", "air-054"],
    instructions: "Shows Sioux Gateway Airport (SUX) with Class D, Onawa (K36), towns of Hinton, Winnebago, Blencoe",
    keyFeatures: ["Sioux Gateway (SUX) - Class D", "Onawa (K36) - Class G", "Railroad tracks", "Hinton", "Winnebago", "Blencoe"]
  }
};

// Helper function to get figure by ID
export const getFigureById = (figureId) => {
  return figures[figureId] || null;
};

// Helper function to get all figures for a category
export const getFiguresForCategory = (category) => {
  return Object.values(figures).filter(fig => 
    fig.usedInQuestions.some(q => q.startsWith(category))
  );
};

// Placeholder component instructions
export const placeholderInstructions = `
ADDING FIGURES TO THE APPLICATION:

1. Download the official FAA testing supplement from:
   https://www.faa.gov/sites/faa.gov/files/training_testing/testing/supplements/sport_rec_private_akts.pdf

2. Extract the relevant figures as PNG or JPG images

3. Place images in the /public/figures/ directory with names matching the imagePath

4. Update the 'placeholder' property to 'false' for each added figure

5. The FigureViewer component will automatically display the image when available

Note: Figures must be in color to accurately represent the sectional charts.
`;

export default figures;
