import React from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import styles from "../styles/careers.module.css";
import user1 from "../career_images/user1.png";
import user2 from "../career_images/user2.png";
import user3 from "../career_images/user3.png";
import user4 from "../career_images/user4.png";

const Careers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div
        className={`${styles.container} flex-1 flex justify-center items-center font-bold text-3xl`}
        style={{ backgroundColor: "rgb(245,245,245)", height: "70vh" }}
      >
        <div className={`${styles.flexContainer} flex flex-row`}>
          <div className={styles.part1}>
            01
            <div
              className="container mx-30 mt-20 flex flex-row justify-center items-center"
              // style={{ backgroundColor: "red" }}
            >
              {/* Image 1 */}
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
          </div>

          <div className={styles.part2}>02</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Careers;
