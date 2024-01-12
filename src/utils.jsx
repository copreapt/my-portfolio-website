import {
  BsFacebook,
  BsInstagram,
  BsGithub,
  BsLinkedin,
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
import { SiExpress, SiMongodb } from "react-icons/si";
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
    img: "/assets/twenty-media.png",
    doneUsing: "React js + Express js, Mongodb, Node js",
    gitHub: "https://github.com/copreapt/twenty",
    liveDemo: "https://twenty-media.netlify.app/",
    name: "Twenty-media",
    description: "Twenty is a social media website where you can post pictures, leave likes and comments to other posts and also choose between white and dark theme. The project was done using MERN stack. React js was used for the front end part, Express js, Mongodb and Node js for backend. I also have to mention the project was done entirely on my own.",
  },
  {
    id: 2,
    img: "/assets/twenty-media-api.png",
    doneUsing: "Express js, Mongodb, Node js",
    gitHub: "https://github.com/copreapt/twenty_backend",
    liveDemo: "https://twenty-media-55cab2bb0aef.herokuapp.com/",
    name: "Twenty-media-API",
    description: "This is the API which was used for twenty media, the API was done using Express js, Node js and Postman",
  },
  {
    id: 3,
    img: "/assets/meryan.png",
    doneUsing: "Javascript, Tailwind CSS",
    liveDemo: "https://royaltravel.no/meryan/",
    name: "Meryan",
    description: "Meryan is a project which was done using vanilla Javascript and Tailwind CSS",
  },
  {
    id: 4,
    img: "/assets/mess-app.png",
    doneUsing: "React Js + Firebase",
    gitHub: "https://github.com/copreapt/messenger-app",
    liveDemo: "https://cata-react-mess-app.netlify.app/",
    name: "Messenger App",
    description: 'The website was done using Firebase and React js. The takeaway from this project was how to "connect 2 users in 1 chat room". I have to mention that the css of the project will be reworked as well as the project in the near future.',
  },
  {
    id: 5,
    img: "/assets/aki-app.png",
    doneUsing: "React Js + Firebase",
    gitHub: "https://github.com/copreapt/akinator-app",
    liveDemo: "https://catalin-akinator-app.netlify.app/",
    name: "Akinator",
    description: "The website was done using React js and Firebase. The project is meant to copy the Akinator game, but with the Presidents of a few countries. Once you register, you can start playing the game where you need to first choose a country and then answer a couple of questions. Depending on the answers you provided, you will get a President at the end of the game.",
  },
  {
    id: 6,
    img: "/assets/nautica-app.png",
    doneUsing: "React Js",
    gitHub: "https://github.com/copreapt/nautica-replica-app",
    liveDemo: "https://nautica-app.netlify.app/",
    name: "Nautica",
    description: "The website was done using React js. I tried to copy the Nautica Ereso website. The project was done a while ago and needs minor css fixes.",
  },
  {
    id: 7,
    img: "/assets/store.png",
    doneUsing: "React Js + Netlify Functions + Auth0 + Stripe",
    gitHub: "https://github.com/copreapt/react-comfy",
    liveDemo: "https://react-comfy-cop.netlify.app/",
    name: "Comfy Store",
    description: "The Comfy Store website was done using React js, Auth0 and Stripe. The project was done following a course from Udemy. The reason I added the project to my portfolio is because I'm 100% sure I can replicate it without any issues.",
  },
  {
    id: 8,
    img: "/assets/jobster.png",
    doneUsing: "React Js + Course Server + Course API + Redux",
    gitHub: "https://github.com/copreapt/my-jobster-app",
    liveDemo: "https://catalin-jobster-app.netlify.app/landing",
    stack: {},
    name: "Jobster",
    description: "The Jobster website was done using React js, Redux and the API from the course I've followed. ",
  },
];
