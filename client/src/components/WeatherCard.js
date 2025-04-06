import React from 'react';
import { motion } from 'framer-motion';
import { MapPinIcon, ArrowUpIcon, ArrowDownIcon, ExclamationCircleIcon } from '@heroicons/react/24/solid';

function WeatherCard({ weather }) {
    return (
        <motion.div
            className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold text-gray-800 flex items-center">
                    <MapPinIcon className="h-6 w-6 mr-2 text-blue-500" />
                    {weather.city}, {weather.country}
                </h2>
                <img
                    src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                    alt={weather.description}
                    className="w-16 h-16"
                />
            </div>
            <div className="text-center">
                <p className="text-5xl font-bold text-blue-600 mb-2">{Math.round(weather.temperature)}°C</p>
                <p className="text-xl text-gray-600 capitalize">{weather.description}</p>
            </div>
            <div className="mt-6 flex justify-around">
                <div className="text-center">
                    <ArrowUpIcon className="h-6 w-6 text-red-500 mx-auto" />
                    <p className="text-sm text-gray-600">High</p>
                    <p className="text-lg font-semibold">{Math.round(weather.temp_max)}°C</p>
                </div>
                <div className="text-center">
                    <ArrowDownIcon className="h-6 w-6 text-blue-500 mx-auto" />
                    <p className="text-sm text-gray-600">Low</p>
                    <p className="text-lg font-semibold">{Math.round(weather.temp_min)}°C</p>
                </div>
            </div>

            {/* Weather Alerts */}
            {weather.alerts && weather.alerts.length > 0 && (
                <div className="mt-6">
                    <h3 className="text-lg font-semibold mb-2 flex items-center">
                        <ExclamationCircleIcon className="h-6 w-6 mr-2 text-red-500" />
                        Weather Alerts
                    </h3>
                    <div className="space-y-2">
                        {weather.alerts.map((alert, index) => (
                            <div key={index} className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                                <p className="font-bold">{alert.event}</p>
                                <p>{alert.description}</p>
                                <p className="text-sm">
                                    From: {new Date(alert.start).toLocaleString()} to {new Date(alert.end).toLocaleString()}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </motion.div>
    );
}

export default WeatherCard;