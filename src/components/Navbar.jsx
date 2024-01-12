import { useState } from "react";
import logo from '/assets/logo.png'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { links, socials } from '../utils'


const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  return (
    <>
      {/* SIDEBAR FOR MOBILE VERSION */}
      <aside
        className={`top-0 right-0 w-full ease-linear duration-200 bg-white text-black fixed h-full z-40 lg:hidden ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col">
          <div className="flex justify-end m-4">
            <AiOutlineClose
              className="text-2xl"
              onClick={() => setIsSidebarOpen(false)}
            />
          </div>
          {/* gray line */}
          <div className="h-10 border-b-2 border-gray-500"></div>
          {/* links */}
          <div className="flex flex-col text-center space-y-10 mt-10">
            {links.map((link) => {
              return (
                <a
                  href={link.url}
                  className="text-2xl font-semibold"
                  key={link.id}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  {link.name}
                </a>
              );
            })}
          </div>
          {/* socials */}
          <div className="flex justify-evenly mt-20">
            {socials.map((item) => {
              return (
                <a
                  href={item.url}
                  className="text-2xl"
                  key={item.id}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.icon}
                </a>
              );
            })}
          </div>
        </div>
      </aside>
      {/* END OF SIDEBAR */}
      <div
        className=" z-20 w-full sticky top-0 h-[4rem] bg-black flex items-center justify-between px-10 border-b border-gray-600"
      >
        <a
          className="text-3xl text-white font-semibold hover:text-cyan-600 ease-in-out duration-700 cursor-pointer"
          href="#"
        >
          Catalin.dev
        </a>
        <AiOutlineMenu
          className="w-[2rem] h-[4rem] text-white lg:hidden"
          onClick={() => setIsSidebarOpen(true)}
        />
        {/* links for desktop navbar */}
        <div className="hidden lg:flex gap-4">
          {links.map((item) => {
            return (
              <a
                href={item.url}
                key={item.id}
                className={`font-semibold text-xl text-white ${
                  item.name === "Home" ? "hidden" : ""
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navbar