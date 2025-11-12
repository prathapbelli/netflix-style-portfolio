
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
    return (
        <div className="relative h-[80vh] w-full">
            {(() => {
                const images = [
                    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExaDVsOXduMHQzbXc4Z2lxeDRkODByN3Jvem1rZTAxbTlxZDQ3aDU4cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ftT0TTGmIZ7omfdvMc/giphy.gif",
                    "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3am0wMDAxbTllMzdhYnFtZm5laTFteGlmNzhob3Zpam9namRkcDJhaiZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/QWq9hq1yR4qgHUfJGN/giphy.gif",
                    "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3ZzdpYnAwOWZwZXJ1MTBhZXM1cGpzMjdlc3lndmFveWt0ZXFmeXZtdCZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/3oxHQwdn31M3ddjV3a/giphy.gif",
                    "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3MHQ5OGQyYnJ5cWd2NTJpazN0cDIydXQ4cTI5Y2tmcWt6eGR3a3FhZSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l41m2M6Gwq2ogoyju/giphy.gif",
                    "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3aWJyM2o1c2hxczFteWczZTNpYzFwODQzMWZqYmg5cDRqaGl5Z3JqcCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/PAqjdPkJLDsmBRSYUp/giphy.gif",
                    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHc2dDQ5dDh5aXN2c2lkMjNmYWx4b2lybXVuZWp5ZWFtdjlqYmI2aSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/PMhvPH4yNLkTi4UOHc/giphy.gif"
                ];
                const [index, setIndex] = React.useState(() => Math.floor(Math.random() * images.length));
                
                React.useEffect(() => {
                    const interval = setInterval(() => {
                        setIndex(prev => (prev + 1) % images.length);
                    }, 10000);
                    return () => clearInterval(interval);
                }, [images.length]);
                
                return (
                    <img
                        src={images[index]}
                        alt="Hero background"
                        className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                );
            })()}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-netflix-dark via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-netflix-dark to-transparent"></div>
            
            <div className="relative z-10 flex flex-col justify-end h-full px-4 md:px-14 pb-20 md:pb-32">
                <div className="max-w-3xl">
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white">
                        {PERSONAL_INFO.name}
                    </h2>
                    <h3 className="text-2xl md:text-3xl font-semibold text-gray-200 mt-2">
                        {PERSONAL_INFO.title}
                    </h3>
                    <p className="mt-4 text-sm md:text-base text-gray-300 max-w-2xl leading-relaxed">
                        {PERSONAL_INFO.summary}
                    </p>
                    <div className="mt-6 flex items-center space-x-4">
                        <a href={PERSONAL_INFO.resumeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-white text-black px-6 py-2 rounded font-bold hover:bg-gray-200 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </svg>
                            Resume
                        </a>
                        <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-gray-600 bg-opacity-70 text-white px-6 py-2 rounded font-bold hover:bg-gray-500 transition-colors">
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
