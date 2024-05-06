import { signIn } from "next-auth/react";
import Image from "next/image";
import styles from "../../styles/careers.module.css";
import LoginForm from "../career_section/LoginForm";


function Auth() {
  const handleGoogleSignUp = async () => {
    await signIn("google");
  };

  const handleLinkedInSignUp = async () => {
    // Handle LinkedIn sign-up
    await signIn("linkedin");
  };

  const handleGitHubSignUp = async () => {
    // Handle GitHub sign-up
    await signIn("github");
  };

  return (
    <>
      <div className={styles.part2}>
        {/* <div className="container mx-30 mt-10 flex flex-row justify-center items-center ">
          <Image src={{msg} alt}="Message Image" className="contin" />
        </div> */}
        <p className="text-2xl">Karibu Sana</p>
        <div>
          <div
            className="authentication flex flex-col justify-center items-center "
            style={{ marginTop: "20px" }}
          >
            <button
              className="flex items-center gap-2 bg-white border border-red-600 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              style={{ width: "300px" }}
              onClick={handleGoogleSignUp}
            >
              <img src={"/google.png"} alt="" />
              <span>Sign Up with Google</span>
            </button>
            <button
              className="flex items-center gap-2 mt-5 bg-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              style={{ width: "300px" }}
              onClick={handleLinkedInSignUp}
            >
              <img src={"/linkedIn.png"} alt="" />
              <span>Sign Up with LinkedIn</span>
            </button>
            <button
              className="flex items-center gap-2 mt-5 bg-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              style={{ width: "300px" }}
              onClick={handleGitHubSignUp}
            >
              <img src={"/microsoft.png"} alt="" />
              <span>Sign Up with GitHub</span>
            </button>
          </div>
          <div className="section4 mt-5 text-base font-normal">


            {/* ------------------------------------------------------------------------------------*/}
            <LoginForm />
            {/* ----------------------------------------------------------------------------------- */}
          </div>

        </div>

      </div>
    </>
  );
}

export default Auth;
