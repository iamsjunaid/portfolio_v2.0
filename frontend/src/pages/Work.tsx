import { useEffect, useState } from 'react';

import projects from '../lib/projects.json';
import { Project } from '../lib/types';
import ProjectCard from '@/components/ProjectCard';
import { ArrowUpRight } from 'lucide-react';


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
          className="flex flex-col gap-2 justify-between items-center p-4 max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-600 ease-in-out cursor-pointer bg-white"

        >
          <img
            src={project.img}
            alt={project.title}
            className="w-full"
          />

          <div className="mx-2">
            <div className="font-bold text-xl mb-2">{project.title}</div>
            <p className="text-gray-700 text-base ">
              {project.desc.split(' ').slice(0, 20).join(' ')}...
            </p>
          </div>

          <div className='button-container flex flex-col items-center gap-4 transition-all duration-300 ease-in-out  bg-black w-full text-white rounded py-1 group'>
            <button className='button flex items-center justify-between gap-1' onClick={() => handleButtonClick(project)}>
              <p className='text-sm'>Learn More</p>
              <ArrowUpRight className='w-4 h-4 transition-transform duration-300 ease-in-out group-hover:rotate-45 ' />
            </button>
          </div>

        </div>
      ))}
    </div>
  );

  return (
    <section id='work'
      className={`transition-opacity duration-1000 ease-in-out mx-auto pb-8 bg-gray-100 ${isLoaded ? 'opacity-100' : 'opacity-0'
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
