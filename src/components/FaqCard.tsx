"use client";
import { rubikBold, rubikReg, rubikSemiBold } from "@/app/fonts";
import {
  ChevronDownIcon,
  MinusCircledIcon,
  PlusCircledIcon,
} from "@radix-ui/react-icons";

import { usePathname } from "next/navigation";
import React, { useState } from "react";

const FaqCard = ({ data, isOpen, onToggle }: any) => {
  const pathName = usePathname();
  return (
    <div className=" flex justify-center">
      <div
        className={`bg-white border-[1px] rounded-xl p-4 my-2   hover:cursor-pointer w-[100%] relative px-10`}
        onClick={onToggle}
      >
        <div className="flex justify-between  w-full ml-6 text-[#2E448F]">
          <h1 className={`w-60 lg:w-full ${rubikSemiBold.className} text-sm`}>
            {data.title}
          </h1>
          <div className="">
            {isOpen ? <MinusCircledIcon /> : <PlusCircledIcon />}
          </div>
        </div>
        {isOpen && (
          <div>
            <p
              className={`mt-4 text-sm px-6 text-[#2E448F] ${rubikReg.className}`}
            >
              {" "}
              {data.desc}
            </p>
          </div>
        )}
        <div className=" absolute top-5 left-3  flex flex-col items-center  h-[70%] ">
          <div className="h-3 w-3 rounded-full border-[1px] border-[#2E448F] flex items-center justify-center  ">
            <div className="h-[6px] w-[6px] bg-[#2E448F] rounded-full"></div>
          </div>
          {isOpen && (
            <div className="border-dotted border-l-[2px] h-[75%] w-1 mt-1"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FaqCard;
