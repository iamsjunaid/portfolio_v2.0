import React from "react"
import { motion } from 'framer-motion';

import { ArrowUpRight } from 'lucide-react';

import { ProjectCardProps } from "@/lib/types";

const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: [0.42, 0, 0.58, 1] as [number, number, number, number],
        },
    },
};
const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {

    return (
        <motion.div
            key={project.title}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col items-start relative"
            variants={itemVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className='w-full h-72 flex flex-col justify-center overflow-hidden rounded-t-lg bg-secondaryColor'>

                <img
                    src={project.img}
                    alt={project.title}
                    className="w-full mt-4"
                />
            </div>

            <div className="p-4 h-40">
                <p className='font-semibold text-sm mb-2'>{project.title}</p>
                <p className="text-gray-600 text-sm ">
                    {project.desc.split(' ').slice(0, 20).join(' ')}...
                </p>
            </div>

            <div className='button-container flex flex-col items-center gap-4 transition-all duration-300 ease-in-out  bg-gray-200 w-full rounded-t-xl py-2 group absolute bottom-0 left-0'>
                <button className='button flex items-center justify-between gap-1' onClick={() => onClick(project)}>
                    <p className='text-sm '>Learn More</p>
                    <ArrowUpRight className='w-4 h-4 transition-transform duration-300 ease-in-out group-hover:rotate-45 ' />
                </button>
            </div>

        </motion.div>
    )
}

export default ProjectCard
