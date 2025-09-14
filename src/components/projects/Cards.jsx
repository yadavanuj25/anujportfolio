import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Cards = ({ project }) => {
  return (
    <>
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <h3 className="text-xl font-semibold dark:text-light text-dark">
          {project.title}
        </h3>
        <p className="text-dark2 dark:text-gray-300 mt-1">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1 mt-2">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs rounded bg-primary text-white"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-4 mt-4">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1 bg-primary text-white rounded hover:bg-yellow-600 transition"
          >
            <FaExternalLinkAlt /> Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1 border border-primary text-primary rounded hover:bg-primary hover:text-white transition"
          >
            <FaGithub /> Code
          </a>
        </div>
      </div>
    </>
  );
};

export default Cards;
