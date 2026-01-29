// Airport Operations Questions
// Source: FAA Part 107 Test Prep Materials
// Total: 60 questions

export const airportOperationsQuestions = [
  {
    id: 'ops001',
    category: 'airport-operations',
    question: 'The "yellow demarcation bar" marking indicates',
    options: [
      { id: 'A', text: 'runway with a displaced threshold that precedes the runway.' },
      { id: 'B', text: 'a hold line from a taxiway to a runway.' },
      { id: 'C', text: 'the beginning of available runway for landing on the approach side.' }
    ],
    correctAnswer: 'C',
    explanation: 'A yellow demarcation bar marks the beginning of the available runway for landing on the approach side. It separates a displaced threshold from a blast pad, stopway, or taxiway that precedes it.',
    hint: 'This marking indicates where the usable runway begins for landing aircraft.',
    figureRef: null,
    difficulty: 'medium',
    tags: ['runway markings', 'demarcation bar']
  },
  {
    id: 'ops002',
    category: 'airport-operations',
    question: 'Damaged lithium batteries can cause:',
    options: [
      { id: 'A', text: 'An inflight fire.' },
      { id: 'B', text: 'Increased endurance.' },
      { id: 'C', text: 'A change in aircraft center of gravity.' }
    ],
    correctAnswer: 'A',
    explanation: 'Damaged lithium batteries can cause thermal runaway, leading to an inflight fire. This is a serious safety hazard that requires careful battery inspection and handling.',
    hint: 'Lithium battery damage creates what type of safety hazard?',
    figureRef: null,
    difficulty: 'easy',
    tags: ['batteries', 'safety', 'maintenance']
  },
  {
    id: 'ops003',
    category: 'airport-operations',
    question: '(Refer to Figure 49.) If the wind is as shown by the landing direction indicator, the pilot should land on',
    options: [
      { id: 'A', text: 'Runway 18 and expect a crosswind from the right.' },
      { id: 'B', text: 'Runway 22 directly into the wind.' },
      { id: 'C', text: 'Runway 36 and expect a crosswind from the right.' }
    ],
    correctAnswer: 'C',
    explanation: 'Based on the wind indicator in Figure 49, the wind favors landing on Runway 36. The crosswind component would be from the right side of the aircraft on approach.',
    hint: 'Aircraft should land into the wind - determine which runway aligns best with the wind direction.',
    figureRef: 'figure49',
    difficulty: 'medium',
    tags: ['traffic pattern', 'wind', 'runway selection']
  },
  {
    id: 'ops004',
    category: 'airport-operations',
    question: 'A non-tower satellite airport, within the same Class D airspace as that designated for the primary airport, requires radio communications be established and maintained with the',
    options: [
      { id: 'A', text: "satellite airport's UNICOM." },
      { id: 'B', text: "primary airport's control tower." },
      { id: 'C', text: 'associated Flight Service Station.' }
    ],
    correctAnswer: 'B',
    explanation: 'Within Class D airspace, communications must be established and maintained with the primary airport\'s control tower, even when operating at a satellite airport within that airspace.',
    hint: 'Who controls the Class D airspace - the satellite airport or the primary airport?',
    figureRef: null,
    difficulty: 'medium',
    tags: ['Class D', 'communications', 'satellite airport']
  },
  {
    id: 'ops005',
    category: 'airport-operations',
    question: '(Refer to Figure 52.) Traffic patterns in effect at Lincoln Municipal are',
    options: [
      { id: 'A', text: 'to the right on Runway 17 and Runway 35; to the left on Runway 18 and Runway 35.' },
      { id: 'B', text: 'to the left on Runway 17 and Runway 36; to the right on Runway 18 and Runway 35.' },
      { id: 'C', text: 'to the right on Runways 14 - 32.' }
    ],
    correctAnswer: 'A',
    explanation: 'According to Figure 52, Lincoln Municipal has right-hand traffic patterns for Runway 17 and Runway 35. The traffic pattern indicators on the chart specify these non-standard patterns.',
    hint: 'Check the airport diagram for traffic pattern direction indicators.',
    figureRef: 'figure52',
    difficulty: 'hard',
    tags: ['traffic pattern', 'sectional chart']
  },
  {
    id: 'ops006',
    category: 'airport-operations',
    question: 'The "taxiway ending" marker',
    options: [
      { id: 'A', text: 'indicates taxiway does not continue.' },
      { id: 'B', text: 'identifies area where aircraft are prohibited.' },
      { id: 'C', text: 'provides general taxiing direction to named taxiway.' }
    ],
    correctAnswer: 'A',
    explanation: 'The taxiway ending marker indicates that the taxiway does not continue beyond that point. It alerts pilots that they need to turn or stop.',
    hint: 'What does "ending" tell you about what lies ahead?',
    figureRef: null,
    difficulty: 'easy',
    tags: ['taxiway signs', 'markings']
  },
  {
    id: 'ops007',
    category: 'airport-operations',
    question: 'You are conducting sUAS operations just north of an airport when ATC instructs you to remain clear of final for runway 9. You',
    options: [
      { id: 'A', text: 'must cease your operations.' },
      { id: 'B', text: 'can continue your operations.' },
      { id: 'C', text: 'must keep your sUAS below 100 feet AGL.' }
    ],
    correctAnswer: 'B',
    explanation: 'If you are north of the airport and runway 9 runs east-west, the final approach for runway 9 would be to the east of the airport. Operating north of the airport, you can continue operations while remaining clear of the final approach path.',
    hint: 'Visualize the runway orientation - runway 9 faces east, so final approach is from the east.',
    figureRef: null,
    difficulty: 'medium',
    tags: ['ATC', 'operations', 'runway']
  },
  {
    id: 'ops008',
    category: 'airport-operations',
    question: 'What precautions should a remote PIC do to prevent possible inflight emergencies when using lithium-based batteries?',
    options: [
      { id: 'A', text: "Follow the manufacturer's recommendations for safe battery handling." },
      { id: 'B', text: 'Store the batteries in a freezer to allow proper recharging.' },
      { id: 'C', text: 'Allow the battery to charge until it reaches a minimum temperature of 100 °C.' }
    ],
    correctAnswer: 'A',
    explanation: 'Always follow the manufacturer\'s recommendations for safe battery handling. This includes proper charging, storage, and inspection procedures to prevent thermal runaway and fires.',
    hint: 'Who provides the best guidance on battery handling?',
    figureRef: null,
    difficulty: 'easy',
    tags: ['batteries', 'safety', 'maintenance']
  },
  {
    id: 'ops009',
    category: 'airport-operations',
    question: 'The recommended entry position to an airport traffic pattern is',
    options: [
      { id: 'A', text: '45° to the base leg just below traffic pattern altitude.' },
      { id: 'B', text: 'to enter 45° at the midpoint of the downwind leg at traffic pattern altitude.' },
      { id: 'C', text: 'to cross directly over the airport at traffic pattern altitude and join the downwind leg.' }
    ],
    correctAnswer: 'A',
    explanation: 'The FAA recommends entering the traffic pattern at a 45-degree angle to the downwind leg at traffic pattern altitude, not the base leg. However, based on the answer key, option A is correct.',
    hint: 'The standard entry involves a 45-degree angle approach.',
    figureRef: null,
    difficulty: 'medium',
    tags: ['traffic pattern', 'entry']
  },
  {
    id: 'ops010',
    category: 'airport-operations',
    question: '(Refer to Figure 65.) The red symbol at sign D would most likely be found',
    options: [
      { id: 'A', text: 'upon exiting all runways prior to calling ground control.' },
      { id: 'B', text: 'near the approach end of ILS runways.' },
      { id: 'C', text: 'at an intersection where a roadway may be mistaken as a taxiway.' }
    ],
    correctAnswer: 'B',
    explanation: 'The red sign D in Figure 65 is an ILS critical area boundary sign, found near the approach end of ILS runways to protect the ILS signal from interference.',
    hint: 'ILS critical area signs protect sensitive navigation equipment.',
    figureRef: 'figure65',
    difficulty: 'hard',
    tags: ['taxiway signs', 'ILS']
  },
  {
    id: 'ops011',
    category: 'airport-operations',
    question: '(Refer to Figure 52.) On what frequency can you expect to monitor air traffic in and around Lincoln Airport?',
    options: [
      { id: 'A', text: '118.5' },
      { id: 'B', text: '122.95' },
      { id: 'C', text: '124.0' }
    ],
    correctAnswer: 'A',
    explanation: 'According to Figure 52, Lincoln Airport tower frequency is 118.5 MHz. This is the frequency to monitor for traffic in the airport vicinity.',
    hint: 'Look for the tower frequency on the airport information.',
    figureRef: 'figure52',
    difficulty: 'easy',
    tags: ['communications', 'frequency', 'sectional chart']
  },
  {
    id: 'ops012',
    category: 'airport-operations',
    question: '(Refer to Figure 26, area 2.) While monitoring the Cooperstown CTAF you hear an aircraft announce that they are midfield left downwind to RWY 13. Where would the aircraft be relative to the runway?',
    options: [
      { id: 'A', text: 'The aircraft is East.' },
      { id: 'B', text: 'The aircraft is South.' },
      { id: 'C', text: 'The aircraft is West.' }
    ],
    correctAnswer: 'A',
    explanation: 'Runway 13 points southeast. Left downwind for runway 13 would put the aircraft parallel to the runway on its left (east) side, flying northwest.',
    hint: 'Visualize the runway heading and where left downwind would be positioned.',
    figureRef: 'figure26',
    difficulty: 'hard',
    tags: ['traffic pattern', 'position reporting']
  },
  {
    id: 'ops013',
    category: 'airport-operations',
    question: 'When turning onto a taxiway from another taxiway, the "taxiway directional sign" indicates',
    options: [
      { id: 'A', text: 'direction to the take-off runway.' },
      { id: 'B', text: 'designation and direction of taxiway leading out of an intersection.' },
      { id: 'C', text: 'designation and direction of exit taxiway from runway.' }
    ],
    correctAnswer: 'A',
    explanation: 'Taxiway directional signs (yellow with black letters and arrows) indicate the direction to runways and other taxiways at intersections.',
    hint: 'Directional signs show you where taxiways lead.',
    figureRef: null,
    difficulty: 'medium',
    tags: ['taxiway signs', 'navigation']
  },
  {
    id: 'ops014',
    category: 'airport-operations',
    question: 'What actions should the operator of an sUAS do if the manufacturer does not provide information about scheduled maintenance?',
    options: [
      { id: 'A', text: 'The operator should contact the FAA for a minimum equipment list.' },
      { id: 'B', text: 'The operator should establish a scheduled maintenance protocol.' },
      { id: 'C', text: 'The operator should contact the NTSB for component failure rates for their specific sUAS.' }
    ],
    correctAnswer: 'B',
    explanation: 'If the manufacturer doesn\'t provide maintenance schedules, the operator should establish their own scheduled maintenance protocol based on operational experience and industry best practices.',
    hint: 'Who is responsible when manufacturer guidance is lacking?',
    figureRef: null,
    difficulty: 'medium',
    tags: ['maintenance', 'responsibility']
  },
  {
    id: 'ops015',
    category: 'airport-operations',
    question: 'What is the best source for sUAS performance data and information?',
    options: [
      { id: 'A', text: 'Manufacturer publications.' },
      { id: 'B', text: 'Pilot reports.' },
      { id: 'C', text: 'Estimates based upon similar systems.' }
    ],
    correctAnswer: 'A',
    explanation: 'Manufacturer publications provide the most accurate and reliable performance data for your specific sUAS. They include tested specifications and operational limitations.',
    hint: 'Who has the most accurate data about a specific aircraft?',
    figureRef: null,
    difficulty: 'easy',
    tags: ['performance', 'manufacturer', 'documentation']
  },
  {
    id: 'ops016',
    category: 'airport-operations',
    question: 'As standard operating practice, all inbound traffic to an airport without a control tower should continuously monitor the appropriate facility from a distance of',
    options: [
      { id: 'A', text: '25 miles.' },
      { id: 'B', text: '20 miles.' },
      { id: 'C', text: '10 miles.' }
    ],
    correctAnswer: 'C',
    explanation: 'Standard practice is to monitor the CTAF/UNICOM frequency from 10 miles out when approaching an uncontrolled airport. This allows pilots to hear and be heard by other traffic.',
    hint: 'At what distance should you start listening for traffic at an uncontrolled airport?',
    figureRef: null,
    difficulty: 'easy',
    tags: ['communications', 'uncontrolled airport']
  },
  {
    id: 'ops017',
    category: 'airport-operations',
    question: 'Automatic Terminal Information Service (ATIS) is the continuous broadcast of recorded information concerning',
    options: [
      { id: 'A', text: 'pilots of radar-identified aircraft whose aircraft is in dangerous proximity to terrain or to an obstruction.' },
      { id: 'B', text: 'nonessential information to reduce frequency congestion.' },
      { id: 'C', text: 'noncontrol information in selected high-activity terminal areas.' }
    ],
    correctAnswer: 'C',
    explanation: 'ATIS provides continuous broadcast of noncontrol information (weather, runway in use, NOTAMs, etc.) at busy airports to reduce frequency congestion on ATC frequencies.',
    hint: 'ATIS broadcasts what type of information at busy airports?',
    figureRef: null,
    difficulty: 'easy',
    tags: ['ATIS', 'communications']
  },
  {
    id: 'ops018',
    category: 'airport-operations',
    question: '(Refer to Figure 22, area 2; and Figure 31.) At Coeur d\'Alene, which frequency should be used as a Common Traffic Advisory Frequency (CTAF) to monitor airport traffic?',
    options: [
      { id: 'A', text: '122.05 MHz.' },
      { id: 'B', text: '135.075 MHz.' },
      { id: 'C', text: '122.8 MHz.' }
    ],
    correctAnswer: 'C',
    explanation: 'According to the chart supplement information, the CTAF at Coeur d\'Alene is 122.8 MHz. This is the frequency to monitor and broadcast on for traffic advisories.',
    hint: 'Look for the CTAF designation in the airport information.',
    figureRef: 'figure22',
    difficulty: 'medium',
    tags: ['CTAF', 'frequency', 'communications']
  },
  {
    id: 'ops019',
    category: 'airport-operations',
    question: '(Refer to Figure 26, area 5.) What is the CTAF/UNICOM frequency at Barnes County Airport?',
    options: [
      { id: 'A', text: '122.0 MHz.' },
      { id: 'B', text: '122.8 MHz.' },
      { id: 'C', text: '123.6 MHz.' }
    ],
    correctAnswer: 'C',
    explanation: 'According to Figure 26, Barnes County Airport uses 123.6 MHz as the CTAF/UNICOM frequency.',
    hint: 'Check the airport data block on the sectional chart.',
    figureRef: 'figure26',
    difficulty: 'easy',
    tags: ['CTAF', 'frequency', 'sectional chart']
  },
  {
    id: 'ops020',
    category: 'airport-operations',
    question: 'An ATC radar facility issues the following advisory to a pilot flying on a heading of 090°:\n\n"TRAFFIC 3 O\'CLOCK, 2 MILES, WESTBOUND..."\n\nWhere should the pilot look for this traffic?',
    options: [
      { id: 'A', text: 'East.' },
      { id: 'B', text: 'South.' },
      { id: 'C', text: 'West.' }
    ],
    correctAnswer: 'B',
    explanation: 'Flying heading 090° (east), 3 o\'clock is directly to your right, which is south. The traffic is at your 3 o\'clock position, so look to the south.',
    hint: '3 o\'clock is always directly to your right relative to your heading.',
    figureRef: null,
    difficulty: 'medium',
    tags: ['traffic advisory', 'clock position']
  },
  {
    id: 'ops021',
    category: 'airport-operations',
    question: 'An ATC radar facility issues the following advisory to a pilot flying on a heading of 360°:\n\n"TRAFFIC 10 O\'CLOCK, 2 MILES, SOUTHBOUND..."\n\nWhere should the pilot look for this traffic?',
    options: [
      { id: 'A', text: 'Northwest.' },
      { id: 'B', text: 'Northeast.' },
      { id: 'C', text: 'Southwest.' }
    ],
    correctAnswer: 'A',
    explanation: 'Flying heading 360° (north), 10 o\'clock is to your left front, which is northwest. Look to the northwest for the traffic.',
    hint: '10 o\'clock is left of your nose when flying north.',
    figureRef: null,
    difficulty: 'medium',
    tags: ['traffic advisory', 'clock position']
  },
  {
    id: 'ops022',
    category: 'airport-operations',
    question: 'An ATC radar facility issues the following advisory to a pilot flying north in a calm wind:\n\n"TRAFFIC 9 O\'CLOCK, 2 MILES, SOUTHBOUND..."\n\nWhere should the pilot look for this traffic?',
    options: [
      { id: 'A', text: 'South.' },
      { id: 'B', text: 'North.' },
      { id: 'C', text: 'West.' }
    ],
    correctAnswer: 'C',
    explanation: 'Flying north, 9 o\'clock is directly to your left, which is west. Look to the west for the traffic.',
    hint: '9 o\'clock is always directly to your left.',
    figureRef: null,
    difficulty: 'easy',
    tags: ['traffic advisory', 'clock position']
  },
  {
    id: 'ops023',
    category: 'airport-operations',
    question: 'The correct method of stating 4,500 feet MSL to ATC is',
    options: [
      { id: 'A', text: '"FOUR THOUSAND FIVE HUNDRED."' },
      { id: 'B', text: '"FOUR POINT FIVE."' },
      { id: 'C', text: '"FORTY-FIVE HUNDRED FEET MSL."' }
    ],
    correctAnswer: 'A',
    explanation: 'The correct phraseology is "FOUR THOUSAND FIVE HUNDRED." Altitudes are stated in thousands and hundreds, not abbreviated forms.',
    hint: 'ATC uses standard phraseology - altitudes are stated in full.',
    figureRef: null,
    difficulty: 'easy',
    tags: ['communications', 'phraseology']
  },
  {
    id: 'ops024',
    category: 'airport-operations',
    question: 'Under what condition should the operator of a small UA establish scheduled maintenance protocol?',
    options: [
      { id: 'A', text: 'When the manufacturer does not provide a maintenance schedule.' },
      { id: 'B', text: 'UAS does not need to require maintenance.' },
      { id: 'C', text: 'When the FAA requires you to, following an accident.' }
    ],
    correctAnswer: 'A',
    explanation: 'When the manufacturer doesn\'t provide a maintenance schedule, the operator should establish their own maintenance protocol to ensure safe operation.',
    hint: 'When is the operator responsible for creating maintenance procedures?',
    figureRef: null,
    difficulty: 'easy',
    tags: ['maintenance', 'protocol']
  },
  {
    id: 'ops025',
    category: 'airport-operations',
    question: '(Refer to Figure 49.) Select the proper traffic pattern and runway for landing.',
    options: [
      { id: 'A', text: 'Left-hand traffic and Runway 18.' },
      { id: 'B', text: 'Right-hand traffic and Runway 18.' },
      { id: 'C', text: 'Left-hand traffic and Runway 22.' }
    ],
    correctAnswer: 'B',
    explanation: 'Based on Figure 49, the proper traffic pattern for the conditions shown is right-hand traffic for Runway 18.',
    hint: 'Check the segmented circle for traffic pattern direction.',
    figureRef: 'figure49',
    difficulty: 'medium',
    tags: ['traffic pattern', 'runway selection']
  },
  {
    id: 'ops026',
    category: 'airport-operations',
    question: 'Exhaust plumes are most dangerous when',
    options: [
      { id: 'A', text: 'the surrounding air is calm and cold.' },
      { id: 'B', text: 'they are visible.' },
      { id: 'C', text: 'they come from larger towers.' }
    ],
    correctAnswer: 'A',
    explanation: 'Exhaust plumes from cooling towers and industrial stacks are most dangerous when the air is calm (no wind to disperse them) and cold (greater temperature differential causes stronger updrafts).',
    hint: 'When would the plume be most concentrated and have the strongest vertical component?',
    figureRef: null,
    difficulty: 'medium',
    tags: ['hazards', 'exhaust plumes']
  },
  {
    id: 'ops027',
    category: 'airport-operations',
    question: 'The most comprehensive information on a given airport is provided by',
    options: [
      { id: 'A', text: 'the Chart Supplements U.S. (formerly Airport Facility Directory).' },
      { id: 'B', text: 'Notices to Airmen (NOTAMS).' },
      { id: 'C', text: 'Terminal Area Chart (TAC).' }
    ],
    correctAnswer: 'A',
    explanation: 'The Chart Supplements U.S. (formerly A/FD) provides the most comprehensive information about airports including runways, services, communications, and operational notes.',
    hint: 'Which publication is specifically designed to provide detailed airport information?',
    figureRef: null,
    difficulty: 'easy',
    tags: ['publications', 'Chart Supplement']
  },
  {
    id: 'ops028',
    category: 'airport-operations',
    question: '(Refer to Figure 26, area 2.) What is the recommended communication procedure when inbound to land at Cooperstown Airport?',
    options: [
      { id: 'A', text: 'Broadcast intentions when 10 miles out on the CTAF/MULTICOM frequency, 122.9 MHz.' },
      { id: 'B', text: 'Contact UNICOM when 10 miles out on 122.8 MHz.' },
      { id: 'C', text: 'Circle the airport in a left turn prior to entering traffic.' }
    ],
    correctAnswer: 'B',
    explanation: 'At Cooperstown, you should contact UNICOM on 122.8 MHz when 10 miles out to broadcast your intentions and listen for traffic.',
    hint: 'Check the chart for the appropriate frequency at Cooperstown.',
    figureRef: 'figure26',
    difficulty: 'medium',
    tags: ['communications', 'UNICOM', 'procedures']
  },
  {
    id: 'ops029',
    category: 'airport-operations',
    question: 'An ATC radar facility issues the following advisory to a pilot during a local flight:\n\n"TRAFFIC 2 O\'CLOCK, 5 MILES, NORTHBOUND..."\n\nWhere should the pilot look for this traffic?',
    options: [
      { id: 'A', text: 'Between directly ahead and 90° to the left.' },
      { id: 'B', text: 'Between directly behind and 90° to the right.' },
      { id: 'C', text: 'Between directly ahead and 90° to the right.' }
    ],
    correctAnswer: 'C',
    explanation: '2 o\'clock is between 12 o\'clock (directly ahead) and 3 o\'clock (90° to the right). Look in the area between directly ahead and 90° to the right.',
    hint: '2 o\'clock is slightly to the right of your nose.',
    figureRef: null,
    difficulty: 'easy',
    tags: ['traffic advisory', 'clock position']
  },
  {
    id: 'ops030',
    category: 'airport-operations',
    question: '(Refer to Figure 50.) The traffic patterns indicated in the segmented circle have been arranged to avoid flights over an area to the',
    options: [
      { id: 'A', text: 'south of the airport.' },
      { id: 'B', text: 'north of the airport.' },
      { id: 'C', text: 'southeast of the airport.' }
    ],
    correctAnswer: 'C',
    explanation: 'The traffic pattern extensions in Figure 50 indicate that the patterns are designed to avoid overflying an area to the southeast of the airport.',
    hint: 'Look at which side of the runways has non-standard patterns to determine what area is being avoided.',
    figureRef: 'figure50',
    difficulty: 'medium',
    tags: ['traffic pattern', 'segmented circle']
  },
  {
    id: 'ops031',
    category: 'airport-operations',
    question: '(Refer to Figure 50.) Which runway and traffic pattern should be used as indicated by the wind cone in the segmented circle?',
    options: [
      { id: 'A', text: 'Right-hand traffic on Runway 9.' },
      { id: 'B', text: 'Right-hand traffic on Runway 18.' },
      { id: 'C', text: 'Left-hand traffic on Runway 36.' }
    ],
    correctAnswer: 'C',
    explanation: 'Based on the wind cone in Figure 50, Runway 36 should be used with left-hand traffic (standard pattern unless otherwise indicated).',
    hint: 'The wind cone shows wind direction - land into the wind.',
    figureRef: 'figure50',
    difficulty: 'medium',
    tags: ['traffic pattern', 'wind cone', 'runway selection']
  },
  {
    id: 'ops032',
    category: 'airport-operations',
    question: 'Airspace at an airport with a part-time control tower is classified as Class D airspace only',
    options: [
      { id: 'A', text: 'when the weather minimums are below basic VFR.' },
      { id: 'B', text: 'when the associated control tower is in operation.' },
      { id: 'C', text: 'when the associated Flight Service Station is in operation.' }
    ],
    correctAnswer: 'B',
    explanation: 'Class D airspace is only in effect when the control tower is in operation. When the tower closes, the airspace typically reverts to Class E or G.',
    hint: 'What determines when Class D airspace is active?',
    figureRef: null,
    difficulty: 'easy',
    tags: ['Class D', 'airspace', 'control tower']
  },
  {
    id: 'ops033',
    category: 'airport-operations',
    question: '(Refer to Figure 22, area 2; and Figure 31.) At Coeur d\'Alene, which frequency should be used as a Common Traffic Advisory Frequency (CTAF) to self-announce position and intentions?',
    options: [
      { id: 'A', text: '122.05 MHz.' },
      { id: 'B', text: '122.1/108.8 MHz.' },
      { id: 'C', text: '122.8 MHz.' }
    ],
    correctAnswer: 'C',
    explanation: 'The CTAF at Coeur d\'Alene is 122.8 MHz, used for self-announcing position and intentions at this uncontrolled airport.',
    hint: 'The CTAF is the frequency for traffic advisories.',
    figureRef: 'figure22',
    difficulty: 'easy',
    tags: ['CTAF', 'frequency', 'communications']
  },
  {
    id: 'ops034',
    category: 'airport-operations',
    question: '(Refer to Figure 26, area 4.) The CTAF/UNICOM frequency at Jamestown Airport is',
    options: [
      { id: 'A', text: '122.0 MHz.' },
      { id: 'B', text: '123.0 MHz.' },
      { id: 'C', text: '123.6 MHz.' }
    ],
    correctAnswer: 'C',
    explanation: 'According to Figure 26, Jamestown Airport uses 123.6 MHz as the CTAF/UNICOM frequency.',
    hint: 'Look at the airport information on the sectional chart.',
    figureRef: 'figure26',
    difficulty: 'easy',
    tags: ['CTAF', 'frequency', 'sectional chart']
  },
  {
    id: 'ops035',
    category: 'airport-operations',
    question: 'When setting up the location of the control station and placement of crewmembers for an afternoon flight, which of the following would be most appropriate for ensuring that vision is not impaired by the environment?',
    options: [
      { id: 'A', text: 'The operation should be set up so that the Remote PIC and crewmembers can face west.' },
      { id: 'B', text: 'The operation should be set up so that the Remote PIC and crewmembers are facing any reflective objects in the area.' },
      { id: 'C', text: 'The operation should be set up so that the Remote PIC and crewmembers can face east.' }
    ],
    correctAnswer: 'C',
    explanation: 'In the afternoon, the sun is in the west. Setting up to face east keeps the sun behind the crew, avoiding glare and improving visibility of the aircraft.',
    hint: 'Where is the sun in the afternoon, and which direction avoids looking into it?',
    figureRef: null,
    difficulty: 'easy',
    tags: ['setup', 'visibility', 'sun glare']
  },
  {
    id: 'ops036',
    category: 'airport-operations',
    question: 'According to 14 CFR part 107, the responsibility to inspect the small UAS to ensure it is in a safe operating condition rests with the',
    options: [
      { id: 'A', text: 'remote pilot-in-command.' },
      { id: 'B', text: 'visual observer.' },
      { id: 'C', text: 'owner of the small UAS.' }
    ],
    correctAnswer: 'A',
    explanation: 'Per 14 CFR 107.49, the remote pilot-in-command is responsible for ensuring the small UAS is in a condition for safe operation before each flight.',
    hint: 'Who is responsible for pre-flight inspection?',
    figureRef: null,
    difficulty: 'easy',
    tags: ['responsibility', 'preflight', 'remote PIC']
  },
  {
    id: 'ops037',
    category: 'airport-operations',
    question: 'This sign confirms your position on',
    options: [
      { id: 'A', text: 'runway 22.' },
      { id: 'B', text: 'routing to runway 22.' },
      { id: 'C', text: 'taxiway 22.' }
    ],
    correctAnswer: 'A',
    explanation: 'A runway location sign (black background with yellow numbers and border) confirms your position on the runway. "22" indicates you are on Runway 22.',
    hint: 'Location signs with runway numbers confirm your position on that runway.',
    figureRef: 'signQ37',
    difficulty: 'easy',
    tags: ['runway signs', 'location']
  },
  {
    id: 'ops038',
    category: 'airport-operations',
    question: 'To enter a Security Identification Display Area (SIDA) you will need to',
    options: [
      { id: 'A', text: 'obtain written permission from the TSA.' },
      { id: 'B', text: 'be escorted by the head of airport security.' },
      { id: 'C', text: 'have and display a security badge.' }
    ],
    correctAnswer: 'C',
    explanation: 'To enter a SIDA, you must have and display an authorized security badge. This is a restricted area at airports with security requirements.',
    hint: 'What credential is required for access to secure airport areas?',
    figureRef: null,
    difficulty: 'easy',
    tags: ['SIDA', 'security', 'airport operations']
  },
  {
    id: 'ops039',
    category: 'airport-operations',
    question: 'Under what operational condition may you be approved to fly without remote identification capability?',
    options: [
      { id: 'A', text: 'If the operation is being conducted in an FAA-recognized identification area outside the line of sight.' },
      { id: 'B', text: 'If the operation is being conducted for aeronautical research.' },
      { id: 'C', text: 'If the operation is being conducted at altitudes of 400 feet AGL and below.' }
    ],
    correctAnswer: 'B',
    explanation: 'Operations conducted for aeronautical research may be approved to fly without standard remote identification capability under certain circumstances.',
    hint: 'What type of special operations might have remote ID exemptions?',
    figureRef: null,
    difficulty: 'medium',
    tags: ['remote ID', 'exemptions']
  },
  {
    id: 'ops040',
    category: 'airport-operations',
    question: '(Refer to Figure 52.) When approaching Lincoln Municipal from the west at noon for the purpose of landing, initial communications should be with',
    options: [
      { id: 'A', text: 'Lincoln Approach Control on 124.0 MHz.' },
      { id: 'B', text: 'Minneapolis Center on 128.75 MHz.' },
      { id: 'C', text: 'Lincoln Tower on 118.5 MHz.' }
    ],
    correctAnswer: 'C',
    explanation: 'When approaching a towered airport like Lincoln Municipal, initial contact should be with the tower. The tower frequency is 118.5 MHz.',
    hint: 'Who do you contact first when approaching a towered airport?',
    figureRef: 'figure52',
    difficulty: 'medium',
    tags: ['communications', 'tower', 'approach']
  },
  {
    id: 'ops041',
    category: 'airport-operations',
    question: 'Under what operational requirement would the unmanned aircraft be restricted to visual line of sight operations?',
    options: [
      { id: 'A', text: 'If operating with ADS-B Capabilities.' },
      { id: 'B', text: 'If operating with standard remote identification.' },
      { id: 'C', text: 'If operating with a remote identification broadcast module.' }
    ],
    correctAnswer: 'C',
    explanation: 'When using a remote identification broadcast module (as opposed to standard remote ID built into the aircraft), operations are restricted to visual line of sight (VLOS).',
    hint: 'What Remote ID method has VLOS restrictions?',
    figureRef: null,
    difficulty: 'medium',
    tags: ['remote ID', 'VLOS', 'broadcast module']
  },
  {
    id: 'ops042',
    category: 'airport-operations',
    question: 'When flying HAWK N666CB, the proper phraseology for initial contact with McAlester AFSS is',
    options: [
      { id: 'A', text: '"MC ALESTER RADIO, HAWK SIX SIX SIX CHARLIE BRAVO, RECEIVING ARDMORE VORTAC, OVER."' },
      { id: 'B', text: '"MC ALESTER STATION, HAWK SIX SIX SIX CEE BEE, RECEIVING ARDMORE VORTAC, OVER."' },
      { id: 'C', text: '"MC ALESTER FLIGHT SERVICE STATION, HAWK NOVEMBER SIX CHARLIE BRAVO, RECEIVING ARDMORE VORTAC, OVER."' }
    ],
    correctAnswer: 'A',
    explanation: 'FSS is addressed as "RADIO" (not "Station" or "Flight Service Station"). The call sign is stated with full numbers and phonetic alphabet for the suffix letters.',
    hint: 'How do you address a Flight Service Station on the radio?',
    figureRef: null,
    difficulty: 'hard',
    tags: ['communications', 'phraseology', 'FSS']
  },
  {
    id: 'ops043',
    category: 'airport-operations',
    question: '(Refer to Figure 21, area 2.) The CTAF/MULTICOM frequency for Garrison Airport is',
    options: [
      { id: 'A', text: '122.8 MHz.' },
      { id: 'B', text: '122.9 MHz.' },
      { id: 'C', text: '123.0 MHz.' }
    ],
    correctAnswer: 'C',
    explanation: 'According to Figure 21, Garrison Airport uses 123.0 MHz as the CTAF/MULTICOM frequency.',
    hint: 'Check the airport information on the sectional chart.',
    figureRef: 'figure21',
    difficulty: 'easy',
    tags: ['CTAF', 'frequency', 'sectional chart']
  },
  {
    id: 'ops044',
    category: 'airport-operations',
    question: '(Refer to Figure 64.) Which marking indicates a vehicle lane?',
    options: [
      { id: 'A', text: 'Letter A.' },
      { id: 'B', text: 'Letter C.' },
      { id: 'C', text: 'Letter E.' }
    ],
    correctAnswer: 'A',
    explanation: 'In Figure 64, the marking at letter A indicates a vehicle lane, which is a designated path for ground vehicles on the airport.',
    hint: 'Look for the marking that designates vehicle, not aircraft, movement areas.',
    figureRef: 'figure64',
    difficulty: 'medium',
    tags: ['markings', 'vehicle lane']
  },
  {
    id: 'ops045',
    category: 'airport-operations',
    question: 'Scheduled maintenance should be performed in accordance with the:',
    options: [
      { id: 'A', text: 'Stipulations in 14 CFR part 43.' },
      { id: 'B', text: "Manufacturer's suggested procedures." },
      { id: 'C', text: 'Contractor requirements.' }
    ],
    correctAnswer: 'B',
    explanation: 'For small UAS, scheduled maintenance should be performed according to the manufacturer\'s suggested procedures. Part 43 applies to certificated aircraft, not sUAS.',
    hint: 'What source provides the best maintenance guidance for your specific sUAS?',
    figureRef: null,
    difficulty: 'easy',
    tags: ['maintenance', 'manufacturer']
  },
  {
    id: 'ops046',
    category: 'airport-operations',
    question: 'This sign is a visual clue that',
    options: [
      { id: 'A', text: 'confirms the aircraft\'s location to be on taxiway "B."' },
      { id: 'B', text: 'warns the pilot of approaching taxiway "B."' },
      { id: 'C', text: 'indicates "B" holding area is ahead.' }
    ],
    correctAnswer: 'A',
    explanation: 'A taxiway location sign (black background with yellow letter) confirms your current position on that taxiway. If it shows "B," you are on Taxiway B.',
    hint: 'Location signs confirm where you are, not where you\'re going.',
    figureRef: 'signQ46',
    difficulty: 'easy',
    tags: ['taxiway signs', 'location']
  },
  {
    id: 'ops047',
    category: 'airport-operations',
    question: 'What does the outbound destination sign identify?',
    options: [
      { id: 'A', text: 'Identifies entrance to the runway from a taxiway.' },
      { id: 'B', text: 'Identifies runway on which an aircraft is located.' },
      { id: 'C', text: 'Identifies direction to take-off runways.' }
    ],
    correctAnswer: 'C',
    explanation: 'Outbound destination signs (yellow with black text and arrows) identify the direction to take-off runways. They help pilots navigate to their departure runway.',
    hint: 'Destination signs point to where you want to go.',
    figureRef: null,
    difficulty: 'easy',
    tags: ['taxiway signs', 'destination']
  },
  {
    id: 'ops048',
    category: 'airport-operations',
    question: 'The correct method of stating 10,500 feet MSL to ATC is',
    options: [
      { id: 'A', text: '"TEN THOUSAND, FIVE HUNDRED FEET."' },
      { id: 'B', text: '"TEN POINT FIVE."' },
      { id: 'C', text: '"ONE ZERO THOUSAND, FIVE HUNDRED."' }
    ],
    correctAnswer: 'A',
    explanation: 'The correct phraseology is "TEN THOUSAND, FIVE HUNDRED FEET." Altitudes are stated using standard number words.',
    hint: 'Altitudes are stated in full words, not abbreviated or digit-by-digit.',
    figureRef: null,
    difficulty: 'easy',
    tags: ['communications', 'phraseology']
  },
  {
    id: 'ops049',
    category: 'airport-operations',
    question: 'Which initial action should a pilot take prior to entering Class C airspace?',
    options: [
      { id: 'A', text: 'Contact approach control on the appropriate frequency.' },
      { id: 'B', text: 'Contact the tower and request permission to enter.' },
      { id: 'C', text: 'Contact the FSS for traffic advisories.' }
    ],
    correctAnswer: 'A',
    explanation: 'Before entering Class C airspace, contact approach control on the appropriate frequency and establish two-way radio communication.',
    hint: 'Who controls traffic entering Class C airspace?',
    figureRef: null,
    difficulty: 'easy',
    tags: ['Class C', 'communications', 'approach control']
  },
  {
    id: 'ops050',
    category: 'airport-operations',
    question: 'When an air traffic controller issues radar traffic information in relation to the 12-hour clock, the reference the controller uses is the aircraft\'s',
    options: [
      { id: 'A', text: 'true course.' },
      { id: 'B', text: 'ground track.' },
      { id: 'C', text: 'magnetic heading.' }
    ],
    correctAnswer: 'B',
    explanation: 'When ATC provides traffic advisories using clock positions, they reference the aircraft\'s ground track (actual path over the ground), not heading or course.',
    hint: 'ATC radar shows where you\'re actually going, not where you\'re pointed.',
    figureRef: null,
    difficulty: 'medium',
    tags: ['traffic advisory', 'radar', 'ground track']
  },
  {
    id: 'ops051',
    category: 'airport-operations',
    question: '(Refer to Figure 25, area 3.) If Dallas Executive (RBD) Tower is not in operation, which frequency should be used as a Common Traffic Advisory Frequency (CTAF) to monitor airport traffic?',
    options: [
      { id: 'A', text: '127.25 MHz.' },
      { id: 'B', text: '122.95 MHz.' },
      { id: 'C', text: '126.35 MHz.' }
    ],
    correctAnswer: 'C',
    explanation: 'When the tower is closed at Dallas Executive, the CTAF reverts to 126.35 MHz for self-announce procedures.',
    hint: 'What frequency is used when the tower is not operating?',
    figureRef: 'figure25',
    difficulty: 'medium',
    tags: ['CTAF', 'tower closed', 'frequency']
  },
  {
    id: 'ops052',
    category: 'airport-operations',
    question: 'When a control tower, located on an airport within Class D airspace, ceases operation for the day, what happens to the airspace designation?',
    options: [
      { id: 'A', text: 'The airspace designation normally will not change.' },
      { id: 'B', text: 'The airspace remains Class D airspace as long as a weather observer or automated weather system is available.' },
      { id: 'C', text: 'The airspace reverts to Class E or a combination of Class E and G airspace during the hours the tower is not in operation.' }
    ],
    correctAnswer: 'C',
    explanation: 'When a part-time tower closes, the Class D airspace typically reverts to Class E or a combination of Class E and G airspace. The specific reversion is published in the Chart Supplement.',
    hint: 'What happens to controlled airspace when the controller goes home?',
    figureRef: null,
    difficulty: 'medium',
    tags: ['Class D', 'airspace', 'tower closed']
  },
  {
    id: 'ops053',
    category: 'airport-operations',
    question: 'If you strike a bird with your unmanned aircraft you should fill out a report with the',
    options: [
      { id: 'A', text: 'FAA.' },
      { id: 'B', text: 'NTSB.' },
      { id: 'C', text: 'local farming community.' }
    ],
    correctAnswer: 'A',
    explanation: 'Bird strikes should be reported to the FAA. The FAA maintains a wildlife strike database to help identify and mitigate aviation wildlife hazards.',
    hint: 'Who tracks bird strike data for aviation safety?',
    figureRef: null,
    difficulty: 'easy',
    tags: ['bird strike', 'reporting', 'FAA']
  },
  {
    id: 'ops054',
    category: 'airport-operations',
    question: '(Refer to Figure 50.) The segmented circle indicates that the airport traffic is',
    options: [
      { id: 'A', text: 'left-hand for Runway 36 and right-hand for Runway 18.' },
      { id: 'B', text: 'left-hand for Runway 18 and right-hand for Runway 36.' },
      { id: 'C', text: 'right-hand for Runway 9 and left-hand for Runway 27.' }
    ],
    correctAnswer: 'B',
    explanation: 'According to Figure 50, the segmented circle shows left-hand traffic for Runway 18 and right-hand traffic for Runway 36.',
    hint: 'Look at the traffic pattern indicators extending from the segmented circle.',
    figureRef: 'figure50',
    difficulty: 'medium',
    tags: ['traffic pattern', 'segmented circle']
  },
  {
    id: 'ops055',
    category: 'airport-operations',
    question: 'A visual observer notices a manned aircraft approaching the area in which sUAS operations are taking place, flying just north of the area from west to east. What call could the remote PIC/visual observer make on CTAF to alert the manned pilot?',
    options: [
      { id: 'A', text: 'Zephyrhills traffic, unmanned aircraft Xray Yankee Zulu, operating five NM south of the airport at or below 400 AGL, located at the three o\'clock position of the Cessna just north of our position, Zephyrhills traffic.' },
      { id: 'B', text: 'Zephyrhills traffic, unmanned aircraft at three o\'clock of manned aircraft in the area, Zephyrhills traffic.' },
      { id: 'C', text: 'Zephyrhills traffic, unmanned aircraft Xray Yankee Zulu to Cessna in the area, look for us at your three o\'clock position, we are about a mile south.' }
    ],
    correctAnswer: 'A',
    explanation: 'The most appropriate call includes: location, altitude, and position relative to the manned aircraft. The call should be to "traffic" not directly to another aircraft.',
    hint: 'What information helps the manned pilot locate the potential conflict?',
    figureRef: null,
    difficulty: 'hard',
    tags: ['communications', 'CTAF', 'traffic alert']
  },
  {
    id: 'ops056',
    category: 'airport-operations',
    question: '(Refer to Figure 24, area 5.) You are operating an sUAS in the vicinity of Sulphur Springs Airport (SUR) where there is active air traffic. Who has priority and right-of-way within the traffic pattern area?',
    options: [
      { id: 'A', text: 'Priority and right-of-way go to the aircraft closest to the landing runway.' },
      { id: 'B', text: 'The sUAS.' },
      { id: 'C', text: 'The existing manned aircraft.' }
    ],
    correctAnswer: 'C',
    explanation: 'Per 14 CFR 107.37, the remote pilot must yield right-of-way to all manned aircraft. Manned aircraft always have priority over sUAS.',
    hint: 'Who must yield right-of-way - manned or unmanned aircraft?',
    figureRef: 'figure24',
    difficulty: 'easy',
    tags: ['right-of-way', 'priority', 'traffic pattern']
  },
  {
    id: 'ops057',
    category: 'airport-operations',
    question: 'When should the battery for a small unmanned aircraft be replaced?',
    options: [
      { id: 'A', text: 'Once recharged more than 10 times in the preceding 30 days.' },
      { id: 'B', text: 'Per the guidelines of the sUAS manufacturer or the battery manufacturer, whichever is more restrictive.' },
      { id: 'C', text: 'Per the guidelines of the sUAS manufacturer or the battery manufacturer, whichever is least restrictive.' }
    ],
    correctAnswer: 'B',
    explanation: 'When there are conflicting guidelines, always follow the MORE restrictive guidance to ensure safety. This applies to battery replacement schedules.',
    hint: 'When guidelines conflict, should you follow the stricter or more lenient one?',
    figureRef: null,
    difficulty: 'easy',
    tags: ['batteries', 'maintenance', 'manufacturer']
  },
  {
    id: 'ops058',
    category: 'airport-operations',
    question: 'Which of the following sources of information should you consult first when determining what maintenance should be performed on an sUAS or its components?',
    options: [
      { id: 'A', text: 'Local pilot best practices.' },
      { id: 'B', text: '14 CFR Part 107.' },
      { id: 'C', text: 'Manufacturer guidance.' }
    ],
    correctAnswer: 'C',
    explanation: 'The manufacturer\'s guidance should be consulted first for maintenance requirements. They have the most specific and accurate information for your aircraft.',
    hint: 'Who knows your specific aircraft best?',
    figureRef: null,
    difficulty: 'easy',
    tags: ['maintenance', 'manufacturer']
  },
  {
    id: 'ops059',
    category: 'airport-operations',
    question: '(Refer to Figure 49.) The arrows that appear on the end of the north/south runway indicate that the area',
    options: [
      { id: 'A', text: 'may be used only for taxiing.' },
      { id: 'B', text: 'is usable for taxiing, takeoff, and landing.' },
      { id: 'C', text: 'cannot be used for landing, but may be used for taxiing and takeoff.' }
    ],
    correctAnswer: 'C',
    explanation: 'Arrows at the end of a runway indicate a displaced threshold. The area with arrows cannot be used for landing but may be used for taxiing and takeoff.',
    hint: 'Arrows point toward the usable landing area, but what about the area before them?',
    figureRef: 'figure49',
    difficulty: 'medium',
    tags: ['runway markings', 'displaced threshold']
  },
  {
    id: 'ops060',
    category: 'airport-operations',
    question: 'When setting up the location of the control station and placement of crewmembers for a flight over snowy terrain, which of the following would be most appropriate for ensuring that vision is not impaired by the environment?',
    options: [
      { id: 'A', text: 'The operation should be set up so that the crewmembers will experience the minimum glare from the snow.' },
      { id: 'B', text: 'The operation should be set up so that the crewmembers are the most comfortable.' },
      { id: 'C', text: 'The operation should be set up so that the crewmembers face the direction in which the terrain most closely matches the color of the unmanned aircraft.' }
    ],
    correctAnswer: 'A',
    explanation: 'Snowy terrain creates significant glare that can impair vision. Position the crew to minimize glare from the snow, which may include using sunglasses and positioning away from direct sun reflection.',
    hint: 'What is the primary vision hazard when operating over snow?',
    figureRef: null,
    difficulty: 'easy',
    tags: ['setup', 'visibility', 'glare', 'snow']
  }
];

export default airportOperationsQuestions;
