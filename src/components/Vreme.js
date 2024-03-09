import React, { useState } from 'react';
import './Vreme.css';
import searchIcon from '../Assets/search.png';
import cloudIcon from '../Assets/cloud.png';
import windIcon from '../Assets/wind.png';
import humidityIcon from '../Assets/humidity.png';



const Vreme = () => {
    const [weatherData, setWeatherData] = useState({
        humidity: null,
        windSpeed: null,
        temperature: null,
        location: null,
    });

    const api_key = "3100bfe5f4c1199f21ef0050a90a491b";

    const search = async () => {
        const cityInput = document.querySelector(".city");
        if (cityInput.value === "") {
            return;
        }

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&units=Metric&appid=${api_key}`;

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Failed to fetch weather data');
            }
            const data = await response.json();
            console.log(data);

            setWeatherData({
                humidity: data.main?.humidity || "N/A",
                windSpeed: data.wind?.speed || "N/A",
                temperature: data.main?.temp ? `${Math.floor(data.main.temp)}°C` : "N/A",
                location: data.name || "N/A",
            });
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    return (
        <div className='container'>
            <div className="top-bar">
                <input type="text" className="city" placeholder='Search' />
                <div className="search-icon">
                    <img src={searchIcon} alt="" onClick={search} />
                </div>
            </div>
            <div className="weather-image">
                <img src={cloudIcon} alt="" />
            </div>
            <div className="weather-temp">{weatherData.temperature}</div>
            <div className="weather-location">{weatherData.location}</div>
            <div className="data-container">
                <div className="element">
                    <img src={humidityIcon} alt="" className="icon" />
                    <div className="data">
                        <div className="humidity-percent">{weatherData.humidity}</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>
                <div className="element">
                    <img src={windIcon} alt="" className="icon" />
                    <div className="data">
                        <div className="wind-rate">{weatherData.windSpeed}</div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Vreme;
