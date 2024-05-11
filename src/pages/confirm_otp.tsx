import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";


const ConfirmPage = () => {
  const [otp, setOtp] = useState("");

  const router = useRouter();

  const handleSubmit = async (event:any) => {
    event.preventDefault();


    const response = await fetch("https://baobabpad-334a8864da0e.herokuapp.com/api/email_signup", {
      // const response = await fetch('http://127.0.0.1:8000/api/talent_signup/', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({otp})
    });

   if (response.ok) {
    alert('your account has been verified!!!');
    router.push('/');

	  }
    else if (response.status === 403) {
      alert('make sure you have typed correct OTP');
      router.push('/');
  
      }
	  else {
		// setStatus('Data not saved');
    alert('Unauthorized Request!');
	  }
  };

  return (
    <div className="flex flex-col items-center justify-center p-10 gap-4 relative bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r text-white">
      <div className="flex flex-col gap-4 items-center justify-center text-lg">
        <div className="max-w-[650px] lg:pt-40">
          <p>
            To complete your registration, please enter the One-Time Password
            (OTP) you received in your email. This OTP ensures the security of
            your account and helps us verify your identity. Once you've entered
            the correct OTP, you'll gain access to your account and all its
            features. Please enter the OTP in the field below:
          </p>
        </div>

        <form
          action=""
          className="flex flex-col gap-2 w-full max-w-[650px]"
          onSubmit={handleSubmit}
        >
          <div className="w-full flex flex-col text-black">
            <input
              type="text"
              id="OTP"
              name="OTP"
              value={otp}
              onChange={(event) => setOtp(event.target.value)}
              className="border px-4 p-1 rounded-lg focus:outline-none focus:border-teal-600 transition-colors"
              required
            />
          </div>

          <button
            type="submit"
            className="rounded py-1 px-8 bg-teal-600 hover:bg-teal-500 transition-colors"
            // disabled={!formValues}
          >
            Verify
          </button>
        </form>

        <div className="w-full border border-teal-700 max-w-[650px]"></div>

        <div className="self-center text-white">
          <p>
            Already have an account?{" "}
            <Link href="./login" className="border-b-2 border-b-amber-400">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPage;
