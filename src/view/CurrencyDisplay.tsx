import React from 'react';

interface CurrencyDisplayProps {
    baseCurrency: string;
    rates: { [key: string]: number } | undefined;  // Allow `rates` to be `undefined`
}

const CurrencyDisplay: React.FC<CurrencyDisplayProps> = ({ baseCurrency, rates }) => {
    if (!rates) {
        // If rates are not available, return a fallback UI
        return <div>No exchange rate data available.</div>;
    }

    return (
        <div>
            <h2>Exchange Rates for {baseCurrency}</h2>
            <ul>
                {Object.keys(rates).map((currency) => (
                    <li key={currency}>
                        {currency}: {rates[currency].toFixed(4)}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CurrencyDisplay;
