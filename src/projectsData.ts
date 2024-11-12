import { IoLogoGithub, IoLogoYoutube, IoMdOpen } from "react-icons/io";
import itone from "./assets/itone.png";
import ai_visual_doppelganger from "./assets/ai_visual_doppelganger.jpg";
import platemate from "./assets/platemate.jpeg";
import platemate_architecture from "./assets/platemate_architecture.png";
import campus_network_simulator from "./assets/network_simulator.png";
import {
  SiAndroidstudio,
  SiCisco,
  SiCss3,
  SiDiagramsdotnet,
  SiFlask,
  SiGoogledrive,
  SiHtml5,
  SiJavascript,
  SiPrezi,
  SiPython,
  SiReact,
  SiRender,
  SiTailwindcss,
  SiVercel,
  SiVite,
} from "react-icons/si";
import { FiDownload } from "react-icons/fi";
import { BsFiletypeXml } from "react-icons/bs";
import { AiOutlineJava } from "react-icons/ai";

export const projectsData = [
  {
    id: 1,
    title: "iTone",
    desc: "Music streaming web application inspired by Spotify",
    image: itone,
    genre: "Web",
    links: [
      { icon: IoMdOpen, text: "Live", url: "https://itone.vercel.app/" },
      {
        icon: IoLogoGithub,
        text: "GitHub",
        url: "https://github.com/Ryo-samuraiJP/iTone",
      },
    ],
    tech_used: [
      { icon: SiReact, name: "React" },
      { icon: SiVite, name: "Vite" },
      { icon: SiTailwindcss, name: "Tailwind CSS" },
      { icon: SiJavascript, name: "JavaScript" },
      { icon: SiVercel, name: "Vercel" },
    ],
  },
  {
    id: 2,
    title: "AI Visual Doppelganger",
    desc: "AI-powered replication web application",
    image: ai_visual_doppelganger,
    genre: ["Web", "AI / ML"],
    links: [
      {
        icon: IoMdOpen,
        text: "Live",
        url: "https://ai-visual-doppelganger.onrender.com/",
      },
      {
        icon: IoLogoGithub,
        text: "GitHub",
        url: "https://github.com/Ryo-samuraiJP/AI-Visual-Doppelganger",
      },
      {
        icon: IoLogoYoutube,
        text: "Demo Video",
        url: "https://www.youtube.com/watch?v=VT6eddrVVOA&feature=youtu.be",
      },
    ],
    tech_used: [
      { icon: SiFlask, name: "Flask" },
      { icon: SiPython, name: "Python" },
      { icon: SiJavascript, name: "JavaScript" },
      { icon: SiHtml5, name: "HTML" },
      { icon: SiCss3, name: "CSS" },
      { icon: SiRender, name: "Render" },
    ],
  },
  {
    id: 3,
    title: "PlateMate",
    desc: "Food delivery mobile application for Android OS",
    image: platemate,
    genre: "Mobile",
    links: [
      {
        icon: IoLogoGithub,
        text: "GitHub",
        url: "https://github.com/Ryo-samuraiJP/PlateMate",
      },
      {
        icon: IoLogoYoutube,
        text: "Demo Video",
        url: "https://www.youtube.com/watch?v=N_yUfrnbgWI&feature=youtu.be",
      },
    ],
    tech_used: [
      { icon: AiOutlineJava, name: "Java" },
      { icon: BsFiletypeXml, name: "XML" },
      { icon: SiAndroidstudio, name: "Android Studio" },
    ],
  },
  {
    id: 4,
    title: "PlateMate Architecural Model",
    desc: "Food delivery system architectural design",
    image: platemate_architecture,
    genre: "Other",
    links: [
      {
        icon: IoLogoGithub,
        text: "GitHub",
        url: "https://github.com/Ryo-samuraiJP/PlateMate",
      },
      {
        icon: SiPrezi,
        text: "Demo",
        ulr: "https://prezi.com/view/kiFUg0jNey3zD5mN1ctl/",
      },
    ],
    tech_used: [{ icon: SiDiagramsdotnet, name: "diagrams.net" }],
  },
  {
    id: 5,
    title: "Campus Network Simulator",
    desc: "Network infrastructure design for campus",
    image: campus_network_simulator,
    genre: "Other",
    links: [
      {
        icon: IoLogoGithub,
        text: "GitHub",
        url: "https://github.com/Ryo-samuraiJP/Campus-Network-Simulator",
      },
      {
        icon: SiGoogledrive,
        text: "Documentation",
        url: "https://drive.google.com/file/d/1EPAgZVmzu8FohEzQUeSY3xldoKdnoyNy/view?usp=sharing",
      },
      {
        icon: FiDownload,
        text: "Download pkt",
        url: "https://drive.usercontent.google.com/u/0/uc?id=1HVgYZu9RMIlfEn8bxssOG3lytE-uWUOh&export=download/",
      },
    ],
    tech_used: [{ icon: SiCisco, name: "Cisco Packet Tracer" }],
  },
];

export const genres = [
  // Add "ALL" to the beginning of the array
  "All",
  ...Array.from(new Set(projectsData.flatMap((project) => project.genre))),
];

// Function to filter projects based on genre
export const filterProjects = (genre: string) => {
  if (genre === "All") {
    return projectsData;
  }
  return projectsData.filter((project) =>
    Array.isArray(project.genre)
      ? project.genre.includes(genre)
      : project.genre === genre
  );
};
