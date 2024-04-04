import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Careers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex justify-center items-center font-bold text-3xl">
        Careers
      </div>
      <Footer />
    </div>
  );
};

export default Careers;
