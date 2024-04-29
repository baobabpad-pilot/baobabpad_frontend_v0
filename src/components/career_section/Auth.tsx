import google from "../../career_images/Google.png";
import linkedIn from "../../career_images/linkedIn.png";
import microsoft from "../../career_images/microsoft.png";
import { useSession } from 'next-auth/react';

function Auth() {
  const { data: session } = useSession();
  const handleGoogleSignUp = async () => {
    try {
      await signIn("google");
    } catch (error) {
      console.error("Error occurred during Google sign-up:", error);
    }
  };

  const handleLinkedInSignUp = async () => {
    try {
      await signIn("linkedin");
    } catch (error) {
      console.error("Error occurred during Linkedin sign-up:", error);
    }
  };

  const handleGitHubSignUp = async () => {
    try {
      await signIn("github");
    } catch (error) {
      console.error("Error occurred during Github sign-up:", error);
    }
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
              className="flex items-center bg-white border border-red-600 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              style={{ width: "220px" }}
              className="flex items-center gap-2 bg-white border border-red-600 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              style={{ width: "300px" }}
              onClick={handleGoogleSignUp}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Image src={google} alt="Google Icon" style={{ marginRight: '10px' }} />
                {session ? (
                  <span style={{ flex: 1 }}>Signed in with Google</span>
                 ) : (
                  <span style={{ flex: 1 }}>Sign up with Google</span>
                )}
              </div>

            </button>
            <button
              className="flex items-center mt-5 bg-white border border-blue-600 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              style={{ width: "220px" }}
              className="flex items-center gap-2 mt-5 bg-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              style={{ width: "300px" }}
              onClick={handleLinkedInSignUp}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Image src={linkedIn} alt="LinkedIn Icon" style={{ marginRight: '10px' }} />
                <span style={{ flex: 1 }}>Sign up with LinkedIn</span>
              </div>

            </button>
            <button
              className="flex items-center mt-5 bg-white border border-green-600 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              style={{ width: "220px" }}
              className="flex items-center gap-2 mt-5 bg-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              style={{ width: "300px" }}
              onClick={handleGitHubSignUp}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Image src={microsoft} alt="GitHub Icon" style={{ marginRight: '10px' }} />
                <span style={{ flex: 1 }}>Sign up with GitHub</span>
              </div>

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
