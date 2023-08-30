import React, {useRef, useEffect} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Nav from "./components/nav";
import Hero from "./components/hero";
import About from "./components/about";
import Code from "./components/code";
import Experiences from "./components/experiences";

function App() {
  return (
    <div className="overflow-y-scroll h-screen snap-y snap-mandatory">
      <Nav/>
      <Hero/>
      <About/>
      <Code/>
      <Experiences/>
    </div>
  );
}

export default App;
