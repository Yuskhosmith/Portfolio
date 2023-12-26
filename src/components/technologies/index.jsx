import React from "react";
import { TechCard } from "../card";
import GitHub from "../../assets/icons/github";

const Technologies = () => {
  const data = [
    {
      name: "Development",
      items: [
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
    },
    {
      name: "Apps",
      items: [
        {
          name: "VS Code",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        },
        {
          name: "Figma",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        },
      ],
    },
    {
      name: "Services",
      items: [
        {
          name: "Github",
          icon: <GitHub/>, 
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
    },
    {
      name: "os",
      items: [
        {
          name: "Windows",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg",
        },
        {
          name: "Linux",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
        },
      ],
    },
  ];

  return (
    <section className="section">
      <h3 className="text-sm font-medium uppercase text-accent">
        Tecnologies I use
      </h3>
      <div className="flex flex-col space-y-6 mt-8">
        {data.map((item) => (
          <section key={item.name}>
          <h4 className="text-sm uppercase text-accent pb-2 mb-4 border-b border-accent">
            {item.name}
          </h4>
          <div className="grid md:grid-cols-3 grid-cols-1 lg:grid-cols-4 gap-x-2 gap-y-2">
            {item.items.map((i) => (
              <TechCard
                key={i.name}
                {...i}
              />
            ))}
          </div>
        </section>
        ))}
        
      </div>
    </section>
  );
};

export default Technologies;
