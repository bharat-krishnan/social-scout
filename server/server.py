from flask import Flask, request
from dotenv import load_dotenv
load_dotenv()
import os
import tweepy

app = Flask(__name__)

@app.route("/<username>")
def getTweets():
    client = tweepy.Client(os.getenv("BEARER_TOKEN"))


@app.route("/members")
def members():
    return {"members": ["member1", "member2", "member3"]}

if __name__ == "__main__":
    app.run(debug=True)