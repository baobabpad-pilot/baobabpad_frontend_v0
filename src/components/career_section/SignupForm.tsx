import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSignupMutation } from "../../redux/slices/Auth-api";
import * as yup from "yup";

interface FormData {
  loginType: "talent";
  firstName: string;
  lastName: string;
  email: string;
  username: string; // New field
  password: string;
  passwordConfirmation: string;
}

const SigninForm = () => {
  const loginSchema = yup.object().shape({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    email: yup.string().email().required("Email is required"),
    username: yup.string().required("Username is required"), // Validation for username
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
    resolver: yupResolver(loginSchema),
  });

  // Define mutation
  const [signupMutation, { isLoading }] = useSignupMutation();

  const onSubmit = async (data: FormData) => {
    try {
      // Call mutation
      await signupMutation(data).unwrap();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
      {/* First Name field */}
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

      {/* Last Name field */}
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

      {/* Email field */}
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

      {/* Username field */}
      <div className="mb-2">
        <label className="block mb-1 text-sm" htmlFor="username">
          Username:
        </label>
        <input
          type="text"
          id="username"
          {...register("username")}
          className={`w-full px-3 py-2 border rounded-md ${
            errors.username ? "border-red-500" : ""
          }`}
          style={{ width: "calc(100% - 6px)", height: "28px" }}
        />
        {errors.username && (
          <p className="text-red-500 text-sm">{errors.username.message}</p>
        )}
      </div>

      {/* Password field */}
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

      {/* Password Confirmation field */}
      <div className="mb-2">
        <label className="block mb-1 text-sm" htmlFor="passwordConfirmation">
          Confirm Password:
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
