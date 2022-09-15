import React from "react";

const Input = ({
  type,
  name,
  id,
  placeholder,
  label,
  required,
  inputIcon,
  labelTooltip,
  tooltipText,
  tooltipIcon
}) => {
  return (
    <div className="form-control flex flex-col py-1 gap-2 relative">
      <label
        className="text-inputLabelGrey text-[14px] flex items-center gap-5"
        htmlFor={id}
      >
        <div>
          {label}
          {required && <span className="text-primaryOrange">*</span>}
        </div>
        {labelTooltip ? (
          <div className="tooltip tooltip-right" data-tip={tooltipText}>
            <button>{tooltipIcon}</button>
          </div>
        ) : null}
      </label>
      <input
        className={`${
          type === "checkbox"
            ? "checkbox checkbox-info"
            : "border-2 border-borderGrey  py-3 px-4 rounded-[10px]"
        }  `}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
      />
      {inputIcon}
    </div>
  );
};

export default Input;
