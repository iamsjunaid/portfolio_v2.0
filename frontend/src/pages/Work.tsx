import { useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';

import projects from '../lib/projects.json';
import { Project } from '../lib/types';

import ProjectModal from '@/components/ProjectModal';
import ProjectCard from '@/components/ProjectCard';

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
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeProjectsModal}
        >
          <div
            className="bg-gray-100 rounded shadow-lg p-8 sm:max-w-6xl w-5/6 relative h-[32rem] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >

            <div className='flex justify-between items-center mb-4'>
              <h2 className="section-header ">More Projects</h2>
              <X
                className='p-1 hover:bg-gray-100 cursor-pointer rounded size-7 hover:text-primaryColor'
                onClick={closeProjectsModal}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
              {projects.slice(3, projects.length).map((project: Project) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  onClick={() => handleButtonClick(project)}
                />
              ))}
            </div>

          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
        {projects.slice(0, 3).map((project: Project) => (
          <ProjectCard
            key={project.title}
            project={project}
            onClick={() => handleButtonClick(project)}
          />
        ))}
      </div>
    </>
  );

  return (
    <section id='work'
      className={'transition-opacity duration-1000 ease-in-out mx-auto pb-8 '}
    >
      <div className='flex justify-around items-center px-8'>

        <div className='px-4 sm:px-0 mx-auto w-full'>
          <p className="section-header mt-8">Projects</p>
          <p className=' mb-8 text-sm'>
            Here are some of the projects I have worked on. Click on the "Learn More" button to see more details about each project.
            <br />
          </p>
        </div>
        <div className='justify-center mt-8 hidden sm:flex'>
          <Button variant="link" className='text-primaryColor  border border-primaryColor rounded-xl bg-secondaryColor group' onClick={() => handleSeeMore(projects)}>Click to see more
            <ArrowUpRight className='w-4 h-4 inline-block transition-transform duration-300 ease-in-out group-hover:rotate-45' />
          </Button>
        </div>
      </div>
      {projectList}

      <div className='sm:hidden flex justify-center mt-8'>
        <Button variant="link" className='text-primaryColor hover:scale-105' onClick={() => handleSeeMore(projects)}>Click to see more
          <ArrowUpRight className='w-4 h-4 inline-block' />
        </Button>
      </div>

      {/* Popup Modal */}
      {selectedProject && (
        <ProjectModal selectedProject={selectedProject} closeModal={closeModal} />
      )}
    </section>
  );
};

export default Work;
