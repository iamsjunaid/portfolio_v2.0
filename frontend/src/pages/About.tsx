
import SkillsChart from "@/components/Skills"

import AboutMe from "@/components/AboutMe"

const About = () => {

    return (
        <section className="sm:w-11/12 mx-auto" >
            <div className="flex sm:flex-row flex-col-reverse justify-around items-center gap-4" id="about">
                <SkillsChart />
                <AboutMe />
            </div>

        </section>
    )
}

export default About
