import * as React from "react";
import { motion } from "framer-motion";
// data
import { variants, delayChildren, colors } from "./NavVariants";
import { navLinks } from "../../constants";

export const MenuItem = () => {
  return (
    <motion.ul
      variants={delayChildren}
      className="absolute w-[230px] p-[25px] top-[20px] -right-[65px]"
    >
      {navLinks.map((nav, index) => (
        <motion.li
          key={index}
          variants={variants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center cursor-pointer mb-5"
        >
          <div
            className="w-10 h-10 flex-[40px_0] mr-5 rounded-[50%]"
            style={{ border: `2px solid ${colors[nav.id]}` }}
          />
          <div className="flex-1 rounded-[5px] p-[6px]"
            style={{ border: `2px solid ${colors[nav.id]}` }}>
            <p className="font-montserrat text-lg text-center">{nav.label}</p>
          </div>
        </motion.li>
      ))}
    </motion.ul>
  );
};
