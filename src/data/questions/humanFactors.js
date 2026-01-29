// Human Factors & ADM Questions
// Source: FAA Part 107 Test Prep Materials
// Total: 30 questions

export const humanFactorsQuestions = [
  {
    id: 'hf001',
    category: 'humanFactors',
    question: 'A local TV station has hired a remote pilot to operate their small UA to cover breaking news stories. The remote pilot has had multiple near misses with obstacles on the ground and two small UAS accidents. What would be a solution for the news station to improve their operating safety culture?',
    options: [
      { id: 'A', text: 'The news station should implement a policy of no more than five crashes/incidents within 6 months.' },
      { id: 'B', text: 'The news station does not need to make any changes; there are times that an accident is unavoidable.' },
      { id: 'C', text: 'The news station should recognize hazardous attitudes and situations and develop standard operating procedures that emphasize safety.' }
    ],
    correctAnswer: 'C',
    explanation: 'A proactive safety culture requires recognizing hazardous attitudes and situations, then developing standard operating procedures (SOPs) that emphasize safety. Simply accepting accidents or setting crash quotas does not address the underlying safety issues.',
    hint: 'Think about what constitutes a genuine safety culture - is it accepting accidents or actively preventing them?',
    figureRef: null,
    difficulty: 'medium',
    tags: ['safety culture', 'ADM', 'SOP']
  },
  {
    id: 'hf002',
    category: 'humanFactors',
    question: 'Safety is an important element for a remote pilot to consider prior to operating an unmanned aircraft system. To prevent the final "link" in the accident chain, a remote pilot must consider which methodology?',
    options: [
      { id: 'A', text: 'Crew Resource Management.' },
      { id: 'B', text: 'Safety Management System.' },
      { id: 'C', text: 'Risk Management.' }
    ],
    correctAnswer: 'C',
    explanation: 'Risk Management is the methodology used to identify, assess, and mitigate hazards to prevent the final link in an accident chain. By breaking the chain of events that lead to accidents, pilots can prevent mishaps.',
    hint: 'The accident chain concept focuses on breaking links - which methodology specifically addresses identifying and mitigating risks?',
    figureRef: null,
    difficulty: 'medium',
    tags: ['risk management', 'safety', 'accident chain']
  },
  {
    id: 'hf003',
    category: 'humanFactors',
    question: 'When adapting crew resource management (CRM) concepts to the operation of a small UA, CRM must be integrated into',
    options: [
      { id: 'A', text: 'the flight portion only.' },
      { id: 'B', text: 'all phases of the operation.' },
      { id: 'C', text: 'the communications only.' }
    ],
    correctAnswer: 'B',
    explanation: 'CRM must be integrated into all phases of the operation, including preflight planning, briefings, the flight itself, and post-flight debriefings. Effective resource management applies throughout the entire operation, not just during flight.',
    hint: 'CRM is about managing all available resources - would that only apply during one phase?',
    figureRef: null,
    difficulty: 'easy',
    tags: ['CRM', 'operations']
  },
  {
    id: 'hf004',
    category: 'humanFactors',
    question: 'Identify the hazardous attitude or characteristic a remote pilot displays while taking risks in order to impress others?',
    options: [
      { id: 'A', text: 'Impulsivity.' },
      { id: 'B', text: 'Invulnerability.' },
      { id: 'C', text: 'Macho.' }
    ],
    correctAnswer: 'C',
    explanation: 'The Macho attitude is characterized by taking risks to impress others or prove oneself. Pilots with this attitude may try to demonstrate their prowess by taking unnecessary risks. The antidote is "Taking chances is foolish."',
    hint: 'Which attitude involves showing off or proving something to others?',
    figureRef: null,
    difficulty: 'easy',
    tags: ['hazardous attitudes', 'macho', 'ADM']
  },
  {
    id: 'hf005',
    category: 'humanFactors',
    question: 'You have been hired as a remote pilot by a local TV news station to film breaking news with a small UA. You expressed a safety concern and the station manager has instructed you to "fly first, ask questions later." What type of hazardous attitude does this attitude represent?',
    options: [
      { id: 'A', text: 'Impulsivity.' },
      { id: 'B', text: 'Invulnerability.' },
      { id: 'C', text: 'Macho.' }
    ],
    correctAnswer: 'A',
    explanation: 'Impulsivity is characterized by the urge to act immediately without thinking through the consequences. "Fly first, ask questions later" represents impulsive behavior. The antidote is "Not so fast, think first."',
    hint: 'Acting without thinking through consequences represents which hazardous attitude?',
    figureRef: null,
    difficulty: 'easy',
    tags: ['hazardous attitudes', 'impulsivity', 'ADM']
  },
  {
    id: 'hf006',
    category: 'humanFactors',
    question: 'You are a remote pilot for a co-op energy service provider. You are to use your UA to inspect power lines in the remote area 15 hours away from your home office. After the drive, fatigue impacts your abilities to complete your assignment on time. Fatigue can be recognized',
    options: [
      { id: 'A', text: 'easily by an experienced pilot.' },
      { id: 'B', text: 'as being in an impaired state.' },
      { id: 'C', text: 'by an ability to overcome sleep deprivation.' }
    ],
    correctAnswer: 'B',
    explanation: 'Fatigue is recognized as being in an impaired state that affects judgment, reaction time, and decision-making abilities. Fatigue is often difficult to recognize in oneself, and it cannot be simply overcome through willpower.',
    hint: 'Fatigue affects your abilities similar to what other condition?',
    figureRef: null,
    difficulty: 'medium',
    tags: ['fatigue', 'impairment', 'fitness']
  },
  {
    id: 'hf007',
    category: 'humanFactors',
    question: 'Which is true regarding the presence of alcohol within the human body?',
    options: [
      { id: 'A', text: 'A small amount of alcohol increases vision acuity.' },
      { id: 'B', text: 'Consuming an equal amount of water will increase the destruction of alcohol and alleviate a hangover.' },
      { id: 'C', text: 'Judgment and decision-making abilities can be adversely affected by even small amounts of alcohol.' }
    ],
    correctAnswer: 'C',
    explanation: 'Even small amounts of alcohol can adversely affect judgment and decision-making abilities. Alcohol does not improve vision, and water consumption does not speed up alcohol metabolism. The only remedy for alcohol impairment is time.',
    hint: 'Does alcohol improve or impair cognitive functions?',
    figureRef: null,
    difficulty: 'easy',
    tags: ['alcohol', 'impairment', 'fitness']
  },
  {
    id: 'hf008',
    category: 'humanFactors',
    question: 'The effective use of all available resources—human, hardware, and information—prior to and during flight to ensure the successful outcome of the operation is called:',
    options: [
      { id: 'A', text: 'Safety Management System.' },
      { id: 'B', text: 'Crew Resource Management.' },
      { id: 'C', text: 'Risk Management.' }
    ],
    correctAnswer: 'B',
    explanation: 'Crew Resource Management (CRM) is the effective use of all available resources—human, hardware, and information—to achieve safe and efficient flight operations. CRM focuses on communication, teamwork, and decision-making.',
    hint: 'Which management concept specifically addresses using ALL available resources including human resources?',
    figureRef: null,
    difficulty: 'easy',
    tags: ['CRM', 'resources']
  },
  {
    id: 'hf009',
    category: 'humanFactors',
    question: 'Rapid or extra deep breathing while using oxygen can cause a condition known as',
    options: [
      { id: 'A', text: 'hyperventilation.' },
      { id: 'B', text: 'aerosinusitis.' },
      { id: 'C', text: 'aerotitis.' }
    ],
    correctAnswer: 'A',
    explanation: 'Hyperventilation occurs when a person breathes too rapidly or deeply, causing an excessive loss of carbon dioxide. This disrupts the blood\'s acid-base balance and can cause lightheadedness, tingling, and other symptoms.',
    hint: 'What condition results from breathing too fast or too deeply?',
    figureRef: null,
    difficulty: 'easy',
    tags: ['hyperventilation', 'physiology']
  },
  {
    id: 'hf010',
    category: 'humanFactors',
    question: 'Which would most likely result in hyperventilation?',
    options: [
      { id: 'A', text: 'Emotional tension, anxiety, or fear.' },
      { id: 'B', text: 'The excessive consumption of alcohol.' },
      { id: 'C', text: 'An extremely slow rate of breathing and insufficient oxygen.' }
    ],
    correctAnswer: 'A',
    explanation: 'Emotional tension, anxiety, or fear are the most common triggers for hyperventilation. These emotional states can cause rapid, shallow breathing that leads to excessive loss of carbon dioxide from the blood.',
    hint: 'What emotional states might cause someone to breathe rapidly?',
    figureRef: null,
    difficulty: 'easy',
    tags: ['hyperventilation', 'stress', 'physiology']
  },
  {
    id: 'hf011',
    category: 'humanFactors',
    question: 'A pilot should be able to overcome the symptoms or avoid future occurrences of hyperventilation by',
    options: [
      { id: 'A', text: 'closely monitoring the flight instruments to control the airplane.' },
      { id: 'B', text: 'slowing the breathing rate, breathing into a bag, or talking aloud.' },
      { id: 'C', text: 'increasing the breathing rate in order to increase lung ventilation.' }
    ],
    correctAnswer: 'B',
    explanation: 'To overcome hyperventilation, slow your breathing rate, breathe into a paper bag (to rebreathe carbon dioxide), or talk aloud (which naturally regulates breathing). Increasing breathing would worsen the condition.',
    hint: 'If hyperventilation is caused by breathing too fast, what would help?',
    figureRef: null,
    difficulty: 'easy',
    tags: ['hyperventilation', 'treatment', 'physiology']
  },
  {
    id: 'hf012',
    category: 'humanFactors',
    question: 'What is the antidote when a pilot has a hazardous attitude, such as "Antiauthority"?',
    options: [
      { id: 'A', text: 'Rules do not apply in this situation.' },
      { id: 'B', text: 'I know what I am doing.' },
      { id: 'C', text: 'Follow the rules.' }
    ],
    correctAnswer: 'C',
    explanation: 'The antidote for the Antiauthority attitude is "Follow the rules. They are usually right." Regulations and procedures exist for good reasons and following them promotes safety.',
    hint: 'If someone resists authority and rules, what mindset would counter that?',
    figureRef: null,
    difficulty: 'easy',
    tags: ['hazardous attitudes', 'antiauthority', 'antidotes']
  },
  {
    id: 'hf013',
    category: 'humanFactors',
    question: 'What is the antidote when a pilot has a hazardous attitude, such as "Impulsivity"?',
    options: [
      { id: 'A', text: 'It could happen to me.' },
      { id: 'B', text: 'Do it quickly to get it over with.' },
      { id: 'C', text: 'Not so fast, think first.' }
    ],
    correctAnswer: 'C',
    explanation: 'The antidote for Impulsivity is "Not so fast, think first." This encourages pilots to pause and consider the consequences before acting hastily.',
    hint: 'If someone acts without thinking, what advice would help them slow down?',
    figureRef: null,
    difficulty: 'easy',
    tags: ['hazardous attitudes', 'impulsivity', 'antidotes']
  },
  {
    id: 'hf014',
    category: 'humanFactors',
    question: 'What is the antidote when a pilot has a hazardous attitude, such as "Invulnerability"?',
    options: [
      { id: 'A', text: 'It will not happen to me.' },
      { id: 'B', text: 'It can not be that bad.' },
      { id: 'C', text: 'It could happen to me.' }
    ],
    correctAnswer: 'C',
    explanation: 'The antidote for Invulnerability is "It could happen to me." This counters the dangerous belief that accidents only happen to other people.',
    hint: 'If someone thinks they\'re immune to accidents, what realization would help?',
    figureRef: null,
    difficulty: 'easy',
    tags: ['hazardous attitudes', 'invulnerability', 'antidotes']
  },
  {
    id: 'hf015',
    category: 'humanFactors',
    question: 'What is the antidote when a pilot has a hazardous attitude, such as "Macho"?',
    options: [
      { id: 'A', text: 'I can do it.' },
      { id: 'B', text: 'Taking chances is foolish.' },
      { id: 'C', text: 'Nothing will happen.' }
    ],
    correctAnswer: 'B',
    explanation: 'The antidote for the Macho attitude is "Taking chances is foolish." This counters the urge to take unnecessary risks to prove oneself or impress others.',
    hint: 'If someone takes risks to show off, what mindset would counter that?',
    figureRef: null,
    difficulty: 'easy',
    tags: ['hazardous attitudes', 'macho', 'antidotes']
  },
  {
    id: 'hf016',
    category: 'humanFactors',
    question: 'What is the antidote when a pilot has a hazardous attitude, such as "Resignation"?',
    options: [
      { id: 'A', text: 'What is the use.' },
      { id: 'B', text: 'Someone else is responsible.' },
      { id: 'C', text: 'I am not helpless.' }
    ],
    correctAnswer: 'C',
    explanation: 'The antidote for Resignation is "I am not helpless. I can make a difference." This counters the attitude that events are beyond one\'s control and nothing can be done.',
    hint: 'If someone feels helpless and gives up, what empowering thought would help?',
    figureRef: null,
    difficulty: 'easy',
    tags: ['hazardous attitudes', 'resignation', 'antidotes']
  },
  {
    id: 'hf017',
    category: 'humanFactors',
    question: 'Hazardous attitudes occur to every pilot to some degree at some time. What are some of these hazardous attitudes?',
    options: [
      { id: 'A', text: 'Poor risk management and lack of stress management.' },
      { id: 'B', text: 'Antiauthority, impulsivity, macho, resignation, and invulnerability.' },
      { id: 'C', text: 'Poor situational awareness, snap judgments, and lack of a decision making process.' }
    ],
    correctAnswer: 'B',
    explanation: 'The five hazardous attitudes identified by the FAA are: Antiauthority ("Don\'t tell me"), Impulsivity ("Do it quickly"), Macho ("I can do it"), Resignation ("What\'s the use"), and Invulnerability ("It won\'t happen to me").',
    hint: 'The FAA identifies five specific hazardous attitudes - which answer lists them?',
    figureRef: null,
    difficulty: 'easy',
    tags: ['hazardous attitudes', 'ADM']
  },
  {
    id: 'hf018',
    category: 'humanFactors',
    question: 'In the aeronautical decision making (ADM) process, what is the first step in neutralizing a hazardous attitude?',
    options: [
      { id: 'A', text: 'Making a rational judgment.' },
      { id: 'B', text: 'Recognizing hazardous thoughts.' },
      { id: 'C', text: 'Recognizing the invulnerability of the situation.' }
    ],
    correctAnswer: 'B',
    explanation: 'The first step in neutralizing a hazardous attitude is recognizing the hazardous thought. You cannot correct a problem attitude until you first identify and acknowledge it.',
    hint: 'Before you can fix a problem, what must you do first?',
    figureRef: null,
    difficulty: 'easy',
    tags: ['ADM', 'hazardous attitudes']
  },
  {
    id: 'hf019',
    category: 'humanFactors',
    question: 'Risk management, as part of the aeronautical decision making (ADM) process, relies on which features to reduce the risks associated with each flight?',
    options: [
      { id: 'A', text: 'Application of stress management and risk element procedures.' },
      { id: 'B', text: 'Situational awareness, problem recognition, and good judgment.' },
      { id: 'C', text: 'The mental process of analyzing all information in a particular situation and making a timely decision on what action to take.' }
    ],
    correctAnswer: 'B',
    explanation: 'Risk management relies on situational awareness (knowing what\'s happening around you), problem recognition (identifying potential hazards), and good judgment (making sound decisions) to reduce flight risks.',
    hint: 'What three key features help pilots recognize and manage risks?',
    figureRef: null,
    difficulty: 'medium',
    tags: ['risk management', 'ADM', 'situational awareness']
  },
  {
    id: 'hf020',
    category: 'humanFactors',
    question: 'When a stressful situation is encountered in flight, an abnormal increase in the volume of air breathed in and out can cause a condition known as',
    options: [
      { id: 'A', text: 'hyperventilation.' },
      { id: 'B', text: 'aerosinusitis.' },
      { id: 'C', text: 'aerotitis.' }
    ],
    correctAnswer: 'A',
    explanation: 'Stress can trigger hyperventilation, which is an abnormal increase in the volume of air breathed in and out. This causes excessive loss of carbon dioxide and can result in lightheadedness, tingling, and impaired judgment.',
    hint: 'What breathing-related condition can stress cause?',
    figureRef: null,
    difficulty: 'easy',
    tags: ['hyperventilation', 'stress', 'physiology']
  },
  {
    id: 'hf021',
    category: 'humanFactors',
    question: 'A pilot experiencing the effects of hyperventilation should be able to restore the proper carbon dioxide level in the body by',
    options: [
      { id: 'A', text: 'slowing the breathing rate, breathing into a paper bag, or talking aloud.' },
      { id: 'B', text: 'breathing spontaneously and deeply or gaining mental control of the situation.' },
      { id: 'C', text: 'increasing the breathing rate in order to increase lung ventilation.' }
    ],
    correctAnswer: 'A',
    explanation: 'To restore proper carbon dioxide levels during hyperventilation: slow your breathing rate, breathe into a paper bag (to rebreathe CO2), or talk aloud (which naturally slows and regulates breathing).',
    hint: 'The goal is to restore carbon dioxide levels - how can you do that?',
    figureRef: null,
    difficulty: 'easy',
    tags: ['hyperventilation', 'treatment', 'physiology']
  },
  {
    id: 'hf022',
    category: 'humanFactors',
    question: 'A resource you can use to find out detailed information about the effects of alcohol and legal and illegal drugs is',
    options: [
      { id: 'A', text: 'NOTAMs.' },
      { id: 'B', text: 'the PHAK (Pilot\'s Handbook of Aeronautical Knowledge).' },
      { id: 'C', text: 'a Pilot\'s Operating Handbook.' }
    ],
    correctAnswer: 'B',
    explanation: 'The Pilot\'s Handbook of Aeronautical Knowledge (PHAK) contains detailed information about the effects of alcohol and drugs on pilot performance, along with other aeromedical factors.',
    hint: 'Which FAA publication covers general aeronautical knowledge including medical factors?',
    figureRef: null,
    difficulty: 'easy',
    tags: ['resources', 'PHAK', 'alcohol', 'drugs']
  },
  {
    id: 'hf023',
    category: 'humanFactors',
    question: 'When using the PAVE checklist, you want to evaluate the risks involving the',
    options: [
      { id: 'A', text: 'Passengers, Aviation, enVironment, and External pressures.' },
      { id: 'B', text: 'Pilot, Aircraft, enVironment, and Emergency situations.' },
      { id: 'C', text: 'Pilot, Aircraft, enVironment, and External pressures.' }
    ],
    correctAnswer: 'C',
    explanation: 'PAVE stands for Pilot (are you fit to fly?), Aircraft (is the aircraft airworthy?), enVironment (weather, terrain, airspace), and External pressures (time constraints, passenger expectations). This checklist helps assess pre-flight risks.',
    hint: 'PAVE is an acronym - what does each letter stand for?',
    figureRef: null,
    difficulty: 'easy',
    tags: ['PAVE', 'risk management', 'checklists']
  },
  {
    id: 'hf024',
    category: 'humanFactors',
    question: 'Which category of PAVE can cause pilots to ignore all of the other risk categories?',
    options: [
      { id: 'A', text: 'themselves, the pilot.' },
      { id: 'B', text: 'The external pressures of the flight.' },
      { id: 'C', text: 'The risks involving the environment.' }
    ],
    correctAnswer: 'B',
    explanation: 'External pressures (such as deadlines, customer expectations, or "get-there-itis") can cause pilots to ignore all other risk categories. The pressure to complete a mission can override good judgment about pilot fitness, aircraft condition, and environmental hazards.',
    hint: 'What type of pressure might make a pilot ignore safety concerns?',
    figureRef: null,
    difficulty: 'medium',
    tags: ['PAVE', 'external pressures', 'risk management']
  },
  {
    id: 'hf025',
    category: 'humanFactors',
    question: 'You can use the IMSAFE checklist to',
    options: [
      { id: 'A', text: 'evaluate your condition as the remote pilot before a flight.' },
      { id: 'B', text: 'preflight your sUAS.' },
      { id: 'C', text: 'check for weather conditions.' }
    ],
    correctAnswer: 'A',
    explanation: 'IMSAFE is a personal checklist to evaluate YOUR fitness to fly: Illness, Medication, Stress, Alcohol, Fatigue, and Emotion (or Eating). It helps pilots assess their physical and mental readiness.',
    hint: 'IMSAFE deals with the "P" (Pilot) in PAVE - what does it evaluate?',
    figureRef: null,
    difficulty: 'easy',
    tags: ['IMSAFE', 'fitness', 'checklists']
  },
  {
    id: 'hf026',
    category: 'humanFactors',
    question: 'Use the acronym IMSAFE before operating your sUAS to',
    options: [
      { id: 'A', text: 'make sure you meet all regulatory requirements.' },
      { id: 'B', text: 'preflight your sUAS.' },
      { id: 'C', text: 'make sure you as the remote pilot are fit for the flight.' }
    ],
    correctAnswer: 'C',
    explanation: 'IMSAFE (Illness, Medication, Stress, Alcohol, Fatigue, Emotion/Eating) is used to evaluate the pilot\'s fitness to fly. It ensures you are physically and mentally prepared to safely operate the aircraft.',
    hint: 'IMSAFE focuses on pilot fitness, not equipment or regulations.',
    figureRef: null,
    difficulty: 'easy',
    tags: ['IMSAFE', 'fitness', 'checklists']
  },
  {
    id: 'hf027',
    category: 'humanFactors',
    question: 'The CARE attention scan can be used',
    options: [
      { id: 'A', text: 'before starting operations to evaluate the risks.' },
      { id: 'B', text: 'during operations to maintain situational awareness.' },
      { id: 'C', text: 'at the end of operations to debrief the crew.' }
    ],
    correctAnswer: 'B',
    explanation: 'The CARE attention scan (Consequences, Alternatives, Reality, External factors) is used DURING operations to maintain situational awareness and continuously evaluate the safety of the flight.',
    hint: 'When is situational awareness most important - before, during, or after flight?',
    figureRef: null,
    difficulty: 'medium',
    tags: ['CARE', 'situational awareness', 'checklists']
  },
  {
    id: 'hf028',
    category: 'humanFactors',
    question: 'The CARE attention scan helps ensure that during operations you',
    options: [
      { id: 'A', text: 'always have an alternative action available.' },
      { id: 'B', text: 'have all required documentation available.' },
      { id: 'C', text: 'have a positive attitude and hope for the best when things go wrong.' }
    ],
    correctAnswer: 'A',
    explanation: 'CARE (Consequences, Alternatives, Reality, External factors) helps ensure you always have an alternative action available. The "A" specifically reminds pilots to consider alternative courses of action during flight.',
    hint: 'The "A" in CARE stands for Alternatives - why is that important?',
    figureRef: null,
    difficulty: 'medium',
    tags: ['CARE', 'alternatives', 'situational awareness']
  },
  {
    id: 'hf029',
    category: 'humanFactors',
    question: 'After having dinner and wine, your client asks you to go outside to demonstrate the small UAs capabilities. You must',
    options: [
      { id: 'A', text: 'pass a self-administered sobriety test before operating a small UA.' },
      { id: 'B', text: 'not operate a small UA within 8 hours of consuming any alcoholic beverage.' },
      { id: 'C', text: 'ensure that your visual observer has not consumed any alcoholic beverage in the previous 12 hours.' }
    ],
    correctAnswer: 'B',
    explanation: 'Per 14 CFR 107.27, no person may operate a small UAS with a blood alcohol concentration of 0.04% or greater, and you must not operate within 8 hours of consuming any alcoholic beverage. This is the "8 hours bottle to throttle" rule.',
    hint: 'What is the FAA\'s "bottle to throttle" rule for alcohol?',
    figureRef: null,
    difficulty: 'easy',
    tags: ['alcohol', 'regulations', '8 hours']
  },
  {
    id: 'hf030',
    category: 'humanFactors',
    question: 'When a remote pilot-in-command and a visual observer define their roles and responsibilities prior to and during the operation of a small UA, this is a good use of',
    options: [
      { id: 'A', text: 'Crew Resource Management.' },
      { id: 'B', text: 'Authoritarian Resource Management.' },
      { id: 'C', text: 'Single Pilot Resource Management.' }
    ],
    correctAnswer: 'A',
    explanation: 'Defining roles and responsibilities between the remote PIC and visual observer is a good use of Crew Resource Management (CRM). CRM involves the effective use of all available resources, including coordination between crew members.',
    hint: 'Working together as a crew and defining roles falls under which management concept?',
    figureRef: null,
    difficulty: 'easy',
    tags: ['CRM', 'visual observer', 'teamwork']
  }
];

export default humanFactorsQuestions;
