import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ThemeContext } from "../App";
import Button from "../components/Button";
import Toggle from "../components/Toggle";

const list = [
  ["home", "/"],
  ["product", "product"],
  ["pricing", "pricing"],
  ["about us", "about"],
  ["blog", "blog"],
  ["contact", "contact"],
].map(([item, path]) => (
  <li
    className="font-medium cursor-pointer select-none transition-all duration-200 hover:text-[var(--blue)]"
    key={item}
  >
    <NavLink
      to={path}
      className={({ isActive, isPending }) =>
        isActive ? "text-[var(--blue)]" : isPending ? "" : ""
      }
    >
      {item}
    </NavLink>
  </li>
));

const Navbar = () => {
  const theme = useContext(ThemeContext);

  window.addEventListener("scroll", function () {
    const navbar = this.document.getElementById("navbar");
    const navHeight = navbar.getBoundingClientRect().height;
    if (this.scrollY > navHeight) {
      if (theme === "dark") {
        // navbar.classList.add("bg-slate-800/20");
      }
      navbar.classList.add("shadow-md");
    } else {
      navbar.classList.remove("shadow-md");
      // navbar.classList.remove("bg-slate-800/20");
    }
  });

  const handleMenu = () => {
    const menu = document.getElementById("menu").classList;
    const overlay = document.getElementById("overlay").classList;
    if (menu.contains("translate-x-[-100%]")) {
      overlay.remove("hidden", "opacity-0");
      overlay.add("visible", "opacity-100");
      menu.remove("translate-x-[-100%]");
      menu.add("translate-x-[0%]");
    } else {
      overlay.remove("visible", "opacity-100");
      overlay.add("hidden", "opacity-0");
      menu.add("translate-x-[-100%]");
      menu.remove("translate-x-[0%]");
    }
  };

  const handleSettings = () => {
    const settings_menu = document.getElementById('setting-menu').classList
    if(settings_menu.contains("scale-x-0", "scale-y-0")){
      settings_menu.remove("scale-x-0", "scale-y-0")
      settings_menu.add("scale-x-100", "scale-y-100")
    } else {
      settings_menu.remove("scale-x-100", "scale-y-100")
      settings_menu.add("scale-x-0", "scale-y-0")
    }
  }

  return (
    <section
      id="navbar"
      className="mb-20 backdrop-blur-xl z-[100]
      transition-all duration-300 fixed top-0 right-0 left-0
      "
    >
      <div className="container mx-auto">
        <div className="flex items-center px-2 lg:px-0 justify-between">
          <div className="py-2 flex items-center space-x-2">
            <div onClick={handleMenu} className="lg:hidden mt-1.5">
              <span className="material-symbols-rounded">menu</span>
            </div>
            <Link to={"/"}>
              <img
                src="/assets/blue_logo.svg"
                alt="logo"
                className="w-32 my-auto lg:w-42 "
              />
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <div className=" hidden  lg:block ">
              <ul className="capitalize p-2 items-center flex space-x-[32px]">
                {list}
                <li className="w-32">
                  <Button>free trial</Button>
                </li>
              </ul>
            </div>
            <div className="mt-2 relative mr-2">
             <span onClick={handleSettings} className="material-symbols-rounded cursor-pointer">settings</span>
             <div id="setting-menu" className="absolute flex justify-end p-4 h-20 w-20 scale-x-0 scale-y-0 transition-all duration-200 rounded-lg shadow-lg dark:bg-slate-800 bg-slate-100 right-0 top-[120%] lg:top-[130%] translate-y-[-0%]">
              <Toggle />
             </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
