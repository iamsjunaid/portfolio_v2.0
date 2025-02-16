import { useEffect, useState } from "react"

import { ArrowUpRight } from "lucide-react"

import SkillsChart from "@/components/Skills"

import { Button } from "@/components/ui/button"

import AboutMe from "@/components/AboutMe"

const About = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <section className="w-full bg-white">

            <div className="flex flex-col py-8 sm:flex-row gap-8 items-start justify-around sm:items-center bg-black px-4">
                <p className="text-xl sm:text-2xl text-white">
                    Let's collaborate to turn your vision into a digital reality!
                </p>
                <Button asChild className="bg-gray-300 text-black rounded px-8 py-2 sm:px-12 sm:py-6 hover:text-white hover:border hover:border-white-950 transition-transform duration-300 ease-in-out text-sm">
                    <a href="https://drive.google.com/file/d/1NxOECikOd6zbwujjK5LqB_IhiGLjsr9D/view?usp=drive_link" className="flex items-center gap-2 group" target="_blank">
                        <span>My Resume</span>
                        <ArrowUpRight className="w-12 h-12 transition-transform duration-300 ease-in-out group-hover:rotate-45" />
                    </a>
                </Button>
            </div>

            <div className="flex justify-around items-center p-8" id="about">
                <SkillsChart />
                <AboutMe />
            </div>

        </section>
    )
}

export default About
