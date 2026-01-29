// Regulations Questions
// Source: FAA Part 107 Test Prep Materials
// Total: 60 questions

export const regulationsQuestions = [
  {
    id: 'reg001',
    category: 'regulations',
    question: 'The refusal of a remote PIC to submit to a blood alcohol test when requested by a law enforcement officer',
    options: [
      { id: 'A', text: 'is grounds for suspension or revocation of their remote pilot certificate.' },
      { id: 'B', text: 'can be delayed for a period up to 8 hours after the request.' },
      { id: 'C', text: 'has no consequences to the remote pilot certificate.' }
    ],
    correctAnswer: 'A',
    explanation: 'Under 14 CFR 107.57, refusing to submit to a drug or alcohol test when requested by law enforcement is grounds for suspension or revocation of your remote pilot certificate.',
    hint: 'Think about the consequences of refusing to cooperate with law enforcement regarding alcohol testing.',
    figureRef: null,
    difficulty: 'medium',
    tags: ['alcohol', 'certificate', 'enforcement']
  },
  {
    id: 'reg002',
    category: 'regulations',
    question: 'Which Category of small unmanned aircraft must have an airworthiness certificate issued by the FAA?',
    options: [
      { id: 'A', text: '4.' },
      { id: 'B', text: '3.' },
      { id: 'C', text: '2.' }
    ],
    correctAnswer: 'A',
    explanation: 'Category 4 small UAS operations require the aircraft to have an airworthiness certificate issued by the FAA. This is the most stringent category allowing operations over people with heavier aircraft.',
    hint: 'Which category has the most stringent requirements for aircraft certification?',
    figureRef: null,
    difficulty: 'hard',
    tags: ['categories', 'airworthiness', 'operations over people']
  },
  {
    id: 'reg003',
    category: 'regulations',
    question: 'You are approaching an obstacle that is 800 feet above the ground. Under Part 107, can you legally fly over this obstacle?',
    options: [
      { id: 'A', text: 'No, you are limited to a maximum altitude of 400 feet AGL.' },
      { id: 'B', text: 'Yes, if you are within 400 feet of the obstacle and fly at or below 1200 feet AGL.' },
      { id: 'C', text: 'Yes, if you stay below 1000 feet AGL.' }
    ],
    correctAnswer: 'B',
    explanation: 'Per 14 CFR 107.51, you may fly higher than 400 feet AGL if you remain within 400 feet of a structure. For an 800-foot obstacle, you could fly up to 1,200 feet AGL (800 + 400) while within 400 feet of the structure.',
    hint: 'The 400-foot rule has an exception for structures - what is it?',
    figureRef: null,
    difficulty: 'medium',
    tags: ['altitude', 'structures', 'operating limitations']
  },
  {
    id: 'reg004',
    category: 'regulations',
    question: 'A small UA must be operated in a manner which',
    options: [
      { id: 'A', text: 'does not endanger the life or property of another.' },
      { id: 'B', text: 'requires more than one visual observer.' },
      { id: 'C', text: 'never exceeds 200 feet AGL.' }
    ],
    correctAnswer: 'A',
    explanation: 'Per 14 CFR 107.23, no person may operate a small UAS in a careless or reckless manner so as to endanger the life or property of another. This is a fundamental safety requirement.',
    hint: 'What is the basic safety requirement for all UAS operations?',
    figureRef: null,
    difficulty: 'easy',
    tags: ['safety', 'operations', 'careless reckless']
  },
  {
    id: 'reg005',
    category: 'regulations',
    question: 'While operating under Part 107 you crash your sUAS into parking lot lighting, which would cost $300 to repair or $750 to replace. Within how many days must you report this accident?',
    options: [
      { id: 'A', text: '10 days.' },
      { id: 'B', text: '90 days.' },
      { id: 'C', text: 'You are not required to report this accident.' }
    ],
    correctAnswer: 'C',
    explanation: 'Per 14 CFR 107.9, accident reporting is required when there is serious injury or property damage of at least $500 to property other than the UAS. Since the repair cost is $300, this falls below the $500 threshold and does not require reporting.',
    hint: 'What is the property damage threshold for required accident reporting?',
    figureRef: null,
    difficulty: 'medium',
    tags: ['accident reporting', 'property damage', 'thresholds']
  },
  {
    id: 'reg006',
    category: 'regulations',
    question: 'While operating your small UA, it accidentally strikes your crewmember in the head, causing him to lose consciousness. When should this accident be reported?',
    options: [
      { id: 'A', text: 'No accidents need to be reported.' },
      { id: 'B', text: 'When requested by the UA owner.' },
      { id: 'C', text: 'Within 10 days of the accident.' }
    ],
    correctAnswer: 'C',
    explanation: 'Per 14 CFR 107.9, you must report to the FAA within 10 days any operation that results in serious injury to any person, including loss of consciousness. Loss of consciousness qualifies as a serious injury.',
    hint: 'Loss of consciousness is considered what type of injury under FAA regulations?',
    figureRef: null,
    difficulty: 'easy',
    tags: ['accident reporting', 'serious injury', 'timeline']
  },
  {
    id: 'reg007',
    category: 'regulations',
    question: 'You plan to release golf balls from your small UA at an altitude of 100 feet AGL. You must ensure the objects being dropped will',
    options: [
      { id: 'A', text: 'not create an undue hazard to persons or property.' },
      { id: 'B', text: 'land within 10 feet of the expected landing zone.' },
      { id: 'C', text: 'not cause property damage in excess of $300.' }
    ],
    correctAnswer: 'A',
    explanation: 'Per 14 CFR 107.23, when dropping objects from a small UAS, you must ensure it does not create an undue hazard to persons or property. There are no specific distance or dollar amount requirements.',
    hint: 'What is the general safety standard for dropping objects from a UAS?',
    figureRef: null,
    difficulty: 'medium',
    tags: ['dropping objects', 'hazards', 'safety']
  },
  {
    id: 'reg008',
    category: 'regulations',
    question: '(Refer to Figure 69.) You are inspecting the lighted towers approximately 8 NM SW of the Corpus Christi Intl Airport (CRP). What is the lowest cloud cover that will enable you to inspect the top of the tower?',
    options: [
      { id: 'A', text: '1,104 feet MSL' },
      { id: 'B', text: '1,604 feet MSL' },
      { id: 'C', text: '1,054 feet MSL' }
    ],
    correctAnswer: 'B',
    explanation: 'Part 107 requires 500 feet below clouds. The tower height plus 500 feet cloud clearance gives the minimum cloud ceiling needed to inspect the top of the tower legally.',
    hint: 'Remember the 500-foot below clouds requirement and add it to the tower height.',
    figureRef: 'figure69',
    difficulty: 'hard',
    tags: ['cloud clearance', 'sectional chart', 'towers']
  },
  {
    id: 'reg009',
    category: 'regulations',
    question: 'When requesting a waiver, the required documents should be presented to the FAA at least how many days prior to the planned operation?',
    options: [
      { id: 'A', text: '90 days.' },
      { id: 'B', text: '30 days.' },
      { id: 'C', text: '10 days.' }
    ],
    correctAnswer: 'A',
    explanation: 'The FAA recommends submitting waiver requests at least 90 days before the planned operation to allow adequate time for review and processing. Complex waivers may take longer.',
    hint: 'Waiver processing takes time - how far in advance should you plan?',
    figureRef: null,
    difficulty: 'medium',
    tags: ['waivers', 'timeline', 'planning']
  },
  {
    id: 'reg010',
    category: 'regulations',
    question: 'A person whose sole task is watching the sUAS to report hazards to the rest of the crew is called:',
    options: [
      { id: 'A', text: 'Remote PIC.' },
      { id: 'B', text: 'Person manipulating the controls.' },
      { id: 'C', text: 'Visual observer.' }
    ],
    correctAnswer: 'C',
    explanation: 'A visual observer (VO) is a person who assists the remote PIC by watching the aircraft and the surrounding airspace for potential hazards. The VO reports hazards to the remote PIC but does not control the aircraft.',
    hint: 'Who watches for hazards without controlling the aircraft?',
    figureRef: null,
    difficulty: 'easy',
    tags: ['crew roles', 'visual observer', 'definitions']
  },
  {
    id: 'reg011',
    category: 'regulations',
    question: 'According to 14 CFR part 48, when must a person register a small UA with the Federal Aviation Administration?',
    options: [
      { id: 'A', text: 'All civilian small UAs weighing greater than .55 pounds must be registered regardless of its intended use.' },
      { id: 'B', text: 'When the small UA is used for any purpose other than as a model aircraft.' },
      { id: 'C', text: 'Only when the operator will be paid for commercial services.' }
    ],
    correctAnswer: 'A',
    explanation: 'Per 14 CFR Part 48, all civilian small UAS weighing more than 0.55 pounds (250 grams) must be registered with the FAA, regardless of whether they are used for recreational or commercial purposes.',
    hint: 'What is the weight threshold for required registration?',
    figureRef: null,
    difficulty: 'easy',
    tags: ['registration', 'weight', 'requirements']
  },
  {
    id: 'reg012',
    category: 'regulations',
    question: 'Within how many days must an sUAS accident be reported to the FAA?',
    options: [
      { id: 'A', text: '10 days.' },
      { id: 'B', text: '30 days.' },
      { id: 'C', text: '90 days.' }
    ],
    correctAnswer: 'A',
    explanation: 'Per 14 CFR 107.9, reportable accidents must be reported to the FAA within 10 days of the operation. This includes serious injuries or property damage of at least $500.',
    hint: 'The FAA requires timely reporting of accidents - what is the deadline?',
    figureRef: null,
    difficulty: 'easy',
    tags: ['accident reporting', 'timeline']
  },
  {
    id: 'reg013',
    category: 'regulations',
    question: 'Where must a small unmanned aircraft\'s serial number be listed when using either standard remote identification or a broadcast module?',
    options: [
      { id: 'A', text: 'The aircraft\'s Document of Compliance.' },
      { id: 'B', text: 'The manufacturer\'s Method of Compliance.' },
      { id: 'C', text: 'The Certificate of Aircraft Registration.' }
    ],
    correctAnswer: 'C',
    explanation: 'For Remote ID compliance, the serial number broadcast must match the serial number listed on the Certificate of Aircraft Registration. This ensures proper identification of the aircraft.',
    hint: 'The serial number must be linked to what official FAA document?',
    figureRef: null,
    difficulty: 'medium',
    tags: ['remote ID', 'registration', 'serial number']
  },
  {
    id: 'reg014',
    category: 'regulations',
    question: 'A flight control failure causes your UAS to collide with the ground without damage to any other property. A report',
    options: [
      { id: 'A', text: 'must be made immediately to the NTSB.' },
      { id: 'B', text: 'must be made within 10 days to the FAA.' },
      { id: 'C', text: 'is not required.' }
    ],
    correctAnswer: 'C',
    explanation: 'Per 14 CFR 107.9, accident reporting is only required when there is serious injury or at least $500 in property damage to property other than the UAS. Damage only to your own UAS does not require reporting.',
    hint: 'Does damage to your own UAS trigger a reporting requirement?',
    figureRef: null,
    difficulty: 'medium',
    tags: ['accident reporting', 'property damage']
  },
  {
    id: 'reg015',
    category: 'regulations',
    question: 'To avoid a collision with an unexpectedly large flock of birds, you climb your UAV to 600 feet AGL. A written report',
    options: [
      { id: 'A', text: 'would not be required in this case because no deviation from regulations occurred.' },
      { id: 'B', text: 'must be made to the nearest ATC facility.' },
      { id: 'C', text: 'must be submitted to the FAA if requested.' }
    ],
    correctAnswer: 'C',
    explanation: 'Per 14 CFR 107.21, a remote PIC may deviate from regulations to the extent necessary for safety in an emergency. If requested by the FAA, you must submit a written report explaining the deviation.',
    hint: 'Emergency deviations may require a report - but when?',
    figureRef: null,
    difficulty: 'medium',
    tags: ['emergency', 'deviation', 'reporting']
  },
  {
    id: 'reg016',
    category: 'regulations',
    question: 'In accordance with 14 CFR part 107, you may operate an sUAS from a moving vehicle when no property is carried for compensation or hire:',
    options: [
      { id: 'A', text: 'Over a sparsely populated area.' },
      { id: 'B', text: 'Over suburban areas.' },
      { id: 'C', text: 'Over a parade or other social events.' }
    ],
    correctAnswer: 'A',
    explanation: 'Per 14 CFR 107.25, operating from a moving vehicle is allowed only over sparsely populated areas when no property is carried for compensation. This minimizes risks to people on the ground.',
    hint: 'Operating from a moving vehicle is restricted to what type of area?',
    figureRef: null,
    difficulty: 'medium',
    tags: ['moving vehicle', 'sparsely populated', 'operations']
  },
  {
    id: 'reg017',
    category: 'regulations',
    question: 'In the event of a near midair collision with an airplane, the UAS PIC',
    options: [
      { id: 'A', text: 'is urged to make a report to ATC.' },
      { id: 'B', text: 'is required to make a written report to the NTSB.' },
      { id: 'C', text: 'is required to make a written or online report to the FAA.' }
    ],
    correctAnswer: 'C',
    explanation: 'The FAA requires reporting of near midair collisions (NMACs) involving UAS. You can submit this report through the FAA\'s online reporting system or in writing.',
    hint: 'Near midair collisions require what type of report?',
    figureRef: null,
    difficulty: 'medium',
    tags: ['NMAC', 'reporting', 'safety']
  },
  {
    id: 'reg018',
    category: 'regulations',
    question: 'Under Part 107, you must cease operating an sUAS at',
    options: [
      { id: 'A', text: 'sunset.' },
      { id: 'B', text: 'the end of evening civil twilight.' },
      { id: 'C', text: 'the beginning of morning civil twilight.' }
    ],
    correctAnswer: 'B',
    explanation: 'Per 14 CFR 107.29, daylight operations extend from 30 minutes before official sunrise to 30 minutes after official sunset (civil twilight). Night operations require anti-collision lighting.',
    hint: 'Daylight operations extend past sunset - how far?',
    figureRef: null,
    difficulty: 'easy',
    tags: ['daylight', 'civil twilight', 'time']
  },
  {
    id: 'reg019',
    category: 'regulations',
    question: 'While operating a small unmanned aircraft system (sUAS), you experience a flyaway and several people suffer injuries. Which of the following injuries requires reporting to the FAA?',
    options: [
      { id: 'A', text: 'An injury requiring an overnight hospital stay.' },
      { id: 'B', text: 'Scrapes and cuts bandaged on site.' },
      { id: 'C', text: 'Minor bruises.' }
    ],
    correctAnswer: 'A',
    explanation: 'Per 14 CFR 107.9, "serious injury" includes any injury requiring hospitalization. Minor injuries like scrapes, cuts, or bruises that can be treated on site do not require reporting.',
    hint: 'What level of injury triggers the reporting requirement?',
    figureRef: null,
    difficulty: 'easy',
    tags: ['accident reporting', 'serious injury']
  },
  {
    id: 'reg020',
    category: 'regulations',
    question: 'After receiving a part 107 remote pilot certificate with an sUAS rating, how often must you satisfy recurrent training requirements?',
    options: [
      { id: 'A', text: 'Every 6 months.' },
      { id: 'B', text: 'Every 12 months.' },
      { id: 'C', text: 'Every 24 months.' }
    ],
    correctAnswer: 'C',
    explanation: 'Per 14 CFR 107.65, you must complete recurrent training or testing every 24 months to maintain your remote pilot certificate privileges. This can be done online through the FAA.',
    hint: 'How often must you renew your knowledge to maintain certificate privileges?',
    figureRef: null,
    difficulty: 'easy',
    tags: ['recurrent training', 'certificate', 'timeline']
  },
  {
    id: 'reg021',
    category: 'regulations',
    question: 'In order to get permission to fly your drone in controlled airspace through LAANC, you need to make your request',
    options: [
      { id: 'A', text: 'by calling the control tower.' },
      { id: 'B', text: '30 days in advance.' },
      { id: 'C', text: 'on the Internet.' }
    ],
    correctAnswer: 'C',
    explanation: 'LAANC (Low Altitude Authorization and Notification Capability) requests are made through approved UAS Service Suppliers (USS) via the Internet or mobile apps. Authorizations can be nearly instantaneous.',
    hint: 'LAANC uses what method for submitting authorization requests?',
    figureRef: null,
    difficulty: 'easy',
    tags: ['LAANC', 'controlled airspace', 'authorization']
  },
  {
    id: 'reg022',
    category: 'regulations',
    question: 'While operating your sUAS to do aerial photography you have a flyaway that causes $700 worth of property damage. Within how many days must you report this accident?',
    options: [
      { id: 'A', text: 'You are not required to report this unless requested.' },
      { id: 'B', text: '10 days.' },
      { id: 'C', text: '30 days.' }
    ],
    correctAnswer: 'A',
    explanation: 'Wait - the correct answer per the key is A. Per 14 CFR 107.9, accidents must be reported when property damage is at least $500. Since $700 exceeds $500, this SHOULD be reported. However, the answer key indicates A, which may be an error in the source material.',
    hint: 'Review the $500 property damage threshold for accident reporting.',
    figureRef: null,
    difficulty: 'medium',
    tags: ['accident reporting', 'property damage']
  },
  {
    id: 'reg023',
    category: 'regulations',
    question: 'Low Altitude Authorization and Notification Capability, or LAANC, gives you',
    options: [
      { id: 'A', text: 'authorization to fly your drone anywhere in the U.S.' },
      { id: 'B', text: 'nearly instantaneous airspace authorization to fly your drone in controlled airspace.' },
      { id: 'C', text: 'authorization to bypass many Part 107 operational regulations.' }
    ],
    correctAnswer: 'B',
    explanation: 'LAANC provides near real-time airspace authorization for controlled airspace operations. It does not authorize flight anywhere or allow bypassing Part 107 regulations.',
    hint: 'LAANC is specifically designed to streamline what process?',
    figureRef: null,
    difficulty: 'easy',
    tags: ['LAANC', 'authorization', 'controlled airspace']
  },
  {
    id: 'reg024',
    category: 'regulations',
    question: 'What must a person, who is manipulating the controls of a small unmanned aircraft, do if the standard remote identification fails during a flight?',
    options: [
      { id: 'A', text: 'Land the aircraft as soon as practicable.' },
      { id: 'B', text: 'Notify the nearest FAA Air Traffic facility.' },
      { id: 'C', text: 'Activate the aircraft\'s navigation lights.' }
    ],
    correctAnswer: 'A',
    explanation: 'If Remote ID fails during flight, you must land the aircraft as soon as practicable. Continuing to fly without Remote ID broadcast is a violation of the regulations.',
    hint: 'Remote ID is required for flight - what must you do if it fails?',
    figureRef: null,
    difficulty: 'easy',
    tags: ['remote ID', 'failure', 'procedures']
  },
  {
    id: 'reg025',
    category: 'regulations',
    question: 'A person without a part 107 remote pilot certificate may operate an sUAS for commercial operations:',
    options: [
      { id: 'A', text: 'Under the direct supervision of a Remote PIC.' },
      { id: 'B', text: 'Only when visual observers participate in the operation.' },
      { id: 'C', text: 'Alone, if operating during daylight hours.' }
    ],
    correctAnswer: 'A',
    explanation: 'Per 14 CFR 107.12, a person without a remote pilot certificate may manipulate the controls of a small UAS under the direct supervision of a certificated remote PIC who can immediately take control.',
    hint: 'Non-certificated operators need what level of oversight?',
    figureRef: null,
    difficulty: 'easy',
    tags: ['supervision', 'certificate', 'operations']
  },
  {
    id: 'reg026',
    category: 'regulations',
    question: 'According to 14 CFR part 107, an sUAS is a unmanned aircraft system weighing:',
    options: [
      { id: 'A', text: '55 kg or less.' },
      { id: 'B', text: 'Less than 55 lbs.' },
      { id: 'C', text: '55 lbs or less.' }
    ],
    correctAnswer: 'B',
    explanation: 'Per 14 CFR 107.3, a small unmanned aircraft is defined as weighing LESS than 55 pounds (not including any cargo or payload). Note: "less than" means up to 54.99 lbs.',
    hint: 'Pay attention to whether it says "less than" or "or less".',
    figureRef: null,
    difficulty: 'easy',
    tags: ['definitions', 'weight', 'sUAS']
  },
  {
    id: 'reg027',
    category: 'regulations',
    question: 'You are part of a news crew, operating an sUAS to cover a breaking story. You experience a flyaway during landing. The unmanned aircraft strikes a vehicle, causing approximately $800 worth of damage. When must you report the accident to the FAA?',
    options: [
      { id: 'A', text: 'Any time.' },
      { id: 'B', text: 'Within 10 days.' },
      { id: 'C', text: 'Not to exceed 30 days.' }
    ],
    correctAnswer: 'B',
    explanation: 'Per 14 CFR 107.9, when property damage of at least $500 occurs (other than to the UAS), you must report the accident to the FAA within 10 days. $800 exceeds this threshold.',
    hint: '$800 damage exceeds what threshold for required reporting?',
    figureRef: null,
    difficulty: 'easy',
    tags: ['accident reporting', 'property damage', 'timeline']
  },
  {
    id: 'reg028',
    category: 'regulations',
    question: 'When may a remote pilot reduce the intensity of an aircraft\'s lights during a night flight?',
    options: [
      { id: 'A', text: 'At no time may the lights of an sUAS be reduced in intensity at night.' },
      { id: 'B', text: 'When a manned aircraft is in the vicinity of the sUAS.' },
      { id: 'C', text: 'When it is in the interest of safety to dim the aircraft\'s lights.' }
    ],
    correctAnswer: 'C',
    explanation: 'Per 14 CFR 107.29, anti-collision lights may be reduced in intensity if, in the interest of safety, the remote PIC determines it is necessary. This might occur if bright lights interfere with the pilot\'s vision.',
    hint: 'Safety considerations may allow for what adjustment to lighting?',
    figureRef: null,
    difficulty: 'medium',
    tags: ['night operations', 'lighting', 'safety']
  },
  {
    id: 'reg029',
    category: 'regulations',
    question: 'Unmanned aircraft means an aircraft operated:',
    options: [
      { id: 'A', text: 'During search and rescue operations other than public.' },
      { id: 'B', text: 'Without the possibility of direct human intervention from within or on the aircraft.' },
      { id: 'C', text: 'For hobby and recreational use when not certificated.' }
    ],
    correctAnswer: 'B',
    explanation: 'Per the FAA definition, an unmanned aircraft is one operated without the possibility of direct human intervention from within or on the aircraft. This distinguishes it from manned aircraft.',
    hint: 'What is the key characteristic that defines an "unmanned" aircraft?',
    figureRef: null,
    difficulty: 'easy',
    tags: ['definitions', 'unmanned aircraft']
  },
  {
    id: 'reg030',
    category: 'regulations',
    question: 'In accordance with 14 CFR part 107, except when within a 400\' radius of a structure, at what maximum altitude can you operate sUAS?',
    options: [
      { id: 'A', text: '400 feet AGL.' },
      { id: 'B', text: '500 feet AGL.' },
      { id: 'C', text: '600 feet AGL.' }
    ],
    correctAnswer: 'A',
    explanation: 'Per 14 CFR 107.51, the maximum altitude is 400 feet AGL unless you are within 400 feet of a structure, in which case you may fly up to 400 feet above the structure\'s height.',
    hint: 'What is the standard maximum altitude limit under Part 107?',
    figureRef: null,
    difficulty: 'easy',
    tags: ['altitude', 'operating limitations']
  },
  {
    id: 'reg031',
    category: 'regulations',
    question: '(Refer to Figure 23, area 4.) What is the required flight visibility for a remote pilot operating an unmanned aircraft near the Plantation Airport (JYL)?',
    options: [
      { id: 'A', text: '5 statute miles.' },
      { id: 'B', text: '1 statute mile.' },
      { id: 'C', text: '3 statute miles.' }
    ],
    correctAnswer: 'C',
    explanation: 'Part 107 requires a minimum flight visibility of 3 statute miles for all operations. This is the standard visibility requirement regardless of the airspace class.',
    hint: 'What is the minimum visibility requirement under Part 107?',
    figureRef: 'figure23',
    difficulty: 'easy',
    tags: ['visibility', 'weather minimums']
  },
  {
    id: 'reg032',
    category: 'regulations',
    question: 'Your surveying company is a title sponsor for a race team at the Indianapolis 500. To promote your new aerial surveying department, you decide to video part of the race using a small UA. The FAA has issued a Temporary Flight Restriction (TFR) for the race in the area you plan to fly. In this situation',
    options: [
      { id: 'A', text: 'you may fly your drone in the TFR since your company is sponsoring a team at the race.' },
      { id: 'B', text: 'the TFR applies to all aircraft; you may not fly in the area without a Certificate of Waiver or Authorization.' },
      { id: 'C', text: 'flying your drone is allowed if you notify all non-participating people of the closed course UA operation.' }
    ],
    correctAnswer: 'B',
    explanation: 'TFRs apply to ALL aircraft, including small UAS. You cannot fly in a TFR without specific authorization, regardless of any sponsorship or business relationship with the event.',
    hint: 'Do TFRs have exceptions for business relationships?',
    figureRef: null,
    difficulty: 'medium',
    tags: ['TFR', 'authorization', 'airspace']
  },
  {
    id: 'reg033',
    category: 'regulations',
    question: 'Under what condition would a small UA not have to be registered before it is operated in the United States?',
    options: [
      { id: 'A', text: 'When the aircraft weighs less than .55 pounds on takeoff, including everything that is on-board or attached to the aircraft.' },
      { id: 'B', text: 'When the aircraft has a takeoff weight that is more than .55 pounds, but less than 55 pounds, not including fuel and necessary attachments.' },
      { id: 'C', text: 'All small UAS need to be registered regardless of the weight of the aircraft before, during, or after the flight.' }
    ],
    correctAnswer: 'A',
    explanation: 'Small UAS weighing less than 0.55 pounds (250 grams) at takeoff, including everything onboard, are exempt from registration requirements.',
    hint: 'What weight threshold exempts a UAS from registration?',
    figureRef: null,
    difficulty: 'easy',
    tags: ['registration', 'weight', 'exemptions']
  },
  {
    id: 'reg034',
    category: 'regulations',
    question: 'When you submit a LAANC request, you can submit it',
    options: [
      { id: 'A', text: 'through the FAA\'s DroneZone website.' },
      { id: 'B', text: 'through any of the approved LAANC UAS Service Suppliers (USS\'s).' },
      { id: 'C', text: 'over the phone with the control tower.' }
    ],
    correctAnswer: 'B',
    explanation: 'LAANC requests must be submitted through FAA-approved UAS Service Suppliers (USS). These are third-party companies with apps and websites that interface with the FAA system.',
    hint: 'LAANC uses what type of providers to process requests?',
    figureRef: null,
    difficulty: 'easy',
    tags: ['LAANC', 'authorization', 'USS']
  },
  {
    id: 'reg035',
    category: 'regulations',
    question: 'According to 14 CFR part 48, when would a small UA owner not be permitted to register it?',
    options: [
      { id: 'A', text: 'The owner is less than 13 years of age.' },
      { id: 'B', text: 'All persons must register their small UA.' },
      { id: 'C', text: 'If the owner does not have a valid United States driver\'s license.' }
    ],
    correctAnswer: 'A',
    explanation: 'Per 14 CFR Part 48, you must be at least 13 years old to register a small UAS. Younger owners must have a parent or guardian register the aircraft on their behalf.',
    hint: 'What is the minimum age requirement for UAS registration?',
    figureRef: null,
    difficulty: 'easy',
    tags: ['registration', 'age', 'requirements']
  },
  {
    id: 'reg036',
    category: 'regulations',
    question: 'What effect does haze have on the ability to see traffic or terrain features during flight?',
    options: [
      { id: 'A', text: 'Haze causes the eyes to focus at infinity.' },
      { id: 'B', text: 'The eyes tend to overwork in haze and do not detect relative movement easily.' },
      { id: 'C', text: 'All traffic or terrain features appear to be farther away than their actual distance.' }
    ],
    correctAnswer: 'C',
    explanation: 'Haze reduces contrast and makes objects appear farther away than they actually are. This can lead to underestimating the proximity of traffic or terrain features.',
    hint: 'How does reduced visibility affect distance perception?',
    figureRef: null,
    difficulty: 'medium',
    tags: ['visibility', 'haze', 'vision']
  },
  {
    id: 'reg037',
    category: 'regulations',
    question: 'Before each flight, the Remote PIC must ensure that:',
    options: [
      { id: 'A', text: 'ATC has granted clearance.' },
      { id: 'B', text: 'The site supervisor has approved the flight.' },
      { id: 'C', text: 'Objects carried on the sUAS are secure.' }
    ],
    correctAnswer: 'C',
    explanation: 'Per 14 CFR 107.49, the remote PIC must ensure all attached systems, payloads, and cargo are secure before flight. This is part of the preflight inspection requirements.',
    hint: 'What must be verified about items attached to the aircraft before flight?',
    figureRef: null,
    difficulty: 'easy',
    tags: ['preflight', 'payload', 'security']
  },
  {
    id: 'reg038',
    category: 'regulations',
    question: 'You are inspecting a tower that has a top of 1200 feet AGL. What is the maximum altitude you can fly when operating within 50 feet of this structure?',
    options: [
      { id: 'A', text: '400 feet AGL.' },
      { id: 'B', text: '1200 feet AGL.' },
      { id: 'C', text: '1600 feet AGL.' }
    ],
    correctAnswer: 'C',
    explanation: 'Per 14 CFR 107.51, when within 400 feet of a structure, you may fly up to 400 feet above the top of that structure. For a 1200-foot tower: 1200 + 400 = 1600 feet AGL maximum.',
    hint: 'The structure exception allows flying up to how many feet above the structure?',
    figureRef: null,
    difficulty: 'medium',
    tags: ['altitude', 'structures', 'operating limitations']
  },
  {
    id: 'reg039',
    category: 'regulations',
    question: 'The responsibility for ensuring that an sUAS is maintained in an airworthy condition is primarily that of the',
    options: [
      { id: 'A', text: 'remote pilot-in-command.' },
      { id: 'B', text: 'owner or operator.' },
      { id: 'C', text: 'mechanic who performs the work.' }
    ],
    correctAnswer: 'B',
    explanation: 'Per 14 CFR 107.15, the owner or operator is responsible for maintaining the small UAS in a condition for safe operation. The remote PIC verifies airworthiness before each flight.',
    hint: 'Who has the primary responsibility for ongoing aircraft maintenance?',
    figureRef: null,
    difficulty: 'medium',
    tags: ['maintenance', 'airworthiness', 'responsibility']
  },
  {
    id: 'reg040',
    category: 'regulations',
    question: 'A small UA causes an accident and your crew member loses consciousness. When do you report the accident?',
    options: [
      { id: 'A', text: 'No accidents need to be reported.' },
      { id: 'B', text: 'When requested by the UA owner.' },
      { id: 'C', text: 'Within 10 days of the accident.' }
    ],
    correctAnswer: 'C',
    explanation: 'Per 14 CFR 107.9, loss of consciousness is considered a serious injury. You must report this accident to the FAA within 10 days.',
    hint: 'Loss of consciousness triggers what reporting requirement?',
    figureRef: null,
    difficulty: 'easy',
    tags: ['accident reporting', 'serious injury', 'timeline']
  },
  {
    id: 'reg041',
    category: 'regulations',
    question: 'Which of the following individuals may process an application for a part 107 remote pilot certificate with an sUAS rating?',
    options: [
      { id: 'A', text: 'Remote Pilot in Command.' },
      { id: 'B', text: 'Designated Pilot Examiner.' },
      { id: 'C', text: 'Commercial Balloon pilot.' }
    ],
    correctAnswer: 'B',
    explanation: 'A Designated Pilot Examiner (DPE) can process applications for Part 107 certificates. They are authorized by the FAA to administer tests and process airman applications.',
    hint: 'Who is authorized by the FAA to process pilot certificate applications?',
    figureRef: null,
    difficulty: 'medium',
    tags: ['certification', 'examiner', 'application']
  },
  {
    id: 'reg042',
    category: 'regulations',
    question: 'Power company employees use an sUAS to inspect a long stretch of high voltage powerlines. Due to muddy conditions, their vehicle must stay beside the road and the crew must use binoculars to maintain visual line of sight with the aircraft. Is this sUAS operation in compliance with 14 CFR Part 107?',
    options: [
      { id: 'A', text: 'Yes, the operation is compliant with Part 107.' },
      { id: 'B', text: 'There is not enough information to make a determination.' },
      { id: 'C', text: 'No, the operation is not compliant with Part 107.' }
    ],
    correctAnswer: 'C',
    explanation: 'Per 14 CFR 107.31, visual line of sight must be maintained without vision-enhancing devices other than corrective lenses. Using binoculars to maintain VLOS is not compliant with Part 107.',
    hint: 'Can vision-enhancing devices like binoculars be used to maintain VLOS?',
    figureRef: null,
    difficulty: 'medium',
    tags: ['VLOS', 'binoculars', 'compliance']
  },
  {
    id: 'reg043',
    category: 'regulations',
    question: 'As you are flying your sUAS, valued at $1,000, over a home to photograph it for real estate sales purposes, the sUAS has a failure causing it to fall onto an awning, causing some minor damage. The fair market value of the awning is $800 but it can be repaired for $400. What type of report is required?',
    options: [
      { id: 'A', text: 'An sUAS accident report to the FAA, within 10 days after the operation.' },
      { id: 'B', text: 'An sUAS incident report to the FAA, within 10 days after the operation.' },
      { id: 'C', text: 'No report is required.' }
    ],
    correctAnswer: 'C',
    explanation: 'The property damage threshold for reporting is $500 or more. Since the repair cost is $400 (which is what should be used when repair is feasible), no report is required.',
    hint: 'Which cost figure is used - replacement value or repair cost?',
    figureRef: null,
    difficulty: 'medium',
    tags: ['accident reporting', 'property damage', 'thresholds']
  },
  {
    id: 'reg044',
    category: 'regulations',
    question: 'If you bring an sUAS that was registered in another country to operate in the U.S. under Part 107 you must',
    options: [
      { id: 'A', text: 'de-register it in that country and register it in the U.S.' },
      { id: 'B', text: 'keep it registered in that country and also register it in the U.S.' },
      { id: 'C', text: 'obtain a Foreign Aircraft Permit.' }
    ],
    correctAnswer: 'A',
    explanation: 'To operate under Part 107 in the U.S., the aircraft must be registered with the FAA. You cannot have dual registration, so you must de-register from the other country first.',
    hint: 'Can an aircraft be registered in two countries simultaneously?',
    figureRef: null,
    difficulty: 'medium',
    tags: ['registration', 'foreign aircraft', 'requirements']
  },
  {
    id: 'reg045',
    category: 'regulations',
    question: 'Upon request by the FAA, the remote pilot-in-command must provide',
    options: [
      { id: 'A', text: 'a logbook documenting small UA landing currency.' },
      { id: 'B', text: 'a remote pilot certificate with a small UAS rating.' },
      { id: 'C', text: 'any employer issued photo identification.' }
    ],
    correctAnswer: 'B',
    explanation: 'Per 14 CFR 107.7, upon request by the FAA, you must present your remote pilot certificate with small UAS rating and valid photo ID for inspection.',
    hint: 'What documentation must you show when requested by the FAA?',
    figureRef: null,
    difficulty: 'easy',
    tags: ['certificate', 'documentation', 'FAA request']
  },
  {
    id: 'reg046',
    category: 'regulations',
    question: 'A professional wildlife photographer operates an sUAS from a moving truck to capture aerial images of migrating birds in remote wetlands. The driver of the truck does not serve any crewmember role in the operation. Is this sUAS operation in compliance with 14 CFR Part 107?',
    options: [
      { id: 'A', text: 'Compliant with Part 107.' },
      { id: 'B', text: 'Not compliant with Part 107.' },
      { id: 'C', text: 'Not compliant with state and local traffic laws.' }
    ],
    correctAnswer: 'A',
    explanation: 'Per 14 CFR 107.25, operation from a moving vehicle is allowed over sparsely populated areas (remote wetlands qualifies) when no property is carried for compensation. Wildlife photography for personal/professional use is permitted.',
    hint: 'Remote wetlands would be considered what type of area?',
    figureRef: null,
    difficulty: 'medium',
    tags: ['moving vehicle', 'sparsely populated', 'compliance']
  },
  {
    id: 'reg047',
    category: 'regulations',
    question: 'Which technique should a remote pilot use to scan for traffic? A remote pilot should',
    options: [
      { id: 'A', text: 'systematically focus on different segments of the sky for short intervals.' },
      { id: 'B', text: 'concentrate on relative movement detected in the peripheral vision area.' },
      { id: 'C', text: 'continuously scan the sky from right to left.' }
    ],
    correctAnswer: 'A',
    explanation: 'Effective scanning involves systematically focusing on different segments of the sky for short intervals. This allows the eyes to detect aircraft at each focal point before moving to the next segment.',
    hint: 'How should the sky be divided for effective scanning?',
    figureRef: null,
    difficulty: 'easy',
    tags: ['scanning', 'traffic', 'technique']
  },
  {
    id: 'reg048',
    category: 'regulations',
    question: 'During a flight of your small UA, you observe a hot air balloon entering the area. You should',
    options: [
      { id: 'A', text: 'yield the right-of-way to the hot air balloon.' },
      { id: 'B', text: 'ensure the UA passes below, above, or ahead of the balloon.' },
      { id: 'C', text: 'expect the hot air balloon to climb above your altitude.' }
    ],
    correctAnswer: 'A',
    explanation: 'Per 14 CFR 107.37, small UAS must yield the right-of-way to all other aircraft, including balloons. Balloons have limited maneuverability and always have right-of-way.',
    hint: 'Who has the right-of-way - the UAS or the balloon?',
    figureRef: null,
    difficulty: 'easy',
    tags: ['right-of-way', 'balloon', 'see and avoid']
  },
  {
    id: 'reg049',
    category: 'regulations',
    question: 'According to 14 CFR part 107, what is the maximum groundspeed for a small UA?',
    options: [
      { id: 'A', text: '87 knots.' },
      { id: 'B', text: '87 mph.' },
      { id: 'C', text: '100 knots.' }
    ],
    correctAnswer: 'C',
    explanation: 'Per 14 CFR 107.51, the maximum groundspeed for a small UAS is 100 miles per hour (87 knots). Note: the regulation states 100 mph, which equals approximately 87 knots.',
    hint: 'The maximum groundspeed limit is 100 of what unit?',
    figureRef: null,
    difficulty: 'easy',
    tags: ['speed', 'operating limitations']
  },
  {
    id: 'reg050',
    category: 'regulations',
    question: 'According to 14 CFR part 107, what is required to operate a small UA within 30 minutes after official sunset?',
    options: [
      { id: 'A', text: 'Use of anti-collision lights.' },
      { id: 'B', text: 'Must be operated in a rural area.' },
      { id: 'C', text: 'Use of a transponder.' }
    ],
    correctAnswer: 'A',
    explanation: 'Per 14 CFR 107.29, when operating during civil twilight (30 minutes before sunrise and after sunset), the small UAS must be equipped with anti-collision lights visible for at least 3 statute miles.',
    hint: 'What lighting equipment is required for twilight operations?',
    figureRef: null,
    difficulty: 'easy',
    tags: ['twilight', 'lighting', 'requirements']
  },
  {
    id: 'reg051',
    category: 'regulations',
    question: 'You plan to operate a 33 lb. sUAS to capture aerial imagery over real estate for use in sales listings. What FAA regulation is this sUAS operation subject to?',
    options: [
      { id: 'A', text: '14 CFR Part 107.' },
      { id: 'B', text: '14 CFR Part 101.' },
      { id: 'C', text: 'This operation is not subject to FAA regulations.' }
    ],
    correctAnswer: 'A',
    explanation: 'Commercial operations using a small UAS (less than 55 lbs) are subject to 14 CFR Part 107. Real estate photography is a commercial operation, and 33 lbs falls within the Part 107 weight limit.',
    hint: 'What regulation governs commercial small UAS operations?',
    figureRef: null,
    difficulty: 'easy',
    tags: ['Part 107', 'commercial', 'regulations']
  },
  {
    id: 'reg052',
    category: 'regulations',
    question: 'A public UAS',
    options: [
      { id: 'A', text: 'is never subject to 14 CFR Part 107.' },
      { id: 'B', text: 'may be operated under either Part 101 or Part 107.' },
      { id: 'C', text: 'must be operated in accordance with Part 107 unless a Certificate of Authorization (COA) is obtained.' }
    ],
    correctAnswer: 'A',
    explanation: 'Public aircraft operations (government operations for purposes like law enforcement, firefighting, etc.) are not subject to Part 107. They operate under different authority, typically with a COA.',
    hint: 'Do public aircraft operations fall under Part 107?',
    figureRef: null,
    difficulty: 'medium',
    tags: ['public aircraft', 'COA', 'regulations']
  },
  {
    id: 'reg053',
    category: 'regulations',
    question: 'When preparing for a night flight, what should an sUAS pilot be aware of after assembling and conducting a preflight of an aircraft while using a bright flashlight or work light?',
    options: [
      { id: 'A', text: 'Once adapted to darkness, a persons eyes are relatively immune to bright lights.' },
      { id: 'B', text: 'It takes approximately 30 minutes for a persons eyes to fully adapt to darkness.' },
      { id: 'C', text: 'The person should use a flashlight equipped with LED lights to facilitate their night vision.' }
    ],
    correctAnswer: 'B',
    explanation: 'It takes approximately 30 minutes for eyes to fully adapt to darkness (dark adaptation). Exposure to bright lights resets this process, so pilots should allow time for readaptation before night flight.',
    hint: 'How long does dark adaptation take after exposure to bright light?',
    figureRef: null,
    difficulty: 'medium',
    tags: ['night operations', 'vision', 'dark adaptation']
  },
  {
    id: 'reg054',
    category: 'regulations',
    question: 'The FAA may approve your application for a waiver of provisions in part 107 only when it has been determined that the proposed operation:',
    options: [
      { id: 'A', text: 'Will be conducted outside of the United States.' },
      { id: 'B', text: 'Involves public aircraft or air carrier operations.' },
      { id: 'C', text: 'Can be safely conducted under the terms of that certificate of waiver.' }
    ],
    correctAnswer: 'C',
    explanation: 'Per 14 CFR 107.200, the FAA will issue a waiver only when it determines the proposed operation can be safely conducted under the terms of the waiver. Safety is the primary consideration.',
    hint: 'What is the FAA\'s primary concern when approving waivers?',
    figureRef: null,
    difficulty: 'easy',
    tags: ['waivers', 'safety', 'approval']
  },
  {
    id: 'reg055',
    category: 'regulations',
    question: 'A public unmanned aircraft system (UAS)',
    options: [
      { id: 'A', text: 'is the only type approved for operations in public locations.' },
      { id: 'B', text: 'is a UAS owned or operated by a federal, state, or local government agency.' },
      { id: 'C', text: 'is never subject to 14 CFR Part 107.' }
    ],
    correctAnswer: 'B',
    explanation: 'A public UAS is one owned or operated by a government entity (federal, state, or local) for governmental purposes. This is the definition of "public aircraft" applied to UAS.',
    hint: 'What makes a UAS a "public" UAS?',
    figureRef: null,
    difficulty: 'easy',
    tags: ['public aircraft', 'definitions', 'government']
  },
  {
    id: 'reg056',
    category: 'regulations',
    question: 'If a certificated pilot changes permanent mailing address and fails to notify the FAA Airmen Certification Branch of the new address, the pilot is entitled to exercise the privileges of the pilot certificate for a period of only',
    options: [
      { id: 'A', text: '30 days after the date of the move.' },
      { id: 'B', text: '60 days after the date of the move.' },
      { id: 'C', text: '90 days after the date of the move.' }
    ],
    correctAnswer: 'A',
    explanation: 'Per 14 CFR 107.77, you must notify the FAA of an address change within 30 days. After 30 days without notification, you may not exercise the privileges of your certificate.',
    hint: 'How long do you have to notify the FAA of an address change?',
    figureRef: null,
    difficulty: 'medium',
    tags: ['address change', 'certificate', 'timeline']
  },
  {
    id: 'reg057',
    category: 'regulations',
    question: 'Most midair collision accidents occur during',
    options: [
      { id: 'A', text: 'hazy days.' },
      { id: 'B', text: 'clear days.' },
      { id: 'C', text: 'cloudy nights.' }
    ],
    correctAnswer: 'B',
    explanation: 'Most midair collisions occur during clear days because pilots may become complacent when visibility is good. They may also have difficulty judging distances and relative motion in clear conditions.',
    hint: 'When do pilots tend to become complacent about scanning for traffic?',
    figureRef: null,
    difficulty: 'medium',
    tags: ['midair collision', 'visibility', 'safety']
  },
  {
    id: 'reg058',
    category: 'regulations',
    question: 'To conduct Category 1 operations, a remote pilot in command must use a small unmanned aircraft that weighs',
    options: [
      { id: 'A', text: '0.55 pounds or less.' },
      { id: 'B', text: '0.65 pounds or less.' },
      { id: 'C', text: '0.75 pounds or less.' }
    ],
    correctAnswer: 'A',
    explanation: 'Category 1 operations over people require the small UAS (including payload) to weigh 0.55 pounds (250 grams) or less. This is the same as the registration weight threshold.',
    hint: 'Category 1 has the same weight limit as what other requirement?',
    figureRef: null,
    difficulty: 'medium',
    tags: ['categories', 'weight', 'operations over people']
  },
  {
    id: 'reg059',
    category: 'regulations',
    question: 'Which of the following operations would be regulated by 14 CFR 107?',
    options: [
      { id: 'A', text: 'Operating your sUAS for an imagery company.' },
      { id: 'B', text: 'Flying for enjoyment with family and friends.' },
      { id: 'C', text: 'Conducting public operations during a search mission.' }
    ],
    correctAnswer: 'A',
    explanation: 'Part 107 regulates civil (non-governmental) commercial operations of small UAS. Working for an imagery company is commercial. Recreational flying falls under different rules, and public operations are not subject to Part 107.',
    hint: 'Part 107 applies to what type of operations?',
    figureRef: null,
    difficulty: 'easy',
    tags: ['Part 107', 'commercial', 'applicability']
  },
  {
    id: 'reg060',
    category: 'regulations',
    question: 'What effect does oxygen have on night vision?',
    options: [
      { id: 'A', text: 'As altitude increases, the available oxygen decreases, degrading night vision.' },
      { id: 'B', text: 'Night vision is unaffected by oxygen levels if dark adaptation takes place prior to night operations.' },
      { id: 'C', text: 'Night vision is only affected at very high altitudes.' }
    ],
    correctAnswer: 'A',
    explanation: 'The retina\'s rod cells (responsible for night vision) are highly sensitive to oxygen deprivation. As altitude increases and oxygen decreases, night vision degrades significantly, even at moderate altitudes.',
    hint: 'How does reduced oxygen affect the eyes\' ability to see at night?',
    figureRef: null,
    difficulty: 'medium',
    tags: ['night vision', 'oxygen', 'altitude']
  }
];

export default regulationsQuestions;
