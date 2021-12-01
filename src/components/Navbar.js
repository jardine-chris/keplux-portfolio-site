import React from "react";
import { useState } from "react";

import NavLink from "./NavLink";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleMenuClick = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <nav className="sticky top-0 z-50 flex items-center w-full h-16 bg-black bg-opacity-50 backdrop-filter backdrop-blur">
      <img
        className="h-12 ml-4"
        src="/images/keplux-logo.png"
        alt="Keplux logo"
      />
      <ul
        className={`absolute text-center w-full top-16 left-1/2 transform bg-black bg-opacity-50 backdrop-filter backdrop-blur -translate-x-1/2 flex flex-col ${
          menuVisible ? "visible" : "invisible"
        } md:justify-center md:flex-row md:relative md:-left-0 md:bg-opacity-0 md:backdrop-blur-0 md:-translate-x-0 md:top-0 md:flex-grow md:visible lg:justify-end`}
      >
        <NavLink label="Home" />
        <NavLink label="Projects" />
        <NavLink label="Resume" />
        <NavLink label="Services" />
        <NavLink label="About" />
        <NavLink label="Contact" />
      </ul>
      <div
        className="absolute right-0 flex items-center justify-center visible w-16 h-16 md:invisible btn filter hover:bg-indigo-900 hover:opacity-80"
        onClick={handleMenuClick}
      >
        <img
          className="h-8"
          src="/images/menu_white_24dp.svg"
          alt="Hamburger icon"
        />
      </div>
    </nav>
  );
};

export default Navbar;
