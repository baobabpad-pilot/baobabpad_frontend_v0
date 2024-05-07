import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  useSigninMutation,
} from "../../redux/slices/Auth-api";

const SigninForm = () => {
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

  const [signinMutation, { isError, error }] = useSigninMutation();

  const onSubmit = async (data: FormData) => {
    try {
      // console.log(FormData);
      const response = await signinMutation(data);
      if (response.data) {
        alert("token : " + response.data.access);
      }
    } catch (error) {
      console.error("Could not signin using the provided credentials:", error);
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
      {/* Add error message below each input field */}
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
