import React from "react";

const features = [
  {
    icon: "/assets/about/security.svg",
    title: "security and privary",
    info: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
  },
  {
    icon: "/assets/about/ai.svg",
    title: "built-in AI features",
    info: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
  },
  {
    icon: "/assets/about/collaborate.svg",
    title: "collaborate and others",
    info: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
  },
  {
    icon: "/assets/about/sim.svg",
    title: "real time sync",
    info: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
  },
  {
    icon: "/assets/about/feature.svg",
    title: "connection",
    info: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
  },
  {
    icon: "/assets/about/easy.svg",
    title: "easy note organization",
    info: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
  },
].map(({ icon, title, info }) => (
  <div key={icon} className="space-y-2">
    <div>
      <img src={icon} alt="" className="w-12" />
    </div>
    <div>
      <h3 className="capitalize text-xl md:text-2xl font-semibold">{title}</h3>
    </div>
    <div>
      <p className=" text-md md:text-lg">{info}</p>
    </div>
  </div>
));

const Features = () => {
  return (
    <section className="mt-20 pt-20 cta">
      <div className="container mx-auto">
        <div>
          <div>
            <h1 className="text-2xl w-full md:text-3xl lg:text-4xl lg:w-6/12 font-bold md:w-8/12 mx-auto text-center">
              Get the best out of your company with our service
            </h1>
          </div>
        </div>
      </div>
      <div className="mt-20 bg-white">
        <div className="container bg-white mx-auto p-4 rounded-tr-[50px]">
        <div className="grid pb-20 gap-16 p-4 md:grid-cols-2 grid-cols-1 lg:grid-cols-3">
          {features}
        </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
