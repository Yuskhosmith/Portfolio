import React from "react";
import headshot from "../../assets/images/headshot.png"
import { Pill } from "../card";
import GitHub from "../../assets/icons/github";
import Resume from "../../assets/icons/resume";

const Hero = () => {
    const pills = [
        {
            name: "Github",
            icon: <GitHub/>,
            link: "https://github.com/Yuskhosmith"
        },
        {
            name: "Resume",
            icon: <Resume/>,
            link: "https://docs.google.com/document/d/1skm0BlSu-vGC1zhvTgqwwZ24VZ8fuX8QXNQLPGnj68E/edit?usp=drivesdk",
        }
    ]
    return(
        <>
        <header className="flex flex-col-reverse mt-32 mb-16 py-10 md:flex-row md:justify-between justify-center items-center">
            <div className="md:w-8/12 space-y-6">
                <div className="lg:space-y-4">
                <p className="font-semibold text-center text-lg md:text-xl md:text-left text-white/50"><span>Hi, I am </span><span className="text-text">Yusuf Opoola</span></p>
                <h1 className="text-text font-semibold text-center text-4xl md:text-6xl md:text-left leading-normal">Full-stack web developer</h1>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-x-3 gap-y-2 flex-wrap">
                    {pills.map((item) => (
                        <Pill key={item.name} {...item}/>
                    ))}
                </div>
            </div>
            
            <div className="flex items-center justify-center md:justify-start gap-x-3 gap-y-2 flex-wrap mx-auto object-cover mb-4 md:mb-0">
                <img className="w-[200px] h-[200px] object-cover" src={headshot} alt="headshot"/>
            </div>
        </header>
      </>
    );
};

export default Hero;
