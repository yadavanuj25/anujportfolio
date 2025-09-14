import React from "react";

const PreLoader = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-gray-200">
      {/* Your logo */}
      {/* <img
        src="/images/image1.png"
        alt="Logo"
        className="w-36 h-24 mb-6 animate-pulse"
      /> */}

      {/* Spinner */}
      <div className="w-24 h-24 border-4 border-[#003b19] border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default PreLoader;
