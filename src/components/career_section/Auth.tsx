import { signIn } from "next-auth/react";
import Image from "next/image";
import styles from "../../styles/careers.module.css";
import msg from "../../career_images/msg.png";
import google from "../../career_images/Google.png";
import linkedIn from "../../career_images/linkedIn.png";
import microsoft from "../../career_images/microsoft.png";
import { useSession } from 'next-auth/react';
import { useState } from "react";
import Link from 'next/link';
import process from "process";
import { useEffect } from 'react';

function Auth() {
  const { data: session } = useSession();
  const [modifiedSession, setModifiedSession] = useState(session);
  
  const [showSignupForm, setShowSignupForm] = useState(false);
  const [showSigninForm, setShowSigninForm] = useState(false);

  const toggleSignupForm = () => {
    setShowSignupForm(!showSignupForm);
    setShowSigninForm(false);
  };
  const toggleSigninForm = () => {
    setShowSigninForm(!showSigninForm);
    setShowSignupForm(false);
  };

  const SignupFormComponent = () => {
    return (
      <div style={{width:'45%',marginLeft:'30%'}}>
      <form className="flex flex-col gap-4 w-full h-full  p-4  rounded-l-xl md:rounded-l-none rounded-r-xl justify-center relative">

      <div className="relative">
         <label htmlFor="full_name" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:start-6 peer-focus:start-0 peer-focus:text-teal-700 peer-focus:dark:text-teal-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Full Name</label>
         <input type="text" placeholder="Full Name" name="full_name" id="full_name" className="block py-2.5 ps-6 pe-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-teal-600 focus:outline-none focus:ring-0 focus:border-teal-600 peer"/>
      </div>
      <div className="relative">
      <label htmlFor="email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:start-6 peer-focus:start-0 peer-focus:text-teal-700 peer-focus:dark:text-teal-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Email</label>
         <input type="text" placeholder="Email" name="email" id="email" className="block py-2.5 ps-6 pe-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-teal-600 focus:outline-none focus:ring-0 focus:border-teal-600 peer"/>
      </div>

      <div className="relative">
      <label htmlFor="password1" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:start-6 peer-focus:start-0 peer-focus:text-teal-700 peer-focus:dark:text-teal-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Password</label>
         <input type="text" placeholder="Password" name="password1" id="password1" className="block py-2.5 ps-6 pe-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-teal-600 focus:outline-none focus:ring-0 focus:border-teal-600 peer"/>
      </div>

      <div className="relative">
      <label htmlFor="password2" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:start-6 peer-focus:start-0 peer-focus:text-teal-700 peer-focus:dark:text-teal-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Confirm Password</label>
         <input type="text" placeholder="Confirm Password" name="password2" id="password2" className="block py-2.5 ps-6 pe-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-teal-600 focus:outline-none focus:ring-0 focus:border-teal-600 peer"/>
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

      <button  onClick={handleCustomSignUp} style={{ backgroundColor: "rgb(0,189,214)" }} type="button" className="rounded py-1 bg-teal-600 hover:bg-teal-500 transition-colors text-white">Continue</button>
      <div className="border-b w-full"></div>
   </form>
   </div>
    );
  };


  const SigninFormComponent = () => {
    return (
      <div style={{width:'45%',marginLeft:'30%'}}>
      <form className="flex flex-col gap-4 w-full h-full  p-4  rounded-l-xl md:rounded-l-none rounded-r-xl justify-center relative">

      <div className="relative">
         <input type="text" placeholder="Email" name="email" id="email" className="block py-2.5 ps-6 pe-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-teal-600 focus:outline-none focus:ring-0 focus:border-teal-600 peer"/>
      </div>

      <div className="relative">
         <input type="text" placeholder="Password" name="password1" id="password1" className="block py-2.5 ps-6 pe-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-teal-600 focus:outline-none focus:ring-0 focus:border-teal-600 peer"/>
      </div>
      {/* <p className="text-base font-normal text-xs  opacity-70">
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
          </p> */}

      {/* <button  onClick={handleCustomSignUp} style={{ backgroundColor: "rgb(0,189,214)" }} type="button" className="rounded py-1 bg-teal-600 hover:bg-teal-500 transition-colors text-white">Continue</button> */}
      {/* <div className="border-b w-full"></div> */}
   </form>
   </div>
    );
  };


  const handleCustomSignUp = async () => {
    try {
      let urls = process.env.BACKEND_URL + "register/";
      //alert(urls);
      const url = "http://127.0.0.1:8000/api/register/";      
      console.log(url);
      const data = {
        username:'user',
        email:'useremail@gmail.com',
        first_name: 'fname',
        last_name: 'lname',
        password1:'pass1234!!',
        password2:'pass1234!!'
      };
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Failed to fetch data from the backend");
      }
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error("Error fetching data from backend:", error);
      return null;
    }
  };

  const handleCustomSignIn = async () => {
    try {
      let urls = process.env.BACKEND_URL + "login/";
      //alert(urls);
      const url = "http://127.0.0.1:8000/api/login/";      
      console.log(url);
      const data = {
        username:'user',
        email:'useremail@gmail.com',
        first_name: 'fname',
        last_name: 'lname',
        password:'pass1234!!'
      };
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Failed to fetch data from the backend");
      }
      const responseData = await response.json();
      alert("token : " + responseData?.access);
      useEffect(() => {
        if (session) {
          // Modify session variables
          const modifiedVariables = {
            ...session,
            user: {
              ...session.user,
              token: responseData?.access // Assuming responseData is available in the component scope
            }
          };
          setModifiedSession(modifiedVariables);
        }
      }, [session]);


      alert(responseData?.access);
      return responseData;
    } catch (error) {
      console.error("Error fetching data from backend:", error);
      return null;
    }
  };


  const handleGoogleSignUp = async () => {
    await signIn("google");
  };

  const handleLinkedInSignUp = async () => {
    await signIn("linkedin");
  };

  const handleGitHubSignUp = async () => {
    await signIn("github");
  };

  return (
    <>
      <div className={styles.part2}>
        {/* <div className="container mx-30 mt-10 flex flex-row justify-center items-center ">
          <Image src={msg} alt="Message Image" className="contin" />
        </div> */}
        <pre>{JSON.stringify(session, null, 2)}</pre>
        {session ? (
            <div>
              <p className="text-2xl">Karibu Sana , {session?.user?.name}</p>
            </div>
          ) : (
          <p className="text-2xl">Karibu Sana</p>
          )}
        <div>
          <div
            className="authentication flex flex-col justify-center items-center "
            style={{ marginTop: "20px" }}
          >
            <button
              className="flex items-center gap-2 bg-white border border-red-600 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              style={{ width: "220px" }}
              onClick={handleGoogleSignUp}
            >
              <Image src={google} alt="Google Icon" />
              <span>Sign Up with Google</span>
            </button>
            <button
              className="flex items-center gap-2 mt-5 bg-white border border-blue-600 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              style={{ width: "220px" }}
              onClick={handleLinkedInSignUp}
            >
              <Image src={linkedIn} alt="LinkedIn Icon" />
              <span>Sign Up with LinkedIn</span>
            </button>
            <button
              className="flex items-center gap-2 mt-5 bg-white border border-green-600 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              style={{ width: "220px" }}
              onClick={handleGitHubSignUp}
            >
              <Image src={microsoft} alt="GitHub Icon" />
              <span>Sign Up with GitHub</span>
            </button>
          </div>
          <div className="section4 mt-5 text-base font-normal">
            <span className="tttt ">______________ </span>OR{" "}
            <span>______________ </span>

            <div>
              <p className="mt-3">
                <Link  href="#" onClick={toggleSignupForm}>
                  <b>Sign up with your email</b>
                </Link>
              </p>
              {showSignupForm && <SignupFormComponent />}
            </div>
            {/* <p className="mt-3">
              {" "}
              <b>Sign up with your email</b>{" "}
            </p> */}
            {/* <label className="text-xs opacity-80" htmlFor="email">
              email@email.com
            </label> */}
          </div>
          
          {!showSignupForm ? (
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
          </p>) : (<></>
          )}
        </div>
        {showSigninForm && <SigninFormComponent />}
        {!showSignupForm ? (
        <button
           onClick={handleCustomSignIn}
          className=" continue text-white font-bold mt-5  py-2 rounded text-base font-normal "
          style={{ width: "300px", backgroundColor: "rgb(0,189,214)" }}
        >
          Continue
        </button>
        ) : (<></>
        )}
        <p className="text-base font-normal text-xs  opacity-70 mt-3">
          Existing member?{" "}
          <span style={{ color: "rgb(0,189,214)" }}>
            {" "}
            <b>
                 <Link  href="#" onClick={toggleSigninForm}>
                    <b>Sign in</b>
                 </Link>
              </b>{" "}
          </span>
        </p>
      </div>
    </>
  );
}

export default Auth;
