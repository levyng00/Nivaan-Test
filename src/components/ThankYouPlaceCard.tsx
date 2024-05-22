import { rubikReg, rubikSemiBold } from "@/app/fonts";
import Image from "next/image";
import React from "react";

const ThankYouPlaceCard = () => {
  return (
    <div className="border-[#2F438F] border-[1px] rounded-lg p-6 relative w-[1000px] -z-10">
      <div className=" z-[99] absolute top-0 -translate-y-6 bg-white left-1/2 transform -translate-x-1/2 ">
        <Image
          src={require("../../public/locationIcon.svg")}
          alt="logo"
          className=""
        />
      </div>
      <p
        className={`${rubikSemiBold.className} text-center mb-3 lg:text-2xl text-[#2F438F] text-sm`}
      >
        12 Clinics Across
      </p>
      <div
        className={`${rubikReg.className} flex justify-evenly lg:text-xl text-[#2F438F] text-xs`}
      >
        <p>East-Delhi</p>
        <p>West-Delhi</p>
        <p>North-Delhi</p>
        <p>South-Delhi</p>
      </div>
    </div>
  );
};

export default ThankYouPlaceCard;
