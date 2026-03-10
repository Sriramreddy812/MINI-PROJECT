# 🩺 MedPredict — AI Disease Prediction System

A machine learning based web application that predicts the risk of 4 diseases using 3 ML models simultaneously. Built as a mini project for academic submission.

---

## 📋 Table of Contents

- [About the Project](#about-the-project)
- [Diseases Covered](#diseases-covered)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [How to Run](#how-to-run)
- [How It Works](#how-it-works)
- [ML Models Used](#ml-models-used)
- [API Endpoints](#api-endpoints)
- [Screenshots](#screenshots)
- [Disclaimer](#disclaimer)

---

## 📖 About the Project

MedPredict is a full stack web application that allows users to enter basic health parameters and get an instant AI-powered disease risk prediction. The system runs 3 machine learning models simultaneously and selects the best result automatically. Results are displayed with visual charts, plain english explanations and personalized health recommendations.

---

## 🦠 Diseases Covered

| Disease | Dataset | Rows | Models |
|---|---|---|---|
| ❤️ Heart Disease | UCI Cleveland Heart Disease | 303 | DT, RF, LR |
| 🧠 Brain Stroke | McKinsey Stroke Dataset | 5110 | DT, RF, LR |
| 🫘 Kidney Disease | UCI CKD Dataset | 400 | DT, RF, LR |
| 🩸 Diabetes | Pima Indians Diabetes | 768 | DT, RF, LR |

---

## 🛠 Tech Stack

**Frontend**
- HTML5, CSS3
- React 18 (via CDN)
- Babel Standalone (JSX compiler)
- Chart.js (radar and bar charts)
- Google Fonts (Playfair Display, DM Sans)

**Backend**
- Python 3
- Flask
- Flask-CORS
- Scikit-learn
- Pandas
- NumPy

---

## 📁 Project Structure

```
NEW MINI/
│
├── backend/
│   ├── data/
│   │   ├── heart.csv
│   │   ├── brain.csv
│   │   ├── kidney_disease.csv
│   │   └── diabetes.csv
│   ├── preprocessor.py    # data cleaning and encoding
│   ├── train.py           # trains all 12 models at startup
│   ├── predictor.py       # runs models and picks best result
│   ├── validator.py       # validates user inputs
│   └── app.py             # Flask API entry point
│
├── frontend/
│   ├── index.html         # entry point
│   └── src/
│       ├── bundle.jsx     # all React components bundled
│       └── styles/
│           ├── global.css
│           ├── dashboard.css
│           ├── form.css
│           └── results.css
│
└── README.md
```

---

## ⚙️ Setup Instructions

### Step 1 — Clone the Repository

```bash
git clone https://github.com/yourusername/new-mini.git
cd new-mini
```

### Step 2 — Create Virtual Environment

```bash
# Create venv inside project folder
python3 -m venv venv
```

### Step 3 — Activate Virtual Environment

```bash
# On Mac / Linux
source venv/bin/activate

# On Windows
venv\Scripts\activate
```

You should see `(venv)` in your terminal after activation.

### Step 4 — Install Dependencies

```bash
cd backend
pip install flask flask-cors scikit-learn pandas numpy
```

### Step 5 — Add Datasets

Download the 4 CSV files from Kaggle and place them inside `backend/data/`

| File | Kaggle Link |
|---|---|
| heart.csv | kaggle.com/datasets/cherngs/heart-disease-cleveland-uci |
| brain.csv | kaggle.com/datasets/fedesoriano/stroke-prediction-dataset |
| kidney_disease.csv | kaggle.com/datasets/mansoordaku/ckdisease |
| diabetes.csv | kaggle.com/datasets/uciml/pima-indians-diabetes-database |

Rename files as shown above after downloading.

---

## ▶️ How to Run

### Terminal 1 — Start Backend

```bash
cd backend
source ../venv/bin/activate   # Mac/Linux
python3 app.py
```

Expected output:
```
🚀 Starting NEW MINI Backend...
Training Heart models...
Heart → DT: 63.33%  RF: 65.0%  LR: 58.33%
Training Brain models...
Brain → DT: 92.07%  RF: 93.84%  LR: 75.05%
Training Kidney models...
Kidney → DT: 88.75%  RF: 91.25%  LR: 93.75%
Training Diabetes models...
Diabetes → DT: 75.32%  RF: 75.32%  LR: 69.48%
✅ Backend Ready

* Running on http://127.0.0.1:5001
```

### Terminal 2 — Start Frontend

```
1. Open VS Code
2. Install Live Server extension by Ritwick Dey
3. Right click on frontend/index.html
4. Click Open with Live Server
5. Browser opens at http://127.0.0.1:5500
```

---

## ⚙️ How It Works

```
1. User selects a disease on the dashboard
2. User fills in 8 health parameters in the form
3. Frontend sends inputs to Flask API via POST request
4. Flask preprocesses inputs using the same scaler from training
5. All 3 ML models run on the user inputs simultaneously
6. Best model is selected based on accuracy and F1 score
7. Result returned with prediction, confidence and explanation
8. Frontend displays risk banner, charts and recommendations
```

---

## 🤖 ML Models Used

| Model | Description |
|---|---|
| Decision Tree | Rule based branching model. Learns if/else conditions from training data |
| Random Forest | Ensemble of 100 decision trees. Majority vote gives final prediction |
| Logistic Regression | Statistical model that calculates probability of disease |

**Best Model Selection Logic:**
1. Compare accuracy of all 3 models
2. Highest accuracy wins
3. If tied → F1 score used as tiebreaker
4. If still tied → Random Forest selected as default

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | /health | Check if backend is running |
| POST | /predict/heart | Heart disease prediction |
| POST | /predict/brain | Brain stroke prediction |
| POST | /predict/kidney | Kidney disease prediction |
| POST | /predict/diabetes | Diabetes prediction |

**Sample Request:**
```json
POST /predict/heart
{
  "age": 55,
  "sex": 1,
  "cp": 2,
  "trestbps": 140,
  "chol": 280,
  "fbs": 1,
  "thalach": 150,
  "exang": 1
}
```

**Sample Response:**
```json
{
  "disease": "heart",
  "prediction": "High Risk",
  "confidence": 75.0,
  "risk_level": "high",
  "explanation": "Your high cholesterol and elevated blood pressure are above healthy range indicating elevated risk.",
  "model_accuracies": {
    "Decision Tree": 63.33,
    "Random Forest": 65.0,
    "Logistic Regression": 58.33
  }
}
```

---

## 📊 Model Accuracy Results

| Disease | Decision Tree | Random Forest | Logistic Regression | Best |
|---|---|---|---|---|
| ❤️ Heart | 63.33% | 65.00% | 58.33% | Random Forest |
| 🧠 Brain | 92.07% | 93.84% | 75.05% | Random Forest |
| 🫘 Kidney | 88.75% | 91.25% | 93.75% | Logistic Regression |
| 🩸 Diabetes | 75.32% | 75.32% | 69.48% | Random Forest |

> Heart disease accuracy is lower due to the small dataset size of only 303 rows. A larger dataset would improve accuracy significantly.

---

## ⚠️ Disclaimer

This application is built for educational and academic purposes only. The predictions generated by this system are not medical diagnoses. Always consult a qualified healthcare professional for proper medical evaluation and treatment.

---

## 👨‍💻 Author

Built as a Mini Project for academic submission.

---

## 📄 License

This project is for educational use only.