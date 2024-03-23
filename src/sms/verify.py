from twilio.rest import Client
from flask import Flask, request, redirect
from twilio.twiml.messaging_response import MessagingResponse
import yaml

with open("../../config.yaml", "r") as file:
    config = yaml.safe_load(file)
# Twilio
account_sid = config["twilio_sid"]
auth_token = config["twilio_token"]

client = Client(account_sid, auth_token)
