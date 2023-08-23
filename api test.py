from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "http://INSERTIPADDRESS:5500"}})  # Adjust the origin as needed

@app.route('/api/data', methods=['GET'])
def get_data():
    data = {'message': 'Hello from the API!'}
    return jsonify(data)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
