import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../App";

const Toggle = () => {
  const t = useContext(ThemeContext);

  const [theme, setTheme] = useState(t);
  
  useEffect(() => {
      const toggle = document.getElementById("toggle");
      if (
          theme === "dark" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
        document.documentElement.classList.add("dark");
        toggle.classList.add("translate-x-[130%]");
    }
}, []);

const handleTheme = () => {
    setTheme(theme === "dark" ? "" : "dark");
    const toggle = document.getElementById("toggle");
    if (theme == "dark") {
      toggle.classList.add("translate-x-[130%]");
      document.documentElement.classList.add("dark");
    } else {
      toggle.classList.remove("translate-x-[130%]");
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", JSON.stringify(theme));
  };

  return (
    <ThemeContext.Provider value={t}>
      <div
        id="switch"
        onClick={handleTheme}
        className="w-8 rounded-full h-4 relative bg-slate-300 
      cursor-pointer  dark:bg-slate-100
      "
      >
        <span
          id="toggle"
          className=" hover:ring-8 hover:ring-slate-500/50 hover:  
      hover:ring-solid hover:shadow-lg transition-all duration-100 
      top-[50%] translate-y-[-50%] left-[2px] content-[''] h-3 w-3
      bg-white dark:bg-slate-900  absolute rounded-full "
        ></span>
      </div>
    </ThemeContext.Provider>
  );
};

export default Toggle;
