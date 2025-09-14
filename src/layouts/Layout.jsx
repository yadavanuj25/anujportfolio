import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const Layout = () => {
  return (
    <>
      <div>
        {/* Navbar */}
        <Navbar />

        {/* Main content */}
        <main>
          <Outlet />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
