from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for the entire app

@app.route('/receive', methods=['POST', 'OPTIONS'])
def receive_search_query():
    if request.method == 'OPTIONS':
        # Handle pre-flight request
        response = app.make_default_options_response()
    else:
        # Handle POST request
        data = request.get_json()
        search_query = data.get('searchQuery', '')
        print(f"Search query received: {search_query}")
        response = {'message': 'Search query received'}

    return response

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
