import React, { useState } from 'react';
import axios from 'axios';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';


function SearchBar({ setWeather }) {
    const [city, setCity] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log('Sending request to:', `http://localhost:5000/api/weather/${city}`);
            const response = await axios.get(`http://localhost:5000/api/weather/${city}`);
            console.log('Received response:', response.data);
            setWeather(response.data);
            setCity('');
        } catch (error) {
            console.error('Error fetching weather data:', error);
            if (error.response) {
                console.error('Error response:', error.response.data);
            }
            alert('Error fetching weather data. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-8">
            <div className="flex items-center bg-white rounded-lg shadow-md">
                <input
                    type="text"
                    className="flex-grow px-4 py-2 rounded-l-lg focus:outline-none"
                    placeholder="Enter city name"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600 transition duration-200" type="submit">
                    <MagnifyingGlassIcon className="h-6 w-6" />
                </button>
            </div>
        </form>
    );
}

export default SearchBar;