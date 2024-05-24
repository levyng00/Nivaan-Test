import Image from "next/image";
import React from "react";

const FormHeader = () => {
  return (
    <div className="flex items-center bg-white px-3 p-1 rounded-lg border-[#DB5115] border-[1px] gap-3 lg:w-[480px] justify-center">
      <Image src={require("../../public/FromTick.svg")} alt="logo" />
      <p className="text-[#2F438F] text-xs lg:text-sm">
        Fully Covered Under All Govt. & Private Insurance
      </p>
    </div>
  );
};

export default FormHeader;
