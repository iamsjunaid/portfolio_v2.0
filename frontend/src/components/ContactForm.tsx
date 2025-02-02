import { useState, useEffect } from "react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import axios from "axios";

import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  name: z.string().min(2, { message: "Name must be at least 2 characters long" }),
  message: z.string().min(5, { message: "Message must be at least 5 characters long" }),
});

const ContactForm = () => {
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    try {
      await axios.post("https://formspree.io/f/xyzzbqvz", values);
      setResponse("Message sent successfully");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (response) {
      const timer = setTimeout(() => {
        setResponse("");
      }, 5000); // Hide after 5 seconds

      return () => clearTimeout(timer); // Clear the timer if the component unmounts
    }
  }, [response]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full sm:w-1/2">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem >
              <FormLabel>Email</FormLabel>
              <FormControl className="rounded">
                <Input placeholder="Enter your email here" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem >
              <FormLabel>Name</FormLabel>
              <FormControl className="rounded">
                <Input placeholder="Enter your name here" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl className="rounded">
                <textarea
                  {...field}
                  placeholder="Your message"
                  className="w-full h-32 p-4 border rounded bg-black"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {response && <p className="">{response}</p>}
        <Button
          type="submit"
          disabled={loading}
          className={`bg-white text-black rounded w-full py-4 hover:text-white hover:border group ${loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin mr-2" />
              Sending...
            </>
          ) : (
            "Send"
          )}
        </Button>

      </form>
    </Form>
  );
};

export default ContactForm;
