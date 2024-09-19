import React from "react";
// data
import { navLinks } from "../../constants";
import { headerLogo } from "../../assets/images";
import { RxHamburgerMenu } from "react-icons/rx";

function Nav() {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Nike-logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map(({ href, label }) => (
            <li key={label}>
              <a
                href={href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <RxHamburgerMenu className="w-[25px] h-[25px]"/>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
