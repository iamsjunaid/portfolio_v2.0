
import experiences from '../lib/experiences.json';

import ExperienceItem from '@/components/ExperienceItem';

const Experience = () => {

    return (
        <section className=' bg-white rounded-bl-[8rem] px-4 py-16 sm:p-20 flex flex-col gap-4 ' id="experience">
            <p className="section-header">
                Experience
            </p>
            <p className='text-gray-700 text-sm'>
                I have worked on a variety of projects, ranging from web applications to mobile apps. My experience includes working with various technologies and frameworks, and I am always eager to learn new skills and improve my abilities.
            </p>
            <div className='sm:flex justify-around w-full h-full gap-8'>

                {/* Experience Section */}
                <div className='flex flex-col gap-4 px-2 w-full'>
                    {experiences.map((exp, index) => (
                        <ExperienceItem index={index} key={exp.role} exp={exp} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Experience;
