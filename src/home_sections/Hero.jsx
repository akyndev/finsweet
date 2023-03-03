import React from "react";
import {Button} from "../components/Button";
import Input from "../components/Input";

const Hero = () => {
  return (
    <section id="hero" className="mt-40">
      <div className="container relative mx-auto">
        <div className=" lg:p-0 p-2">
          <div>
            <h1 className="lg:text-6xl lg:w-[800px] mx-auto text-3xl md:text-4xl md:w-8/12 text-center  font-bold">
              The Best Software to Grow your Sales and Services
            </h1>
          </div>
          <div>
            <p className="text-center text-md lg:w-[800px] md:w-9/12 mx-auto md:w-7/12  md:text-xl my-8">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna
              aliquyam erat.
            </p>
          </div>
          <div className="mx-auto w-[300px] md:w-[400px] lg:w-[600px] relative">
            <Input
              type={"text"}
              name={"email"}
              placeholder={"enter your email"}
            />
            <div className="lg:w-40 w-28 text-md absolute top-[50%] translate-y-[-50%] right-2">
              <Button>get free trial</Button>
            </div>
          </div>
          <img
            src="/images/header_dashboard.png"
            className="mx-auto lg:h-[500px] w-11/12 object-cover my-8 object-top lg:w-[900px]"
            alt=""
          />
        </div>
        <div className="bg-gradient-to-tr from-[#d798e1] 
        to-[#cacffa] via-[#aed3ff] h-72 w-72 top-[20%] 
        left-[50%]  translate-x-[-50%] blur-[120px] absolute -z-[300]" />
      </div>
    </section>
  );
};

export default Hero;
