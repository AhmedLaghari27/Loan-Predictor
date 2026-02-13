# 🏦 Loan Eligibility Predictor

AI-powered loan eligibility prediction system with 81.30% accuracy.

## 🚀 Features

- ✅ Instant loan approval prediction
- ✅ 81.30% accurate Random Forest model
- ✅ Beautiful React UI with Mantine
- ✅ FastAPI backend
- ✅ Real-time results with confidence scores

## 🛠️ Tech Stack

**Frontend:**
- React 18 + Vite
- Mantine UI v7
- TypeScript
- Axios

**Backend:**
- FastAPI
- scikit-learn
- pandas
- Random Forest Classifier

## 📊 Model Performance

- Accuracy: 81.30%
- Dataset: 614 loan applications
- Algorithm: Random Forest (100 estimators)

## 🏃 Quick Start

### Backend
```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python3 train_model.py
uvicorn app:app --reload
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## 📸 Screenshots

[Add screenshots here]

## 📄 License

MIT
