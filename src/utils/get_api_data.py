from src.api.CE_Hub_api import get_data
import pandas as pd


def get_api_data():
    # Wait for Input, then do something (Without Newsletter)
    # 1.) Retrieve input, decide which action it is (Nothing, Watering, Spraying, Fertilizing)
    # 2.) Get API Data
    data = get_data()
    df = pd.DataFrame(data)

    df_pivot = df.pivot(
        index="date", columns="measureLabel", values="value"
    ).reset_index()

    df_pivot.columns = [
        col.replace(" ", "_").replace("(", "").replace(")", "").replace("/", "_")
        for col in df_pivot.columns
    ]

    print(df_pivot)
    rain_data = df_pivot["Precip_HourlySum_mm"][0:24] # rain data
    temp_data = df_pivot["TempAir_Hourly_C"][0:24] # temperature data
    wind_data = df_pivot["WindSpeed_Hourly_m_s"][0:24] # wind speed data
    sun_data = df_pivot["SunshineDuration_Hourly_min"][0:24] # sunshine duration data

    # Convert to a nice context string
    context_string = "Over the next 24 hours, the following weather data is observed:\n"
    context_string += "- Rainfall (mm per hour): " + ", ".join(str(x) for x in rain_data) + "\n"
    context_string += "- Temperature (°C): " + ", ".join(str(x) for x in temp_data) + "\n"
    context_string += "- Wind Speed (m/s): " + ", ".join(str(x) for x in wind_data) + "\n"
    context_string += "- Sunshine Duration (minutes per hour): " + ", ".join(str(x) for x in sun_data)

    return context_string


if __name__ == "__main__":
  get_api_data()