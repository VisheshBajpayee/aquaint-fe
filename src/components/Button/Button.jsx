import React from "react";
import { ReactComponent as ArrowIconWhite } from "../../assets/svg/arrowIconWhite.svg";
const Button = ({ btnType, btnText, showArrow }) => {
  return (
    <>
      <button className="rounded-[5px] bg-primaryBlue text-primaryWhite px-6 py-3">
        <div className="flex items-center gap-2 justify-between">
          <span>{btnText}</span>
          {showArrow && <ArrowIconWhite />}
        </div>
      </button>
    </>
  );
};

export default Button;
