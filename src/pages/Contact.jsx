import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import {BiLogoGmail} from 'react-icons/bi'
import img from '/assets/contact.svg'


const Contact = () => {
  const resetForm = () => {
    setTimeout(() => {
      document.getElementById("contact-form").reset();
    }, 3000);
  };

  return (
    <>
      <main className="max-w-screen-xl mx-auto py-10" id="contact">
        <section className="lg:flex gap-5 mb-10">
          {/* form */}
          <div className="basis-1/2 px-10">
            <form
              className="flex flex-col text-left p-3 space-y-4 bg-[#6495ED] rounded ease-in-out duration-200"
              action="https://formspree.io/f/xrgwqgqa"
              method="POST"
              target="_blank"
              onSubmit={resetForm}
              id="contact-form"
            >
              <h1 className="pt-3 pb-4 font-semibold text-white text-xl">
                Send Message
              </h1>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                className="placeholder:text-black text-black  border-2 rounded p-2"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="placeholder:text-black border-2 rounded  text-black p-2"
              />
              <textarea
                name="message"
                rows="2"
                placeholder="Type your Message:"
                className="placeholder:text-black  border-2 text-black rounded  p-2"
              ></textarea>
              <button
                type="submit"
                className="lg:w-[30%] w-full  text-black p-2 rounded bg-white"
              >
                Send Message
              </button>
            </form>
          </div>
          {/* svg */}
          <div className="hidden lg:block basis-1/2 p-20">
            <img src={img} alt="contact image" />
          </div>
        </section>

        <footer className="flex justify-center">
          <div className="flex flex-col lg:flex-row lg:space-x-10 space-y-3 lg:space-y-0">
            <div className="flex items-center space-x-2 cursor-pointer">
              <BiLogoGmail className="text-3xl text-white bg-[#6495ED] rounded-full w-10 h-10 p-1 shadow-md shadow-black" />
              <h1 className="font-bold text-xl text-white">
                copreapt@gmail.com
              </h1>
            </div>
            <div className="flex items-center space-x-2 cursor-pointer">
              <FaFacebookF className="text-3xl text-white bg-[#6495ED] rounded-full w-10 h-10 p-1 shadow-md shadow-black" />
              <h1 className="font-bold text-xl text-white">
                <a
                  href="https://www.facebook.com/profile.php?id=100011434323497"
                  target="_blank"
                  rel="noreferrer"
                >
                  Catalin Oprea
                </a>
              </h1>
            </div>
            <div className="flex items-center space-x-2 cursor-pointer">
              <AiFillInstagram className="text-3xl text-white bg-[#6495ED] rounded-full w-10 h-10 p-1 shadow-md shadow-black" />
              <h1 className="font-bold text-xl text-white">
                <a
                  href="https://www.instagram.com/catalinopreapt/"
                  target="_blank"
                  rel="noreferrer"
                >
                  @catalinopreapt
                </a>
              </h1>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Contact