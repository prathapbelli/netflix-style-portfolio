
import React from 'react';

interface SimpleCardProps {
  title: string;
  imageUrl: string;
  onClick?: () => void;
}

const SimpleCard: React.FC<SimpleCardProps> = ({ title, imageUrl, onClick }) => {
  return (
    <div 
      className="flex-shrink-0 w-64 md:w-72 group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative rounded-lg overflow-hidden aspect-video bg-zinc-800 transition-transform duration-300 ease-in-out group-hover:scale-105">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.7)] via-transparent to-[rgba(0,0,0,0.2)]"></div>
        <h3 className="absolute bottom-3 left-4 text-white font-bold text-lg">{title}</h3>
      </div>
    </div>
  );
};

export default SimpleCard;

