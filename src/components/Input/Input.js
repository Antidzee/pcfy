import React from "react";

export default function Input({
  hint,
  label,
  status,
  onChange,
  value,
  placeholder,
  disabled = false,
}) {
  return (
    <div className="flex flex-col max-w-[280px] items-start">
      {label && (
        <span className="mb-2 text-black font-medium font-helvetica text-[18px] leading-[21px]">
          {label}
        </span>
      )}
      <input
        className="border-[1.8px] border-[#8AC0E2] rounded-lg pl-[8px] py-2 font-helvetica text-[16px] leading-[21px] font-normal text-[#666666]"
        type="text"
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
      {hint && (
        <span className="mt-2 text-dark-gray font-light font-helvetica text-[14px] leading-[21px]">
          {hint}
        </span>
      )}
    </div>
  );
}
