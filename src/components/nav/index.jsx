import React from "react";
import Logo from "../../assets/logo.svg";
import { FaGithub, FaTwitter } from "react-icons/fa6";
import {BsLinkedin} from "react-icons/bs"


const Nav = () => {
  return (
    <nav className="py-5 flex justify-between items-center fixed top-0 w-[90%] bg-black">
      <div className="flex gap-4 items-center text-style-primary">
        <div className="max-w-[90px] max-h-[90px]">
          <img
            src={Logo}
            alt="Logo"
          />
        </div>
        <h2 className="text-primary">Opoola Yusuf</h2>
      </div>
      <div className="text-primary text-style-primary">
        <ul className="text-style-primary flex md:gap-10 lg:gap-20">
            <li><a href="#home">Home</a></li>
            <li><a href="#code">&lt;/code&gt;</a></li>
            <li><a href="#about">About</a></li>
        </ul>
      </div>
      <div className="text-style-primary flex gap-4">
        <div className="text-white px-4">
        <FaGithub/>
        </div>
        <div className="text-[#1D9BF0] px-4">
        <FaTwitter/>
        </div>
        <div className="text-[#0A66C2] px-4 ">
          <div className="bg-white rounded">
            <BsLinkedin/>
          </div>
        
        </div>
        
        
        
      </div>
    </nav>
  );
};

export default Nav;
