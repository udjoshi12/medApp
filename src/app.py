from flask import Flask, request, jsonify
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origin="*")

@app.route('/', methods=['POST'])
def main():
    try:
        month = request.json['month']
        print('Received month:', month)  # Log the received month
        predictions = predict_sales(month)
        return jsonify(predictions)
    except Exception as e:
        print('Error:', e)
        return jsonify({'error': str(e)}), 500

def predict_sales(month):
    # Load data and perform predictions
    sales_df = pd.read_csv('sales_data.csv')
    purchases_df = pd.read_csv('purchases_data.csv')
    expiry_df = pd.read_csv('expiry_data.csv')

    # Merge dataframes
    merged_df = pd.merge(sales_df, purchases_df, on=['year', 'drug_name', 'drug_type'], how="outer")
    merged_df = pd.merge(merged_df, expiry_df, on=['year', 'drug_name', 'drug_type'], how="outer")

    # Calculate total sales, purchases, and expired
    merged_df['total_sales'] = merged_df.iloc[:, 3:15].sum(axis=1)
    merged_df['total_purchases'] = merged_df.iloc[:, 16:28].sum(axis=1)
    merged_df['total_expired'] = merged_df.iloc[:, 29:].sum(axis=1)

    predictions = {}

    # Iterate over drug groups
    for drug_name, group in merged_df.groupby('drug_name'):
        group = group.dropna(subset=[f'{month}_sales'])
        if group.empty:
            continue
        
        # Split data into features (X) and target (y)
        X = group[['total_sales', 'total_purchases', 'total_expired']]
        y = group[[f'{month}_sales']]

        # Train-test split
        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

        # Train the model
        model = LinearRegression()
        model.fit(X_train, y_train)

        # Make predictions
        predicted_sales = model.predict(X_test)
        mse = mean_squared_error(y_test, predicted_sales)

        # Store predictions
        predictions[drug_name] = predicted_sales[0][0]

    return predictions

if __name__ == '__main__':
    app.run(debug=True)
