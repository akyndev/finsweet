import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import BackToTop from "../components/BackToTop";
import Menu from "../components/Menu";
import { CTA_Pricing, Footer, Navbar } from "../home_sections";

const Root = () => {
  return (
    <>
      <Menu />
      <Navbar />
      <Outlet />
      <CTA_Pricing />
      <Footer />
      <BackToTop />
      <ScrollRestoration
        getKey={(location, matches) => {
          return location.pathname;
        }}
      />
    </>
  );
};

export default Root;
