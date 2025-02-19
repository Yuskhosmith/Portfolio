import React from "react";
import { ContactCard } from "../../components/card";
import Twitter from "../../assets/icons/twitter";
import GitHub from "../../assets/icons/github";
import LinkedIn from "../../assets/icons/linkedin";
import Instagram from "../../assets/icons/instagram";
import Email from "../../assets/icons/email";

const Contact = () => {
  const items = [
    {
      name: "Twitter",
      tagline: "Follow me on Twitter!",
      link: "https://twitter.com/yuskhosmith",
      icon: <Twitter/>
    },
    {
      name: "GitHub",
      tagline: "Follow me on GitHub!",
      link: "https://github.com/Yuskhosmith",
      icon: <GitHub c="h-8 w-8"/>
    },
    {
      name: "LinkedIn",
      tagline: "Connect with me on LinkedIn!",
      link: "https://www.linkedin.com/in/yusufopoola/",
      icon: <LinkedIn/>
    },
    {
      name: "Instagram",
      tagline: "Follow me on Instagram!",
      link: "https://www.instagram.com/yuskhosmith/",
      icon: <Instagram/>
    },
    {
      name: "Email",
      tagline: "Send me an email!",
      link: "mailto:yuskhosmith1@gmail.com",
      icon: <Email/>
    },
  ]
  return (
    <>
      <header className="space-y-2 mt-28 mb-12">
        <h1 className="text-text font-semibold text-4xl md:text-6xl leading-normal">
          Contact.
        </h1>
        <p className="text-accent">If you have any questions, feel free to contact me.</p>
      </header>
      <div className="grid gap-4 md:grid-cols-2 md:mb-[122px]">
        {items.map((item) => (
          <ContactCard key={item.name} {...item}/>
        ))}
      </div>
    </>
  );
};

export default Contact;
