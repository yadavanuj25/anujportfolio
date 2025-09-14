// src/pages/About.jsx
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3 } from "react-icons/fa";
import {
  TbBrandJavascript,
  TbBrandTypescript,
  TbBrandBootstrap,
} from "react-icons/tb";
import { TiCss3 } from "react-icons/ti";
import { SiMongodb, SiTailwindcss } from "react-icons/si";
import anujImg from "/images/image1.png";
import SoftSkills from "../components/about/SoftSkills";
import FunFact from "../components/about/FunFact";
import DownloadResume from "../components/download/DownloadResume";
import Timeline from "../components/about/Timeline";

const TechStack = [
  {
    id: 1,
    tech: "HTML",
    icon: <FaHtml5 className="text-4xl text-orange-600" />,
  },
  {
    id: 2,
    tech: "CSS",
    icon: <TiCss3 className="text-4xl text-blue-600" />,
  },
  {
    id: 3,
    tech: "React",
    icon: <FaReact className="text-4xl text-sky-400" />,
  },
  {
    id: 4,
    tech: "JavaScript",
    icon: <TbBrandJavascript className="text-4xl text-yellow-400" />,
  },
  {
    id: 5,
    tech: "TypeScript",
    icon: <TbBrandTypescript className="text-4xl text-blue-500" />,
  },
  {
    id: 6,
    tech: "Bootstrap",
    icon: <TbBrandBootstrap className="text-4xl text-purple-600" />,
  },
  {
    id: 7,
    tech: "Tailwind",
    icon: <SiTailwindcss className="text-4xl text-teal-400" />,
  },
  {
    id: 8,
    tech: "MongoDB",
    icon: <SiMongodb className="text-4xl text-green-600" />,
  },
  {
    id: 9,
    tech: "NodeJS",
    icon: <FaNodeJs className="text-4xl text-green-500" />,
  },
  {
    id: 10,
    tech: "Database",
    icon: <FaDatabase className="text-4xl text-gray-600" />,
  },
];

const About = () => {
  return (
    <section className="container py-16">
      {/* Intro Section */}
      <div className="grid grid-cols-1  md:grid-cols-3 items-center gap-10">
        <motion.img
          src={anujImg}
          alt="Profile"
          className="w-48 h-48 md:w-56 md:h-56 mx-auto md:mx-0 rounded-full object-cover shadow-lg border-4 border-primary"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold mb-3 dark:text-light text-dark">
            About Me
          </h2>
          <p className=" text-dark2 dark:text-gray-300 max-w-2xl leading-relaxed">
            Hi, I’m{" "}
            <span className="text-primary font-semibold">ANUJ YADAV</span>, a{" "}
            <span className="text-secondary font-semibold">
              Frontend Developer
            </span>{" "}
            with 1 year of professional experience. I love building interactive,
            user-friendly, and responsive websites using modern technologies
            like React,Tailwind and I have knowledge of MongoDB and Nodejs also.
            I’m passionate about crafting clean UIs, writing scalable code, and
            solving challenging problems in web development.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mt-14">
        <h3 className="text-2xl font-bold mb-6 text-center dark:text-light text-dark">
          My Tech Stack
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {TechStack.map((technology) => (
            <div
              key={technology.id}
              className="flex flex-col items-center p-4 rounded-xl bg-light dark:bg-dark shadow-md hover:scale-105 transition"
            >
              {technology.icon}
              <p className="mt-2">{technology.tech}</p>
            </div>
          ))}
        </div>
      </div>
      {/* SoftSkills  */}
      <SoftSkills />
      {/* Timeline */}
      <Timeline />
      {/* Experience Section */}
      <div className="mt-14">
        <h3 className="text-2xl font-bold mb-6 text-center dark:text-light text-dark">
          Experience
        </h3>
        <div className="space-y-6">
          <div className="p-6 bg-light dark:bg-dark rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-lg font-bold text-primary">
              Frontend Developer
            </h4>
            <p className="text-sm text-dark2 dark:text-gray-400">
              Company XYZ • 2024 - Present
            </p>
            <p className="mt-2 text-dark dark:text-gray-200">
              Worked on creating responsive web apps, optimized UI components,
              and improved performance with React and TailwindCSS.
            </p>
          </div>
          <div className="p-6 bg-light dark:bg-dark rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-lg font-bold text-primary">Internship</h4>
            <p className="text-sm text-dark2 dark:text-gray-400">
              Company ABC • 2023
            </p>
            <p className="mt-2 text-dark dark:text-gray-200">
              Assisted in building dashboard UI, collaborated with senior
              developers, and gained practical MERN stack experience.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-14 flex justify-center">
        <DownloadResume />
      </div>
      {/* Fun Fact */}
      <FunFact />
    </section>
  );
};

export default About;
