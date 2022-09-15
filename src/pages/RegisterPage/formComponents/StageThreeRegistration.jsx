import React from "react";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import { GrCircleInformation } from "react-icons/gr";
import { changeFormStage } from "../../../redux/features/registerFormFeature";
import { useDispatch } from "react-redux";
const StageThreeRegistration = () => {
  const dispatch = useDispatch();
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
        labelTooltip
        tooltipText="organisation sub domain details"
        tooltipIcon={<GrCircleInformation />}
      />
      <div className="flex justify-between mt-6">
        <Button
          btnText="Previous"
          variant="outline"
          arrowLeft
          onClick={(e) => {
            e.preventDefault();
            console.log("Clicked on previous");
            dispatch(changeFormStage(1));
          }}
        />
        <Button btnText="Create" variant="success" />
      </div>
      <div className="flex gap-5 w-full justify-center mt-5">
        <span>
          Dont have an account?{" "}
          <span className="text-primaryOrange cursor-pointer">Register</span>
        </span>
      </div>
    </div>
  );
};

export default StageThreeRegistration;
