import React from 'react';
import { CloudIcon } from '@heroicons/react/24/solid';

function Header() {
    return (
        <header className="text-center my-8">
            <h1 className="text-4xl font-bold text-blue-800 flex items-center justify-center">
                <CloudIcon className="h-12 w-12 mr-2 text-blue-600" />
                Weather App
            </h1>
        </header>
    );
}

export default Header;