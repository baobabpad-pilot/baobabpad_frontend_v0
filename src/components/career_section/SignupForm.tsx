import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import process from "process";
import { SubmitHandler } from "react-hook-form";


const SignupForm = () => {
  const loginSchema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{4,}$/,
        "Must Contain 4 Chars, 1 Uppercase, 1 Lowercase, 1 Number & 1 Special Char"
      ),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref("password"), undefined], "Passwords must match"),
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
  });

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<FormData>({
  //   resolver: yupResolver(loginSchema), // Use loginSchema for validation
  // });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const [alertType, setAlertType] = useState<"success" | "error" | null>(null);
  const [alertMessage, setAlertMessage] = useState<string>("");

  const onSubmit: SubmitHandler<{ email: string; firstName: string, lastName:string, password: string , passwordConfirmation?:string; }> = async (data) => {
  try {
    const url = process.env.NEXT_PUBLIC_BACKEND_URL + "register/";
    const dataObject = {
      username: data.email,
      email: data.email,
      first_name: data.firstName,
      last_name: data.lastName,
      password: data.password,
      password2: data.passwordConfirmation,
      otp: 0,
      is_active: true,
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
    setAlertMessage("Signup successful!"); // Set your success message here
    return responseData;
  } catch (error:any) {
    setAlertType("error");
    if (error.response && error.response.data && error.response.data.username) {
      if (error.response.data.username.includes("already exists")) {
        setAlertMessage("A user with that email already exists.");
      } else {
        const formattedData = JSON.stringify(error.response.data, null, 2);
        setAlertMessage(formattedData);
      }
    } else {
      setAlertMessage("Check credential and try again."); // Set your generic error message here
    }
    console.error("Error fetching data from backend:", error);
    return null;
  }
};


  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
      {/* Render Tailwind CSS alerts */}
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
            {alertType === "success" ? "Success !" : "Failed!"}
          </span>{" "}
          {alertMessage}
        </div>
      )}
      {/* Input fields */}
      <div className="mb-2 md:flex mt-4">
        <label className="block mb-1 text-sm md:w-[20%] md:mr-5 " htmlFor="firstName">
          First Name:
        </label>
        <input
          type="text"
          id="firstName"
          {...register("firstName")}
          className={`w-full px-3 py-2 border rounded-md ${
            errors.firstName ? "border-red-500" : ""
          }`}
          style={{ width: "calc(100% - 6px)", height: "28px" }}
        />
        {errors.firstName && (
          <p className="text-red-500 text-sm">{errors.firstName.message}</p>
        )}
      </div>
      <div className="mb-2 md:flex mt-4">
        <label className="block mb-1 text-sm md:w-[20%] md:mr-5" htmlFor="lastName">
          Last Name:
        </label>
        <input
          type="text"
          id="lastName"
          {...register("lastName")}
          className={`w-full px-3 py-2 border rounded-md ${
            errors.lastName ? "border-red-500" : ""
          }`}
          style={{ width: "calc(100% - 6px)", height: "28px" }}
        />
        {errors.lastName && (
          <p className="text-red-500 text-sm">{errors.lastName.message}</p>
        )}
      </div>
      {/* Common fields */}
      {/* Repeat similar pattern for other fields */}
      <div className="mb-2 md:flex mt-4">
        <label className="block mb-1 text-sm md:w-[20%] md:mr-5" htmlFor="email">
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
      <div className="mb-2 md:flex mt-4">
        <label className="block mb-1 text-sm md:w-[20%] md:mr-5" htmlFor="password">
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
      <div className="mb-4 md:flex md:mt-4">
        <label className="block mb-1 text-sm md:w-[20%] md:mr-2" htmlFor="passwordConfirmation">
          Password Confirmation:
        </label>
        <input
          type="password"
          id="passwordConfirmation"
          {...register("passwordConfirmation")}
          className={`w-full px-3 py-2 border rounded-md ${
            errors.passwordConfirmation ? "border-red-500" : ""
          }`}
          style={{ width: "100%", height: "28px" }}
        />
        {errors.passwordConfirmation && (
          <p className="text-red-500 text-sm">
            {errors.passwordConfirmation.message}
          </p>
        )}
      </div>
      {/* Submit button */}
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Sign up as Talent
      </button>
    </form>
  );
};

export default SignupForm;
