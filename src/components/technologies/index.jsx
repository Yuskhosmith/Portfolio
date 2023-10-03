import React from "react";
import { TechCard } from "../card";

const Technologies = () => {
  const data = {
    development: [
      {
        name: "Python",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "TypeScript",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "React.js",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Django",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
      },
      {
        name: "HTML5",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS3",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "Tailwind CSS",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      },
      {
        name: "Sass",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
      },
      {
        name: "JavaScript",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "C",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
      },
      {
        name: "Postgres",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "Git",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
    ],
    apps: [
      {
        name: "VS Code",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      },
      {
        name: "Figma",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      },
    ],
    services: [
      {
        name: "Github",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
      {
        name: "AWS",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
      },
      {
        name: "Heroku",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg",
      },
    ],
    os: [
      {
        name: "Windows",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg",
      },
      {
        name: "Linux",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
      },
    ],
  };
  return (
    <section className="section">
      <h3 className="text-sm font-medium uppercase text-accent">
        Tecnologies I use
      </h3>
      <div className="flex flex-col space-y-6 mt-8">
        <section>
          <h4 className="text-sm uppercase text-accent pb-2 mb-4 border-b border-accent">
            Development
          </h4>
          <div className="grid md:grid-cols-3 grid-cols-1 lg:grid-cols-4 gap-x-2 gap-y-2">
            {data.development.map((item) => (
              <TechCard
                key={item.name}
                name={item.name}
                src={item.src}
              />
            ))}
          </div>
        </section>
        <section>
          <h4 className="text-sm uppercase text-accent pb-2 mb-4 border-b border-accent">
            Apps
          </h4>
          <div className="grid md:grid-cols-3 grid-cols-1 lg:grid-cols-4 gap-x-2 gap-y-2">
            {data.apps.map((item) => (
              <TechCard
                key={item.name}
                name={item.name}
                src={item.src}
              />
            ))}
          </div>
        </section>
        <section>
          <h4 className="text-sm uppercase text-accent pb-2 mb-4 border-b border-accent">
            Services
          </h4>
          <div className="grid md:grid-cols-3 grid-cols-1 lg:grid-cols-4 gap-x-2 gap-y-2">
            {data.services.map((item) => (
              <TechCard
                key={item.name}
                name={item.name}
                src={item.src}
              />
            ))}
          </div>
        </section>
        <section>
          <h4 className="text-sm uppercase text-accent pb-2 mb-4 border-b border-accent">
            Operating Systems
          </h4>
          <div className="grid md:grid-cols-3 grid-cols-1 lg:grid-cols-4 gap-x-2 gap-y-2">
            {data.os.map((item) => (
              <TechCard
                key={item.name}
                name={item.name}
                src={item.src}
              />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Technologies;
