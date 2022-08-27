import React from "react";

export default function Button({ title }) {
  return (
    <button
      className={`flex items-center justify-center py-[18px] px-[60px] border rounded-lg gap-5 text-white text-[20px] leading-[24px] font-medium font-helvetica bg-light-blue hover:bg-medium-blue active:bg-dark-blue`}
    >
      {title}
    </button>
  );
}
