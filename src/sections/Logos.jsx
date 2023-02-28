import React from "react";

const logo = [
  "/assets/logo_1.svg",
  "/assets/logo_2.svg",
  "/assets/logo_3.svg",
  "/assets/logo_4.svg",
  "/assets/logo_5.svg",
];

const Logos = () => {
  return (
    <section className="mt-10">
      <div className="container mx-auto">
        <div className="py-10">
          <ul className="grid lg:grid-cols-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-y-6">
            {logo.map((l) => (
              <li key={l}>
                <img src={l} alt="" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Logos;
