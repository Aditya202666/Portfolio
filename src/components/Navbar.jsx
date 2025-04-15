import React, { useState } from "react";
import { motion } from "motion/react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import { BsGithub } from "react-icons/bs";
import { SiCodewars } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const topVariant = {
  opened: {
    rotate: 45,
    backgroundColor: "rgba(255,255,255)",
  },
  closed: {
    rotate: 0,
  },
};
const middleVariant = {
  opened: {
    opacity: 0,
  },
  closed: {
    opacity: 1,
  },
};
const bottomVariant = {
  opened: {
    rotate: -45,
    backgroundColor: "rgba(255,255,255)",
  },
  closed: {
    rotate: 0,
  },
};

const listVariant = {
  opened:{
    x: 0,
    transition:{
      when: "beforeChildren",
      staggerChildren : 0.2
    }
  },
  closed:{
    x: "100vw",
  }
}
const listItemVariant = {
  opened:{
    x: 0,
    opacity: 1
  },
  closed:{
    x: "-10vw",
    opacity: 0
  }
}

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate()

  return (
    <div className="h-16 px-4 md:px-8 lg:px-12 flex items-center justify-between ">
      {/* nav Links */}
      <div className="hidden md:flex gap-6 w-1/3">
        {links.map((link) => (
          <NavLink
          key={link.label}
            to={link.href}
            className={({ isActive }) =>
              `font-semibold text-lg ${
                isActive ? "bg-black rounded-sm text-white px-1" : ""
              } `
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>

      {/* logo Aditya */}
      <div className="lg:w-1/3 flex md:hidden lg:flex justify-center items-center">
        <h1 className="text-xl w-fit font-bold tracking-tighter text-white bg-black p-1 rounded-sm cursor-pointer"
        onClick={()=>navigate('/')}>
          Aditya
          <span className="bg-white text-black rounded-sm ml-1 px-0.5 ">
            .dev
          </span>
        </h1> 
      </div>

      {/* social links  */}
      <div className="hidden w-1/3 md:flex flex-row-reverse gap-3">
      <Link to={"https://github.com/Aditya202666"} target="_blank" rel="noopener noreferrer">
        <BsGithub className="size-5 hover:scale-110 transition-all" />
      </Link>
      <Link to={""} target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="size-5 hover:scale-110 transition-all text-blue-400" />
      </Link>
      <Link to={"https://www.codewars.com/users/Aditya202666"} target="_blank" rel="noopener noreferrer">
        <SiCodewars className="size-5 hover:scale-110 transition-all bg-black text-red-500 rounded-sm" />
      </Link>
        {/* <img className="" src={"https://www.codewars.com/users/Aditya202666/badges/large?theme=light"} alt="" /> */}
      </div>

      {/* hamburger menu */}
      <button
        type="button"
        className="relative flex flex-col md:hidden  justify-between w-10 h-8 cursor-pointer z-20"
        onClick={() => setOpen((prev) => !prev)}
      >
        <motion.div
          variants={topVariant}
          animate={open ? "opened" : "closed"}
          className="h-1 w-10 bg-black rounded-full origin-left"
        />
        <motion.div
          variants={middleVariant}
          animate={open ? "opened" : "closed"}
          className="h-1 w-10 bg-black rounded-full"
        ></motion.div>{" "}
        <motion.div
          variants={bottomVariant}
          animate={open ? "opened" : "closed"}
          className="h-1 w-10 bg-black rounded-full  origin-left"
        ></motion.div>{" "}
      </button>
      {open && (
        <motion.div variants={listVariant} initial="closed" animate={"opened"} className="absolute top-0 right-0 flex flex-col justify-center items-center gap-4 h-screen w-screen md:hidden bg-black text-white z-10">
          {links.map((link) => (
            <motion.div variants={listItemVariant} key={link.label}>

            <Link
              to={link.href}
              className="text-white text-2xl"
              onClick={() => setOpen(false)}
              
              >
              {link.label}
            </Link>
              </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
