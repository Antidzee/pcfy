import React from "react";
import { NavLink, Link } from "react-router-dom";
import FormArrow from "assets/icons/backArrow.svg";
import FormArrowMobile from "assets/icons/backArrowMobile.svg";
import FormLogo from "assets/icons/userFormLogo.svg";
import { Input } from "components/Input";
import { Radio } from "components/Radio";
import { Button } from "components/Button";

export default function LaptopForm() {
  return (
    <div>
      <div className="bg-[#F6F6F6] w-full h-full">
        <Link to="/user-info">
          <button>
            <img src={FormArrow} className="ml-[73px] mt-[53px] sm:hidden" />
          </button>
        </Link>

        <div className="flex justify-center text-[20px] leading-6 font-bold sm:justify-start sm:ml-[16px]">
          <NavLink
            className={"mr-[66px] sm:hidden"}
            to="/user-info"
            activeClassName="active"
          >
            <h1>თანამშრომლის ინფო</h1>
          </NavLink>
          <NavLink to="/user-info" activeClassName="active">
            <button className="hidden sm:inline">
              <img src={FormArrowMobile} />
            </button>
          </NavLink>
          <NavLink
            to="/laptop-info"
            activeClassName="active "
            className="sm:m-auto"
          >
            <h1>ლეპტოპის მახასიათებლები</h1>
            <p className="hidden sm:flex text-[14px] text-[#898989] font-normal justify-center items-center">
              2/2
            </p>
          </NavLink>
        </div>
      </div>

      <div className="max-w-[1226px] bg-white flex flex-col items-start m-auto mt-[43px] rounded-lg pt-[49px] px-[174px] sm:px-[24px] sm:flex-col ">
        <div className="flex items-center w-full justify-between border-b-[1px] border-b-[#C7C7C7] pb-[52px] sm:flex-col sm:rounded-xl sm:border-none sm:pb-0 ">
          <div className="w-[48%] sm:w-[100%] ">
            <Input
              label="ლეპტოპის სახელი"
              placeholder="HP"
              hint="ლათინური ასოები, ციფრები, !@#$%^&*()_+= "
            />
          </div>
          <div className="w-[48%] sm:w-[100%] ">
            <select className="w-full h-[60px] bg-[#EBEBEB] rounded-lg my-[52px] px-2">
              <option>ლეპტოპის ბრენდი</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col w-full pt-[52px] sm:pt-0">
          <div className="flex items-center gap-6 w-full sm:flex-col">
            <select className="w-full h-[60px] bg-[#EBEBEB] rounded-lg my-[52px] px-2  sm:my-0">
              <option>CPU</option>
            </select>
            <Input
              label="CPU-ს ბირთვი"
              hint="მხოლოდ ციფრები"
              placeholder="14"
            />
            <Input
              label="CPU-ს ნაკადი"
              hint="მხოლოდ ციფრები"
              placeholder="365"
            />{" "}
          </div>
          <div className="border-b-[1px] border-b-[#C7C7C7] pb-[52px] sm:flex-col sm:border-none sm:pb-0 ">
            <div className="w-[407px] sm:w-full">
              <Input
                label="ლეპტოპის RAM (GB)"
                hint="მხოლოდ ციფრები"
                placeholder="16"
                styles=""
              />
            </div>
          </div>
          <div className="flex justify-center  gap-9 pt-[52px] sm:flex-col">
            <Input
              label="შეძენის რიცხვი (არჩევითი)"
              placeholder="დდ / თთ / წწწწ"
              type="date"
            />

            <Input
              label="ლეპტოპის ფასი"
              placeholder="0000"
              hint="მხოლოდ ციფრები"
            />
          </div>
          <div className="pt-[75px]">
            <h1>ლეპტოპის მდგომარეობა</h1>
            <div className="flex gap-16">
              <Radio text="ახალი" />
              <Radio text="მეორადი" />
            </div>
          </div>
          <div className="flex justify-between items-center mt-[97px] mb-[63px]">
            <Link to="/user-info">
              <button className=" text-[#62A1EB] font-medium">უკან</button>
            </Link>
            <NavLink to="/success-window" activeClassName="active">
              <Button title="დამახსოვრება" styles="py-[18px] px-[35.5px] " />
            </NavLink>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-[56px] sm:hidden">
        <img src={FormLogo} />
      </div>
    </div>
  );
}
