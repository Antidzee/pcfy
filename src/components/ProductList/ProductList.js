import React, { useState, useEffect } from "react";
import { LaptopItem } from "components/LaptopItem";
import { NavLink, Link } from "react-router-dom";
import FormArrow from "assets/icons/backArrow.svg";
import FormArrowMobile from "assets/icons/backArrowMobile.svg";
import { fetchLaptops } from "api/services/laptops";

export default function ProductList() {
  const [laptops, setLaptops] = useState(null);

  const fetchLaptopsData = () => {
    fetchLaptops()
      .then((data) => {
        setLaptops(data.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchLaptopsData();
  }, []);

  return (
    <div>
      <Link to="/">
        <button>
          <img
            src={FormArrow}
            alt="Arrow"
            className="ml-[73px] mt-[53px] sm:hidden"
          />
        </button>
      </Link>
      <div className="flex justify-center mb-[97px] sm:justify-start sm:ml-[16px]">
        <NavLink to="/" activeClassName="active">
          <button className="hidden sm:inline ">
            <img src={FormArrowMobile} alt="arrow" />
          </button>
        </NavLink>
        <h1 className=" font-bold text-[34px] sm:text-[16px] sm:m-auto">
          ჩანაწერების სია
        </h1>
      </div>
      <div className="flex justify-center">
        <div className=" grid gap-14 grid-cols-2 grid-rows-4 sm:grid-cols-1 pb-[54px]">
          {laptops !== null ? (
            laptops.map((item) => {
              <LaptopItem
                imageUrl={item.laptop.image}
                laptopName={item.laptop.name}
                userName={`${item.user.name} ${item.user.surname}`}
              />;
            })
          ) : (
            <div>Nothing to show</div>
          )}
        </div>
      </div>
    </div>
  );
}
