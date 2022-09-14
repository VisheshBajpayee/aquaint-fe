import React from "react";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
const StageTwoRegistration = () => {
  return (
    <>
      <div className="flex gap-5 w-full">
        <div className="w-1/2">
          <Input
            id="firstname"
            name="firstName"
            label="First name"
            placeholder="enter your first name"
            required
          />
        </div>
        <div className="w-1/2">
          <Input
            id="lastname"
            name="lastname"
            label="Last name"
            placeholder="enter your last name"
            required
          />
        </div>
      </div>
      <div className="flex gap-5 w-full">
        <div className="w-1/2">
          <Input
            id="nickname"
            name="nickname"
            label="Nick name"
            placeholder="enter your nick name"
            required
          />
        </div>
        <div className="w-1/2">
          <Input
            id="firstname"
            name="firstName"
            placeholder="enter your first name"
            required
          />
        </div>
      </div>
      <div className="flex gap-5 w-full">
        <div className="w-1/2">
          <Input
            id="nickname"
            name="nickname"
            label="Nick name"
            placeholder="enter your nick name"
            required
          />
        </div>
        <div className="w-1/2">
          <Input
            id="firstname"
            name="firstName"
            placeholder="enter your first name"
            required
          />
        </div>
      </div>
      <div className="flex gap-5 w-full">
        <div className="w-1/2">
          <Input
            id="nickname"
            name="nickname"
            label="Nick name"
            placeholder="enter your nick name"
            required
          />
        </div>
        <div className="w-1/2">
          <Input
            id="firstname"
            name="firstName"
            placeholder="enter your first name"
            required
          />
        </div>
      </div>
      <div className="flex gap-5 w-full">
        <div className="w-1/2 flex items-center gap-4">
          <div className="mb-2">
            <Input type="checkbox" id="nickname" name="nickname" />
          </div>
          <span>
            I agree to{" "}
            <span className="text-primaryOrange">privacy policy & terms</span>
          </span>
        </div>
      </div>
      <div className="flex justify-between gap-5 w-full">
        <div>
          <Button btnText="Previous" btnType="button" showArrow />
        </div>
        <div>
          {" "}
          <Button btnText="Next" btnType="button" showArrow />
        </div>
      </div>
    </>
  );
};

export default StageTwoRegistration;
