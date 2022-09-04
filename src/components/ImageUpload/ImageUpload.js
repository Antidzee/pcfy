import React from "react";
import laptopFormPlaceholder from "assets/icons/laptopFormPlaceholder.png";
import "./index.css";
import CameraIcon from "assets/icons/cameraIcon.svg";

export default function ImageUpload() {
  return (
    <div className="w-[878px] h-[423px] sm:w-[358px] sm:h-[244px] sm:mb-[41px] border-dashed border-[2px] border-[#4386A9] rounded-[18px] bg-[#F6F6F6] flex flex-col items-center pt-[107px] sm:pt-[63px]">
      {/* wrapper div */}
      <div className="wrapper ">
        {/* image div */}
        <div className="image object-cover"></div>
        {/* content div */}
        <div className="content ">
          <div className="sm:flex sm:flex-col sm:items-center">
            <img
              src={CameraIcon}
              className="hidden sm:flex"
              width="45px"
              height="40.5px"
            />
            <h1 className="hidden text-[20px] font-bold text-[#4386A9] w-[195px] text-center sm:block sm:pt-[30px]">
              ლეპტოპის ფოტოს ატვირთვა
            </h1>
            <h1 className="sm:hidden text-[20px] font-bold text-[#4386A9] w-[195px] text-center">
              ჩააგდე ან ატვირთე ლეპტოპის ფოტო
            </h1>
          </div>
        </div>
      </div>
      <input id="default" type="file" hidden />
      <button
        className="flex items-center justify-center py-[18px] m-0 border rounded-lg px-[71.5px] mt-[83px] text-white text-[20px] leading-[24px] font-medium font-helvetica bg-light-blue hover:bg-medium-blue active:bg-dark-blue sm:hidden"
        id="custom-btn"
      >
        ატვირთე
      </button>
    </div>
  );
}
