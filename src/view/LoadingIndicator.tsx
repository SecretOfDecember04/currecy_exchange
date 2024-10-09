import React from 'react';

const LoadingIndicator: React.FC = () => {
    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <span style={{ fontSize: '18px', color: '#4A90E2' }}>Loading exchange rates...</span>
        </div>
    );
};

export default LoadingIndicator;
