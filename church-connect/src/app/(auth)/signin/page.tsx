"use client";
import { Button } from "@heroui/react";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* Sign In Form */}
      <form className=" p-8 shadow-xl rounded-lg" onSubmit={handleSignIn}>
        <h2 className="text-3xl font-bold mb-4 text-center cursor-pointer text-cyan-950">
          ChuCo
        </h2>
        <h2 className="text-xl font-medium mb-6 text-center text-cyan-950">
          Login to your Account
        </h2>
        <button className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md px-4 py-2 mb-4 hover:bg-gray-100 transition">
          <Image src="/google.png" alt="Google" width={20} height={20} />
          <span className="text-sm text-gray-700 font-medium">
            Continue with Google
          </span>
        </button>

        <div className="flex items-center mb-8">
          <div className="flex-grow border-t border-gray-300"></div>
          <p className="mx-4 text-gray-500 text-sm whitespace-nowrap">
            or Sign in with Email
          </p>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <div className="mb-4">
          <label className=" text-base font-medium mb-1">
            Email<span className="text-red-500">*</span>
          </label>
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="focus:outline-none border-[#DED2D9] border w-full rounded-md text-sm placeholder:text-muted-foreground px-3 py-2"
          />
        </div>

        <div className="mb-2">
          <label className=" text-base font-medium mb-1">
            Password<span className="text-red-500">*</span>
          </label>
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="focus:outline-none border-[#DED2D9] border w-full rounded-md text-sm placeholder:text-muted-foreground px-3 py-2"
          />
        </div>
        <p className="mb-6 text-cyan-950 text-sm font-medium">
          <Link href="/signin">Forgot Password?</Link>
        </p>

        <button
          type="submit"
          className="bg-cyan-950 text-white  hover:bg-cyan-700 w-full px-4 py-2 rounded-md"
        >
          Sign in
        </button>
        <h2 className="text-base mt-6 text-center text-gray-500">
          Not registered Yet? &nbsp;
          <span className="font-medium text-cyan-700">
            <Link href="/register">Create an account</Link>
          </span>
        </h2>
      </form>
    </div>
  );
}

export default Signin;
