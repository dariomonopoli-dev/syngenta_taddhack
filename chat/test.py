import os

import predictionguard as pg
import json

os.environ['PREDICTIONGUARD_TOKEN'] = "q1VuOjnffJ3NO2oFN8Q9m8vghYc84ld13jaqdF7E"

print(pg.Chat.list_models())

messages = [
    {
        "role": "system",
        "content": "You are a helpful assistant that provides clever and factual responses."
    }
]
messages.append({
            "role": "user",
            "content": "Reply with a two sentence response addressed to Pedro. The reply should tell me that today's weather conditions are ideal for plant fertilization due to the low wind speed of light."
        })
response = pg.Chat.create(model='Hermes-2-Pro-Mistral-7B',
                          messages=messages)
print(response['choices'][0]['message']['content'].split('\n')[0].strip())
# print(json.dumps(
#     response,
#     sort_keys=True,
#     indent=4,
#     separators=(',', ': ')
# ))


