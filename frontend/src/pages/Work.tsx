import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

import projects from '../lib/projects.json';
import { Project } from '../lib/types';
import ProjectCard from '@/components/ProjectCard';

const Work = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleButtonClick = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const projectList = (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
      {projects.map((project: Project) => (
        <div
          key={project.title}
          className="flex flex-col items-center p-4"
        >
          <div className="relative group overflow-hidden rounded-xl bg-slate-300 p-4 sm:px-16 w-full h-full border border-red-500">
            {/* Project Image */}
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-64 object-cover rounded-xl transition-transform duration-300 ease-in-out transform group-hover:scale-105 group-hover:brightness-50"
            />

            {/* Hover Button */}
            <div
              className="absolute bottom-4 left-4 flex items-center justify-center w-12 h-12 rounded-full bg-gray-900 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out cursor-pointer hover:bg-white hover:text-gray-900"
              onClick={() => handleButtonClick(project)}
            >
              <ArrowRight className="w-6 h-6" />
            </div>
          </div>
          <h2 className="text-xl mt-4">{project.title}</h2>
        </div>
      ))}
    </div>
  );

  return (
    <section id='projects'
      className={`transition-opacity duration-1000 ease-in-out mx-auto h-full ${isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
    >
      <p className="text-md text-left ml-8 sm:ml-16 my-12">Tech       <span className='mx-4'>
        ·
      </span>Projects</p>
      {projectList}

      {/* Popup Modal */}
      {selectedProject && (
        <ProjectCard selectedProject={selectedProject} closeModal={closeModal} />
      )}
    </section>
  );
};

export default Work;
