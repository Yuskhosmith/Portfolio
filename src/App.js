import React from "react";
import Nav from "./components/nav";
import Hero from "./components/hero";
import About from "./components/about";
import Code from "./components/code";

function App() {
  return (
    // <div className="snap-x snap-mandatory">
    <div>
      <Nav/>
      <Hero/>
      <About/>
      <Code/>
    </div>
  );
}

export default App;
