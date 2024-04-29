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
    <img src="/new_solution_image_1.png" alt="a woman with glasses photo" className="w-full" />
  </div>
  <div className="flex flex-col p-4 text-white items-start justify-center gap-y-7 text-[1.25rem] max-w-full md:max-w-[50%]">
    <span className="text-[3rem] font-semibold">Client support Infrastructure</span>
    <span>We offer a comprehensive client support infrastructure service designed to provide you with timely, efficient, and professional assistance.</span>
    <button className="bg-[white] text-black p-2 rounded-[1rem] hover:bg-[#00BDD6] hover:text-white">Discover More</button>
  </div>
</section>

    {/* End of the Hero section */}

    {/*Start of the Introduction section  */}
    <section className="flex flex-col md:flex-row items-center justify-center flex-wrap p-12 ">
        <div className="w-full md:w-[50%] flex flex-row md:flex-col justify-center flex-wrap p-6 pt-[-1rem] gap-y-7">
          <div className="flex flex-row bg-[#EBFDFF] w-[13rem] items-center">
             <img src="/introduction-icon.png" alt="introduction icon" className="w-[4rem]"/>
             <span className=" text-[#00BDD6] text-[1.625rem]">Introduction</span>
          </div>
          <p className="text-[3rem]">From bugs to bucks client  support </p>
          <p className="text-[1.875rem]">End to end client support infrastructure built to empower technology for operational improvement and creating long-term growth.</p>
          <div className=" flex flex-row gap-x-5 ">
              <button  className="border border-black p-2 rounded-[1rem] hover:bg-[#00BDD6] hover:text-white hover:border-none">Learn More</button>
              <button className="border border-black pl-9 pr-9 rounded-[1rem] bg-[#723CDE] text-white hover:bg-white hover:text-black">Sign up</button>
          </div>

           
        </div>
        <div className="w-full md:w-[49%] flex justify-center  ">
          <img src="/new_solution_image_2.png" alt="people smiling " className="w-full"/>
          
        </div>
        

        <div className="w-full md:w-[90%] flex flex-col flex-wrap items-center bg-[#F3F4F6] mt-3 p-8 gap-y-2 rounded-[2rem]">
          <div><span  className="font-serif text-[1.25rem]">As featured in </span></div>
          <div className=" flex items-center gap-x-12">
              <span className="font-serif text-[1.875rem]">BizBeat Insights</span>
              <span  className="font-serif text-[1.5rem]">Financial Scope</span>
              <span  className="font-serif text-[1.5rem] font-extrabold">CommercialCurrentScope</span>
          </div>

        </div>

        <div  className="w-full  flex flex-col md:flex-row items-center justify-center flex-wrap p-12 ">
              <div className="w-full md:w-[50%] flex flex-row md:flex-col justify-center flex-wrap p-6 pt-[-1rem] gap-y-7">
                  
          </div>
        </div>






    </section>














</Layout>
  );
};

export default Solutions;
