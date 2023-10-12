import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Work",
      link: "/work",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    <nav className="bg-secondary rounded-full m-auto my-4 p-1 flex text-text justify-center w-fit text-xs md:text-sm">
      {links.map((link) => (
        <NavLink
          to={link.link}
          key={link.link}
          className={({ isActive }) =>
            isActive ? "bg-background rounded-full px-5 py-3 font-medium" : "px-5 py-3 font-medium"
          }
        >
          {link.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default Nav;
