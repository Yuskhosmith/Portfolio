import React from "react";

const Hero = () => {
  return (
    <div id="home" className="flex items-center h-screen justify-center ">
      <div>
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
      <div className="flex-grow flex items-center justify-center">
        <div className="w-[400px] h-[400px] relative">
          <div className="w-full h-full bg-white opacity-80"></div>
          <div className="w-full h-full absolute bg-white top-4 right-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
