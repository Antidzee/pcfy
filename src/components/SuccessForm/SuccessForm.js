import React from "react";
import SuccessFormSvg from "assets/icons/success.svg";
import { Button } from "components/Button";

export default function SuccessForm() {
  return (
    <div className="bg-[#4A4A4A] w-full h-full flex justify-center items-center font-helvetica">
      <div className="bg-white w-[847px] h-[537px] flex justify-center items-center flex-col rounded-lg">
        <img src={SuccessFormSvg} alt="form" />
        <h1 className="text-[25px] font-bold leading-[31px] mb-[79px]">
          ჩანაწერი დამატებულია!
        </h1>
        <Button
          title="სიაში გადაყვანა"
          className="text-[20px] leading-6 font-medium"
        />
        <button className="mt-[28px] text-[20px] leading-6 font-medium text-[#0089A7]">
          მთავარი
        </button>
      </div>
    </div>
  );
}
