export const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

// delay between children
export const delayChildren = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    opacity: 1,
    y: 0,
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
    opacity: 0,
    y: 50,
  }
};

// sidebar cirlce
export const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(25px at 199px 25px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};


// color li
export const colors = ["#FFA500", "#FF8C00", "#FF7F00", "#FF6F00", "#FF4500"];

import { FaHome } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { IoPeopleCircle } from "react-icons/io5";
import { GiRunningShoe } from "react-icons/gi";



export const navLinks = [
  { id: 1,href: "#home", label: "Home", icon: <FaHome className="w-6 h-6"/>},
  { id: 2,href: "#about-us", label: "About Us", icon: <IoPeopleCircle/>},
  { id: 3,href: "#products", label: "Products", icon: <GiRunningShoe/>},
  { id: 4,href: "#contact-us", label: "Contact Us", icon: <IoMdContact/> },
];
