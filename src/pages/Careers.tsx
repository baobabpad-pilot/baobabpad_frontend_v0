import React, { useEffect, useState } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import styles from "../styles/careers.module.css";
import Auth from "@/components/career_section/Auth";
import Link from "next/link";


const Careers = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <section className="flex flex-col md:flex-row bg-[#6B8BEB] flex-wrap">
        <div className="w-full md:w-[50%] flex justify-center">
          <img src="/career_hero_image.png" alt="a woman with glasses photo" className="w-full" />
        </div>
        <div className="flex flex-col p-4 text-white items-start justify-center gap-y-7 text-[1.25rem] max-w-full md:max-w-[50%]">
         <span className="text-[3rem] font-semibold">WE ARE HIRING </span>
         <span>Are you Africa-based talented, innovative and creative software and product developer?

          Become part of  Baobabpad, a virtual technology village  designed to empower YOU. 
          Become a changemaker and shape the future of technology and innovation across the world. Contribute to projects that tackle real-world challenges and make a positive impact. 
          </span>
          <Link href="#2">
          <button className="bg-[white] text-black p-2 rounded-[1rem] hover:bg-[#00BDD6] hover:text-white">Discover More</button>
          </Link>
        </div>
      </section>
      {/*end of section 1*/}

      <div
       className="flex-1 flex justify-center items-center font-bold text-3x bg-gray-50  "
       
      >
        <div
         className="w-[98%]  md:flex mt-[3rem] md:mb-[8rem] mb-4"
        >
          <div className=" md:w-[50%] w-[100%]">
            <div className="container mx-30 mt-10 flex flex-row justify-center items-center">
              <div
                className="img1"
                style={{ marginRight: "25px", marginTop: "50px" }}
              >
                <Image
                  src={"/user3.png"}
                  width={70}
                  height={70}
                  alt="Picture of the author"
                />
              </div>
              {/* Image 2 */}
              <div className="img2">
                <Image
                  src={"/user4.png"}
                  width={120}
                  height={120}
                  alt="Picture of the author"
                />
              </div>
            </div>
            <div
              className="container mx-30  flex flex-row justify-center items-center"
              // style={{ backgroundColor: "red" }}
            >
              {/* Image 2 */}
              <div
                className="img1"
                style={{ marginRight: "30px", marginBottom: "30px" }}
              >
                <Image
                  src={"/user2.png"}
                  width={60}
                  height={60}
                  alt="Picture of the author"
                />
              </div>
              {/* Image 2 */}
              <div className="img2 mt-5 " style={{ marginRight: "20px" }}>
                <Image
                  src={"/user1.png"}
                  width={90}
                  height={90}
                  alt="Picture of the author"
                />
              </div>
            </div>
            <div className="info mt-15 md:w-[50%] w-[70%] text-xl mx-auto mt-4">
              <p style={{ marginLeft: "10px", color: "rgb(0,189,214)" }}>
                Connecting Africa Talent, <br /> Virtually, and Globally
              </p>
            </div>
          </div>
          {/* ------------------------------------------------ */}
         
          {/* component */}
          <div className="md:mt-0 mt-[5rem]">
          <Auth />
          </div>
          {/* -------------------------------------------------------- */}
        </div>
      </div>
      <div
        className="mt-[8%] "
        
      >
        <h2 className=" text-center text-3xl">
          <b style={{ color: "rgb(50, 56, 66)" }}>Our benefits</b>
        </h2>
       
        <div >
          <div className="flex gap-3 w-[90%] mx-auto my-8">
            <div className="img1 md:mt-0 mt-5   hover:transform hover:scale-105 transition-transform duration-300">
              <img src="/benefits (5).png" alt="Competitive salary" className="w-full h-[100%]" />
            </div>
            {/* Image 2 */}
            <div className="img2 hover:transform hover:scale-105 transition-transform duration-300">
              <img src="benefits (4).png" alt="Health and vision insurance" className="w-full h-auto" />
            </div>
            <div className="img2 hover:transform hover:scale-105 transition-transform duration-300">
              <img src="benefits (3).png" alt="Mental health" className="w-full h-full" />
            </div>
          </div>
          <div className="flex gap-3 w-[90%] mx-auto my-8">
            <div className="img1 md:mt-0 mt-5 hover:transform hover:scale-105 transition-transform duration-300">
              <img src="/benefits (2).png" alt="Growth Mentorship" className="w-full h-auto" />
            </div>
            {/* Image 2 */}
            <div className="img2 hover:transform hover:scale-105 transition-transform duration-300">
              <img src="benefits (6).png" alt="Coworking space" className="w-full h-auto" />
            </div>
            <div className="img2 hover:transform hover:scale-105 transition-transform duration-300">
              <img src="benefits (1).png" alt="Learning & development" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>

       {/*
      <h2 className="mt-10 text-center text-3xl">
        <b style={{ color: "rgb(50, 56, 66)" }}>Office Space</b>
      </h2>

      <div className="flex gap-3 w-[90%] mx-auto my-8">
        <div
          className="flex-auto bg-red-600 w-46 bg-cover bg-center"
          style={{
            height: "200px",
            marginRight: "5px",
            backgroundImage:
              "url('https://i.pinimg.com/564x/b0/aa/71/b0aa712b004c5458e8ff7fa22394f2e4.jpg')",
          }} 
        ></div>
        <div
          className="flex-auto bg-blue-600 w-64 bg-cover bg-center"
          style={{
            height: "200px",
            marginLeft: "5px",
            backgroundImage:
              "url('https://i.pinimg.com/564x/82/32/14/823214d1f8e66df38a13465358982924.jpg')",
          }} 
        ></div>
      </div>

      <div className="container flex mx-auto px-4 lg:px-20 mt-5 flex flex-row justify-between items-center flex-wrap">
        <div
          className="flex-auto w-64 bg-cover bg-center"
          style={{
            height: "400px",
            marginRight: "5px",
            backgroundImage:
              "url('https://i.pinimg.com/564x/59/16/6d/59166da12bcdd1a621b02381413ee256.jpg')",
          }} // Adjust margin-right as needed
        ></div>

        <div
          className="flex-auto  w-64"
          style={{ marginRight: "5px" }} // Adjust margin-right as needed
        >
          <img src="/Image33 (2).png" alt="" height="400px" />
        </div>
        <div
          className="flex-auto  w-64 rounded"
          style={{}} // Adjust height as needed
        >
          <img src="/Image33 (1).png" alt="" height="400px" />
        </div>
      </div>
        */}


        {/*division of stores*/}

        <h2 id="2" className="mt-10 text-center text-3xl">
        <b style={{ color: "rgb(50, 56, 66)" }}>Stories</b>
      </h2>

      <div className="md:flex gap-8 w-[80%] mx-auto mt-11">
        <div
          className="flex-auto w-46"
          style={{ height: "200px", marginRight: "5px" }}
        >
          <iframe
            className="w-full h-full"
            src="Blenda-video.mp4"
            title="Google Drive video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            
          >1</iframe>
        </div>
        <div
          className="flex-auto w-46"
          style={{ height: "200px", marginRight: "5px" }}
        >
           <iframe
            className="w-full h-full md:mt-0 mt-5"
            src="/pascaline-video.mp4"
            title="Pascaline's video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          >2</iframe>
        </div>
      </div>

      <div className="md:flex gap-8 w-[80%] mx-auto mt-5 mb-11">
        <div
          className="flex-auto w-46"
          style={{ height: "200px", marginRight: "5px" }}
        >
           <iframe
            className="w-full h-full"
            src="https://drive.google.com/file/d/1nhnhYopT172YPmDfpiNit4YdCEixEkx4/preview"
            title="Google Drive video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          >3</iframe>
        </div>

        <div
          className="flex-auto w-46 md:mt-0 mt-5"
          style={{ height: "200px", marginRight: "5px" }}
        >
           <iframe
            className="w-full h-full"
            src="https://drive.google.com/file/d/1SAkENMU536n9lh9cbPFE8mr_6zBdRc1G/preview"
            title="Google Drive video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          >2</iframe>
        </div>
      
      </div>
      {/*End of stories*/}

      <div
        className="footer"
        style={{ marginTop: isSmallScreen ? "30px" : "" }}
      >
        <Footer />
      </div>
    </div>
  );
};

export default Careers;
