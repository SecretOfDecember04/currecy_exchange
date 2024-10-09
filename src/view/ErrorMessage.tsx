import React from 'react';

interface ErrorMessageProps {
    message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
    return (
        <div style={{ color: 'red', textAlign: 'center', padding: '20px' }}>
            <span>{message}</span>
        </div>
    );
};

export default ErrorMessage;
