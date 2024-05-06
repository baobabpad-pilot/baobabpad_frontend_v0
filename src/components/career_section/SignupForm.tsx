import { useState, useEffect  } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import process from "process";


interface FormData {
  loginType: "company" | "talent";
  companyName?: string;
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}


const SignupForm = () => {
  const [loginType, setLoginType] = useState<"company" | "talent">("company"); // Initialize loginType state
  const handleLoginTypeChange = (type: "company" | "talent") => {
    setLoginType(type);
  };

  const loginSchema = yup.object().shape({
    // Define validation schema //redo this part
    // fullName:
    //   loginType === "talent"
    //     ? yup.string().required("Full name is required")
    //     : yup.string(),
    // companyName: //redo this part to be conditional
    //   loginType === "company"
    //     ? yup.string().required("Company name is required")
    //     : yup.string(),
    // firstName: //redo this part to be conditional
    //   loginType === "talent"
    //     ? yup.string()
    //     : yup.string().required("First name is required"),
    // lastName: //redo this part to be conditional
    //   loginType === "talent"
    //     ? yup.string()
    //     : yup.string().required("Last name is required"),
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

  const onSubmit = async (data: any) => {
    try {
      const url = process.env.NEXT_PUBLIC_BACKEND_URL + "register/";
      let dataObject = {
        username: data?.email,
        email: data?.email,
        first_name: data?.companyName,
        last_name: data?.loginType === 'talent' ? data?.lastName : '',
        password1: data?.password,
        password2: data?.passwordConfirmation
      };
      if (data?.loginType === 'talent') {
        dataObject.first_name = data?.firstName;
      }
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
      alert("Token="+ responseData.access);
      return responseData;
    } catch (error) {
      console.error("Error fetching data from backend:", error);    
      if (error.response && error.response.data) {
        const formattedData = JSON.stringify(error.response.data, null, 2);
        alert(formattedData);
        return null;
      } else {
        alert("An error occurred. Please try again later.");
        return null;
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
      {/* Radio buttons for login type */}
      {/* Add error message below each input field */}
      <div className="mb-2">
        <label className="block mb-1 font-bold text-sm" htmlFor="loginType">
          Login As:
        </label>
        <div className="flex">
          <label className="mr-4">
            <input
              type="radio"
              value="company"
              {...register("loginType")}
              checked={loginType === "company"}
              onChange={() => handleLoginTypeChange("company")}
              className="mr-1"
              style={{ width: "auto", height: "auto" }}
            />
            Company
          </label>
          <label>
            <input
              type="radio"
              value="talent"
              {...register("loginType")}
              checked={loginType === "talent"}
              onChange={() => handleLoginTypeChange("talent")}
              className="mr-1"
              style={{ width: "auto", height: "auto" }}
            />
            Talent
          </label>
        </div>
      </div>
      {/* Render fields based on loginType */}
      {loginType === "company" ? (
        <div className="mb-2">
          <label className="block mb-1  text-sm" htmlFor="companyName">
            Company Name:
          </label>
          <input
            type="text"
            id="companyName"
            {...register("companyName")}
            className={`w-full px-3 py-2 border rounded-md ${
              errors.companyName ? "border-red-500" : ""
            }`}
            style={{ width: "calc(100% - 6px)", height: "28px" }}
          />
          {errors.companyName && (
            <p className="text-red-500 text-sm">{errors.companyName.message}</p>
          )}
        </div>
      ) : (
        <>
          <div className="mb-2">
            <label className="block mb-1  text-sm" htmlFor="firstName">
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
            <label className="block mb-1  text-sm" htmlFor="lastName">
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
        </>
      )}
      {/* Common fields */}
      {/* Repeat similar pattern for other fields */}
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
      <div className="mb-4">
        <label
          className="block mb-1  text-sm"
          htmlFor="passwordConfirmation"
        >
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
        {loginType === "company" ? "Sign up as Company" : "Sign up as Talent"}
      </button>
    </form>
  );
};

export default SignupForm;
