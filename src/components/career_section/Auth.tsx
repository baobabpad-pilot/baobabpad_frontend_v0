import { signIn } from "next-auth/react";
import Image from "next/image";
import styles from "../../styles/careers.module.css";
import msg from "../../career_images/msg.png";
import google from "../../career_images/Google.png";
import linkedIn from "../../career_images/linkedIn.png";
import microsoft from "../../career_images/microsoft.png";

function Auth() {
  const handleGoogleSignUp = async () => {
    await signIn("google");
  };

  const handleLinkedInSignUp = async () => {
    // Handle LinkedIn sign-up
  };

  const handleGitHubSignUp = async () => {
    // Handle GitHub sign-up
  };

  return (
    <>
      <div className={styles.part2}>
        {/* <div className="container mx-30 mt-10 flex flex-row justify-center items-center ">
          <Image src={msg} alt="Message Image" className="contin" />
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
              <Image src={google} alt="Google Icon" />
              <span>Sign Up with Google</span>
            </button>
            <button
              className="flex items-center gap-2 mt-5 bg-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              style={{ width: "300px" }}
              onClick={handleLinkedInSignUp}
            >
              <Image src={linkedIn} alt="LinkedIn Icon" />
              <span>Sign Up with LinkedIn</span>
            </button>
            <button
              className="flex items-center gap-2 mt-5 bg-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              style={{ width: "300px" }}
              onClick={handleGitHubSignUp}
            >
              <Image src={microsoft} alt="GitHub Icon" />
              <span>Sign Up with GitHub</span>
            </button>
          </div>
          <div className="section4 mt-5 text-base font-normal">
            <span className="tttt ">______________ </span>OR{" "}
            <span>______________ </span>
            <p className="mt-3">
              {" "}
              <b>Sign up with your email</b>{" "}
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
