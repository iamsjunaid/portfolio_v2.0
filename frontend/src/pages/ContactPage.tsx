import { motion } from 'framer-motion';

import { ArrowUpRight } from "lucide-react"

import ContactForm from "@/components/ContactForm"

import { Button } from "@/components/ui/button"

const itemVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.42, 0, 0.58, 1] as [number, number, number, number],
    },
  },
};

const ContactPage = () => {
  return (
    <motion.div variants={itemVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.2 }} className="bg-slate-800 backdrop-blur-3xl text-white h-full rounded-t-[4rem] p-8 sm:p-16" id="contact">
      <p className="section-header">Contact</p>
      <p className="text-sm">
        If you have any questions, feedback, or just want to say hi, feel free to reach out to me.
      </p>
      <div className="w-full sm:flex justify-between sm:justify-around my-4">

        <ContactForm />
        <div className="flex justify-around mt-8 w-full sm:w-3/4 sm:px-16">
          <ul className="flex flex-col gap-2 ">
            <li className="text-left">
              <Button variant="link" asChild>
                <a href="#home" className="sm:text-xl" >Home</a>
              </Button>
            </li>
            <li className="text-left">
              <Button variant="link" asChild>
                <a href="#projects" className="sm:text-xl" >Work</a>
              </Button>
            </li>
            <li className="text-left">
              <Button variant="link" asChild>
                <a href="#about" className="sm:text-xl" >About</a>
              </Button>
            </li>
          </ul>


          <ul className="flex flex-col gap-2">
            <li className="flex items-center group">
              <Button variant="link" ><a className="sm:text-xl" href="https://linkedin.com/in/junaidahmedsyed">LinkedIn</a>
              </Button>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 ease-in-out group-hover:rotate-45" />
            </li>
            <li className="flex items-center group">
              <Button variant="link"><a className="sm:text-xl" href="https://github.com/iamsjunaid">GitHub</a></Button>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 ease-in-out group-hover:rotate-45" />
            </li>
          </ul>
        </div>


      </div>
      <footer className=" text-white py-4 text-left mt-8">
        <p className="text-xs">
          &copy; {new Date().getFullYear()} Junaid Syed. All Rights Reserved.
        </p>
      </footer>

    </motion.div>
  )
}

export default ContactPage
