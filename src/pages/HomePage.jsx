import me from '/assets/me2.jpeg'
import { profileLinks, techStack } from '../utils';


const HomePage = () => {
  return (
    <main className="max-w-screen-xl mx-auto md:mb-10" id="home">
      <div className="flex flex-col lg:flex-row items-center lg:justify-between mb-20">
        <div className="text-center items-center flex flex-col">
          <h1 className="font-bold text-3xl lg:text-6xl pt-5 lg:pt-0 text-white mb-10">
            Front-End React Developer
          </h1>
          {/* linked in, github */}
          <div className="lg:flex space-x-6 text-4xl hidden text-[#6495ED] py-5 px-10">
            {profileLinks.map((item) => {
              return (
                <a href={item.url} key={item.id} target='blank' rel='no-referrer'>
                  {item.icon}
                </a>
              );
            })}
          </div>
          {/* paragraph for desktop version */}
          <div className="text-center lg:text-2xl mt-5 hidden lg:block">
            <p className="font-semibold text-gray-300">
              Hi there! My name is Oprea Catalin,
              <br />
              I'm 26 years old and I'm based in Romania
            </p>
          </div>
        </div>
        {/* img div */}
        <div className="flex items-center justify-center overflow-hidden h-[300px] w-[300px] md:h-[400px] md:w-[400px] rounded-full md:mt-20 border-2 border-white">
          <img
            src={me}
            alt="photo of myself"
            className="flex shrink-0 min-w-full min-h-full"
          />
        </div>
      </div>
      <div className="text-center mt-5 mb-5 md:mb-0 lg:hidden">
        <p className="font-semibold text-white">
          Hi there! My name is Oprea Catalin,
          <br />
          I'm 26 years old and I'm based in Galati, Romania
        </p>
      </div>
      {/* tech stack */}
      <div className="text-center">
        <h1 className="text-2xl font-bold text-white lg:m-2 p-2 lg:text-3xl underline">
          Tech Stack
        </h1>
        <div className="flex justify-center mt-5 text-2xl lg:ml-5 lg:gap-6 lg:text-4xl">
          <div className="slider">
            <div className="slide-track">
              {/* slides */}
              {techStack.map((item) => {
                return (
                  <div key={item.id} className="slide text-4xl">
                    <h1>{item.icon}</h1>
                  </div>
                );
              })}
              {/* more slides */}
              {techStack.map((item) => {
                return (
                  <div key={item.id} className="slide text-4xl">
                    <h1>{item.icon}</h1>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage