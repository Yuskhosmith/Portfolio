import React, {useEffect} from "react";
import { Outlet, useLocation } from "react-router-dom";
import Nav from "../nav";
import Footer from "../footer";

const PageLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
