import React from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import styles from "../styles/careers.module.css";
import user1 from "../career_images/user1.png";
import user2 from "../career_images/user2.png";
import user3 from "../career_images/user3.png";
import user4 from "../career_images/user4.png";
import msg from "../career_images/msg.png";
import google from "../career_images/Google.png";
import microsoft from "../career_images/microsoft.png";
import linkedIn from "../career_images/linkedIn.png";

const Careers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div
        className={`${styles.container} flex-1 flex justify-center items-center font-bold text-3xl`}
        style={{
          backgroundColor: "rgb(245,245,245) ",
          height: "100vh",
          width: "100%",
        }}
      >
        <div
          className={`${styles.flexContainer} flex flex-row`}
          style={{ height: "100vh" }}
        >
          <div className={styles.part1}>
            <div className="container mx-30 mt-10 flex flex-row justify-center items-center">
              <div
                className="img1"
                style={{ marginRight: "25px", marginTop: "50px" }}
              >
                <Image
                  src={user3}
                  width={70}
                  height={70}
                  alt="Picture of the author"
                />
              </div>
              {/* Image 2 */}
              <div className="img2">
                <Image
                  src={user4}
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
                  src={user2}
                  width={60}
                  height={60}
                  alt="Picture of the author"
                />
              </div>
              {/* Image 2 */}
              <div className="img2 mt-5 " style={{ marginRight: "20px" }}>
                <Image
                  src={user1}
                  width={90}
                  height={90}
                  alt="Picture of the author"
                />
              </div>
            </div>
            <div className="info mt-20">
              <p style={{ marginLeft: "10px", color: "rgb(0,189,214)" }}>
                Connecting Africa Talent, <br /> Virtually, and Globally
              </p>
            </div>
          </div>

          <div className={styles.part2}>
            <div className="container mx-30 mt-10 flex flex-row justify-center items-center ">
              <Image src={msg} alt="" className="object-contain" />
            </div>
            <p className="text-2xl">Karibu Sana</p>
            <div>
              <div
                className="authentication flex flex flex-col justify-center items-center "
                style={{ marginTop: "20px" }}
              >
                <button
                  className="flex items-center bg-white border border-red-600 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  style={{ width: "300px" }}
                >
                  <Image src={google} alt="" />
                  <span>Sign Up with Google</span>
                </button>
                <button
                  className="flex items-center mt-5 bg-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  style={{ width: "300px" }}
                >
                  <Image src={linkedIn} alt="" />
                  <span>LinkedIn</span>
                </button>
                <button
                  className="flex items-center mt-5 bg-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  style={{ width: "300px" }}
                >
                  <Image src={microsoft} alt="" />
                  <span>Sign up with Github</span>
                </button>
              </div>
              <div className="section4 mt-5 text-base font-normal">
                <span className="tttt ">______________ </span>OR{" "}
                <span>______________ </span>
                <p className="mt-3">
                  {" "}
                  <b>sign up with your email</b>{" "}
                </p>
                <label className="text-xs opacity-80" htmlFor="email">
                  email@email.com
                </label>
              </div>
              <p className="text-base font-normal text-xs  opacity-70">
                By continuing, you agree to our{" "}
                <span style={{ color: "rgb(0,189,214)" }}>
                  {" "}
                  <b> Terms & Conditions</b>
                </span>{" "}
                and{" "}
                <span style={{ color: "rgb(0,189,214)" }}>
                  {" "}
                  <b>Privacy Policy</b>{" "}
                </span>
              </p>
            </div>
            <button
              className=" continue text-white font-bold mt-5  py-2 rounded text-base font-normal "
              style={{ width: "300px", backgroundColor: "rgb(0,189,214)" }}
            >
              continue
            </button>
            <p className="text-base font-normal text-xs  opacity-70 mt-3">
              Existing member?{" "}
              <span style={{ color: "rgb(0,189,214)" }}>
                {" "}
                <b>Sign in</b>{" "}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="footer"style={{ marginTop: window.innerWidth <= 768 ? '400px' : '' }}>
        <Footer />
      </div>
    </div>
  );
};

export default Careers;
