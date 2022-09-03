import React from "react";
import SuccessFormSvg from "assets/icons/success.svg";
import { Button } from "components/Button";
import { NavLink, Link } from "react-router-dom";

export default function SuccessForm() {
  return (
    <div className="bg-[#4A4A4A] w-full h-full flex justify-center items-center">
      <div className="bg-white w-[847px] min-h-[537px] pb-[44px] flex justify-center items-center flex-col rounded-lg sm:h-full sm:justify-around">
        <div className="flex flex-col items-center mt-[100px]">
          <img src={SuccessFormSvg} alt="form" />
          <h1 className="text-[25px] font-bold leading-[31px] mb-[79px] sm:flex sm:justify-center sm:max-w-[164px] sm:leading-8 sm:text-center">
            ჩანაწერი დამატებულია!
          </h1>
        </div>
        <div className="flex flex-col items-center">
          <NavLink to="/product-page" activeClassName="active">
            <Button
              title="სიაში გადაყვანა"
              styles="text-[20px] leading-6 font-medium px-[65.5px] py-[18px] "
            />
          </NavLink>
          <NavLink to="/" activeClassName="active">
            <button className="mt-[28px] text-[20px] leading-6 font-medium text-[#0089A7]">
              მთავარი
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
