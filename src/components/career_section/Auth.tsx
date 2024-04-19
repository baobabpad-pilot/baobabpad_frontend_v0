import React from "react";
import Image from "next/image";
import styles from "../../styles/careers.module.css";
import msg from "../../career_images/msg.png";
import google from "../../career_images/Google.png";
import microsoft from "../../career_images/microsoft.png";
import linkedIn from "../../career_images/linkedIn.png";

function Auth() {
const handleGoogleSignUp = () => {

  window.location.href =
    "https://accounts.google.com/o/oauth2/auth?" +
    "response_type=code&" +
    "client_id=47030679190-r4bfhfmtg33ekkevhskdb8guq9r9agsc.apps.googleusercontent.com&" + 
    "redirect_uri=http://localhost:8000/auth/google/callback&" + 
    "scope=email%20profile&" + 
    "state=google_signup";


};

const handleLinkedInSignUp = () => {
  
  window.location.href =
    "https://www.linkedin.com/oauth/v2/authorization?" +
    "response_type=code&" +
    "client_id=YOUR_CLIENT_ID&" + 
    "redirect_uri=YOUR_REDIRECT_URI&" + 
    "scope=r_liteprofile%20r_emailaddress&" + 
    "state=linkedin_signup"; 

 
};

const handleGitHubSignUp = () => {

  window.location.href =
    "https://github.com/login/oauth/authorize?" +
    "client_id=559122f4ac8d06a12a78&" + 
    "redirect_uri=YOUR_REDIRECT_URI&" +
    "client_secret=ca8ea7e9d7545f0e3b294f0302165f0ee261dab8&" + 
    "scope=user:email&" + 
    "state=github_signup"; 

  // After successful authentication and authorization, GitHub will redirect back to your specified redirect URI
  // You'll then handle the callback from the redirect URI to complete the sign up process
};

  return (
    <>
      <div className={styles.part2}>
        <div className="container mx-30 mt-10 flex flex-row justify-center items-center ">
          <Image src={msg} alt="" className="contin" />
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
              onClick={handleGoogleSignUp}
            >
              <Image src={google} alt="" />
              <span>Sign Up with Google</span>
            </button>
            <button
              className="flex items-center mt-5 bg-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              style={{ width: "300px" }}
              onClick={handleLinkedInSignUp}
            >
              <Image src={linkedIn} alt="" />
              <span>LinkedIn</span>
            </button>
            <button
              className="flex items-center mt-5 bg-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              style={{ width: "300px" }}
              onClick={handleGitHubSignUp}
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

    </>
  );
}

export default Auth;
