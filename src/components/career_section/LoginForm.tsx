import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface FormData {
  loginType: "talent";
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

const LoginForm = () => {
  const loginSchema = yup.object().shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
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
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema), // Use loginSchema for validation
  });

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
      <div className="mb-2">
        <label className="block mb-1 text-sm" htmlFor="firstName">
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
      <div className="mb-2">
        <label className="block mb-1 text-sm" htmlFor="lastName">
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
      <div className="mb-2">
        <label className="block mb-1 text-sm" htmlFor="email">
          Email:
        </label>
        <input
          type="email"
          id="email"
          {...register("email")}
          className={`w-full px-3 py-2 border rounded-md ${
            errors.email ? "border-red-500" : ""
          }`}
          style={{ width: "calc(100% - 6px)", height: "28px" }}
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
          style={{ width: "calc(100% - 6px)", height: "28px" }}
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block mb-1 text-sm" htmlFor="passwordConfirmation">
          Password Confirmation:
        </label>
        <input
          type="password"
          id="passwordConfirmation"
          {...register("passwordConfirmation")}
          className={`w-full px-3 py-2 border rounded-md ${
            errors.passwordConfirmation ? "border-red-500" : ""
          }`}
          style={{ width: "calc(100% - 6px)", height: "28px" }}
        />
        {errors.passwordConfirmation && (
          <p className="text-red-500 text-sm">
            {errors.passwordConfirmation.message}
          </p>
        )}
      </div>
      <button
        type="submit"
        className=" text-white py-2 px-4 rounded"
        style={{ backgroundColor: "rgb(0,189,214)" }}
      >
        Sign up
      </button>
    </form>
  );
};

export default LoginForm;
