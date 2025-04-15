import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { BsGithub } from "react-icons/bs";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import cyberTalk from '../assets/CyberTalk-App.png'
import portfolio from '../assets/Aditya.dev.png'

const projectList = [
  {
    title: "CyberTalk",
    gradient: "from-blue-50 to-yellow-100",
    image: cyberTalk, // Replace this with a more app-relevant image if desired
    github: "https://github.com/Aditya202666/CyberTalk",
    live: "https://cybertalk.onrender.com",
    frontend: ["React", "Tailwind CSS", "Socket.io", "Zustand", "React Router", "Axios"],
    backend: ["Node.js", "Express", "MongoDB", "Mongoose", "JWT", "bcrypt", "Cloudinary", "Nodemailer"],
    description:
      "A real-time chat application enabling secure one-to-one messaging with text/image support, email-based 2FA, user authentication, online presence indicators, and profile customization.",
  },
  // {
  //   title: "DevConnect",
  //   gradient: " from-red-100 to-purple-100",
  //   image: "https://source.unsplash.com/400x300/?developer,network",
  //   github: "https://github.com/user/devconnect",
  //   live: "https://devconnect.app",
  //   frontend: ["Vue.js", "Vuetify", "GSAP"],
  //   backend: ["Django", "PostgreSQL"],
  //   description:
  //     "A networking platform designed for developers to connect, share knowledge, and collaborate on projects.",
  // },
  // {
  //   title: "FinTrack",
  //   gradient: " from-purple-100 to-green-100",
  //   image: "https://source.unsplash.com/400x300/?finance,analytics",
  //   github: "https://github.com/user/fintrack",
  //   live: "https://fintrack.io",
  //   frontend: ["Angular", "NG-Zorro", "Chart.js"],
  //   backend: ["Spring Boot", "MySQL"],
  //   description:
  //     "A personal finance tracking app that helps users analyze their spending habits and budget effectively.",
  // },
  {
    title: "Portfolio Website",
    gradient: "from-yellow-100 to-red-100/30",
    image: portfolio, // You can replace with a custom screenshot
    github: "https://github.com/Aditya202666/Portfolio", // Replace with your actual GitHub URL
    live: 'https://portfolio-rq9c.onrender.com', // Replace with your actual live site URL
    frontend: ["React", "Framer Motion", "React Router", "EmailJS"],
    backend: [],
    description:
      "A responsive and animated personal portfolio site showcasing my projects, skills, and contact information. Includes an integrated contact form using EmailJS.",
  }
];

const ProjectsPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ target: containerRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: 0, transition: { duration: 1 } }}
    >
      <div ref={containerRef} className="relative h-[600vh]">
        <div className="flex h-[calc(100vh-4rem)] items-center justify-center text-center font-semibold text-8xl">
          My Works
        </div>
        <div className="flex sticky top-0 overflow-hidden">
          <motion.div style={{ x }} className="flex ">
            {/* dummy div */}
            <div className="`h-screen w-screen flex p-4 flex-col items-center justify-center bg-blue-50/50"></div>
            {/* projects list */}
            {projectList.map((project) => (
              <div
                key={project.title}
                className={`h-screen w-screen flex flex-col p-4 justify-center bg-gradient-to-r ${project.gradient}`}
              >
                <img
                  className="w-4/5 md:w-3/5 lg:w-3/6 object-contain border-2 rounded-md mb-1"
                  src={project.image}
                  alt=""
                />
                <h1 className="font-semibold text-xl">{project.title}</h1>
                <p className="text-sm w-4/5 md:w-3/5 lg:w-3/6">{project.description}</p>
                <p className="space-x-1 mt-4 mb-2">
                  {" "}
                  <span className="font-medium">FrontEnd: </span>{" "}
                  {project.frontend.map((tech) => (
                    <span key={tech} className={`text-sm bg-gradient-to-l ${project.gradient} shadow text-black px-1.5 py-0.5 rounded-md hover:scale-110 transition-all`}>{tech}</span>
                  ))}{" "}
                </p>
                <p className="space-x-1 mb-4">
                  {" "}
                  {project.backend.lenght > 0 && <span className="font-medium">BackEnd: </span>}
                  {project.backend.map((tech) => (
                    <span key={tech} className={`text-sm bg-gradient-to-t ${project.gradient} shadow text-black px-1.5 py-0.5 rounded-md hover:scale-110 transition-all`}>{tech}</span>                  ))}{" "}
                </p>
                <div className="flex space-x-4">
                <Link to={project.github} target="_blank" rel="noopener noreferrer">
                <div className="flex  items-center gap-1 px-2 py-1 bg-black text-white font-normal rounded-md cursor-pointer hover:scale-105 transition-all">
                    <BsGithub/>
                    GitHub</div>
                </Link>
                <Link to={project.live} target="_blank" rel="noopener noreferrer">
                <div className={`flex  items-center gap-1 px-2 py-1 bg-gradient-to-b ${project.gradient} shadow-lg text-black font-normal rounded-md cursor-pointer hover:scale-105 transition-all`}><MdArrowOutward />
                  Go to Site</div>
                </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl md:text-6xl lg:text-7xl text-center">Did you like my projects   ?</h1>
        <div className="relative text-xl">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
              &#9679; MERN-Stack Developer &#9679;  
              </textPath>
            </text>
          </motion.svg>
          <Link
            to="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center text-center justify-center text-xs md:text-lg lg:text-lg"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsPage;
