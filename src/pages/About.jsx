import { useState } from 'react'
import about from '/assets/about-me.jpg'

const About = () => {
  const [active, setActive] = useState("Professional");

  return (
    <main className="overflow-y-auto max-w-screen-xl mx-auto py-10" id="about">
      <section className="lg:flex lg:w-fit lg:mx-10">
        {/* visible only in desktop */}
        <div className="hidden lg:block pt-10 w-[80%]">
          <img src={about} alt="about me" className="w-full" />
        </div>
        <div className="mx-8 pt-10 flex flex-col text-white text-center lg:w-[60%] lg:justify-center space-y-3">
          <h1 className="font-semibold text-2xl">About Me</h1>
          <h1 className="text-xl">
            I'm a passionate Junior Web Developer, based in Romania.
          </h1>
          <p className="leading-7 lg:text-xl lg:p-2 lg:text-left lg:pl-10 lg:leading-8">
            As a Junior Full Stack Developer, I possess an impressive arsenal of
            skills in HTML, CSS, JavaScript, React js, Tailwind CSS, Express js,
            Mongodb, Firebase and Node js. I'm a pro active person, I like to take initiative in all my projects. Also,
            I'm a very competitive person and I'm always trying to improve my skills and outgrow myself everyday.
          </p>
        </div>
      </section>
    </main>
  );
};

export default About
