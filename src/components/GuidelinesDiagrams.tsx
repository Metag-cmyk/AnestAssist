import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  AlertCircle, 
  CheckCircle2, 
  Info, 
  ArrowRight,
  ShieldCheck,
  ExternalLink,
  BookOpen
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Step {
  title: string;
  description: string;
  type: 'action' | 'decision' | 'warning' | 'info';
}

interface GuidelineDiagram {
  id: string;
  title: string;
  source: 'ASA' | 'ESAIC' | 'ESICM' | 'OAA' | 'RCOG' | 'SOAP';
  year: number;
  steps: Step[];
  link: string;
}

const guidelines: GuidelineDiagram[] = [
  {
    id: 'asa-difficult-airway',
    title: 'Difficult Airway Management (2022)',
    source: 'ASA',
    year: 2022,
    link: 'https://pubs.asahq.org/anesthesiology/article/136/1/31/117930/2022-American-Society-of-Anesthesiologists',
    steps: [
      { title: 'Pre-induction', description: 'Assess for difficult airway, optimize positioning, pre-oxygenate', type: 'action' },
      { title: 'Plan A: Intubation', description: 'Max 3 attempts + 1 (expert). Use bougie/stylet/video laryngoscopy', type: 'action' },
      { title: 'Success?', description: 'Confirm with ETCO2', type: 'decision' },
      { title: 'Plan B: SAD', description: 'Rescue with Supraglottic Airway Device (LMA)', type: 'action' },
      { title: 'Plan C: Mask', description: 'Final attempt at bag-mask ventilation', type: 'action' },
      { title: 'CICO Declared', description: 'Can\'t Intubate, Can\'t Oxygenate', type: 'warning' },
      { title: 'Plan D: eFONA', description: 'Emergency Front of Neck Access (Scalpel-Bougie-Tube)', type: 'warning' }
    ]
  },
  {
    id: 'esaic-bleeding',
    title: 'Management of Severe Perioperative Bleeding (2023)',
    source: 'ESAIC',
    year: 2023,
    link: 'https://journals.lww.com/ejanaesthesiology/fulltext/2023/04000/management_of_severe_perioperative_bleeding_.4.aspx',
    steps: [
      { title: 'Initial Assessment', description: 'Identify bleeding source, monitor hemodynamics', type: 'action' },
      { title: 'Basic Measures', description: 'Maintain normothermia, pH > 7.2, Ca2+ > 1.1 mmol/L', type: 'action' },
      { title: 'Coagulation Testing', description: 'Perform POC (TEG/ROTEM) or standard labs', type: 'action' },
      { title: 'Fibrinogen First', description: 'If fibrinogen < 1.5-2.0 g/L or ROTEM FIBTEM A5 < 10mm', type: 'decision' },
      { title: 'Antifibrinolytics', description: 'TXA 1g bolus immediately', type: 'action' },
      { title: 'Targeted Therapy', description: 'Replace PCC, FFP, or Platelets based on POC results', type: 'action' },
      { title: 'Surgical Control', description: 'Re-evaluate surgical or interventional source control', type: 'warning' }
    ]
  },
  {
    id: 'esicm-sepsis',
    title: 'Surviving Sepsis Campaign (2026)',
    source: 'ESICM',
    year: 2026,
    link: 'https://www.esicm.org/surviving-sepsis-campaign-2026-guidelines/',
    steps: [
      { title: 'Recognition & Hour-1 Bundle', description: 'Screen for sepsis (NEWS2/SOFA). Measure lactate, blood cultures x2, broad-spectrum Abx within 1h.', type: 'action' },
      { title: 'Personalized Fluid Resuscitation', description: 'Initial 30 mL/kg crystalloid (balanced). Use dynamic measures (PLR, SVV) for further fluids.', type: 'action' },
      { title: 'Ultra-Early Vasopressors', description: 'Start Noradrenaline if MAP < 65 mmHg despite initial fluids. Peripheral access OK for <24h.', type: 'decision' },
      { title: 'Sepsis Phenotyping', description: 'Assess for hyperinflammatory vs. immunosuppressed phenotypes. Consider steroids if shock refractory.', type: 'info' },
      { title: 'Metabolic Support', description: 'Target glucose 140-180 mg/dL. Consider Thiamine in high-risk patients.', type: 'action' },
      { title: 'Source Control', description: 'Identify and control source (surgical/drainage) within 6-12h. Re-evaluate Abx daily.', type: 'warning' },
      { title: 'Post-ICU Recovery', description: 'Screen for post-sepsis syndrome. Early physical and cognitive rehabilitation.', type: 'info' }
    ]
  },
  {
    id: 'asa-osa-2023',
    title: 'OSA Perioperative Management (2023)',
    source: 'ASA',
    year: 2023,
    link: 'https://pubs.asahq.org/anesthesiology/article/138/1/1/137452/Practice-Guidelines-for-the-Perioperative',
    steps: [
      { title: 'Screening', description: 'Use STOP-BANG or similar tool for all patients', type: 'action' },
      { title: 'Pre-op Optimization', description: 'Continue home CPAP, optimize comorbid conditions', type: 'action' },
      { title: 'Intra-op Strategy', description: 'Prefer regional over general anesthesia; minimize opioids', type: 'action' },
      { title: 'Airway Management', description: 'Extubate when fully awake and in semi-upright position', type: 'decision' },
      { title: 'Post-op Monitoring', description: 'Continuous pulse oximetry and capnography in high-risk patients', type: 'warning' },
      { title: 'Analgesia', description: 'Prioritize multimodal, non-opioid analgesia (NSAIDs, Paracetamol)', type: 'info' }
    ]
  },
  {
    id: 'esaic-nmb-2023',
    title: 'Neuromuscular Blockade Management (2023)',
    source: 'ESAIC',
    year: 2023,
    link: 'https://journals.lww.com/ejanaesthesiology/fulltext/2023/02000/european_society_of_anaesthesiology_and_intensive.4.aspx',
    steps: [
      { title: 'Monitoring', description: 'Use quantitative monitoring (AMG/EMG) on adductor pollicis', type: 'action' },
      { title: 'Maintenance', description: 'Maintain moderate block (TOF count 1-3) if required for surgery', type: 'action' },
      { title: 'Reversal Decision', description: 'Assess TOF count/ratio before reversal', type: 'decision' },
      { title: 'Sugammadex', description: 'Use for deep (PTC 1-2) or moderate (TOF 1-3) block from Rocuronium', type: 'action' },
      { title: 'Neostigmine', description: 'Only if TOF ratio > 0.4; slower onset, risk of bradycardia', type: 'info' },
      { title: 'Extubation Criteria', description: 'TOF ratio must be > 0.9 to avoid residual paralysis', type: 'warning' }
    ]
  },
  {
    id: 'esicm-brain-injury-2022',
    title: 'Acute Brain Injury Management (2022)',
    source: 'ESICM',
    year: 2022,
    link: 'https://www.esicm.org/acute-brain-injury-guidelines/',
    steps: [
      { title: 'Tier 1: Basic', description: 'Head elevation 30°, normothermia, sedation/analgesia', type: 'action' },
      { title: 'ICP Monitoring', description: 'Insert ICP monitor if GCS < 8 and abnormal CT', type: 'action' },
      { title: 'Tier 2: Escalation', description: 'Osmotherapy (Mannitol/Hypertonic saline), EVD drainage', type: 'decision' },
      { title: 'Tier 3: Refractory', description: 'Barbiturate coma, decompressive craniectomy, hypothermia', type: 'warning' },
      { title: 'CPP Target', description: 'Maintain Cerebral Perfusion Pressure 60-70 mmHg', type: 'info' },
      { title: 'Avoidance', description: 'Avoid prophylactic hyperventilation (PaCO2 < 30 mmHg)', type: 'warning' }
    ]
  },
  {
    id: 'oaa-difficult-airway',
    title: 'Obstetric Difficult Airway Guidelines (2015)',
    source: 'OAA',
    year: 2015,
    link: 'https://www.oaa-anaes.ac.uk/Difficult_Airway_Guidelines',
    steps: [
      { title: 'Anticipation', description: 'Assess for difficult airway, optimize positioning, pre-oxygenate', type: 'action' },
      { title: 'Plan A: Intubation', description: 'Max 2 attempts. Use videolaryngoscopy if available', type: 'action' },
      { title: 'Success?', description: 'Confirm with ETCO2', type: 'decision' },
      { title: 'Plan B: SAD', description: 'Rescue with Supraglottic Airway Device (LMA)', type: 'action' },
      { title: 'Plan C: Mask', description: 'Final attempt at bag-mask ventilation', type: 'action' },
      { title: 'CICO Declared', description: 'Can\'t Intubate, Can\'t Oxygenate', type: 'warning' },
      { title: 'Plan D: eFONA', description: 'Emergency Front of Neck Access (Scalpel-Bougie-Tube)', type: 'warning' }
    ]
  },
  {
    id: 'rcog-pph',
    title: 'Prevention and Management of Postpartum Haemorrhage (2016)',
    source: 'RCOG',
    year: 2016,
    link: 'https://www.rcog.org.uk/guidance/browse-all-guidance/green-top-guidelines/prevention-and-management-of-postpartum-haemorrhage-green-top-guideline-no-52/',
    steps: [
      { title: 'Recognition', description: 'Identify blood loss > 500 mL or signs of shock', type: 'action' },
      { title: 'Call for Help', description: 'Activate Major Obstetric Hemorrhage protocol', type: 'action' },
      { title: 'Uterotonics', description: 'Oxytocin 5u IV + 40u infusion. Ergometrine 0.5mg IM. Carboprost 0.25mg IM.', type: 'action' },
      { title: 'Resuscitation', description: '2x large bore IVs. Warm fluids. Crossmatch 4-6 units.', type: 'action' },
      { title: 'Surgical Control', description: 'Intrauterine balloon (Bakri). If fails, laparotomy for B-Lynch or Hysterectomy.', type: 'warning' }
    ]
  },
  {
    id: 'soap-pas',
    title: 'Anesthesia for Placenta Accreta Spectrum (PAS) (2023)',
    source: 'SOAP',
    year: 2023,
    link: 'https://www.soap.org/pas-guidelines',
    steps: [
      { title: 'Pre-op Planning', description: 'Multidisciplinary team, crossmatch blood, invasive access', type: 'action' },
      { title: 'Anesthesia Choice', description: 'General Anesthesia preferred for complex cases', type: 'decision' },
      { title: 'Hemorrhage Prep', description: 'Activate MHP, cell salvage, rapid infuser ready', type: 'action' },
      { title: 'Intra-op Management', description: 'Maintain normothermia, monitoring for massive blood loss', type: 'action' },
      { title: 'Post-op Care', description: 'ICU/HDU admission for monitoring and stabilization', type: 'info' }
    ]
  }
];

export default function GuidelinesDiagrams() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const { t } = useLanguage();

  const sortedGuidelines = [...guidelines].sort((a, b) => b.year - a.year);

  const getTypeStyles = (type: Step['type']) => {
    switch (type) {
      case 'action': return 'bg-blue-50 border-blue-200 text-blue-700';
      case 'decision': return 'bg-amber-50 border-amber-200 text-amber-700';
      case 'warning': return 'bg-rose-50 border-rose-200 text-rose-700';
      case 'info': return 'bg-slate-50 border-slate-200 text-slate-700';
    }
  };

  const getTypeIcon = (type: Step['type']) => {
    switch (type) {
      case 'action': return <CheckCircle2 className="w-4 h-4" />;
      case 'decision': return <ChevronRight className="w-4 h-4" />;
      case 'warning': return <AlertCircle className="w-4 h-4" />;
      case 'info': return <Info className="w-4 h-4" />;
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Sidebar List */}
      <div className="lg:col-span-4 space-y-3">
        {sortedGuidelines.map((g) => (
          <button
            key={g.id}
            onClick={() => setSelectedId(g.id)}
            className={`w-full text-left p-4 rounded-xl border transition-all ${
              selectedId === g.id 
                ? 'bg-medical-primary text-white border-medical-primary shadow-md' 
                : 'bg-white text-slate-600 border-medical-border hover:bg-slate-50'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded ${
                selectedId === g.id ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
              }`}>
                {g.source}
              </span>
              <span className="text-[10px] opacity-60 font-medium">{g.year}</span>
            </div>
            <h3 className="font-bold text-sm leading-tight">{g.title}</h3>
          </button>
        ))}
      </div>

      {/* Diagram View */}
      <div className="lg:col-span-8">
        <AnimatePresence mode="wait">
          {selectedId ? (
            <motion.div
              key={selectedId}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white rounded-2xl border border-medical-border shadow-sm overflow-hidden"
            >
              <div className="p-6 border-b border-medical-border bg-slate-50 flex justify-between items-center">
                <div>
                  <div className="flex items-center gap-2 text-medical-accent text-xs font-bold uppercase tracking-widest mb-1">
                    <ShieldCheck className="w-4 h-4" />
                    {t('common.visualAlgorithm')}
                  </div>
                  <h2 className="text-xl font-bold text-medical-primary">
                    {sortedGuidelines.find(g => g.id === selectedId)?.title}
                  </h2>
                </div>
                <a 
                  href={sortedGuidelines.find(g => g.id === selectedId)?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-400 hover:text-medical-accent transition-colors"
                  title={t('common.viewFull')}
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>

              <div className="p-8">
                <div className="relative space-y-8">
                  {sortedGuidelines.find(g => g.id === selectedId)?.steps.map((step, i, arr) => (
                    <div key={i} className="relative">
                      {/* Connector Line */}
                      {i < arr.length - 1 && (
                        <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-slate-100 -mb-8 flex flex-col items-center justify-center">
                          <ArrowRight className="w-3 h-3 text-slate-300 rotate-90" />
                        </div>
                      )}

                      <div className={`flex items-start gap-4 p-4 rounded-xl border-2 ${getTypeStyles(step.type)}`}>
                        <div className="mt-1 p-2 rounded-lg bg-white/50">
                          {getTypeIcon(step.type)}
                        </div>
                        <div>
                          <h4 className="font-bold text-sm uppercase tracking-wide">{step.title}</h4>
                          <p className="text-sm opacity-90 mt-0.5">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center p-12 text-center bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
              <div className="bg-white p-4 rounded-full shadow-sm mb-4">
                <BookOpen className="w-8 h-8 text-slate-300" />
              </div>
              <h3 className="text-lg font-bold text-slate-400">{t('common.selectGuideline')}</h3>
              <p className="text-sm text-slate-400 max-w-xs mt-1">
                {t('common.selectGuidelineDesc')}
              </p>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
