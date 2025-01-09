import { ArrowRight } from "lucide-react"

import ContactForm from "@/components/ContactForm"

import { Button } from "@/components/ui/button"

const ContactPage = () => {
  return (
    <section className="bg-black text-white h-full rounded-tr-[8rem] p-16" id="contact">
      <p>Contact</p>
      <div className="w-full sm:flex justify-around my-4">

        <ContactForm />
        <div className="flex justify-around mt-8 w-full sm:w-3/4 sm:px-16">
          <ul className="flex flex-col gap-2 text-lg">
            <li>
              <Button variant="link" asChild>
                <a href="#home" className='text-[1rem]'>Home</a>
              </Button>
            </li>
            <li>
              <Button variant="link" asChild>
                <a href="#projects" className='text-[1rem]'>Work</a>
              </Button>
            </li>
            <li>
              <Button variant="link" asChild>
                <a href="#about" className='text-[1rem]'>About</a>
              </Button>
            </li>
          </ul>


          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-2  group">
              <Button variant="link" className='text-[1rem]'><a href="https://linkedin.com/in/junaidahmedsyed">LinkedIn</a>
              </Button>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-in-out group-hover:-rotate-45" />
            </li>
            <li className="flex items-center gap-2  group">
              <Button variant="link" className='text-[1rem]'><a href="https://github.com/iamsjunaid">Github</a></Button>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-in-out group-hover:-rotate-45" />
            </li>
          </ul>
        </div>


      </div>
      <footer className=" text-white py-4 text-left mt-8">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Junaid Syed. All Rights Reserved.
        </p>
      </footer>

    </section>
  )
}

export default ContactPage
