import React, { Fragment } from "react";
import Card from "../card";

const Experience = () => {
  const ex = [
    {
      title: "Software Engineer",
      company: "Eulav",
      date: "Feb, 2024 - Present",
    },
    {
      title: "Full Stack Web and Python Instructor",
      company: "New Horizons",
      date: "Jan, 2024 - Present",
    },
    {
      title: "Full Stack Engineer",
      company: "Tech Semester",
      date: "Aug, 2023 - Apr, 2024",
    },
    {
      title: "Engineering Intern",
      company: "Chronicles SDC",
      date: "Jan - Aug, 2022",
    },
  ];
  const ed = [
    {
        school: "Lagos State University",
        course: "Bsc. Computer Science",
        date: "2018-2023"
    }
  ];
  return (
    <section className="section grid gap-x-8 gap-y-24 md:grid-cols-2">
      <div>
        <h3 className="text-sm font-medium uppercase text-accent">
          Experience
        </h3>
        <div className="mt-4 grid gap-2">
          {ex.map((e, index) => (
            <Fragment key={index}>
              <Card
                title={e.company}
                tagline={e.title}
                date={e.date}
              />
            </Fragment>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-sm font-medium uppercase text-accent">Education</h3>
        <div className="mt-4 grid gap-2">
          {ed.map((e, index) => (
            <Fragment key={index}>
              <Card
                title={e.school}
                tagline={e.course}
                date={e.date}
              />
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
