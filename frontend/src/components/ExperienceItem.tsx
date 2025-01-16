import { ArrowUpRight } from 'lucide-react';

import { Experience } from '@/lib/types';


const ExperienceItem = ({ exp, index }: { exp: Experience, index: number }) => {
    console.log(index);

    return (
        <a className='flex items-center justify-around hover:bg-gray-700 rounded-xl sm:px-4 group py-2 w-full' href={exp.companyURL} target='_blank'>

            <div key={index} className='flex flex-col gap-4 w-11/12'>
                <div className='flex justify-between'>
                    <p className='text-sm'>{exp.role}</p>
                    <p className='text-sm'>{exp.duration}</p>
                </div>

                <div>
                    <p className='text-sm'>{exp.company}</p>
                    <span className='text-sm'>{exp.location}</span>
                </div>

                <p className='mb-4 text-sm'>{exp.description}</p>
            </div>
            <div className='hidden w-1/4 sm:flex flex-col'><ArrowUpRight className='self-center w-16 h-16 transition-transform duration-300 ease-in-out group-hover:rotate-45' /></div>
        </a>
    )
}

export default ExperienceItem
