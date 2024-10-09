import { useState, useEffect } from 'react';
import { fetchExchangeRates, CurrencyResponse } from '../model/CurrencyModel';

export const useCurrencyController = () => {
    const [baseCurrency] = useState<string>('EUR');  // Default base currency is EUR
    const [exchangeRates, setExchangeRates] = useState<CurrencyResponse | null>(null);
    const [loading, setLoading] = useState<boolean>(true);  // Start with loading set to true
    const [error, setError] = useState<string | null>(null);

    // Fetch exchange rates when the component mounts
    useEffect(() => {
        const getRates = async () => {
            setLoading(true);  // Set loading to true before the API call
            try {
                const data = await fetchExchangeRates();  // Fetch all available currencies
                setExchangeRates(data);
                setError(null);
            } catch (err) {
                setError('Failed to load exchange rates.');
                setExchangeRates(null);
            } finally {
                setLoading(false);  // Set loading to false after the API call is complete
            }
        };

        getRates();
    }, [baseCurrency]);

    return {
        baseCurrency,
        exchangeRates,
        loading,
        error,
    };
};
