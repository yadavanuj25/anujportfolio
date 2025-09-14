import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import Cards from "../components/projects/Cards";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A personal portfolio website built with React, Tailwind CSS, and Framer Motion.",
    details:
      "This project was built to showcase my skills, projects, and experiences. It includes a responsive design, smooth animations, and a dark/light mode toggle.",
    image: "/images/image1.png",
    tech: ["React", "Tailwind", "Framer Motion"],
    demo: "https://your-portfolio-demo.com",
    github: "https://github.com/your-portfolio",
  },
  {
    id: 2,
    title: "E-Commerce Store",
    description:
      "A full-stack MERN e-commerce app with shopping cart and authentication.",
    details:
      "This e-commerce store allows users to browse products, add them to a cart, and complete secure checkout with authentication.",
    image: "/images/image2.png",
    tech: ["MERN", "Redux", "Tailwind"],
    demo: "https://your-ecommerce-demo.com",
    github: "https://github.com/your-ecommerce",
  },
  {
    id: 3,
    title: "Blog Platform",
    description:
      "A blog platform where users can create, edit, and comment on posts.",
    details:
      "Users can write blogs, interact with others via comments, and explore articles with a clean UI. Built with scalability and simplicity in mind.",
    image: "/images/image3.png",
    tech: ["React", "Node.js", "MongoDB"],
    demo: "https://your-blog-demo.com",
    github: "https://github.com/your-blog",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="py-16 bg-light dark:bg-dark">
      <div className="container">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 dark:text-light text-dark"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden cursor-pointer group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Hover animation */}
              <motion.div
                className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-white font-semibold">View Details</span>
              </motion.div>
              <Cards project={project} />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <motion.h3
            className="text-2xl font-semibold mb-4 dark:text-light text-dark"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Want to build something amazing together?
          </motion.h3>
          <Link
            to="/contact"
            className="px-6 py-3 bg-primary text-white rounded-lg shadow-md hover:bg-yellow-600 transition"
          >
            Contact Me
          </Link>
        </div>
      </div>

      {/* Modal for Case Study */}
      {selectedProject && (
        <motion.div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white dark:bg-gray-900 rounded-xl max-w-5xl w-full p-6 relative shadow-xl"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
              onClick={() => setSelectedProject(null)}
            >
              ✖
            </button>

            {/* Modal Content */}
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold dark:text-light text-dark mb-2">
              {selectedProject.title}
            </h3>
            <p className="text-dark2 dark:text-gray-300 mb-4">
              {selectedProject.details}
            </p>

            {/* Tech stack badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedProject.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-lg"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <a
                href={selectedProject.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-yellow-600 transition"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;
