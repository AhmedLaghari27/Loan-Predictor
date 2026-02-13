from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import joblib
import json
import numpy as np

app = FastAPI(title="Loan Eligibility Prediction API")

# Enable CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000"],  # Vite default ports
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# NEW (correct paths):
import os

# Get current directory
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

model = joblib.load(os.path.join(BASE_DIR, 'loan_model.pkl'))
label_encoders = joblib.load(os.path.join(BASE_DIR, 'label_encoders.pkl'))
target_encoder = joblib.load(os.path.join(BASE_DIR, 'target_encoder.pkl'))

with open(os.path.join(BASE_DIR, 'feature_names.json'), 'r') as f:
    feature_names = json.load(f)

class LoanApplication(BaseModel):
    gender: str
    married: str
    dependents: str
    education: str
    selfEmployed: str
    applicantIncome: float
    coapplicantIncome: float
    loanAmount: float
    loanAmountTerm: float
    creditHistory: int
    propertyArea: str

@app.get("/")
def read_root():
    return {
        "status": "healthy",
        "message": "Loan Eligibility Prediction API is running",
        "model_accuracy": "81.30%"
    }

@app.post("/api/predict")
def predict_eligibility(application: LoanApplication):
    try:
        # Map form fields to dataset format
        data = {
            'Gender': application.gender,
            'Married': application.married,
            'Dependents': application.dependents.replace('+', ''),  # Remove + from 3+, 4+
            'Education': application.education,
            'Self_Employed': application.selfEmployed,
            'Applicant_Income': application.applicantIncome,
            'Coapplicant_Income': application.coapplicantIncome,
            'Loan_Amount': application.loanAmount,
            'Loan_Amount_Term': application.loanAmountTerm,
            'Credit_History': application.creditHistory,
            'Property_Area': application.propertyArea
        }
        
        # Encode categorical variables
        encoded_data = []
        for feature in feature_names:
            if feature in label_encoders:
                # Encode categorical
                le = label_encoders[feature]
                try:
                    encoded_value = le.transform([data[feature]])[0]
                except:
                    # If value not seen during training, use most common
                    encoded_value = 0
                encoded_data.append(encoded_value)
            else:
                # Numerical features
                encoded_data.append(data[feature])
        
        # Make prediction
        features = np.array(encoded_data).reshape(1, -1)
        prediction = model.predict(features)[0]
        prediction_proba = model.predict_proba(features)[0]
        
        # Get prediction result
        result = target_encoder.inverse_transform([prediction])[0]
        confidence = float(max(prediction_proba) * 100)
        
        # Determine key factors
        feature_importance = model.feature_importances_
        top_indices = np.argsort(feature_importance)[-3:][::-1]
        key_factors = [feature_names[i] for i in top_indices]
        
        # Generate recommendations
        recommendations = []
        if result == 'N':
            if application.creditHistory == 0:
                recommendations.append("Improve your credit history by paying debts on time")
            if application.applicantIncome < 3000:
                recommendations.append("Consider increasing your income or adding a co-applicant")
            if application.loanAmount > application.applicantIncome * 10:
                recommendations.append("Request a lower loan amount relative to your income")
        
        return {
            "prediction": "Approved" if result == 'Y' else "Rejected",
            "confidence": round(confidence, 2),
            "key_factors": key_factors,
            "recommendations": recommendations if recommendations else ["Your profile looks good!"]
        }
        
    except Exception as e:
        return {
            "error": str(e),
            "prediction": "Error",
            "confidence": 0,
            "key_factors": [],
            "recommendations": ["Please check your input data"]
        }

@app.get("/api/model-info")
def model_info():
    return {
        "model_type": "Random Forest Classifier",
        "accuracy": "81.30%",
        "features": feature_names,
        "n_estimators": 100
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)