import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
// btnType used to specify type of button
const Button = ({
  btnType,
  btnText,
  arrowRight,
  arrowLeft,
  variant,
  fullWidth,
}) => {
  const variantClasses = () => {
    switch (variant) {
      case "outline":
        return "border border-1 border-buttonOutlineGrey text-buttonOutlineGrey";

      case "success":
        return "bg-primaryGreen text-primaryWhite";

      default:
        return "bg-primaryBlue text-primaryWhite";
    }
  };

  return (
    <button
      type={btnType}
      className={`rounded-[5px]  px-6 py-3 text-center ${
        fullWidth && "w-full"
      } ${variantClasses()}`}
    >
      {fullWidth ? (
        btnText
      ) : (
        <div className="flex items-center gap-2 justify-between ">
          {arrowLeft && <IoIosArrowBack className="text-buttonOutlineGrey" />}
          <span>{btnText}</span>
          {arrowRight && <IoIosArrowForward />}
        </div>
      )}
    </button>
  );
};

export default Button;
