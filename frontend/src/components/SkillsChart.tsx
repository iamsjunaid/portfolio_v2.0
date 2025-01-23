import { useEffect, useState } from 'react';


import ReactIcon from '../assets/icons/react.png';
import ReduxIcon from '../assets/icons/redux.png';
import NextIcon from '../assets/icons/next.png';
import TailwindIcon from '../assets/icons/tailwind.png';
import TypeScriptIcon from '../assets/icons/typescript.png';
import NodeIcon from '../assets/icons/node.png';
import RorIcon from '../assets/icons/ror.png';
import PostgresIcon from '../assets/icons/postgres.png';
import MongoIcon from '../assets/icons/mongo.png';
import DockerIcon from '../assets/icons/docker.png';
import K8sIcon from '../assets/icons/k8s.png';
import AwsIcon from '../assets/icons/aws.png';
import GitIcon from '../assets/icons/git.png';

const skills = [
    { name: "React", logo: ReactIcon, level: 85 },
    { name: "Redux", logo: ReduxIcon, level: 60 },
    { name: "Next", logo: NextIcon, level: 70 },
    { name: "Tailwind CSS", logo: TailwindIcon, level: 65 },
    { name: "TypeScript", logo: TypeScriptIcon, level: 65 },
    { name: "Node.js", logo: NodeIcon, level: 70 },
    { name: "Ruby on Rails", logo: RorIcon, level: 70 },
    { name: "PostgreSQL", logo: PostgresIcon, level: 80 },
    { name: "MongoDB", logo: MongoIcon, level: 55 },
    { name: "Docker", logo: DockerIcon, level: 50 },
    { name: "Kubernetes", logo: K8sIcon, level: 40 },
    { name: "AWS", logo: AwsIcon, level: 40 },
    { name: "Git", logo: GitIcon, level: 70 },
];

export default function SkillsChart() {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    }, []);

    return (
        <div className="flex flex-col">
            <p className="text-md mt-16 mb-8 text-left ">Tech
                <span className='mx-4'>
                    ·
                </span>Skills</p>
            <div className="flex flex-wrap gap-6">
                {skills.map((skill) => (
                    <div className='flex sm:w-[16rem] w-full justify-around items-center'>
                        <div className='mr-4'>
                            <img src={skill.logo} alt={skill.name+' logo'} className='w-12 h-12 sm:w-16 sm:h-16'/>
                        </div>
                        <div
                            key={skill.name}
                            className="w-3/4 sm:w-40 flex flex-col items-start"
                        >
                            <span className="font-medium mb-2">{skill.name}</span>
                            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                                <div
                                    className="h-4 rounded-full bg-gray-950 transition-all duration-&lsqb;2000ms&rsqb; ease-in-out"
                                    style={{
                                        width: animate ? `${skill.level}%` : '0%',
                                    }}
                                ></div>
                            </div>
                            <span className="text-sm mt-2">{skill.level}%</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
