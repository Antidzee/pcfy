import React from "react";
import FormArrowMobile from "assets/icons/backArrowMobile.svg";
import FormArrow from "assets/icons/backArrow.svg";
import { NavLink, Link } from "react-router-dom";

export default function LaptopInfo() {
  return (
    <div className="flex flex-col sm:px-[16px]">
      <div className="flex justify-start sm:flex sm:justify-start pt-[31px]">
        <NavLink to="/product-page" activeClassName="active">
          <button className="ml-[70px] sm:hidden">
            <img src={FormArrow} />
          </button>
        </NavLink>
        <NavLink to="/product-page" activeClassName="active">
          <button className="hidden sm:inline-block">
            <img src={FormArrowMobile} />
          </button>
        </NavLink>
        <h1 className="m-auto font-bold sm:text-[16px] text-[34px]">
          ლეპტოპის ინფო
        </h1>
      </div>
      <div className="px-[371px] sm:px-[16px]">
        <div className="flex mt-[84px] justify-center sm:flex-col sm:pt-[33px] border-b-[1px] sm:mt-[33px] border-[#A5A5A5] pb-10">
          <div className="max-w-[577px] max-h-[342px] sm:w-[358px] sm:h-[191px]">
            <img src="https://www.review.ge/wp-content/uploads/2022/06/gsmarena_001.jpg" />
          </div>
          <div className="flex justify-start items-center pl-[68px] pt-[29px] sm:pl-0">
            <div className="laptop-description font-medium ">
              <p>სახელი:</p>
              <p>თიმი:</p>
              <p>პოზიცია:</p>
              <p>მეილი:</p>
              <p>ტელ. ნომერი:</p>
            </div>
            <div className="laptop-description ml-[61px] text-[#797979] font-normal ">
              <p>აკაკი წერეთელი</p>
              <p>დიზაინერები</p>
              <p>ილუსტრატორი</p>
              <p>ako@redberry.ge</p>
              <p>+995 583 45 28 33</p>
            </div>
          </div>
        </div>
        <div className="border-b-[1px] border-[#A5A5A5] pb-10 ">
          <div className="flex sm:flex sm:justify-start sm:items-center pt-[29px]">
            <div className="font-medium ">
              <p>ლეპტოპის სახელი:</p>
              <p>ლეპტოპის ბრენდი:</p>
              <p>RAM:</p>
              <p>მეხსიერების ტიპი:</p>
              <div className="">
                <p>CPU:</p>
                <p>CPU-ს ბირთვი:</p>
                <p>CPU-ს ნაკადი:</p>
              </div>
            </div>
            <div className="ml-[61px] text-[#797979] font-normal ">
              <p>Razor Blade</p>
              <p>HP</p>
              <p>16</p>
              <p>SSD</p>
              <p>intel 5</p>
              <p>5</p>
              <p>515</p>
            </div>
          </div>
        </div>

        <div className="sm:pb-10">
          <div className="flex justify-start items-center pt-[29px]">
            <div className="font-medium ">
              <p>მდგომარეობა:</p>
              <p>ლეპტოპის ფასი:</p>
              <p>შევსების რიცხვი</p>
            </div>
            <div className="ml-[61px] text-[#797979] font-normal ">
              <p>მეორადი</p>
              <p>1500₾</p>
              <p>15/12/1980</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}