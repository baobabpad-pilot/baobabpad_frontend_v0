import { signIn } from "next-auth/react";

const SignInBtn = () => {
  return (
    <button
      onClick={() => signIn("google")}
      className="flex items-center bg-white border border-red-600 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
      style={{ width: "300px" }}
    >
      <img src="/Google.png" alt="" />{" "}
      {/* Assuming this is the path to your Google icon */}
      <span>Sign Up with Google</span>
    </button>
  );
};

export default SignInBtn;
