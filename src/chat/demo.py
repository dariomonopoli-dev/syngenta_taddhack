import os
import predictionguard as pg
import json
from twilio.rest import Client
from flask import Flask, request, redirect
from twilio.twiml.messaging_response import MessagingResponse
import yaml
import time

with open("../../config.yaml", 'r') as file:
    config = yaml.safe_load(file)
# Twilio
account_sid = config["twilio_sid"]
auth_token = config["twilio_token"]
# PredictionGuard
os.environ['PREDICTIONGUARD_TOKEN'] = config['predictionguard_token']

messages = [
    "Hi Pedro! Urgent weather update: Expect a moderate breeze up to 25 km/h within the next hour. It's best to reschedule today's pesticide spraying to tomorrow for better safety and effectiveness.",
    "Good choice. Note: light rain is forecasted from 22:00-01:00. Please adjust the watering volume to accommodate the expected rainfall."
]
app = Flask(__name__)

@app.route("/")
def hello():
    # send_sms("\nHi Pedro! Urgent weather update: Expect a moderate breeze up to 25 km/h within the next hour. It's best to reschedule today's pesticide spraying to tomorrow for better safety and effectiveness.")

    return "Hello World!"

def send_sms(text):
  client = Client(account_sid, auth_token)

  message = client.messages.create(
    from_=config["twilio_phone_number"],
    body=text,
    to=config["phone_number"]
  )
  print("Sent SMS message")


@app.route("/sms", methods=['GET', 'POST'])
def sms_reply():
    # TODO: Get username and data from database
    # TODO: Formulate recommendations based on weather data
    # TODO: Formulate prompt
    prompt = request.values.get('Body', None)
    messages.append({
        "role": "user",
        "content": prompt
    })


    """Respond to incoming calls with a simple text message."""
    # Start our TwiML response
    resp = MessagingResponse()


    # response = pg.Chat.create(model='Hermes-2-Pro-Mistral-7B',
    #                           messages=messages)['choices'][0]['message']['content'].split('\n')[0].strip()
    # time.sleep(2)
    # Add a message
    resp.message("\nGood choice. Note: light rain is forecasted from 22:00-01:00. Please adjust the watering volume to accommodate the expected rainfall.")

    return str(resp)


if __name__ == "__main__":
    if not os.environ.get("WERKZEUG_RUN_MAIN"):
        send_sms("\nHi Pedro! Urgent weather update: Expect a moderate breeze up to 25 km/h within the next hour. It's best to reschedule today's pesticide spraying to tomorrow for better safety and effectiveness.")
    app.run(debug=True)