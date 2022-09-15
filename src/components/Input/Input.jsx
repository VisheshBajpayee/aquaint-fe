import React from "react";

const Input = ({ type, name, id, placeholder, label, required }) => {
  return (
    <div className="form-control flex flex-col py-1 gap-2">
      <label className="text-inputLabelGrey text-[14px]" htmlFor={id}>
        {label}
        {required && <span className="text-primaryOrange">*</span>}
      </label>
      <input
        className={`${
          type === "checkbox" && "checkbox"
        } border-2 border-borderGrey  py-3 px-4 rounded-[10px]`}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
