import React from "react";

const RegisterForm = () => {
  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-semibold">Welcome to Aquaint</h1>
      <span className="text-secondaryGrey">Enter your email address</span>
      {/* first form stage */}
      <div>
        {/* input component */}
        <Input type="text" name="email" id="email" label="Email" required />

        {/* button component */}
        <div className="flex justify-end w-3/4 py-4">
          <Button btnText="Next" showArrow />
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
