import { X } from 'lucide-react';

import { ProjectCardProps } from "@/lib/types"

const ProjectCard = ({ selectedProject, closeModal }: ProjectCardProps) => {

    return (
        <div>
            <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
                <div className='bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/2 relative'>
                    <div className='flex justify-between items-center mb-4'>
                        <h2 className='text-3xl font-bold'>{selectedProject.title}</h2>
                        <X
                            className='text-xl font-bold text-gray-600 hover:text-gray-800 hover:cursor-pointer'
                            onClick={closeModal}
                        />
                    </div>
                    <img
                        src={selectedProject.img}
                        alt={selectedProject.title}
                        className='w-full h-48 object-cover rounded-md mb-4'
                    />
                    <p className='mb-4'>{selectedProject.desc}</p>
                    <div className='flex justify-between'>
                        <a
                            href={selectedProject.live}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600'
                        >
                            Live Demo
                        </a>
                        <a
                            href={selectedProject.source}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600'
                        >
                            Source Code
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
