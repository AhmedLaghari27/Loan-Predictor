import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.ensemble import RandomForestClassifier
import joblib
import json
# NEW:
import os
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
df = pd.read_csv(os.path.join(BASE_DIR, 'Loan_Eligibility_Prediction.csv'))

# Drop Customer_ID as it's not useful for prediction
df = df.drop('Customer_ID', axis=1)

# Handle missing values
df['Gender'].fillna(df['Gender'].mode()[0], inplace=True)
df['Married'].fillna(df['Married'].mode()[0], inplace=True)
df['Dependents'].fillna(df['Dependents'].mode()[0], inplace=True)
df['Self_Employed'].fillna(df['Self_Employed'].mode()[0], inplace=True)
df['Loan_Amount'].fillna(df['Loan_Amount'].median(), inplace=True)
df['Loan_Amount_Term'].fillna(df['Loan_Amount_Term'].mode()[0], inplace=True)
df['Credit_History'].fillna(df['Credit_History'].mode()[0], inplace=True)

# Encode categorical variables
label_encoders = {}
categorical_columns = ['Gender', 'Married', 'Dependents', 'Education', 'Self_Employed', 'Property_Area']

for col in categorical_columns:
    le = LabelEncoder()
    df[col] = le.fit_transform(df[col])
    label_encoders[col] = le

# Separate features and target
X = df.drop('Loan_Status', axis=1)
y = df['Loan_Status']

# Encode target variable
le_target = LabelEncoder()
y = le_target.fit_transform(y)

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train Random Forest model
model = RandomForestClassifier(n_estimators=100, random_state=42, max_depth=10)
model.fit(X_train, y_train)

# Calculate accuracy
accuracy = model.score(X_test, y_test)
print(f"Model Accuracy: {accuracy * 100:.2f}%")

# Get feature names from X
feature_names = X.columns.tolist()

# Then save
with open(os.path.join(BASE_DIR, 'feature_names.json'), 'w') as f:
    json.dump(feature_names, f)

# NEW (correct paths):
joblib.dump(model, os.path.join(BASE_DIR, 'loan_model.pkl'))
joblib.dump(label_encoders, os.path.join(BASE_DIR, 'label_encoders.pkl'))
joblib.dump(le_target, os.path.join(BASE_DIR, 'target_encoder.pkl'))

with open(os.path.join(BASE_DIR, 'feature_names.json'), 'w') as f:
    json.dump(feature_names, f)

print("✓ Model trained and saved successfully!")
print(f"✓ Feature names: {feature_names}")
# Save in current directory
joblib.dump(model, os.path.join(BASE_DIR, 'loan_model.pkl'))
joblib.dump(label_encoders, os.path.join(BASE_DIR, 'label_encoders.pkl'))
joblib.dump(le_target, os.path.join(BASE_DIR, 'target_encoder.pkl'))

with open(os.path.join(BASE_DIR, 'feature_names.json'), 'w') as f:
    json.dump(feature_names, f)
