import { FiGithub, FiLinkedin } from "react-icons/fi";

const AboutMe = () => {
  return (
    <div className="w-full sm:w-1/2 p-2 border flex flex-col rounded shadow-md bg-secondaryColor border-primaryColor dotted-bg mb-4 sm:mb-0">
      <p className="section-header">About Me</p>
      <p className="text-sm">
        A brief overview of my work experience.
      </p>
      <div className="flex gap-2 my-2">
        <a href="https://linkedin.com/in/junaidahmedsyed" className="p-2 bg-secondaryColor rounded"><FiLinkedin className="w-4 h-4 text-primaryColor" /></a>
        <a href="https://github.com/iamsjunaid" className="p-2 bg-secondaryColor rounded"><FiGithub className="w-4 h-4 text-primaryColor" /></a>
      </div>
      <p className="text-[14px] my-4 backdrop-blur-md rounded-lg bg-white/10 justify-center text-left">
        <span className="font-semibold">Hi</span>, I'm Junaid, a full-stack developer. I build dynamic websites and apps using ReactJS, JavaScript, and Ruby on Rails.
        <br />
        A Microverse alum, I excel in remote collaboration and pair programming. With a Computer Science degree and hands-on experience, I’m passionate about learning and solving complex problems.
        <br />
        Previously a junior developer, I now leverage tech to deliver robust solutions. Let’s connect if my skills match your needs—contact me <a href="#contact" className="underline text-primaryColor">here</a>.
        <br />
        Email me at sjunaid626@gmail.com, or view my code at https://github.com/iamsjunaid.
        <br />
        Thanks!
      </p>
    </div>
  )
}

export default AboutMe
