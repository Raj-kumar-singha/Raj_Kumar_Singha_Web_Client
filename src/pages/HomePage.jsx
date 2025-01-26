import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const [showSubText, setShowSubText] = useState(false);
    const [showCredit, setShowCredit] = useState(false);

    useEffect(() => {
        const subTextTimer = setTimeout(() => setShowSubText(true), 2500);
        const creditTimer = setTimeout(() => setShowCredit(true), 5000);
        return () => {
            clearTimeout(subTextTimer);
            clearTimeout(creditTimer);
        };
    }, []);

    return (
        <div className="appbody flex flex-col items-center justify-center min-h-[93vh] bg-gradient-to-r from-blue-100 via-purple-200 to-pink-200 text-gray-900 relative">
            <video
                className="absolute inset-0 w-full h-full object-cover"
                src="/gif.mp4"
                autoPlay
                loop
                muted
            ></video>
            <div className="absolute inset-0 bg-black opacity-60"></div>

            <div className="text-center p-4 relative z-10">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-wide mb-10 text-white drop-shadow-lg animate-gradient-text animate-dropAndExpand">
                    Hi<span className="text-purple-500">,</span> I am <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600">Raj Kumar Singha</span><span className="text-blue-600">.</span>
                </h1>
                {showSubText && (
                    <p className="text-base md:text-lg lg:text-xl font-medium text-gray-200 opacity-90 max-w-xl mx-auto animate-zoomIn">
                        I'm a passionate MERN stack developer, constantly learning and building innovative solutions. Let's collaborate and create something impactful together.
                    </p>
                )}
                <div className="mt-6">
                    {showSubText && (
                        <Link
                            to="/about"
                            className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-medium px-6 py-2 rounded-lg shadow-md hover:from-green-500 hover:to-blue-600 transition-all duration-300"
                        >
                            Know More
                        </Link>
                    )}
                </div>

                {/* {showSubText && (
                    <p className="text-base md:text-lg lg:text-xl font-light text-gray-200 opacity-90 max-w-xl mx-auto mt-4 animate-fadeIn">
                        Let's collaborate and create something impactful together.
                    </p>
                )}
                <div className="mt-6">
                    {showSubText && (
                        <a
                            href="/path-to-resume.pdf"
                            download
                            className="bg-blue-600 text-white text-lg font-semibold py-2 px-6 rounded-md transition-all duration-300 hover:bg-blue-700"
                        >
                            Download Resume
                        </a>
                    )}
                </div> */}
                {showCredit && (
                    <p className="text-sm md:text-md text-gray-400 dark:text-gray-300 mt-8 underline decoration-gray-500 decoration-1 decoration-dotted underline-offset-4 transition-all duration-300 animate-slideInFromLeft">
                        Developed by <Link to="/about" className="hover:text-blue-400">Raj Kumar Singha</Link>
                    </p>
                )}
            </div>
        </div>
    );
};

export default HomePage;