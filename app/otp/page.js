"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";

const OTPPage = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputs = useRef([]);

  const handleChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(Number(value))) return;

    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    if (value && index < 5) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  return (
    <div className="bg-very-dark-olive min-h-screen flex items-center justify-center p-normal font-lato">
      <div className="bg-white w-full max-w-[400px] rounded-[20px] p-margin shadow-2xl flex flex-col items-center">
        {/* Back and Logo */}
        <div className="w-full flex items-center justify-between mb-margin">
          <Link
            href="/login"
            className="flex items-center gap-intra hover:text-primary transition-colors text-very-dark-olive"
          >
            <FaArrowLeft size={18} />
            <span className="text-[0.9rem] font-bold">
              Back to re-enter email
            </span>
          </Link>
          <div className="flex items-center gap-intra">
            <div className="w-margin h-margin bg-primary"></div>
            <span className="font-nova text-[1.1rem] tracking-[1px] text-very-dark-olive">
              BOLDTRON
            </span>
          </div>
        </div>

        <p className="text-[0.9rem] text-center text-very-dark-olive mb-pad px-normal">
          We've sent an OTP to the email you provided <br />
          <span className="font-bold">tiammui@gmail.com</span>
        </p>

        <form className="w-full flex flex-col items-center gap-margin mb-normal">
          <div className="flex flex-col items-center gap-1 w-full">
            <label className="text-[0.9rem] font-bold text-very-dark-olive self-start">
              Enter OTP
            </label>
            <div className="flex gap-intra justify-between w-full">
              {otp.map((digit, i) => (
                <input
                  key={i}
                  ref={(el) => (inputs.current[i] = el)}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleChange(i, e)}
                  onKeyDown={(e) => handleKeyDown(i, e)}
                  className="w-[45px] h-[45px] md:w-[50px] md:h-[50px] border-2 border-custom-gray/20 rounded-modular text-center text-[1.2rem] font-bold text-very-dark-olive focus:border-primary outline-none transition-colors"
                />
              ))}
            </div>
          </div>

          <button
            type="button"
            className="w-full bg-primary py-pad rounded-modular font-catamaran font-bold text-[1.2rem] text-very-dark-olive hover:scale-[1.02] transition-transform shadow-md active:scale-95"
          >
            Verify Email
          </button>
        </form>

        <div className="w-full flex flex-col items-center gap-normal">
          <p className="text-[0.9rem] text-custom-gray">
            Or Log in/ Sign up with Google instead
          </p>

          <button className="w-full border-2 border-custom-gray/20 rounded-modular p-pad flex items-center justify-center gap-normal hover:bg-gray-50 transition-colors">
            <Image src="/google-logo.png" alt="google" width={24} height={24} />
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

export default OTPPage;
