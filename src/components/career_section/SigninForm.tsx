import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface FormData {
  loginType: "company" | "talent";
  companyName?: string;
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

const SigninForm = () => {
  const [loginType, setLoginType] = useState<"company" | "talent">("company");
  const handleLoginTypeChange = (type: "company" | "talent") => {
    setLoginType(type);
  };

  const loginSchema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{4,}$/,
        "Must Contain 4 Chars, 1 Uppercase, 1 Lowercase, 1 Number & 1 Special Char"
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const [alertType, setAlertType] = useState<"success" | "error" | null>(null);
  const [alertMessage, setAlertMessage] = useState<string>("");

  const onSubmit = async (data: FormData) => {
    try {
      const url = process.env.NEXT_PUBLIC_BACKEND_URL + "login/";

      const dataObject = {
        username: data.email,
        password: data.password,
      };
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataObject),
      });
      if (!response.ok) {
        throw new Error("Failed to fetch data from the backend");
      }
      const responseData = await response.json();
      setAlertType("success");
      setAlertMessage("Login successful!"); // Set your success message here
      return responseData;
    } catch (error) {
      setAlertType("error");
      setAlertMessage("Could not login using the provided credentials!"); // Set your error message here
      console.error("Could not login using the provided credentials:", error);
      if (error.response && error.response.data) {
        const formattedData = JSON.stringify(error.response.data, null, 2);
        setAlertMessage(formattedData);
        return null;
      } else {
        return null;
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
      {/* Add Tailwind CSS alerts */}
      {alertType && (
        <div
          className={`p-4 mb-4 text-sm rounded-lg ${
            alertType === "success"
              ? "bg-green-50 text-green-800"
              : "bg-red-50 text-red-800"
          }`}
          role="alert"
        >
          <span className="font-medium">
            {alertType === "success" ? "Success" : " "}
          </span>{" "}
          {alertMessage}
        </div>
      )}
      {/* Input fields */}
      <div className="mb-2">
        <label className="block mb-1  text-sm" htmlFor="email">
          Email:
        </label>
        <input
          type="email"
          id="email"
          {...register("email")}
          className={`w-full px-3 py-2 border rounded-md ${
            errors.email ? "border-red-500" : ""
          }`}
          style={{ width: "100%", height: "28px" }}
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>
      <div className="mb-2">
        <label className="block mb-1 text-sm" htmlFor="password">
          Password:
        </label>
        <input
          type="password"
          id="password"
          {...register("password")}
          className={`w-full px-3 py-2 border rounded-md ${
            errors.password ? "border-red-500" : ""
          }`}
          style={{ width: "100%", height: "28px" }}
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
      </div>
      {/* Submit button */}
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Sign in
      </button>
    </form>
  );
};

export default SigninForm;
