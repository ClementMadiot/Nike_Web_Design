import React from "react";
// data
import { navLinks } from "./NavVariants";
import { headerLogo } from "../../assets/images";
import { Sidebar } from "./Sidebar";
import { motion, useScroll, useSpring } from "framer-motion";


function Nav() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { 
    stiffness: 400, 
    damping: 40,
    restDelta: 0.001
  });
  return (
    <header className="padding-x py-8 absolute z-10 w-full" >
      <nav className="flex justify-between items-center max-container relative ">
        <a href="/">
          <img src={headerLogo} alt="Nike-logo" width={130} height={29} />
        </a>

        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map(({ href, label }) => (
            <li key={label}>
              <a
                href={href}
                className="font-montserrat leading-normal text-lg text-slate-gray hover:text-slate-800 group"
                >
                {label}
                <div className="bg-slate-800 h-[2px] w-0 group-hover:w-full duration-300"></div>
              </a>
            </li>
          ))}
        </ul>
          <Sidebar />
          <motion.div initial={{opacity: 0}} whileInView={{ opacity: 1 }} style={{scaleX}} className="fixed bg-coral-red h-1  top-0 left-0 right-0 origin-[0%]"/>
      </nav>
    </header>
  );
}

export default Nav;
