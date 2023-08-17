import React, { useState } from 'react'
import logo from '../assets/logo.png'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { links, socials } from '../utils'
import { Link } from 'react-router-dom'

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
          <div className='flex justify-end m-4'>
            <AiOutlineClose
              className="text-2xl"
              onClick={() => setIsSidebarOpen(false)}
            />
          </div>
          {/* gray line */}
          <div className='h-10 border-b-2 border-gray-500'></div>
          {/* links */}
          <div className='flex flex-col text-center space-y-10 mt-10'>
            {links.map((link) => {
              return <Link 
              to={link.url} 
              className='text-2xl font-semibold' 
              key={link.id} 
              onClick={() => setIsSidebarOpen(false)}
              >
              {link.name}
              </Link>
            })}
          </div>
            {/* socials */}
            <div className='flex justify-evenly mt-20'>
              {socials.map((item) => {
                return <Link 
                to={item.url} 
                className='text-2xl' 
                key={item.id}
                target='_blank'
                >
                  {item.icon}
                  </Link>
              })}
            </div>
        </div>
      </aside>
      {/* END OF SIDEBAR */}
      <div className=" w-full h-[4rem] flex items-center justify-between">
        <img src={logo} alt="logo" className="w-[50%] h-full" />
        <AiOutlineMenu
          className="w-7 h-7  mr-3 lg:hidden"
          onClick={() => setIsSidebarOpen(true)}
        />
      </div>
    </>
  );
}

export default Navbar