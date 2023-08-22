import React from 'react'
import { Link } from 'react-router-dom';
import { projects } from '../utils';

const Projects = () => {
  return (
    <main className="h-screen flex flex-col overflow-y-auto bg-[#171717]">
      <div className="mt-20 text-center">
        <h1 className="text-white text-3xl font-semibold">Projects</h1>
      </div>
      <section className="w-[80%]  mx-auto mt-10 h-max space-y-10">
        {projects.map((project) => {
          return (
            <div className="rounded-xl flex flex-col" key={project.id}>
              <img src={project.img} alt="app preview" className="rounded-xl" />
              <h1 className="text-white text-xl text-center pt-5">
                Done Using
              </h1>
              <p className="text-center text-white text-xl">
                {project.doneUsing}
              </p>
              <div className="flex justify-evenly space-x-3 mt-10 mx-4">
                <button className="p-2 bg-[#6495ED] rounded-full w-[80%] text-white">
                  <Link to={project.gitHub}>GitHub</Link>
                </button>
                <button className="p-2 bg-[#6495ED] rounded-full w-[80%] text-white">
                  <Link to={project.liveDemo}>Live Demo</Link>
                </button>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default Projects