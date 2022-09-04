import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import FormArrow from "assets/icons/backArrow.svg";
import FormArrowMobile from "assets/icons/backArrowMobile.svg";
import FormLogo from "assets/icons/userFormLogo.svg";
import { Input } from "components/Input";
import { Radio } from "components/Radio";
import { Button } from "components/Button";
import { fetchCpus, fetchBrands } from "api/services/general";
import { create } from "api/services/laptops";
import { Dropdown } from "components/Dropdown";
import { ImageUpload } from "components/ImageUpload";
import { useLocalStorage, getStorageValue } from "helpers/localStorage";

export default function LaptopForm() {
  const [laptopName, setLaptopName] = useLocalStorage("laptop_name", "");
  const [laptopBrand, setLaptopBrand] = useLocalStorage("laptop_brand_id", "");
  const [laptopImage, setLaptopImage] = useLocalStorage("laptop_image", "");

  const [cpu, setCpu] = useLocalStorage("laptop_cpu", "");
  const [cpuCores, setCpuCores] = useLocalStorage("laptop_cpu_cores", "");
  const [cpuThreads, setCpuThreads] = useLocalStorage("laptop_cpu_threads", "");
  const [memory, setMemory] = useLocalStorage("laptop_ram", "");

  const [hardDriveType, setHardDriveType] = useLocalStorage(
    "laptop_hard_drive_type",
    ""
  );
  const [isNew, setIsNew] = useLocalStorage("laptop_state", "");

  const [date, setDate] = useLocalStorage("laptop_purchase_date", "");
  const [price, setPrice] = useLocalStorage("laptop_price", "");

  const [cpus, setCpus] = useState(null);
  const [brands, setBrands] = useState(null);

  const fetchCpusData = () => {
    fetchCpus()
      .then((data) => {
        setCpus(data.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchBrandsData = () => {
    fetchBrands()
      .then((data) => {
        setBrands(data.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const createLaptop = () => {
    create({
      name: getStorageValue("name"),
      surname: getStorageValue("surname"),
      team_id: getStorageValue("team_id"),
      position_id: getStorageValue("position_id"),
      phone_number: getStorageValue("phone_number"),
      email: getStorageValue("email"),
      token: process.env.REACT_APP_TOKEN,
      laptop_name: getStorageValue("laptop_name"),
      laptop_image: getStorageValue("laptop_image"),
      laptop_brand_id: getStorageValue("laptop_brand_id"),
      laptop_cpu: getStorageValue("laptop_cpu"),
      laptop_cpu_cores: getStorageValue("laptop_cpu_cores"),
      laptop_cpu_threads: getStorageValue("laptop_cpu_threads"),
      laptop_ram: getStorageValue("laptop_ram"),
      laptop_hard_drive_type: getStorageValue("laptop_hard_drive_type"),
      laptop_state: getStorageValue("laptop_state"),
      laptop_purchase_date: getStorageValue("laptop_purchase_date"),
      laptop_price: getStorageValue("laptop_price"),
    }).catch((error) => {
      console.log(error);
    });
  };

  useEffect(() => {
    fetchCpusData();
    fetchBrandsData();
  }, []);

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
            to="/laptop-form"
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
        <div className="m-auto mb-[42px]">
          <ImageUpload />
        </div>
        <div className="flex items-center w-full justify-between border-b-[1px] border-b-[#C7C7C7] pb-[52px] sm:flex-col sm:rounded-xl sm:border-none sm:pb-0 ">
          <div className="w-[48%] sm:w-[100%] ">
            <Input
              onChange={setLaptopName}
              value={laptopName}
              label="ლეპტოპის სახელი"
              placeholder="HP"
              hint="ლათინური ასოები, ციფრები, !@#$%^&*()_+= "
            />
          </div>

          <div className="w-[48%] sm:w-[100%]">
            {brands && (
              <Dropdown
                data={brands}
                title="ლეპტოპის ბრენდი"
                onChange={(e) => setLaptopBrand(e.outerText)}
                selected={laptopBrand}
              />
            )}
          </div>
        </div>
        <div className="flex flex-col w-full pt-[52px] sm:pt-0">
          <div className="flex items-center gap-6 w-full sm:flex-col">
            {cpus && (
              <Dropdown
                data={cpus}
                styles="my-[45px]"
                title="CPU"
                onChange={(e) => setCpu(e.outerText)}
                selected={cpu}
              />
            )}
            <Input
              onChange={setCpuCores}
              value={cpuCores}
              label="CPU-ს ბირთვი"
              type="number"
              hint="მხოლოდ ციფრები"
              placeholder="14"
            />
            <Input
              onChange={setCpuThreads}
              value={cpuThreads}
              label="CPU-ს ნაკადი"
              type="number"
              hint="მხოლოდ ციფრები"
              placeholder="365"
            />{" "}
          </div>
          <div className="border-b-[1px] border-b-[#C7C7C7] pb-[52px] sm:flex-col sm:border-none sm:pb-0 flex">
            <div className="w-[50%] sm:w-full">
              <Input
                onChange={setMemory}
                value={memory}
                label="ლეპტოპის RAM (GB)"
                hint="მხოლოდ ციფრები"
                type="number"
                placeholder="16"
                styles=""
              />
            </div>
            <div className="w-[50%] flex flex-col ml-[40px]">
              <h1>ლეპტოპის მდგომარეობა</h1>
              <div className="flex flex-row">
                <Radio
                  text="HDD"
                  value={"HDD"}
                  onChange={setHardDriveType}
                  selected={hardDriveType}
                />
                <Radio
                  styles="pl-[60px]"
                  text="SSD"
                  value={"SSD"}
                  onChange={setHardDriveType}
                  selected={hardDriveType}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center  gap-9 pt-[52px] sm:flex-col">
            <Input
              onChange={setDate}
              value={date}
              label="შეძენის რიცხვი (არჩევითი)"
              placeholder="დდ / თთ / წწწწ"
              type="date"
            />

            <Input
              onChange={setPrice}
              value={price}
              label="ლეპტოპის ფასი"
              placeholder="0000"
              type="number"
              hint="მხოლოდ ციფრები"
            />
          </div>
          <div className="pt-[75px]">
            <h1>ლეპტოპის მდგომარეობა</h1>
            <div className="flex gap-16">
              <Radio
                text="ახალი"
                value={"new"}
                onChange={setIsNew}
                selected={isNew}
              />
              <Radio
                text="მეორადი"
                value={"used"}
                onChange={setIsNew}
                selected={isNew}
              />
            </div>
          </div>
          <div className="flex justify-between items-center mt-[97px] mb-[63px]">
            <Link to="/user-info">
              <button className=" text-[#62A1EB] font-medium">უკან</button>
            </Link>
            <div onClick={() => createLaptop()}>
              <Button title="დამახსოვრება" styles="py-[18px] px-[35.5px] " />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-[56px] sm:hidden">
        <img src={FormLogo} />
      </div>
    </div>
  );
}
