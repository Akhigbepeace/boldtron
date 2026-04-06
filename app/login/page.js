"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const LoginPage = () => {
  return (
    <div className="bg-very-dark-olive min-h-screen flex items-center justify-center p-normal font-lato">
      <div className="bg-white w-full max-w-[400px] rounded-[20px] p-margin shadow-2xl flex flex-col items-center">
        {/* Logo */}
        <div className="flex items-center gap-intra mb-margin">
          <div className="w-margin h-margin bg-primary"></div>
          <span className="font-nova text-[1.4rem] tracking-[1px] text-very-dark-olive">
            BOLDTRON
          </span>
        </div>

        <h1 className="text-[1.8rem] font-bold text-very-dark-olive mb-1 font-catamaran">
          Welcome
        </h1>
        <p className="text-[1.1rem] font-bold text-custom-gray mb-margin">
          Log in or Sign up account
        </p>

        <form className="w-full flex flex-col gap-pad mb-normal">
          <div className="flex flex-col gap-1">
            <label className="text-[0.9rem] font-bold text-very-dark-olive">
              Your Email
            </label>
            <input
              type="email"
              className="w-full border-2 border-custom-gray/20 rounded-modular p-3 outline-none focus:border-primary transition-colors text-very-dark-olive"
              placeholder="e.g. sunday@example.com"
            />
          </div>

          <Link href="/otp" className="w-full">
            <button
              type="button"
              className="w-full bg-primary py-pad rounded-modular font-catamaran font-bold text-[1.2rem] text-very-dark-olive hover:scale-[1.02] transition-transform shadow-md active:scale-95"
            >
              Continue
            </button>
          </Link>
        </form>

        <div className="w-full flex flex-col items-center gap-normal">
          <p className="text-[0.9rem] text-custom-gray">
            Or Log in/ Sign up with Google instead
          </p>

          <button className="w-full border-2 border-custom-gray/20 rounded-modular p-pad flex items-center justify-center gap-normal hover:bg-gray-50 transition-colors">
            <Image src="/google.png" alt="google" width={24} height={24} />
            <span className="text-[1.1rem] text-very-dark-olive font-bold">
              Continue with Google
            </span>
          </button>

          <p className="text-[0.8rem] text-center text-custom-gray px-normal py-intra">
            By continuing, you agree to Boldtron's <br />
            <Link href="#" className="underline font-bold">
              Terms and Conditions
            </Link>{" "}
            and{" "}
            <Link href="#" className="underline font-bold">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
