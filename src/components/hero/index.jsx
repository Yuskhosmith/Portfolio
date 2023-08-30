import React from "react";

const Hero = () => {
  return (
    <div id="home" className="lyt snap-start flex flex-col gap-8 lg:gap-0 lg:flex-row items-center h-screen justify-center ">
      <div className="order-2 lg:order-1">
        <h1 className="text-hero-h1">
          Hi, I am <span className="text-primary">Opoola Yusuf.</span>
        </h1>
        <p className="text-hero-tagline">
          Software Engineer, Full Stack Web Developer.
        </p>
        <div className="flex gap-4 mt-5">
          <a
            href=""
            className="bg-primary btn text-black"
          >
            Resume
          </a>
          <a
            href=""
            className="text-primary border-2 border-primary btn"
          >
            Contact Me
          </a>
        </div>
      </div>
      <div className="order-1 lg:order-2 lg:flex-grow flex items-center justify-center">
        <div className="w-[205px] h-[205px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] relative">
          <div className="w-full h-full bg-white opacity-80"></div>
          <div className="w-full h-full absolute bg-white top-4 right-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
