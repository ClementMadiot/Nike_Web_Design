import * as React from "react";
import { motion } from "framer-motion";
// data
import { variants, delayChildren } from "./NavVariants";
import { navLinks } from "./NavVariants";

export const MenuItem = () => {
  return (
    <motion.ul
      variants={delayChildren}
      className="absolute w-[230px] px-6 pt-8 top-[20px] right-0 rounded-lg"
    >
      {navLinks.map((nav, index) => (
        <motion.li
          key={index}
          variants={variants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center cursor-pointer mb-5"
        >
          <a href={nav.href} className="flex w-full font-montserrat text-lg text-center hsl(0, 0%, 18%) ">
            <div
              className="w-10 h-10 flex-[40px_0] mr-5 rounded-[50%] flex items-center justify-center"
              style={{ border: `1.3px solid hsl(0, 0%, 18%)`, color: `hsl(0, 0%, 18%)` }}
            >
              {nav.icon}
            </div>
            <div
              className="flex-1 rounded-[5px] p-[6px]"
              style={{ border: `1.3px solid hsl(0, 0%, 18%)` }}
            >
              {nav.label}
            </div>
          </a>
        </motion.li>
      ))}
    </motion.ul>
  );
};
