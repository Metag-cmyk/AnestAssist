import { useState, useMemo } from 'react';
import { UserPlus, Scale, Activity, AlertTriangle, Info, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

type PatientType = 'adult' | 'pediatric' | 'neonatal';

interface Drug {
  name: string;
  dose: string;
  indication: string;
  calculatedDose: string;
  infusionRates?: {
    mcgKgMin: string;
    mcgKgHr: string;
    mgHr: string;
  };
  notes?: string;
}

export default function PatientCalculator() {
  const { t } = useLanguage();
  const [type, setType] = useState<PatientType>('adult');
  const [age, setAge] = useState<number>(30);
  const [weight, setWeight] = useState<number>(70);
  const [height, setHeight] = useState<number>(175);
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [showDrugs, setShowDrugs] = useState(true);
  const [toast, setToast] = useState<string | null>(null);
  const [useIBW, setUseIBW] = useState(false);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  const calculations = useMemo(() => {
    let ibwValue = 0;
    let percentileInfo = "";
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);

    if (type === 'adult') {
      const heightInInches = height / 2.54;
      const inchesOver5ft = Math.max(0, heightInInches - 60);
      ibwValue = gender === 'male' ? 50 + 2.3 * inchesOver5ft : 45.5 + 2.3 * inchesOver5ft;
      
      if (bmi < 18.5) percentileInfo = "Underweight";
      else if (bmi < 25) percentileInfo = "Normal weight";
      else if (bmi < 30) percentileInfo = "Overweight";
      else percentileInfo = "Obese";
    } else if (type === 'neonatal' || (type === 'pediatric' && age < 1)) {
      const ageMonths = type === 'neonatal' ? age / 30 : age;
      ibwValue = (0.5 * ageMonths) + 4;
      percentileInfo = "Neonatal/Infant: Use WHO Growth Charts";
    } else {
      if (age >= 1 && age <= 5) {
        ibwValue = (age * 2) + 8;
      } else if (age >= 6 && age <= 12) {
        ibwValue = (age * 3) + 7;
      } else {
        const heightInInches = height / 2.54;
        const inchesOver5ft = Math.max(0, heightInInches - 60);
        ibwValue = gender === 'male' ? 50 + 2.3 * inchesOver5ft : 45.5 + 2.3 * inchesOver5ft;
      }

      if (bmi < 14) percentileInfo = "< 5th Percentile (Underweight)";
      else if (bmi < 18) percentileInfo = "5th - 85th Percentile (Healthy)";
      else if (bmi < 21) percentileInfo = "85th - 95th Percentile (Overweight)";
      else percentileInfo = "> 95th Percentile (Obese)";
    }

    return { ibw: ibwValue.toFixed(1), bmi: bmi.toFixed(1), category: percentileInfo, rawIbw: ibwValue };
  }, [type, weight, height, gender, age]);

  const targetWeight = useIBW ? calculations.rawIbw : weight;

  const emergencyDrugs = useMemo((): Drug[] => {
    const w = targetWeight;
    const drugs: Drug[] = [
      {
        name: "Adrenaline (Cardiac Arrest)",
        dose: "10 mcg/kg",
        calculatedDose: `${(w * 10).toFixed(0)} mcg (${(w * 0.1).toFixed(1)} mL of 1:10,000)`,
        indication: "IV/IO every 3-5 mins",
        notes: "Pediatric: 0.1 mL/kg of 1:10,000"
      },
      {
        name: "Adrenaline (Anaphylaxis)",
        dose: "5-10 mcg/kg IV",
        calculatedDose: `${(w * 5).toFixed(0)}-${(w * 10).toFixed(0)} mcg IV`,
        indication: "Titrate to effect",
        notes: "IM dose: 0.5mg (Adult), 0.01mg/kg (Peds)"
      },
      {
        name: "Atropine",
        dose: "20 mcg/kg",
        calculatedDose: `${(w * 20 / 1000).toFixed(2)} mg`,
        indication: "Bradycardia",
        notes: "Min dose 0.1mg, Max 0.5mg (Peds)"
      },
      {
        name: "Amiodarone",
        dose: "5 mg/kg",
        calculatedDose: `${(w * 5).toFixed(0)} mg`,
        indication: "Refractory VF/pVT",
        notes: "Max 300mg"
      },
      {
        name: "Propofol (Induction)",
        dose: "2-3 mg/kg",
        calculatedDose: `${(w * 2).toFixed(0)}-${(w * 3).toFixed(0)} mg`,
        indication: "Anesthesia Induction",
        notes: "Reduce dose in elderly/shock"
      },
      {
        name: "Succinylcholine",
        dose: "1.5-2 mg/kg",
        calculatedDose: `${(w * 1.5).toFixed(0)}-${(w * 2).toFixed(0)} mg`,
        indication: "Rapid Sequence Induction",
        notes: "Avoid in hyperkalemia/burns"
      },
      {
        name: "Rocuronium",
        dose: "0.6-1.2 mg/kg",
        calculatedDose: `${(w * 0.6).toFixed(0)}-${(w * 1.2).toFixed(0)} mg`,
        indication: "Neuromuscular Blockade",
        notes: "1.2mg/kg for RSI"
      },
      {
        name: "Fentanyl",
        dose: "1-2 mcg/kg",
        calculatedDose: `${(w * 1).toFixed(0)}-${(w * 2).toFixed(0)} mcg`,
        indication: "Analgesia/Induction",
        notes: "Watch for respiratory depression"
      },
      {
        name: "Ephedrine",
        dose: "0.1-0.2 mg/kg",
        calculatedDose: `${(w * 0.1).toFixed(1)}-${(w * 0.2).toFixed(1)} mg`,
        indication: "Hypotension (Vasopressor)",
        notes: "Increases HR and BP"
      },
      {
        name: "Metaraminol",
        dose: "0.01 mg/kg",
        calculatedDose: `${(w * 0.01).toFixed(2)} mg`,
        indication: "Hypotension (Vasopressor)",
        notes: "Reflex bradycardia possible"
      },
      {
        name: "Ketamine",
        dose: "1-2 mg/kg",
        calculatedDose: `${(w * 1).toFixed(0)}-${(w * 2).toFixed(0)} mg`,
        indication: "Induction/Analgesia",
        notes: "Sympathomimetic, bronchodilator"
      },
      {
        name: "Adenosine",
        dose: "0.1-0.3 mg/kg",
        calculatedDose: `${(w * 0.1).toFixed(1)}-${(w * 0.3).toFixed(1)} mg`,
        indication: "SVT (Rapid bolus)",
        notes: "Max 1st dose 6mg, 2nd 12mg"
      },
      {
        name: "Magnesium Sulfate",
        dose: "40-50 mg/kg",
        calculatedDose: `${(w * 40).toFixed(0)}-${(w * 50).toFixed(0)} mg`,
        indication: "Asthma / Refractory VF",
        notes: "Max 2g. Slow infusion for asthma."
      },
      {
        name: "Glucose 10%",
        dose: "2-5 mL/kg",
        calculatedDose: `${(w * 2).toFixed(0)}-${(w * 5).toFixed(0)} mL`,
        indication: "Hypoglycemia",
        notes: "Re-check BG after 15 mins"
      },
      {
        name: "Ceftriaxone",
        dose: "50-80 mg/kg",
        calculatedDose: `${(w * 50).toFixed(0)}-${(w * 80).toFixed(0)} mg`,
        indication: "Sepsis / Meningitis",
        notes: "Max 2g"
      },
      {
        name: "Dexamethasone",
        dose: "0.15-0.6 mg/kg",
        calculatedDose: `${(w * 0.15).toFixed(1)}-${(w * 0.6).toFixed(1)} mg`,
        indication: "Croup / Anaphylaxis",
        notes: "Max 12-16mg"
      },
      {
        name: "Noradrenaline (Infusion)",
        dose: "0.01-0.5 mcg/kg/min",
        calculatedDose: `${(w * 0.01).toFixed(2)}-${(w * 0.5).toFixed(2)} mcg/min`,
        infusionRates: {
          mcgKgMin: "0.01 - 0.5",
          mcgKgHr: "0.6 - 30",
          mgHr: `${(w * 0.6 / 1000).toFixed(3)} - ${(w * 30 / 1000).toFixed(3)}`
        },
        indication: "Septic Shock / Hypotension",
        notes: "Titrate to MAP > 65"
      },
      {
        name: "Dopamine (Infusion)",
        dose: "2-20 mcg/kg/min",
        calculatedDose: `${(w * 2).toFixed(0)}-${(w * 20).toFixed(0)} mcg/min`,
        infusionRates: {
          mcgKgMin: "2 - 20",
          mcgKgHr: "120 - 1200",
          mgHr: `${(w * 120 / 1000).toFixed(2)} - ${(w * 1200 / 1000).toFixed(2)}`
        },
        indication: "Inotropic support",
        notes: "Renal vs Inotropic vs Pressor doses"
      },
      {
        name: "Propofol (Infusion)",
        dose: "1-4 mg/kg/h",
        calculatedDose: `${(w * 1).toFixed(0)}-${(w * 4).toFixed(0)} mg/h`,
        infusionRates: {
          mcgKgMin: `${(1000 / 60).toFixed(1)} - ${(4000 / 60).toFixed(1)}`,
          mcgKgHr: "1000 - 4000",
          mgHr: `${(w * 1).toFixed(1)} - ${(w * 4).toFixed(1)}`
        },
        indication: "Maintenance of Anesthesia / Sedation",
        notes: "Monitor for PRIS"
      }
    ];
    return drugs;
  }, [targetWeight]);

  const equipmentSizes = useMemo(() => {
    if (type === 'adult') return null;
    
    let ett = 0;
    let depth = 0;
    let lma = 0;
    let blade = 0;

    if (type === 'neonatal') {
      ett = age < 30 ? 3.0 : 3.5;
      depth = 9;
      lma = 1;
      blade = 0;
    } else {
      // Pediatric formulas
      ett = (age / 4) + 4; // Uncuffed
      depth = (age / 2) + 12;
      
      if (weight < 5) lma = 1;
      else if (weight < 10) lma = 1.5;
      else if (weight < 20) lma = 2;
      else if (weight < 30) lma = 2.5;
      else lma = 3;

      if (age < 1) blade = 1;
      else if (age < 5) blade = 2;
      else blade = 3;
    }

    return { ett: ett.toFixed(1), depth: depth.toFixed(1), lma, blade };
  }, [type, age, weight]);

  const resetData = () => {
    setType('adult');
    setAge(30);
    setWeight(70);
    setHeight(175);
    setGender('male');
    setUseIBW(false);
    showToast(t('patient.toastReset'));
  };

  const copyDoses = () => {
    const text = emergencyDrugs.map(d => {
      let base = `${d.name}: ${d.calculatedDose}`;
      if (d.infusionRates) {
        base += `\n  - ${d.infusionRates.mcgKgMin} mcg/kg/min\n  - ${d.infusionRates.mcgKgHr} mcg/kg/h\n  - ${d.infusionRates.mgHr} mg/h`;
      }
      return base;
    }).join('\n\n');
    navigator.clipboard.writeText(text);
    showToast(t('patient.toastCopy'));
  };

  const getAgeLabel = () => {
    if (type === 'neonatal') return t('patient.days');
    if (type === 'pediatric' && age < 1) return t('patient.months');
    return t('patient.years');
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl border border-medical-border shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <UserPlus className="w-5 h-5 text-medical-accent" />
            {t('patient.title')}
          </h2>
          <button 
            onClick={resetData}
            className="text-xs font-bold text-slate-400 hover:text-medical-accent transition-colors uppercase tracking-widest"
          >
            {t('patient.reset')}
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <div>
            <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">{t('patient.type')}</label>
            <div className="flex flex-col gap-1">
              {(['adult', 'pediatric', 'neonatal'] as PatientType[]).map((tVal) => (
                <button
                  key={tVal}
                  onClick={() => setType(tVal)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase border transition-all ${
                    type === tVal ? 'bg-medical-primary text-white border-medical-primary' : 'bg-white text-slate-500 border-medical-border hover:bg-slate-50'
                  }`}
                >
                  {tVal}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">
              {t('patient.age')} ({getAgeLabel()})
            </label>
            <input 
              type="number" 
              value={age} 
              onChange={(e) => setAge(Number(e.target.value))}
              className="w-full p-2 border border-medical-border rounded-lg text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">{t('patient.weight')}</label>
            <input 
              type="number" 
              value={weight} 
              onChange={(e) => setWeight(Number(e.target.value))}
              className="w-full p-2 border border-medical-border rounded-lg text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">{t('patient.height')}</label>
            <input 
              type="number" 
              value={height} 
              onChange={(e) => setHeight(Number(e.target.value))}
              className="w-full p-2 border border-medical-border rounded-lg text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">{t('patient.gender')}</label>
            <div className="flex gap-2">
              <button
                onClick={() => setGender('male')}
                className={`flex-1 py-2 rounded-lg text-sm font-medium border transition-all ${
                  gender === 'male' ? 'bg-medical-accent text-white border-medical-accent' : 'bg-white text-slate-600 border-medical-border hover:bg-slate-50'
                }`}
              >
                {t('patient.male')}
              </button>
              <button
                onClick={() => setGender('female')}
                className={`flex-1 py-2 rounded-lg text-sm font-medium border transition-all ${
                  gender === 'female' ? 'bg-medical-accent text-white border-medical-accent' : 'bg-white text-slate-600 border-medical-border hover:bg-slate-50'
                }`}
              >
                {t('patient.female')}
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 bg-slate-50 rounded-xl border border-medical-border text-center">
            <p className="text-xs font-bold text-slate-400 uppercase mb-1">{t('patient.ibw')}</p>
            <p className="text-2xl font-bold text-medical-primary">{calculations.ibw} <span className="text-sm font-normal">kg</span></p>
            {type !== 'adult' && <p className="text-[10px] text-slate-400 mt-1">{t('patient.apls')}</p>}
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-medical-border text-center">
            <p className="text-xs font-bold text-slate-400 uppercase mb-1">
              {type === 'adult' ? t('patient.bmi') : t('patient.bmiPercentile')}
            </p>
            <p className="text-2xl font-bold text-medical-primary">{calculations.bmi}</p>
            <p className="text-xs text-medical-accent font-medium">{calculations.category}</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-xl border border-blue-100 text-center">
            <p className="text-xs font-bold text-blue-400 uppercase mb-1">{t('patient.targetWeight')}</p>
            <p className="text-2xl font-bold text-blue-700 mb-2">{targetWeight.toFixed(1)} <span className="text-sm font-normal">kg</span></p>
            <div className="flex bg-white/50 p-1 rounded-lg border border-blue-200">
              <button
                onClick={() => setUseIBW(false)}
                className={`flex-1 py-1 text-[10px] font-bold uppercase rounded transition-all ${
                  !useIBW ? 'bg-blue-600 text-white shadow-sm' : 'text-blue-400 hover:text-blue-600'
                }`}
              >
                {t('patient.actual')}
              </button>
              <button
                onClick={() => setUseIBW(true)}
                className={`flex-1 py-1 text-[10px] font-bold uppercase rounded transition-all ${
                  useIBW ? 'bg-blue-600 text-white shadow-sm' : 'text-blue-400 hover:text-blue-600'
                }`}
              >
                {t('patient.ideal')}
              </button>
            </div>
          </div>
        </div>
      </div>

      {equipmentSizes && (
        <div className="bg-white p-6 rounded-xl border border-medical-border shadow-sm">
          <h3 className="text-lg font-bold flex items-center gap-2 mb-4 text-medical-primary">
            <Activity className="w-5 h-5 text-medical-accent" />
            {t('patient.equipmentTitle')}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-3 bg-slate-50 rounded-lg border border-medical-border text-center">
              <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">{t('patient.ettSize')}</p>
              <p className="text-xl font-bold text-medical-primary">{equipmentSizes.ett}</p>
              <p className="text-[10px] text-slate-400 mt-1">{t('patient.cuffedNote')}</p>
            </div>
            <div className="p-3 bg-slate-50 rounded-lg border border-medical-border text-center">
              <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">{t('patient.ettDepth')}</p>
              <p className="text-xl font-bold text-medical-primary">{equipmentSizes.depth} <span className="text-xs font-normal">cm</span></p>
            </div>
            <div className="p-3 bg-slate-50 rounded-lg border border-medical-border text-center">
              <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">{t('patient.lmaSize')}</p>
              <p className="text-xl font-bold text-medical-primary">{equipmentSizes.lma}</p>
            </div>
            <div className="p-3 bg-slate-50 rounded-lg border border-medical-border text-center">
              <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">{t('patient.blade')}</p>
              <p className="text-xl font-bold text-medical-primary">{equipmentSizes.blade}</p>
              <p className="text-[10px] text-slate-400 mt-1">{t('patient.millerNote')}</p>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white rounded-xl border border-medical-border shadow-sm overflow-hidden">
        <div 
          onClick={() => setShowDrugs(!showDrugs)}
          className="w-full px-6 py-4 flex items-center justify-between bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-500" />
            <h3 className="font-bold text-medical-primary">{t('patient.drugsTitle')}</h3>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                copyDoses();
              }}
              className="text-xs font-bold text-medical-accent hover:text-blue-700 transition-colors uppercase tracking-widest"
            >
              {t('patient.copyDoses')}
            </button>
            {showDrugs ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </div>
        </div>

        <AnimatePresence>
          {toast && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-medical-primary text-white px-6 py-3 rounded-full shadow-2xl z-[100] flex items-center gap-2"
            >
              <Info className="w-4 h-4 text-medical-accent" />
              <span className="text-sm font-bold">{toast}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {showDrugs && (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 border-b border-medical-border">
                <tr>
                  <th className="px-6 py-3 font-semibold text-slate-600">{t('patient.tableName')}</th>
                  <th className="px-6 py-3 font-semibold text-slate-600">{t('patient.tableDose')}</th>
                  <th className="px-6 py-3 font-semibold text-medical-accent">{t('patient.tableCalc')}</th>
                  <th className="px-6 py-3 font-semibold text-slate-600">{t('patient.tableNotes')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-medical-border">
                {emergencyDrugs.map((drug, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-bold text-medical-primary">{drug.name}</td>
                    <td className="px-6 py-4 text-slate-600">{drug.dose}</td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col gap-2">
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-bold w-fit">
                          {drug.calculatedDose}
                        </span>
                        {drug.infusionRates && (
                          <div className="grid grid-cols-1 gap-1 mt-1">
                            <div className="flex justify-between text-[10px] font-bold text-slate-500 border-b border-slate-100 pb-1">
                              <span>{t('patient.mcgKgMin')}</span>
                              <span className="text-medical-primary">{drug.infusionRates.mcgKgMin}</span>
                            </div>
                            <div className="flex justify-between text-[10px] font-bold text-slate-500 border-b border-slate-100 pb-1">
                              <span>{t('patient.mcgKgHr')}</span>
                              <span className="text-medical-primary">{drug.infusionRates.mcgKgHr}</span>
                            </div>
                            <div className="flex justify-between text-[10px] font-bold text-slate-500">
                              <span>{t('patient.mgHr')}</span>
                              <span className="text-medical-primary">{drug.infusionRates.mgHr}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-medium text-slate-700">{drug.indication}</p>
                      {drug.notes && <p className="text-xs text-slate-400 mt-1 italic">{drug.notes}</p>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div className="p-4 bg-amber-50 rounded-lg border border-amber-100 flex gap-3 items-start">
        <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
        <div className="text-sm text-amber-800">
          <p className="font-bold mb-1">{t('patient.disclaimerTitle')}:</p>
          <p>{t('patient.disclaimerText')}</p>
        </div>
      </div>
    </div>
  );
}
