import React from "react";
import Button from "../components/Button";

const CTA = () => {
  return (
    <section className="cta mt-20 mb-8 w-full backdrop-blur-lg">
      <div className="container mx-auto">
        <div className="py-10 lg:p-8 p-2 flex lg:flex-row flex-col lg:space-y-0 space-y-20 items-center">
          <div className="space-y-6">
            <div>
              <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold mx-auto">
              More impressions, more <br /> conversions
              </h2>
            </div>
            <div className="">
              <p className="lg:w-9/12 md:text-lg">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua invidunt ut labore.
              </p>
            </ div>
            <div className="w-32">
              <Button>get free trial</Button>
            </div>
          </div>
          <div className="lg:w-9/12 w-11/12">
            <img src="/images/chart.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
