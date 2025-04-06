const express = require('express');
const router = express.Router();
const axios = require('axios');
const Weather = require('../models/Weather');

router.get('/:city', async (req, res) => {
    try {
        const city = req.params.city;
        const apiKey = process.env.OPENWEATHER_API_KEY;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        console.log('Requesting weather data from:', url);

        const response = await axios.get(url);
        const weatherData = response.data;

        console.log('Received weather data:', weatherData);

        const newWeather = new Weather({
            city: weatherData.name,
            country: weatherData.sys.country,
            temperature: weatherData.main.temp,
            description: weatherData.weather[0].description,
            icon: weatherData.weather[0].icon,
            temp_min: weatherData.main.temp_min,
            temp_max: weatherData.main.temp_max,
        });

        await newWeather.save();

        res.json(newWeather);
    } catch (error) {
        console.error('Error in weather route:', error.message);
        if (error.response) {
            console.error('OpenWeatherMap API response:', error.response.data);
            res.status(error.response.status).json(error.response.data);
        } else {
            res.status(500).json('Error: ' + error.message);
        }
    }
});

module.exports = router;