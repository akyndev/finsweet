import React from "react";
import { SwiperSlide } from "swiper/react";
import Swipe from "../components/Swiper";

const testimonial = [
    {
        role: "CEO",
        name: "ron wood",
        img: "/images/ron.png",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
      },
      {
        role: "Developer",
        name: "joseph ire",
        img: "/images/joseph.jpg",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
      },
      {
        role: "Marketing Manager",
        name: "mark mason",
        img: "/images/mark.png",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
      },
      {
        role: "CTO",
        name: "sam preston",
        img: "/images/sam.png",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
      },            
].map(({ role, name, img, text }) => (
    <SwiperSlide key={img} className="lg:p-8 p-4">
        <div className="shadow-md transition-all dark:bg-[var(--primary)] duration-300 hover:shadow-lg lg:p-8 p-4 rounded-lg">
            <div className="my-4 ">
                <p className="lg:text-sm xl:text-lg">{text}</p>
            </div>
            <div className="my-4">
                <img src={img} alt={name} className="!w-20 mx-auto !h-20 rounded-full" />
            </div>
            <div className="mt-2">
                <h4 className="capitalize font-bold">{name}</h4>
            </div>
            <div>
                <h4 className="text-sm">
                    {role}
                </h4>
            </div>
        </div>
    </SwiperSlide>
))

const Testimonial = () => {
  return (
    <section className="mb-20">
      <div className="container mx-auto">
        <div className="p-2 lg:p-0">
          <div>
            <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold mx-auto text-center">
              The stunning results our <br />
              customers have experienced
            </h2>
          </div>
          <div>
            <Swipe>
             {testimonial}
            </Swipe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
