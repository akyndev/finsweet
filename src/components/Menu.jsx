import React from "react";
import { createPortal } from "react-dom";

const Menu = () => {
  const handleMenu = () => {
    const menu = document.getElementById("menu").classList;
    const overlay = document.getElementById("overlay").classList;
    if (menu.contains("translate-x-[-100%]")) {
      overlay.remove("hidden", "opacity-0");
      overlay.add("visible", "opacity-10");
      menu.remove("translate-x-[-100%]");
      menu.add("translate-x-[0%]");
    } else {
      overlay.remove("visible", "opacity-10");
      overlay.add("hidden", "opacity-0");
      menu.add("translate-x-[-100%]");
      menu.remove("translate-x-[0%]");
    }
  };

  return (
    <>
      {createPortal(
        <div className="">
          <div
            id="menu"
            className="sm:w-4/12 fixed w-[280px] lg:hidden top-0 h-screen rounded-r-xl left-0 
              transition-all duration-200 translate-x-[-100%] bottom-0 z-[400]
              dark:bg-slate-900 bg-white shadow-md py-4 px-2"
          >
            <span className="material-symbols-rounded" onClick={handleMenu}>close</span>
          </div>
          <div
            id="overlay"
            onClick={handleMenu}
            className="fixed w-full h-screen bg-black/30 z-[350] transition-all duration-100 opacity-0 hidden top-0 bottom-0 left-0 right-0"
          />
        </div>, document.body
      )}
    </>
  );
};

export default Menu;
