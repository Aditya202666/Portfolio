import React, { useState } from "react";
import { motion } from "motion/react";
import emailjs from '@emailjs/browser';import toast from "react-hot-toast";

const greetings = "Say Hello";
const SERVICE_ID = import.meta.env.VITE_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAIL_PUBLIC_KEY
const ContactPage = () => {
  const [formData, setFormData] = useState({
    hrEmail: "",
    message: "",
  });

  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
        const res = await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
        setFormData({ hrEmail: "", message: "" });
        if(res.status === 200){
          toast.success("Email Sent.")
        }
    } catch (error) {
      console.log(`error in sendEmail: ${error}`);
    }

  };

  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: 0, transition: { duration: 1 } }}
    >
      <di
        v
        className="h-[calc(100vh-4rem)] flex flex-col justify-center lg:flex-row p-4 md:p-8 lg:p-12 "
      >
        <div className="self-center text-center text-2xl md:text-4xl xl:text-6xl lg:w-1/2 ">
          {greetings.split("").map((char, index) => (
            <motion.span
            key={index}
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 3, delay: index * 0.1, repeat: Infinity }}
            >
              {char}
            </motion.span>
          ))}
          😄
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex justify-center flex-col mt-4 gap-4 p-4 lg:w-1/2 "
        >
          <label htmlFor="message" className="text-xl">
            Hello Aditya,
          </label>
          <textarea
            name="message"
            id="message"
            rows="6"
            value={formData.message}
            onChange={(e) =>
              setFormData({...formData, message: e.target.value })
            }
            className="bg-transparent resize-none border-b-2 outline-none"
          ></textarea>
          <label htmlFor="email" className="text-xl">
            Your Email id:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required={true}
            value={formData.hrEmail}
            onChange={(e) =>
              setFormData({...formData, hrEmail: e.target.value })
            }
            className="border-b-2 bg-transparent outline-none w-full py-2 cursor-text"
          />
          <button
            type="submit"
            className="w-full font-medium text-lg py-2 rounded-md mt-4 bg-gradient-to-tr from-purple-300 to-blue-300 hover:form-blue-300 hover:to-red-400 hover:scale-105 transition-all duration-500 focus:scale-95"
          >
            Send
          </button>
        </form>
      </di>
    </motion.div>
  );
};

export default ContactPage;
