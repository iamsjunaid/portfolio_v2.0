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

const skills = [
    { name: "React", logo: ReactIcon, info: "A JavaScript library for building user interfaces." },
    { name: "Redux", logo: ReduxIcon, info: "A predictable state container for JavaScript apps." },
    { name: "Next", logo: NextIcon, info: "A React framework for server-side rendering and static site generation." },
    { name: "Tailwind CSS", logo: TailwindIcon, info: "A utility-first CSS framework for rapid UI development." },
    { name: "TypeScript", logo: TypeScriptIcon, info: "A typed superset of JavaScript that compiles to plain JavaScript." },
    { name: "Node.js", logo: NodeIcon, info: "A JavaScript runtime built on Chrome's V8 JavaScript engine." },
    { name: "Ruby on Rails", logo: RorIcon, info: "A server-side web application framework written in Ruby." },
    { name: "PostgreSQL", logo: PostgresIcon, info: "A powerful, open-source object-relational database system." },
    { name: "MongoDB", logo: MongoIcon, info: "A document-oriented NoSQL database used for high volume data storage." },
    { name: "Docker", logo: DockerIcon, info: "A platform for developing, shipping, and running applications in containers." },
    { name: "Kubernetes", logo: K8sIcon, info: "An open-source system for automating deployment, scaling, and management of containerized applications." },
    { name: "AWS", logo: AwsIcon, info: "Amazon Web Services, a comprehensive cloud computing platform." },
    { name: "Git", logo: GitIcon, info: "A distributed version control system for tracking changes in source code during software development." },
];

export default function Skills() {


    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 ">
            {skills.map((skill, index) => (
                <div key={index} className="flex flex-row justify-around items-center ">
                    <img src={skill.logo} alt={skill.name} className="size-16 mr-4 bg-gray-100 p-4 rounded" />
                    <div className=' text-left'>
                        <p className="text-black text-sm ">{skill.name}</p>
                        <p className="text-gray-500 text-xs ">{skill.info}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
