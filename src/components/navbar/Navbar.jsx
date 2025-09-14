import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "About",
    path: "/about",
  },
  {
    id: 3,
    title: "Projects",
    path: "/projects",
  },
  {
    id: 4,
    title: "Skills",
    path: "/skills",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="sticky top-0 z-50 bg-gray-100 shadow-md">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="container py-5 flex justify-between items-center"
        >
          {/* logo image */}
          <div>
            <h1 className="font-bold text-2xl">AY-CODING</h1>
          </div>
          {/* Menu links */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-3">
              {NavbarMenu.map((menu) => (
                <li key={menu.id}>
                  <Link
                    to={menu.path}
                    className="inline-block py-2 px-3 hover:text-secondary relative group"
                  >
                    <div className="w-2 h-2 bg-secondary absolute mt-4 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden"></div>
                    {menu.title}
                  </Link>
                </li>
              ))}
              <button className="primary-btn">Hire me</button>
            </ul>
          </div>
          {/* Mobile menu  */}
          <div className="lg:hidden">
            {open ? (
              <IoMdClose
                className="text-4xl cursor-pointer"
                onClick={() => setOpen(false)}
              />
            ) : (
              <IoMdMenu
                className="text-4xl cursor-pointer"
                onClick={() => setOpen(true)}
              />
            )}
          </div>
          {/* contact button  */}
        </motion.div>
        {/* Mobile menu dropdown */}
        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-6 gap-4"
            >
              {NavbarMenu.map((menu) => (
                <li key={menu.id}>
                  <Link
                    to={menu.path}
                    className="block py-2 px-3 hover:text-secondary transition"
                    onClick={() => setOpen(false)}
                  >
                    {menu.title}
                  </Link>
                </li>
              ))}
              <button
                className="px-4 py-2 bg-secondary text-white rounded-md hover:bg-secondary/90 transition"
                onClick={() => setOpen(false)}
              >
                Hire me
              </button>
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
