import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    const serviceId = "service_sfsfl6s";
    const templateId = "template_s6wyyp9";
    const publicId = "653vSQw-IllGaimre";
    const data = new FormData(e.target);
    const emailFormat = {
      name: data.get("name"),
      email: data.get("email"),
      message: data.get("message"),
    };

    emailjs
      .send(serviceId, templateId, emailFormat, publicId)
      .then(() => {
        toast.success("Email successfully sent!");
      })
      .catch((error) => {
        toast.error(`Oh no! There was an error. ${JSON.stringify(error)}`);
        console.log(error);
      });
  };

  return (
    <div id="contact" className="relative min-h-screen px-4 md:px-8  ">
      <div id="contact-text" className="text-center mb-8 mx-auto md:w-[75%]">
        <h1 className=" text-center text-4xl font-mona font-bold text-gray-800  dark:text-white py-5 uppercase">
          Explore the Digital Frontier? 🚀 Let's Turn Your Dreams into Digital
          Delights! ✨
        </h1>
        <h4 className="text-2xl text-gray-700 dark:text-gray-300 font-gilroy font-bold">
          Reach out today, and let's craft a plan to turn your dreams into
          reality!
        </h4>
      </div>
      <div id="contact-btns" className="text-center mb-8">
        <a
          href="https://www.linkedin.com/in/konain-raza-"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="overflow-hidden w-32 p-2 h-12 dark:bg-gray-900 bg-white text-black  dark:text-white border-none rounded-2xl text-xl font-bold cursor-pointer relative z-10 group">
            Connect 🤝
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-purple-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-purple-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
            <span className="group-hover:opacity-100 text-black  dark:text-white group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
              Merge ✨
            </span>
          </button>
        </a>
      </div>
      <form
        id="contact-form"
        onSubmit={sendEmail}
        className="max-w-2xl h-max mx-auto bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg space-y-4 z-0"
      >
        <div id="contact-part1" className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
            className="w-full p-3 border border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
            className="w-full p-3 border border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="Subject"
          required
          className="w-full p-3 border border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          required
          className="w-full p-3 border border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <button
          type="submit"
          id="email-send"
          className="w-full p-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-400"
        >
          Send
        </button>
      </form>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Contact;
