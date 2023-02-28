import React from "react";

const features = [
  {
    icon: "/assets/subtract.svg",
    title: "High security to protect from piracy",
    info: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.",
  },
  {
    icon: "/assets/like.svg",
    title: "Premium quality performance",
    info: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.",
  },
  {
    icon: "/assets/headset.svg",
    title: "Full time customer support - 24/7",
    info: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.",
  },
].map(({ icon, title, info }) => (
  <div key={icon} className="space-y-4">
    <div >
      <img src={icon} alt="" />
    </div>
    <div>
      <h3 className="lg:text-3xl md:text-2xl text-xl font-semibold">{title}</h3>
    </div>
    <div className="sm:text-md  md:text-lg">
        <p>{info}</p>
    </div>
  </div>
));

const Features = () => {
  return (
    <section className="mt-28 mb-20">
      <div className="container lg:p-0 p-2 mx-auto">
        <div>
          <h3
            className="lg:text-2xl  text-xl text-center mx-auto font-bold bg-clip-text bg-gradient-to-tr 
          from-[var(--linear-from)] to-[var(--linear-to)] text-transparent
          my-6
          "
          >
            High-quality
          </h3>
        </div>
        <div>
          <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold mx-auto text-center">
            We have the Best Solution <br /> for your Business
          </h2>
        </div>
        <div className="my-8 dark:text-slate-900 md:p-10 p-6 lg:flex-row flex-col lg:space-y-0 space-y-10 flex lg:space-x-6 rounded-md bg-[var(--light-violet)]">
          {features}
        </div>
      </div>
    </section>
  );
};

export default Features;
