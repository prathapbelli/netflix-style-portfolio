
import React from 'react';
import Header from './Header';
import { WORK_EXPERIENCE } from '../constants';

type Page = 'home' | 'experience' | 'skills' | 'projects';

interface ExperiencePageProps {
  onNavigate?: (page: Page) => void;
}

const ExperiencePage: React.FC<ExperiencePageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full min-h-screen">
      <Header currentPage="experience" onNavigate={onNavigate} />
      <main className="pt-24 px-4 md:px-14 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Work Experience</h1>
        <div className="space-y-8">
          {WORK_EXPERIENCE.map((job, index) => (
            <div key={index} className="bg-zinc-800 p-6 rounded-lg shadow-lg">
              <div className="flex justify-between items-baseline">
                <h3 className="text-xl font-bold text-white">{job.role}</h3>
                <p className="text-sm text-gray-400">{job.period}</p>
              </div>
              <h4 className="text-lg text-red-500 mb-2">{job.company}</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {job.points.map((point, i) => <li key={i}>{point}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ExperiencePage;

