import React from "react";
import headshot from "../../assets/images/headshot.png"

const Hero = () => {

    return(
        <>
        <header className="flex flex-col-reverse my-16 py-10 md:flex-row md:justify-between justify-center items-center">
            <div className="md:w-8/12">
                <h1 className="text-text font-semibold text-center text-4xl md:text-6xl md:text-left leading-normal">Full-stack web developer</h1>
            </div>
            
            <div className="flex items-center justify-center md:justify-start gap-x-3 gap-y-2 flex-wrap mx-auto object-cover mb-4 md:mb-0">
                <img className="w-[200px] h-[200px] object-cover" src={headshot} alt="headshot"/>
            </div>
        </header>
      </>
    );
};

export default Hero;
