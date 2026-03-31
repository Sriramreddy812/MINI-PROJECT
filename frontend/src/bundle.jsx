// Global React hooks
var useState    = React.useState;
var useEffect   = React.useEffect;
var useRef      = React.useRef;
var useCallback = React.useCallback;

// ═══════════════════════════════════════════════════════
// NEW MINI — DISEASES CONFIG
// ═══════════════════════════════════════════════════════

const DISEASES = {

  heart: {
    id:       'heart',
    name:     'Heart Disease',
    emoji:    '❤️',
    color:    '#ef4444',
    colorRgb: '239, 68, 68',
    apiRoute: 'heart',
    description: 'Evaluate cardiovascular health through blood pressure, cholesterol and heart rate.',
    features: ['Cholesterol Analysis', 'Blood Pressure', 'Heart Rate'],
    chartParams: [
      { key: 'trestbps', label: 'Blood Pressure', unit: 'mm Hg', normalMax: 120, max: 250 },
      { key: 'chol',     label: 'Cholesterol',    unit: 'mg/dl', normalMax: 200, max: 700 },
      { key: 'thalach',  label: 'Max Heart Rate', unit: 'bpm',   normalMin: 60,  normalMax: 170, max: 250 },
    ],
    fields: [
      { key: 'age',      label: 'Age',                          type: 'number', placeholder: '45',  unit: 'years',  min: 1,  max: 120, required: true },
      { key: 'sex',      label: 'Gender',                       type: 'toggle', options: [{ label: '♀ Female', value: 0 }, { label: '♂ Male', value: 1 }], required: true },
      { key: 'cp',       label: 'Chest Pain Type',              type: 'select', options: [{ label: 'Typical Angina', value: 0 }, { label: 'Atypical Angina', value: 1 }, { label: 'Non-Anginal Pain', value: 2 }, { label: 'Asymptomatic', value: 3 }], required: true },
      { key: 'trestbps', label: 'Resting Blood Pressure',       type: 'number', placeholder: '120', unit: 'mm Hg', min: 50, max: 250, required: true },
      { key: 'chol',     label: 'Cholesterol Level',            type: 'number', placeholder: '200', unit: 'mg/dl', min: 50, max: 700, required: true },
      { key: 'fbs',      label: 'Fasting Blood Sugar > 120',    type: 'toggle', options: [{ label: '✗ No', value: 0 }, { label: '✓ Yes', value: 1 }], required: true },
      { key: 'thalach',  label: 'Maximum Heart Rate',           type: 'number', placeholder: '150', unit: 'bpm',   min: 50, max: 250, required: true },
      { key: 'exang',    label: 'Chest Pain During Exercise',   type: 'toggle', options: [{ label: '✗ No', value: 0 }, { label: '✓ Yes', value: 1 }], required: true },
    ],
    healthyRanges: {
      age:      { min: 0,  max: 120, healthy: 40  },
      trestbps: { min: 50, max: 250, healthy: 110 },
      chol:     { min: 50, max: 700, healthy: 180 },
      thalach:  { min: 50, max: 250, healthy: 160 },
    },
  },

  brain: {
    id:       'brain',
    name:     'Brain Stroke',
    emoji:    '🧠',
    color:    '#8b5cf6',
    colorRgb: '139, 92, 246',
    apiRoute: 'brain',
    description: 'Assess stroke risk through blood pressure, glucose levels and lifestyle factors.',
    features: ['Glucose Analysis', 'Hypertension Check', 'Lifestyle Factors'],
    chartParams: [
      { key: 'avg_glucose_level', label: 'Blood Sugar', unit: 'mg/dl', normalMax: 140, max: 400 },
      { key: 'bmi',               label: 'BMI',         unit: '',      normalMax: 24.9, max: 70  },
    ],
    fields: [
      { key: 'age',               label: 'Age',                  type: 'number', placeholder: '50', unit: 'years', min: 1, max: 120, required: true },
      { key: 'gender',            label: 'Gender',               type: 'toggle', options: [{ label: '♀ Female', value: 'Female' }, { label: '♂ Male', value: 'Male' }], required: true },
      { key: 'hypertension',      label: 'High Blood Pressure',  type: 'toggle', options: [{ label: '✗ No', value: 0 }, { label: '✓ Yes', value: 1 }], required: true },
      { key: 'heart_disease',     label: 'Heart Disease History',type: 'toggle', options: [{ label: '✗ No', value: 0 }, { label: '✓ Yes', value: 1 }], required: true },
      { key: 'avg_glucose_level', label: 'Average Blood Sugar',  type: 'number', placeholder: '90', unit: 'mg/dl', min: 0, max: 400, required: true },
      { key: 'bmi',               label: 'BMI',                  type: 'bmi',    required: true },
      { key: 'smoking_status',    label: 'Smoking Status',       type: 'select', options: [{ label: 'Never Smoked', value: 'never smoked' }, { label: 'Formerly Smoked', value: 'formerly smoked' }, { label: 'Currently Smokes', value: 'smokes' }, { label: 'Unknown', value: 'Unknown' }], required: true },
      { key: 'work_type',         label: 'Work Type',            type: 'select', options: [{ label: 'Private', value: 'Private' }, { label: 'Self Employed', value: 'Self-employed' }, { label: 'Government', value: 'Govt_job' }, { label: 'Other', value: 'Never_worked' }], required: true },
    ],
    healthyRanges: {
      avg_glucose_level: { min: 0, max: 400, healthy: 90 },
      bmi:               { min: 5, max: 70,  healthy: 22 },
    },
  },

  kidney: {
    id:       'kidney',
    name:     'Kidney Disease',
    emoji:    '🫘',
    color:    '#f59e0b',
    colorRgb: '245, 158, 11',
    apiRoute: 'kidney',
    description: 'Monitor kidney function through blood pressure, sugar levels and symptoms.',
    features: ['Blood Pressure', 'Sugar Levels', 'Symptom Analysis'],
    chartParams: [
      { key: 'blood_pressure', label: 'Blood Pressure', unit: 'mm Hg', normalMax: 90,  max: 200 },
      { key: 'blood_sugar',    label: 'Blood Sugar',    unit: 'mg/dl', normalMax: 140, max: 500 },
    ],
    fields: [
      { key: 'age',            label: 'Age',              type: 'number', placeholder: '45',  unit: 'years',  min: 1,  max: 120, required: true },
      { key: 'blood_pressure', label: 'Blood Pressure',   type: 'number', placeholder: '80',  unit: 'mm Hg', min: 50, max: 200, required: true },
      { key: 'blood_sugar',    label: 'Blood Sugar Level',type: 'number', placeholder: '100', unit: 'mg/dl', min: 50, max: 500, required: true },
      { key: 'hypertension',   label: 'High Blood Pressure', type: 'toggle', options: [{ label: '✗ No', value: 'no' }, { label: '✓ Yes', value: 'yes' }], required: true },
      { key: 'diabetes',       label: 'Diabetes',         type: 'toggle', options: [{ label: '✗ No', value: 'no' }, { label: '✓ Yes', value: 'yes' }], required: true },
      { key: 'appetite',       label: 'Appetite',         type: 'toggle', options: [{ label: '😊 Good', value: 'good' }, { label: '😔 Poor', value: 'poor' }], required: true },
      { key: 'swelling',       label: 'Swelling in Feet', type: 'toggle', options: [{ label: '✗ No', value: 'no' }, { label: '✓ Yes', value: 'yes' }], required: true },
      { key: 'anaemia',        label: 'Anaemia',          type: 'toggle', options: [{ label: '✗ No', value: 'no' }, { label: '✓ Yes', value: 'yes' }], required: true },
    ],
    healthyRanges: {
      blood_pressure: { min: 50, max: 200, healthy: 70  },
      blood_sugar:    { min: 50, max: 500, healthy: 100 },
    },
  },

  diabetes: {
    id:       'diabetes',
    name:     'Diabetes',
    emoji:    '🩸',
    color:    '#3b82f6',
    colorRgb: '59, 130, 246',
    apiRoute: 'diabetes',
    description: 'Analyze glucose levels, BMI and metabolic indicators to predict diabetes risk.',
    features: ['Glucose Analysis', 'BMI Evaluation', 'Family History'],
    chartParams: [
      { key: 'glucose',        label: 'Blood Sugar',    unit: 'mg/dl', normalMax: 140, max: 300 },
      { key: 'blood_pressure', label: 'Blood Pressure', unit: 'mm Hg', normalMax: 120, max: 150 },
      { key: 'bmi',            label: 'BMI',            unit: '',      normalMax: 24.9, max: 70  },
    ],
    fields: [
      { key: 'age',            label: 'Age',                     type: 'number', placeholder: '35', unit: 'years', min: 1,  max: 120, required: true },
      { key: 'pregnancies',    label: 'Number of Pregnancies',   type: 'number', placeholder: '0',  unit: 'count', min: 0,  max: 20,  required: true },
      { key: 'glucose',        label: 'Blood Sugar Level',       type: 'number', placeholder: '100',unit: 'mg/dl', min: 0,  max: 300, required: true },
      { key: 'blood_pressure', label: 'Blood Pressure',          type: 'number', placeholder: '72', unit: 'mm Hg',min: 0,  max: 150, required: true },
      { key: 'bmi',            label: 'BMI',                     type: 'bmi',    required: true },
      { key: 'pedigree',       label: 'Family History of Diabetes', type: 'toggle', options: [{ label: '✗ No', value: 0.1 }, { label: '✓ Yes', value: 0.8 }], required: true },
      { key: 'skin_thickness', label: 'Physical Activity Level', type: 'select', options: [{ label: 'High Activity', value: 10 }, { label: 'Moderate Activity', value: 25 }, { label: 'Low Activity', value: 40 }], required: true },
      { key: 'insulin',        label: 'Diet Type',               type: 'select', options: [{ label: 'Healthy Diet', value: 50 }, { label: 'Moderate Diet', value: 100 }, { label: 'Unhealthy Diet', value: 200 }], required: true },
    ],
    healthyRanges: {
      glucose:        { min: 0, max: 300, healthy: 90  },
      blood_pressure: { min: 0, max: 150, healthy: 70  },
      bmi:            { min: 5, max: 70,  healthy: 22  },
    },
  },
};

const DISEASE_LIST = ['heart', 'brain', 'kidney', 'diabetes'];

function getDisease(id) { return DISEASES[id]; }
function getAllDiseases() { return DISEASE_LIST.map(id => DISEASES[id]); }

// ═══════════════════════════════════════════════════════
// API SERVICE
// ═══════════════════════════════════════════════════════

const API_BASE = 'http://127.0.0.1:5001';

async function checkHealth() {
  try {
    const res = await fetch(`${API_BASE}/health`);
    return await res.json();
  } catch (err) {
    return null;
  }
}

async function predictDisease(disease, formData) {
  try {
    const res = await fetch(`${API_BASE}/predict/${disease}`, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify(formData),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Prediction failed');
    return { success: true, data };
  } catch (err) {
    return { success: false, error: err.message || 'Could not connect to backend. Make sure Flask is running on port 5001.' };
  }
}

// ═══════════════════════════════════════════════════════
// FLOATING ELEMENTS
// ═══════════════════════════════════════════════════════

function ECGLine({ style }) {
  return (
    <svg viewBox="0 0 800 80" style={{ width: '100%', height: '80px', ...style }} fill="none" preserveAspectRatio="none">
      <path
        className="ecg-path"
        d="M0 40 L60 40 L80 40 L95 10 L110 70 L125 20 L140 60 L155 40
           L220 40 L240 40 L255 10 L270 70 L285 20 L300 60 L315 40
           L380 40 L400 40 L415 10 L430 70 L445 20 L460 60 L475 40
           L540 40 L560 40 L575 10 L590 70 L605 20 L620 60 L635 40
           L700 40 L720 40 L735 10 L750 70 L765 20 L780 60 L800 40"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
}

function DNAHelix({ size = 60 }) {
  return (
    <svg width={size} height={size * 2.5} viewBox="0 0 60 150" fill="none">
      <path d="M10 10 Q30 30 50 10 Q30 50 10 30 Q30 70 50 50 Q30 90 10 70 Q30 110 50 90 Q30 130 10 110 Q30 150 50 130"
        stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.8" />
      {[20, 50, 80, 110].map((y, i) => (
        <line key={i} x1="15" y1={y} x2="45" y2={y} stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      ))}
      {[10, 30, 50, 70, 90, 110, 130].map((y, i) => (
        <circle key={i} cx={i % 2 === 0 ? 10 : 50} cy={y} r="3.5" fill="currentColor" opacity="0.7"
          style={{ animation: `pulse-glow 2s ease-in-out ${i * 0.3}s infinite` }} />
      ))}
    </svg>
  );
}

function Molecule({ size = 80 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <line x1="50" y1="50" x2="20" y2="25" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <line x1="50" y1="50" x2="80" y2="25" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <line x1="50" y1="50" x2="20" y2="75" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <line x1="50" y1="50" x2="80" y2="75" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <line x1="50" y1="50" x2="50" y2="15" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <circle cx="50" cy="50" r="12" fill="currentColor" opacity="0.8" style={{ animation: 'pulse-glow 3s ease-in-out infinite' }} />
      {[{ cx: 20, cy: 25 }, { cx: 80, cy: 25 }, { cx: 20, cy: 75 }, { cx: 80, cy: 75 }, { cx: 50, cy: 15 }].map((pos, i) => (
        <circle key={i} cx={pos.cx} cy={pos.cy} r="7" fill="currentColor" opacity="0.5"
          style={{ animation: `pulse-glow 2.5s ease-in-out ${i * 0.4}s infinite` }} />
      ))}
    </svg>
  );
}

function HeartBeat({ size = 48 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <path d="M50 85 C20 60 5 40 5 25 C5 12 15 5 28 5 C38 5 46 12 50 20 C54 12 62 5 72 5 C85 5 95 12 95 25 C95 40 80 60 50 85Z"
        fill="currentColor" style={{ animation: 'heartbeat 1.4s ease-in-out infinite' }} />
    </svg>
  );
}

function MedCross({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="currentColor">
      <rect x="22" y="5"  width="16" height="50" rx="6" opacity="0.8" />
      <rect x="5"  y="22" width="50" height="16" rx="6" opacity="0.8" />
    </svg>
  );
}

function Pill({ size = 50 }) {
  return (
    <svg width={size} height={size * 0.5} viewBox="0 0 100 50" fill="none">
      <rect x="2" y="2" width="96" height="46" rx="23" stroke="currentColor" strokeWidth="3" opacity="0.6" />
      <line x1="50" y1="2" x2="50" y2="48" stroke="currentColor" strokeWidth="2" opacity="0.4" />
      <rect x="2" y="2" width="48" height="46" rx="23" fill="currentColor" opacity="0.3" />
    </svg>
  );
}

function FloatingElements() {
  return (
    <div style={{ position: 'fixed', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />
      <div style={{ position: 'absolute', top: '8%', left: '3%', opacity: 0.18, color: 'var(--teal)', animation: 'float 9s ease-in-out infinite' }}>
        <DNAHelix size={50} />
      </div>
      <div style={{ position: 'absolute', top: '12%', right: '5%', opacity: 0.2, color: 'var(--coral)', animation: 'float-delayed 8s ease-in-out infinite' }}>
        <Molecule size={70} />
      </div>
      <div style={{ position: 'absolute', top: '42%', left: '4%', opacity: 0.2, color: 'var(--coral)', animation: 'float 7s ease-in-out 1s infinite' }}>
        <HeartBeat size={52} />
      </div>
      <div style={{ position: 'absolute', top: '55%', right: '6%', opacity: 0.18, color: 'var(--sage)', animation: 'float-delayed 11s ease-in-out infinite' }}>
        <MedCross size={44} />
      </div>
      <div style={{ position: 'absolute', bottom: '20%', right: '10%', opacity: 0.15, color: 'var(--teal-light)', animation: 'float 10s ease-in-out 2s infinite' }}>
        <DNAHelix size={40} />
      </div>
      <div style={{ position: 'absolute', bottom: '15%', left: '8%', opacity: 0.18, color: 'var(--brain-color)', animation: 'float-delayed 8s ease-in-out 3s infinite' }}>
        <Molecule size={60} />
      </div>
      <div style={{ position: 'absolute', top: '30%', right: '2%', opacity: 0.15, color: 'var(--diabetes-color)', animation: 'float 12s ease-in-out 1s infinite' }}>
        <Pill size={60} />
      </div>
      {[
        { top: '20%', left: '20%',  size: 20, color: 'var(--teal)',        delay: '0s' },
        { top: '70%', left: '25%',  size: 16, color: 'var(--coral)',       delay: '2s' },
        { top: '35%', right: '22%', size: 18, color: 'var(--sage)',        delay: '4s' },
        { top: '80%', right: '30%', size: 14, color: 'var(--teal-light)',  delay: '1s' },
        { top: '15%', left: '45%',  size: 12, color: 'var(--coral-light)', delay: '3s' },
      ].map((item, i) => (
        <div key={i} style={{ position: 'absolute', top: item.top, left: item.left, right: item.right, opacity: 0.12, color: item.color, animation: `float ${7 + i}s ease-in-out ${item.delay} infinite` }}>
          <MedCross size={item.size} />
        </div>
      ))}
      <div className="ecg-container" style={{ color: 'var(--teal)' }}>
        <ECGLine />
      </div>
      <div style={{ position: 'fixed', top: '8px', left: 0, width: '100%', height: '60px', overflow: 'hidden', pointerEvents: 'none', opacity: 0.08, zIndex: 1, color: 'var(--coral)' }}>
        <ECGLine style={{ animationDelay: '-2s' }} />
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// LOADER
// ═══════════════════════════════════════════════════════

function Loader({ disease }) {
  const [step, setStep]         = useState(0);
  const [progress, setProgress] = useState(0);

  const config = getDisease(disease) || { emoji: '🔬', name: 'Disease', color: 'var(--teal)', colorRgb: '100,200,180' };

  const steps = [
    'Preprocessing your inputs...',
    'Running Decision Tree model...',
    'Running Random Forest model...',
    'Running Logistic Regression...',
    'Selecting best model...',
    'Generating explanation...',
  ];

  useEffect(() => {
    const stepTimer = setInterval(() => {
      setStep(prev => {
        if (prev < steps.length - 1) return prev + 1;
        clearInterval(stepTimer);
        return prev;
      });
    }, 400);
    const progTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 95) { clearInterval(progTimer); return 95; }
        return prev + Math.random() * 8;
      });
    }, 150);
    return () => { clearInterval(stepTimer); clearInterval(progTimer); };
  }, []);

  return (
    <div className="analyzing-overlay">
      <div className="analyzing-pulse" style={{ background: `rgba(${config.colorRgb}, 0.1)` }}>
        <span style={{ fontSize: '42px' }}>{config.emoji}</span>
        <div style={{ position: 'absolute', inset: '-10px', borderRadius: '50%', border: `2px solid ${config.color}`, opacity: 0, animation: 'pulse-ring 1.5s ease-out infinite' }} />
        <div style={{ position: 'absolute', inset: '-10px', borderRadius: '50%', border: `2px solid ${config.color}`, opacity: 0, animation: 'pulse-ring 1.5s ease-out 0.75s infinite' }} />
      </div>
      <div className="analyzing-text">Analyzing {config.name} Risk</div>
      <div className="analyzing-sub" style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: config.color, minHeight: '20px' }}>
        {steps[step]}
      </div>
      <div className="analyzing-bar">
        <div className="analyzing-bar-fill" style={{ width: `${progress}%`, background: `linear-gradient(90deg, ${config.color}, var(--coral))`, transition: 'width 0.15s ease', animation: 'none' }} />
      </div>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--text-dim)' }}>
        {Math.round(progress)}%
      </div>
      <div style={{ display: 'flex', gap: '24px', marginTop: '8px' }}>
        {['DT', 'RF', 'LR'].map((model, i) => (
          <div key={model} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', opacity: step > i ? 1 : 0.3, transition: 'opacity 0.4s' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: step > i ? `rgba(${config.colorRgb}, 0.15)` : 'var(--border)', border: `1px solid ${step > i ? config.color : 'transparent'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', transition: 'all 0.4s' }}>
              {step > i ? '✓' : '○'}
            </div>
            <span style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: step > i ? config.color : 'var(--text-dim)' }}>{model}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// DISEASE CARD
// ═══════════════════════════════════════════════════════

function DiseaseCard({ disease, onClick, delay = 0 }) {
  const config  = getDisease(disease);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => cardRef.current?.classList.add('visible'), delay);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={cardRef} className={`disease-card ${disease}`} onClick={onClick} role="button" tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && onClick()} style={{ transitionDelay: `${delay}ms` }}>
      <div className="card-corner" style={{ color: config.color }}>
        <svg viewBox="0 0 80 80" fill="none">
          <circle cx="80" cy="0" r="60" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
          <circle cx="80" cy="0" r="40" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3" />
        </svg>
      </div>
      <div className="card-pulse" />
      <div className="card-icon-wrap"><span style={{ fontSize: '28px' }}>{config.emoji}</span></div>
      <h3 className="card-title">{config.name}</h3>
      <p className="card-desc">{config.description}</p>
      <div className="card-features">
        {config.features.map((feature, i) => (
          <div key={i} className="card-feature">
            <span className="card-feature-dot" />{feature}
          </div>
        ))}
      </div>
      <div className="card-cta">
        <span className="card-cta-text">Start Assessment</span>
        <div className="card-arrow">→</div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// DASHBOARD VIEW
// ═══════════════════════════════════════════════════════

function Header({ onGetStarted }) {
  return (
    <header className="header">
      <div className="header-logo">
        <div className="header-logo-icon">🩺</div>
        <span className="header-logo-text">MedPredict</span>
      </div>
      <nav className="header-nav">
        <span className="header-nav-link" onClick={onGetStarted}>Predict</span>
        <a className="header-nav-link" href="#how-it-works">How It Works</a>
        <a className="header-nav-link" href="#features">Features</a>
      </nav>
      <button className="btn-primary" onClick={onGetStarted} style={{ padding: '10px 24px', fontSize: '14px' }}>
        <span>Get Started</span>
      </button>
    </header>
  );
}

function HeroSection({ onGetStarted }) {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-eyebrow">
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--teal)', display: 'inline-block', animation: 'pulse-glow 2s ease-in-out infinite' }} />
          AI-Powered Health Analytics
        </div>
        <h1 className="hero-title">
          Predict. Prevent.
          <br />
          <span className="gradient-text">Protect Your Health.</span>
        </h1>
        <p className="hero-subtitle">
          Advanced machine learning models analyze your health parameters to predict risks for
          Heart Disease, Brain Stroke, Kidney Disease and Diabetes — enabling early detection and preventive care.
        </p>
        <div className="hero-actions">
          <button className="btn-primary" onClick={onGetStarted}><span>Start Health Check →</span></button>
          <a href="#how-it-works" className="btn-ghost">Learn How It Works</a>
        </div>
        <div className="hero-stats">
          <div className="hero-stat"><div className="hero-stat-number">4</div><div className="hero-stat-label">Diseases Covered</div></div>
          <div className="hero-stat-divider" />
          <div className="hero-stat"><div className="hero-stat-number">3</div><div className="hero-stat-label">ML Models</div></div>
          <div className="hero-stat-divider" />
          <div className="hero-stat"><div className="hero-stat-number">8</div><div className="hero-stat-label">Parameters Each</div></div>
          <div className="hero-stat-divider" />
          <div className="hero-stat"><div className="hero-stat-number">~90%</div><div className="hero-stat-label">Avg Accuracy</div></div>
        </div>
        <div className="features-row">
          {['🧠 Decision Tree', '🌲 Random Forest', '📈 Logistic Regression', '⚡ Instant Results', '🔒 Private & Secure'].map((chip, i) => (
            <div key={i} className="feature-chip"><span className="feature-chip-dot" />{chip}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DiseasesSection({ onSelectDisease }) {
  return (
    <section id="diseases" className="diseases-section">
      <div className="diseases-section-inner">
        <div className="section-heading">
          <h2>Select a Disease to Assess</h2>
          <p>Choose the health condition you'd like to evaluate. Our ML models are trained on validated medical datasets.</p>
        </div>
        <div className="disease-grid">
          {DISEASE_LIST.map((id, i) => (
            <DiseaseCard key={id} disease={id} onClick={() => onSelectDisease(id)} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}

function HowCard({ step, delay }) {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setTimeout(() => ref.current?.classList.add('visible'), delay); observer.disconnect(); }
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);
  return (
    <div className="how-card" ref={ref}>
      <div className="how-number">{step.num}</div>
      <h4>{step.title}</h4>
      <p>{step.desc}</p>
    </div>
  );
}

function HowItWorksSection() {
  const steps = [
    { num: '01', title: 'Select Disease',   desc: 'Choose from Heart, Brain Stroke, Kidney or Diabetes assessment.' },
    { num: '02', title: 'Enter Parameters', desc: 'Fill in 8 simple health values from your latest checkup.' },
    { num: '03', title: 'AI Analyzes',      desc: '3 ML models run simultaneously and the best result is selected.' },
    { num: '04', title: 'Get Insights',     desc: 'See your risk level, explanation and visual health charts.' },
  ];
  return (
    <section id="how-it-works" className="how-section">
      <div className="how-section-inner">
        <div className="section-heading">
          <h2>How It Works</h2>
          <p>Four simple steps to understand your health risk</p>
        </div>
        <div className="how-grid">
          <div className="how-connector" />
          {steps.map((step, i) => <HowCard key={i} step={step} delay={i * 150} />)}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, delay }) {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setTimeout(() => ref.current?.classList.add('visible'), delay); observer.disconnect(); }
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);
  return (
    <div className="feature-card" ref={ref}>
      <div className="feature-icon">{feature.icon}</div>
      <div className="feature-title">{feature.title}</div>
      <p className="feature-desc">{feature.desc}</p>
    </div>
  );
}

function FeaturesSection() {
  const features = [
    { icon: '🧬', title: 'Multi-Model Analysis',  desc: 'Decision Tree, Random Forest and Logistic Regression run simultaneously on every prediction for maximum accuracy.' },
    { icon: '📊', title: 'Visual Health Charts',  desc: 'Simple bar charts show exactly how each of your parameters compares to healthy reference ranges.' },
    { icon: '🩺', title: 'Plain English Results', desc: 'No medical jargon. We explain your risk factors in simple language anyone can understand.' },
    { icon: '⚡', title: 'Instant Prediction',    desc: 'Results in seconds. No waiting, no appointments, no complicated lab work required.' },
    { icon: '🎯', title: '4 Disease Coverage',    desc: 'Heart Disease, Brain Stroke, Kidney Disease and Diabetes all in one platform.' },
    { icon: '🔒', title: 'Private by Design',     desc: 'Your health data never leaves your browser. No accounts, no storage, no tracking.' },
  ];
  return (
    <section id="features" className="features-section">
      <div className="features-section-inner">
        <div className="section-heading">
          <h2>Why MedPredict</h2>
          <p>Built for early detection and preventive healthcare</p>
        </div>
        <div className="features-grid">
          {features.map((f, i) => <FeatureCard key={i} feature={f} delay={i * 100} />)}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>Built for early disease detection &amp; preventive care. Made with <span>♥</span> — Not a substitute for medical advice.</p>
    </footer>
  );
}

function Dashboard({ onSelectDisease }) {
  const scrollToDiseases = () => document.getElementById('diseases')?.scrollIntoView({ behavior: 'smooth' });
  return (
    <div className="dashboard-view">
      <Header onGetStarted={scrollToDiseases} />
      <FloatingElements />
      <HeroSection onGetStarted={scrollToDiseases} />
      <div className="divider" />
      <DiseasesSection onSelectDisease={onSelectDisease} />
      <div className="divider" />
      <HowItWorksSection />
      <div className="divider" />
      <FeaturesSection />
      <Footer />
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// FORM VIEW
// ═══════════════════════════════════════════════════════

function NumberInput({ field, value, onChange, disease, index }) {
  return (
    <div className="field-wrap" style={{ animationDelay: `${0.05 * index}s` }}>
      <label className="field-label" htmlFor={field.key}>
        {field.label}
        {field.unit && <span className="field-unit">({field.unit})</span>}
        <span className="field-required">*</span>
      </label>
      <input id={field.key} type="number" className={`field-input ${disease}-focus`}
        placeholder={field.placeholder} value={value || ''} min={field.min} max={field.max} step="any" required
        onChange={e => onChange(field.key, e.target.value)} />
    </div>
  );
}

function ToggleInput({ field, value, onChange, disease, index }) {
  return (
    <div className="field-wrap" style={{ animationDelay: `${0.05 * index}s` }}>
      <label className="field-label">{field.label}<span className="field-required">*</span></label>
      <div className={`toggle-wrap ${disease}-toggle`}>
        {field.options.map(opt => (
          <button key={String(opt.value)} type="button" className={`toggle-btn ${value === opt.value ? 'active' : ''}`}
            onClick={() => onChange(field.key, opt.value)}>
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function SelectInput({ field, value, onChange, disease, index }) {
  return (
    <div className="field-wrap" style={{ animationDelay: `${0.05 * index}s` }}>
      <label className="field-label" htmlFor={field.key}>{field.label}<span className="field-required">*</span></label>
      <select id={field.key} className="field-select" value={value !== undefined ? value : ''} required
        onChange={e => { const val = isNaN(e.target.value) ? e.target.value : Number(e.target.value); onChange(field.key, val); }}>
        <option value="" disabled>Select an option</option>
        {field.options.map(opt => <option key={String(opt.value)} value={opt.value}>{opt.label}</option>)}
      </select>
    </div>
  );
}

function BMIWidget({ value, onChange, disease, index }) {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi,    setBmi]    = useState(null);
  const [cat,    setCat]    = useState('');

  const calcBMI = (h, w) => {
    const hm = parseFloat(h) / 100;
    const wk = parseFloat(w);
    if (!hm || !wk || hm <= 0) return;
    const b = (wk / (hm * hm)).toFixed(1);
    setBmi(b);
    onChange('bmi', parseFloat(b));
    if (b < 18.5)    setCat('bmi-underweight');
    else if (b < 25) setCat('bmi-normal');
    else if (b < 30) setCat('bmi-overweight');
    else             setCat('bmi-obese');
  };

  const catLabel = { 'bmi-underweight': 'Underweight', 'bmi-normal': 'Normal', 'bmi-overweight': 'Overweight', 'bmi-obese': 'Obese' };

  return (
    <div style={{ gridColumn: '1 / -1', background: 'rgba(100, 200, 180, 0.04)', border: '1px solid rgba(100, 200, 180, 0.15)', borderRadius: 'var(--radius-lg)', padding: '20px', opacity: 0, animation: `slide-up 0.4s var(--ease-out) ${0.05 * index}s forwards` }}>
      <div className="bmi-widget-title">BMI Calculator</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr auto', gap: '16px', alignItems: 'end' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <label className="field-label">Height <span className="field-unit">(cm)</span><span className="field-required">*</span></label>
          <input type="number" className="field-input" placeholder="170" value={height} min="50" max="250"
            onChange={e => { setHeight(e.target.value); calcBMI(e.target.value, weight); }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <label className="field-label">Weight <span className="field-unit">(kg)</span><span className="field-required">*</span></label>
          <input type="number" className="field-input" placeholder="70" value={weight} min="10" max="300"
            onChange={e => { setWeight(e.target.value); calcBMI(height, e.target.value); }} />
        </div>
        <div className="bmi-result">
          <span className="bmi-result-label">BMI</span>
          <span className="bmi-result-value">{bmi || '—'}</span>
          {bmi && <span className={`bmi-category ${cat}`}>{catLabel[cat]}</span>}
        </div>
      </div>
    </div>
  );
}

function renderField(field, value, onChange, disease, index) {
  switch (field.type) {
    case 'number': return <NumberInput key={field.key} field={field} value={value} onChange={onChange} disease={disease} index={index} />;
    case 'toggle': return <ToggleInput key={field.key} field={field} value={value} onChange={onChange} disease={disease} index={index} />;
    case 'select': return <SelectInput key={field.key} field={field} value={value} onChange={onChange} disease={disease} index={index} />;
    case 'bmi':    return <BMIWidget   key={field.key} value={value} onChange={onChange} disease={disease} index={index} />;
    default:       return null;
  }
}

function FormView({ disease, onBack, onSubmit, isLoading }) {
  const config              = getDisease(disease);
  const [formData, setFormData] = useState({});
  const [errors,   setErrors]   = useState({});

  const handleChange = (key, value) => {
    setFormData(prev => ({ ...prev, [key]: value }));
    setErrors(prev  => ({ ...prev, [key]: false }));
  };

  const validate = () => {
    const newErrors = {};
    let valid = true;
    config.fields.forEach(field => {
      const val = formData[field.key];
      if (val === undefined || val === null || val === '') { newErrors[field.key] = true; valid = false; }
    });
    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!validate()) return;
    onSubmit(formData);
  };

  return (
    <div className="form-view">
      <div className="form-inner">
        <button className="back-btn" onClick={onBack} type="button">← Back to Disease Selection</button>
        <div className="form-header">
          <div className={`form-disease-badge ${disease}`}>{config.emoji} {config.name}</div>
          <h1 className="form-title">{config.name} Risk Assessment</h1>
          <p className="form-subtitle">Enter your health parameters below. All fields are required for accurate prediction.</p>
        </div>
        <div className="form-card">
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-section-label">Health Parameters</div>
            <div className="form-grid">
              {config.fields.map((field, i) => renderField(field, formData[field.key], handleChange, disease, i))}
            </div>
            {Object.values(errors).some(Boolean) && (
              <div style={{ padding: '12px 16px', background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: 'var(--radius-md)', fontSize: '13px', color: '#f87171', marginBottom: '20px' }}>
                ⚠ Please fill in all required fields before submitting.
              </div>
            )}
            <div className="form-divider" />
            <button type="submit" className={`submit-btn ${disease}`} disabled={isLoading}>
              {isLoading ? (<><div className="spinner" />Analyzing...</>) : (<>{config.emoji} Predict {config.name} Risk</>)}
            </button>
            <div className="form-disclaimer">
              <strong>Note:</strong> This tool is for informational purposes only. It does not replace professional medical advice or diagnosis.
            </div>
          </form>
        </div>
      </div>
      {isLoading && <Loader disease={disease} />}
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// RESULTS VIEW — components
// ═══════════════════════════════════════════════════════

// ── 1. RISK BANNER ─────────────────────────────────────
function RiskBanner({ risk, diseaseName }) {
  const colorMap = {
    high:     { glow: '239,68,68',    badge: '#ef4444', bg: 'rgba(239,68,68,0.08)'     },
    moderate: { glow: '245,158,11',   badge: '#f59e0b', bg: 'rgba(245,158,11,0.08)'    },
    low:      { glow: '34,197,94',    badge: '#22c55e', bg: 'rgba(34,197,94,0.08)'     },
  };
  const c = colorMap[risk.cls] || colorMap.low;

  return (
    <div style={{
      position:     'relative',
      borderRadius: '20px',
      padding:      '0',
      overflow:     'hidden',
      boxShadow:    `0 0 40px rgba(${c.glow}, 0.15), 0 0 0 1px rgba(${c.glow}, 0.25)`,
    }}>
      {/* gradient bg */}
      <div style={{
        position:   'absolute', inset: 0,
        background: `linear-gradient(135deg, rgba(${c.glow},0.12) 0%, rgba(${c.glow},0.03) 60%, transparent 100%)`,
      }} />

      <div style={{
        position:      'relative',
        display:       'flex',
        alignItems:    'center',
        gap:           '24px',
        padding:       '28px 32px',
      }}>
        {/* big emoji with pulse ring */}
        <div style={{ position: 'relative', flexShrink: 0 }}>
          <div style={{
            width: '72px', height: '72px', borderRadius: '50%',
            background: `rgba(${c.glow}, 0.12)`,
            border:     `2px solid rgba(${c.glow}, 0.35)`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '32px',
            boxShadow: `0 0 20px rgba(${c.glow}, 0.2)`,
            animation: 'pulse-glow 2.5s ease-in-out infinite',
          }}>
            {risk.emoji}
          </div>
        </div>

        {/* text */}
        <div style={{ flex: 1 }}>
          <div style={{
            fontSize: '11px', fontWeight: 700, letterSpacing: '2px',
            textTransform: 'uppercase', color: c.badge,
            marginBottom: '6px', fontFamily: 'var(--font-mono)',
          }}>
            {diseaseName} Assessment
          </div>
          <div style={{
            fontSize: '2rem', fontWeight: 800,
            color: '#fff', lineHeight: 1.1, marginBottom: '8px',
            fontFamily: 'var(--font-display)',
          }}>
            {risk.label}
          </div>
          <div style={{ fontSize: '0.93rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
            {risk.message}
          </div>
        </div>

        {/* badge pill */}
        <div style={{
          flexShrink:   0,
          padding:      '10px 22px',
          borderRadius: '99px',
          background:   c.badge,
          color:        '#fff',
          fontWeight:   800,
          fontSize:     '0.85rem',
          letterSpacing:'1px',
          textTransform:'uppercase',
          fontFamily:   'var(--font-mono)',
          boxShadow:    `0 4px 20px rgba(${c.glow}, 0.4)`,
        }}>
          {risk.cls === 'high' ? 'ACT NOW' : risk.cls === 'moderate' ? 'MONITOR' : 'HEALTHY'}
        </div>
      </div>
    </div>
  );
}

// ── 2. PARAMETER STATUS CARDS ──────────────────────────
function ParameterCards({ chartData }) {
  if (!chartData.length) return null;
  return (
    <div className="result-card">
      <h3>Lab Report Summary</h3>
      <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${Math.min(chartData.length, 3)}, 1fr)`,
        gap: '12px',
      }}>
        {chartData.map(p => (
          <div key={p.key} style={{
            background:   p.isBad ? 'rgba(239,68,68,0.06)' : 'rgba(34,197,94,0.06)',
            border:       `1px solid ${p.isBad ? 'rgba(239,68,68,0.25)' : 'rgba(34,197,94,0.25)'}`,
            borderRadius: '14px',
            padding:      '18px 16px',
            textAlign:    'center',
            position:     'relative',
            overflow:     'hidden',
          }}>
            {/* subtle corner glow */}
            <div style={{
              position: 'absolute', top: 0, right: 0,
              width: '60px', height: '60px', borderRadius: '50%',
              background: p.isBad ? 'rgba(239,68,68,0.08)' : 'rgba(34,197,94,0.08)',
              transform: 'translate(20px,-20px)',
            }} />

            <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px', fontFamily: 'var(--font-mono)' }}>
              {p.label}
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', lineHeight: 1, marginBottom: '8px' }}>
              {p.value}
              <span style={{ fontSize: '0.8rem', fontWeight: 400, color: 'rgba(255,255,255,0.4)', marginLeft: '4px' }}>{p.unit}</span>
            </div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '5px',
              padding: '4px 12px', borderRadius: '99px',
              background: p.isBad ? 'rgba(239,68,68,0.15)' : 'rgba(34,197,94,0.15)',
              color: p.isBad ? '#f87171' : '#4ade80',
              fontSize: '12px', fontWeight: 700,
            }}>
              {p.isBad ? '⚠ High' : '✓ Normal'}
            </div>
            <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', marginTop: '8px' }}>
              Normal: {p.normalMin > 0 ? `${p.normalMin}–` : 'below '}{p.normalMax}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── 3. GAUGE CHART ─────────────────────────────────────
function GaugeChart({ chartData, riskLevel }) {
  const canvasRef = useRef(null);

  // score: 0 bad → 100 good
  const badCount   = chartData.filter(p => p.isBad).length;
  const total      = chartData.length || 1;
  const score      = Math.round(((total - badCount) / total) * 100);

  const gaugeColor = riskLevel === 'high' ? '#ef4444' : riskLevel === 'moderate' ? '#f59e0b' : '#22c55e';
  const gaugeLabel = riskLevel === 'high' ? 'Poor' : riskLevel === 'moderate' ? 'Fair' : 'Good';

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const W = canvas.width  = 280;
    const H = canvas.height = 160;
    const cx = W / 2, cy = 145;
    const r  = 110;

    ctx.clearRect(0, 0, W, H);

    // draw arc helper
    const arc = (startDeg, endDeg, color, lineWidth) => {
      const s = (startDeg * Math.PI) / 180;
      const e = (endDeg   * Math.PI) / 180;
      ctx.beginPath();
      ctx.arc(cx, cy, r, s, e);
      ctx.strokeStyle = color;
      ctx.lineWidth   = lineWidth;
      ctx.lineCap     = 'round';
      ctx.stroke();
    };

    // track
    arc(180, 360, 'rgba(255,255,255,0.06)', 22);

    // green zone 180-240
    arc(180, 240, 'rgba(34,197,94,0.25)', 22);
    // yellow zone 240-300
    arc(240, 300, 'rgba(245,158,11,0.25)', 22);
    // red zone 300-360
    arc(300, 360, 'rgba(239,68,68,0.25)', 22);

    // filled arc based on score (180 → 360 = 0 → 100)
    const fillEnd = 180 + (score / 100) * 180;
    arc(180, fillEnd, gaugeColor, 22);

    // needle
    const needleAngle = ((180 + (score / 100) * 180) * Math.PI) / 180;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(
      cx + (r - 30) * Math.cos(needleAngle),
      cy + (r - 30) * Math.sin(needleAngle),
    );
    ctx.strokeStyle = '#fff';
    ctx.lineWidth   = 3;
    ctx.lineCap     = 'round';
    ctx.stroke();

    // center dot
    ctx.beginPath();
    ctx.arc(cx, cy, 8, 0, Math.PI * 2);
    ctx.fillStyle = '#fff';
    ctx.fill();

  }, [score, gaugeColor]);

  return (
    <div className="result-card" style={{ textAlign: 'center' }}>
      <h3>Overall Health Score</h3>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <canvas ref={canvasRef} style={{ display: 'block' }} />
        {/* score inside gauge */}
        <div style={{
          position:  'absolute',
          bottom:    '18px',
          left:      '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
        }}>
          <div style={{ fontSize: '2.2rem', fontWeight: 800, color: gaugeColor, lineHeight: 1 }}>{score}</div>
          <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '1px', textTransform: 'uppercase' }}>out of 100</div>
        </div>
      </div>

      {/* label badge */}
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: '8px',
        marginTop: '4px', padding: '8px 20px', borderRadius: '99px',
        background: `rgba(${riskLevel === 'high' ? '239,68,68' : riskLevel === 'moderate' ? '245,158,11' : '34,197,94'}, 0.12)`,
        border: `1px solid ${gaugeColor}40`,
      }}>
        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: gaugeColor, display: 'inline-block' }} />
        <span style={{ fontSize: '0.9rem', fontWeight: 700, color: gaugeColor }}>{gaugeLabel} Health</span>
      </div>

      {/* zone legend */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '16px' }}>
        {[{ color: '#22c55e', label: 'Good (67–100)' }, { color: '#f59e0b', label: 'Fair (34–66)' }, { color: '#ef4444', label: 'Poor (0–33)' }].map((z, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '2px', background: z.color, display: 'inline-block' }} />
            {z.label}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── 4. DO & DON'T SECTION ──────────────────────────────
function DoAndDont({ disease, riskLevel }) {
  const doMap = {
    heart: {
      high:     [{ icon: '🏥', text: 'See a cardiologist this week' }, { icon: '🥗', text: 'Eat low-fat, low-salt meals' }, { icon: '🚶', text: 'Walk 20 minutes daily' }, { icon: '💊', text: 'Take medications as prescribed' }],
      moderate: [{ icon: '🩺', text: 'Book a routine heart checkup' }, { icon: '🥦', text: 'Eat more vegetables and fruits' }, { icon: '🏃', text: 'Exercise 30 minutes daily' }, { icon: '😴', text: 'Sleep 7-8 hours every night' }],
      low:      [{ icon: '✅', text: 'Keep up your healthy habits' }, { icon: '🥗', text: 'Maintain balanced diet' }, { icon: '🏋️', text: 'Stay physically active' }, { icon: '📅', text: 'Annual heart checkup' }],
    },
    brain: {
      high:     [{ icon: '🏥', text: 'See a neurologist immediately' }, { icon: '💊', text: 'Control blood pressure daily' }, { icon: '🧘', text: 'Reduce stress and anxiety' }, { icon: '🚶', text: 'Light walks every day' }],
      moderate: [{ icon: '🩺', text: 'Schedule a brain health checkup' }, { icon: '🥗', text: 'Eat brain-healthy foods' }, { icon: '🏃', text: 'Exercise 30 minutes daily' }, { icon: '📖', text: 'Stay mentally active' }],
      low:      [{ icon: '✅', text: 'Great brain health — keep it up' }, { icon: '🧠', text: 'Keep learning new things' }, { icon: '😴', text: 'Maintain good sleep habits' }, { icon: '🏃', text: 'Stay physically active' }],
    },
    kidney: {
      high:     [{ icon: '🏥', text: 'See a nephrologist this week' }, { icon: '💧', text: 'Drink 8 glasses of water daily' }, { icon: '🥗', text: 'Eat low-protein, low-salt food' }, { icon: '📅', text: 'Get regular kidney function tests' }],
      moderate: [{ icon: '🩺', text: 'Book a kidney function test' }, { icon: '💧', text: 'Stay well hydrated always' }, { icon: '🥦', text: 'Eat more vegetables' }, { icon: '🏃', text: 'Exercise regularly' }],
      low:      [{ icon: '✅', text: 'Kidneys are healthy — maintain it' }, { icon: '💧', text: 'Drink plenty of water daily' }, { icon: '🥗', text: 'Eat balanced nutritious meals' }, { icon: '📅', text: 'Yearly kidney checkup' }],
    },
    diabetes: {
      high:     [{ icon: '🏥', text: 'Consult an endocrinologist now' }, { icon: '📊', text: 'Monitor blood sugar daily' }, { icon: '🥗', text: 'Strictly avoid sugar and carbs' }, { icon: '🚶', text: 'Walk 30 minutes after every meal' }],
      moderate: [{ icon: '🩺', text: 'Get HbA1c test done' }, { icon: '🥦', text: 'Cut down on sugary food' }, { icon: '🏃', text: 'Exercise 30 minutes daily' }, { icon: '📊', text: 'Check blood sugar weekly' }],
      low:      [{ icon: '✅', text: 'Blood sugar is healthy — keep it' }, { icon: '🥗', text: 'Maintain low-sugar diet' }, { icon: '🏋️', text: 'Stay physically active' }, { icon: '📅', text: 'Yearly diabetes screening' }],
    },
  };

  const dontMap = {
    heart:    [{ icon: '🍟', text: 'Fried and oily food' }, { icon: '🧂', text: 'Too much salt' }, { icon: '🚬', text: 'Smoking of any kind' }, { icon: '🍺', text: 'Excess alcohol' }],
    brain:    [{ icon: '🚬', text: 'Smoking — raises stroke risk' }, { icon: '🍺', text: 'Heavy alcohol consumption' }, { icon: '😰', text: 'Unmanaged stress and anxiety' }, { icon: '🛋️', text: 'Sedentary lifestyle' }],
    kidney:   [{ icon: '🧂', text: 'High-sodium processed food' }, { icon: '💊', text: 'Excess painkillers (NSAIDs)' }, { icon: '🍺', text: 'Alcohol and sugary drinks' }, { icon: '🛋️', text: 'Sitting for long hours' }],
    diabetes: [{ icon: '🍬', text: 'Sugar, sweets and candy' }, { icon: '🍞', text: 'White rice, bread and pasta' }, { icon: '🧃', text: 'Fruit juices and soda' }, { icon: '🛋️', text: 'Skipping exercise' }],
  };

  const dos   = doMap[disease]?.[riskLevel]   || doMap[disease]?.low   || [];
  const donts = dontMap[disease] || [];

  return (
    <div className="result-card">
      <h3>Lifestyle Guide</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>

        {/* DO column */}
        <div style={{ background: 'rgba(34,197,94,0.05)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: '14px', padding: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
            <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'rgba(34,197,94,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>✅</div>
            <span style={{ fontWeight: 700, color: '#4ade80', fontSize: '0.9rem', letterSpacing: '1px', textTransform: 'uppercase' }}>Do This</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {dos.map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '18px', flexShrink: 0 }}>{item.icon}</span>
                <span style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.4 }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* DON'T column */}
        <div style={{ background: 'rgba(239,68,68,0.05)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '14px', padding: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
            <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'rgba(239,68,68,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>❌</div>
            <span style={{ fontWeight: 700, color: '#f87171', fontSize: '0.9rem', letterSpacing: '1px', textTransform: 'uppercase' }}>Avoid This</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {donts.map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '18px', flexShrink: 0 }}>{item.icon}</span>
                <span style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.4 }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

// ── MAIN RESULTS VIEW ──────────────────────────────────
function ResultsView({ disease, result, userInputs, onBack, onReset }) {
  const d = getDisease(disease);

  const riskConfig = {
    high:     { emoji: '⚠️', label: 'High Risk',    message: 'Your parameters indicate elevated risk. Please consult a healthcare professional promptly.', cls: 'high'     },
    moderate: { emoji: '🔶', label: 'Moderate Risk', message: 'Some parameters are borderline. Monitor your health and consider a routine checkup.',        cls: 'moderate' },
    low:      { emoji: '✅', label: 'Low Risk',      message: 'Your parameters look healthy. Keep maintaining your current lifestyle.',                     cls: 'low'      },
  };
  const risk = riskConfig[result.risk_level] || riskConfig.low;

  // build chart data
  const chartData = (d.chartParams || []).map(p => {
    const raw   = userInputs ? userInputs[p.key] : undefined;
    const value = parseFloat(raw);
    if (raw === undefined || raw === null || raw === '' || isNaN(value)) return null;
    const normalMin = p.normalMin || 0;
    const isBad     = normalMin > 0 ? (value < normalMin || value > p.normalMax) : value > p.normalMax;
    const fillPct   = Math.min((value / p.max) * 100, 100);
    const markerPct = Math.min((p.normalMax / p.max) * 100, 100);
    return { ...p, value, isBad, fillPct, markerPct, normalMin };
  }).filter(Boolean);

  // what this means
  const concerns = chartData.map(p => {
    const limit = p.normalMin > 0
      ? `healthy range is ${p.normalMin}–${p.normalMax} ${p.unit}`
      : `healthy limit is below ${p.normalMax} ${p.unit}`;
    return {
      text: p.isBad
        ? `Your ${p.label} is ${p.value}${p.unit ? ' ' + p.unit : ''} — ${limit}.`
        : `Your ${p.label} is ${p.value}${p.unit ? ' ' + p.unit : ''} — within healthy range.`,
      bad: p.isBad,
    };
  });

  return (
    <div className="results-page">

      {/* Nav */}
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <button className="back-btn" onClick={onBack}>← Edit Inputs</button>
        <button className="back-btn" onClick={onReset}>🏠 Home</button>
      </div>

      {/* 1 — Risk Banner */}
      <RiskBanner risk={risk} diseaseName={d.name} />

      {/* 2 — Parameter Status Cards */}
      <ParameterCards chartData={chartData} />

      {/* 3 — Gauge + Bars side by side on wide, stacked on mobile */}
      {chartData.length > 0 && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>

          {/* Gauge */}
          <GaugeChart chartData={chartData} riskLevel={result.risk_level} />

          {/* Bars */}
          <div className="result-card">
            <h3>Parameter Levels</h3>
            <div className="param-bar-list">
              {chartData.map(p => (
                <div className="param-bar-item" key={p.key}>
                  <div className="param-bar-header">
                    <span className="param-bar-name">{p.label}</span>
                    <span className="param-bar-values">
                      <span className={p.isBad ? 'bad' : 'good'}>{p.value}{p.unit ? ` ${p.unit}` : ''}</span>
                      &nbsp;/&nbsp;
                      <span style={{ color: 'rgba(255,255,255,0.35)' }}>{p.normalMin > 0 ? `${p.normalMin}–` : '< '}{p.normalMax}</span>
                    </span>
                  </div>
                  <div className="param-bar-track">
                    <div className={`param-bar-fill ${p.isBad ? 'bad' : 'good'}`} style={{ width: `${p.fillPct}%` }} />
                    <div className="param-bar-marker" style={{ left: `calc(${p.markerPct}% - 1px)` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

      {/* 4 — What This Means */}
      {concerns.length > 0 && (
        <div className="result-card">
          <h3>What This Means</h3>
          <div className="concern-list">
            {concerns.map((c, i) => (
              <div className="concern-item" key={i}>
                <div className={`concern-dot ${c.bad ? 'bad' : 'good'}`} />
                <span>{c.text}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 5 — Do and Don't */}
      <DoAndDont disease={disease} riskLevel={result.risk_level} />

      <p className="disclaimer">
        This is not a medical diagnosis. Always consult a qualified doctor for proper advice.
      </p>

    </div>
  );
}

// ═══════════════════════════════════════════════════════
// APP
// ═══════════════════════════════════════════════════════

function ViewWrapper({ children, viewKey }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 30);
    return () => clearTimeout(t);
  }, [viewKey]);
  return (
    <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)', transition: 'opacity 0.45s cubic-bezier(0,0,0.2,1), transform 0.45s cubic-bezier(0,0,0.2,1)' }}>
      {children}
    </div>
  );
}

function ErrorToast({ message, onClose }) {
  useEffect(() => { const t = setTimeout(onClose, 5000); return () => clearTimeout(t); }, []);
  return (
    <div style={{ position: 'fixed', bottom: '32px', left: '50%', transform: 'translateX(-50%)', zIndex: 999, background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: 'var(--radius-lg)', padding: '14px 24px', display: 'flex', alignItems: 'center', gap: '12px', backdropFilter: 'blur(20px)', boxShadow: '0 8px 32px rgba(0,0,0,0.3)', animation: 'slide-up 0.3s var(--ease-bounce) forwards', maxWidth: '480px', width: '90%' }}>
      <span style={{ fontSize: '20px' }}>⚠️</span>
      <span style={{ fontSize: '14px', color: '#f87171', flex: 1 }}>{message}</span>
      <button onClick={onClose} style={{ background: 'none', border: 'none', color: 'var(--text-dim)', cursor: 'pointer', fontSize: '18px', lineHeight: 1, padding: '0 4px' }}>×</button>
    </div>
  );
}

function BackendStatus({ status }) {
  if (status === 'ok') return null;
  return (
    <div style={{ position: 'fixed', top: '80px', right: '24px', zIndex: 200, padding: '8px 16px', background: status === 'checking' ? 'rgba(100,200,180,0.1)' : 'rgba(239,68,68,0.1)', border: `1px solid ${status === 'checking' ? 'rgba(100,200,180,0.2)' : 'rgba(239,68,68,0.2)'}`, borderRadius: 'var(--radius-full)', fontSize: '12px', color: status === 'checking' ? 'var(--teal-light)' : '#f87171', backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', gap: '8px' }}>
      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: status === 'checking' ? 'var(--teal)' : '#ef4444', animation: 'pulse-glow 1.5s ease-in-out infinite', display: 'inline-block' }} />
      {status === 'checking' ? 'Connecting to backend...' : 'Backend offline — start Flask on port 5001'}
    </div>
  );
}

function App() {
  const [view,       setView]       = useState('dashboard');
  const [disease,    setDisease]    = useState(null);
  const [result,     setResult]     = useState(null);
  const [userInputs, setUserInputs] = useState(null);
  const [isLoading,  setIsLoading]  = useState(false);
  const [error,      setError]      = useState(null);
  const [backend,    setBackend]    = useState('checking');

  useEffect(() => { checkHealth().then(res => setBackend(res ? 'ok' : 'offline')); }, []);
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [view]);

  const handleSelectDisease = (id) => { setDisease(id); setResult(null); setUserInputs(null); setView('form'); };

  const handleFormSubmit = async (formData) => {
    setIsLoading(true);
    setError(null);
    setUserInputs(formData);
    const res = await predictDisease(disease, formData);
    setIsLoading(false);
    if (res.success) { setResult(res.data); setView('results'); }
    else setError(res.error);
  };

  const handleBack      = () => { setView('dashboard'); setDisease(null); setResult(null); setUserInputs(null); };
  const handleBackToForm = () => setView('form');
  const handleReset     = () => { setView('dashboard'); setDisease(null); setResult(null); setUserInputs(null); };

  return (
    <div>
      <BackendStatus status={backend} />
      {error && <ErrorToast message={error} onClose={() => setError(null)} />}

      {view === 'dashboard' && (
        <ViewWrapper viewKey="dashboard">
          <Dashboard onSelectDisease={handleSelectDisease} />
        </ViewWrapper>
      )}

      {view === 'form' && disease && (
        <ViewWrapper viewKey={`form-${disease}`}>
          <FloatingElements />
          <FormView disease={disease} onBack={handleBack} onSubmit={handleFormSubmit} isLoading={isLoading} />
        </ViewWrapper>
      )}

      {view === 'results' && result && disease && (
        <ViewWrapper viewKey="results">
          <FloatingElements />
          <ResultsView
            disease={disease}
            result={result}
            userInputs={userInputs}
            onBack={handleBackToForm}
            onReset={handleReset}
          />
        </ViewWrapper>
      )}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);