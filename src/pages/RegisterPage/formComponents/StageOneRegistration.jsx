import React from "react";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";

const StageOneRegistration = () => {
  return (
    // stage one
    <div className="w-3/4">
      {/* input component */}
      <Input type="text" name="email" id="email" label="Email" required />

      {/* button component */}
      <div className="flex justify-end  py-4">
        <Button btnText="Next" arrowRight />
      </div>
      <div className="text-xs flex gap-1 justify-center w-3/4">
        <span>Don't have account?</span>
        <span className="text-primaryOrange cursor-pointer font-semibold">
          Register
        </span>
      </div>
    </div>
  );
};

export default StageOneRegistration;
