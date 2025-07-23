import Link from "next/link";
import React from "react";

function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <form className=" p-8 shadow-xl rounded-lg">
        <h2 className="text-3xl font-bold mb-4 text-center cursor-pointer text-cyan-950">
          ChuCo
        </h2>
        <h2 className="text-xl font-medium mb-1 text-center text-cyan-950">
          Join Our Community
        </h2>
        <p className="mb-6 text-center text-gray-500 text-sm">
          Create your Church Connect account
        </p>
        <div className="mb-4">
          <label className=" text-base font-medium mb-1">
            Email<span className="text-red-500">*</span>
          </label>
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            required
            className="px-3 py-2 focus:outline-none border-[#DED2D9] border w-full rounded-md text-sm placeholder:text-muted-foreground"
          />
        </div>
        <div className="mb-4">
          <label className=" text-base font-medium mb-1">
            First Name<span className="text-red-500">*</span>
          </label>
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            required
            className="px-3 py-2 focus:outline-none border-[#DED2D9] border w-full rounded-md text-sm placeholder:text-muted-foreground"
          />
        </div>
        <div className="mb-4">
          <label className=" text-base font-medium mb-1">
            Last Name<span className="text-red-500">*</span>
          </label>
          <input
            name="lastName"
            placeholder="Last Name"
            type="text"
            required
            className="px-3 py-2 focus:outline-none border-[#DED2D9] border w-full rounded-md text-sm placeholder:text-muted-foreground"
          />
        </div>
        <div className="mb-4">
          <label className=" text-base font-medium mb-1">
            Password<span className="text-red-500">*</span>
          </label>
          <input
            name="password"
            type="password"
            placeholder="Create a password"
            required
            className="px-3 py-2 focus:outline-none border-[#DED2D9] border w-full rounded-md text-sm placeholder:text-muted-foreground"
          />
        </div>
        <div className="mb-8">
          <label className=" text-base font-medium mb-1">
            Confirm Password
            <span className="text-red-500">*</span>
          </label>
          <input
            name="password"
            type="password"
            placeholder="Confirm password"
            required
            className="px-3 py-2 focus:outline-none border-[#DED2D9] border w-full rounded-md text-sm placeholder:text-muted-foreground"
          />
        </div>
        <button
          type="submit"
          className="bg-cyan-950 text-white  hover:bg-cyan-700 w-full px-4 py-2 rounded-md"
        >
          Register
        </button>
        <h2 className="text-base mt-6 text-center text-cyan-700 ">
          <Link className="cursor-pointer" href="/signin">
            Already have an account?
          </Link>
        </h2>
      </form>
    </div>
  );
}

export default Register;
