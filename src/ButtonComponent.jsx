import React from 'react';

const ButtonComponent = () => {
    const handleClick = (message) => {
        alert(message);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', margin: '20px' }}>
            <button onClick={() => handleClick('Primary Button Clicked!')} style={{ padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px' }}>
                Primary Button
            </button>
            <button onClick={() => handleClick('Secondary Button Clicked!')} style={{ padding: '10px', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '5px' }}>
                Secondary Button
            </button>
            <button onClick={() => handleClick('Success Button Clicked!')} style={{ padding: '10px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '5px' }}>
                Success Button
            </button>
            <button onClick={() => handleClick('Danger Button Clicked!')} style={{ padding: '10px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '5px' }}>
                Danger Button
            </button>
            <button onClick={() => handleClick('Warning Button Clicked!')} style={{ padding: '10px', backgroundColor: '#ffc107', color: 'black', border: 'none', borderRadius: '5px' }}>
                Warning Button
            </button>
        </div>
    );
};

export default ButtonComponent;