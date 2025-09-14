import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark dark:bg-gray-900 text-light dark:text-gray-300 py-6 relative">
      {/* Divider */}
      <div className="  text-center text-sm dark:text-gray-400">
        Designed & Developed by{" "}
        <span className="font-semibold text-primary">Anuj Yadav</span>
      </div>
    </footer>
  );
};

export default Footer;
