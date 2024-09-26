import React from "react";
// data
import { navLinks } from "./NavVariants";
import { headerLogo } from "../../assets/images";
// import { RxHamburgerMenu } from "react-icons/rx";
// framer-motion
import { Sidebar } from "./Sidebar";


function Nav() {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container relative">
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
      </nav>
    </header>
  );
}

export default Nav;
