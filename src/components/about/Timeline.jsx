import { motion } from "framer-motion";
import { FaGraduationCap, FaLaptopCode, FaBriefcase } from "react-icons/fa";

const Timeline = () => {
  const timeline = [
    {
      id: 1,
      year: "2021",
      title: "Graduated in Computer Science",
      description:
        "Completed my Bachelor's degree with focus on web development and modern technologies.",
      icon: <FaGraduationCap className="text-2xl text-primary" />,
    },
    {
      id: 2,
      year: "2022",
      title: "Started My Development Journey",
      description:
        "Worked on personal projects and learned React, Tailwind CSS, and Node.js.",
      icon: <FaLaptopCode className="text-2xl text-secondary" />,
    },
    {
      id: 3,
      year: "2023 - Present",
      title: "Frontend Developer",
      description:
        "Working as a Frontend Developer building modern, responsive web apps with React & Tailwind.",
      icon: <FaBriefcase className="text-2xl text-yellow-500" />,
    },
  ];

  return (
    <section className="py-16 bg-light dark:bg-dark">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-light text-dark">
          My Journey
        </h2>

        <div className="relative border-l-4 border-primary dark:border-secondary">
          {timeline.map((item, index) => (
            <motion.div
              key={item.id}
              className="mb-10 ml-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-white dark:bg-dark rounded-full border-2 border-primary">
                {item.icon}
              </span>
              <h3 className="text-xl font-semibold text-dark dark:text-light">
                {item.year} — {item.title}
              </h3>
              <p className="text-dark2 dark:text-gray-300 mt-2">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
