import { motion } from 'framer-motion';

import ReactIcon from '../assets/icons/react.png';
import ReduxIcon from '../assets/icons/redux.png';
import NextIcon from '../assets/icons/next.png';
import TailwindIcon from '../assets/icons/tailwind.png';
import TypeScriptIcon from '../assets/icons/ts.png';
import NodeIcon from '../assets/icons/node.png';
import RorIcon from '../assets/icons/ror.png';
import PostgresIcon from '../assets/icons/psql.png';
import MongoIcon from '../assets/icons/mongo.png';
import DockerIcon from '../assets/icons/docker.png';
import AwsIcon from '../assets/icons/aws.png';
import GitIcon from '../assets/icons/git.png';
import Js from '../assets/icons/js.png';
import figma from '../assets/icons/figma.png';
import graphql from '../assets/icons/graphql.png';
import python from '../assets/icons/python.png';

const skills = [
    { name: "React", logo: ReactIcon },
    { name: "Redux", logo: ReduxIcon },
    { name: "Next", logo: NextIcon },
    { name: "Tailwind CSS", logo: TailwindIcon },
    { name: "JavaScript", logo: Js },
    { name: "TypeScript", logo: TypeScriptIcon },
    { name: "Node.js", logo: NodeIcon },
    { name: "Ruby on Rails", logo: RorIcon },
    { name: "PostgreSQL", logo: PostgresIcon },
    { name: "MongoDB", logo: MongoIcon },
    { name: "Git", logo: GitIcon },
    { name: "Figma", logo: figma },
    { name: "GraphQL", logo: graphql },
    { name: "Docker", logo: DockerIcon },
    { name: "AWS", logo: AwsIcon },
    { name: "Python", logo: python },
];

const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: [0.42, 0, 0.58, 1] as [number, number, number, number],
        },
    },
};

export default function Skills() {
    return (
        <motion.div variants={itemVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.2 }} className='flex flex-col border border-secondaryColor p-2 rounded-xl bg-white'>
            <div className='mb-4'>
                <p className="section-header">Tech-stack</p>
                <p className='text-sm'>
                    I have experience with a wide range of technologies, including:
                    <br />
                </p>
            </div>
            <div className="grid grid-cols-4 gap-4 sm:gap-8 sm:grid-cols-8 w-full sm:w-11/12 mx-auto">

                {skills.map((skill, index) => (
                    <div key={index} className="flex flex-col justify-around items-center flex-wrap hover:scale-105 transition-transform duration-300 ease-in-out">
                        <img src={skill.logo} alt={skill.name} className="size-12 mb-4 bg-gray-100 p-2 rounded" />
                        <div className="text-center">
                            <p className="text-black text-xs">{skill.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}
