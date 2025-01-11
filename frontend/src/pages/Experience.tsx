import { ArrowUpRight } from 'lucide-react';

import experiences from '../lib/experiences.json';
import education from '../lib/education.json';

const Experience = () => {

    return (
        <section className='bg-black text-white rounded-tl-[8rem] px-4 py-16 sm:p-20 flex flex-col gap-12'>
            <p className="text-md text-left mt-4 ml-2">
                Career
                <span className='mx-4'>
                    ·
                </span>
                Journey
            </p>
            <div className='sm:flex justify-around h-full gap-8'>

                {/* Experience Section */}
                <div className='flex flex-col gap-4 sm:w-1/2 w-full px-2'>
                    <h1 className='text-4xl mb-4'>Experience</h1>
                    {experiences.map((exp, index) => (
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
                    ))}
                </div>

                {/* Education Section */}
                <div className='flex flex-col gap-4 sm:w-1/2 w-full px-2'>
                    <h1 className='text-4xl mb-4'>Education</h1>
                    {education.map((edu, index) => (
                        <div key={index} className='flex flex-col gap-4 border-b-2'>
                            <div className='flex justify-between'>
                                <h2>{edu.degree}</h2>
                                <p className='text-sm'>{edu.duration}</p>
                            </div>
                            <div className='flex flex-col'>
                                <div className='flex gap-2 group'>
                                    <a href={edu.instituteURL} target='_blank' className='underline'>{edu.institution}</a>
                                    <ArrowUpRight className='w-6 h-6 transition-transform duration-300 ease-in-out group-hover:rotate-45' />
                                </div>
                            </div>
                            <p className='mb-4 text-sm'>{edu.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
