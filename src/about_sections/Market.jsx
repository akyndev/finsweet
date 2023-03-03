import React from "react";

const Market = () => {
  return (
    <section className="mb-20 md:mb-32">
      <div className="container mx-auto">
        <div className="flex items-center justify-between flex-col space-y-20 p-4 lg:p-0 lg:space-y-0 lg:flex-row">
          <div className="lg:w-5/12 w-full relative">
            <div>
              <h3
                className="lg:text-2xl  text-xl font-bold bg-clip-text bg-gradient-to-tr 
                from-[var(--linear-from)] to-[var(--linear-to)] text-transparent
                "
              >
                Marketing Insight
              </h3>
            </div>
            <div>
              <h2 className="lg:text-4xl md:text-3xl w-9/12 my-3 lg:my-6 text-2xl font-bold">
                Data-driven client feedback
              </h2>
            </div>
            <div>
              <p className="md:text-lg text-md">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren.
              </p>
            </div>
            <div className="bg-gradient-to-tr from-[#d798e1]  to-[#cacffa] via-[#aed3ff] h-72 w-72 top-[20%]  left-[50%]  translate-x-[-50%] blur-[150px] absolute -z-[300]" />
          </div>
          <div className="relative w-full lg:w-6/12">
            <img src="/images/market_insight.png" alt="" className="md:w-6/12 xl:w-8/12 mx-auto"/>
            <div className="bg-gradient-to-tr from-[#d798e1]  to-[#cacffa] via-[#aed3ff] h-72 w-72 top-[20%]  left-[50%]  translate-x-[-50%] blur-[150px] absolute -z-[300]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Market;
