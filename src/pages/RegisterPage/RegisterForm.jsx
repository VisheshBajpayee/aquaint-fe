import React from "react";
const RegisterForm = ({ mainHeading, secondaryHeading, children }) => {
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-semibold">{mainHeading}</h1>
      <span className="text-secondaryGrey">{secondaryHeading}</span>
      {children}
    </div>
  );
};
export default RegisterForm;
