import {
  BsFacebook,
  BsInstagram,
  BsGithub,
  BsLinkedin,
  BsStripe,
} from "react-icons/bs";
import { AiFillHtml5, AiOutlineFieldTime } from "react-icons/ai";
import {
  BiLogoCss3,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoFirebase,
  BiLogoMongodb,
} from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io";
import { SiAuth0, SiNetlify, SiExpress } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";

export const links = [
  {
    id: 1,
    name: "Projects",
    url: "#projects",
  },
  {
    id: 2,
    name: "About",
    url: "#about",
  },
  {
    id: 3,
    name: "Contact",
    url: "#contact",
  },
  {
    id: 4,
    name: "Home",
    url: "#home",
  },
];

export const socials = [
  {
    id: 1,
    url: "https://www.facebook.com/profile.php?id=100011434323497",
    icon: <BsFacebook />,
  },
  {
    id: 2,
    url: "https://www.instagram.com/catalinopreapt/",
    icon: <BsInstagram />,
  },
  {
    id: 3,
    url: "https://github.com/copreapt",
    icon: <BsGithub />,
  },
  {
    id: 4,
    url: "https://www.linkedin.com/in/catalin-oprea-55039228b/",
    icon: <BsLinkedin />,
  },
];

export const techStack = [
  {
    id: 1,
    icon: <AiFillHtml5 />,
  },
  {
    id: 2,
    icon: <BiLogoCss3 />,
  },
  {
    id: 3,
    icon: <IoLogoJavascript />,
  },
  {
    id: 4,
    icon: <BiLogoTailwindCss />,
  },
  {
    id: 5,
    icon: <BiLogoReact />,
  },
  {
    id: 6,
    icon: <BiLogoFirebase />,
  },
  {
    id: 7,
    icon: <IoLogoNodejs />,
  },
  {
    id: 8,
    icon: <SiExpress />,
  },
  {
    id: 9,
    icon: <BiLogoMongodb />,
  },
];

export const profileLinks = [
  {
    id: 1,
    url: "https://www.linkedin.com/in/catalin-oprea-55039228b/",
    icon: <BsLinkedin />,
  },
  {
    id: 2,
    url: "https://github.com/copreapt",
    icon: <BsGithub />,
  },
  {
    id: 3,
    url: "https://wakatime.com/@copreapt",
    icon: <AiOutlineFieldTime />,
  },
];

export const projects = [
  {
    id: 1,
    img: "/assets/mess-app.png",
    doneUsing: "React Js + Firebase",
    gitHub: "https://github.com/copreapt/messenger-app",
    liveDemo: "https://cata-react-mess-app.netlify.app/",
    description:
      "Messenger App - It was a bit challenging to figure out how to store and structure the data on my database (Firebase) so two users would get to see each other's messages. The app needs CSS improvements, a demo functionality and a mobile version. ",
    version: "Desktop Version",
  },
  {
    id: 2,
    img: "/assets/node-api.png",
    doneUsing: "Node.js + Express.js + mongoDB",
    gitHub: "https://github.com/copreapt/node-api-project",
    liveDemo: "https://node-api-project-8mes.onrender.com/",
    description:
      "E-commerce-API - My first complex API done with help of a tutorial. It was done using express and mongoDB.",
    version: "Desktop Version",
  },
  {
    id: 3,
    img: "/assets/aki-app.png",
    doneUsing: "React Js + Firebase",
    gitHub: "https://github.com/copreapt/akinator-app",
    liveDemo: "https://catalin-akinator-app.netlify.app/",
    description:
      "Akinator App - Depending on what answers you select along the way, it will give you back 1 out of 3 presidents for each country. The app needs some CSS fixing, a demo account and option to change language (from Romanian to English), once I'm done doing them I'll push the changes to github.",
    version: "Desktop Version",
  },
  {
    id: 4,
    img: "/assets/nautica-app.png",
    doneUsing: "React Js",
    gitHub: "https://github.com/copreapt/nautica-replica-app",
    liveDemo: "https://nautica-app.netlify.app/",
    description:
      "Nautica Ereso App - I like their website, and tried to make a copy of the homepage, product and contact page.",
    version: "Desktop and Mobile Version",
  },
  {
    id: 5,
    img: "/assets/store.png",
    doneUsing: "React Js + Netlify Functions + Auth0 + Stripe",
    gitHub: "https://github.com/copreapt/react-comfy",
    liveDemo: "https://react-comfy-cop.netlify.app/",
    description:
      "Comfy Store - Was done following the instructions from an ongoing React course by John Smilga. The huge takeaway from this project was the Netlify Serverless Functions and Stripe payment integration. The API used is the one from Project Number 2 - E-commerce API",
    version: "Desktop and Mobile Version",
  },
  {
    id: 6,
    img: "/assets/jobster.png",
    doneUsing: "React Js + Course Server + Course API + Redux",
    gitHub: "https://github.com/copreapt/my-jobster-app",
    liveDemo: "https://catalin-jobster-app.netlify.app/landing",
    description:
      "Jobster - Was done following the instructions from an ongoing React course by John Smilga. The project's API,server and database were done on another course of John's (Node.js, express.js and mongoDB) which I've also completed and I'm already working on my own server and API for a future project",
    version: "Desktop and Mobile Version",
  },
];
