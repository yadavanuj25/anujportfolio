import React from "react";

const DownloadResume = () => {
  return (
    <a
      href="/resume.pdf"
      className="px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow hover:bg-yellow-500 transition"
      download
    >
      Download Resume
    </a>
  );
};

export default DownloadResume;
