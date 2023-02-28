import React from "react";

const why = [
  {
    icon: "/assets/sales.svg",
    title: "Sales Tracking",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
  },
  {
    icon: "/assets/project.svg",
    title: "Project Management",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
  },
  {
    icon: "/assets/report.svg",
    title: "Activity Report",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
  },
].map(({ icon, title, info }, i) => (
  <div key={i} className="space-x-4 flex items-center">
    <div className="p-4 bg-slate-100 shadow-md rounded-full">
      <img src={icon} alt="" className="w-10" />
    </div>
    <div>
      <div>
        <h4 className="md:text-xl text-md font-medium">{title}</h4>
      </div>
      <div>
        <p className="text-sm md:text-lg">{info}</p>
      </div>
    </div>
  </div>
));

const Discover = () => {
  return (
    <section className="mt-10">
      <div className="container mx-auto">
        <div className="py-8 lg:p-0 p-4 flex lg:flex-row flex-col items-start lg:space-x-20">
          <div className="lg:w-6/12">
            <div>
              {" "}
              <h3
                className="lg:text-2xl text-xl font-bold bg-clip-text bg-gradient-to-tr 
          from-[var(--linear-from)] to-[var(--linear-to)] text-transparent
          my-6
          "
              >
                Discover More
              </h3>
            </div>
            <div>
              <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold mx-auto">
                Analyze your sales and <br /> marketing leads
              </h2>
            </div>
            <div>
              <p className="my-8 md:text-xl">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua invidunt ut labore.
              </p>
            </div>
          </div>
          <div className="lg:w-6/12 space-y-10  flex flex-col justify-between">
            {why}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discover;
