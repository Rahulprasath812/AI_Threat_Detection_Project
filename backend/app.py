from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/")
def home():
    return "Flask is running!"

@app.route("/detect", methods=["POST"])
def detect_threat():
    data = request.json
    if not data or "text" not in data:
        return jsonify({"error": "Missing 'text' field"}), 400

    text = data["text"]
    is_threat = "phishing" in text.lower()

    return jsonify({"threat_detected": is_threat})

if __name__ == "__main__":
    print("Available routes:")
    for rule in app.url_map.iter_rules():
        print(rule)  # Debugging: Prints all available routes

    app.run(debug=True)
