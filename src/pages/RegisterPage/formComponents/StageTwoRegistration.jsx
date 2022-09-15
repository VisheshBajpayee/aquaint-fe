import React from "react";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import { AiOutlineEye } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { changeFormStage } from "../../../redux/features/registerFormFeature";
const StageTwoRegistration = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex gap-5 w-full mt-5">
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
            inputIcon={
              <AiOutlineEye
                className="absolute right-5 top-12 text-secondaryGrey cursor-pointer"
                size={20}
              />
            }
          />
        </div>
        <div className="w-1/2">
          <Input
            id="firstname"
            name="firstName"
            placeholder="enter your first name"
            required
            inputIcon={
              <AiOutlineEye
                className="absolute right-5 top-12 text-secondaryGrey cursor-pointer"
                size={20}
              />
            }
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
            <span className="text-primaryOrange cursor-pointer">
              privacy policy & terms
            </span>
          </span>
        </div>
      </div>
      <div className="flex justify-between gap-5 w-full mt-2">
        <div>
          <Button
            btnText="Previous"
            btnType="button"
            arrowLeft
            variant="outline"
            onClick={(e) => {
              e.preventDefault();
              console.log("Clicked on previous");
              dispatch(changeFormStage(0));
            }}
          />
        </div>
        <div>
          {" "}
          <Button
            btnText="Next"
            btnType="button"
            showArrow
            arrowRight
            onClick={(e) => {
              e.preventDefault();
              console.log("Clicked on next");
              dispatch(changeFormStage(2));
            }}
          />
        </div>
      </div>
      <div className="flex gap-5 w-full justify-center mt-5">
        <span>
          Dont have an account?{" "}
          <span className="text-primaryOrange cursor-pointer">Register</span>
        </span>
      </div>
    </>
  );
};

export default StageTwoRegistration;
