import experiences from '../lib/experiences.json';
import ExperienceItem from '@/components/ExperienceItem';
import { motion } from 'framer-motion';

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.42, 0, 0.58, 1] as [number, number, number, number],
        },
    },
};

const Experience = () => {
    return (
        <section className='bg-transparent rounded-bl-[8rem] px-4 py-16 sm:p-20 flex flex-col gap-4' id='experience'>
            <p className='section-header'>Experience</p>
            <p className='text-gray-700 text-sm'>
                I have worked on a variety of projects, ranging from web applications to mobile apps. My experience includes working with various technologies and frameworks, and I am always eager to learn new skills and improve my abilities.
            </p>

            <div className='sm:flex justify-around w-full h-full gap-8'>
                <div className='flex flex-col gap-4 w-full'>
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.role}
                            variants={itemVariants}
                            initial='hidden'
                            whileInView='visible'
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <ExperienceItem index={index} exp={exp} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
