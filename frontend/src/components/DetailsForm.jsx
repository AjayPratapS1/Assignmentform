import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

const DetailsForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const submitContactForm = async (data) => {
    // console.log("user Data", data);
    try {
      setLoading(true);
      const res = await axios.post("http://localhost:4000/api/v1/user", data);
      toast("Data Save Successfully!");
      // console.log("result", res);
      setLoading(false);
    } catch (error) {
      console.log("error h frontend", error);
      console.log("ERROR MESSAGE - ", error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        FirstName: "",
        LastName: "",
        Email: "",
        PhoneNumber: "",
        Address: "",
      });
    }
  }, [reset, isSubmitSuccessful]);

  return (
    <form
      className="max-w-[1200px] h-full flex mx-auto"
      onSubmit={handleSubmit(submitContactForm)}
    >
      <div className="flex flex-col gap-9 p-8 justify-center w-full text-sm font-normal">
        <div className="flex flex-col gap-5 justify-center">
          <div className="flex w-full gap-5 ">
            <div className="flex gap-5 items-baseline">
              {/* firstName */}
              <div className="flex w-full flex-col gap-1 items-start">
                <label htmlFor="FirstName">First Name</label>
                <input
                  type="text"
                  name="FirstName"
                  id="FirstName"
                  placeholder="Enter first name"
                  className="p-3 bg-zinc-900 rounded-lg shadow-[inset_0px_-1px_0px_0px_#FFFFFF2E] text-white"
                  {...register("FirstName", { required: true })}
                />
                {errors.FirstName && (
                  <span className="-mt-1 text-[12px] text-red-500">
                    Please enter Your FirstName
                  </span>
                )}
              </div>

              {/* lastName */}
              <div className="flex w-full flex-col gap-1 items-start">
                <label htmlFor="LastName">Last Name</label>
                <input
                  type="text"
                  name="LastName"
                  id="LastName"
                  className="p-3 bg-zinc-900  rounded-lg shadow-[inset_0px_-1px_0px_0px_#FFFFFF2E] text-white"
                  placeholder="Enter Last name"
                  {...register("LastName", { required: true })}
                />
                {errors.LastName && (
                  <span className="-mt-1 text-[12px] text-red-500">
                    Please enter Your LastName
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* email */}
          <div className="flex flex-col gap-1 text-left">
            <label htmlFor="Email">Email Address</label>
            <input
              type="email"
              name="Email"
              id="Email"
              className="p-3  bg-zinc-900  rounded-lg shadow-[inset_0px_-1px_0px_0px_#FFFFFF2E] text-white"
              placeholder="Enter email Address"
              {...register("Email", { required: true })}
            />
            {errors.Email && (
              <span className="-mt-1 text-[12px] text-red-500">
                Please enter your email address
              </span>
            )}
          </div>

          {/* phoneNo */}
          <div className="flex flex-col gap-1 text-left">
            <label htmlFor="PhoneNumber">Phone Number</label>

            <div className="flex flex-row gap-3">
              <input
                type="number"
                name="PhoneNumber"
                id="PhoneNumber"
                placeholder="12345 67890"
                className=" bg-zinc-900 rounded-md  text-white p-3 shadow-[inset_0px_-1px_0px_0px_#FFFFFF2E]  w-[calc(100%-90px)]"
                {...register("PhoneNumber", {
                  required: {
                    value: true,
                    message: "Please enter Phone Number",
                  },
                  maxLength: { value: 10, message: "Invalid Phone Number" },
                  minLength: { value: 8, message: "Invalid Phone Number" },
                })}
              />
            </div>
            {errors.PhoneNumber && (
              <span className="-mt-1 text-[12px] text-red-500">
                {errors.PhoneNumber.message}
              </span>
            )}
          </div>
        </div>
        {/* Address*/}
        <div className="flex flex-col gap-1 text-left">
          <label htmlFor="Address">Address</label>
          <textarea
            name="Address"
            id="Address"
            cols="30"
            rows="7"
            className="p-3  bg-zinc-900 rounded-lg shadow-[inset_0px_-1px_0px_0px_#FFFFFF2E] text-white"
            placeholder="Enter Your Address here"
            {...register("Address", { required: true })}
          />
          {errors.Address && (
            <span className="-mt-1 text-[12px] text-red-500">
              Please enter your address.
            </span>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`rounded-md bg-yellow-500 px-6 py-3 text-center text-[13px] font-bold text-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] 
         ${
           !loading &&
           "transition-all duration-200 hover:scale-95 hover:shadow-none"
         }  disabled: bg-yellow-500  sm:text-[16px] `}
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default DetailsForm;
