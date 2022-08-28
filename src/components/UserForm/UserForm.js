import React from "react";
import FormArrow from "assets/icons/backArrow.svg";
import FormLogo from "assets/icons/userFormLogo.svg";
import "./index.css";
import { Input } from "components/Input";
import { Button } from "components/Button";

export default function UserForm() {
  return (
    <div className="bg-[#F6F6F6] w-full h-full">
      {/* headline */}
      <img src={FormArrow} className="ml-[73px] mt-[53px]" />
      <div className="flex justify-center text-[20px] leading-6 font-bold gap-[66px]">
        <h1>თანამშრომლის ინფო</h1>
        <h1>ლეპტოპის მახასიათებლები</h1>
      </div>
      {/* end of headline */}
      {/* content */}
      <div className="w-[1226px] h-[973px] bg-white flex justify-center m-auto mt-[43px] rounded-lg pt-[49px] px-[174px]">
        {/* input wrapper */}
        <div className="w-full flex flex-col  ">
          <div className="flex  justify-center gap-[63px]">
            <Input
              label="სახელი"
              placeholder="გრიშა"
              styles="w-[300px] h-[60px]"
              hint="მინიმუმ 2 სიმბოლო, ქართული ასოები"
            />
            <Input
              label="გვარი"
              placeholder="ბაგრატიონი"
              styles="w-[300px] h-[60px]"
              hint="მინიმუმ 2 სიმბოლო, ქართული ასოები"
            />
          </div>
          <div className="flex flex-col gap-[43px]">
            <select className="w-[878px] h-[60px] bg-[#EBEBEB] rounded-lg  mt-[66px] px-2">
              <option>თიმი</option>
            </select>
            <select className="w-[878px] h-[60px] bg-[#EBEBEB] rounded-lg px-2">
              <option>პოზიცია</option>
            </select>
            <Input
              label="მეილი"
              placeholder="grish666@redberry.ge"
              hint="უნდა მთავრდებოდეს @redberry.ge-ით"
              styles="w-[878px] h-[60px]"
            />
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

// <div className="flex justify-center flex-col ">
//   <div className="mt-[53px] ml-[70px]">
//     <img src={FormArrow} width="53px" height="53px" alt="arrow" />
//   </div>
//   <div className="flex justify-center ">
//     <h1 className=" font-bold text-[20px] leading-6 mr-[66px] cursor-pointer">
//       თანამშრომლის ინფო
//     </h1>
//     <h1 className=" font-bold text-[20px] leading-6 cursor-pointer ">
//       ლეპტოპის მახასიათებლები
//     </h1>
//   </div>
//   <div className=" w-[1226px] h-[973px] bg-white  mt-[42px] pt-[88px] flex flex-col items-center m-auto">
//     <div className="flex justify-center ">
//       {/* first name input wrapper */}
//       <div className="mr-[163px]">
//         <Input
//           label="სახელი"
//           hint="მინუმუმ 2 სიმბოლო, ქართული ასოები"
//           placeholder="გრიშა"
//           styles="w-[407px] h-[60px]"
//         />
//       </div>
//       {/* last name input wrapper */}
//       <div>
//         <Input
//           label="გვარი"
//           hint="მინუმუმ 2 სიმბოლო, ქართული ასოები"
//           placeholder="ბაგრატიონი"
//           styles="w-[407px] h-[60px]"
//         />
//       </div>
//     </div>
//   </div>
// </div>
