import React from "react";
import FormArrowMobile from "assets/icons/backArrowMobile.svg";
import FormArrow from "assets/icons/backArrow.svg";
import { NavLink, Link } from "react-router-dom";
import laptopFormPlaceholder from "assets/icons/laptopFormPlaceholder.png";

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
      <div className="w-[1178px] pt-[33px]  sm:w-full sm:px-[16px] font-helvetica">
        <div className="max-w-[577px] max-h-[342px] ">
          <img src={laptopFormPlaceholder} />
        </div>
        <div className="sm:grid sm:grid-cols-2 sm:grid-rows-3 w-full mt-[29px]">
          <div className="laptop-description font-bold pb-[36px]">
            <p>სახელი:</p>
            <p>თიმი:</p>
            <p>პოზიცია:</p>
            <p>მეილი:</p>
            <p>ტელ. ნომერი:</p>
          </div>
          <div className="laptop-description">
            <p>აკაკი წერეთელი</p>
            <p>დიზაინერები</p>
            <p>ილუსტრატორი</p>
            <p>ako@redberry.ge</p>
            <p>+995 583 45 28 33</p>
          </div>
          <div className="laptop-description font-bold pb-[36px]">
            <p>ლეპტოპის სახელი:</p>
            <p>ლეპტოპის ბრენდი:</p>
            <p>RAM:</p>
            <p>მეხსიერების ტიპი:</p>
          </div>
          <div className="laptop-description ">
            <p>Razor Blade</p>
            <p>HP</p>
            <p>16</p>
            <p>SSD</p>
          </div>
          <div className="laptop-description font-bold pb-[36px]">
            <p>CPU:</p>
            <p>CPU-ს ბირთვი:</p>
            <p>CPU-ს ნაკადი:</p>
          </div>
          <div className="laptop-description ">
            <p>intel 5</p>
            <p>5</p>
            <p>515</p>
          </div>
        </div>
        {/* <div className="flex mt-[84px] justify-center sm:flex-col sm:pt-[33px] border-b-[1px] sm:mt-[33px] border-[#A5A5A5] w-full pb-10">
          <div className="flex justify-start items-center pl-[68px] pt-[29px] sm:pl-0 sm:text-[14px]">
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
        </div> */}
        {/* <div className="border-b-[1px] border-[#A5A5A5] sm:w-full pb-10 flex flex-row justify-between sm:flex-col sm:text-[14px]">
          <div className="flex sm:flex sm:justify-start sm:items-center pt-[29px]">
            <div className="font-medium ">
              <p>ლეპტოპის სახელი:</p>
              <p>ლეპტოპის ბრენდი:</p>
              <p>RAM:</p>
              <p>მეხსიერების ტიპი:</p>
            </div>
            <div className="ml-[61px] text-[#797979] font-normal  ">
              <p>Razor Blade</p>
              <p>HP</p>
              <p>16</p>
              <p>SSD</p>
            </div>
          </div>

          <div className="flex sm:flex sm: pt-[29px] sm:pt-0">
            <div className="font-medium ">
              <p>CPU:</p>
              <p>CPU-ს ბირთვი:</p>
              <p>CPU-ს ნაკადი:</p>
            </div>
            <div className="sm:ml-[99px] text-[#797979] font-normal  ">
              <p>intel 5</p>
              <p>5</p>
              <p>515</p>
            </div>
          </div>
        </div> */}

        {/* <div className="sm:pb-10 sm:text-[14px]">
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
        </div> */}
      </div>
    </div>
  );
}
