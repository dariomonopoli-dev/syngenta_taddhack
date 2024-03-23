import os
import predictionguard as pg
import json
from twilio.rest import Client
from flask import Flask, request, redirect
from twilio.twiml.messaging_response import MessagingResponse
import yaml

from src.utils.get_api_data import get_api_data
from src.utils.get_model_preds import get_model_answer
# from src.utils.get_send_sms import send_sms, get_sms


with open("../config.yaml", 'r') as file:
    config = yaml.safe_load(file)
# Twilio
account_sid = config["twilio_sid"]
auth_token = config["twilio_token"]
# PredictionGuard
os.environ['PREDICTIONGUARD_TOKEN'] = config['predictionguard_token']

messages = [
    {
        "role": "system",
        "content": "You are a helpful assistant that provides clever and factual responses."
    }
]
app = Flask(__name__)

@app.route("/")
def hello():
  return "Hello World!"

@app.route("/sms", methods=['GET', 'POST'])
def sms_reply():
    messages.append({
        "role": "user",
        "content": "Reply with a two sentence response addressed to Pedro. The reply should tell me that today's weather conditions are ideal for plant fertilization due to the low wind speed of light."
    })

    """Respond to incoming calls with a simple text message."""
    # Start our TwiML response
    resp = MessagingResponse()

    weather_data = get_api_data()
    prompt_response = get_model_answer(input=resp, context=weather_data)

    # Add a message
    resp.message(prompt_response)

    return str(resp)




if __name__ == "__main__":
    app.run(debug=True)