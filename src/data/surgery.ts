import { SurgerySpecialty } from '../types';

export const SURGERY_DATA: SurgerySpecialty[] = [
  {
    id: 'general-surgery',
    name: 'General Surgery',
    generalConsiderations: {
      preOp: [
        'Confirm NPO status (6h solids, 2h clear fluids)',
        'Review recent bloods (FBC, U&E, LFTs if indicated)',
        'Assess for previous abdominal surgeries (adhesion risk)',
        'Confirm consent and site marking'
      ],
      intraOp: [
        'Standard monitoring (ASA 1-2)',
        'Consider NG tube for gastric decompression',
        'Monitor for pneumoperitoneum effects (increased airway pressure, decreased venous return)',
        'Maintain normothermia'
      ],
      postOp: [
        'Multimodal analgesia (Paracetamol, NSAIDs, Opioids)',
        'PONV prophylaxis',
        'Early mobilization',
        'Monitor for port-site bleeding or visceral injury'
      ]
    },
    procedures: [
      {
        id: 'lap-chole',
        name: 'Laparoscopic Cholecystectomy',
        guide: [
          { title: 'Positioning', description: 'Supine or reverse Trendelenburg with left tilt.' },
          { title: 'Access', description: 'Umbilical port for camera, subxiphoid and right subcostal ports for instruments.' },
          { title: 'Dissection', description: 'Identify Calot\'s triangle (cystic duct, cystic artery, and liver edge).' },
          { title: 'Clipping', description: 'Clip and divide cystic duct and artery.' },
          { title: 'Removal', description: 'Dissect gallbladder from liver bed and remove via umbilical port.' }
        ],
        anestheticConsiderations: [
          'General anesthesia with endotracheal intubation',
          'Muscle relaxation for optimal surgical conditions',
          'Monitor for CO2 embolism (rare but critical)',
          'Manage shoulder-tip pain (referred from diaphragm irritation)'
        ],
        antibioticProphylaxis: {
          drug: 'Cefuroxime',
          dosage: '1.5g IV',
          timing: 'At induction (within 60 mins of incision)',
          alternatives: 'Clindamycin 600mg IV if penicillin allergic'
        },
        complications: {
          surgical: ['Bile duct injury', 'Bleeding', 'Bowel perforation', 'Infection'],
          anesthetic: ['PONV', 'Aspiration', 'Pneumothorax (rare)', 'CO2 retention']
        },
        management: {
          preOp: ['Review LFTs and ultrasound results', 'Check for jaundice'],
          intraOp: ['Maintain stable hemodynamics during insufflation', 'Ensure adequate relaxation'],
          postOp: ['Regular analgesia', 'Discharge planning for day-case']
        }
      },
      {
        id: 'appendectomy',
        name: 'Appendectomy (Laparoscopic/Open)',
        guide: [
          { title: 'Approach', description: 'Laparoscopic (3 ports) or Open (McBurney\'s/Lanz incision).' },
          { title: 'Identification', description: 'Locate the appendix at the base of the cecum.' },
          { title: 'Ligation', description: 'Ligate the mesoappendix and the base of the appendix.' },
          { title: 'Removal', description: 'Remove the appendix and irrigate if perforated.' }
        ],
        anestheticConsiderations: [
          'General anesthesia with RSI if suspected peritonitis or full stomach',
          'Adequate hydration (often dehydrated due to vomiting/pain)',
          'Pain management (TAP block or local infiltration)'
        ],
        antibioticProphylaxis: {
          drug: 'Metronidazole + Cefuroxime',
          dosage: '500mg + 1.5g IV',
          timing: 'At induction',
          alternatives: 'Gentamicin + Clindamycin'
        },
        complications: {
          surgical: ['Wound infection', 'Intra-abdominal abscess', 'Stump leak'],
          anesthetic: ['Aspiration risk', 'Sepsis-related hypotension']
        },
        management: {
          preOp: ['Fluid resuscitation', 'Analgesia (morphine titration)'],
          intraOp: ['Monitor for septic shock', 'Maintain normothermia'],
          postOp: ['Antibiotic course if perforated', 'Monitor for return of bowel function']
        }
      },
      {
        id: 'inguinal-hernia',
        name: 'Inguinal Hernia Repair (Open/Laparoscopic)',
        guide: [
          { title: 'Incision', description: 'Open (groin incision) or Laparoscopic (3 ports).' },
          { title: 'Reduction', description: 'Reduction of the hernia sac and its contents.' },
          { title: 'Mesh Placement', description: 'Placement of a synthetic mesh to reinforce the abdominal wall.' },
          { title: 'Closure', description: 'Layered closure of the abdominal wall and skin.' }
        ],
        anestheticConsiderations: [
          'General anesthesia or Spinal/Local with sedation',
          'Manage post-operative pain (Ilioinguinal/Iliohypogastric nerve block)',
          'Monitor for urinary retention (especially after spinal)'
        ],
        antibioticProphylaxis: {
          drug: 'Cefuroxime',
          dosage: '1.5g IV',
          timing: 'At induction',
          alternatives: 'Clindamycin'
        },
        complications: {
          surgical: ['Chronic pain', 'Recurrence', 'Hematoma', 'Infection'],
          anesthetic: ['Urinary retention', 'Post-spinal headache (if spinal used)']
        },
        management: {
          preOp: ['Review for chronic cough or constipation', 'Confirm site'],
          intraOp: ['Ensure adequate local infiltration if awake', 'Monitor for bradycardia during sac traction'],
          postOp: ['Early mobilization', 'Scrotal support if needed']
        }
      },
      {
        id: 'mastectomy',
        name: 'Mastectomy (Simple/Radical)',
        guide: [
          { title: 'Incision', description: 'Elliptical incision including the nipple-areola complex.' },
          { title: 'Dissection', description: 'Dissection of breast tissue from the pectoralis major muscle.' },
          { title: 'Axilla', description: 'Sentinel lymph node biopsy or axillary clearance if indicated.' },
          { title: 'Closure', description: 'Hemostasis and layered closure with suction drains.' }
        ],
        anestheticConsiderations: [
          'General anesthesia with LMA or ETT',
          'Avoid IV access on the ipsilateral arm',
          'Consider PECS block or Paravertebral block for analgesia',
          'Smooth emergence to prevent hematoma'
        ],
        antibioticProphylaxis: {
          drug: 'Cefazolin',
          dosage: '2g IV',
          timing: 'At induction',
          alternatives: 'Clindamycin'
        },
        complications: {
          surgical: ['Seroma', 'Hematoma', 'Lymphedema', 'Skin flap necrosis'],
          anesthetic: ['PONV', 'Chronic post-mastectomy pain syndrome']
        },
        management: {
          preOp: ['Psychological support', 'Review imaging and pathology'],
          intraOp: ['Maintain normothermia', 'Monitor drain output'],
          postOp: ['Early mobilization of the arm', 'Drain management instructions']
        }
      },
      {
        id: 'hemicolectomy',
        name: 'Hemicolectomy (Right/Left)',
        guide: [
          { title: 'Access', description: 'Laparoscopic (4-5 ports) or Midline laparotomy.' },
          { title: 'Mobilization', description: 'Mobilization of the colon and division of lateral attachments.' },
          { title: 'Vascular Ligation', description: 'Identification and ligation of the mesenteric vessels at their origin.' },
          { title: 'Resection', description: 'Resection of the affected bowel segment with adequate margins.' },
          { title: 'Anastomosis', description: 'Creation of a primary anastomosis (stapled or hand-sewn).' }
        ],
        anestheticConsiderations: [
          'General anesthesia with ETT',
          'Consider Epidural or TAP block for post-op analgesia',
          'Goal-directed fluid therapy (avoid fluid overload)',
          'Maintain normothermia'
        ],
        antibioticProphylaxis: {
          drug: 'Cefuroxime + Metronidazole',
          dosage: '1.5g + 500mg IV',
          timing: 'At induction',
          alternatives: 'Gentamicin + Clindamycin'
        },
        complications: {
          surgical: ['Anastomotic leak', 'Bleeding', 'Ureteric injury', 'Ileus'],
          anesthetic: ['PONV', 'Aspiration risk (if obstructed)', 'Fluid imbalance']
        },
        management: {
          preOp: ['Mechanical bowel prep (if indicated)', 'Review CT staging'],
          intraOp: ['Maintain stable MAP', 'Monitor for blood loss'],
          postOp: ['ERAS protocol', 'Early mobilization', 'Monitor for return of bowel function']
        }
      },
      {
        id: 'gastrectomy',
        name: 'Gastrectomy (Total/Partial)',
        guide: [
          { title: 'Access', description: 'Upper midline laparotomy or laparoscopic approach.' },
          { title: 'Mobilization', description: 'Mobilization of the stomach and division of the omentum.' },
          { title: 'Vascular Ligation', description: 'Ligation of the gastric and gastroepiploic arteries.' },
          { title: 'Resection', description: 'Resection of the stomach with lymphadenectomy (D1/D2).' },
          { title: 'Reconstruction', description: 'Roux-en-Y or Billroth II reconstruction.' }
        ],
        anestheticConsiderations: [
          'General anesthesia with RSI (high risk of aspiration)',
          'Thoracic epidural for analgesia',
          'Invasive monitoring (Arterial line)',
          'Manage nutritional deficiencies (Anemia, B12)'
        ],
        antibioticProphylaxis: {
          drug: 'Cefuroxime',
          dosage: '1.5g IV',
          timing: 'At induction',
          alternatives: 'Clindamycin'
        },
        complications: {
          surgical: ['Anastomotic leak', 'Dumping syndrome', 'Bleeding', 'Vitamin deficiencies'],
          anesthetic: ['Aspiration', 'Pneumonia', 'Pain management challenges']
        },
        management: {
          preOp: ['Optimize nutritional status', 'Review staging'],
          intraOp: ['Maintain stable hemodynamics', 'Ensure adequate relaxation'],
          postOp: ['Jejunostomy feeding (if applicable)', 'Monitor for leak (tachycardia/pain)']
        }
      }
    ]
  },
  {
    id: 'orthopedics',
    name: 'Orthopedic Surgery',
    generalConsiderations: {
      preOp: [
        'Review cardiac and respiratory status (often elderly patients)',
        'Check for previous joint replacements (infection risk)',
        'Review anticoagulation status',
        'Confirm consent and site marking'
      ],
      intraOp: [
        'Consider regional anesthesia (Spinal/Epidural) + Sedation',
        'Monitor for Bone Cement Implantation Syndrome (BCIS)',
        'Maintain normothermia (forced-air warming)',
        'Monitor blood loss (may be significant)'
      ],
      postOp: [
        'VTE prophylaxis (LMWH, Aspirin, or mechanical)',
        'Effective pain management (Regional blocks, PCA)',
        'Early mobilization (Physiotherapy)',
        'Monitor for neurovascular compromise'
      ]
    },
    procedures: [
      {
        id: 'thr',
        name: 'Total Hip Replacement (THR)',
        guide: [
          { title: 'Approach', description: 'Posterior, lateral, or anterior approach to the hip joint.' },
          { title: 'Preparation', description: 'Dislocate the hip and resect the femoral head.' },
          { title: 'Acetabulum', description: 'Ream the acetabulum and insert the cup component.' },
          { title: 'Femur', description: 'Prepare the femoral canal and insert the stem and head.' },
          { title: 'Reduction', description: 'Reduce the hip and check stability and leg length.' }
        ],
        anestheticConsiderations: [
          'Spinal anesthesia is often preferred (decreased blood loss, VTE risk)',
          'Monitor for BCIS during femoral component insertion',
          'Manage blood loss (consider Tranexamic Acid)',
          'Positioning (lateral decubitus) - protect pressure points'
        ],
        antibioticProphylaxis: {
          drug: 'Flucloxacillin or Cefuroxime',
          dosage: '2g or 1.5g IV',
          timing: 'At induction',
          alternatives: 'Vancomycin or Teicoplanin if MRSA risk'
        },
        complications: {
          surgical: ['Dislocation', 'Infection', 'Fracture', 'Nerve injury (Sciatic)'],
          anesthetic: ['VTE (PE/DVT)', 'BCIS', 'Hypotension', 'Urinary retention']
        },
        management: {
          preOp: ['Review pre-admission clinic notes', 'Optimize chronic conditions'],
          intraOp: ['Maintain MAP > 65mmHg', 'Monitor for sudden drop in EtCO2 (BCIS)'],
          postOp: ['Check hemoglobin levels', 'Ensure adequate analgesia for PT']
        }
      },
      {
        id: 'tkr',
        name: 'Total Knee Replacement (TKR)',
        guide: [
          { title: 'Incision', description: 'Midline skin incision and medial parapatellar arthrotomy.' },
          { title: 'Bone Cuts', description: 'Precise resection of the distal femur and proximal tibia.' },
          { title: 'Trialing', description: 'Insertion of trial components to check alignment and stability.' },
          { title: 'Cementing', description: 'Cementing of the final femoral, tibial, and patellar components.' },
          { title: 'Closure', description: 'Layered closure and application of a compressive dressing.' }
        ],
        anestheticConsiderations: [
          'Spinal anesthesia is preferred',
          'Adductor canal block or Femoral nerve block for analgesia',
          'Monitor for BCIS during cementing',
          'Tourniquet management (monitor time and pressure)'
        ],
        antibioticProphylaxis: {
          drug: 'Flucloxacillin or Cefazolin',
          dosage: '2g IV',
          timing: 'At induction',
          alternatives: 'Vancomycin'
        },
        complications: {
          surgical: ['Infection', 'Stiffness', 'Periprosthetic fracture', 'Nerve injury'],
          anesthetic: ['VTE', 'BCIS', 'Tourniquet-related pain/injury']
        },
        management: {
          preOp: ['Assess range of motion', 'Review dental health (infection risk)'],
          intraOp: ['Maintain stable hemodynamics', 'Monitor tourniquet time'],
          postOp: ['Continuous Passive Motion (CPM)', 'Aggressive VTE prophylaxis']
        }
      },
      {
        id: 'orif-ankle',
        name: 'ORIF Ankle Fracture',
        guide: [
          { title: 'Incision', description: 'Lateral and/or medial incisions over the malleoli.' },
          { title: 'Reduction', description: 'Anatomic reduction of the fracture fragments.' },
          { title: 'Fixation', description: 'Stabilization with plates and screws.' },
          { title: 'Syndesmosis', description: 'Check for syndesmotic injury and fix if necessary.' },
          { title: 'Closure', description: 'Layered closure and application of a backslab.' }
        ],
        anestheticConsiderations: [
          'Spinal anesthesia or GA',
          'Popliteal and Saphenous nerve blocks for excellent analgesia',
          'Positioning (supine with sandbag under hip)',
          'Monitor for compartment syndrome'
        ],
        antibioticProphylaxis: {
          drug: 'Cefazolin',
          dosage: '2g IV',
          timing: 'At induction',
          alternatives: 'Clindamycin'
        },
        complications: {
          surgical: ['Wound breakdown', 'Infection', 'Non-union', 'Hardware irritation'],
          anesthetic: ['VTE', 'Nerve injury from block']
        },
        management: {
          preOp: ['Elevation and ice to reduce swelling', 'Check neurovascular status'],
          intraOp: ['Ensure anatomic reduction', 'Check syndesmosis stability'],
          postOp: ['Non-weight bearing instructions', 'Monitor for compartment syndrome']
        }
      },
      {
        id: 'acl-reconstruction',
        name: 'ACL Reconstruction',
        guide: [
          { title: 'Harvesting', description: 'Harvesting of the graft (Hamstring, Patellar tendon, or Quadriceps).' },
          { title: 'Arthroscopy', description: 'Diagnostic arthroscopy and debridement of the ACL stump.' },
          { title: 'Tunneling', description: 'Creation of femoral and tibial tunnels.' },
          { title: 'Graft Passage', description: 'Passing the graft through the tunnels and securing it.' },
          { title: 'Testing', description: 'Checking graft tension and knee stability.' }
        ],
        anestheticConsiderations: [
          'GA or Spinal',
          'Femoral nerve block or Adductor canal block',
          'Tourniquet management',
          'Day-case procedure usually'
        ],
        antibioticProphylaxis: {
          drug: 'Cefazolin',
          dosage: '2g IV',
          timing: 'At induction',
          alternatives: 'Clindamycin'
        },
        complications: {
          surgical: ['Graft failure', 'Arthrofibrosis', 'Infection', 'Nerve injury (Saphenous)'],
          anesthetic: ['VTE', 'PONV', 'Block-related weakness']
        },
        management: {
          preOp: ['Assess pre-op range of motion', 'Confirm graft choice'],
          intraOp: ['Maintain stable anesthesia', 'Monitor tourniquet time'],
          postOp: ['Early weight bearing (as tolerated)', 'Physiotherapy']
        }
      },
      {
        id: 'shoulder-arthroscopy',
        name: 'Shoulder Arthroscopy (Decompression/Repair)',
        guide: [
          { title: 'Positioning', description: 'Beach chair or Lateral decubitus position.' },
          { title: 'Access', description: 'Posterior and anterior portals for camera and instruments.' },
          { title: 'Debridement', description: 'Subacromial decompression or labral/rotator cuff repair.' },
          { title: 'Closure', description: 'Skin closure and application of a sling.' }
        ],
        anestheticConsiderations: [
          'GA + Interscalene block (gold standard for analgesia)',
          'Monitor for complications of interscalene block (Phrenic nerve palsy)',
          'Positioning (Beach chair) - monitor for cerebral hypoperfusion',
          'Manage irrigation fluid absorption'
        ],
        antibioticProphylaxis: {
          drug: 'Cefazolin',
          dosage: '2g IV',
          timing: 'At induction',
          alternatives: 'Clindamycin'
        },
        complications: {
          surgical: ['Stiffness (Frozen shoulder)', 'Nerve injury', 'Infection', 'Hardware failure'],
          anesthetic: ['Phrenic nerve palsy', 'Cerebral hypoperfusion (in beach chair)', 'Pneumothorax (rare)']
        },
        management: {
          preOp: ['Assess neck mobility', 'Check for existing respiratory disease'],
          intraOp: ['Maintain BP (avoid hypotension in beach chair)', 'Monitor for surgical emphysema'],
          postOp: ['Sling management', 'Monitor for block resolution']
        }
      }
    ]
  },
  {
    id: 'urology',
    name: 'Urology',
    generalConsiderations: {
      preOp: [
        'Review renal function (U&Es, GFR)',
        'Check for UTI (urine dip/culture)',
        'Assess anticoagulation status (high bleeding risk in some procedures)',
        'Confirm NPO status'
      ],
      intraOp: [
        'Standard monitoring',
        'Monitor for TURP syndrome (hyponatremia, fluid overload)',
        'Positioning (Lithotomy) - protect nerves (Peroneal)',
        'Maintain normothermia'
      ],
      postOp: [
        'Monitor urine output and color (hematuria)',
        'Manage bladder spasms (Anticholinergics)',
        'VTE prophylaxis',
        'Monitor for post-obstructive diuresis'
      ]
    },
    procedures: [
      {
        id: 'turp',
        name: 'Transurethral Resection of Prostate (TURP)',
        guide: [
          { title: 'Access', description: 'Resectoscope inserted via the urethra.' },
          { title: 'Resection', description: 'Prostatic tissue is resected using an electrical loop.' },
          { title: 'Irrigation', description: 'Continuous irrigation (Glycine or Saline) to maintain visibility.' },
          { title: 'Hemostasis', description: 'Coagulation of bleeding points in the prostatic bed.' },
          { title: 'Catheterization', description: 'Insertion of a 3-way catheter for continuous bladder irrigation.' }
        ],
        anestheticConsiderations: [
          'Spinal anesthesia (T10 level) is preferred (allows early detection of TURP syndrome)',
          'Monitor for signs of TURP syndrome (confusion, nausea, bradycardia, hypertension)',
          'Monitor for bladder perforation (referred shoulder pain if under spinal)',
          'Manage fluid absorption'
        ],
        antibioticProphylaxis: {
          drug: 'Gentamicin or Cefuroxime',
          dosage: '120mg or 1.5g IV',
          timing: 'At induction',
          alternatives: 'Ciprofloxacin'
        },
        complications: {
          surgical: ['Hemorrhage', 'Bladder perforation', 'Urethral stricture', 'Incontinence'],
          anesthetic: ['TURP Syndrome', 'Hypothermia', 'Spinal-related hypotension']
        },
        management: {
          preOp: ['Check electrolytes (baseline Sodium)', 'Review prostate size'],
          intraOp: ['Limit resection time (< 60 mins)', 'Monitor mental status if awake'],
          postOp: ['Monitor Sodium levels', 'Ensure continuous irrigation is patent']
        }
      },
      {
        id: 'nephrectomy',
        name: 'Radical Nephrectomy (Laparoscopic/Open)',
        guide: [
          { title: 'Access', description: 'Laparoscopic (3-4 ports) or Flank/Midline incision.' },
          { title: 'Mobilization', description: 'Mobilization of the colon and identification of the ureter.' },
          { title: 'Vascular Control', description: 'Ligation of the renal artery and then the renal vein.' },
          { title: 'Removal', description: 'Removal of the kidney and adrenal gland (if indicated) in a bag.' }
        ],
        anestheticConsiderations: [
          'General anesthesia with ETT',
          'Positioning (Lateral decubitus) - monitor for V/Q mismatch',
          'Manage blood loss (renal vessels are high flow)',
          'Maintain adequate renal perfusion to the remaining kidney'
        ],
        antibioticProphylaxis: {
          drug: 'Cefuroxime',
          dosage: '1.5g IV',
          timing: 'At induction',
          alternatives: 'Gentamicin'
        },
        complications: {
          surgical: ['Hemorrhage', 'Injury to adjacent organs (spleen, liver, bowel)', 'Pneumothorax'],
          anesthetic: ['Renal failure', 'Hypovolemia', 'Positioning-related nerve injury']
        },
        management: {
          preOp: ['Review CT imaging', 'Check baseline creatinine'],
          intraOp: ['Avoid nephrotoxic drugs', 'Maintain MAP > 65mmHg'],
          postOp: ['Monitor urine output closely', 'Regular analgesia (avoid NSAIDs)']
        }
      },
      {
        id: 'cystoscopy',
        name: 'Cystoscopy and Biopsy/TURBT',
        guide: [
          { title: 'Access', description: 'Cystoscope inserted via the urethra.' },
          { title: 'Inspection', description: 'Systematic inspection of the bladder mucosa.' },
          { title: 'Biopsy/Resection', description: 'Biopsy of suspicious areas or resection of tumors (TURBT).' },
          { title: 'Hemostasis', description: 'Diathermy of bleeding points.' }
        ],
        anestheticConsiderations: [
          'GA or Spinal (T10 level)',
          'Obturator nerve reflex during lateral wall resection (can cause bladder perforation)',
          'Muscle relaxation or Obturator nerve block to prevent reflex',
          'Monitor for bladder perforation'
        ],
        antibioticProphylaxis: {
          drug: 'Gentamicin',
          dosage: '120mg IV',
          timing: 'At induction',
          alternatives: 'Ciprofloxacin'
        },
        complications: {
          surgical: ['Bladder perforation', 'Hematuria', 'Infection', 'Urethral trauma'],
          anesthetic: ['Obturator reflex-related injury', 'Spinal hypotension']
        },
        management: {
          preOp: ['Urine culture', 'Confirm NPO'],
          intraOp: ['Monitor for sudden abdominal pain (perforation)', 'Maintain clear irrigation'],
          postOp: ['Monitor urine color', 'Encourage oral fluids']
        }
      },
      {
        id: 'prostatectomy',
        name: 'Radical Prostatectomy (Robotic/Open)',
        guide: [
          { title: 'Access', description: 'Robotic (6 ports) or Lower midline incision.' },
          { title: 'Dissection', description: 'Mobilization of the prostate and seminal vesicles.' },
          { title: 'Nerve Sparing', description: 'Identification and preservation of the neurovascular bundles.' },
          { title: 'Anastomosis', description: 'Urethrovesical anastomosis over a catheter.' },
          { title: 'Closure', description: 'Hemostasis and layered closure.' }
        ],
        anestheticConsiderations: [
          'General anesthesia with ETT',
          'Steep Trendelenburg position (Robotic) - monitor for airway edema',
          'Restrictive fluid strategy to improve visualization',
          'Manage CO2 insufflation effects'
        ],
        antibioticProphylaxis: {
          drug: 'Cefuroxime',
          dosage: '1.5g IV',
          timing: 'At induction',
          alternatives: 'Gentamicin'
        },
        complications: {
          surgical: ['Incontinence', 'Erectile dysfunction', 'Urethrovesical leak', 'Bleeding'],
          anesthetic: ['Facial/Airway edema', 'Nerve injury (positioning)', 'CO2 retention']
        },
        management: {
          preOp: ['Review PSA and biopsy', 'Check renal function'],
          intraOp: ['Monitor EtCO2', 'Maintain stable MAP'],
          postOp: ['Catheter care', 'Early mobilization']
        }
      },
      {
        id: 'ureteroscopy',
        name: 'Ureteroscopy and Laser Lithotripsy',
        guide: [
          { title: 'Access', description: 'Ureteroscope inserted retrograde via the urethra and bladder.' },
          { title: 'Identification', description: 'Locate the stone in the ureter or kidney.' },
          { title: 'Fragmentation', description: 'Holmium laser used to fragment the stone.' },
          { title: 'Extraction', description: 'Removal of fragments using a basket.' },
          { title: 'Stenting', description: 'Placement of a JJ stent to ensure drainage.' }
        ],
        anestheticConsiderations: [
          'General anesthesia with LMA or ETT',
          'Ensure patient stillness (laser safety)',
          'Manage irrigation fluid',
          'Short procedure, rapid turnover'
        ],
        antibioticProphylaxis: {
          drug: 'Gentamicin',
          dosage: '120mg IV',
          timing: 'At induction',
          alternatives: 'Ciprofloxacin'
        },
        complications: {
          surgical: ['Ureteric injury/avulsion', 'Infection/Sepsis', 'Hematuria', 'Stent pain'],
          anesthetic: ['PONV', 'Aspiration (if emergency)']
        },
        management: {
          preOp: ['Review imaging for stone size/location', 'Check urine culture'],
          intraOp: ['Maintain clear vision', 'Monitor for signs of sepsis'],
          postOp: ['Encourage fluids', 'Explain stent symptoms']
        }
      }
    ]
  },
  {
    id: 'neurosurgery',
    name: 'Neurosurgery',
    generalConsiderations: {
      preOp: [
        'Detailed neurological assessment (GCS, pupils, focal deficits)',
        'Review imaging (MRI/CT) for midline shift and edema',
        'Assess for signs of raised ICP (headache, vomiting, papilledema)',
        'Confirm steroid and anticonvulsant status'
      ],
      intraOp: [
        'Maintain cerebral perfusion pressure (CPP = MAP - ICP)',
        'Avoid factors that increase ICP (hypoxia, hypercapnia, venous obstruction)',
        'Tight glucose and temperature control',
        'Consider neuro-monitoring (MEP, SSEP, ECoG)'
      ],
      postOp: [
        'Frequent neurological observations',
        'Manage hypertension (avoid intracranial hemorrhage)',
        'Monitor for diabetes insipidus or SIADH',
        'Seizure prophylaxis'
      ]
    },
    procedures: [
      {
        id: 'craniotomy-tumor',
        name: 'Craniotomy for Tumor Resection',
        guide: [
          { title: 'Positioning', description: 'Head fixed in Mayfield frame, elevated to facilitate venous drainage.' },
          { title: 'Incision', description: 'Scalp incision and creation of a bone flap.' },
          { title: 'Durotomy', description: 'Incision of the dura mater to expose the brain.' },
          { title: 'Resection', description: 'Microsurgical resection of the tumor using navigation.' },
          { title: 'Closure', description: 'Dural closure, replacement of bone flap, and scalp closure.' }
        ],
        anestheticConsiderations: [
          'Total Intravenous Anesthesia (TIVA) often preferred (Propofol/Remifentanil)',
          'Maintain "slack brain" (Mannitol, hyperventilation to PaCO2 4.5-5.0 kPa)',
          'Smooth emergence (avoid coughing/straining)',
          'Precise blood pressure control'
        ],
        antibioticProphylaxis: {
          drug: 'Cefuroxime or Vancomycin',
          dosage: '1.5g or 1g IV',
          timing: 'At induction',
          alternatives: 'Clindamycin'
        },
        complications: {
          surgical: ['Intracranial hemorrhage', 'Brain edema', 'Neurological deficit', 'CSF leak'],
          anesthetic: ['Venous Air Embolism (especially in sitting position)', 'Seizures', 'Diabetes Insipidus']
        },
        management: {
          preOp: ['Administer Dexamethasone', 'Check electrolytes'],
          intraOp: ['Maintain MAP within 20% of baseline', 'Monitor urine output (Mannitol effect)'],
          postOp: ['ICU/HDU admission', 'Strict BP targets (e.g., SBP < 140)']
        }
      },
      {
        id: 'vp-shunt',
        name: 'Ventriculoperitoneal (VP) Shunt',
        guide: [
          { title: 'Access', description: 'Burr hole in the skull and small abdominal incision.' },
          { title: 'Ventricular Lead', description: 'Insertion of the proximal catheter into the lateral ventricle.' },
          { title: 'Tunneling', description: 'Subcutaneous tunneling of the distal catheter from head to abdomen.' },
          { title: 'Peritoneal Lead', description: 'Insertion of the distal catheter into the peritoneal cavity.' },
          { title: 'Testing', description: 'Confirming shunt function and pressure setting.' }
        ],
        anestheticConsiderations: [
          'General anesthesia with ETT',
          'Avoid factors that increase ICP during induction',
          'Monitor for bradycardia during tunneling (vagal stimulation)',
          'Strict aseptic technique'
        ],
        antibioticProphylaxis: {
          drug: 'Vancomycin or Cefazolin',
          dosage: '1g or 2g IV',
          timing: 'At induction',
          alternatives: 'Clindamycin'
        },
        complications: {
          surgical: ['Shunt infection', 'Shunt malfunction/blockage', 'Over-drainage', 'Intracranial hemorrhage'],
          anesthetic: ['ICP changes', 'Vagal-mediated bradycardia']
        },
        management: {
          preOp: ['Review imaging for ventricular size', 'Assess for signs of raised ICP'],
          intraOp: ['Maintain stable hemodynamics', 'Monitor for arrhythmias during tunneling'],
          postOp: ['Neurological observations', 'Monitor for shunt failure']
        }
      },
      {
        id: 'microdiscectomy',
        name: 'Lumbar Microdiscectomy',
        guide: [
          { title: 'Positioning', description: 'Prone on a Wilson frame or Jackson table.' },
          { title: 'Incision', description: 'Small midline incision over the affected level.' },
          { title: 'Exposure', description: 'Minimal muscle retraction and partial laminotomy.' },
          { title: 'Discectomy', description: 'Identification and removal of the herniated disc fragment.' },
          { title: 'Decompression', description: 'Confirming adequate decompression of the nerve root.' }
        ],
        anestheticConsiderations: [
          'General anesthesia with ETT',
          'Positioning (Prone) - protect eyes, face, and pressure points',
          'Avoid abdominal compression (decreases venous bleeding)',
          'Smooth emergence to avoid straining'
        ],
        antibioticProphylaxis: {
          drug: 'Cefazolin',
          dosage: '2g IV',
          timing: 'At induction',
          alternatives: 'Clindamycin'
        },
        complications: {
          surgical: ['Dural tear (CSF leak)', 'Nerve root injury', 'Recurrent disc herniation', 'Infection'],
          anesthetic: ['Post-operative visual loss (POVL) - rare', 'Pressure sores', 'Venous air embolism']
        },
        management: {
          preOp: ['Confirm level and side', 'Review neurological deficits'],
          intraOp: ['Ensure abdominal freedom in prone position', 'Monitor for blood loss'],
          postOp: ['Early mobilization', 'Monitor for CSF leak (headache/drainage)']
        }
      },
      {
        id: 'spinal-fusion',
        name: 'Lumbar Spinal Fusion (PLIF/TLIF)',
        guide: [
          { title: 'Positioning', description: 'Prone on a specialized table (e.g., Jackson).' },
          { title: 'Exposure', description: 'Midline incision and subperiosteal dissection of muscles.' },
          { title: 'Decompression', description: 'Laminectomy and discectomy at the affected level.' },
          { title: 'Fixation', description: 'Insertion of pedicle screws and rods.' },
          { title: 'Fusion', description: 'Placement of interbody cage and bone graft.' }
        ],
        anestheticConsiderations: [
          'General anesthesia with ETT',
          'Invasive monitoring (Arterial line)',
          'Neuromonitoring (MEP/SSEP) - avoid muscle relaxants',
          'Manage significant blood loss (consider Cell Saver/TXA)'
        ],
        antibioticProphylaxis: {
          drug: 'Cefazolin + Vancomycin',
          dosage: '2g + 1g IV',
          timing: 'At induction',
          alternatives: 'Clindamycin'
        },
        complications: {
          surgical: ['Nerve root injury', 'Dural tear', 'Hardware failure', 'Pseudoarthrosis'],
          anesthetic: ['POVL', 'Massive blood loss', 'Pressure injury']
        },
        management: {
          preOp: ['Check baseline neuro status', 'Optimize Hb'],
          intraOp: ['Maintain MAP for spinal cord perfusion', 'Monitor neuromonitoring signals'],
          postOp: ['Neurological checks', 'Pain management (PCA)']
        }
      },
      {
        id: 'carpal-tunnel',
        name: 'Carpal Tunnel Release',
        guide: [
          { title: 'Incision', description: 'Small incision in the palm over the carpal tunnel.' },
          { title: 'Identification', description: 'Identification of the transverse carpal ligament.' },
          { title: 'Release', description: 'Division of the ligament to decompress the median nerve.' },
          { title: 'Closure', description: 'Skin closure and bulky dressing.' }
        ],
        anestheticConsiderations: [
          'Local anesthesia with sedation or GA',
          'Bier block or wrist block',
          'Short procedure, day-case',
          'Tourniquet management (if used)'
        ],
        antibioticProphylaxis: {
          drug: 'None routinely',
          dosage: '-',
          timing: '-',
          alternatives: '-'
        },
        complications: {
          surgical: ['Median nerve injury', 'Incomplete release', 'Infection', 'Pillar pain'],
          anesthetic: ['Local anesthetic toxicity (if Bier block)', 'Tourniquet pain']
        },
        management: {
          preOp: ['Confirm side', 'Review symptoms'],
          intraOp: ['Ensure patient comfort', 'Maintain stillness'],
          postOp: ['Hand elevation', 'Early finger movements']
        }
      }
    ]
  },
  {
    id: 'cardiovascular',
    name: 'Cardiovascular Surgery',
    generalConsiderations: {
      preOp: [
        'Comprehensive cardiac assessment (Echo, Angiogram, EF)',
        'Review respiratory and renal function',
        'Assess for carotid artery disease',
        'Confirm blood products availability (Crossmatch 4-6 units)'
      ],
      intraOp: [
        'Invasive monitoring (Arterial line, CVC, PA catheter, TEE)',
        'Anticoagulation management (Heparin/Protamine)',
        'Manage Cardiopulmonary Bypass (CPB) effects',
        'Myocardial protection (Cardioplegia)'
      ],
      postOp: [
        'ICU admission for mechanical ventilation and inotropic support',
        'Monitor for tamponade or graft occlusion',
        'Tight glycemic control',
        'Early extubation (fast-track) if stable'
      ]
    },
    procedures: [
      {
        id: 'cabg',
        name: 'Coronary Artery Bypass Graft (CABG)',
        guide: [
          { title: 'Harvesting', description: 'Harvesting of conduits (Internal Mammary Artery, Saphenous Vein).' },
          { title: 'Sternotomy', description: 'Median sternotomy to expose the heart.' },
          { title: 'Cannulation', description: 'Aortic and venous cannulation for CPB.' },
          { title: 'Anastomosis', description: 'Grafting conduits to coronary arteries distal to stenoses.' },
          { title: 'Weaning', description: 'Weaning from CPB and checking graft flow.' }
        ],
        anestheticConsiderations: [
          'High-dose opioid or balanced technique',
          'Maintain myocardial oxygen supply/demand balance',
          'Manage anticoagulation (ACT > 400s for CPB)',
          'Monitor for ischemia (ECG, TEE)'
        ],
        antibioticProphylaxis: {
          drug: 'Cefuroxime + Vancomycin',
          dosage: '1.5g + 1g IV',
          timing: 'At induction',
          alternatives: 'Teicoplanin'
        },
        complications: {
          surgical: ['Graft failure', 'Bleeding/Tamponade', 'Sternal wound infection', 'Stroke'],
          anesthetic: ['Low Cardiac Output Syndrome (LCOS)', 'Arrhythmias (AF)', 'Renal failure', 'Vasoplegia']
        },
        management: {
          preOp: ['Review antiplatelet/anticoagulant timing', 'Optimize Hb'],
          intraOp: ['Maintain MAP 50-70 mmHg on CPB', 'Monitor acid-base and electrolytes'],
          postOp: ['Monitor chest drain output', 'Manage shivering and hypertension']
        }
      },
      {
        id: 'avr',
        name: 'Aortic Valve Replacement (AVR)',
        guide: [
          { title: 'Sternotomy', description: 'Median sternotomy and pericardiotomy.' },
          { title: 'CPB', description: 'Establishment of cardiopulmonary bypass.' },
          { title: 'Aortotomy', description: 'Incision into the ascending aorta to expose the valve.' },
          { title: 'Excision', description: 'Excision of the diseased aortic valve and decalcification.' },
          { title: 'Implantation', description: 'Suturing of the prosthetic valve (mechanical or tissue).' },
          { title: 'Closure', description: 'Closure of the aortotomy and weaning from CPB.' }
        ],
        anestheticConsiderations: [
          'Maintain hemodynamic stability (avoid tachycardia/hypotension)',
          'Monitor for ischemia and valve function with TEE',
          'Manage anticoagulation and CPB',
          'High-dose opioid or balanced technique'
        ],
        antibioticProphylaxis: {
          drug: 'Cefazolin + Vancomycin',
          dosage: '2g + 1g IV',
          timing: 'At induction',
          alternatives: 'Teicoplanin'
        },
        complications: {
          surgical: ['Paravalvular leak', 'Heart block', 'Stroke', 'Bleeding'],
          anesthetic: ['Low cardiac output', 'Arrhythmias', 'Vasoplegia']
        },
        management: {
          preOp: ['Review Echo for valve area and gradient', 'Check dental health'],
          intraOp: ['Maintain adequate perfusion pressure', 'Monitor for LV dysfunction'],
          postOp: ['ICU management', 'Monitor for heart block (pacing wires)']
        }
      },
      {
        id: 'carotid-endarterectomy',
        name: 'Carotid Endarterectomy',
        guide: [
          { title: 'Incision', description: 'Incision along the anterior border of the sternocleidomastoid.' },
          { title: 'Exposure', description: 'Identification of the common, internal, and external carotid arteries.' },
          { title: 'Clamping', description: 'Clamping of the carotid arteries (consider shunting).' },
          { title: 'Endarterectomy', description: 'Removal of the atherosclerotic plaque from the arterial wall.' },
          { title: 'Closure', description: 'Primary closure or patch angioplasty.' }
        ],
        anestheticConsiderations: [
          'GA or Regional (Cervical plexus block)',
          'Maintain BP at or slightly above baseline during clamping',
          'Neurological monitoring (awake patient, EEG, or stump pressure)',
          'Smooth emergence to avoid hypertension/hematoma'
        ],
        antibioticProphylaxis: {
          drug: 'Cefazolin',
          dosage: '2g IV',
          timing: 'At induction',
          alternatives: 'Clindamycin'
        },
        complications: {
          surgical: ['Stroke (TIA/CVA)', 'Nerve injury (Hypoglossal/Vagus)', 'Hematoma', 'Hyperperfusion syndrome'],
          anesthetic: ['Hypertension/Hypotension', 'Myocardial ischemia']
        },
        management: {
          preOp: ['Review carotid duplex/CT angiogram', 'Optimize BP meds'],
          intraOp: ['Tight BP control', 'Monitor for neurological changes'],
          postOp: ['Strict BP targets', 'Monitor for neck hematoma (airway risk)']
        }
      },
      {
        id: 'mitral-valve',
        name: 'Mitral Valve Repair/Replacement',
        guide: [
          { title: 'Sternotomy', description: 'Median sternotomy or minimally invasive thoracotomy.' },
          { title: 'CPB', description: 'Establishment of cardiopulmonary bypass.' },
          { title: 'Atriotomy', description: 'Incision into the left atrium to expose the mitral valve.' },
          { title: 'Repair/Replacement', description: 'Annuloplasty, leaflet repair, or valve replacement.' },
          { title: 'Closure', description: 'Closure of the atrium and weaning from CPB.' }
        ],
        anestheticConsiderations: [
          'Maintain stable heart rate and rhythm',
          'Monitor for pulmonary hypertension',
          'TEE is essential for assessing repair success',
          'Manage anticoagulation and CPB'
        ],
        antibioticProphylaxis: {
          drug: 'Cefazolin + Vancomycin',
          dosage: '2g + 1g IV',
          timing: 'At induction',
          alternatives: 'Teicoplanin'
        },
        complications: {
          surgical: ['SAM (Systolic Anterior Motion)', 'Residual leak', 'Heart block', 'Bleeding'],
          anesthetic: ['Right ventricular failure', 'Arrhythmias', 'Low cardiac output']
        },
        management: {
          preOp: ['Review Echo for severity and RV function', 'Optimize medications'],
          intraOp: ['Maintain adequate preload', 'Monitor for ischemia'],
          postOp: ['ICU management', 'Monitor for AF']
        }
      },
      {
        id: 'evar',
        name: 'Endovascular Aneurysm Repair (EVAR)',
        guide: [
          { title: 'Access', description: 'Percutaneous or open cut-down of the femoral arteries.' },
          { title: 'Navigation', description: 'Guidewire and catheter navigation into the aorta.' },
          { title: 'Deployment', description: 'Deployment of the stent-graft across the aneurysm.' },
          { title: 'Completion', description: 'Angiography to confirm graft position and absence of endoleaks.' },
          { title: 'Closure', description: 'Closure of the femoral access sites.' }
        ],
        anestheticConsiderations: [
          'GA, Spinal, or Local with sedation',
          'Monitor for "Post-implantation syndrome" (fever, leukocytosis)',
          'Manage contrast-induced nephropathy risk',
          'Be prepared for emergency conversion to open repair'
        ],
        antibioticProphylaxis: {
          drug: 'Cefazolin',
          dosage: '2g IV',
          timing: 'At induction',
          alternatives: 'Clindamycin'
        },
        complications: {
          surgical: ['Endoleak', 'Graft migration', 'Limb ischemia', 'Aortic rupture'],
          anesthetic: ['Renal failure', 'Contrast reaction', 'Myocardial ischemia']
        },
        management: {
          preOp: ['Review CT for anatomy', 'Check renal function'],
          intraOp: ['Maintain stable BP', 'Ensure adequate hydration'],
          postOp: ['Monitor for endoleaks', 'Check distal pulses']
        }
      }
    ]
  },
  {
    id: 'ent',
    name: 'ENT Surgery',
    generalConsiderations: {
      preOp: [
        'Assess for shared airway (surgeon and anesthetist)',
        'Review for difficult airway (Stridor, tumors, limited mouth opening)',
        'Check for OSA (Obstructive Sleep Apnea)',
        'Confirm NPO status'
      ],
      intraOp: [
        'Airway protection (Laser-safe tubes if applicable)',
        'Manage "shared airway" communication',
        'Avoid muscle relaxants if nerve monitoring is used',
        'Smooth emergence to avoid laryngospasm'
      ],
      postOp: [
        'Monitor for airway obstruction/edema',
        'Manage PONV (high risk)',
        'Monitor for bleeding (especially tonsillectomy)',
        'Humidified oxygen if indicated'
      ]
    },
    procedures: [
      {
        id: 'tonsillectomy',
        name: 'Tonsillectomy',
        guide: [
          { title: 'Exposure', description: 'Mouth gag (Boyle-Davis) inserted to expose the oropharynx.' },
          { title: 'Dissection', description: 'Tonsils dissected from the tonsillar bed.' },
          { title: 'Hemostasis', description: 'Diathermy or ties used to control bleeding.' },
          { title: 'Inspection', description: 'Check for bleeding and remove mouth gag.' }
        ],
        anestheticConsiderations: [
          'General anesthesia with RAE tube or LMA (if appropriate)',
          'High risk of PONV (blood in stomach)',
          'Dexamethasone for edema and PONV',
          'Extubation in lateral position (awake)'
        ],
        antibioticProphylaxis: {
          drug: 'None routinely',
          dosage: '-',
          timing: '-',
          alternatives: 'Consider if history of recurrent infections'
        },
        complications: {
          surgical: ['Primary/Secondary hemorrhage', 'Dehydration', 'Infection'],
          anesthetic: ['Laryngospasm', 'Aspiration of blood', 'Airway fire (if laser used)']
        },
        management: {
          preOp: ['Check for recent URTI', 'Review coagulation screen if indicated'],
          intraOp: ['Ensure adequate depth of anesthesia', 'Suction stomach before emergence'],
          postOp: ['Monitor for "frequent swallowing" (sign of bleeding)', 'Analgesia (regular paracetamol/ibuprofen)']
        }
      },
      {
        id: 'septoplasty',
        name: 'Septoplasty',
        guide: [
          { title: 'Incision', description: 'Intranasal incision (hemitransfixion).' },
          { title: 'Elevation', description: 'Elevation of the mucoperichondrial flap.' },
          { title: 'Resection', description: 'Straightening or resection of the deviated cartilage/bone.' },
          { title: 'Closure', description: 'Suturing of the flap and possible nasal packing/splints.' }
        ],
        anestheticConsiderations: [
          'General anesthesia with ETT (throat pack used)',
          'Vasoconstrictors (Cocaine/Adrenaline) used topically (monitor for tachycardia/HTN)',
          'Smooth emergence to avoid bleeding',
          'Manage post-operative pain'
        ],
        antibioticProphylaxis: {
          drug: 'None routinely',
          dosage: '-',
          timing: '-',
          alternatives: 'Consider if packing used'
        },
        complications: {
          surgical: ['Septal perforation', 'Septal hematoma', 'Infection', 'Recurrence'],
          anesthetic: ['Laryngospasm', 'Aspiration of blood', 'Cocaine toxicity']
        },
        management: {
          preOp: ['Review for nasal obstruction', 'Confirm NPO'],
          intraOp: ['Monitor for arrhythmias', 'Ensure throat pack removal'],
          postOp: ['Monitor for bleeding', 'Avoid nose blowing']
        }
      },
      {
        id: 'myringotomy',
        name: 'Myringotomy and Grommet Insertion',
        guide: [
          { title: 'Access', description: 'Visualization of the tympanic membrane via an otoscope.' },
          { title: 'Incision', description: 'Small incision in the tympanic membrane (myringotomy).' },
          { title: 'Aspiration', description: 'Suctioning of fluid from the middle ear.' },
          { title: 'Insertion', description: 'Placement of a small ventilation tube (grommet).' }
        ],
        anestheticConsiderations: [
          'General anesthesia (usually via mask or LMA)',
          'Short procedure, rapid turnover',
          'Manage pediatric anxiety',
          'Avoid Nitrous Oxide (can increase middle ear pressure)'
        ],
        antibioticProphylaxis: {
          drug: 'None routinely',
          dosage: '-',
          timing: '-',
          alternatives: '-'
        },
        complications: {
          surgical: ['Persistent perforation', 'Otorrhea', 'Tympanosclerosis', 'Grommet extrusion'],
          anesthetic: ['Laryngospasm', 'Agitation on emergence']
        },
        management: {
          preOp: ['Review for recent ear infections', 'Manage parental expectations'],
          intraOp: ['Ensure adequate depth for incision', 'Maintain airway'],
          postOp: ['Water precautions (ear plugs)', 'Audiology follow-up']
        }
      },
      {
        id: 'fess',
        name: 'Functional Endoscopic Sinus Surgery (FESS)',
        guide: [
          { title: 'Access', description: 'Endoscopic visualization of the nasal passages.' },
          { title: 'Debridement', description: 'Removal of polyps or diseased mucosa.' },
          { title: 'Ostium Enlargement', description: 'Opening and enlarging the natural sinus ostia.' },
          { title: 'Hemostasis', description: 'Packing or cautery to control bleeding.' }
        ],
        anestheticConsiderations: [
          'General anesthesia with ETT (throat pack used)',
          'Maintain "bloodless field" (controlled hypotension, TIVA)',
          'Monitor for orbital or intracranial complications',
          'Smooth emergence'
        ],
        antibioticProphylaxis: {
          drug: 'Co-amoxiclav',
          dosage: '1.2g IV',
          timing: 'At induction',
          alternatives: 'Clindamycin'
        },
        complications: {
          surgical: ['CSF leak', 'Orbital injury/hematoma', 'Epistaxis', 'Synechiae'],
          anesthetic: ['Laryngospasm', 'Aspiration of blood', 'Controlled hypotension risks']
        },
        management: {
          preOp: ['Review CT sinuses', 'Optimize asthma/polyps (steroids)'],
          intraOp: ['Maintain low MAP (60-70 mmHg)', 'Ensure throat pack removal'],
          postOp: ['Nasal douching', 'Avoid straining']
        }
      },
      {
        id: 'mastoidectomy',
        name: 'Mastoidectomy',
        guide: [
          { title: 'Incision', description: 'Post-auricular incision.' },
          { title: 'Exposure', description: 'Elevation of the periosteum to expose the mastoid bone.' },
          { title: 'Drilling', description: 'Removal of mastoid air cells to expose the middle ear.' },
          { title: 'Intervention', description: 'Removal of cholesteatoma or placement of a cochlear implant.' },
          { title: 'Closure', description: 'Layered closure and mastoid dressing.' }
        ],
        anestheticConsiderations: [
          'General anesthesia with ETT',
          'Avoid muscle relaxants (facial nerve monitoring)',
          'Avoid Nitrous Oxide (middle ear pressure)',
          'Manage PONV (high risk)'
        ],
        antibioticProphylaxis: {
          drug: 'Cefuroxime',
          dosage: '1.5g IV',
          timing: 'At induction',
          alternatives: 'Clindamycin'
        },
        complications: {
          surgical: ['Facial nerve injury', 'Hearing loss', 'Vertigo', 'CSF leak'],
          anesthetic: ['PONV', 'Agitation on emergence']
        },
        management: {
          preOp: ['Review hearing tests', 'Check for vertigo'],
          intraOp: ['Monitor facial nerve signals', 'Maintain stable anesthesia'],
          postOp: ['Monitor for facial palsy', 'Manage dizziness']
        }
      }
    ]
  },
  {
    id: 'thoracic',
    name: 'Thoracic',
    generalConsiderations: {
      preOp: [
        'Detailed lung function tests (Spirometry, DLCO)',
        'Review cardiac status (often comorbid)',
        'Assess for exercise tolerance (stair climb)',
        'Review imaging (CT/PET) for airway involvement'
      ],
      intraOp: [
        'One-Lung Ventilation (OLV) using Double Lumen Tube (DLT) or bronchial blocker',
        'Invasive monitoring (Arterial line)',
        'Manage hypoxic pulmonary vasoconstriction (HPV)',
        'Fluid restriction (avoid pulmonary edema in remaining lung)'
      ],
      postOp: [
        'Effective analgesia (Paravertebral block, Epidural, or Serratus Anterior block)',
        'Early mobilization and chest physiotherapy',
        'Monitor chest drains (air leak, bleeding)',
        'Avoid fluid overload'
      ]
    },
    procedures: [
      {
        id: 'vats-lobectomy',
        name: 'VATS Lobectomy',
        guide: [
          { title: 'Positioning', description: 'Lateral decubitus position with the affected side up.' },
          { title: 'Access', description: '2-3 small incisions (ports) for camera and instruments.' },
          { title: 'Dissection', description: 'Individual ligation of pulmonary vein, artery, and bronchus.' },
          { title: 'Removal', description: 'Lobectomy specimen removed in a bag via a utility incision.' },
          { title: 'Drainage', description: 'Insertion of a chest tube and re-expansion of the lung.' }
        ],
        anestheticConsiderations: [
          'OLV is mandatory for surgical access',
          'Confirm DLT position with fiberoptic bronchoscope',
          'Manage hypoxemia during OLV (CPAP to non-ventilated lung, PEEP to ventilated lung)',
          'Consider TIVA for HPV preservation'
        ],
        antibioticProphylaxis: {
          drug: 'Cefuroxime',
          dosage: '1.5g IV',
          timing: 'At induction',
          alternatives: 'Clindamycin'
        },
        complications: {
          surgical: ['Air leak', 'Bleeding', 'Pneumonia', 'Atrial fibrillation'],
          anesthetic: ['Hypoxemia', 'Arrhythmias', 'Re-expansion pulmonary edema', 'Nerve injury (Brachial plexus)']
        },
        management: {
          preOp: ['Optimize COPD/Asthma', 'Smoking cessation'],
          intraOp: ['Protective lung ventilation (6ml/kg PBW)', 'Restrictive fluid strategy'],
          postOp: ['Aggressive pain management', 'Incentive spirometry']
        }
      },
      {
        id: 'pleurodesis',
        name: 'Pleurodesis (VATS/Chemical)',
        guide: [
          { title: 'Access', description: 'VATS ports or insertion of a chest drain.' },
          { title: 'Drainage', description: 'Complete drainage of the pleural effusion or pneumothorax.' },
          { title: 'Sclerosant', description: 'Instillation of a sclerosant (e.g., Talc) or mechanical abrasion.' },
          { title: 'Drainage', description: 'Re-insertion of chest drain to ensure lung expansion.' }
        ],
        anestheticConsiderations: [
          'GA with OLV (for VATS) or sedation (for chemical)',
          'Manage pain (highly painful procedure)',
          'Monitor for inflammatory response to sclerosant',
          'Ensure lung re-expansion'
        ],
        antibioticProphylaxis: {
          drug: 'Cefuroxime',
          dosage: '1.5g IV',
          timing: 'At induction',
          alternatives: 'Clindamycin'
        },
        complications: {
          surgical: ['Failure of pleurodesis', 'Infection (Empyema)', 'Persistent air leak', 'Bleeding'],
          anesthetic: ['Acute Lung Injury (rare)', 'Pain', 'Hypoxemia during OLV']
        },
        management: {
          preOp: ['Review imaging', 'Assess lung function'],
          intraOp: ['Effective analgesia', 'Monitor for systemic inflammatory response'],
          postOp: ['Chest drain management', 'Regular analgesia']
        }
      },
      {
        id: 'pneumonectomy',
        name: 'Pneumonectomy',
        guide: [
          { title: 'Access', description: 'Posterolateral thoracotomy.' },
          { title: 'Mobilization', description: 'Mobilization of the entire lung and division of the pleura.' },
          { title: 'Vascular Ligation', description: 'Ligation of the main pulmonary artery and veins.' },
          { title: 'Bronchial Ligation', description: 'Division and closure of the main bronchus.' },
          { title: 'Closure', description: 'Check for air leaks and layered closure (no chest drain usually).' }
        ],
        anestheticConsiderations: [
          'GA with OLV (Double lumen tube)',
          'Invasive monitoring (Arterial line, CVC)',
          'Strict fluid restriction (avoid pulmonary edema in the remaining lung)',
          'Manage hemodynamic instability during hilar manipulation'
        ],
        antibioticProphylaxis: {
          drug: 'Cefuroxime',
          dosage: '1.5g IV',
          timing: 'At induction',
          alternatives: 'Clindamycin'
        },
        complications: {
          surgical: ['Bronchopleural fistula', 'Bleeding', 'Post-pneumonectomy syndrome', 'Arrhythmias'],
          anesthetic: ['Right heart failure', 'Pulmonary edema', 'Hypoxemia']
        },
        management: {
          preOp: ['Detailed cardiac and lung function optimization', 'Review PET/CT'],
          intraOp: ['Maintain low airway pressures', 'Restrictive fluid strategy'],
          postOp: ['ICU management', 'Monitor for mediastinal shift']
        }
      }
    ]
  },
  {
    id: 'gynaecology',
    name: 'Gynaecology',
    generalConsiderations: {
      preOp: [
        'Review for anemia (heavy menstrual bleeding)',
        'Check pregnancy status (Urine HCG)',
        'Assess for previous pelvic surgeries',
        'Confirm NPO status'
      ],
      intraOp: [
        'Positioning (Lithotomy/Trendelenburg) - monitor for physiological changes',
        'Monitor for effects of pneumoperitoneum',
        'Standard monitoring',
        'Maintain normothermia'
      ],
      postOp: [
        'Manage PONV (high risk group)',
        'Effective analgesia (Multimodal)',
        'VTE prophylaxis',
        'Monitor for urinary retention'
      ]
    },
    procedures: [
      {
        id: 'tlh',
        name: 'Total Laparoscopic Hysterectomy (TLH)',
        guide: [
          { title: 'Access', description: 'Laparoscopic entry (4 ports) and uterine manipulator insertion.' },
          { title: 'Ligation', description: 'Ligation of round ligaments, infundibulopelvic/ovarian ligaments.' },
          { title: 'Dissection', description: 'Bladder mobilization and ligation of uterine arteries.' },
          { title: 'Colpotomy', description: 'Circumferential incision of the vagina to remove the uterus.' },
          { title: 'Closure', description: 'Laparoscopic closure of the vaginal vault.' }
        ],
        anestheticConsiderations: [
          'General anesthesia with endotracheal intubation',
          'Steep Trendelenburg position (monitor airway pressures and facial edema)',
          'Muscle relaxation is essential',
          'Manage PONV aggressively'
        ],
        antibioticProphylaxis: {
          drug: 'Cefuroxime + Metronidazole',
          dosage: '1.5g + 500mg IV',
          timing: 'At induction',
          alternatives: 'Clindamycin + Gentamicin'
        },
        complications: {
          surgical: ['Ureteric injury', 'Bladder/Bowel injury', 'Vault hematoma', 'Bleeding'],
          anesthetic: ['PONV', 'Nerve injury (Lithotomy position)', 'CO2 retention', 'Aspiration']
        },
        management: {
          preOp: ['Check hemoglobin', 'Review BMI'],
          intraOp: ['Monitor EtCO2 closely', 'Ensure adequate hydration'],
          postOp: ['Early mobilization', 'Regular analgesia']
        }
      },
      {
        id: 'diagnostic-laparoscopy',
        name: 'Diagnostic Laparoscopy (Ectopic/Pelvic Pain)',
        guide: [
          { title: 'Access', description: 'Umbilical port for camera and 1-2 accessory ports.' },
          { title: 'Inspection', description: 'Systematic inspection of the uterus, tubes, and ovaries.' },
          { title: 'Intervention', description: 'Salpingectomy for ectopic or biopsy/ablation for endometriosis.' },
          { title: 'Closure', description: 'Deflation of pneumoperitoneum and port closure.' }
        ],
        anestheticConsiderations: [
          'General anesthesia with ETT',
          'Manage potential for sudden hemorrhage (if ectopic)',
          'Muscle relaxation for visualization',
          'PONV prophylaxis'
        ],
        antibioticProphylaxis: {
          drug: 'Cefuroxime',
          dosage: '1.5g IV',
          timing: 'At induction',
          alternatives: 'Clindamycin'
        },
        complications: {
          surgical: ['Bowel/Vessel injury', 'Bleeding', 'Infection', 'Conversion to laparotomy'],
          anesthetic: ['PONV', 'Shoulder-tip pain', 'CO2 retention']
        },
        management: {
          preOp: ['Review HCG levels', 'Assess for hemodynamic stability'],
          intraOp: ['Maintain stable hemodynamics', 'Monitor for blood loss'],
          postOp: ['Monitor for vaginal bleeding', 'Analgesia']
        }
      },
      {
        id: 'ovarian-cystectomy',
        name: 'Laparoscopic Ovarian Cystectomy',
        guide: [
          { title: 'Access', description: 'Laparoscopic entry with 3-4 ports.' },
          { title: 'Cystotomy', description: 'Incision into the ovarian cortex to expose the cyst.' },
          { title: 'Dissection', description: 'Stripping the cyst wall from the normal ovarian tissue.' },
          { title: 'Removal', description: 'Removal of the cyst in an endobag to prevent spillage.' },
          { title: 'Hemostasis', description: 'Bipolar cautery of the ovarian bed.' }
        ],
        anestheticConsiderations: [
          'General anesthesia with ETT',
          'Muscle relaxation',
          'Trendelenburg position',
          'Manage PONV'
        ],
        antibioticProphylaxis: {
          drug: 'Cefuroxime',
          dosage: '1.5g IV',
          timing: 'At induction',
          alternatives: 'Clindamycin'
        },
        complications: {
          surgical: ['Ovarian injury', 'Cyst rupture/spillage', 'Bleeding', 'Infection'],
          anesthetic: ['PONV', 'Nerve injury', 'CO2 retention']
        },
        management: {
          preOp: ['Review tumor markers (CA-125)', 'Assess cyst size/nature'],
          intraOp: ['Avoid cyst rupture', 'Maintain stable hemodynamics'],
          postOp: ['Monitor for pain', 'Early mobilization']
        }
      },
      {
        id: 'myomectomy',
        name: 'Myomectomy (Laparoscopic/Open)',
        guide: [
          { title: 'Access', description: 'Laparoscopic (4 ports) or Pfannenstiel incision.' },
          { title: 'Incision', description: 'Incision into the uterine myometrium over the fibroid.' },
          { title: 'Enucleation', description: 'Dissection and removal of the fibroid from the uterus.' },
          { title: 'Closure', description: 'Multi-layer closure of the uterine defect.' },
          { title: 'Removal', description: 'Morcellation (if laparoscopic) and removal of fibroids.' }
        ],
        anestheticConsiderations: [
          'General anesthesia with ETT',
          'Manage potential for significant blood loss',
          'Consider Vasopressin injection by surgeon (monitor for bradycardia/HTN)',
          'Muscle relaxation'
        ],
        antibioticProphylaxis: {
          drug: 'Cefuroxime',
          dosage: '1.5g IV',
          timing: 'At induction',
          alternatives: 'Clindamycin'
        },
        complications: {
          surgical: ['Hemorrhage', 'Uterine rupture (in future pregnancy)', 'Adhesions', 'Infection'],
          anesthetic: ['PONV', 'Blood loss-related hypotension', 'Vasopressin-related arrhythmias']
        },
        management: {
          preOp: ['Check hemoglobin', 'Review fibroid location/size'],
          intraOp: ['Monitor blood loss closely', 'Maintain stable hemodynamics'],
          postOp: ['Monitor for pain', 'VTE prophylaxis']
        }
      },
      {
        id: 'whipple',
        name: 'Whipple Procedure (Pancreaticoduodenectomy)',
        guide: [
          { title: 'Access', description: 'Upper midline or rooftop incision.' },
          { title: 'Resection', description: 'Removal of the pancreatic head, duodenum, gallbladder, and distal bile duct.' },
          { title: 'Reconstruction', description: 'Pancreaticojejunostomy, hepaticojejunostomy, and gastrojejunostomy.' },
          { title: 'Closure', description: 'Placement of drains and layered closure.' }
        ],
        anestheticConsiderations: [
          'Major abdominal surgery with significant fluid shifts',
          'Invasive monitoring (Arterial line, CVC)',
          'Epidural analgesia is highly recommended',
          'Maintain normothermia and glycemic control'
        ],
        antibioticProphylaxis: {
          drug: 'Cefuroxime + Metronidazole',
          dosage: '1.5g + 500mg IV',
          timing: 'At induction',
          alternatives: 'Clindamycin + Gentamicin'
        },
        complications: {
          surgical: ['Pancreatic leak/fistula', 'Delayed gastric emptying', 'Hemorrhage', 'Sepsis'],
          anesthetic: ['Fluid overload', 'Hypothermia', 'VTE', 'Post-operative respiratory failure']
        },
        management: {
          preOp: ['Optimize nutrition', 'Check coagulation (if jaundiced)'],
          intraOp: ['Goal-directed fluid therapy', 'Maintain stable hemodynamics'],
          postOp: ['ICU/HDU admission', 'Monitor drain output for amylase']
        }
      }
    ]
  },
  {
    id: 'ophthalmic',
    name: 'Ophthalmic Surgery',
    generalConsiderations: {
      preOp: [
        'Assess for ability to lie flat and remain still',
        'Review for anticoagulation (often continued for cataract)',
        'Check for claustrophobia',
        'Confirm eye to be operated on'
      ],
      intraOp: [
        'Local anesthesia (Sub-Tenon, Peribulbar) or GA',
        'Avoid Oculocardiac Reflex (bradycardia)',
        'Maintain low Intraocular Pressure (IOP)',
        'Minimize coughing/straining on emergence'
      ],
      postOp: [
        'Monitor for pain (may indicate high IOP)',
        'Manage nausea (avoid vomiting)',
        'Protect eye with shield',
        'Review discharge instructions'
      ]
    },
    procedures: [
      {
        id: 'cataract',
        name: 'Phacoemulsification (Cataract Surgery)',
        guide: [
          { title: 'Incision', description: 'Small corneal or limbal incision.' },
          { title: 'Capsulorhexis', description: 'Creation of a circular opening in the lens capsule.' },
          { title: 'Phaco', description: 'Ultrasonic fragmentation and aspiration of the lens.' },
          { title: 'IOL Insertion', description: 'Insertion of a foldable intraocular lens into the capsule.' },
          { title: 'Hydration', description: 'Hydration of the incision to ensure it is self-sealing.' }
        ],
        anestheticConsiderations: [
          'Topical or Sub-Tenon block is standard',
          'Minimal sedation to ensure patient cooperation',
          'Monitor for Oculocardiac reflex',
          'Ensure patient comfort and stillness'
        ],
        antibioticProphylaxis: {
          drug: 'Intracameral Cefuroxime',
          dosage: '1mg in 0.1mL',
          timing: 'End of procedure',
          alternatives: 'Moxifloxacin'
        },
        complications: {
          surgical: ['Posterior capsule rupture', 'Vitreous loss', 'Endophthalmitis', 'Suprachoroidal hemorrhage'],
          anesthetic: ['Retrobulbar hemorrhage (if block used)', 'Globe penetration', 'Oculocardiac reflex']
        },
        management: {
          preOp: ['Dilating drops', 'Confirm consent'],
          intraOp: ['Maintain quiet environment', 'Monitor heart rate'],
          postOp: ['Topical antibiotics/steroids', 'Avoid heavy lifting']
        }
      },
      {
        id: 'vitrectomy',
        name: 'Pars Plana Vitrectomy',
        guide: [
          { title: 'Access', description: 'Three small incisions (sclerotomies) in the pars plana.' },
          { title: 'Vitrectomy', description: 'Removal of the vitreous gel using a high-speed cutter.' },
          { title: 'Intervention', description: 'Membrane peeling, laser, or retinal detachment repair.' },
          { title: 'Tamponade', description: 'Filling the eye with air, gas (SF6/C3F8), or silicone oil.' },
          { title: 'Closure', description: 'Closure of sclerotomies (often sutureless).' }
        ],
        anestheticConsiderations: [
          'Local (Sub-Tenon) or General anesthesia',
          'Avoid Nitrous Oxide if gas tamponade is used (can cause rapid increase in IOP)',
          'Maintain stable IOP and BP',
          'Ensure patient stillness'
        ],
        antibioticProphylaxis: {
          drug: 'Intravitreal antibiotics (e.g., Vancomycin/Ceftazidime)',
          dosage: 'Standard doses',
          timing: 'End of procedure',
          alternatives: '-'
        },
        complications: {
          surgical: ['Retinal tear/detachment', 'Cataract progression', 'Endophthalmitis', 'IOP spike'],
          anesthetic: ['Oculocardiac reflex', 'Nitrous-related IOP spike']
        },
        management: {
          preOp: ['Review for previous eye surgeries', 'Confirm gas type if planned'],
          intraOp: ['Monitor for bradycardia', 'Maintain stable anesthesia'],
          postOp: ['Posturing (if gas used)', 'Avoid air travel (if gas used)']
        }
      },
      {
        id: 'scleral-buckle',
        name: 'Scleral Buckle for Retinal Detachment',
        guide: [
          { title: 'Exposure', description: '360-degree peritomy to expose the sclera.' },
          { title: 'Localization', description: 'Identification and marking of the retinal breaks.' },
          { title: 'Cryotherapy', description: 'Application of cold to create a chorioretinal adhesion.' },
          { title: 'Buckling', description: 'Suturing a silicone band (buckle) around the eye.' },
          { title: 'Drainage', description: 'Drainage of subretinal fluid if necessary.' }
        ],
        anestheticConsiderations: [
          'General anesthesia or Local (Peribulbar)',
          'Monitor for Oculocardiac reflex (high risk during muscle manipulation)',
          'Maintain stable IOP',
          'Smooth emergence'
        ],
        antibioticProphylaxis: {
          drug: 'Cefazolin',
          dosage: '1g IV',
          timing: 'At induction',
          alternatives: 'Gentamicin'
        },
        complications: {
          surgical: ['Scleral perforation', 'Infection', 'Double vision (diplopia)', 'Buckle extrusion'],
          anesthetic: ['Oculocardiac reflex', 'PONV']
        },
        management: {
          preOp: ['Confirm NPO', 'Review for cardiac disease'],
          intraOp: ['Monitor heart rate closely', 'Maintain stable anesthesia'],
          postOp: ['Monitor for pain', 'Review activity restrictions']
        }
      },
      {
        id: 'corneal-transplant',
        name: 'Corneal Transplant (Keratoplasty)',
        guide: [
          { title: 'Preparation', description: 'Removal of the diseased central cornea (trephination).' },
          { title: 'Donor Prep', description: 'Preparation of the donor corneal button.' },
          { title: 'Suturing', description: 'Securing the donor cornea with fine sutures (e.g., 10-0 Nylon).' },
          { title: 'Closure', description: 'Ensuring the graft is watertight and centered.' }
        ],
        anestheticConsiderations: [
          'General anesthesia or Local (Peribulbar/Sub-Tenon)',
          'Avoid coughing/straining on emergence (can cause graft dehiscence)',
          'Maintain stable IOP',
          'Ensure patient stillness'
        ],
        antibioticProphylaxis: {
          drug: 'Topical and Subconjunctival antibiotics',
          dosage: 'Standard doses',
          timing: 'End of procedure',
          alternatives: '-'
        },
        complications: {
          surgical: ['Graft rejection', 'Astigmatism', 'Endophthalmitis', 'Glaucoma'],
          anesthetic: ['Oculocardiac reflex', 'Coughing on emergence']
        },
        management: {
          preOp: ['Confirm donor tissue availability', 'Dilating drops'],
          intraOp: ['Maintain stable anesthesia', 'Monitor heart rate'],
          postOp: ['Topical steroids/antibiotics', 'Protect eye with shield']
        }
      }
    ]
  },
  {
    id: 'plastics',
    name: 'Plastics & Reconstructive Surgery',
    generalConsiderations: {
      preOp: [
        'Assess nutritional status',
        'Review smoking history (critical for flap survival)',
        'Check for peripheral vascular disease',
        'Confirm donor and recipient sites'
      ],
      intraOp: [
        'Maintain normothermia (essential for microvascular flow)',
        'Optimize perfusion (avoid vasopressors if possible)',
        'Manage long operative times',
        'Precise fluid management'
      ],
      postOp: [
        'Frequent flap observations (color, temperature, capillary refill)',
        'Avoid pressure on the flap',
        'Maintain adequate hydration and BP',
        'Manage pain and anxiety'
      ]
    },
    procedures: [
      {
        id: 'free-flap',
        name: 'Free Flap Reconstruction',
        guide: [
          { title: 'Harvesting', description: 'Dissection of the donor flap with its vascular pedicle.' },
          { title: 'Preparation', description: 'Preparation of the recipient site and vessels.' },
          { title: 'Transfer', description: 'Transfer of the flap to the recipient site.' },
          { title: 'Anastomosis', description: 'Microvascular anastomosis of arteries and veins.' },
          { title: 'Insetting', description: 'Suturing the flap into its final position.' }
        ],
        anestheticConsiderations: [
          'Maintain high-normal MAP for flap perfusion',
          'Avoid vasoconstrictors (e.g., Phenylephrine) if possible',
          'Active warming to maintain core temp > 36.5°C',
          'Goal-directed fluid therapy'
        ],
        antibioticProphylaxis: {
          drug: 'Co-amoxiclav',
          dosage: '1.2g IV',
          timing: 'At induction',
          alternatives: 'Clindamycin + Gentamicin'
        },
        complications: {
          surgical: ['Venous congestion', 'Arterial insufficiency', 'Hematoma', 'Partial flap loss'],
          anesthetic: ['Hypothermia', 'Pressure sores', 'Fluid overload', 'VTE']
        },
        management: {
          preOp: ['Smoking cessation for 4-6 weeks', 'Optimize hemoglobin'],
          intraOp: ['Monitor flap perfusion clinically', 'Maintain hematocrit 30-35%'],
          postOp: ['Hourly flap checks', 'Keep room warm']
        }
      },
      {
        id: 'abdominoplasty',
        name: 'Abdominoplasty (Tummy Tuck)',
        guide: [
          { title: 'Incision', description: 'Low transverse incision above the pubic hairline.' },
          { title: 'Dissection', description: 'Elevation of the skin and fat flap up to the rib cage.' },
          { title: 'Plication', description: 'Tightening of the rectus abdominis muscles (plication).' },
          { title: 'Resection', description: 'Removal of excess skin and fat.' },
          { title: 'Closure', description: 'Transposition of the umbilicus and layered closure.' }
        ],
        anestheticConsiderations: [
          'General anesthesia with ETT',
          'Consider TAP block or rectus sheath block for analgesia',
          'Maintain flexed position (beach chair) after closure to reduce tension',
          'Aggressive VTE prophylaxis'
        ],
        antibioticProphylaxis: {
          drug: 'Cefazolin',
          dosage: '2g IV',
          timing: 'At induction',
          alternatives: 'Clindamycin'
        },
        complications: {
          surgical: ['Seroma', 'Hematoma', 'Skin necrosis', 'Wound dehiscence'],
          anesthetic: ['VTE (high risk)', 'PONV', 'Respiratory compromise (from plication)']
        },
        management: {
          preOp: ['Review BMI', 'Smoking cessation'],
          intraOp: ['Maintain normothermia', 'Monitor for tension during closure'],
          postOp: ['Maintain flexed position', 'Early mobilization']
        }
      },
      {
        id: 'breast-reduction',
        name: 'Breast Reduction (Reduction Mammoplasty)',
        guide: [
          { title: 'Marking', description: 'Precise pre-operative marking of the new nipple position.' },
          { title: 'Incision', description: 'Wise-pattern (anchor) or vertical incision.' },
          { title: 'Resection', description: 'Removal of excess breast tissue and skin.' },
          { title: 'Transposition', description: 'Elevation of the nipple-areola complex on a pedicle.' },
          { title: 'Closure', description: 'Layered closure and application of supportive dressings.' }
        ],
        anestheticConsiderations: [
          'General anesthesia with LMA or ETT',
          'Maintain stable BP',
          'Consider intercostal nerve blocks or local infiltration',
          'PONV prophylaxis'
        ],
        antibioticProphylaxis: {
          drug: 'Cefazolin',
          dosage: '2g IV',
          timing: 'At induction',
          alternatives: 'Clindamycin'
        },
        complications: {
          surgical: ['Nipple necrosis', 'Hematoma', 'Infection', 'Asymmetry'],
          anesthetic: ['PONV', 'Chronic pain']
        },
        management: {
          preOp: ['Review BMI', 'Smoking cessation'],
          intraOp: ['Maintain normothermia', 'Monitor for blood loss'],
          postOp: ['Supportive bra', 'Monitor for nipple perfusion']
        }
      },
      {
        id: 'rhinoplasty',
        name: 'Rhinoplasty',
        guide: [
          { title: 'Access', description: 'Open (columellar incision) or Closed (endonasal).' },
          { title: 'Reshaping', description: 'Modification of nasal bones and cartilage.' },
          { title: 'Grafting', description: 'Use of cartilage grafts (septal, ear, or rib) if needed.' },
          { title: 'Closure', description: 'Suturing and application of external/internal splints.' }
        ],
        anestheticConsiderations: [
          'General anesthesia with ETT (throat pack essential)',
          'Maintain stable BP (mild hypotension can reduce bleeding)',
          'Local infiltration with Adrenaline for hemostasis',
          'Smooth emergence to prevent epistaxis'
        ],
        antibioticProphylaxis: {
          drug: 'Cefazolin',
          dosage: '1g IV',
          timing: 'At induction',
          alternatives: 'Clindamycin'
        },
        complications: {
          surgical: ['Epistaxis', 'Septal perforation', 'Asymmetry', 'Nasal obstruction'],
          anesthetic: ['Aspiration (if throat pack forgotten)', 'PONV', 'Laryngospasm']
        },
        management: {
          preOp: ['Review expectations', 'Smoking cessation'],
          intraOp: ['Monitor for blood loss', 'Ensure throat pack is removed'],
          postOp: ['Keep head elevated', 'Avoid nose blowing']
        }
      }
    ]
  },
  {
    id: 'endocrine',
    name: 'Endocrine Surgery',
    generalConsiderations: {
      preOp: [
        'Review thyroid/parathyroid function tests',
        'Assess for airway compression (Goitre)',
        'Check vocal cord function (Laryngoscopy)',
        'Optimize calcium levels'
      ],
      intraOp: [
        'Nerve monitoring (Recurrent Laryngeal Nerve)',
        'Avoid muscle relaxants for monitoring',
        'Positioning (Reverse Trendelenburg with neck extension)',
        'Manage potential for "Thyroid Storm"'
      ],
      postOp: [
        'Monitor for airway obstruction (Hematoma)',
        'Check for hypocalcemia (Chvostek/Trousseau signs)',
        'Assess vocal cord function (Voice check)',
        'Manage pain'
      ]
    },
    procedures: [
      {
        id: 'thyroidectomy',
        name: 'Total Thyroidectomy',
        guide: [
          { title: 'Incision', description: 'Transverse collar incision in a skin crease.' },
          { title: 'Exposure', description: 'Division of platysma and strap muscles.' },
          { title: 'Identification', description: 'Identification of Recurrent Laryngeal Nerve and Parathyroids.' },
          { title: 'Resection', description: 'Ligation of thyroid vessels and removal of the gland.' },
          { title: 'Closure', description: 'Hemostasis check and layered closure.' }
        ],
        anestheticConsiderations: [
          'Use NIM (Nerve Integrity Monitor) tube for RLN monitoring',
          'Avoid long-acting muscle relaxants',
          'Smooth emergence to prevent hematoma',
          'Dexamethasone for edema'
        ],
        antibioticProphylaxis: {
          drug: 'None routinely',
          dosage: '-',
          timing: '-',
          alternatives: 'Consider if high risk'
        },
        complications: {
          surgical: ['Recurrent Laryngeal Nerve injury', 'Hypoparathyroidism', 'Hematoma/Airway obstruction', 'Thyroid storm'],
          anesthetic: ['Laryngospasm', 'Tracheomalacia (rare)', 'Pneumothorax']
        },
        management: {
          preOp: ['Ensure euthyroid state', 'Review vocal cord mobility'],
          intraOp: ['Monitor for arrhythmias', 'Precise hemostasis'],
          postOp: ['Keep stitch cutter at bedside', 'Monitor Calcium levels']
        }
      },
      {
        id: 'parathyroidectomy',
        name: 'Parathyroidectomy',
        guide: [
          { title: 'Incision', description: 'Small transverse collar incision.' },
          { title: 'Exploration', description: 'Identification of all four parathyroid glands.' },
          { title: 'Resection', description: 'Removal of the enlarged gland (adenoma) or 3.5 glands (hyperplasia).' },
          { title: 'Testing', description: 'Intra-operative PTH monitoring to confirm success.' },
          { title: 'Closure', description: 'Hemostasis and layered closure.' }
        ],
        anestheticConsiderations: [
          'General anesthesia with ETT or LMA',
          'Avoid muscle relaxants if nerve monitoring is used',
          'Maintain stable BP',
          'Smooth emergence'
        ],
        antibioticProphylaxis: {
          drug: 'None routinely',
          dosage: '-',
          timing: '-',
          alternatives: '-'
        },
        complications: {
          surgical: ['Hypocalcemia', 'Recurrent laryngeal nerve injury', 'Hematoma', 'Persistent hyperparathyroidism'],
          anesthetic: ['Laryngospasm', 'Airway obstruction']
        },
        management: {
          preOp: ['Review Calcium and PTH levels', 'Localizing scans (Sestamibi/US)'],
          intraOp: ['Monitor for sudden PTH drop', 'Precise dissection'],
          postOp: ['Monitor Calcium levels', 'Check for voice changes']
        }
      },
      {
        id: 'adrenalectomy',
        name: 'Adrenalectomy (Laparoscopic/Open)',
        guide: [
          { title: 'Access', description: 'Laparoscopic (transperitoneal or retroperitoneal) or Open.' },
          { title: 'Mobilization', description: 'Mobilization of the kidney and identification of the adrenal gland.' },
          { title: 'Vascular Control', description: 'Ligation of the adrenal vein (critical for Pheochromocytoma).' },
          { title: 'Removal', description: 'Removal of the gland, ensuring no capsule rupture.' }
        ],
        anestheticConsiderations: [
          'General anesthesia with ETT',
          'Invasive monitoring (Arterial line)',
          'Manage hypertensive crises (if Pheochromocytoma) - Alpha/Beta blockade',
          'Manage post-resection hypotension'
        ],
        antibioticProphylaxis: {
          drug: 'Cefuroxime',
          dosage: '1.5g IV',
          timing: 'At induction',
          alternatives: 'Clindamycin'
        },
        complications: {
          surgical: ['Hemorrhage', 'Injury to adjacent organs', 'Pneumothorax', 'Addisonian crisis'],
          anesthetic: ['Hypertensive crisis', 'Post-op hypotension', 'Electrolyte imbalance']
        },
        management: {
          preOp: ['Review hormone levels', 'Optimize BP (Alpha-blockade for Pheo)'],
          intraOp: ['Tight BP control', 'Monitor for sudden BP drop after vein ligation'],
          postOp: ['Monitor for adrenal insufficiency', 'Check electrolytes']
        }
      },
      {
        id: 'neck-dissection',
        name: 'Neck Dissection',
        guide: [
          { title: 'Incision', description: 'Large cervical incision (e.g., MacFee or Y-shaped).' },
          { title: 'Dissection', description: 'Systematic removal of lymph nodes in specific neck levels (I-V).' },
          { title: 'Preservation', description: 'Identification and preservation of critical structures (CN XI, IJV, SCM).' },
          { title: 'Closure', description: 'Placement of suction drains and layered closure.' }
        ],
        anestheticConsiderations: [
          'General anesthesia with ETT',
          'Maintain stable BP',
          'Avoid muscle relaxants if nerve monitoring is used',
          'Monitor for air embolism (if IJV is opened)'
        ],
        antibioticProphylaxis: {
          drug: 'Cefuroxime + Metronidazole',
          dosage: '1.5g + 500mg IV',
          timing: 'At induction',
          alternatives: 'Clindamycin'
        },
        complications: {
          surgical: ['Chyle leak', 'Nerve injury (CN XI, Marginal Mandibular)', 'Hemorrhage', 'Hematoma'],
          anesthetic: ['Air embolism', 'Airway edema', 'VTE']
        },
        management: {
          preOp: ['Review imaging for node involvement', 'Confirm consent'],
          intraOp: ['Monitor for bradycardia (carotid sinus reflex)', 'Precise hemostasis'],
          postOp: ['Monitor drain output', 'Check for nerve function']
        }
      }
    ]
  },
  {
    id: 'pediatric',
    name: 'Pediatric Surgery',
    generalConsiderations: {
      preOp: [
        'Weight-based dosing for all drugs and fluids',
        'Assess for congenital anomalies',
        'Manage parental anxiety',
        'Strict NPO guidelines for age'
      ],
      intraOp: [
        'Maintain normothermia (high surface area/volume ratio)',
        'Precise fluid management (micro-drip/pumps)',
        'Airway management (size-appropriate equipment)',
        'Monitor glucose levels in neonates'
      ],
      postOp: [
        'Weight-based analgesia',
        'Monitor for respiratory depression',
        'Encourage early feeding if appropriate',
        'Parental involvement in recovery'
      ]
    },
    procedures: [
      {
        id: 'pyloromyotomy',
        name: 'Ramstedt Pyloromyotomy',
        guide: [
          { title: 'Access', description: 'Small supra-umbilical or RUQ incision.' },
          { title: 'Exposure', description: 'Delivery of the pylorus into the wound.' },
          { title: 'Incision', description: 'Seromyotomy (incision of the pyloric muscle).' },
          { title: 'Blunt Dissection', description: 'Spreading the muscle until the mucosa bulges.' },
          { title: 'Closure', description: 'Replacement of the stomach and wound closure.' }
        ],
        anestheticConsiderations: [
          'MEDICAL EMERGENCY, not surgical (must correct electrolytes first)',
          'High risk of aspiration (stomach may be full of milk/barium)',
          'RSI or awake intubation in neonates',
          'Suction stomach in 3 positions before induction'
        ],
        antibioticProphylaxis: {
          drug: 'Cefazolin',
          dosage: '30mg/kg IV',
          timing: 'At induction',
          alternatives: 'Clindamycin'
        },
        complications: {
          surgical: ['Mucosal perforation', 'Incomplete myotomy', 'Wound infection'],
          anesthetic: ['Aspiration', 'Hypothermia', 'Post-operative apnea']
        },
        management: {
          preOp: ['Correct hypochloremic hypokalemic metabolic alkalosis', 'Ensure adequate hydration'],
          intraOp: ['Maintain normothermia', 'Monitor glucose'],
          postOp: ['Start feeding protocol (e.g., 6 hours post-op)', 'Monitor for apnea']
        }
      },
      {
        id: 'orchidopexy',
        name: 'Orchidopexy (Undescended Testis)',
        guide: [
          { title: 'Incision', description: 'Inguinal incision and/or scrotal incision.' },
          { title: 'Mobilization', description: 'Mobilization of the testis and spermatic cord.' },
          { title: 'Ligation', description: 'Ligation of the patent processus vaginalis if present.' },
          { title: 'Fixation', description: 'Creation of a sub-dartos pouch and fixation of the testis.' },
          { title: 'Closure', description: 'Layered closure of the inguinal and scrotal wounds.' }
        ],
        anestheticConsiderations: [
          'General anesthesia with LMA or ETT',
          'Caudal block or local infiltration for excellent analgesia',
          'Manage pediatric anxiety',
          'Maintain normothermia'
        ],
        antibioticProphylaxis: {
          drug: 'Cefazolin',
          dosage: '30mg/kg IV',
          timing: 'At induction',
          alternatives: 'Clindamycin'
        },
        complications: {
          surgical: ['Testicular atrophy', 'Recurrence', 'Hematoma', 'Infection'],
          anesthetic: ['Agitation on emergence', 'Laryngospasm']
        },
        management: {
          preOp: ['Review for associated anomalies', 'Confirm side'],
          intraOp: ['Maintain stable anesthesia', 'Ensure adequate analgesia'],
          postOp: ['Avoid straddle toys', 'Regular analgesia']
        }
      },
      {
        id: 'intussusception-reduction',
        name: 'Intussusception Reduction (Surgical)',
        guide: [
          { title: 'Access', description: 'Midline or RUQ transverse incision.' },
          { title: 'Identification', description: 'Localization of the intussusception (usually ileocolic).' },
          { title: 'Reduction', description: 'Manual reduction by gentle retrograde pressure (milking).' },
          { title: 'Assessment', description: 'Checking for bowel viability and lead points (e.g., Meckel\'s).' },
          { title: 'Closure', description: 'Standard layered closure.' }
        ],
        anestheticConsiderations: [
          'General anesthesia with ETT',
          'RSI if bowel obstruction is suspected',
          'Maintain normothermia',
          'Fluid resuscitation (may have significant losses)'
        ],
        antibioticProphylaxis: {
          drug: 'Cefazolin + Metronidazole',
          dosage: '30mg/kg + 15mg/kg IV',
          timing: 'At induction',
          alternatives: 'Clindamycin + Gentamicin'
        },
        complications: {
          surgical: ['Bowel perforation', 'Recurrence', 'Wound infection', 'Adhesions'],
          anesthetic: ['Aspiration', 'Hypothermia', 'Post-operative apnea']
        },
        management: {
          preOp: ['Fluid resuscitation', 'NG tube insertion'],
          intraOp: ['Maintain stable anesthesia', 'Monitor for blood loss'],
          postOp: ['Monitor for recurrence', 'Gradual feeding restart']
        }
      }
    ]
  },
  {
    id: 'trauma',
    name: 'Trauma Surgery',
    generalConsiderations: {
      preOp: [
        'ATLS approach (Primary/Secondary survey)',
        'Damage Control Resuscitation (DCR)',
        'Massive Transfusion Protocol (MTP) activation',
        'Assess for associated injuries (Head, Spine, Chest)'
      ],
      intraOp: [
        'Damage Control Surgery (DCS) - stop bleeding, control contamination',
        'Lethal Triad management (Acidosis, Coagulopathy, Hypothermia)',
        'Permissive hypotension (if appropriate)',
        'Rapid sequence induction (assume full stomach)'
      ],
      postOp: [
        'ICU admission for physiological optimization',
        'Monitor for Abdominal Compartment Syndrome',
        'Planned re-operation (take-back)',
        'VTE prophylaxis (when safe)'
      ]
    },
    procedures: [
      {
        id: 'trauma-laparotomy',
        name: 'Exploratory Laparotomy for Trauma',
        guide: [
          { title: 'Incision', description: 'Rapid midline laparotomy from xiphoid to pubis.' },
          { title: 'Packing', description: 'Four-quadrant packing to control hemorrhage.' },
          { title: 'Assessment', description: 'Systematic search for injuries (Hollow viscus, Solid organ, Vascular).' },
          { title: 'Control', description: 'Clamping of vessels, stapling of bowel, splenectomy if needed.' },
          { title: 'Temporary Closure', description: 'Abdominal packing and temporary skin closure (Bogota bag/VAC).' }
        ],
        anestheticConsiderations: [
          'Resuscitation is simultaneous with surgery',
          'Avoid Nitrous Oxide (bowel distension)',
          'Maintain "Lethal Triad" awareness',
          'Rapid access (large bore IVs, Level 1 infuser)'
        ],
        antibioticProphylaxis: {
          drug: 'Co-amoxiclav + Gentamicin',
          dosage: '1.2g + 5mg/kg IV',
          timing: 'As soon as possible',
          alternatives: 'Clindamycin + Gentamicin'
        },
        complications: {
          surgical: ['Missed injury', 'Ongoing hemorrhage', 'Abdominal compartment syndrome', 'Sepsis'],
          anesthetic: ['Coagulopathy', 'Hypothermia', 'Multi-organ failure', 'Aspiration']
        },
        management: {
          preOp: ['Activate MTP', 'Crossmatch 10+ units'],
          intraOp: ['Monitor temperature and pH closely', 'Administer TXA early'],
          postOp: ['ICU stabilization', 'Monitor bladder pressure (ICP)']
        }
      },
      {
        id: 'splenectomy',
        name: 'Splenectomy (Trauma/Elective)',
        guide: [
          { title: 'Access', description: 'Midline laparotomy or subcostal incision.' },
          { title: 'Mobilization', description: 'Division of the splenocolic, splenorenal, and gastrosplenic ligaments.' },
          { title: 'Vascular Control', description: 'Ligation of the splenic artery and vein (near the hilum).' },
          { title: 'Removal', description: 'Removal of the spleen, ensuring no injury to the pancreatic tail.' }
        ],
        anestheticConsiderations: [
          'General anesthesia with ETT',
          'Manage massive hemorrhage (if trauma)',
          'Monitor for OPSI (Overwhelming Post-Splenectomy Infection) risk',
          'Maintain stable hemodynamics'
        ],
        antibioticProphylaxis: {
          drug: 'Cefuroxime',
          dosage: '1.5g IV',
          timing: 'At induction',
          alternatives: 'Clindamycin'
        },
        complications: {
          surgical: ['Hemorrhage', 'Pancreatic injury', 'OPSI', 'Thrombocytosis'],
          anesthetic: ['Hypovolemia', 'Coagulopathy', 'Aspiration']
        },
        management: {
          preOp: ['Vaccinations (Pneumococcal, Meningococcal, Hib)', 'Check platelets'],
          intraOp: ['Monitor for blood loss', 'Maintain normothermia'],
          postOp: ['Post-splenectomy vaccinations', 'Life-long antibiotic prophylaxis (if indicated)']
        }
      }
    ]
  },
  {
    id: 'burns',
    name: 'Burns Surgery',
    generalConsiderations: {
      preOp: [
        'Assess % TBSA (Total Body Surface Area) and depth',
        'Evaluate for inhalation injury (Stridor, soot, singed hair)',
        'Review fluid resuscitation status (Parkland formula)',
        'Check for circumferential burns (Escharotomy needed?)'
      ],
      intraOp: [
        'Maintain high ambient temperature (prevent hypothermia)',
        'Aggressive fluid management (high evaporative losses)',
        'Monitor for difficult airway (edema)',
        'Manage significant blood loss during debridement'
      ],
      postOp: [
        'Continue fluid resuscitation and electrolyte monitoring',
        'High caloric nutritional support',
        'Pain and anxiety management',
        'Monitor for sepsis (high risk)'
      ]
    },
    procedures: [
      {
        id: 'burn-debridement',
        name: 'Debridement and Skin Grafting',
        guide: [
          { title: 'Excision', description: 'Tangential or fascial excision of necrotic burn tissue.' },
          { title: 'Hemostasis', description: 'Control of bleeding from the raw surface (Adrenaline soaks, tourniquets).' },
          { title: 'Harvesting', description: 'Harvesting of Split-Thickness Skin Grafts (STSG) from donor sites.' },
          { title: 'Grafting', description: 'Application and securing of grafts (meshed or sheet).' },
          { title: 'Dressing', description: 'Application of non-adherent, antimicrobial dressings.' }
        ],
        anestheticConsiderations: [
          'High risk of hypothermia (keep OR > 28°C)',
          'Difficult venous access (may need CVC/IO)',
          'Altered pharmacology (resistance to non-depolarizing relaxants)',
          'Succinylcholine is CONTRAINDICATED after 24-48 hours (hyperkalemia risk)'
        ],
        antibioticProphylaxis: {
          drug: 'Flucloxacillin or Cefazolin',
          dosage: '2g IV',
          timing: 'At induction',
          alternatives: 'Vancomycin if MRSA risk'
        },
        complications: {
          surgical: ['Graft failure', 'Infection', 'Hemorrhage', 'Donor site morbidity'],
          anesthetic: ['Hypothermia', 'Hyperkalemia (Succinylcholine)', 'Fluid/Electrolyte imbalance']
        },
        management: {
          preOp: ['Optimize fluid status', 'Check coagulation'],
          intraOp: ['Monitor core temperature closely', 'Maintain urine output 0.5-1 ml/kg/hr'],
          postOp: ['Splinting of grafted areas', 'Monitor for graft take']
        }
      }
    ]
  },
  {
    id: 'obstetrics',
    name: 'Obstetrics',
    generalConsiderations: {
      preOp: [
        'Assess both mother and fetus',
        'Review pregnancy-related complications (Pre-eclampsia, Gestational Diabetes)',
        'Confirm NPO status (though often considered full stomach)',
        'Aspiration prophylaxis (H2 blockers, Sodium Citrate)'
      ],
      intraOp: [
        'Left lateral tilt (to avoid aortocaval compression)',
        'Monitor fetal heart rate until delivery',
        'Manage hypotension (Phenylephrine/Ephedrine)',
        'Oxytocin administration after delivery'
      ],
      postOp: [
        'Monitor for Postpartum Hemorrhage (PPH)',
        'VTE prophylaxis (high risk in pregnancy)',
        'Encourage breastfeeding and early bonding',
        'Manage post-spinal headache if applicable'
      ]
    },
    procedures: [
      {
        id: 'c-section',
        name: 'Caesarean Section',
        guide: [
          { title: 'Incision', description: 'Pfannenstiel (horizontal) or vertical skin incision.' },
          { title: 'Uterotomy', description: 'Incision into the lower uterine segment.' },
          { title: 'Delivery', description: 'Manual delivery of the baby and placenta.' },
          { title: 'Closure', description: 'Two-layer closure of the uterus and standard skin closure.' }
        ],
        anestheticConsiderations: [
          'Regional anesthesia (Spinal/Epidural) is the gold standard',
          'General anesthesia for emergencies or contraindications to regional',
          'Manage rapid onset of hypotension after spinal',
          'Ensure uterine displacement (left tilt)'
        ],
        antibioticProphylaxis: {
          drug: 'Cefuroxime',
          dosage: '1.5g IV',
          timing: 'Before skin incision',
          alternatives: 'Clindamycin + Gentamicin'
        },
        complications: {
          surgical: ['PPH', 'Bladder injury', 'Infection', 'Uterine atony'],
          anesthetic: ['Failed intubation (higher risk)', 'Aspiration', 'Total spinal', 'Awareness (under GA)']
        },
        management: {
          preOp: ['Check blood group and save', 'Review latest Hb and platelets'],
          intraOp: ['Active management of 3rd stage of labor', 'Monitor blood loss'],
          postOp: ['Regular observations', 'Uterine fundal check']
        }
      },
      {
        id: 'cervical-cerclage',
        name: 'Cervical Cerclage',
        guide: [
          { title: 'Positioning', description: 'Lithotomy position.' },
          { title: 'Exposure', description: 'Visualization of the cervix using a speculum.' },
          { title: 'Suturing', description: 'Placement of a non-absorbable suture (e.g., Mersilene tape) around the cervix.' },
          { title: 'Closure', description: 'Ensuring the suture is secure and the cervix is closed.' }
        ],
        anestheticConsiderations: [
          'Regional anesthesia (Spinal) is preferred',
          'General anesthesia if regional is contraindicated',
          'Avoid uterine stimulants',
          'Maintain stable BP'
        ],
        antibioticProphylaxis: {
          drug: 'Cefazolin',
          dosage: '1g IV',
          timing: 'At induction',
          alternatives: 'Clindamycin'
        },
        complications: {
          surgical: ['Rupture of membranes', 'Preterm labor', 'Infection', 'Cervical injury'],
          anesthetic: ['Hypotension (after spinal)', 'PONV']
        },
        management: {
          preOp: ['Confirm fetal viability (US)', 'Review for infection'],
          intraOp: ['Maintain stable anesthesia', 'Monitor fetal heart rate'],
          postOp: ['Monitor for contractions', 'Avoid heavy lifting']
        }
      }
    ]
  }
];
