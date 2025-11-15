import { motion, useInView, useScroll } from "framer-motion";
import { FaAngleDoubleDown } from "react-icons/fa";

import Sign from "../assets/signature.svg";
import Brain from "../components/Brain";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const skills = [
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Express.js",
  "React.js", 
  "Next.js",
  "MongoDB",
  "PostgreSQL",
  "Redux",
  "Zustand",
  "Socket.IO",
  "Tailwind CSS",
  "Cloudinary",
];
const AboutPage = () => {

  const navigate = useNavigate()

  const skillContainerRef = useRef();

  const { scrollYProgress } = useScroll();
  const isSkillsContainerInView = useInView(skillContainerRef, {
    margin: "-100px",
  });

  return (
    <motion.div
      className="h-full cursor-default pb-16 lg:flex"
      initial={{ y: "-200vh" }}
      animate={{ y: 0, transition: { duration: 1 } }}
    >
      {/* container */}
      {/* <div className=''> */}
      {/* text container */}
      <div className="relative p-4 sm:p-8 md:p-12 lg:p-20 xl:p-36 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 xl:w-3/5">
        {/* biography container */}
        <div className="flex flex-col gap-12 justify-center">
          <h1 className="font-bold text-2xl">ABOUT ME</h1>
          <p className="text-lg tracking-tight">
            I am a self-taught full-stack developer with a background in civil
            engineering. After earning a diploma in civil engineering and
            working for two years as a Junior Engineer Trainee at MSIL(Maruti
            Suzuki India Limited), I transitioned into web development as i've
            been interested in coding from an early age. I am currently looking
            for an full-time role to gain hands-on experience and grow as a
            developer.
          </p>
          <span className="italic">Good code should speak for itself.</span>
          <img src={Sign} className="h-16 self-end" alt="" />
          
          <FaAngleDoubleDown className="size-5  opacity-80 animate-bounce ease-in-out" />
        </div>
        {/* Skills container */}
        <div
          className="flex flex-col gap-12 justify-center"
          ref={skillContainerRef}
        >
          <motion.h1
            initial={{ x: "-300px" }}
            animate={isSkillsContainerInView ? { x: 0 } : {}}
            transition={{ delay: 0.1, ease:"easeOut" }}
            className="font-bold text-2xl"
          >
            SKILLS
          </motion.h1>
          <motion.div
      className="flex flex-wrap gap-4"
      initial={{ x: "-140%" }}
      animate={isSkillsContainerInView ? { x: 0 } : {}}
      transition={{ delay: 0.3, ease:"easeOut"}}
    >
            {skills.map((skill) => (
              <span
                key={skill}
                className="p-2 bg-black text-white rounded-md hover:bg-white hover:text-black"
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </div>
        <div>
          
          {/* <Link to={"/projects"}>
        <FaCircleArrowRight 
        className="absolute bottom-0 right-1/5  size-10 animate-pulse cursor-pointer" />
        </Link> */}
        </div>

      </div>
      {/* svg container */}
      <div className="hidden w-1/3  h-[calc(100vh-4rem)]  lg:block xl:w-2/5 sticky top-16 z-20  ">
        <Brain scrollYProgress={scrollYProgress} />
      </div>
    </motion.div>
  );
};

export default AboutPage;
