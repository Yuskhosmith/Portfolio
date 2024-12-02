import React from "react";
import Card from "../card";

const Pages = () => {
  return (
    <section className="section">
      <h3
        className="text-sm font-medium uppercase text-accent"
      >
        Pages
      </h3>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <Card
          title={"Projects"}
          tagline={"Unleasing my creative powers, one project at a time 🎨"}
          link="/work"
        />
        <Card
          title={"Experience"}
          tagline={"Bringing Ideas to life, pixel by pixel, code by code 💡"}
          link={{ hash: "experience" }}
        />
      </div>
    </section>
  );
};

export default Pages;
