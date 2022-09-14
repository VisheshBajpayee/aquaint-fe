import React from "react";
import { ReactComponent as RegisterSVG } from "../assets/svg/vector_1.svg";
import { BiMessageCheck } from "react-icons/bi";
const RegisterPage = () => {
  return (
    <div className="w-screen h-screen  flex">
      {/* left */}
      <div className="w-[483px] h-screen  flex flex-col bg-primaryGrey">
        <div className="p-10 bg-teal-50">
          <div className="flex items-center  gap-1">
            <BiMessageCheck size={22} className="mt-2 text-primaryOrange " />
            <h1 className="font-bold text-2xl">aquaint</h1>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center flex-1 bg-teal-300">
          <RegisterSVG />
        </div>
      </div>
      {/* right */}
      <div className="h-screen flex-1 bg-teal-200"></div>
    </div>
  );
};

export default RegisterPage;
