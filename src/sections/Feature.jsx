import React from "react";

const features = [
  {
    icon: "/assets/advance.svg",
    title: "Advanced 256-bit encryption",
    info: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.",
  },
  {
    icon: "/assets/tools.svg",
    title: "Simple collaboration tools",
    info: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.",
  },
  {
    icon: "/assets/features.svg",
    title: "Customizable AI features",
    info: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.",
  },
].map(({ icon, title, info }, i) => (
  <div key={icon} data-aos="fade-left" data-aos-delay={i * 200} className="space-y-4  px-2 lg:px-8">
    <div >
      <img src={icon} alt="" className="w-10" />
    </div>
    <div>
      <h3 className="lg:text-3xl md:text-2xl text-xl font-semibold">{title}</h3>
    </div>
    <div className="text-sm md:text-lg">
        <p>{info}</p>
    </div>
  </div>
));

const Feature = () => {
  return (
    <section id="feature" className="mt-20 mb-20">
      <div className="container lg:p-0 p-2 mx-auto">
        <div>
          <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold mx-auto text-center">
            Features
          </h2>
        </div>
        <div className="my-8 lg:space-y-0 space-y-8 dark:text-slate-900 lg:divide-x-2  divide-solid divide-[var(--blue)] p-4 lg:p-10 flex lg:flex-row flex-col rounded-md bg-[var(--light-violet)]">
          {features}
        </div>
      </div>
    </section>
  );
};

export default Feature;
