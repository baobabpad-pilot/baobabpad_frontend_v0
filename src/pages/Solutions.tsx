import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";

const Solutions = () => {
  return (
<Layout>
    {/* Start of the Hero section  */}
 <section className="flex flex-col md:flex-row bg-[#E8C245] flex-wrap">
  <div className="w-full md:w-[50%] flex justify-center">
    <img src="/hero-section-solution-image.png" alt="a woman with glasses photo" className="w-full" />
  </div>
  <div className="flex flex-col p-4 text-white items-start justify-center gap-y-7 text-[1.25rem] max-w-full md:max-w-[50%]">
    <span className="text-[3rem] font-semibold">Client support Infrastructure</span>
    <span>We offer a comprehensive client support infrastructure service designed to provide you with timely, efficient, and professional assistance.</span>
    <button className="bg-[white] text-black p-2 rounded-[1rem]">Discover More</button>
  </div>
</section>

    {/* End of the Hero section */}
</Layout>
  );
};

export default Solutions;
