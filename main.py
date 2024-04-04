from flask import Flask

app = Flask(__name__)

@app.route("/")
def main():
    return "This is an Artice generator app using Langchain"

if __name__ == "__main__":
    app.run(host="0.0.0.0")