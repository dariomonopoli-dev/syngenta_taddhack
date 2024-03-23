# CE Hub API

# Forecast Daily
import requests
import json

weather_source = "Meteoblue"
api_key = "YOUR_API_KEY"
latitude = "47"
longitude = "7"
start_date = "2024-03-20"
end_date = "2024-03-23"
measure_label = "TempAir_DailyAvg (C);TempAir_DailyMax (C);TempAir_DailyMin (C);Precip_DailySum (mm);WindDirection_DailyAvg (Deg);WindSpeed_DailyAvg (m/s);HumidityRel_DailyAvg (pct);WindDirection_DailyAvg"

url = f"https://services.cehub.syngenta-ais.com/api/Forecast/ShortRangeForecastDaily?format=json&supplier={weather_source}&startDate={start_date}&endDate={end_date}&measureLabel={measure_label}&latitude={latitude}&longitude={longitude}"

headers = {
    "ApiKey": f"{api_key}",
}
response = requests.get(url, headers=headers)



weather_source = "Meteoblue"
api_key = "169294f4-c54f-490e-8124-f74ae00d62e7"
latitude = "47"
longitude = "7"
start_date = "2024-03-20"
end_date = "2024-03-23"
measure_label = "TempAir_DailyAvg (C);TempAir_DailyMax (C);TempAir_DailyMin (C);Precip_DailySum (mm);WindDirection_DailyAvg (Deg);WindSpeed_DailyAvg (m/s);HumidityRel_DailyAvg (pct);WindDirection_DailyAvg"

url = f"https://services.cehub.syngenta-ais.com/api/Forecast/ShortRangeForecastDaily?format=json&supplier={weather_source}&startDate={start_date}&endDate={end_date}&measureLabel={measure_label}&latitude={latitude}&longitude={longitude}"

headers = {
    "ApiKey": f"{api_key}",
}
"""response = requests.get(url, headers=headers)

if response.status_code == 200:
    return response.json()
else:
    print(f"Error code: {response.status_code}")
    print("Error message:", response.text)"""

def get_data():
    # Forecast Hourly
    measure_label = "Precip_HourlySum (mm);PrecipProbability_Hourly (pct);ShowerProbability_Hourly (pct);SnowFraction_Hourly;SunshineDuration_Hourly (min);TempAir_Hourly (C);Visibility_Hourly (m);WindDirection_Hourly (Deg);WindGust_Hourly (m/s);WindSpeed_Hourly (m/s);Soilmoisture_0to10cm_Hourly (vol%25);Soiltemperature_0to10cm_Hourly (C)"
    url = f"https://services.cehub.syngenta-ais.com/api/Forecast/ShortRangeForecastHourly"
    params = {
        "format": "json",
        "supplier": weather_source,
        "startDate": start_date,
        "endDate": end_date,
        "measureLabel": measure_label,
        "latitude": latitude,
        "longitude": longitude,
    }

    headers = {
        "ApiKey": f"{api_key}",
    }

    response = requests.get(url, headers=headers, params=params)

    return response.json()

print(get_data())



"""if response.status_code == 200:
    print("Data retrieved successfully!")
    print(response.json())
else:
    print(f"Error code: {response.status_code}")
    print("Error message:", response.text)"""


# Historical Daily

url = "http://my.meteoblue.com/dataset/query?apikey=syn-8w3fegwpefg"

payload = {
    "units": {
        "temperature": "C",
        "velocity": "km/h",
        "length": "metric",
        "energy": "watts",
    },
    "geometry": {
        "type": "MultiPoint",
        "coordinates": [[7.57327, 47.558399, 279]],
        "locationNames": ["Basel"],
        "mode": "preferLandWithMatchingElevation",
    },
    "format": "json",
    "timeIntervals": ["2023-01-01T+01:00/2024-03-19T+01:00"],
    "timeIntervalsAlignment": "none",
    "queries": [
        {
            "domain": "ERA5T",
            "gapFillDomain": "NEMSGLOBAL",
            "timeResolution": "daily",
            "codes": [{"code": 11, "level": "2 m above gnd", "aggregation": "mean"}],
        },
        {
            "domain": "ERA5T",
            "gapFillDomain": "NEMSGLOBAL",
            "timeResolution": "daily",
            "codes": [{"code": 61, "level": "sfc", "aggregation": "sum"}],
        },
        {
            "domain": "ERA5T",
            "gapFillDomain": "NEMSGLOBAL",
            "timeResolution": "daily",
            "codes": [{"code": 52, "level": "2 m above gnd", "aggregation": "mean"}],
        },
        {
            "domain": "ERA5T",
            "gapFillDomain": "NEMSGLOBAL",
            "timeResolution": "daily",
            "codes": [{"code": 261, "level": "sfc", "aggregation": "sum"}],
        },
        {
            "domain": "ERA5T",
            "gapFillDomain": "NEMSGLOBAL",
            "timeResolution": "daily",
            "codes": [{"code": 32, "level": "10 m above gnd", "aggregation": "mean"}],
        },
    ],
}

headers = {"Content-Type": "application/json"}

response = requests.post(url, headers=headers, data=json.dumps(payload))

"""print(f"Status code: {response.status_code}")
if response.status_code == 200:
    print(response.json())
else:
    print("Error:", response.text)"""


# Historical Hourly
url = "http://my.meteoblue.com/dataset/query?apikey=syn-8w3fegwpefg"

payload = {
    "units": {
        "temperature": "C",
        "velocity": "km/h",
        "length": "metric",
        "energy": "watts",
    },
    "geometry": {
        "type": "MultiPoint",
        "coordinates": [[7.57327, 47.558399, 279]],
        "locationNames": ["Basel"],
        "mode": "preferLandWithMatchingElevation",
    },
    "format": "json",
    "timeIntervals": ["2023-01-01T+01:00/2024-03-19T+01:00"],
    "timeIntervalsAlignment": "none",
    "queries": [
        {
            "domain": "ERA5T",
            "gapFillDomain": "NEMSGLOBAL",
            "timeResolution": "hourly",
            "codes": [{"code": 11, "level": "2 m above gnd"}],
        },
        {
            "domain": "ERA5T",
            "gapFillDomain": "NEMSGLOBAL",
            "timeResolution": "hourly",
            "codes": [{"code": 61, "level": "sfc"}],
        },
        {
            "domain": "ERA5T",
            "gapFillDomain": "NEMSGLOBAL",
            "timeResolution": "hourly",
            "codes": [{"code": 52, "level": "2 m above gnd"}],
        },
        {
            "domain": "ERA5T",
            "gapFillDomain": "NEMSGLOBAL",
            "timeResolution": "hourly",
            "codes": [{"code": 261, "level": "sfc"}],
        },
        {
            "domain": "ERA5T",
            "gapFillDomain": "NEMSGLOBAL",
            "timeResolution": "hourly",
            "codes": [{"code": 32, "level": "10 m above gnd"}],
        },
    ],
}

headers = {"Content-Type": "application/json"}

"""response = requests.post(url, headers=headers, data=json.dumps(payload))

print(f"Status code: {response.status_code}")
if response.status_code == 200:
    print(response.json())
else:
    print("Error:", response.text)"""
