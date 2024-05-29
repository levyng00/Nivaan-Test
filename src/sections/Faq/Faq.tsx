"use client";

import { montserratBold, rubikBold } from "@/app/fonts";
import FaqCard from "@/components/FaqCard";
import React, { useState } from "react";
import { faqData } from "@/app/api/data";

const Faq = ({askedCardData}: {askedCardData: faqData[]}) => {
  const [openCardIndex, setOpenCardIndex] = useState(0);

  const handleCardToggle = (index: number) => {
    setOpenCardIndex(openCardIndex === index ? -1 : index === 0 ? 0 : index);
  };
  const cardMap = askedCardData.map((data, i) => {
    return (
      <div key={i}>
        <FaqCard
          data={data}
          isOpen={openCardIndex === i}
          onToggle={() => handleCardToggle(i)}
        />
      </div>
    );
  });
  return (
    <div className="bg-[#EAF1FB] lg:py-6">
      <div className="max-w-7xl mx-auto p-6 flex flex-col ">
        <div className=" flex justify-center"></div>

        <h1
          className={`${montserratBold.className}  text-center text-2xl text-[#2F438F] lg:w-full lg:my-6 my-2 lg:text-5xl`}
        >
          FAQ&apos;s
        </h1>
        {cardMap}
      </div>
    </div>
  );
};

export default Faq;
