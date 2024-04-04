import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Baobabpad = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex justify-center items-center font-bold text-3xl">
        Baobabpad
      </div>
      <Footer />
    </div>
  );
};

export default Baobabpad;
