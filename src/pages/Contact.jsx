import React from 'react'
import { FaPhone, FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import img from '../assets/contact.svg'

const Contact = () => {

  const resetForm = () => {
    setTimeout(() => {
      document.getElementById("contact-form").reset();
    }, 3000);
  };

  return (
    <section className="flex justify-evenly space-x-5">
      {/* form */}
      <div className="w-[60%] m-[8%] mt-[6%]">
        <form
          className="flex flex-col text-left p-3 space-y-4 bg-gray-200 rounded ease-in-out duration-200 shadow-md shadow-black hover:shadow-lg hover:shadow-black"
          action="https://formspree.io/f/xrgwqgqa"
          method="POST"
          target="_blank"
          onSubmit={resetForm}
          id="contact-form"
        >
          <h1 className="pt-3 pb-4 font-semibold text-xl">Send Message</h1>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            className="placeholder:text-black border-2 rounded border-black p-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="placeholder:text-black border-2 rounded border-black p-2"
          />
          <textarea
            name="message"
            rows="2"
            placeholder="Type your Message:"
            className="placeholder:text-black border-2 rounded border-black p-2"
          ></textarea>
          <button
            type="submit"
            className="w-[30%] bg-gray-600 text-white p-2 rounded hover:bg-white hover:text-black hover:border hover:border-black"
          >
            Send Message
          </button>
        </form>
      </div>
      {/* svg */}
      <div className="w-[80%] flex items-center h-full">
        <img src={img} alt="contact image" className="pr-10 pt-[10%]" />
      </div>
    </section>
  );
}

export default Contact