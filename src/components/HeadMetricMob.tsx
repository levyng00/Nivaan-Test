import { rubikBold, rubikLight } from "@/app/fonts";
import React from "react";

const HeadMetricMob = () => {
  return (
    <div className="grid grid-cols-2 gap-4 lg:hidden pb-6">
      {metricData.map((data) => {
        return (
          <div className="bg-[#2F438F] rounded-lg text-white p-2 text-center flex flex-col items-center py-4">
            <p className={`${rubikBold.className}`}>{data.title}</p>
            <p className={`${rubikLight.className} text-xs w-32 `}>
              {data.desc}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default HeadMetricMob;
const metricData = [
  {
    title: "20K+",
    desc: "Happy Patients",
  },
  {
    title: "9.3X+",
    desc: "Effective than Other Pain-Relief Treatments",
  },
  {
    title: "30+",
    desc: "Years Experienced Pain Specialist",
  },
  {
    title: "20+",
    desc: "Advanced Non-Surgical Procedures",
  },
];
