import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaPaperPlane,
} from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { FaTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { BiLogoLinkedin } from "react-icons/bi";

const Contact = () => {
  return (
    <section className="relative py-20  dark:from-gray-900 dark:via-dark dark:to-black">
      {/* Decorative background circles */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-yellow-200 dark:bg-yellow-700 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-yellow-300 dark:bg-yellow-600 rounded-full opacity-20 blur-2xl"></div>

      <div className="container relative mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-14 dark:text-light text-dark">
          Let’s Work <span className="text-primary">Together</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-lg text-dark2 dark:text-gray-300 leading-relaxed">
              I’d love to hear from you! Whether you want to start a project,
              collaborate, or just say hi — drop me a message and I’ll reply as
              soon as possible 🚀
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-primary text-2xl" />
                <a
                  href="mailto:youremail@example.com"
                  className="dark:text-light text-dark font-medium hover:underline"
                >
                  yanuj2508y@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-primary text-2xl" />
                <span className="dark:text-light text-dark font-medium">
                  +91 63530 30068
                </span>
              </div>
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-primary text-2xl" />
                <span className="dark:text-light text-dark font-medium">
                  Gujarat, India
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 mt-8">
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md text-dark hover:text-white hover:bg-secondary2 hover:shadow-xl   transition "
              >
                <BiLogoLinkedin className="text-2xl " />
              </a>
              <a
                href="https://github.com/yourgithub"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-white dark:bg-gray-800 rounded-full  dark:text-light shadow-md text-dark hover:text-white hover:bg-secondary2 hover:shadow-xl transition "
              >
                <FaGithub className="text-2xl " />
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md text-dark hover:text-white hover:bg-secondary2 hover:shadow-xl transition 5"
              >
                <FaTwitter className="text-2xl " />
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md text-dark hover:text-white hover:bg-secondary2 hover:shadow-xl transition "
              >
                <IoLogoInstagram className="text-2xl " />
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md text-dark hover:text-white hover:bg-secondary2 hover:shadow-xl transition "
              >
                <TbWorldWww className="text-2xl " />
              </a>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl space-y-6 hover:shadow-2xl transition"
          >
            <div>
              <label className="block mb-2 text-sm font-semibold dark:text-light text-dark">
                Name
              </label>
              <input
                type="text"
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-dark dark:text-light focus:ring-2 focus:ring-primary outline-none"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-semibold dark:text-light text-dark">
                Email
              </label>
              <input
                type="email"
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-dark dark:text-light focus:ring-2 focus:ring-primary outline-none"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-semibold dark:text-light text-dark">
                Message
              </label>
              <textarea
                rows="4"
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-dark dark:text-light focus:ring-2 focus:ring-primary outline-none"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-yellow-600 transition"
            >
              Send Message <FaPaperPlane className="text-lg" />
            </motion.button>
          </motion.form>
        </div>
        {/* Google Map Embed */}
        <div className="mt-16 rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="My Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.987654321!2d72.571362!3d23.022505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84b1abcdef%3A0xabcdef1234567890!2sAhmedabad%2C%20Gujarat%2C%20India!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
            width="100%"
            height="400"
            className="border-0 rounded-xl shadow-lg"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
