import { ArrowRight } from "lucide-react"

import ContactForm from "@/components/ContactForm"

import { Button } from "@/components/ui/button"

const ContactPage = () => {
  return (
    <section className="bg-black text-white h-full rounded-tr-[8rem] p-16" id="contact">
      <p>Contact</p>
      <div className="w-full sm:flex justify-around my-4">

        <ContactForm />
        <div className="flex justify-around mt-8 w-full sm:w-3/4">
          <ul className="flex flex-col gap-2 text-lg">
            <li>
              <a href="#home" className="hover:text-blue-500">Home</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue-500">Work</a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-500">About</a>
            </li>
          </ul>

          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-2  group">
              <Button variant="link" className="text-lg"><a href="https://linkedin.com/in/junaidahmedsyed">LinkedIn</a>
              </Button>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-in-out group-hover:-rotate-45" />
            </li>
            <li className="flex items-center gap-2  group">
              <Button variant="link" className="text-lg"><a href="https://github.com/iamsjunaid">Github</a></Button>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-in-out group-hover:-rotate-45" />
            </li>
          </ul>
        </div>


      </div>
      <footer className=" text-white py-4 text-left mt-8">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Junaid Ahmed. All Rights Reserved.
        </p>
      </footer>

    </section>
  )
}

export default ContactPage
