import React from "react";

export const Button = ({ children, onClick }) => {
  return (
    <button
      className="capitalize rounded-lg bg-[var(--primary)] 
      text-white font-bold py-2 w-full hover:bg-[#313852] 
      lg:text-md text-sm
      transition-all duration-300 shadow-lg hover:shadow-md   
      "
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const WhiteButton = ({ children, onClick }) => {
  return (
    <button
      className="capitalize rounded-lg bg-white 
      text-slate-800 font-bold py-2 w-full hover:bg-[#313852] 
      lg:text-md text-sm ring-1 ring-[#313852] hover:text-slate-100
      transition-all duration-300 shadow-lg hover:shadow-md   
      "
      onClick={onClick}
    >
      {children}
    </button>
  );
};

