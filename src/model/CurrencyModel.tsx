import axios from 'axios';

// Define the types for the API response
export interface ExchangeRates {
    [key: string]: number;
}

export interface CurrencyResponse {
    success: boolean;
    timestamp: number;
    base: string;
    date: string;
    rates: ExchangeRates;
}

// Fixer API URL and API Key
const API_URL = 'https://data.fixer.io/api';
const API_KEY = '4a3a92f4ae522e155000080ed7971bd2';  // Replace with your actual API key

// Function to fetch the exchange rates for **all** available currencies
export const fetchExchangeRates = async (): Promise<CurrencyResponse> => {
    const url = `${API_URL}/latest`;
    const params = {
        access_key: API_KEY,    // Fixer API Key
    };

    try {
        console.log(`Making API request to: ${url} with params: `, params);
        const response = await axios.get(url, { params });
        console.log('API Response:', response.data);
        return response.data as CurrencyResponse;
    } catch (error) {
        console.error('API Request Failed:', error);
        throw new Error('Failed to fetch exchange rates.');
    }
};
