from twilio.rest import Client
from flask import Flask, request, redirect
from twilio.twiml.messaging_response import MessagingResponse
import yaml

with open("../config.yaml", 'r') as file:
    config = yaml.safe_load(file)
# Twilio
account_sid = config["twilio_sid"]
auth_token = config["twilio_token"]

phone_number = '+41786321632'
def send_sms(phone_number):
  client = Client(account_sid, auth_token)

  message = client.messages.create(
    from_='+16064056874',
    body="Test",
    to=phone_number
  )
  print(message.sid)

app = Flask(__name__)

@app.route("/")
def hello():
  return "Hello World!"

@app.route("/sms", methods=['GET', 'POST'])
def sms_reply():
  """Respond to incoming calls with a simple text message."""
  # Start our TwiML response
  resp = MessagingResponse()

  # Add a message
  resp.message("The Robots are coming! Head for the hills!")

  return str(resp)

if __name__ == "__main__":
    # app.run(debug=True)
    send_sms(phone_number)