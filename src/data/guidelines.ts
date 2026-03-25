export interface StaticGuideline {
  id: string;
  title: string;
  source: 'ASA' | 'ESAIC' | 'ESICM' | 'OAA' | 'RCOG' | 'SOAP';
  year: number;
  category: string;
  summary: string;
}

export const STATIC_GUIDELINES: StaticGuideline[] = [
  {
    id: 'asa-difficult-airway',
    title: 'Management of the Difficult Airway',
    source: 'ASA',
    year: 2022,
    category: 'Airway',
    summary: 'Focuses on pre-procedure assessment, preparation, and management of the difficult airway. Key updates include emphasis on oxygenation throughout the process, use of videolaryngoscopy as a primary tool, and clear "exit" strategies for failed intubation.'
  },
  {
    id: 'esaic-preop-eval',
    title: 'Pre-operative Evaluation of Adults',
    source: 'ESAIC',
    year: 2018,
    category: 'Pre-op',
    summary: 'Comprehensive guide on assessing cardiovascular risk, pulmonary risk, and laboratory testing. Recommends against routine testing in healthy patients and emphasizes functional capacity assessment.'
  },
  {
    id: 'esicm-sepsis-2026',
    title: 'Surviving Sepsis Campaign 2026',
    source: 'ESICM',
    year: 2026,
    category: 'ICU',
    summary: 'Latest consensus on sepsis management. Key updates: 1. Personalized fluid resuscitation based on dynamic responsiveness (PLR, stroke volume variation). 2. Ultra-early vasopressor initiation (within 1h) via peripheral access if central line delayed. 3. Emphasis on "Sepsis Phenotypes" to tailor antibiotic and steroid therapy. 4. Balanced crystalloids strongly preferred over saline. 5. Target MAP 65-70 mmHg, but consider higher in chronic hypertensives.'
  },
  {
    id: 'esaic-postop-delirium',
    title: 'Postoperative Delirium Guidelines',
    source: 'ESAIC',
    year: 2017,
    category: 'Post-op',
    summary: 'Focuses on screening, prevention, and treatment. Recommends multi-modal approaches, avoiding benzodiazepines in elderly, and ensuring adequate pain control and early mobilization.'
  },
  {
    id: 'asa-fasting',
    title: 'Preoperative Fasting Guidelines',
    source: 'ASA',
    year: 2017,
    category: 'Pre-op',
    summary: 'Clear liquids (2h), Breast milk (4h), Infant formula (6h), Light meal (6h), Fatty/Fried meal (8h). Recent updates allow for clear liquids up to 2 hours before elective procedures.'
  },
  {
    id: 'esicm-ards',
    title: 'Clinical Practice Guideline: ARDS',
    source: 'ESICM',
    year: 2023,
    category: 'ICU',
    summary: 'Strong recommendations for low tidal volume ventilation (6mL/kg PBW), prone positioning for >16h/day in severe ARDS, and conservative fluid management.'
  },
  {
    id: 'asa-osa-2023',
    title: 'Perioperative Management of Patients with Obstructive Sleep Apnea',
    source: 'ASA',
    year: 2023,
    category: 'Pre-op',
    summary: 'Updated recommendations for screening (STOP-BANG), perioperative CPAP use, and multimodal analgesia to minimize opioid-induced respiratory depression. Emphasizes monitoring and post-discharge criteria.'
  },
  {
    id: 'esaic-nmb-2023',
    title: 'Perioperative Management of Neuromuscular Blockade',
    source: 'ESAIC',
    year: 2023,
    category: 'Intra-op',
    summary: 'Strong recommendation for quantitative neuromuscular monitoring (TOF ratio > 0.9) before extubation. Recommends Sugammadex for rapid reversal of deep or moderate rocuronium/vecuronium block.'
  },
  {
    id: 'esicm-brain-injury-2022',
    title: 'Management of Patients with Acute Brain Injury',
    source: 'ESICM',
    year: 2022,
    category: 'ICU',
    summary: 'Focuses on tiered management of intracranial hypertension, target MAP for cerebral perfusion pressure (60-70 mmHg), and avoiding prophylactic hyperventilation.'
  },
  {
    id: 'asa-obstetric-2020',
    title: 'Practice Guidelines for Obstetric Anesthesia',
    source: 'ASA',
    year: 2020,
    category: 'Obstetrics',
    summary: 'Comprehensive guide on neuraxial analgesia for labor, management of failed intubation in pregnancy, and prevention/treatment of spinal-induced hypotension using phenylephrine.'
  },
  {
    id: 'esaic-bleeding-2022',
    title: 'Management of Severe Perioperative Bleeding',
    source: 'ESAIC',
    year: 2022,
    category: 'Intra-op',
    summary: 'Emphasizes goal-directed therapy using viscoelastic tests (TEG/ROTEM), early use of tranexamic acid, and maintaining normothermia and physiological pH/calcium levels.'
  },
  {
    id: 'esicm-arf-2023',
    title: 'Management of Acute Respiratory Failure in ICU',
    source: 'ESICM',
    year: 2023,
    category: 'ICU',
    summary: 'Recommendations for non-invasive ventilation (NIV) and high-flow nasal oxygen (HFNO) in various etiologies of ARF. Highlights the importance of monitoring for NIV failure and timely intubation.'
  },
  {
    id: 'oaa-difficult-airway-2015',
    title: 'Obstetric Difficult Airway Guidelines',
    source: 'OAA',
    year: 2015,
    category: 'Obstetrics',
    summary: 'Joint OAA/DAS guidelines for the management of difficult and failed intubation in obstetrics. Emphasizes the use of supraglottic airway devices (SADs) and early decision-making for front-of-neck access.'
  },
  {
    id: 'rcog-pph-2016',
    title: 'Prevention and Management of Postpartum Haemorrhage',
    source: 'RCOG',
    year: 2016,
    category: 'Obstetrics',
    summary: 'Comprehensive management of PPH, including the use of uterotonics (oxytocin, ergometrine, carboprost), tranexamic acid, and surgical interventions like B-Lynch sutures and hysterectomy.'
  },
  {
    id: 'soap-pas-2023',
    title: 'Anesthesia for Placenta Accreta Spectrum (PAS)',
    source: 'SOAP',
    year: 2023,
    category: 'Obstetrics',
    summary: 'Consensus statement on the multidisciplinary management of PAS. Recommends specialized centers, preoperative planning, and strategies for massive transfusion and hemorrhage control.'
  }
];
