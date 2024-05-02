// components/LoginForm.tsx

import { useState } from "react";

const LoginForm = () => {
  const [loginType, setLoginType] = useState<"company" | "talent">("company");

  const handleLoginTypeChange = (type: "company" | "talent") => {
    setLoginType(type);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add your form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
        <label className="block mb-2 font-bold" htmlFor="loginType">
          Login As:
        </label>
        <div className="flex">
          <label className="mr-4">
            <input
              type="radio"
              value="company"
              checked={loginType === "company"}
              onChange={() => handleLoginTypeChange("company")}
              className="mr-2"
            />
            Company
          </label>
          <label>
            <input
              type="radio"
              value="talent"
              checked={loginType === "talent"}
              onChange={() => handleLoginTypeChange("talent")}
              className="mr-2"
            />
            Talent
          </label>
        </div>
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-bold" htmlFor="email">
          Email Address:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>
      <div className="mb-6">
        <label className="block mb-2 font-bold" htmlFor="password">
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        {loginType === "company" ? "Login as Company" : "Login as Talent"}
      </button>
    </form>
  );
};

export default LoginForm;
