import React from "react";
import Button from "../components/Button";

const CTA_Pricing = () => {
  return (
    <section className="mt-20 mb-10">
      <div className="container mx-auto relative">
        <div className="lg:p-0 p-2">
          <div>
            <h2 className="lg:text-6xl md:text-4xl lg:w-[900px] text-3xl sm:w-8/12 text-center font-bold mx-auto">
              Are you ready to grow your business with us?
            </h2>
          </div>
          <div>
            <p className="text-center text-md md:text-xl mx-auto md:max-w-[600px] lg:max-w-[900px] my-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              ipsam quas quia, hic saepe eos, ratione excepturi eveniet cum
              corrupti voluptatum reiciendis nulla debitis unde, soluta
              cupiditate animi atque officia?
            </p>
          </div>
          <div>
            <div className="w-32 mx-auto">
              <Button>view pricing</Button>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-tr from-[#d798e1] to-[#cacffa] via-[#aed3ff] h-72 w-72 top-[50%] left-[50%]  translate-x-[-50%] blur-[120px] absolute -z-[300]" />
      </div>
    </section>
  );
};

export default CTA_Pricing;
