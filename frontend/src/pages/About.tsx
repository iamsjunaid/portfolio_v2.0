import { useEffect, useState } from "react"

import { ArrowUpRight } from "lucide-react"

import SkillsChart from "@/components/Skills"

import { Button } from "@/components/ui/button"

const About = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <section className="w-full bg-white">

            <div className="flex flex-col py-8 sm:flex-row gap-8 items-start justify-center sm:items-center bg-black px-4">
                <p className="text-xl sm:text-4xl text-white">
                    Let's collaborate to turn your vision into a digital reality!
                </p>
                <Button asChild className="bg-gray-300 text-black rounded px-8 py-2 sm:px-12 sm:py-6 hover:text-white hover:border hover:border-white-950 transition-transform duration-300 ease-in-out text-sm">
                    <a href="https://drive.google.com/file/d/1cZ7ykcpj5RER1zL_0XpxJXOqekF6h6tu/view?usp=sharing" className="flex items-center gap-2 group" target="_blank">
                        <span>My Resume</span>
                        <ArrowUpRight className="w-12 h-12 transition-transform duration-300 ease-in-out group-hover:rotate-45" />
                    </a>
                </Button>
            </div>

            <div className={`mx-6 sm:mx-16 my-8 flex flex-col justify-between items-baseline  ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} duration-1000 ease-in-out`} id="about">
                <SkillsChart />
            </div>

        </section>
    )
}

export default About
