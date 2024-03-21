from twilio.rest import Client
from flask import Flask, request, redirect
from twilio.twiml.messaging_response import MessagingResponse
account_sid = 'AC44c513e0064a62c9b988d66efe1b39ea'
auth_token = '44ba33f49d167a6ee2d5790628937392'

client = Client(account_sid, auth_token)

validation_request = client.validation_requests \
                           .create(
                                friendly_name='Thiemo',
                                phone_number='+41789036307'
                            )

print(validation_request.friendly_name)