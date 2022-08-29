import React from "react";
import { NavLink, Link } from "react-router-dom";
import FormArrow from "assets/icons/backArrow.svg";
import FormLogo from "assets/icons/userFormLogo.svg";
import { Input } from "components/Input";
import { Button } from "components/Button";
import "./index.css";

export default function UserForm() {
  return (
    <div className="bg-[#F6F6F6] w-full h-full">
      {/* headline */}
      <Link to="/">
        <button>
          <img src={FormArrow} className="ml-[73px] mt-[53px]" />
        </button>
      </Link>

      <div className="flex justify-center text-[20px] leading-6 font-bold">
        <NavLink
          className={"mr-[66px]"}
          to="/user-info"
          activeClassName="active"
        >
          <h1>თანამშრომლის ინფო</h1>
        </NavLink>
        <NavLink to="/laptop-info" activeClassName="active">
          <h1>ლეპტოპის მახასიათებლები</h1>
        </NavLink>
      </div>
      {/* end of headline */}
      {/* content */}
      <div className="w-[1226px] h-[973px] bg-white flex justify-center m-auto mt-[43px] rounded-lg pt-[49px] px-[174px]">
        {/* input wrapper */}
        <div className="w-full flex flex-col">
          <div className="flex w-full justify-between">
            <div className="w-[48%]">
              <Input
                label="სახელი"
                placeholder="გრიშა"
                hint="მინიმუმ 2 სიმბოლო, ქართული ასოები"
              />
            </div>
            <div className="w-[48%]">
              <Input
                label="გვარი"
                placeholder="ბაგრატიონი"
                hint="მინიმუმ 2 სიმბოლო, ქართული ასოები"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <select className="w-[878px] h-[60px] bg-[#EBEBEB] rounded-lg my-[52px] px-2">
              <option>თიმი</option>
            </select>
            <select className="w-[878px] h-[60px] bg-[#EBEBEB] rounded-lg px-2">
              <option>პოზიცია</option>
            </select>
            <div className="my-[52px]">
              <Input
                label="მეილი"
                placeholder="grish666@redberry.ge"
                hint="უნდა მთავრდებოდეს @redberry.ge-ით"
                styles="w-[878px] h-[60px]"
              />
            </div>
            <Input
              label="ტელეფონის ნომერი"
              placeholder="+995 598 00 07 01"
              hint="უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს"
              styles="w-[878px] h-[60px]"
            />
          </div>
          <div className="mt-[87px] flex justify-end">
            <Button title="შემდეგი" styles="w-[176px]" />
          </div>
        </div>
        {/* end of input wrapper */}
      </div>
      <div className="flex justify-center items-center">
        <img
          src={FormLogo}
          width="85px"
          height="85px"
          className=" mt-[67px] mb-[45px]"
        />
      </div>
    </div>
  );
}
