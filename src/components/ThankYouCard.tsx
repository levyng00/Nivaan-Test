import { rubikSemiBolder } from "@/app/fonts";
import Image from "next/image";
import React from "react";

const ThankYouCard = () => {
  return (
    <div className="border-[#2F438F] border-[1px] rounded-xl   lg:w-36 p-4 flex flex-col items-center justify-center gap-3 bg-white shadow-lg min-w-[90px]">
      <Image src={require("../../public/thank-you1.svg")} alt="img" />
      <p
        className={`${rubikSemiBolder.className} text-[#2D458F] md:text-xs text-[9px] text-center`}
      >
        Pain Specialists
      </p>
    </div>
  );
};

export default ThankYouCard;
