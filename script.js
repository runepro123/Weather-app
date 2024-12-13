const apiKey = 'bd5e378503939ddaee76f12ad7a97608'; // Your OpenWeatherMap API key
const searchButton = document.getElementById("searchButton");
const languageSelect = document.getElementById("languageSelect");
const citySelect = document.getElementById("citySelect");
const manualCityInput = document.getElementById("manualCityInput");
const weatherResult = document.getElementById("weatherResult");
const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const condition = document.getElementById("condition");
const weatherIcon = document.getElementById("weatherIcon");
const forecast = document.getElementById("forecast");
const hourlyForecast = document.getElementById("hourlyForecast");
const appTitle = document.getElementById("appTitle");
const translationPercentageDisplay = document.getElementById("translationPercentage");

const translations = {
    en: {
        appTitle: "Weather App",
        getWeather: "Get Weather",
        dailyForecast: "Daily Forecast",
        hourlyForecast: "Hourly Forecast",
        high: "High",
        low: "Low",
        errorCityNotFound: "City not found",
        pleaseSelectCity: "Please select or enter a city.",
        weatherIn: "Weather in",
        weatherConditions: {
            Clear: "Clear",
            Clouds: "Cloudy",
            Rain: "Rain",
            Snow: "Snow",
            Thunderstorm: "Thunderstorm",
            Mist: "Mist",
            Fog: "Fog",
            Drizzle: "Drizzle",
            Smoke: "Smoke",
            Haze: "Haze",
            Dust: "Dust",
            Sand: "Sand",
            Ash: "Ash",
            Squall: "Squall",
            Tornado: "Tornado",
        },
        cities: {
            London: "London",
            "New York": "New York",
            Tokyo: "Tokyo",
            Paris: "Paris",
            Sydney: "Sydney",
            Mumbai: "Mumbai",
            Brussels: "Brussels",
            Antwerp: "Antwerp",
            Ghent: "Ghent",
            Bruges: "Bruges",
            Namur: "Namur",
            Liège: "Liège",
        },
        days: {
            Monday: "Monday",
            Tuesday: "Tuesday",
            Wednesday: "Wednesday",
            Thursday: "Thursday",
            Friday: "Friday",
            Saturday: "Saturday",
            Sunday: "Sunday"
        }
    },
    nl: {
        appTitle: "Weer App",
        getWeather: "Haal Weer Op",
        dailyForecast: "Dagelijkse Voorspelling",
        hourlyForecast: "Uurvoorspelling",
        high: "Hoog",
        low: "Laag",
        errorCityNotFound: "Stad niet gevonden",
        pleaseSelectCity: "Selecteer of voer een stad in.",
        weatherIn: "Weer in",
        weatherConditions: {
            Clear: "Helder",
            Clouds: "Bewolkt",
            Rain: "Regen",
            Snow: "Sneeuw",
            Thunderstorm: "Onweer",
            Mist: "Mist",
            Fog: "Fog",
            Drizzle: "Motregen",
            Smoke: "Rook",
            Haze: "Haze",
            Dust: "Stof",
            Sand: "Zand",
            Ash: "As",
            Squall: "Squall",
            Tornado: "Tornado",
        },
        cities: {
            London: "Londen",
            "New York": "New York",
            Tokyo: "Tokio",
            Paris: "Parijs",
            Sydney: "Sydney",
            Mumbai: "Mumbai",
            Brussels: "Brussel",
            Antwerp: "Antwerpen",
            Ghent: "Gent",
            Bruges: "Brugge",
            Namur: "Namen",
            Liège: "Luik",
        },
        days: {
            Monday: "Maandag",
            Tuesday: "Dinsdag",
            Wednesday: "Woensdag",
            Thursday: "Donderdag",
            Friday: "Vrijdag",
            Saturday: "Zaterdag",
            Sunday: "Zondag"
        }
    },
    de: {
        appTitle: "Wetter App",
        getWeather: "Wetter abrufen",
        dailyForecast: "Tägliche Vorhersage",
        hourlyForecast: "Stündliche Vorhersage",
        high: "Hoch",
        low: "Tief",
        errorCityNotFound: "Stadt nicht gefunden",
        pleaseSelectCity: "Bitte wählen oder geben Sie eine Stadt ein.",
        weatherIn: "Wetter in",
        weatherConditions: {
            Clear: "Klar",
            Clouds: "Bewölkt",
            Rain: "Regen",
            Snow: "Schnee",
            Thunderstorm: "Gewitter",
            Mist: "Nebel",
            Fog: "Nebel",
            Drizzle: "Nieselregen",
            Smoke: "Rauch",
            Haze: "Dunst",
            Dust: "Staub",
            Sand: "Sand",
            Ash: "Asche",
            Squall: "Böe",
            Tornado: "Tornado",
        },
        cities: {
            London: "London",
            "New York": "New York",
            Tokyo: "Tokio",
            Paris: "Paris",
            Sydney: "Sydney",
            Mumbai: "Mumbai",
            Brussels: "Brüssel",
            Antwerp: "Antwerpen",
            Ghent: "Gent",
            Bruges: "Brügge",
            Namur: "Namur",
            Liège: "Lüttich",
        },
        days: {
            Monday: "Montag",
            Tuesday: "Dienstag",
            Wednesday: "Mittwoch",
            Thursday: "Donnerstag",
            Friday: "Freitag",
            Saturday: "Samstag",
            Sunday: "Sonntag"
        }
    },
    fr: {
        appTitle: "Application Météo",
        getWeather: "Obtenir la météo",
        dailyForecast: "Prévisions quotidiennes",
        hourlyForecast: "Prévisions horaires",
        high: "Haut",
        low: "Bas",
        errorCityNotFound: "Ville non trouvée",
        pleaseSelectCity: "Veuillez sélectionner ou entrer une ville.",
         weatherIn: "Météo à",
        weatherConditions: {
            Clear: "Dégagé",
            Clouds: "Nuageux",
            Rain: "Pluie",
            Snow: "Neige",
            Thunderstorm: "Orage",
            Mist: "Brouillard",
            Fog: "Brouillard",
            Drizzle: "Bruine",
            Smoke: "Fumée",
            Haze: "Brume",
            Dust: "Poussière",
            Sand: "Sable",
            Ash: "Cendre",
            Squall: "Grain",
            Tornado: "Tornade",
        },
        cities: {
            London: "Londres",
            "New York": "New York",
            Tokyo: "Tokyo",
            Paris: "Paris",
            Sydney: "Sydney",
            Mumbai: "Mumbai",
            Brussels: "Bruxelles",
            Antwerp: "Anvers",
            Ghent: "Gand",
            Bruges: "Bruges",
            Namur: "Namur",
            Liège: "Liège",
        },
         days: {
            Monday: "Lundi",
            Tuesday: "Mardi",
            Wednesday: "Mercredi",
            Thursday: "Jeudi",
            Friday: "Vendredi",
            Saturday: "Samedi",
            Sunday: "Dimanche"
        }
    },
    es: {
        appTitle: "Aplicación del tiempo",
        getWeather: "Obtener el tiempo",
        dailyForecast: "Pronóstico diario",
        hourlyForecast: "Pronóstico por hora",
        high: "Alto",
        low: "Bajo",
        errorCityNotFound: "Ciudad no encontrada",
        weatherIn: "Tiempo en",
        weatherConditions: {
            Clear: "Clear",
            Clouds: "Cloudy",
            Rain: "Rain",
            Snow: "Snow",
            Thunderstorm: "Thunderstorm",
            Mist: "Mist",
            Fog: "Fog",
            Drizzle: "Drizzle",
            Smoke: "Smoke",
            Haze: "Haze",
            Dust: "Dust",
            Sand: "Sand",
            Ash: "Ash",
            Squall: "Squall",
            Tornado: "Tornado",
        },
        cities: {
            London: "London",
            "New York": "New York",
            Tokyo: "Tokyo",
            Paris: "Paris",
            Sydney: "Sydney",
            Mumbai: "Mumbai",
            Brussels: "Brussels",
            Antwerp: "Antwerp",
            Ghent: "Ghent",
            Bruges: "Bruges",
            Namur: "Namur",
            Liège: "Liège",
        },
        days: {
            Monday: "Monday",
            Tuesday: "Tuesday",
            Wednesday: "Wednesday",
            Thursday: "Thursday",
            Friday: "Friday",
            Saturday: "Saturday",
            Sunday: "Sunday"
        }
    }
};

// Load the saved language from local storage
const savedLanguage = localStorage.getItem('language') || 'en';
languageSelect.value = savedLanguage;
updateLanguage(savedLanguage);
updateTranslationPercentage(savedLanguage);

languageSelect.addEventListener("change", (event) => {
    // Save the selected language in local storage
    localStorage.setItem('language', event.target.value);
    // Automatically reload the page to apply the new language setting
    location.reload();
});

searchButton.addEventListener("click", () => {
    const cityNameInput = citySelect.value || manualCityInput.value.trim();
    if (cityNameInput) {
        fetchWeather(cityNameInput);
    } else {
        alert(translations[languageSelect.value].pleaseSelectCity);
    }
});

// Automatically detect user location
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        fetchWeatherByCoords(lat, lon);
    }, error => {
        console.error("Geolocation error: " + error.message);
    });
}

function updateLanguage(language) {
    appTitle.textContent = translations[language].appTitle;
    searchButton.textContent = translations[language].getWeather;
    forecast.querySelector('h3').textContent = translations[language].dailyForecast;
    hourlyForecast.querySelector('h3').textContent = translations[language].hourlyForecast;
    manualCityInput.placeholder = translations[language].pleaseSelectCity;

    // Update city select options
    citySelect.innerHTML = '<option value="">Select a city</option>';
    for (const city in translations[language].cities) {
        const option = document.createElement('option');
        option.value = city;
        option.textContent = translations[language].cities[city];
        citySelect.appendChild(option);
    }
}

function fetchWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(translations[languageSelect.value].errorCityNotFound);
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
            fetchForecast(data.coord.lat, data.coord.lon);
        })
        .catch(error => {
            weatherResult.textContent = error.message;
        });
}

function fetchWeatherByCoords(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Unable to fetch weather data based on your location.");
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
            fetchForecast(data.coord.lat, data.coord.lon);
        })
        .catch(error => {
            weatherResult.textContent = error.message;
        });
}

function fetchForecast(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Unable to fetch forecast data.");
            }
            return response.json();
        })
        .then(data => {
            displayDailyForecast(data.list);
            displayHourlyForecast(data.list);
        })
        .catch(error => {
            weatherResult.textContent = error.message;
        });
}

function displayWeather(data) {
    const { main, weather, name } = data;
    cityName.textContent = `${translations[languageSelect.value].weatherIn} ${translations[languageSelect.value].cities[name] || name}`;
    temperature.textContent = `Temperature: ${Math.round(main.temp)} °C`;
    condition.textContent = `Condition: ${translations[languageSelect.value].weatherConditions[weather[0].main] || weather[0].main}`;
    weatherIcon.src = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
}

function displayDailyForecast(list) {
    forecast.innerHTML = '';
    const uniqueDays = {};

    list.forEach(item => {
        const date = new Date(item.dt * 1000);
        const day = date.toLocaleDateString('en-US', { weekday: 'long' });
        const dayName = translations[languageSelect.value].days[day] || day;

        // Initialize if not already present
        if (!uniqueDays[dayName]) {
            uniqueDays[dayName] = {
                maxTemp: Math.round(item.main.temp),
                minTemp: Math.round(item.main.temp),
                icon: item.weather[0].icon,
                description: item.weather[0].main
            };
        } else {
            // Update max and min temperatures
            uniqueDays[dayName].maxTemp = Math.max(uniqueDays[dayName].maxTemp, Math.round(item.main.temp));
            uniqueDays[dayName].minTemp = Math.min(uniqueDays[dayName].minTemp, Math.round(item.main.temp));
        }
    });

    Object.keys(uniqueDays).forEach(dayName => {
        const forecastDay = document.createElement('div');
        forecastDay.classList.add('forecast-day');

        forecastDay.innerHTML = `
            <h3>${dayName}</h3>
            <p>${translations[languageSelect.value].high}: ${uniqueDays[dayName].maxTemp} °C</p>
            <p>${translations[languageSelect.value].low}: ${uniqueDays[dayName].minTemp} °C</p>
            <img src="https://openweathermap.org/img/wn/${uniqueDays[dayName].icon}@2x.png" alt="Weather Icon">
            <p>${translations[languageSelect.value].weatherConditions[uniqueDays[dayName].description] || uniqueDays[dayName].description}</p>
        `;
        forecast.appendChild(forecastDay);
    });
}

function displayHourlyForecast(list) {
    hourlyForecast.innerHTML = '';
    const today = new Date().toLocaleDateString(); // Get today's date

    list.forEach(item => {
        const date = new Date(item.dt * 1000);
        const hour = date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
        const itemDate = date.toLocaleDateString();

        // Only show hourly forecast for today
        if (itemDate === today) {
            const hourlyDay = document.createElement('div');
            hourlyDay.classList.add('hourly-day');

            hourlyDay.innerHTML = `
                <h4>${hour}</h4>
                <p>${Math.round(item.main.temp)} °C</p> <!-- Round temperature -->
                <img src="https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png" alt="Weather Icon">
                <p>${translations[languageSelect.value].weatherConditions[item.weather[0].main] || item.weather[0].main}</p>
            `;
            hourlyForecast.appendChild(hourlyDay);
        }
    });
}

function calculateTranslationPercentage(language) {
    if (language === 'en') {
        return 100;
    }
    let totalKeys = 0;
    let translatedKeys = 0;

    function traverse(objEn, objLang) {
        for (const key in objEn) {
            totalKeys++;
            if (objLang && objLang.hasOwnProperty(key)) {
                if (typeof objEn[key] === 'object' && typeof objLang[key] === 'object') {
                    traverse(objEn[key], objLang[key]);
                } else if (objEn[key] !== objLang[key]) {
                    translatedKeys++;
                }
            }
        }
    }

    traverse(translations.en, translations[language]);
    return Math.round((translatedKeys / totalKeys) * 100);
}


function updateTranslationPercentage(language) {
    const percentage = calculateTranslationPercentage(language);
    translationPercentageDisplay.textContent = `Translation: ${percentage}%`;
}
