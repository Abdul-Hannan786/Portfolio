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
        toast.error(`Oh no! There was an error. ${error}`);
      });
  };

  return (
    <div id="contact" className="relative py-28 px-4 md:px-8 lg:pt-36  ">
  
      <div id="contact-text" className="text-center mb-8 mx-auto">
        <h1 className="text-7xl w-[90%] md:text-7xl mx-auto lg:text-8xl font-obviouslyBold text-gray-900 dark:text-gray-100">
          Explore the Digital Frontier? 🚀 Let's Turn Your Dreams into Digital Delights! ✨
        </h1>
        <h4 className="mt-4 text-2xl text-gray-700 dark:text-gray-300 font-gilroy font-bold">
          Reach out today, and let's craft a plan to turn your dreams into reality!
        </h4>
      </div>
      <div id="contact-btns" className="text-center mb-8">
        <button className="relative inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-400">
          <span className="text-lg">Ignite the Connection</span>
          <i className="ri-arrow-right-up-line text-xl ml-2"></i>
          <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-30 rounded-lg"></span>
        </button>
      </div>
      <form id="contact-form" onSubmit={sendEmail} className="max-w-lg mx-auto bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg space-y-4 z-0">
        <div id="contact-part1" className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="Subject"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <button type="submit" id="email-send" className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-400">
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
