import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal website to showcase my work and skills.',
    link: '#',
  },
  {
    title: 'React Todo App',
    description: 'A simple todo app built with React.',
    link: '#',
  },
];

const ProjectList = () => {
  return (
    <section id="projects" className="ProjectList">
      <h2>Projects</h2>
      <div>
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectList;
