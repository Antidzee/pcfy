import { Button } from "components/Button";
import React from "react";
import LandingSvg from "assets/icons/landingFrame.svg";
import LandingLogo from "assets/icons/landingLogo.svg";
import landingSvgMobile from "assets/icons/landingFrameMobile.svg";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="flex flex-col items-center center-container justify-center h-[100%]">
      <div className="pb-[85px]">
        <img src={LandingLogo} width="112px" height="18px" alt="landingLogo" />
      </div>

      <div className="flex flex-col items-center sm:hidden">
        <img src={LandingSvg} width="781px" height="482px" alt="landingForm" />
      </div>

      <div className="hidden flex-col items-center sm:flex">
        <img
          src={landingSvgMobile}
          width="268.58px"
          height="349px"
          alt="landingFormMobile"
        />
      </div>

      <div className="pt-[123px] max-w-[387px]">
        <div className="mb-[26px]">
          <Link to="/user-info">
            <Button title="ᲩᲐᲜᲐᲬᲔᲠᲘᲡ ᲓᲐᲛᲐᲢᲔᲑᲐ" styles="w-[387px]" />
          </Link>
        </div>
        <div>
          <Link to="/product-page">
            <Button title="ᲩᲐᲜᲐᲬᲔᲠᲔᲑᲘᲡ ᲡᲘᲐ" styles="w-[387px]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
