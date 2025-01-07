import { X } from 'lucide-react';

import { ProjectCardProps } from "@/lib/types"

import { Button } from './ui/button';

const ProjectCard = ({ selectedProject, closeModal }: ProjectCardProps) => {

    return (
        <div>
            <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
                <div className='flex flex-col gap-2 bg-white p-6 rounded-xl shadow-lg w-11/12 md:w-1/2 relative'>
                    <div className='flex justify-between items-center mb-4'>
                        <h2 className='text-3xl font-bold'>{selectedProject.title}</h2>
                        <X
                            className='text-xl font-bold text-gray-600 hover:text-gray-800 hover:cursor-pointer'
                            onClick={closeModal}
                        />
                    </div>

                    <div className='p-4 bg-gray-300 rounded-xl'>
                        <img
                            src={selectedProject.img}
                            alt={selectedProject.title}
                            className='w-4/5 sm:w-full sm:h-80 rounded-md mx-auto'
                        />
                    </div>

                    <div className='flex flex-wrap gap-2 items-center border-b-2'>
                        {selectedProject.techs.map((tech: string, index: number) => (
                            <span key={index} className='text-sm text-gray-700'>
                                {tech}
                                {index < selectedProject.techs.length - 1 && <span className='mx-1'>•</span>}
                            </span>
                        ))}
                    </div>

                    <p className='text-md'>{selectedProject.desc}</p>
                    <div className='flex justify-between'>
                        <Button
                            variant="outline"
                            asChild
                        >
                            <a href={selectedProject.source} target='_blank' rel='noopener noreferrer'>
                                Github
                            </a>
                        </Button>
                        <Button
                            variant="outline"
                            asChild
                        >
                            <a href={selectedProject.live} target='_blank' rel='noopener noreferrer'>
                                Live Demo
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
