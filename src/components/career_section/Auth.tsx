import { signIn } from "next-auth/react";
import Image from "next/image";
import styles from "../../styles/careers.module.css";
import { useSession } from 'next-auth/react';
import { useState } from "react";
import Link from 'next/link';
import SignupForm from "../career_section/SignupForm";
import SigninForm from "../career_section/SigninForm";

function Auth() {
  const { data: session } = useSession();
  
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
      <div className={styles.part2} >
          {/* <pre>{JSON.stringify(session?.user?.token, null, 2)}</pre> */}
        {session ? (
            <div>
              <p className="text-2xl ">Karibu Sana , {session?.user?.name}</p>
            </div>
          ) : (
          <p className="text-2xl mt-11">Sign up to Baobabpad</p>
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
              <Image src={"/google.png"} alt="Google Icon" width="20" height="20" />
              <span>Sign Up with Google</span>
            </button>
            <button
              className="flex items-center gap-2 mt-5 bg-white border border-blue-600 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              style={{ width: "220px" }}
              onClick={handleLinkedInSignUp}
            >
              <Image src={"/linkedIn.png"} alt="LinkedIn Icon" width="20" height="20" />
              <span>Sign Up with LinkedIn</span>
            </button>
            <button
              className="flex items-center gap-2 mt-5 bg-white border border-green-600 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              style={{ width: "220px" }}
              onClick={handleGitHubSignUp}
            >
              <Image src={"/microsoft.png"} alt="GitHub Icon" width="20" height="20" />
              <span>Sign Up with GitHub</span>
            </button>
          </div>
          <div className="section4 mt-5 text-base font-normal">
            <span className="tttt ">______________ </span>OR{" "}
            <span>______________ </span>

            <div>
              <p className="mt-3">
                <Link  href="#SignupForm" onClick={toggleSignupForm}>
                  <b style={{ color: 'blue', textDecoration: 'underline' }}>Sign up with your email</b>
                </Link>
              </p>
              {showSignupForm && <SignupForm />}
            </div>
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
        <div className="section4 mt-5 text-base font-normal">
          {showSigninForm && <SigninForm />}
        </div>
        <p className="text-base font-normal text-xs  opacity-70 mt-3">
          Existing member?{" "}
          <span style={{ color: "rgb(0,189,214)" }}>
            {" "}
            <b>
                 <Link  href="#" onClick={toggleSigninForm}>
                    <b style={{ color: 'blue', textDecoration: 'underline' }}>Sign in</b>
                 </Link>
              </b>{" "}
          </span>
        </p>
      </div>
    </>
  );
}
export default Auth;
