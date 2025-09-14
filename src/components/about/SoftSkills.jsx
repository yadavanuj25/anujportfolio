import React from "react";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaComments,
  FaLightbulb,
  FaSmile,
  FaRegClock,
} from "react-icons/fa";
const softSkills = [
  {
    id: 1,
    skill: "Teamwork",
    icon: <FaUsers className="text-4xl text-blue-500" />,
  },
  {
    id: 2,
    skill: "Communication",
    icon: <FaComments className="text-4xl text-green-500" />,
  },
  {
    id: 3,
    skill: "Problem Solving",
    icon: <FaLightbulb className="text-4xl text-yellow-500" />,
  },
  {
    id: 4,
    skill: "Adaptability",
    icon: <FaRegClock className="text-4xl text-purple-500" />,
  },
  {
    id: 5,
    skill: "Positive Attitude",
    icon: <FaSmile className="text-4xl text-pink-500" />,
  },
];

const SoftSkills = () => {
  return (
    <>
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6 text-center dark:text-light text-dark">
          Soft Skills ✨
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
          {softSkills.map((skill) => (
            <motion.div
              key={skill.id}
              className="p-4 rounded-xl shadow-md bg-gray-50 dark:bg-dark2 flex flex-col items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 3 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {skill.icon}
              <p className="mt-2 text-dark dark:text-light font-medium">
                {skill.skill}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SoftSkills;
