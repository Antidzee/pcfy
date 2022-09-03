import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import FormArrowMobile from "assets/icons/backArrowMobile.svg";
import FormArrow from "assets/icons/backArrow.svg";
import FormLogo from "assets/icons/userFormLogo.svg";
import { Input } from "components/Input";
import { Button } from "components/Button";
import "./index.css";
import { fetchTeams, fetchPositions } from "api/services/general";
import { Dropdown } from "components/Dropdown";
import { useLocalStorage } from "helpers/localStorage";

export default function UserForm() {
  const [positions, setPositions] = useState(null);
  const [teams, setTeams] = useState(null);

  const [name, setName] = useLocalStorage("name", "");
  const [surname, setSurname] = useLocalStorage("surname", "");
  const [email, setEmail] = useLocalStorage("email", "");
  const [phoneNumber, setPhoneNumber] = useLocalStorage("phone_number", "");
  const [positionId, setPositionId] = useLocalStorage("position_id", "");
  const [teamId, setTeamId] = useLocalStorage("team_id", "");

  const fetchPositionsData = () => {
    fetchPositions()
      .then((data) => {
        setPositions(data.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchTeamsData = () => {
    fetchTeams()
      .then((data) => {
        setTeams(data.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchPositionsData();
    fetchTeamsData();
  }, []);

  return (
    <div className="bg-[#F6F6F6] w-full h-full flex flex-col">
      {/* headline */}
      <Link to="/">
        <button className="sm:hidden">
          <img src={FormArrow} className="ml-[73px] mt-[53px]" />
        </button>
      </Link>
      <div className="flex justify-center text-[20px] leading-6 font-bold sm:justify-start sm:ml-[16px] sm:mt-[31px]">
        <NavLink to="/" activeClassName="active">
          <button className="hidden sm:inline">
            <img src={FormArrowMobile} />
          </button>
        </NavLink>
        <NavLink
          className={"mr-[66px] sm:border-0 sm:m-auto"}
          to="/user-info"
          activeClassName="active"
        >
          <h1>თანამშრომლის ინფო</h1>
          <p className="hidden sm:flex text-[14px] text-[#898989] font-normal justify-center items-center">
            1/2
          </p>
        </NavLink>

        <NavLink
          to="/laptop-form"
          activeClassName="active"
          className="sm:hidden"
        >
          <h1>ლეპტოპის მახასიათებლები</h1>
        </NavLink>
      </div>
      {/* end of headline */}
      {/* content */}
      <div className="">
        {/* input wrapper */}
        <div className="max-w-[1226px] flex flex-col  bg-white justify-center m-auto mt-[43px] rounded-lg pt-[49px] px-[174px] sm:px-[24px]">
          <div className="flex justify-between sm:flex-col ">
            <div className="w-[48%] sm:w-[100%] sm:mb-[23px]">
              <Input
                value={name}
                onChange={setName}
                label="სახელი"
                placeholder="გრიშა"
                hint="მინიმუმ 2 სიმბოლო, ქართული ასოები"
                styles="h-[60px]"
              />
            </div>
            <div className="w-[48%] sm:w-[100%]">
              <Input
                value={surname}
                onChange={setSurname}
                label="გვარი"
                placeholder="ბაგრატიონი"
                hint="მინიმუმ 2 სიმბოლო, ქართული ასოები"
                styles="h-[60px]"
              />
            </div>
          </div>
          <div className="flex flex-col">
            {teams && (
              <Dropdown
                data={teams}
                title="თიმი"
                styles="my-[45px]"
                onChange={(e) => setTeamId(e)}
                selected={teamId}
              />
            )}

            {positions && (
              <Dropdown
                data={positions}
                title="პოზიცია"
                onChange={(e) => setPositionId(e)}
                selected={positionId}
              />
            )}
            {/* <select className="w-full h-[60px] bg-[#EBEBEB] rounded-lg my-[52px] px-2 ">
              <option>თიმი</option>
            </select>
            <select className="w-full h-[60px] bg-[#EBEBEB] rounded-lg px-2 ">
              <option>პოზიცია</option>
            </select> */}
            <div className="my-[52px]">
              <Input
                value={email}
                onChange={setEmail}
                label="მეილი"
                placeholder="grish666@redberry.ge"
                type="email"
                hint="უნდა მთავრდებოდეს @redberry.ge-ით"
                styles={`w-full h-[60px]`}
              />
            </div>
            <Input
              value={phoneNumber}
              onChange={setPhoneNumber}
              type="number"
              label="ტელეფონის ნომერი"
              placeholder="+995 598 00 07 01"
              hint="უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს"
              styles="w-full h-[60px]"
            />
          </div>
          <div className="mt-[87px] flex justify-end mb-[63px]">
            <NavLink to="/laptop-form" activeClassName="active">
              <Button title="შემდეგი" styles="px-[45px] py-[18px] " />
            </NavLink>
          </div>
        </div>
        {/* end of input wrapper */}
      </div>
      <div className="flex justify-center items-center sm:hidden">
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
