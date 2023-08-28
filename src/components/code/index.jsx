import React from "react";
import { CodeCard } from "../card";

const Code = () => {
  const data = {
    one: {
      name: "React",
      color: "primary",
      link: "https://github.com/Yuskhosmith/React",
      description: "I documented reactJS while I learn it",
    },
    two: {
      name: "LMS for Programming Education",
      color: "green",
      link: "http://yuskhosmith.pythonanywhere.com/",
      description: "As part of my the requirements of getting my BSC degree, I would have to do a final year project. My final year project is a learning management system for programming education",
    },
    three: {
      name: "Urge",
      color: "white",
      link: "https://urgetalks.com/",
      description: "",
    },
  };

  return (
    <div
      id="code"
      className="min-h-screen flex flex-col justify-center "
    >
      <h1 className="text-primary text-hero-h1 mb-2.5">&lt;/code&gt;</h1>
      <div className="flex flex-col gap-4">
        <div>
          <CodeCard color={data.one.color}>
            <div className="p-4">
              <h1 className="text-hero-tagline">{data.one.name}</h1>
              <p className="text-lg">{data.one.description}</p>
            </div>
          </CodeCard>
        </div>
        <div className="flex gap-4">
          <CodeCard color={data.two.color}>
            <div className="p-4">
              <h1 className="text-hero-tagline">{data.two.name}</h1>
              <p className="text-lg">{data.two.description}</p>
            </div>
          </CodeCard>
          <CodeCard color={data.three.color}>
            <div className="p-4">
              <h1 className="text-hero-tagline">{data.three.name}</h1>
              <p className="text-lg">{data.three.description}</p>
            </div>
          </CodeCard>
        </div>
      </div>
    </div>
  );
};

export default Code;
