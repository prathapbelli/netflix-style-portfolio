
import React, { useRef } from 'react';

interface ContentRowProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const ContentRow: React.FC<ContentRowProps> = ({ title, children, className = '' }) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const { current } = scrollContainerRef;
            const scrollAmount = current.clientWidth * 0.8;
            current.scrollBy({ 
                left: direction === 'left' ? -scrollAmount : scrollAmount, 
                behavior: 'smooth' 
            });
        }
    };

    return (
        <div className={`group relative ${className}`}>
            <h2 className="text-xl md:text-2xl font-bold mb-4">{title}</h2>
            <div className="relative">
                 <button 
                    onClick={() => scroll('left')}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black bg-opacity-50 hover:bg-opacity-75 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hidden md:block"
                    aria-label="Scroll left"
                >
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <div 
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide"
                >
                    {children}
                </div>
                 <button 
                    onClick={() => scroll('right')}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black bg-opacity-50 hover:bg-opacity-75 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hidden md:block"
                    aria-label="Scroll right"
                >
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default ContentRow;
