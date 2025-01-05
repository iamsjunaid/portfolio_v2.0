import { useEffect, useState } from 'react';
import projects from '../lib/projects.json';

const Work = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger the animation after the component mounts
    setIsLoaded(true);
    
  }, []);
  
  console.log(isLoaded);
  const projectList = projects.map((project) => (
    <div key={project.title} className='flex flex-col gap-4'>
      <h2 className='text-2xl font-bold'>{project.title}</h2>
      <img
        src={project.img}
        alt={project.title}
        className='w-64 h-40 object-cover'
      />
      <p>{project.desc}</p>
      <a href={project.live} target='_blank' rel='noreferrer'>{project.live}</a>
    </div>
  ));

  return (
    <div
      className={`transition-opacity duration-1000 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
    >
      <h1 className='text-4xl font-bold'>Work</h1>
      {projectList}
    </div>
  );
};

export default Work;
