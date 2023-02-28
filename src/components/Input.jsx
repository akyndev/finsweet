import React from "react";

const Input = ({ type, placeholder, label, name }) => {
  return (
    <label>
      {label}
      <input
        className="capitalize block w-full px-4 py-2.5 rounded-md 
        focus:ring-[var(--blue)] focus:outline-none
        transition-all duration-200
        ring-[1px] ring-[var(--primary)]
        "
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </label>
  );
};

export default Input;
