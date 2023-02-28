import React, { createContext, useState } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import AOS from "aos";
import "aos/dist/aos.css";

const theme = localStorage.getItem("theme")
  ? JSON.parse(localStorage.getItem("theme"))
  : "";

export const ThemeContext = createContext(theme);

const App = () => {
  
  AOS.init({
    disable: 'phone'
  });

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <RouterProvider router={router} />
      </ThemeContext.Provider>
    </>
  );
};

export default App;
