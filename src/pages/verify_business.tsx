import React from "react";
import Layout from "@/components/Layout";
import { CiCircleAlert } from "react-icons/ci";

const VerifyBusiness = () => {
  return (
    <Layout>
      <div className="flex flex-col gap-10 p-10 px-36">
        <h1 className="text-5xl font-semibold">Free Trial</h1>

        <div className="flex w-full">
          <div className=" w-1/3 flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="h-10 w-10 flex items-center justify-center rounded-full border text-white bg-[#00BDD6]">
                1
              </div>
              <h4 className="text-xl font-semibold">Verify Business</h4>
            </div>

            <span className="h-20 w-fit border-l-2 ml-4 border-dotted"></span>

            <div className="flex gap-3 items-center">
              <div className="h-10 w-10 flex items-center justify-center rounded-full border text-slate-500 bg-gray">
                2
              </div>
              <h4 className="text-medium font-normal">Verify Email</h4>
            </div>

            <span className="h-12 w-fit border-l-2 ml-4 border-dotted"></span>

            <div className="flex gap-3 items-center">
              <div className="h-10 w-10 flex items-center justify-center rounded-full border text-slate-500 bg-gray">
                3
              </div>
              <h4 className="text-medium font-normal">Secure Account</h4>
            </div>

            <span className="h-12 w-fit border-l-2 ml-4 border-dotted"></span>

            <div className="flex gap-3 items-center">
              <div className="h-10 w-10 flex items-center justify-center rounded-full border text-slate-500 bg-gray">
                4
              </div>
              <h4 className="text-medium font-normal">Login</h4>
            </div>
          </div>

          {/* Form Component */}
          <div className="w-2/3 flex flex-col gap-3">
            <p className="p-3 rounded-md bg-gray-50 flex gap-2 items-center">
              <span>
                <CiCircleAlert />
              </span>
              Collecting this information to ensure security and verify your
              identity
            </p>

            <h3 className="font-semibold text-3xl">Business Information</h3>

            <form action="" className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2 p-2">
                  <label htmlFor="company_name" className="font-medium text-lg">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company_name"
                    name="company_name"
                    placeholder="Company Name"
                    className="border p-2 rounded bg-slate-100"
                  />
                </div>

                <div className="flex flex-col gap-2 p-2">
                  <label htmlFor="phone_number" className="font-medium text-lg">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone_number"
                    name="phone_number"
                    placeholder="Phone Number"
                    className="border p-2 rounded bg-slate-100"
                  />
                </div>

                <div className="flex flex-col gap-2 p-2">
                  <label htmlFor="email" className="font-medium text-lg">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="border p-2 rounded bg-slate-100"
                  />
                </div>

                <div className="flex flex-col gap-2 p-2">
                  <label
                    htmlFor="company_address"
                    className="font-medium text-lg"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    id="company_address"
                    name="company_address"
                    placeholder="Address"
                    className="border p-2 rounded bg-slate-100"
                  />
                </div>

                <div className="flex flex-col gap-2 p-2">
                  <label
                    htmlFor="country_region"
                    className="font-medium text-lg"
                  >
                    Country/Region
                  </label>
                  <input
                    type="text"
                    id="country_region"
                    name="country_region"
                    placeholder="e.g., Switzerland"
                    className="border p-2 rounded bg-slate-100"
                  />
                </div>

                <div className="flex flex-col gap-2 p-2">
                  <label htmlFor="city" className="font-medium text-lg">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="e.g., Geneva"
                    className="border p-2 rounded bg-slate-100"
                  />
                </div>

                <div className="flex flex-col gap-2 p-2">
                  <label
                    htmlFor="business_number"
                    className="font-medium text-lg"
                  >
                    Business No.
                  </label>
                  <input
                    type="text"
                    id="business_number"
                    name="business_number"
                    placeholder="Business Number"
                    className="border p-2 rounded bg-slate-100"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default VerifyBusiness;
