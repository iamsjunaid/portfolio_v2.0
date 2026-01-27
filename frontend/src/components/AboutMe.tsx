import { motion } from 'framer-motion';

import { FiGithub, FiLinkedin } from "react-icons/fi";

const itemVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.42, 0, 0.58, 1] as [number, number, number, number],
    },
  },
};

const AboutMe = () => {
  return (
    <motion.div variants={itemVariants}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.2 }} className="w-4/5 sm:w-1/4 p-2 border flex flex-col rounded-xl shadow-md bg-white border-primaryColor mb-4 sm:mb-0">
      <div className="flex justify-between items-start">
        <div>

          <p className="section-header">About Me
          </p>
          <span className="text-sm text-gray-600">
            A brief overview of my work experience.
          </span>
        </div>
        <div className="flex gap-2 my-2">
          <a href="https://linkedin.com/in/junaidahmedsyed" className="p-2 bg-secondaryColor rounded"><FiLinkedin className="w-4 h-4 text-primaryColor" /></a>
          <a href="https://github.com/iamsjunaid" className="p-2 bg-secondaryColor rounded"><FiGithub className="w-4 h-4 text-primaryColor" /></a>
        </div>
      </div>
      <p className="text-sm my-4 rounded-lg justify-center text-left font-semibold">
        <>
          I'm Junaid, a full-stack
          developer skilled in building performant
          web apps using React, TypeScript,
          Ruby on Rails, and Node.js. I love
          transforming complex problems
          into simple, scalable solutions.
          <br /><br />
          I'm a Microverse alum with experience
          in remote collaboration, pair
          programming, and agile delivery.
          With a Computer Science background,
          I've worked on diverse projects, from
          startups to SaaS tools, always aiming
          to write clean, maintainable code.
          <br /><br />
          You can view my resume on <a href="https://drive.google.com/file/d/1f1XyEVaL94TebnWBslrUFICTV3XnDW1i/view?usp=sharing" className="text-primaryColor p-[2px] bg-secondaryColor underline rounded">Google Docs</a>.Let's connect and build something great together!
        </>
      </p>
    </motion.div>
  )
}

export default AboutMe
