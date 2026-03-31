const DISEASES = [
  {
    id: 'heart',
    name: 'Heart Disease',
    emoji: '❤️',
    color: 'hsl(0,72%,55%)',
    colorRgb: '220,60,60',
    apiRoute: '/predict/heart',
    description: 'Detect risk of coronary heart disease based on clinical parameters.',
    // Only numeric clinical params worth showing in chart (skip age, sex, cp, fbs, exang)
    chartParams: [
      { key: 'trestbps', label: 'Blood Pressure',  unit: 'mmHg', normalMax: 120, max: 220 },
      { key: 'chol',     label: 'Cholesterol',      unit: 'mg/dL', normalMax: 200, max: 400 },
      { key: 'thalach',  label: 'Max Heart Rate',   unit: 'bpm',  normalMin: 100, normalMax: 170, max: 220 },
    ],
    fields: [
      { key: 'age',      label: 'Age',                    type: 'number', min: 20,  max: 80,   placeholder: '20-80' },
      { key: 'sex',      label: 'Sex',                    type: 'toggle', options: [{label:'Male',value:1},{label:'Female',value:0}] },
      { key: 'cp',       label: 'Chest Pain Type',        type: 'select', options: [{label:'No Pain',value:0},{label:'Mild',value:1},{label:'Moderate',value:2},{label:'Severe',value:3}] },
      { key: 'trestbps', label: 'Resting Blood Pressure', type: 'number', min: 80,  max: 220,  placeholder: '80-220', unit: 'mmHg' },
      { key: 'chol',     label: 'Cholesterol',            type: 'number', min: 100, max: 400,  placeholder: '100-400', unit: 'mg/dL' },
      { key: 'fbs',      label: 'Fasting Blood Sugar > 120 mg/dL', type: 'toggle', options: [{label:'Yes',value:1},{label:'No',value:0}] },
      { key: 'thalach',  label: 'Max Heart Rate Achieved',type: 'number', min: 60,  max: 220,  placeholder: '60-220', unit: 'bpm' },
      { key: 'exang',    label: 'Exercise Induced Angina',type: 'toggle', options: [{label:'Yes',value:1},{label:'No',value:0}] },
    ]
  },
  {
    id: 'brain',
    name: 'Brain Stroke',
    emoji: '🧠',
    color: 'hsl(270,60%,60%)',
    colorRgb: '140,80,200',
    apiRoute: '/predict/brain',
    description: 'Assess the risk of brain stroke based on health and lifestyle factors.',
    chartParams: [
      { key: 'avg_glucose_level', label: 'Glucose Level', unit: 'mg/dL', normalMax: 140, max: 300 },
      { key: 'bmi',               label: 'BMI',           unit: '',       normalMax: 24.9, max: 50 },
    ],
    fields: [
      { key: 'age',               label: 'Age',                  type: 'number', min: 1,   max: 100, placeholder: '1-100' },
      { key: 'hypertension',      label: 'Hypertension',         type: 'toggle', options: [{label:'Yes',value:1},{label:'No',value:0}] },
      { key: 'heart_disease',     label: 'Heart Disease',        type: 'toggle', options: [{label:'Yes',value:1},{label:'No',value:0}] },
      { key: 'avg_glucose_level', label: 'Average Glucose Level',type: 'number', min: 50,  max: 300, placeholder: '50-300', unit: 'mg/dL' },
      { key: 'bmi',               label: 'BMI',                  type: 'bmi' },
      { key: 'ever_married',      label: 'Ever Married',         type: 'toggle', options: [{label:'Yes',value:1},{label:'No',value:0}] },
      { key: 'work_type',         label: 'Work Type',            type: 'select', options: [{label:'Private',value:0},{label:'Self Employed',value:1},{label:'Govt Job',value:2},{label:'Never Worked',value:3}] },
      { key: 'smoking_status',    label: 'Smoking Status',       type: 'select', options: [{label:'Never Smoked',value:0},{label:'Formerly Smoked',value:1},{label:'Smokes',value:2}] },
    ]
  },
  {
    id: 'kidney',
    name: 'Kidney Disease',
    emoji: '🫘',
    color: 'hsl(38,90%,55%)',
    colorRgb: '220,150,30',
    apiRoute: '/predict/kidney',
    description: 'Detect chronic kidney disease using blood and urine test parameters.',
    chartParams: [
      { key: 'bu',   label: 'Blood Urea',        unit: 'mg/dL', normalMax: 40,  max: 200 },
      { key: 'sc',   label: 'Serum Creatinine',  unit: 'mg/dL', normalMax: 1.2, max: 15  },
      { key: 'hemo', label: 'Hemoglobin',        unit: 'g/dL',  normalMin: 12,  normalMax: 17, max: 20 },
    ],
    fields: [
      { key: 'age',  label: 'Age',               type: 'number', min: 1,   max: 100, placeholder: '1-100' },
      { key: 'bp',   label: 'Blood Pressure',    type: 'number', min: 50,  max: 180, placeholder: '50-180', unit: 'mmHg' },
      { key: 'sg',   label: 'Specific Gravity',  type: 'select', options: [{label:'1.005',value:1.005},{label:'1.010',value:1.010},{label:'1.015',value:1.015},{label:'1.020',value:1.020},{label:'1.025',value:1.025}] },
      { key: 'al',   label: 'Albumin',           type: 'select', options: [{label:'0',value:0},{label:'1',value:1},{label:'2',value:2},{label:'3',value:3},{label:'4',value:4}] },
      { key: 'bu',   label: 'Blood Urea',        type: 'number', min: 1,   max: 200, placeholder: '1-200', unit: 'mg/dL' },
      { key: 'sc',   label: 'Serum Creatinine',  type: 'number', min: 0.4, max: 15,  placeholder: '0.4-15', unit: 'mg/dL' },
      { key: 'hemo', label: 'Hemoglobin',        type: 'number', min: 3,   max: 20,  placeholder: '3-20', unit: 'g/dL' },
      { key: 'pcv',  label: 'Packed Cell Volume',type: 'number', min: 9,   max: 54,  placeholder: '9-54', unit: '%' },
    ]
  },
  {
    id: 'diabetes',
    name: 'Diabetes',
    emoji: '🩸',
    color: 'hsl(217,70%,55%)',
    colorRgb: '50,120,220',
    apiRoute: '/predict/diabetes',
    description: 'Predict diabetes risk based on glucose levels and metabolic factors.',
    chartParams: [
      { key: 'Glucose',          label: 'Glucose',        unit: 'mg/dL', normalMax: 140, max: 300 },
      { key: 'BMI',              label: 'BMI',            unit: '',       normalMax: 24.9, max: 70 },
      { key: 'BloodPressure',    label: 'Blood Pressure', unit: 'mmHg',  normalMax: 120, max: 180 },
    ],
    fields: [
      { key: 'Pregnancies',              label: 'Number of Pregnancies', type: 'number', min: 0, max: 20, placeholder: '0-20' },
      { key: 'Glucose',                  label: 'Glucose Level',         type: 'number', min: 0, max: 300, placeholder: '0-300', unit: 'mg/dL' },
      { key: 'BloodPressure',            label: 'Blood Pressure',        type: 'number', min: 0, max: 180, placeholder: '0-180', unit: 'mmHg' },
      { key: 'SkinThickness',            label: 'Skin Thickness',        type: 'select', options: [{label:'Thin (10mm)',value:10},{label:'Average (25mm)',value:25},{label:'Thick (40mm)',value:40}] },
      { key: 'Insulin',                  label: 'Insulin Level',         type: 'select', options: [{label:'Low (50)',value:50},{label:'Normal (100)',value:100},{label:'High (200)',value:200}] },
      { key: 'BMI',                      label: 'BMI',                   type: 'bmi' },
      { key: 'DiabetesPedigreeFunction', label: 'Family History',        type: 'select', options: [{label:'None',value:0.1},{label:'Moderate',value:0.4},{label:'Strong',value:0.8}] },
      { key: 'Age',                      label: 'Age',                   type: 'number', min: 10, max: 100, placeholder: '10-100' },
    ]
  }
];

function getDisease(id) {
  return DISEASES.find(d => d.id === id);
}

function getAllDiseases() {
  return DISEASES;
}