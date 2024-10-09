import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ExchangeRateView from './view/ExchangeRateView';
import WeatherView from './view/WeatherView';

const App: React.FC = () => {
    return (
        <Router>
            <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#2874F0' }}>
                <Link to="/" style={{ margin: '0 20px', textDecoration: 'none', color: '#FFFFFF', fontWeight: 'bold' }}>
                    Currency Exchange
                </Link>
                <Link to="/weather" style={{ margin: '0 20px', textDecoration: 'none', color: '#FFFFFF', fontWeight: 'bold' }}>
                    View Weather Information
                </Link>
            </div>
            <Routes>
                <Route path="/" element={<ExchangeRateView />} />
                <Route path="/weather" element={<WeatherView />} />
            </Routes>
        </Router>
    );
};

export default App;
