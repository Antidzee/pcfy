import React from "react";
import "./index.css";

export default function Radio({ selected, onChange, text, value }) {
  return (
    <div
      className="radio-container"
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
      <div className="text-black text-[16px] leading-[21px] font-normal font-helvetica">
        {text}
      </div>
    </div>
  );
}
