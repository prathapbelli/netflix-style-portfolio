
import React from 'react';
import { PROFILES } from '../constants';
import { type Profile } from '../types';

interface ProfileSelectionProps {
  onProfileSelect: (profile: Profile) => void;
}

const ProfileSelection: React.FC<ProfileSelectionProps> = ({ onProfileSelect }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl md:text-6xl font-semibold mb-12">Who's Watching?</h1>
      <div className="flex flex-wrap justify-center gap-4 md:gap-8">
        {PROFILES.map((profile) => (
          <div
            key={profile.name}
            onClick={() => onProfileSelect(profile)}
            className="flex flex-col items-center group cursor-pointer"
          >
            <div
              className={`w-24 h-24 md:w-40 md:h-40 rounded-md ${profile.avatarColor} flex items-center justify-center text-5xl transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:border-4 border-white`}
            >
              :)
            </div>
            <span className="mt-4 text-lg md:text-xl text-netflix-gray group-hover:text-white transition-colors">
              {profile.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileSelection;
