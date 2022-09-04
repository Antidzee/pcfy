import React from "react";

export default function Input({
  hint,
  type,
  label,
  onChange,
  value,
  styles,
  required,
  placeholder,
  dirty,
  disabled = false,
}) {
  return (
    <div className="flex flex-col items-start w-full">
      {label && (
        <span
          className={`mb-2 font-bold  text-[18px] leading-[21px] ${
            dirty ? "text-[#E52F2F] " : "text-black"
          }`}
        >
          {label}
        </span>
      )}
      <input
        required={required}
        className={`${styles} ${
          dirty ? "border-[#E52F2F]" : "border-[#8AC0E2]"
        } h-[60px] w-full border-[1.8px] rounded-lg pl-[8px] py-2 font-helvetica text-[16px] leading-[21px] font-normal text-[#666666]`}
        placeholder={placeholder}
        disabled={disabled}
        type={type}
        classes="width"
        styles={styles}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
      {hint && (
        <span
          className={`mt-2 font-light font-helvetica text-[14px] leading-[21px] ${
            dirty ? "text-[#E52F2F] " : "text-dark-gray"
          }`}
        >
          {hint}
        </span>
      )}
    </div>
  );
}
