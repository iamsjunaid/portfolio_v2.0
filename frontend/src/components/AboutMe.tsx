import { FiGithub, FiLinkedin } from "react-icons/fi";

const AboutMe = () => {
  return (
    <div className="w-full sm:w-1/3 p-2 border flex flex-col rounded-xl shadow-md bg-white border-primaryColor mb-4 sm:mb-0">
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
        </>
      </p>
    </div>
  )
}

export default AboutMe
