import React, { useState } from 'react';
import { useCurrencyController } from '../controller/useCurrencyController';
import CurrencyCard from './CurrencyCard';
import './ExchangeRateView.css';
import { Link } from 'react-router-dom';

const ExchangeRateView: React.FC = () => {
    const { baseCurrency, exchangeRates } = useCurrencyController();
    const [amount, setAmount] = useState<string>('1');  // Use string type to handle empty values
    const [searchQuery, setSearchQuery] = useState<string>('');

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(e.target.value);  // Allow the input to handle empty strings
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    // Parse the amount to number, default to 1 if it's empty or invalid
    const baseAmount = parseFloat(amount) || 1;

    const filteredRates = exchangeRates?.rates
        ? Object.keys(exchangeRates.rates)
            .filter((currency) => currency.toLowerCase().includes(searchQuery.toLowerCase()))
            .reduce((obj, key) => {
                obj[key] = exchangeRates.rates[key] * baseAmount;  // Adjusted rate based on baseAmount
                return obj;
            }, {} as { [key: string]: number })
        : {};

    return (
        <div className="exchange-rate-view">
            <h1 className="title">CURRENCY EXCHANGE</h1>
            <p className="base-currency-info">Base Currency: {baseCurrency}</p>

            <div className="input-section">
                <label>Base in EUR</label>
                <input
                    type="number"
                    value={amount}
                    onChange={handleAmountChange}
                    className="amount-input"
                    placeholder="Enter amount in EUR"
                />
            </div>

            <div className="input-section">
                <label>Search Currency</label>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="search-input"
                    placeholder="Type currency code (e.g., USD)"
                />
            </div>

            <div className="rates-container">
                {Object.keys(filteredRates).map((currency) => (
                    <CurrencyCard key={currency} currency={currency} rate={filteredRates[currency]} />
                ))}
            </div>

            <Link to="/weather">
                <button className="weather-info-button">Weather Information</button>
            </Link>
        </div>
    );
};

export default ExchangeRateView;
