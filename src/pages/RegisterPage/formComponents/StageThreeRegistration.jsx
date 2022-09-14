import React from "react";
import Input from "../../../components/Input/Input";

const StageThreeRegistration = () => {
  return (
    <div className="flex gap-1">
      <Input
        id="organization-name"
        name="organization"
        label="Organisation name"
        required
      />
      <Input
        id="subdomain-name"
        name="subDomain"
        label="Sub Domain Name"
        required
      />
    </div>
  );
};

export default StageThreeRegistration;
