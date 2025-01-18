
import experiences from '../lib/experiences.json';

import ExperienceItem from '@/components/ExperienceItem';

const Experience = () => {

    return (
        <section className='bg-black text-white rounded-tl-[8rem] px-4 py-16 sm:p-20 flex flex-col gap-12' id="experience">
            <p className="text-md text-left mt-4 ml-2">
                Career
                <span className='mx-4'>
                    ·
                </span>
                Journey
            </p>
            <div className='sm:flex justify-around w-full h-full gap-8'>

                {/* Experience Section */}
                <div className='flex flex-col gap-4 w-full px-2'>
                    <h1 className='text-4xl mb-4'>Experience</h1>
                    {experiences.map((exp, index) => (
                        <ExperienceItem index={index} key={exp.role} exp={exp}/>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Experience;
