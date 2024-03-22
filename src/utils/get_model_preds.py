import os
import json
import predictionguard as pg
from langchain import PromptTemplate
from langchain import PromptTemplate, FewShotPromptTemplate
import numpy as np
import yaml



def get_model_answer_action(input):
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

    myprompt = few_shot_prompt.format(input=input)
    print(myprompt)

    result = pg.Completion.create(
        model="Nous-Hermes-Llama2-13B",
        prompt=myprompt
    )

    print("COMPLETION:", result['choices'][0]['text'].split('\n')[0].strip())

    action = result['choices'][0]['text'].split('\n')[0].strip()



with open("/Users/thiemowandel/My Drive/Projekte/StartHack2024/syngenta_taddhack/config.yaml", 'r') as file:
    config = yaml.safe_load(file)

def get_model_answer(input, context=""):

    os.environ['PREDICTIONGUARD_TOKEN'] = config['predictionguard_token']
    # template = """### Instruction:
    # Interpret the message and try to figure out if the user wants to water, spray, fertilize, or do nothing to their plants.
    # - If he wants to water: Try to find the corresponding weather data in the context and give a recommendation based on that. Look specifically at the rain and temperature.
    # - If he wants to spray: Try to find the corresponding weather data in the context and give a recommendation based on that. Especially if the wind velocity is too high or not for spraying.
    # - If he wants to fertilize: Try to find the corresponding weather data in the context and give a recommendation based on that. Especially if the rain and wind is good for fertilization.
    # - If he wants to do nothing: Just give him general advice.
    # Keep the response concise and around 2-3 sentences. Do not write any programming code after the short answer.
    # ### Input:
    # Context: {context}
    # User Message: {question}
    # ### Response:
    # """

    template = """
    ### Instruction:

    Your task is to analyze the user's message to determine their intention regarding plant care: watering, spraying, fertilizing, or opting for no action. Based on this determination, use the provided weather data and other relevant context to formulate a tailored recommendation. Follow these guidelines:

    - **Watering**: If the user is interested in watering, assess the recent and forecasted rain levels and temperature. Offer advice on whether watering is necessary, considering the moisture needs of the plants and potential rainfall.

    - **Spraying**: For users considering spraying (e.g., pesticides or foliar feeds), evaluate the wind speed and other weather conditions. Advise on the suitability of the weather for spraying, with a focus on minimizing drift and ensuring effective application.

    - **Fertilizing**: If fertilizing is the intention, analyze the weather conditions, especially upcoming rain and current wind conditions. Provide guidance on the optimal timing for fertilization to ensure nutrient absorption and minimize loss.

    - **No Action**: In cases where the user is leaning towards no action, offer general plant care advice. This may include tips on monitoring weather conditions and plant health, or suggestions for future care activities.

    Ensure your response is concise, aiming for 2-3 sentences. Directly address the user's intention with actionable advice. Avoid including programming code or overly technical jargon in your response.

    ### Input:

    - **Context**: {context} (Include relevant weather data and any specific details about the plants or care activities mentioned by the user.)
    - **User Message**: {question} (This is the direct query or statement from the user indicating their plant care consideration.)

    ### Response:

    """


    prompt = PromptTemplate(
        input_variables=["context", "question"],
        template=template,
    )
    # context = "Domino's gift cards are great for any person and any occasion. There are a number of different options to choose from. Each comes with a personalized card carrier and is delivered via US Mail."
    # input = "How are gift cards delivered?"

    myprompt = prompt.format(context=context, question=input)

    # TODO: Use a better model, like chatgpt 3.5
    result = pg.Completion.create(
        model="Nous-Hermes-Llama2-13B",
        prompt=myprompt
    )
    return result['choices'][0]['text']
