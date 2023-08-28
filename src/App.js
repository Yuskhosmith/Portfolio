import React from "react";
import Nav from "./components/nav";
import Hero from "./components/hero";
import About from "./components/about";
import Code from "./components/code";
import Experiences from "./components/experiences";

function App() {
  return (
    // <div className="snap-x snap-mandatory">
    <div>
      <Nav/>
      <Hero/>
      <About/>
      <Code/>
      <Experiences/>
    </div>
  );
}

export default App;
