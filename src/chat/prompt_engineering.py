import os
import json
import predictionguard as pg
from langchain import PromptTemplate
from langchain import PromptTemplate, FewShotPromptTemplate
import numpy as np
import yaml


with open("../../config.yaml", 'r') as file:
    config = yaml.safe_load(file)

os.environ['PREDICTIONGUARD_TOKEN'] = config['predictionguard_token']

# Create a string formatter for sentiment analysis demonstrations.
demo_formatter_template = """
Text: {text}
Action: {action}
"""

# Define a prompt template for the demonstrations.
demo_prompt = PromptTemplate(
    input_variables=["text", "action"],
    template=demo_formatter_template,
)

# Each row here includes:
# 1. an example text input (that we want to analyze for sentiment)
# 2. an example sentiment output (NEU, NEG, POS)
few_examples = [
    ["Should I just leave my plants as they are for today?", "Nothing"],
    ["I read that watering in the evening is best. Should I do it?", "Watering"],
    ['The leaves have some white spots. I think I need to spray them with fungicide, right?', 'Spraying'],
    ['Can I use this organic fertilizer on my indoor plants now, or should I wait?', 'Fertilizing'],
    ["I won't be home to tend to the plants.They'll be fine without me, right?", 'Nothing'],
    ['Considering the hot weather, I plan to water the garden twice today. Does that sound like a plan?', 'Watering'],
    ['Is now a good time to apply insecticide spray to my vegetable garden?', 'Spraying'],
    ['I have a special bloom booster for my roses. Is it the right time to apply it?', 'Fertilizing'],
    ["Do my plants need any attention today, or can I skip today's gardening routine?", 'Nothing'],
    ['The soil feels a bit dry. Should I water the plants now or wait until tomorrow morning?', 'Watering'],
    ['It looks like mildew is starting to form. Should I go ahead and spray the affected areas?', 'Spraying'],
    ['My tomatoes are starting to fruit. Should I give them a dose of fertilizer?', 'Fertilizing']
]


examples = []
for ex in few_examples:
  examples.append({
      "text": ex[0],
      "action": ex[1]
  })

few_shot_prompt = FewShotPromptTemplate(

    # This is the demonstration data we want to insert into the prompt.
    examples=examples,
    example_prompt=demo_prompt,
    example_separator="",

    # This is the boilerplate portion of the prompt corresponding to
    # the prompt task instructions.
    prefix="Classify the action of the text. Use the label Nothing for no action, Watering if the user wants to water something, Spraying if the user wants to spray something, and Fertilizing if the user fertilizes. \n",

    # The suffix of the prompt is where we will put the output indicator
    # and define where the "on-the-fly" user input would go.
    suffix="\nText: {input}\naction:",
    input_variables=["input"],
)

myprompt = few_shot_prompt.format(input="I think my plants are thirsty. ")
print(myprompt)


result = pg.Completion.create(
    model="Nous-Hermes-Llama2-13B",
    prompt=myprompt
)

print("COMPLETION:", result['choices'][0]['text'].split('\n')[0].strip())

action = result['choices'][0]['text'].split('\n')[0].strip()



