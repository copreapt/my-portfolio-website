import { BsFacebook, BsInstagram, BsGithub, BsLinkedin, BsStripe} from "react-icons/bs";
import { AiFillHtml5, AiOutlineFieldTime } from "react-icons/ai";
import {
  BiLogoCss3,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoFirebase,
} from "react-icons/bi";
import {IoLogoJavascript} from 'react-icons/io'
import { SiAuth0, SiNetlify } from "react-icons/si";
// import img1 from "../src/assets/mess-app.png"
// import img2 from "../src/assets/akinator-app.png"



export const links = [
  {
    id: 1,
    name: "About",
    url: "/about",
  },
  {
    id: 2,
    name: "Projects",
    url: "/projects",
  },
  {
    id: 3,
    name: "Contact",
    url: "/contact",
  },
  {
    id: 4,
    name: "Home",
    url: "/",
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
    url: "",
    icon: <BsInstagram />,
  },
  {
    id: 3,
    url: "",
    icon: <BsGithub />,
  },
  {
    id: 4,
    url: "",
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
    icon: <SiNetlify />,
  },
  {
    id: 8,
    icon: <SiAuth0 />,
  },
  {
    id: 9,
    icon: <BsStripe />,
  },
];

export const profileLinks = [
  {
    id: 1,
    url: "",
    icon: <BsLinkedin />,
  },
  {
    id: 2,
    url: "",
    icon: <BsGithub />,
  },
  {
    id: 3,
    url: "",
    icon: <AiOutlineFieldTime />,
  },
];


export const projects = [
  {
    id: 1,
    img: "../src/assets/mess-app.png",
    doneUsing: "React Js + Firebase",
    gitHub: "https://github.com/copreapt/messenger-app",
    liveDemo: "https://cata-react-mess-app.netlify.app/",
  },
  {
    id: 2,
    img: "../src/assets/aki-app.png",
    doneUsing: "React Js + Firebase",
    gitHub: "https://github.com/copreapt/akinator-app",
    liveDemo: "https://catalin-akinator-app.netlify.app/",
  },
];