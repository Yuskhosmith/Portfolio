import React from "react";
import headShot from "../../assets/images/headshot.png";
import Link from "../../assets/icons/link";
import GitHub from "../../assets/icons/github";
import CodeGridX from "../../assets/images/codegridx.png";
import UrgeTalks from "../../assets/images/urgetalks.png";
import QuizAPP from "../../assets/images/quizapp.png";
import EmailClient from "../../assets/images/emailclient.png";
import Network from "../../assets/images/network.png";
import Auctions from "../../assets/images/auctions.png";

const Work = () => {
  const items = [
    {
      tag: "Final Year Project",
      name: "CodeGridX",
      tagline:
        "A learning management system for programming education.",
      img: CodeGridX,
      link: "http://yuskhosmith.pythonanywhere.com/",
    },
    {
      tag: "Gig",
      name: "Urge Talks",
      tagline:
        "A subscription based video sharing app that allows speakers share their content to a new audience.",
      img: UrgeTalks,
      link: "https://urgetalks.com/",
    },
    {
      name: "Email Client",
      tagline:
        "A simple email client app, users can send and recieve emails, and also send broadcast/copy of mails.",
      img: EmailClient,
      github: "https://github.com/Yuskhosmith/CS50-Web-Programming/tree/master/Project%203"
    },
    {
      name: "Network",
      tagline:
        "A social network where users can follow eachother, post, like others post, and also edit previous posts.",
      img: Network,
      github: "https://github.com/Yuskhosmith/CS50-Web-Programming/tree/master/project4"
    },
    {
      name: "Commerce",
      tagline:
        "An auction website where people can bid for listed items, and also comment on listed items.",
      img: Auctions,
      github: "https://github.com/Yuskhosmith/CS50-Web-Programming/tree/master/Project%202"
    },
    {
      name: "Quiz App",
      tagline:
        "A pop quiz app that allows teachers set quiz, and students attempt it by using the quiz id.",
      img: QuizAPP,
      github: "https://github.com/Yuskhosmith/QuizApp"
    },
  ];
  return (
    <>
      <header className="space-y-2 mt-28 mb-12">
        <h1 className="text-text font-semibold text-4xl md:text-6xl leading-normal">
          Work.
        </h1>
        <p className="text-accent">Check out the projects I worked on!</p>
      </header>
      {items.map((item, index) => (
        <section
          className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
            index === 0 ? "mt-24 mb-42" : "my-42"
          }`}
          key={index}
        >
          <div className="space-y-4 text-accent">
            {item.tag &&
            <span className="bg-blue-600/10 block w-max text-sm rounded-lg px-4 text-blue-600 py-1.5">
              {item.tag}
            </span>
            }
            <h2 className="text-4xl text-text font-bold">{item.name}</h2>
            <p>{item.tagline}</p>
            <div className="flex flex-wrap gap-2 ">
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="cursor-pointer justify-center px-5 py-2 rounded-lg flex items-center space-x-2 w-max border border-accent bg-secondary"
                >
                  <Link />
                  <span>Visit</span>
                </a>
              )}
              {item.github && (
                <a
                  href={item.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="cursor-pointer justify-center px-5 py-2 rounded-lg flex items-center space-x-2 w-max border border-accent bg-secondary"
                >
                  <GitHub />
                  <span>GitHub</span>
                </a>
              )}
            </div>
          </div>

          <figure
            className={`w-full h-full overflow-hidden ${
              index % 2 === 1 ? "md:order-first" : ""
            }`}
          >
            <img
              src={item.img}
              alt="headshot"
              loading="lazy"
              draggable="false"
              fit="cover"
              data-zoomable="true"
              className="object-cover w-full rounded-md border border-white/10"
            />
          </figure>
        </section>
      ))}
    </>
  );
};

export default Work;
