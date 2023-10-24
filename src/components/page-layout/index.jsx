import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../nav";
import Footer from "../footer";

const PageLayout = () => {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-[1024px] w-11/12">
        <Outlet />
      </main>
      <Footer/>

    </>
  );
};

export default PageLayout;
