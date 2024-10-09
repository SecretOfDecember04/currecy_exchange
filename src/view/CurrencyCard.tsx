import React from 'react';
import './CurrencyCard.css';

interface CurrencyCardProps {
    currency: string;
    rate: number;
}

const CurrencyCard: React.FC<CurrencyCardProps> = ({ currency, rate }) => {
    return (
        <div className="currency-card">
            <h3>{currency}</h3>
            <p>Exchange Rate: {rate.toFixed(4)}</p>  {/* Display the adjusted exchange amount */}
        </div>
    );
};

export default CurrencyCard;
