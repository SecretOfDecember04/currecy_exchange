import axios from 'axios';

const WEATHER_API_URL = 'http://api.weatherstack.com/current';
const WEATHER_API_KEY = 'd8b1309ec2a5ae404be17fde56ed0be7'; // Replace with your API Key

// Define the structure of the weather response
interface WeatherResponse {
    location: {
        name: string;            // City name
        country: string;         // Country name
        region: string;          // Region
        localtime: string;       // Local time
    };
    current: {
        temperature: number;     // Current temperature
        weather_descriptions: string[]; // Array of weather descriptions (e.g., ["Sunny"])
        weather_icons: string[];        // Array of URLs to weather icons
        humidity: number;        // Current humidity
        wind_speed: number;      // Wind speed
        pressure: number;        // Atmospheric pressure
        cloudcover: number;      // Cloud cover percentage
        visibility: number;      // Visibility distance
        feelslike: number;       // Feels like temperature
    };
}

// Fetch weather data for a specific city and country
export const fetchWeather = async (city: string, country: string): Promise<WeatherResponse> => {
    try {
        const response = await axios.get(WEATHER_API_URL, {
            params: {
                access_key: WEATHER_API_KEY,
                query: `${city},${country}`, // Query string (e.g., "New York, United States")
            },
        });
        return response.data as WeatherResponse;
    } catch (error) {
        throw new Error('Failed to fetch weather data. Please check your city and country inputs.');
    }
};
