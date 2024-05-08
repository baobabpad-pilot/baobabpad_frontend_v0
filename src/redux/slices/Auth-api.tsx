// // authApi.ts
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const authApi = createApi({
//   reducerPath: "authApi",
//   baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BACKEND_URL }),
//   endpoints: (builder) => ({
//     signup: builder.mutation({
//       query: (formData) => ({
//         url: "register",
//         method: "POST",
//         body: formData,
//       }),
//     }),
//     signin: builder.mutation({
//       query: (formData) => ({
//         url: "login",
//         method: "POST",
//         body: formData,
//       }),
//     }),
//   }),
// });

// export const { useSignupMutation, useSigninMutation } = authApi;
