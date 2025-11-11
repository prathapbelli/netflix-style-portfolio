
import React from 'react';
import Header from './Header';
import ContentRow from './ContentRow';
import ProjectCard from './ProjectCard';
import { PROJECTS_DUMMY } from '../constants';

type Page = 'home' | 'experience' | 'skills' | 'projects';

interface ProjectsPageProps {
  onNavigate?: (page: Page) => void;
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full min-h-screen">
      <Header currentPage="projects" onNavigate={onNavigate} />
      <main className="pt-24 px-4 md:px-14 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Projects</h1>
        <ContentRow title="All Projects">
          {PROJECTS_DUMMY.map((item) => (
            <ProjectCard key={item.title} project={item} />
          ))}
        </ContentRow>
      </main>
    </div>
  );
};

export default ProjectsPage;

