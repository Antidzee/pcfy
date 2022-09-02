import React from "react";
import { LaptopItem } from "components/LaptopItem";
import { NavLink, Link } from "react-router-dom";
import FormArrow from "assets/icons/backArrow.svg";

export default function ProductList() {
  return (
    <div className="">
      <Link to="/laptop-info">
        <button>
          <img src={FormArrow} className="ml-[73px] mt-[53px]" />
        </button>
      </Link>
      <div className="flex items-center justify-center mb-[97px]">
        <h1 className=" font-bold text-[34px]">ჩანაწერების სია</h1>
      </div>
      <div className="flex justify-center">
        <div className=" grid gap-14 grid-cols-2 grid-rows-4 sm:grid-cols-1">
          <LaptopItem />
          <LaptopItem />
          <LaptopItem />
          <LaptopItem />
          <LaptopItem />
        </div>
      </div>
    </div>
  );
}
