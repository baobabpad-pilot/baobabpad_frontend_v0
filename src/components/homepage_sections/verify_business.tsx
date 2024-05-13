import React, { useState } from "react";
import Layout from "@/components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData } from "@/redux/slices/formDataSlice";
import { RootState } from "@/redux/rootReducer";
import { CiCircleAlert } from "react-icons/ci";

const VerifyBusiness = () => {
  const dispatch = useDispatch();
  const formDataUpdated = useSelector((state: RootState) => state.formData);

  const [formData, setFormData] = useState({
    company_name: "",
    business_type: "",
    phone_number: "",
    email: "",
    address: "",
    country: "",
    business_number: "",
    city: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    dispatch(
      updateFormData({ business_information: { ...formData, [name]: value } })
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const sendData = async () => {
      const response = await fetch(
        `https://baobabpad-334a8864da0e.herokuapp.com/api/roadmap/userinterests/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formDataUpdated)
        }
      );
      if (response.ok) {
        alert("Submitted Successfully");
        
      } else {
        alert(response.status)
      }
    }
    sendData();
  };

  return (
    <div className="md:flex flex-col gap-10 p-10 px-4 lg:px-36">
      <h1 className="text-5xl font-semibold md:mb-4 mb-[3rem] ">Free Trial</h1>

      <div className=" md:flex w-full">
        <div className=" w-1/3 flex md:flex-col  gap-2 mb-11">
          <div className="flex gap-3 items-center">
            <div className="md:h-10 h-5 md:w-10 w-8 flex items-center justify-center rounded-full border text-white bg-[#00BDD6]">
              1
            </div>
            <h4 className="text-xl font-semibold">Verify Business</h4>
          </div>

          <span className="h-20 w-fit border-l-2 ml-4 border-dotted"></span>

          <div className="flex gap-3 items-center">
            <div className="md:h-10 h-5 md:w-10 w-8 flex items-center justify-center rounded-full border text-slate-500 bg-gray">
              2
            </div>
            <h4 className="text-medium  font-normal">Verify Email</h4>
          </div>

          <span className="h-12 w-fit border-l-2 ml-4 border-dotted"></span>

          <div className="flex gap-3 items-center">
            <div className="md:h-10 h-5 md:w-10 w-8 flex items-center justify-center rounded-full border text-slate-500 bg-gray">
              3
            </div>
            <h4 className="text-medium font-normal">Secure Account</h4>
          </div>

          <span className="h-12 w-fit border-l-2 ml-4 border-dotted"></span>

          <div className="flex gap-3 items-center">
            <div className="md:h-10 h-6 md:w-10 w-6 flex items-center justify-center rounded-full border text-slate-500 bg-gray">
              4
            </div>
            <h4 className="text-medium font-normal">Login</h4>
          </div>
        </div>

        {/* Form Component */}
        <div className="md:w-2/3 flex flex-col gap-3   mx-auto">
          <p className="p-3 rounded-md bg-gray-50 flex gap-2 items-center">
            <span>
              <CiCircleAlert />
            </span>
            Collecting this information to ensure security and verify your
            identity
          </p>

          <h3 className="font-semibold text-3xl">Business Information</h3>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2 p-2">
                <label htmlFor="company_name" className="font-medium text-lg">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company_name"
                  name="company_name"
                  value={formData.company_name}
                  onChange={handleChange}
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
                  value={formData.phone_number}
                  onChange={handleChange}
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
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="border p-2 rounded bg-slate-100"
                />
              </div>

              <div className="flex flex-col gap-2 p-2">
                <label htmlFor="address" className="font-medium text-lg">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Address"
                  className="border p-2 rounded bg-slate-100"
                />
              </div>

              <div className="flex flex-col gap-2 p-2">
                <label htmlFor="country" className="font-medium text-lg">
                  Country/Region
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
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
                  value={formData.city}
                  onChange={handleChange}
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
                  value={formData.business_number}
                  onChange={handleChange}
                  placeholder="Business Number"
                  className="border p-2 rounded bg-slate-100"
                />
              </div>
            </div>

            <button className="p-2 px-4 bg-[#00BDD6] text-white">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VerifyBusiness;
