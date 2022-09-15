import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import { BiMessageCheck } from "react-icons/bi";
import { ReactComponent as ForgotPasswordVector } from "../assets/svg/forgotPasswordVector.svg";
import { Link } from "react-router-dom";
import { PATHS } from "../paths/paths";

const ForgotPasswordPage = () => {
  return (
    <div className="w-screen h-screen flex">
      {/* left */}
      <div className="w-[60vw] bg-primaryGrey h-screen flex items-center justify-center">
        <div className="flex items-center  gap-1 fixed top-10 left-10">
          <BiMessageCheck size={22} className="mt-2 text-primaryOrange " />
          <h1 className="font-bold text-2xl text-primaryBlue">aquaint</h1>
        </div>
        <ForgotPasswordVector />
      </div>
      {/* right */}
      <div className="flex-1 bg-primaryWhite flex  justify-center items-center">
        <div className="w-full px-10">
          <div className="flex flex-col gap-2 mb-2">
            <h1 className="text-2xl text-primaryBlack font-semibold">
              Forgot Password
            </h1>
            <span className="text-sm">
              Enter your email and we'll send you information to reset your
              password
            </span>
          </div>

          {/* login form */}
          <div>
            <Input label="Email Address" placeholder="name@work-email.com" />
          </div>

          <div className="mt-5">
            <Button btnText="Get Reset Link" fullWidth />
          </div>

          <div className="flex gap-2 w-full justify-center items-center mt-6 cursor-pointer">
            <IoIosArrowBack />
            <Link to={PATHS.loginPage}>Back to login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
