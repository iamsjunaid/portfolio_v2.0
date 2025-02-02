import { X } from 'lucide-react';
import { Github } from 'lucide-react';
import { Rocket } from 'lucide-react';

import { ProjectCardProps } from "@/lib/types"

import { Button } from './ui/button';

const ProjectCard = ({ selectedProject, closeModal }: ProjectCardProps) => {

    return (
        // <div>
        //     <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
        //         <div className='flex flex-col gap-2 bg-white p-6 rounded-xl shadow-lg w-11/12 md:w-1/2 relative'>
        //             <div className='flex justify-between items-center mb-4'>
        //                 <h2 className='text-3xl font-bold'>{selectedProject.title}</h2>
        //                 <X
        //                     className='text-xl font-bold text-gray-600 hover:text-gray-800 hover:cursor-pointer'
        //                     onClick={closeModal}
        //                 />
        //             </div>

        //             <div className='p-4 bg-gray-300 rounded-xl'>
        //                 <img
        //                     src={selectedProject.img}
        //                     alt={selectedProject.title}
        //                     className='w-4/5 sm:w-full sm:h-80 rounded-md mx-auto'
        //                 />
        //             </div>

        //             <div className='flex flex-wrap gap-2 items-center'>
        //                 {selectedProject.techs.map((tech: string, index: number) => (
        //                     <span key={index} className='text-xs text-white bg-gray-950 p-1 rounded'>
        //                         {tech}
        //                     </span>
        //                 ))}
        //             </div>

        //             <p className='text-md'>{selectedProject.desc}</p>
        //             <div className='flex justify-between'>
        //                 <Button
        //                     className='rounded-xl hover:bg-black hover:text-white'
        //                     variant="outline"
        //                     asChild
        //                 >
        //                     <a href={selectedProject.source} target='_blank' rel='noopener noreferrer'>
        //                         Github
        //                     </a>
        //                 </Button>
        //                 <Button
        //                     className='rounded-xl hover:bg-black hover:text-white'
        //                     variant="outline"
        //                     asChild
        //                 >
        //                     <a href={selectedProject.live} target='_blank' rel='noopener noreferrer'>
        //                         Live Demo
        //                     </a>
        //                 </Button>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
            <div className='flex flex-col gap-2 bg-white p-6 rounded shadow-lg w-11/12 sm:w-3/4 relative'>
                <div className='flex justify-between items-center mb-4'>
                    <div className='flex gap-2 items-center'>

                        <h2 className='text-xl font-semibold'>{selectedProject.title}</h2>
                        <a className='p-1 hover:bg-gray-100 cursor-pointer rounded hover:text-primaryColor' href={selectedProject.source} target='_blank' rel='noopener noreferrer'><Github className='size-5' /></a>
                        <a className='p-1 hover:text-primaryColor hover:bg-gray-100 cursor-pointer rounded' href={selectedProject.source} target='_blank' rel='noopener noreferrer'><Rocket className='size-5' target='_blank' /></a>
                    </div>
                    <div>
                        <X
                            className='p-1 hover:bg-gray-100 cursor-pointer rounded size-7 hover:text-primaryColor'
                            onClick={closeModal}
                        />
                    </div>
                </div>

                <div className='flex flex-col sm:flex-row justify-around items-center sm:items-start gap-4'>
                    <div className='w-3/4 flex justify-center items-center'>
                        <img
                            src={selectedProject.img}
                            alt={selectedProject.title}
                            className='w-4/5 sm:w-full rounded-md mx-auto'
                        />
                    </div>

                    <div className='sm:w-1/2'>
                        <p className='text-sm'>{selectedProject.desc}</p>
                        <div className='flex flex-wrap gap-2 items-center'>
                            {selectedProject.techs.map((tech: string, index: number) => (
                                <span key={index} className='text-xs text-white bg-gray-950 p-1 rounded'>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProjectCard
