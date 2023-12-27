import React from "react";

const About = () => {
  return (
    <>
      <header className="space-y-2 my-12">
        <h1 className="text-text font-semibold text-4xl md:text-6xl leading-normal">
          About.
        </h1>
        <p className="flex flex-col md:flex-row md:justify-between text-accent">
          <span>Verily I shall find a suitable tagline.</span>
          <span>Last updated: 27-12-23</span>
        </p>
      </header>
      <div className="text-accent mb-40 space-y-8">
        <p>
          My name is Opoola Yusuf, a FullStack Software Engineer who is
          currently based in Nigeria. My journey in this field has been one of
          continuous learning and growth. I have had the opportunity of working
          on couple of projects, each of I learn new things and broaden my
          knowledge.
        </p>
        <p>
            To be continued...
        </p>
      </div>
    </>
  );
};

export default About;
