import { projects } from '../utils';

const Projects = () => {
  return (
    <section
      className="flex flex-col w-full md:max-w-screen-xl mx-auto space-y-20"
      id="projects"
    >
      {/* projects done on my own */}
      {/* container */}
      <div className="flex flex-col mx-auto">
        {/* h1 */}
        <div className="text-2xl md:text-3xl text-white font-semibold mb-20 text-center uppercase underline decoration-[#6495ED]">
          <h1>Projects</h1>
        </div>
        {/* projects */}
        <div className="flex flex-col items-center justify-center mx-5 md:mx-auto space-y-40">
          {projects.map((project, index) => {
            return (
              // container
              <div key={index} className="flex flex-col md:flex-row gap-20">
                {/* container for image and buttons */}
                <div className="space-y-2 ">
                  {/*  image container */}
                  <div className="flex flex-col overflow-hidden items-center justify-center bg-gradient-to-r from-zinc-900 from-10% via-zinc-500 via-30% to-zinc-900 to-90% md:h-[250px] md:w-[550px] md:pt-8 md:px-12 rounded-md w-fit">
                    {/* image */}
                    <a href={project.liveDemo} target="blank" rel="no-referrer">
                      <img
                        src={project.img}
                        alt="project image"
                        className="md:min-h-full md:min-w-full flex md:shrink-0 md:hover:scale-110 cursor-pointer ease-linear duration-500"
                      />
                    </a>
                  </div>
                  {/* buttons */}
                  <div className="text-white text-xl font-sans w-full flex justify-between uppercase">
                    {project.gitHub ? (
                      <a href={project.gitHub} target="blank" rel="no-referrer">
                        Git Hub
                      </a>
                    ) : (
                      ""
                    )}
                    <a href={project.liveDemo} target="blank" rel="no-referrer">
                      Live Project
                    </a>
                  </div>
                </div>
                {/* details */}
                <div className="text-white px-5">
                  <span>
                    <span className="text-2xl text-[#6495ED]">
                      {project.name}
                    </span>{" "}
                    -{" "}
                    <span className="text-lg text-gray-300">
                      {project.description}
                    </span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* projects done on courses and tutorials */}
      {/* container */}
      <div></div>
    </section>
  );
};

export default Projects