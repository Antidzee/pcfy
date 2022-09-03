import React from "react";
import "./index.css";

export default function Radio({ selected, onChange, text, value, styles }) {
  return (
    <div
      className={`${styles} radio-container`}
      onClick={() => {
        onChange(value);
      }}
    >
      <div
        className={`radio-outer-circle ${value !== selected && "unselected"}`}
      >
        <div
          className={`radio-inner-circle ${
            value !== selected && "unselected-circle"
          }`}
        />
      </div>
      <div className="text-black text-[16px] leading-[21px] font-normal">
        {text}
      </div>
    </div>
  );
}
