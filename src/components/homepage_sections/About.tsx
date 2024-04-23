import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="px-40 p-4 flex flex-col gap-8">
      <div className="mt-10">
        <h1 className="font-bold text-5xl">Virtual Technology Village</h1>
        <div className="relative w-2/5 h-6 mt-2">
        <Image
            src={"/underline2.png"}
            alt="Baobabpad logo"
            layout="fill" 
            className="cursor-pointer  z-10"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 text-xl">
        <div className="p-2 px-10 flex flex-col gap-10">
          <p>
            Baobabpad Virtual Technology Village is a unique, membership-based
            and intuitive platform that empowers businesses build, scale
            software development with highly skilled, pre-vetted, trained and
            trusted IT professionals exclusively from Africa.{" "}
          </p>

          <p>Business Membership have access to </p>

          <span>
            <h1 className="font-semibold">Skilled Talent Pool</h1>
            <p>
              Access a diverse network of highly skilled IT professionals with a
              wide range of technical skills and expertise across various
              technology stacks.
            </p>
          </span>
 
          <span>
            <h1 className="font-semibold">Account Management</h1>
            <p>
              Our dedicated account managers will guide you through your entire
              technology needs process, ensuring you find the perfect talent and
              solutions for your business.
            </p>
          </span>

          <span>
            <h1 className="font-semibold">Project Management</h1>
            <p>
              Build, create, and manage your software development projects and
              project teams with ease. We empower you to focus on your business
              goals while we handle the IT project management and project setup.
            </p>
          </span>

          <p>
            Find top talent, build trust, and scale your business faster. Join
            Baobabpad today.
          </p>
        </div>
        <div className="h-full gap-4 flex flex-col">
          <div className="h-1/2 w-full relative ">
          <Image
            src={"/smiling_women.png"}
            alt="Baobabpad logo"
            layout="fill" objectFit="cover"
            className="cursor-pointer  z-10"
          />
          </div>
          <div className="h-1/2 w-full relative">
          <Image
            src={"/smiling_man.png"}
            alt="Baobabpad logo"
            layout="fill" objectFit="cover"
            className="cursor-pointer  z-10"
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
