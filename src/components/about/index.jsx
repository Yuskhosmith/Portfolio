import React from "react";
import { FiExternalLink } from "react-icons/fi";
import Marquee from "react-fast-marquee";

const About = () => {
  const data = [
    {
      key: "html",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      key: "css3",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      key: "tailwindcss",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    },
    {
      key: "JavaScript",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      key: "react",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      key: "Python",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      key: "Django",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    },
    {
      key: "Windows",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg",
    },
    {
      key: "Linux",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    },
    {
      key: "C",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    },
    {
      key: "Postgres",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      key: "Sass",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
    },
    {
      key: "Vscode",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
    {
      key: "Figma",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
    {
      key: "Git",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      key: "Github",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      key: "Yarn",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg",
    },
    {
      key: "Heroku",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg",
    },
    {
      key: "AWS",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
    },
    {
      key: "NPM",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
    },
  ];
  return (
    <div id="about" className="min-h-screen flex flex-col justify-center ">
      <h1 className="text-primary text-hero-h1">about.</h1>
      <div className="flex flex-col gap-4">
        <p className="text-2xl">
          I am a software engineer, specializing in web technologies. I work
          with Python and JavaScript. In my spare time, I share what I learn on
          my{" "}
          <span className="underline ">
            Medium
            <span className="inline-block align-middle ml-1">
              <FiExternalLink />
            </span>
          </span>
        </p>
        <p className="text-2xl">
          I aspire to specialize in AI, and someday retire as a professor.
          J’etudie francias avec Duo.
        </p>
        <p className="text-2xl">
          Here is a few technologies I have been working with recently:
        </p>
        <div>
          <Marquee
            pauseOnHover="true"
            autoFill="true"
          >
           {data.map((item) => (
            <div key={item.key} className="flex p-8 mr-4">
                <img className="w-8 h-8" src={item.src} alt={item.key} />
            </div>
           ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default About;
