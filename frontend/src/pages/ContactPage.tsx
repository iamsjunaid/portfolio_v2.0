import { ArrowUpRight } from "lucide-react"

import ContactForm from "@/components/ContactForm"

import { Button } from "@/components/ui/button"

const ContactPage = () => {
  return (
    <section className="bg-black text-white h-full rounded-tr-[8rem] p-8 sm:p-16" id="contact">
      <p>Contact</p>
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
              <Button variant="link" ><a className="sm:text-xl"  href="https://linkedin.com/in/junaidahmedsyed">LinkedIn</a>
              </Button>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 ease-in-out group-hover:rotate-45" />
            </li>
            <li className="flex items-center group">
              <Button variant="link"><a className="sm:text-xl"  href="https://github.com/iamsjunaid">GitHub</a></Button>
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

    </section>
  )
}

export default ContactPage
