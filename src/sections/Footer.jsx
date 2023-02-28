import React from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { Link } from "react-router-dom";

const company = [
  "company",
  "about",
  "why choose us",
  "CTA_Pricing",
  "testimonial",
];
const resources = [
  "resources",
  "privacy policy",
  "terms and contdition",
  "blogs",
  "contact us",
];
const product = [
  "product",
  "project management",
  "time trader",
  "time schedule",
  "lead generatePath",
  "remote colaboration",
];

const list = (arr) => {
  return arr.map((l) => (
    <li
      className="capitalize first:text-xl my-1.5 hover:text-[var(--blue)] duration-200 transition-all first:hover:text-white first:my-0 first:font-semibold"
      key={l}
    >
      <Link to={l}>{l}</Link>
    </li>
  ));
};

const Footer = () => {
  return (
    <section id="footer" className="bg-[var(--primary)] mt-20 pb-6 text-white">
      <div className="container mx-auto">
        <div className="lg:p-8 p-4 flex space-y-20 lg:space-y-0 lg:flex-row flex-col justify-between">
          <div className="lg:w-7/12">
            <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-10">
              <div>
                <ul>{list(company)}</ul>
              </div>
              <div>
                <ul>{list(resources)}</ul>
              </div>
              <div>
                <ul>{list(product)}</ul>
              </div>
            </div>
          </div>
          <div className="lg:w-4/12 md:w-11/12">
            <div className="mb-8">
              <img src="/assets/dark_logo.svg" alt="" />
            </div>
            <div className="my-2">
              <p>
                Subcribe to our Newsletter. <br />
                We promise not to spam
              </p>
            </div>
            <div className="relative">
              <Input
                placeholder={"enter your email"}
                type={"email"}
                name="email"
              />
              <div className="w-28 absolute top-[50%] translate-y-[-50%] right-1">
                <Button>subscribe</Button>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="mt-2">
          <div className="relative ">
            <hr className=" w-full  mx-auto bg-slate-100" />
            <div className=" bg-[var(--primary)] mx-auto absolute top-[50%] px-8 translate-y-[-50%] left-[50%] translate-x-[-50%]">
              @@osla qwerty pot qwerty
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Footer;
