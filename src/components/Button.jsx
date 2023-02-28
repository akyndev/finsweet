import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button
      className="capitalize rounded-lg bg-[var(--primary)] 
      text-white font-bold py-2 w-full hover:bg-[#313852] 
      lg:text-md text-sm
      transition-all duration-300 shadow-sm hover:shadow-md   
      "
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
