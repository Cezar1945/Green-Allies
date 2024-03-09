import React from 'react';
import './WeatherApp.css';
import search_icon from '../Assets/search.png';
import clear_icon from '../Assets/clear.png';
import rain_icon from '../Assets/rain.png';
import snow_icon from '../Assets/snow.png';
import cloud_icon from '../Assets/cloud.png';
import drizzle_icon from '../Assets/drizzle.png';
import wind_icon from '../Assets/wind.png';
import humidity_icon from '../Assets/humidity.png';

const WeatherApp = () => {
    let api_key = "3100bfe5f4c1199f21ef0050a90a491b";
    
    const search = async () => {
        const element = document.getElementsByClassName("city");
        if (element[0].value === "") {
            return 0;
        }
    
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
    
        try {
            let response = await fetch(url);
            if (!response.ok) {
                throw new Error('Failed to fetch weather data');
            }
            let data = await response.json();
            console.log(data); // Add this line to inspect the data structure
    
            const humidity = document.getElementsByClassName("humidity-percent");
            const wind = document.getElementsByClassName("wind-rate");
            const temp = document.getElementsByClassName("weather-temp");
            const location = document.getElementsByClassName("weather-location");
    
            if (data.main && data.main.humidity) {
                humidity[0].innerHTML = data.main.humidity + "%";
            } else {
                humidity[0].innerHTML = "N/A";
            }
    
            if (data.wind && data.wind.speed) {
                wind[0].innerHTML = data.wind.speed + "km/h";
            } else {
                wind[0].innerHTML = "N/A";
            }
    
            if (data.main && data.main.temp) {
                temp[0].innerHTML = Math.floor(data.main.temp) + "°C";
            } else {
                temp[0].innerHTML = "N/A";
            }
    
            if (data.name) {
                location[0].innerHTML = data.name;
            } else {
                location[0].innerHTML = "N/A";
            }
        } catch (error) {
            console.error('Error fetching weather data:', error);
     
        }
    }
    return (
        <div className='container'>
            <div className="top-bar">
                <input type="text" className="city"  placeholder='Search'/>
                <div className="search-icon">
                <img src={search_icon} alt="" onClick={()=>{search()}}/>
            </div>
        </div>
        <div className="weather-image">
            <img src={cloud_icon} alt="" />
        </div>
        <div className="weather-temp"> 24C </div>
        <div className="weather-location">New York </div>
        <div className="data-container">
            <div className="element"> 
                <img src={humidity_icon} alt="" className="icon" />
                <div className="data">
                    <div className="humidity-percent">64%</div>
                    <div className="text">Humidity</div>
                </div>
            </div>
            <div className="element"> 
                <img src={wind_icon} alt="" className="icon" />
                <div className="data">
                    <div className="wind-rate">18km/h</div>
                    <div className="text">Wind Speed</div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default WeatherApp;