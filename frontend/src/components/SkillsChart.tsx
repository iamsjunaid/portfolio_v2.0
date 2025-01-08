import { useEffect, useState } from 'react';

const skills = [
    { name: "React", level: 85 },
    { name: "Redux", level: 60 },
    { name: "Next", level: 70 },
    { name: "Tailwind CSS", level: 65 },
    { name: "TypeScript", level: 65 },
    { name: "Node.js", level: 70 },
    { name: "Ruby on Rails", level: 70 },
    { name: "PostgreSQL", level: 80 },
    { name: "MongoDB", level: 55 },
    { name: "Docker", level: 50 },
    { name: "Kubernetes", level: 40 },
    { name: "AWS", level: 40 },
    { name: "Git", level: 70 },
];

export default function SkillsChart() {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    }, []);

    return (
        <div className="flex flex-col">
            <p className="text-md my-12 text-left ">Tech  ·  Skills</p>
            <div className="flex flex-wrap gap-6">
                {skills.map((skill) => (
                    <div
                        key={skill.name}
                        className="w-full sm:w-40 flex flex-col items-center"
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
                ))}
            </div>
        </div>
    );
}
