import { rubikBold, rubikSemiBolder } from "@/app/fonts";
import React from "react";

const HeaderMetric = () => {
  return (
    <div className="bg-[#2F438F] p-2 py-4 hidden lg:block">
      <div className="flex text-white items-center max-w-7xl mx-auto">
        <div className="flex flex-col flex-1 text-center">
          <p className={`${rubikBold.className} text-4xl`}>20K+</p>
          <p className={`text-xl mt-2`}>Happy Patients</p>
        </div>
        <div className="flex flex-col flex-1  text-center items-center">
          <p className={`${rubikBold.className} text-4xl`}>9.3X</p>
          <p className={`text-xl w-56 mt-2`}>
            Effective than Other Pain-Relief Treatments
          </p>
        </div>
        <div className="flex flex-col flex-1  text-center items-center">
          <p className={`${rubikBold.className} text-4xl`}>20+</p>
          <p className={`text-xl w-56 mt-2`}>
            Advanced Non-Surgical Procedures
          </p>
        </div>
        <div className="flex flex-col flex-1  text-center items-center">
          <p className={`${rubikBold.className} text-4xl`}>30+</p>
          <p className={`text-2xl  w-56 mt-2`}>
            Years of Experienced Pain Specialists
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderMetric;
