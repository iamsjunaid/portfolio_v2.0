import { useState } from 'react';

import projects from '../lib/projects.json';
import { Project } from '../lib/types';
import ProjectCard from '@/components/ProjectCard';
import { ArrowUpRight, X } from 'lucide-react';

import { Button } from '@/components/ui/button';

const Work = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showMore, setShowMore] = useState(false);

  const handleButtonClick = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const handleSeeMore = (projects: Project[]) => {
    console.log('See more projects:', projects);
    setShowMore(true);
  };

  const closeProjectsModal = () => {
    setShowMore(false);
  };

  const projectList = (
    <>
    {/* Modal */}
      {showMore && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 ">
          <div className="bg-gray-100 rounded shadow-lg p-8 sm:max-w-6xl w-5/6 relative h-5/6 overflow-y-auto ">

            <div className='flex justify-between items-center mb-4'>
              <h2 className="section-header ">More Projects</h2>
              <X
                className='p-1 hover:bg-gray-100 cursor-pointer rounded size-7 hover:text-primaryColor'
                onClick={closeProjectsModal}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
              {projects.slice(3,projects.length).map((project: Project) => (
                <div
                  key={project.title}
                  className="flex flex-col gap-2 justify-between items-center p-4 max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-600 ease-in-out cursor-pointer bg-white border-primaryColor border outline-2 outline-offset-4"
                >
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full"
                  />
                  <div className="mx-2">
                    <div className="font-bold text-xl mb-2">{project.title}</div>
                    <p className="text-gray-700 text-sm ">
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

          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
        {projects.slice(0, 3).map((project: Project) => (
          <div
            key={project.title}
            className="flex flex-col gap-2 justify-between items-center p-4 max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-600 ease-in-out cursor-pointer bg-white border-primaryColor border outline-2 outline-offset-4"

          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full"
            />

            <div className="mx-2">
              <div className="font-bold text-xl mb-2">{project.title}</div>
              <p className="text-gray-700 text-sm ">
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
    </>
  );

  return (
    <section id='work'
      className={'transition-opacity duration-1000 ease-in-out mx-auto pb-8 bg-gray-100'}
    >
      <div className='px-4 sm:px-0'>
        <p className="section-header sm:ml-8 mt-8">Projects</p>
        <p className='sm:ml-8 mb-8 text-sm'>
          Here are some of the projects I have worked on. Click on the "Learn More" button to see more details about each project.
          <br />
        </p>
      </div>
      {projectList}

      <div className='flex justify-center mt-8'>
        <Button variant="link" className='text-primaryColor hover:scale-105' onClick={() => handleSeeMore(projects)}>Click to see more
          <ArrowUpRight className='w-4 h-4 inline-block' />
        </Button>
      </div>

      {/* Popup Modal */}
      {selectedProject && (
        <ProjectCard selectedProject={selectedProject} closeModal={closeModal} />
      )}
    </section>
  );
};

export default Work;
