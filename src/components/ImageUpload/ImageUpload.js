import React, { useState } from "react";
import "./index.css";
import CameraIcon from "assets/icons/cameraIcon.svg";

export default function ImageUpload() {
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  const defaultBtn = document.querySelector("#default-btn");

  const defaultBtnActive = () => {
    defaultBtn.click();
  };
  return (
    <div>
      <div
        class={`wrapper px-[340px] sm:px-0 border-2 rounded-[18px] sm:w-[358px] sm:h-[244px] ${
          file ? "border-none" : "border-[#4386A9] border-dashed"
        }`}
      >
        <div class="preview-box px-[436px] sm:px-0">
          <div class="img-preview">
            <img src={file} />
          </div>
          <div class="content sm:w-[358px]">
            <div class="text flex flex-col items-center">
              <button onClick={defaultBtnActive}>
                <img
                  src={CameraIcon}
                  className="hidden sm:flex"
                  width="45px"
                  height="40.5px"
                />
              </button>

              <h1
                className={`hidden text-[20px] font-bold text-[#4386A9] w-[195px] text-center sm:block sm:pt-[30px] cursor-pointer ${
                  file && "sm:hidden"
                }`}
                onClick={defaultBtnActive}
              >
                ლეპტოპის ფოტოს ატვირთვა
              </h1>
              <h1
                className={`sm:hidden text-[20px] font-bold text-[#4386A9] w-[195px] cursor-pointer ${
                  file && "hidden"
                }`}
                onClick={defaultBtnActive}
              >
                ჩააგდე ან ატვირთე ლეპტოპის ფოტო
              </h1>
              <button
                className={`py-[18px] m-0 border rounded-lg px-[71.5px] mt-[83px] text-white text-[20px] leading-[24px] font-medium font-helvetica bg-light-blue hover:bg-medium-blue active:bg-dark-blue sm:hidden ${
                  file && "hidden"
                }`}
                id="custom-btn"
                onClick={defaultBtnActive}
              >
                ატვირთე
              </button>
            </div>
          </div>
        </div>
        <form method="POST" class="input-data">
          <input id="default-btn" type="file" onChange={handleChange} hidden />
        </form>
      </div>
      <div className={`${file ? "flex justify-between mt-[25px]" : "hidden"}`}>
        <h1>guja</h1>
        <button
          className={`py-[18px] m-0 border rounded-lg px-[24.5px] text-white text-[20px] leading-[24px] font-medium font-helvetica bg-light-blue hover:bg-medium-blue active:bg-dark-blue sm:hidden"
          }`}
        >
          თავიდან ატვირთე
        </button>
      </div>
    </div>
  );
}

// <div className="container sm:w-[358px] sm:h-[244px] sm:mb-[41px] border-dashed border-[2px] border-[#4386A9] rounded-[18px] bg-[#F6F6F6] flex flex-col items-center pt-[107px] sm:pt-[63px]">
//   {/* wrapper div */}
//   <div className="wrapper">
//     {/* image div */}
//     <div className="preview-box">
//       <img src={file} className="image-preview" />
//     </div>
//     {/* content div */}
//     <div className="content z-50">
//       <div className="flex justify-center sm:flex sm:flex-col sm:items-center">
//         <button onClick={defaultBtnActive}>
//           <img
//             src={CameraIcon}
//             className="hidden sm:flex"
//             width="45px"
//             height="40.5px"
//           />
//         </button>
//         <h1 className="hidden text-[20px] font-bold text-[#4386A9] w-[195px] text-center sm:block sm:pt-[30px]">
//           ლეპტოპის ფოტოს ატვირთვა
//         </h1>
//         <h1 className="sm:hidden text-[20px] font-bold text-[#4386A9] w-[195px] text-center">
//           ჩააგდე ან ატვირთე ლეპტოპის ფოტო
//         </h1>
//       </div>
//     </div>
//   </div>
//   <input type="file" onChange={handleChange} hidden id="default-btn" />

// </div>
