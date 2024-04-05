import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex justify-center items-center font-bold text-3xl">
        Contact Us
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
