import { ArrowUpRight } from 'lucide-react';

import { Experience } from '@/lib/types';

const ExperienceItem = ({ exp, index }: { exp: Experience, index: number }) => {
    return (
        <div key={index} className='flex flex-col gap-4 border-b-2'>
            <div className='flex justify-between'>
                <h3>{exp.role}</h3>
                <p className='text-sm'>{exp.duration}</p>
            </div>
            <div className='flex flex-col'>
                <div className='flex gap-2 group'>
                    <a href={exp.companyURL} target='_blank' className='underline'>{exp.company}</a>
                    <ArrowUpRight className='w-6 h-6 transition-transform duration-300 ease-in-out group-hover:rotate-45' />
                </div>
                <span className='text-sm'>{exp.location}</span>
            </div>
            <p className='mb-4 text-sm'>{exp.description}</p>
        </div>
    )
}

export default ExperienceItem
