import os
import predictionguard as pg
import json
from twilio.rest import Client
from flask import Flask, request, redirect
from twilio.twiml.messaging_response import MessagingResponse
import yaml

with open("../../config.yaml", "r") as file:
    config = yaml.safe_load(file)
# Twilio
account_sid = config["twilio_sid"]
auth_token = config["twilio_token"]
# PredictionGuard
os.environ["PREDICTIONGUARD_TOKEN"] = config["predictionguard_token"]

messages = [
    {
        "role": "system",
        "content": "You are a helpful assistant that provides clever and factual responses.",
    }
]
app = Flask(__name__)


@app.route("/")
def hello():
    return "Hello World!"


def send_sms(text):
    client = Client(account_sid, auth_token)

    message = client.messages.create(
        # from_='+16064056874',
        from_=config["twilio_phone_number"],
        body=text,
        to=config["phone_number"],
    )
    print("Sent SMS message")


@app.route("/sms", methods=["GET", "POST"])
def sms_reply():
    # TODO: Get username and data from database
    # TODO: Formulate recommendations based on weather data
    # TODO: Formulate prompt
    prompt = request.values.get("Body", None)
    messages.append({"role": "user", "content": prompt})

    """Respond to incoming calls with a simple text message."""
    # Start our TwiML response
    resp = MessagingResponse()

    response = (
        pg.Chat.create(model="Hermes-2-Pro-Mistral-7B", messages=messages)["choices"][
            0
        ]["message"]["content"]
        .split("\n")[0]
        .strip()
    )

    # Add a message
    resp.message(response)

    return str(resp)


try:
    if __name__ == "__main__":
        app.run(debug=True, port=8000)
except:
    print("Exception occured!")
    from werkzeug.serving import run_simple

    run_simple("localhost", 9000, app)
