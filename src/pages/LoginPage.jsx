import React from "react";
import { ReactComponent as LoginVector } from "../assets/svg/loginVector.svg";
import Input from "../components/Input/Input";
import { AiOutlineEye } from "react-icons/ai";
import Checkbox from "../components/Checkbox/Checkbox";
import Button from "../components/Button/Button";

const LoginPage = () => {
  return (
    <div className="w-screen h-screen flex">
      {/* left */}
      <div className="w-[60vw] bg-primaryGrey h-screen flex items-center justify-center">
        <LoginVector />
      </div>
      {/* right */}
      <div className="flex-1 bg-primaryWhite flex  justify-center items-center">
        <div className="w-full px-10">
          <div className="flex flex-col gap-2 mb-2">
            <h1 className="text-2xl text-primaryBlack font-semibold">
              Welcome to Aquaint
            </h1>
            <span>Please Login to your account and start the adventure</span>
          </div>

          {/* login form */}
          <div>
            <Input label="Email Address" placeholder="name@work-email.com" />
            <Input
              label="Password"
              placeholder="Enter password"
              inputIcon={
                <AiOutlineEye
                  className="absolute right-5 top-12 text-secondaryGrey cursor-pointer"
                  size={20}
                />
              }
            />
          </div>

          <div className="mt-5 flex justify-between">
            <Checkbox name="remember-me" id="remember-me" label="Remember me" />
            <span className="cursor-pointer">Forgot password?</span>
          </div>
          <div className="mt-5">
            <Button btnText="Login" fullWidth />
          </div>

          <div className="flex gap-5 w-full justify-center mt-5">
            <span>
              Dont have an account?{" "}
              <span className="text-primaryOrange cursor-pointer">
                Register
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
