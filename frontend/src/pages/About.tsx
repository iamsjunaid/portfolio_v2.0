import React, { useEffect, useState } from "react"

import { ArrowRight } from "lucide-react"

import SkillsChart from "@/components/SkillsChart"

import { Button } from "@/components/ui/button"

const About = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <section className={`mx-6 sm:mx-16 border border-red-500 flex flex-col justify-between items-baseline py-24 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} duration-1000 ease-in-out`}>
            <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
                <p className="text-3xl sm:text-5xl sm:w-2/3">
                    See how we've turned ideas into reality.
                    <span className="text-gray-500">
                        Dive into the stories of successful product designs that make a difference.
                    </span>
                </p>
                <Button asChild className="bg-gray-300 text-black text-lg rounded-full px-8 py-2 sm:px-20 sm:py-6 hover:text-gray-950 hover:border hover:border-gray-950 w-1/2 sm:w-1/4 transition-transform duration-300 ease-in-out">
                    <a href="#Contact" className="flex items-center gap-2 group">
                        <span>My Resume</span>
                        <ArrowRight className="w-12 h-12 transition-transform duration-300 ease-in-out group-hover:-rotate-45" />
                    </a>
                </Button>
            </div>
            <div className="w-full">
                <SkillsChart />
            </div>
        </section>
    )
}

export default About
