import React from "react";

const why = [
  {
    icon: "/assets/us.svg",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
  },
  {
    icon: "/assets/us.svg",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
  },
  {
    icon: "/assets/us.svg",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
  },
].map(({ icon, info }, i) => (
  <div key={i} className="space-x-4 flex items-center" data-aos="fade-up" data-aos-delay={i * 100}>
    <div>
      <img src={icon} alt="" className="w-20 shadow-md rounded-full" />
    </div>
    <div>
      <p className="md:text-xl text-md font-medium">{info}</p>
    </div>
  </div>
));

const Why_us = () => {
  return (
    <section className="mt-20 mb-8">
      <div className="container mx-auto">
        <div className="py-8 flex lg:p-0 p-4 lg:flex-row flex-col items-start lg:space-x-20">
          <div className="lg:w-6/12">
            <div>
              {" "}
              <h3
                className="text-2xl  font-bold bg-clip-text bg-gradient-to-tr 
          from-[var(--linear-from)] to-[var(--linear-to)] text-transparent
          my-6
          "
              >
                Why should you work with us?
              </h3>
            </div>
            <div>
              <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold mx-auto">
                To upscale your business <br /> to the next level
              </h2>
            </div>
            <div>
              <p className="my-8 md:text-lg">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua invidunt ut labore.
              </p>
            </div>
          </div>
          <div className="lg:w-6/12 space-y-10  flex flex-col justify-between">{why}</div>
        </div>
      </div>
    </section>
  );
};

export default Why_us;
