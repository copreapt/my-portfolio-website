import React from 'react'
import me from '/assets/me2.jpeg'
import { profileLinks, techStack } from '../utils';


const HomePage = () => {
  return (
    <main
      className="bg-[#171717] max-w-screen-xl mx-auto lg:py-10"
      id='home'
    >
      <div className="flex flex-col lg:flex-row items-center lg:justify-between">
        <div className="text-center items-center flex flex-col">
          <h1 className="font-bold text-3xl lg:text-6xl pt-5 lg:pt-0 text-white">
            Front-End React Developer
          </h1>
          {/* linked in, github */}
          <div className="lg:flex space-x-6 text-2xl mt-10 hidden text-white">
            {profileLinks.map((item) => {
              return (
                <a href={item.url} key={item.id}>
                  {item.icon}
                </a>
              );
            })}
          </div>
          {/* paragraph for desktop version */}
          <div className="text-center lg:text-2xl mt-5 hidden lg:block">
            <p className="font-semibold text-white">
              Hi there! My name is Oprea Catalin,
              <br />
              I'm 26 years old and I'm based in Galati, Romania
            </p>
          </div>
        </div>
        <img
          src={me}
          alt="photo of myself"
          className="w-[90%] mt-5 max-w-[400px] max-h-[400px] rounded-full lg:max-h-[500px] lg:mt-0 lg:shadow-md lg:shadow-black lg:hover:shadow-lg lg:hover:shadow-black lg:ease-in-out lg:duration-500 lg:hover:scale-105 z-10"
        />
      </div>
      <div className="text-center mt-5 lg:hidden">
        <p className="font-semibold text-white">
          Hi there! My name is Oprea Catalin,
          <br />
          I'm 26 years old and I'm based in Galati, Romania
        </p>
      </div>
      {/* tech stack */}
      <div className="text-center mt-5">
        <h1 className="text-xl font-bold text-white lg:m-2 p-2 lg:text-3xl ">
          Tech Stack
        </h1>
        <div className="flex justify-center mt-5 text-2xl lg:ml-5 lg:gap-6 lg:text-4xl">
          {techStack.map((item) => {
            return (
              <h1
                key={item.id}
                className="lg:hover:scale-150 lg:ease-in-out lg:duration-300 text-white"
              >
                {item.icon}
              </h1>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default HomePage