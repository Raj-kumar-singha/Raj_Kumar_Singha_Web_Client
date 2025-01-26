import React, { useState } from 'react';
import SkillCard from './SkillCard';

const TechnicalSkills = () => {
  const skills = [
    { skill: 'HTML', imgUrl: '/nodejs-logo-svgrepo-com.svg', progress: 9 },
    { skill: 'CSS', imgUrl: '/nodejs-logo-svgrepo-com.svg', progress: 8 },
    { skill: 'JavaScript', imgUrl: '/nodejs-logo-svgrepo-com.svg', progress: 7 },
    { skill: 'React', imgUrl: '/nodejs-logo-svgrepo-com.svg', progress: 9 },
    { skill: 'MongoDB', imgUrl: '/nodejs-logo-svgrepo-com.svg', progress: 8 },
    { skill: 'Node.js', imgUrl: '/nodejs-logo-svgrepo-com.svg', progress: 7 },
    { skill: 'Express.js', imgUrl: '/nodejs-logo-svgrepo-com.svg', progress: 7 },
    { skill: 'Git', imgUrl: '/nodejs-logo-svgrepo-com.svg', progress: 8 },
    { skill: 'Next.js', imgUrl: '/nodejs-logo-svgrepo-com.svg', progress: 8 },
  ];

  return (
    <div className="px-4">
      <h2 className=" displa text-4xl font-bold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-400">
        Technical Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {skills.map(({ skill, imgUrl, progress }) => (
          <SkillCard key={skill} skill={skill} imgUrl={imgUrl} progress={progress} />
        ))}
      </div>
    </div>
  );
};

export default TechnicalSkills;
