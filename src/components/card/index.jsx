import React from "react";

const Card = ({ title, tagline, date }) => {
  return (
    <div className="card-base">
      {date ? (
        <div className="flex space-x-2 items-center justify-between">
          <h1 className="text-text">{title || "Project"}</h1>
          <span className="text-sm text-accent">{date}</span>
        </div>
      ) : (
        <h1 className="text-text">{title || "Project"}</h1>
      )}
      <p className="text-primary text-sm">
        {tagline ||
          "My projects and contributions to the open-source community."}
      </p>
    </div>
  );
};

export default Card;

export const TechCard = ({name, src}) => {
  return(
    <div className="p-4 border border-accent rounded-md flex gap-2 justify-center bg-secondary space-x-4">
      <div className="rounded-lg flex">
        <img src={src} alt={name} className="flex-shrink-0 h-5 w-5" />
      </div>
      <span className="flex-1 truncate text-sm text-text">{name}</span>
    </div>
  );
}
