import ContactForm from "@/components/ContactForm"

const ContactPage = () => {
  return (
    <section className="bg-black text-white h-full rounded-tr-[8rem] p-16">
      <p>Contact</p>
      <div className="w-full sm:flex justify-between my-4 border border-red-500">

        <ContactForm />
        <div>LINKS</div>
      </div>
      <div>FOOTER</div>
    </section>
  )
}

export default ContactPage
