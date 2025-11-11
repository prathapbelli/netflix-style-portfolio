
import React, { useRef } from 'react';
import Header from './Header';
import SkillCard from './SkillCard';
import { SKILLS_BACKEND, SKILLS_DATABASE, SKILLS_CLOUD, SKILLS_DEVOPS } from '../constants';
import { type Skill } from '../types';

type Page = 'home' | 'experience' | 'skills' | 'projects';

interface SkillsPageProps {
  onNavigate?: (page: Page) => void;
}

interface ScrollableSkillsSectionProps {
  title: string;
  skills: Skill[];
}

const ScrollableSkillsSection: React.FC<ScrollableSkillsSectionProps> = ({ title, skills }) => {
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
    <section className="mb-16 group">
      <h2 className="text-3xl md:text-4xl font-bold text-white border-b-4 border-red-500 pb-2 mb-6 inline-block">
        {title}
      </h2>
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
          className="flex overflow-x-auto gap-6 mt-8 pb-4 scrollbar-hide"
          style={{ scrollBehavior: 'smooth' }}
        >
          {skills.map((skill) => <SkillCard key={skill.name} skill={skill} />)}
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
    </section>
  );
};

const SkillsPage: React.FC<SkillsPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full min-h-screen bg-netflix-dark">
      <Header currentPage="skills" onNavigate={onNavigate} />
      <main className="pt-24 px-4 md:px-14 pb-16">
        <br />
        <ScrollableSkillsSection title="Backend" skills={SKILLS_BACKEND} />
        <ScrollableSkillsSection title="Database" skills={SKILLS_DATABASE} />
        <ScrollableSkillsSection title="Cloud" skills={SKILLS_CLOUD} />
        <ScrollableSkillsSection title="DevOps" skills={SKILLS_DEVOPS} />
      </main>
    </div>
  );
};

export default SkillsPage;

