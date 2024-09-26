import * as React from "react";
import { motion } from "framer-motion";
// data
import { variants, delayChildren, colors } from "./NavVariants";
import { navLinks } from "./NavVariants";

export const MenuItem = () => {
  return (
    <motion.ul
      variants={delayChildren}
      className="absolute w-[230px] px-6 pt-8 top-[15px] -right-[10px] rounded-lg"
    >
      {navLinks.map((nav, index) => (
        <motion.li
          key={index}
          variants={variants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center cursor-pointer mb-5"
        >
          <a href={nav.href} className="flex w-full font-montserrat text-lg text-center text-white-400 ">
            <div
              className="w-10 h-10 flex-[40px_0] mr-5 rounded-[50%] flex items-center justify-center"
              style={{ border: `1.3px solid ${colors[nav.id]}`, color: `${colors[nav.id]}` }}
            >
              {nav.icon}
            </div>
            <div
              className="flex-1 rounded-[5px] p-[6px]"
              style={{ border: `1.3px solid ${colors[nav.id]}` }}
            >
              {nav.label}
            </div>
          </a>
        </motion.li>
      ))}
    </motion.ul>
  );
};
