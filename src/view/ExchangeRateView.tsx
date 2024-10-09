import React, { useState } from 'react';
import { useCurrencyController } from '../controller/useCurrencyController';
import LoadingIndicator from './LoadingIndicator';
import ErrorMessage from './ErrorMessage';
import './ExchangeRateView.css';

const ExchangeRateView: React.FC = () => {
    const { baseCurrency, exchangeRates, loading, error } = useCurrencyController();

    const [amount, setAmount] = useState<string | number>(1);
    const [searchQuery, setSearchQuery] = useState<string>('');

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(e.target.value);
    };

    const handleAmountBlur = () => {
        if (amount === '' || amount === 0) {
            setAmount(1);
        }
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const filteredRates = exchangeRates?.rates
        ? Object.keys(exchangeRates.rates)
            .filter((currency) => currency.toLowerCase().includes(searchQuery.toLowerCase()))
            .reduce((obj, key) => {
                obj[key] = exchangeRates.rates[key];
                return obj;
            }, {} as { [key: string]: number })
        : {};

    return (
        <div className="exchange-rate-view">
            <h2>Currency Converter</h2>
            <p>Base Currency: <strong>{baseCurrency} (Fixed for Free Plan)</strong></p>

            {/* Input Field for the Amount */}
            <div className="input-section">
                <label htmlFor="amount">Amount in {baseCurrency}:</label>
                <input
                    type="text"
                    id="amount"
                    value={amount}
                    onChange={handleAmountChange}
                    onBlur={handleAmountBlur}
                    className="amount-input"
                />
            </div>

            {/* Search Field for Filtering Currencies */}
            <div className="search-section">
                <label htmlFor="search">Search Currency:</label>
                <input
                    type="text"
                    id="search"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="Type currency code (e.g., USD)"
                    className="search-input"
                />
            </div>

            {/* Loading Indicator */}
            {loading && <LoadingIndicator />}  {/* Display loading indicator when loading */}

            {/* Error Message */}
            {error && <ErrorMessage message={error} />}

            {/* Display Exchange Rates */}
            {exchangeRates && Object.keys(filteredRates).length > 0 ? (
                <div className="rates-container">
                    {Object.keys(filteredRates).map((currency) => (
                        <div key={currency} className="rate-card">
                            <h3>{currency}</h3>
                            <p>{(parseFloat(amount as string) * filteredRates[currency]).toFixed(4)}</p>
                        </div>
                    ))}
                </div>
            ) : (
                !loading && <p>No exchange rate data available for the selected filters.</p>  // Avoid showing message during loading
            )}
        </div>
    );
};

export default ExchangeRateView;
