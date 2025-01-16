import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const [showSubText, setShowSubText] = useState(false);
    const [showCredit, setShowCredit] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const subTextTimer = setTimeout(() => setShowSubText(true), 2500);
        const creditTimer = setTimeout(() => setShowCredit(true), 5000);
        return () => {
            clearTimeout(subTextTimer);
            clearTimeout(creditTimer);
        };
    }, []);

    const toggleDarkMode = () => setDarkMode(!darkMode);

    return (
        <div className={`appbody flex flex-col items-center justify-center min-h-[93vh] ${darkMode ? 'bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white' : 'bg-gradient-to-r from-blue-100 via-purple-200 to-pink-200 text-gray-900'} animate-gradient`}>
            <button onClick={toggleDarkMode} className="absolute top-4 right-4 px-4 py-2 bg-gray-300 dark:bg-gray-700 text-black dark:text-white rounded-full shadow-md hover:bg-gray-400 dark:hover:bg-gray-600 transition-all">
                {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>

            <div className="text-center p-4">
                <h1 className="text-6xl font-extrabold tracking-wide mb-10 drop-shadow-lg animate-dropAndExpand">
                    Welcome to My Digital Space
                </h1>
                {showSubText && (
                    <p className="text-lg font-light opacity-90 max-w-xl mx-auto animate-zoomIn">
                        Exploring technology, creativity, and innovation. Join me on this journey to build and inspire.
                    </p>
                )}
                {showCredit && (
                    <p className="text-md text-gray-600 dark:text-gray-300 mt-8 border-b-2 border-dotted border-gray-400 dark:border-gray-600 transition-all duration-300 animate-slideInFromLeft">
                        Developed by <Link to="/about" className="hover:text-blue-500">Raj Kumar Singha</Link>
                    </p>
                )}
            </div>
        </div>
    );
};

export default HomePage;

