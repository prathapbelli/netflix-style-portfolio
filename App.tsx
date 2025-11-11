
import React, { useState } from 'react';
import ProfileSelection from './components/ProfileSelection';
import Portfolio from './components/Portfolio';
import ExperiencePage from './components/ExperiencePage';
import SkillsPage from './components/SkillsPage';
import ProjectsPage from './components/ProjectsPage';
import { type Profile } from './types';

type Page = 'home' | 'experience' | 'skills' | 'projects';

const App: React.FC = () => {
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleProfileSelect = (profile: Profile) => {
    setSelectedProfile(profile);
    setCurrentPage('home');
  };

  const handlePageChange = (page: Page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    if (!selectedProfile) {
      return <ProfileSelection onProfileSelect={handleProfileSelect} />;
    }

    switch (currentPage) {
      case 'experience':
        return <ExperiencePage onNavigate={handlePageChange} />;
      case 'skills':
        return <SkillsPage onNavigate={handlePageChange} />;
      case 'projects':
        return <ProjectsPage onNavigate={handlePageChange} />;
      case 'home':
      default:
        return <Portfolio profile={selectedProfile} onNavigate={handlePageChange} />;
    }
  };

  return (
    <div className="bg-netflix-dark min-h-screen text-white antialiased">
      {renderPage()}
    </div>
  );
};

export default App;
