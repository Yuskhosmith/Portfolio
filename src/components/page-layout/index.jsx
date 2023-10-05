import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../nav";

const PageLayout = () => {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-[1024px]">
        <Outlet />
      </main>
    </>
  );
};

export default PageLayout;