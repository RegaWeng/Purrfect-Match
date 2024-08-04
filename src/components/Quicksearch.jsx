import React, { useState } from 'react';
import './style.css';

const QuickSearch = () => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://example.com/api/save', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ word: inputValue }),
            });

            if (response.ok) {
                alert('Inputs saved successfully');
            } else {
                alert('Failed to save the inputs');
            }
        } catch (error) {
            alert('Error: ' + error.message);
        }
    };

    return (
        <div className="quick-search">
            <h1>Which breeding are you after?</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    placeholder="Type the name here"
                />
                <button type="submit">Search</button>
            </form>
        </div>
    );
};

export default QuickSearch;
