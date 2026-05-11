const weatherData = {
    hyderabad: {
        location: "Hyderabad, India",
        icon: "\u2600",
        temperature: "29\u00B0C",
        condition: "Sunny with light breeze",
        humidity: "54%",
        wind: "12 km/h",
        feelsLike: "31\u00B0C",
        updatedTime: "Updated 3:00 PM",
        highlights: {
            uvIndex: "7.4",
            uvText: "High protection needed",
            rainChance: "12%",
            rainText: "Dry conditions expected",
            sunset: "6:34 PM",
            sunsetText: "Golden hour starts soon",
            airQuality: "42 AQI",
            airText: "Fresh and comfortable"
        },
        hourly: [
            { time: "2 PM", icon: "\u2600", temp: "29\u00B0" },
            { time: "3 PM", icon: "\u2600", temp: "30\u00B0" },
            { time: "4 PM", icon: "\u26C5", temp: "29\u00B0" },
            { time: "5 PM", icon: "\u26C5", temp: "28\u00B0" },
            { time: "6 PM", icon: "\u2601", temp: "27\u00B0" },
            { time: "7 PM", icon: "\uD83C\uDF19", temp: "25\u00B0" }
        ],
        daily: [
            { day: "Mon", icon: "\u2600", temp: "31\u00B0 / 24\u00B0" },
            { day: "Tue", icon: "\u26C5", temp: "30\u00B0 / 23\u00B0" },
            { day: "Wed", icon: "\uD83C\uDF27", temp: "27\u00B0 / 22\u00B0" },
            { day: "Thu", icon: "\uD83C\uDF26", temp: "28\u00B0 / 22\u00B0" },
            { day: "Fri", icon: "\u2600", temp: "32\u00B0 / 24\u00B0" }
        ]
    },
    mumbai: {
        location: "Mumbai, India",
        icon: "\u26C5",
        temperature: "31\u00B0C",
        condition: "Humid afternoon with sea breeze",
        humidity: "71%",
        wind: "18 km/h",
        feelsLike: "36\u00B0C",
        updatedTime: "Updated 2:45 PM",
        highlights: {
            uvIndex: "6.8",
            uvText: "Moderate sun exposure",
            rainChance: "28%",
            rainText: "Slight evening drizzle possible",
            sunset: "6:57 PM",
            sunsetText: "Warm coastal sunset",
            airQuality: "58 AQI",
            airText: "Moderate urban air"
        },
        hourly: [
            { time: "2 PM", icon: "\u26C5", temp: "31\u00B0" },
            { time: "3 PM", icon: "\u26C5", temp: "31\u00B0" },
            { time: "4 PM", icon: "\u2601", temp: "30\u00B0" },
            { time: "5 PM", icon: "\u2601", temp: "29\u00B0" },
            { time: "6 PM", icon: "\uD83C\uDF26", temp: "28\u00B0" },
            { time: "7 PM", icon: "\uD83C\uDF19", temp: "27\u00B0" }
        ],
        daily: [
            { day: "Mon", icon: "\u26C5", temp: "31\u00B0 / 27\u00B0" },
            { day: "Tue", icon: "\u2601", temp: "30\u00B0 / 26\u00B0" },
            { day: "Wed", icon: "\uD83C\uDF26", temp: "29\u00B0 / 26\u00B0" },
            { day: "Thu", icon: "\uD83C\uDF27", temp: "28\u00B0 / 25\u00B0" },
            { day: "Fri", icon: "\u26C5", temp: "30\u00B0 / 26\u00B0" }
        ]
    },
    delhi: {
        location: "Delhi, India",
        icon: "\u2600",
        temperature: "35\u00B0C",
        condition: "Hot and dry conditions",
        humidity: "32%",
        wind: "15 km/h",
        feelsLike: "37\u00B0C",
        updatedTime: "Updated 2:30 PM",
        highlights: {
            uvIndex: "8.2",
            uvText: "Strong sunlight outdoors",
            rainChance: "5%",
            rainText: "Very low rain chance",
            sunset: "6:52 PM",
            sunsetText: "Clear evening sky",
            airQuality: "96 AQI",
            airText: "Sensitive groups take care"
        },
        hourly: [
            { time: "2 PM", icon: "\u2600", temp: "35\u00B0" },
            { time: "3 PM", icon: "\u2600", temp: "36\u00B0" },
            { time: "4 PM", icon: "\u2600", temp: "36\u00B0" },
            { time: "5 PM", icon: "\u26C5", temp: "34\u00B0" },
            { time: "6 PM", icon: "\u26C5", temp: "32\u00B0" },
            { time: "7 PM", icon: "\uD83C\uDF19", temp: "30\u00B0" }
        ],
        daily: [
            { day: "Mon", icon: "\u2600", temp: "37\u00B0 / 26\u00B0" },
            { day: "Tue", icon: "\u2600", temp: "38\u00B0 / 27\u00B0" },
            { day: "Wed", icon: "\u26C5", temp: "36\u00B0 / 26\u00B0" },
            { day: "Thu", icon: "\uD83C\uDF26", temp: "33\u00B0 / 24\u00B0" },
            { day: "Fri", icon: "\u2600", temp: "35\u00B0 / 25\u00B0" }
        ]
    },
    bengaluru: {
        location: "Bengaluru, India",
        icon: "\u26C5",
        temperature: "24\u00B0C",
        condition: "Pleasant with scattered clouds",
        humidity: "63%",
        wind: "10 km/h",
        feelsLike: "25\u00B0C",
        updatedTime: "Updated 2:50 PM",
        highlights: {
            uvIndex: "5.6",
            uvText: "Comfortable daylight levels",
            rainChance: "34%",
            rainText: "Cloud build-up by evening",
            sunset: "6:41 PM",
            sunsetText: "Soft and cool sunset",
            airQuality: "48 AQI",
            airText: "Good air quality"
        },
        hourly: [
            { time: "2 PM", icon: "\u26C5", temp: "24\u00B0" },
            { time: "3 PM", icon: "\u26C5", temp: "24\u00B0" },
            { time: "4 PM", icon: "\u2601", temp: "23\u00B0" },
            { time: "5 PM", icon: "\uD83C\uDF26", temp: "22\u00B0" },
            { time: "6 PM", icon: "\uD83C\uDF26", temp: "21\u00B0" },
            { time: "7 PM", icon: "\uD83C\uDF19", temp: "20\u00B0" }
        ],
        daily: [
            { day: "Mon", icon: "\u26C5", temp: "25\u00B0 / 19\u00B0" },
            { day: "Tue", icon: "\uD83C\uDF26", temp: "24\u00B0 / 18\u00B0" },
            { day: "Wed", icon: "\uD83C\uDF27", temp: "23\u00B0 / 18\u00B0" },
            { day: "Thu", icon: "\u26C5", temp: "25\u00B0 / 19\u00B0" },
            { day: "Fri", icon: "\u2600", temp: "26\u00B0 / 19\u00B0" }
        ]
    },
    chennai: {
        location: "Chennai, India",
        icon: "\u2600",
        temperature: "33\u00B0C",
        condition: "Bright and warm coastal weather",
        humidity: "68%",
        wind: "16 km/h",
        feelsLike: "38\u00B0C",
        updatedTime: "Updated 3:10 PM",
        highlights: {
            uvIndex: "8.0",
            uvText: "High UV near the coast",
            rainChance: "18%",
            rainText: "Mostly dry through evening",
            sunset: "6:19 PM",
            sunsetText: "Clear waterfront view",
            airQuality: "51 AQI",
            airText: "Moderate but stable"
        },
        hourly: [
            { time: "2 PM", icon: "\u2600", temp: "33\u00B0" },
            { time: "3 PM", icon: "\u2600", temp: "33\u00B0" },
            { time: "4 PM", icon: "\u26C5", temp: "32\u00B0" },
            { time: "5 PM", icon: "\u26C5", temp: "31\u00B0" },
            { time: "6 PM", icon: "\u2601", temp: "30\u00B0" },
            { time: "7 PM", icon: "\uD83C\uDF19", temp: "29\u00B0" }
        ],
        daily: [
            { day: "Mon", icon: "\u2600", temp: "34\u00B0 / 28\u00B0" },
            { day: "Tue", icon: "\u26C5", temp: "33\u00B0 / 28\u00B0" },
            { day: "Wed", icon: "\uD83C\uDF26", temp: "31\u00B0 / 27\u00B0" },
            { day: "Thu", icon: "\u2600", temp: "34\u00B0 / 28\u00B0" },
            { day: "Fri", icon: "\u26C5", temp: "33\u00B0 / 28\u00B0" }
        ]
    }
};

const form = document.getElementById("weather-form");
const cityInput = document.getElementById("city-input");
const statusMessage = document.getElementById("status-message");
const hourlyForecast = document.getElementById("hourly-forecast");
const dailyForecast = document.getElementById("daily-forecast");

function renderHourly(items) {
    hourlyForecast.innerHTML = items
        .map(
            (item) => `
                <div class="hour-card">
                    <p>${item.time}</p>
                    <span>${item.icon}</span>
                    <strong>${item.temp}</strong>
                </div>
            `
        )
        .join("");
}

function renderDaily(items) {
    dailyForecast.innerHTML = items
        .map(
            (item) => `
                <div class="forecast-card">
                    <p>${item.day}</p>
                    <span>${item.icon}</span>
                    <strong>${item.temp}</strong>
                </div>
            `
        )
        .join("");
}

function renderWeather(data) {
    document.getElementById("location").textContent = data.location;
    document.getElementById("weather-icon").textContent = data.icon;
    document.getElementById("temperature").textContent = data.temperature;
    document.getElementById("condition").textContent = data.condition;
    document.getElementById("humidity").textContent = data.humidity;
    document.getElementById("wind").textContent = data.wind;
    document.getElementById("feels-like").textContent = data.feelsLike;
    document.getElementById("updated-time").textContent = data.updatedTime;
    document.getElementById("uv-index").textContent = data.highlights.uvIndex;
    document.getElementById("uv-text").textContent = data.highlights.uvText;
    document.getElementById("rain-chance").textContent = data.highlights.rainChance;
    document.getElementById("rain-text").textContent = data.highlights.rainText;
    document.getElementById("sunset").textContent = data.highlights.sunset;
    document.getElementById("sunset-text").textContent = data.highlights.sunsetText;
    document.getElementById("air-quality").textContent = data.highlights.airQuality;
    document.getElementById("air-text").textContent = data.highlights.airText;

    renderHourly(data.hourly);
    renderDaily(data.daily);
}

function normalizeCity(value) {
    return value.trim().toLowerCase();
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const query = normalizeCity(cityInput.value);
    if (!query) {
        statusMessage.textContent = "Enter a city name to update the weather dashboard.";
        return;
    }

    const data = weatherData[query];
    if (!data) {
        statusMessage.textContent = `No saved weather data found for "${cityInput.value}". Add it in script.js to support that city.`;
        return;
    }

    renderWeather(data);
    statusMessage.textContent = `Showing saved weather data for ${data.location}.`;
});

renderWeather(weatherData.hyderabad);
