from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/cookies', methods=['POST'])
def receive_cookies():
    if request.is_json:
        data = request.get_json()
        print("Received cookie data:")
        print(data)
        return jsonify({"status": "success", "message": "Cookies received"}), 200
    else:
        return jsonify({"status": "error", "message": "Request must be JSON"}), 400

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80)
