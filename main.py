from flask import Flask, render_template, jsonify, request

app = Flask(__name__)

@app.route("/")
def main():
    return render_template("index.html")

@app.route("/generate", methods=["GET", "POST"])
def generateArticle():
    if request.method == "POST":
        print(request.json['data'])
    return jsonify({"success": "This is an article"})
if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True)