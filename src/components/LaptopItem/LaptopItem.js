import React from "react";

export default function LaptopItem({
  userName = "ირინე ჩანქსელიანი",
  laptopName = "Pentium II",
  imageUrl,
}) {
  return (
    <div className="flex bg-cyan border border-solid border-[#AED1EA] rounded-[10px] p-[14px] max-w-[563px] sm:p-[7px] sm:max-w-[358px] ">
      <div className="flex items-center  max-w-[266px] max-h-[178px] sm:max-w-[164px] sm:max-h-[109px]">
        <img
          className="rounded-[10px] w-full h-full"
          src={imageUrl}
          alt="LaptopImage"
        />
      </div>
      <div className="flex flex-col justify-between ml-[28px]">
        <div className="flex flex-col">
          <span className="font-helvetica text-[18px] leading-[21px] font-medium text-dark-gray pt-8 text-start sm:text-[14px] sm:pt-[12px]">
            {userName}
          </span>
          <span className="font-helvetica text-[18px] leading-[21px] font-normal text-dark-gray pt-[18px] text-start sm:pt-[8px]">
            {laptopName}
          </span>
        </div>
        <button className="text-[#4386A9] underline text-[16px] leading-[21px] font-normal font-helvetica pb-6 sm:pb-[15px] text-start sm:text-[14px]">
          მეტის ნახვა
        </button>
      </div>
    </div>
  );
}
