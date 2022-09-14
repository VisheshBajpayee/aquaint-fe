import React from "react";

const TabBadge = ({ primaryText, secondaryrText, icon, isActive }) => {
  return (
    <div className="flex gap-3 items-center">
      {/* image */}
      <div
        className={`${
          isActive ? "bg-primaryOrange" : "bg-badgeGrey"
        } rounded-md w-10 h-10 flex justify-center items-center`}
      >
        {/* icon */}
        <div
          className={`${isActive ? "text-primaryWhite" : "text-secondaryGrey"}`}
        >
          {icon}
        </div>
      </div>
      {/* text */}
      <div className="flex  flex-col">
        <h3
          className={`text-sm font-semibold ${
            isActive ? "text-primaryOrange" : "text-primaryBlack"
          }`}
        >
          {primaryText}
        </h3>
        <span className="text-xs text-secondaryGrey">{secondaryrText}</span>
      </div>
    </div>
  );
};

export default TabBadge;
