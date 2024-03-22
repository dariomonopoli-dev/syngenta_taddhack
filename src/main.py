from api.CE_Hub_api import get_data
import pandas as pd


from src.utils.get_api_data import get_api_data

def main():
    # Wait for Input, then do something (Without Newsletter)
    while True:
        chat_msg = input("Enter a new message: ")
        # 1.) Retrieve input, decide which action it is (Nothing, Watering, Spraying, Fertilizing)

        # 2.) Get API Data
        weather_data = get_api_data()

        # 3.) Feed API Data into Model and answer the original question with the received data, then send it back
        # 4.) Repeat

        # Model

        # Data
    chat_msg = input("Enter a message: ")
    # 1.) Retrieve input, decide which action it is (Nothing, Watering, Spraying, Fertilizing)
    # 2.) Get API Data
    # 3.) Feed API Data into Model and answer the original question with the received data, then send it back
    # 4.) Repeat

    # Model

    # Data


if __name__ == "__main__":
  main()