import React from "react";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";

const StageThreeRegistration = () => {
  return (
    <div className=" w-3/4 ">
      <Input
        id="organization-name"
        name="organization"
        label="Organisation name"
        placeholder="Enter Organization name"
        required
      />
      <Input
        id="subdomain-name"
        name="subDomain"
        label="Sub Domain Name"
        placeholder="Enter Subdomain name"
        required
      />
      <div className="flex justify-between mt-6">
        <Button btnText="Previous" showArrow />
        <Button btnText="Create" />
      </div>
    </div>
  );
};

export default StageThreeRegistration;
