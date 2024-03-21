import os
import predictionguard as pg
import json
from twilio.rest import Client
from flask import Flask, request, redirect
from twilio.twiml.messaging_response import MessagingResponse

# Twilio
account_sid = 'AC44c513e0064a62c9b98                                                                                                                                                          8d66efe1b39ea'
auth_token = '44ba33f49d167a6ee2d5790628937392'

# PredictionGuard
os.environ['PREDICTIONGUARD_TOKEN'] = "q1VuOjnffJ3NO2oFN8Q9m8vghYc84ld13jaqdF7E"

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
    # TODO: Get username and data from database
    # TODO: Formulate recommendations based on weather data
    # TODO: Formulate prompt
    messages.append({
        "role": "user",
        "content": "Reply with a two sentence response addressed to Pedro. The reply should tell me that today's weather conditions are ideal for plant fertilization due to the low wind speed of light."
    })


    """Respond to incoming calls with a simple text message."""
    # Start our TwiML response
    resp = MessagingResponse()

    prompt = request.values.get('Body', None)
    prompt_response = pg.Completion.create(model='Hermes-2-Pro-Mistral-7B',
                          prompt=prompt)['choices'][0]['text']

    # Add a message
    resp.message(prompt_response)

    return str(resp)




if __name__ == "__main__":
    app.run(debug=True)