import React from "react";
import Image, { StaticImageData } from "next/image";
import { TreatmentData } from "@/app/api/data";

const TreatmentCard = ({ treatment }: { treatment: TreatmentData }) => {
  return (
    <div className="p-6 bg-white rounded-lg w-full h-[335px]">
      <div className="flex justify-between">
        <h3 className="font-bold text-[16px] leading-[18px] md:text-[22px] md:leading-[26px] text-[#2F438F]">
          {treatment.name}
        </h3>
        <Image src={treatment.img} alt="treatement image" />
      </div>
      <div className="text-[12px] leading-[18px] md:text-[15px] md:leading-[22px] mt-4">
        <h4 className="text-[#2F438F] font-semibold">Process:</h4>
        <p>{treatment.process}</p>
      </div>
      <div className="text-[12px] leading-[18px] md:text-[15px] md:leading-[22px] mt-4">
        <h4 className="text-[#2F438F] font-semibold">Benefits:</h4>
        <ul>
          {treatment.benefits.map((benefit, i) => (
            <li key={i}>
              <span className="font-extrabold ml-0 md:ml-2">•</span> {benefit}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TreatmentCard;
