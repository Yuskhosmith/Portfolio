import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  console.log(isScrolled);
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
    <div className={`bg-secondary fixed top-0 left-0 right-0 z-50 m-0 py-4 w-full shadow-lg ${isScrolled ? "bg-opacity-50" : "bg-opacity-0"}`}>
      <nav className="bg-secondary rounded-full m-auto p-1 flex text-text justify-center w-fit text-xs md:text-sm">
        {links.map((link) => (
          <NavLink
            to={link.link}
            key={link.link}
            className={({ isActive }) =>
              isActive
                ? "bg-background rounded-full px-5 py-3 font-medium"
                : "px-5 py-3 font-medium"
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Nav;
