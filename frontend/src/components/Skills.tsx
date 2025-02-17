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
import K8sIcon from '../assets/icons/k8s.png';
import AwsIcon from '../assets/icons/aws.png';
import GitIcon from '../assets/icons/git.png';
import Js from '../assets/icons/js.png';
import figma from '../assets/icons/figma.png';
import graphql from '../assets/icons/graphql.png';

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
    { name: "Kubernetes", logo: K8sIcon },
    { name: "AWS", logo: AwsIcon },
];

export default function Skills() {
    return (
        <div className="grid grid-cols-4 gap-4 sm:gap-8 sm:grid-cols-8 w-3/4">
            {skills.map((skill, index) => (
                <div key={index} className="flex flex-col justify-around items-center flex-wrap ">
                    <img src={skill.logo} alt={skill.name} className="size-12 mb-4 bg-gray-100 p-2 rounded" />
                    <div className="text-center">
                        <p className="text-black text-xs">{skill.name}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
