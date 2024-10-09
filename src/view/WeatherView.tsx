import React, { useState } from 'react';
import { fetchWeather } from '../model/WeatherModel';
import './WeatherView.css';

const WeatherView: React.FC = () => {
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [weather, setWeather] = useState<any>(null);
    const [error, setError] = useState('');

    const handleFetchWeather = async () => {
        if (!city || !country) {
            setError('Please enter both city and country.');
            return;
        }
        try {
            const data = await fetchWeather(city, country);
            setWeather(data);
            setError('');
        } catch (e) {
            setWeather(null);
            setError('Failed to fetch weather.');
        }
    };

    return (
        <div className="weather-view">
            <h1 className="title">Input Location Info</h1>

            <div className="input-section">
                <label>City</label>
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter city name"
                />
            </div>

            <div className="input-section">
                <label>Country</label>
                <input
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder="Enter country name"
                />
            </div>

            {error && <p className="error">{error}</p>}

            {/* Display weather information if available */}
            {weather && (
                <div className="weather-card">
                    <h2>Weather Info for {weather.location.name}, {weather.location.country}</h2>
                    <img src={weather.current.weather_icons[0]} alt="Weather icon" />
                    <p><strong>Temperature:</strong> {weather.current.temperature}°C</p>
                    <p><strong>Humidity:</strong> {weather.current.humidity}%</p>
                    <p><strong>Wind Speed:</strong> {weather.current.wind_speed} km/h</p>
                    <p><strong>Pressure:</strong> {weather.current.pressure} hPa</p>
                    <p><strong>Visibility:</strong> {weather.current.visibility} km</p>
                    <p><strong>Feels Like:</strong> {weather.current.feelslike}°C</p>
                    <p><strong>Condition:</strong> {weather.current.weather_descriptions[0]}</p>
                </div>
            )}

            {/* Place the "View Weather" button below the weather card */}
            <button onClick={handleFetchWeather} className="fetch-button">
                View Weather
            </button>
        </div>
    );
};

export default WeatherView;
