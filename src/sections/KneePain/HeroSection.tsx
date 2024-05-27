import { montserratBold, rubikLight } from "@/app/fonts";
import Form from "@/components/Form";
import FormHeader from "@/components/FormHeader";
import HeadMetricMob from "@/components/HeadMetricMob";
import HeaderMetric from "@/components/HeaderMetric";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-[#EAF1FB] pt-8 px-8 lg:px-0 ">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
        <div className="flex-1">
          <h1
            className={`${montserratBold.className} text-[#2F438F] lg:text-5xl text-3xl`}
          >
            Non Surgical Knee
            <br /> Pain Treatment
          </h1>
          <p className="text-[#DB5115] mt-4 text-sm lg:text-xl">
            100% Insurance Coverage
          </p>
          <ul
            className={`list-disc lg:mt-14 mt-10 text-xl flex flex-col gap-2 ${rubikLight.className} px-8`}
          >
            <div className="flex items-center">
              <li>4.8+ Rating on</li>
              <Image
                src={require("../../../public/googleImage.svg")}
                alt="logo"
                height={30}
              />
            </div>
            <li>90% Surgeries Avoided</li>
            <li>Insurance Support</li>
          </ul>
        </div>
        <div className="flex-1 flex justify-center flex-col items-center gap-3 z-10">
          <FormHeader />
          <Form />
        </div>
      </div>
      <div className="mt-8">
        <HeaderMetric />
        <HeadMetricMob />
      </div>
    </div>
  );
};

export default HeroSection;
