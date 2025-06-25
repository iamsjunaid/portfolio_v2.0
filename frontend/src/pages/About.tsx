
import SkillsChart from "@/components/Skills"

import AboutMe from "@/components/AboutMe"

const About = () => {

    return (
        <section className="w-full ">
            <div className="flex sm:flex-row flex-col-reverse justify-around items-center p-8 " id="about">
                <SkillsChart />
                <AboutMe />
            </div>

        </section>
    )
}

export default About
