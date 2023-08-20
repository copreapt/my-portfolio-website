import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import {BiLogoGmail} from 'react-icons/bi'
import img from '../assets/contact.svg'


const Contact = () => {

  const resetForm = () => {
    setTimeout(() => {
      document.getElementById("contact-form").reset();
    }, 3000);
  };

  return (
    <>
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
              className="w-[30%] bg-gray-600 text-white p-2 rounded hover:bg-white hover:text-black hover:border hover:border-black ease-in-out duration-500"
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
      <footer className="flex  justify-center">
        <div className="flex space-x-10">
          <div className="flex items-center space-x-2 cursor-pointer">
            <BiLogoGmail className="text-3xl text-white bg-gray-500 rounded-full w-10 h-10 p-1 shadow-md shadow-black" />
            <h1 className="font-bold text-xl">copreapt@gmail.com</h1>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer">
            <FaFacebookF className="text-3xl text-white bg-gray-500 rounded-full w-10 h-10 p-1 shadow-md shadow-black" />
            <h1 className="font-bold text-xl">
              <a
                href="https://www.facebook.com/profile.php?id=100011434323497"
                target="_blank"
              >
                Catalin Oprea
              </a>
            </h1>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer">
            <AiFillInstagram className="text-3xl text-white bg-gray-500 rounded-full w-10 h-10 p-1 shadow-md shadow-black" />
            <h1 className="font-bold text-xl">
              <a
                href="https://www.instagram.com/catalinopreapt/"
                target="_blank"
              >
                @catalinopreapt
              </a>
            </h1>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Contact