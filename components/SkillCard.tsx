import React from 'react';
import { type Skill } from '../types';

interface SkillCardProps {
  skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <div 
      className="flex-shrink-0 w-64 md:w-72 group cursor-pointer"
    >
      <div className="relative rounded-lg overflow-hidden aspect-video border-2 border-transparent hover:border-red-500 transition-all duration-300 flex flex-col items-center justify-center p-6">
        {skill.imageUrl ? (
          <>
            <img 
              src={skill.imageUrl} 
              alt={skill.name} 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative z-10 flex flex-col items-center justify-center">
              <div className="w-16 h-16 md:w-20 md:h-20 mb-4 text-red-500 transition-transform duration-300 group-hover:scale-110">
                {skill.icon}
              </div>
              <h3 className="bg-netflix-red text-white px-4 py-2 rounded text-sm font-semibold mb-2">{skill.name}</h3>
              <p className="text-sm md:text-base text-gray-300 text-center">{skill.description}</p>
            </div>
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-white bg-opacity-10"></div>
            <div className="relative z-10 flex flex-col items-center justify-center">
              <div className="w-16 h-16 md:w-20 md:h-20 mb-4 text-red-500 transition-transform duration-300 group-hover:scale-110">
                {skill.icon}
              </div>
              <h3 className="bg-netflix-red text-white px-4 py-2 rounded text-sm font-semibold mb-2">{skill.name}</h3>
              <p className="text-sm md:text-base text-gray-300 text-center">{skill.description}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SkillCard;