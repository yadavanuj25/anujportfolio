import React from "react";
import { motion } from "framer-motion";

const FunFact = () => {
  return (
    <div className="mt-16 text-center">
      <motion.div
        className="inline-block px-6 py-3 rounded-full bg-secondary text-white font-semibold text-lg shadow-lg"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        ✨ Fun fact: I code better with ☕ coffee & 🎧 lo-fi beats!
      </motion.div>
    </div>
  );
};

export default FunFact;
