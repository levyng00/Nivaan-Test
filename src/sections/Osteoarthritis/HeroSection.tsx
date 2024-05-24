import { montserratBold, rubikLight } from "@/app/fonts";
import Form from "@/components/Form";
import heroImg from "../../../public/desktop/hero-img.webp";
import heroImgMob from "../../../public/mobile/hero-img-mob.webp";
import HeadMetricMob from "@/components/HeadMetricMob";
import HeaderMetric from "@/components/HeaderMetric";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-[#EAF1FB] pt-4 px-8 lg:px-0 relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 relative">
        <div className="flex-1">
          <h1
            className={`${montserratBold.className} text-[#2F438F] lg:text-5xl text-3xl`}
          >
            Non Surgical Osteoarthritis Treatment
          </h1>
          <ul
            className={`font-light list-disc text-[14px] lg:text-[26.67px] lg:leading-[31.6px] lg:mt-14 mt-6 text-xl flex flex-col gap-2 ${rubikLight.className} px-4`}
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
        <div className="hidden md:relative md:flex-1 md:flex md:justify-center md:items-center">
          <Image 
            className="absolute top-16 right-[-60px]" 
            src={heroImg} 
            alt="hero Img" 
            width={400} // Add width
            height={400} // Add height
          />
        </div>
        <div className="relative flex-1 flex justify-center items-center md:hidden">
          <Image 
            className="absolute bottom-[-154px] right-[-30px]" 
            src={heroImgMob} 
            alt="hero Img" 
            width={250} // Add width
            height={250} // Add height
          />
        </div>
        <div className="flex-1 flex justify-center flex-col items-center gap-3 mt-28">
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
