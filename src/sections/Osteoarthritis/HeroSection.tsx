import { montserratBold, rubikLight } from "@/app/fonts";
import Form from "@/components/Form";
import heroImg from "../../../public/desktop/hero-img.webp";
import heroImgMob from "../../../public/mobile/hero-img-mob.webp";
import HeadMetricMob from "@/components/HeadMetricMob";
import HeaderMetric from "@/components/HeaderMetric";
import Image from "next/image";
import React from "react";
import FormHeader from "@/components/FormHeader";

const HeroSection = () => {
  return (
    <div className="bg-[#EAF1FB] pt-4 px-8 md:px-0 relative">
      <div className="max-w-7xl mx-auto md:mx-18 flex flex-col lg:flex-row gap-10 relative">
        <div className="flex-1">
          <h1
            className={`${montserratBold.className} text-[#2F438F] lg:text-[50px] lg:leading-[61px] text-3xl`}
          >
            Non Surgical Osteoarthritis Treatment
          </h1>
          <p className="text-[#DB5115] mt-1 text-base lg:text-xl">
            100% Insurance Coverage
          </p>
          <ul
            className={`font-light list-disc text-[14px] mt-6 text-sm md:text-2xl text-[#1E1E1E] lg:mt-14 flex flex-col gap-2 ${rubikLight.className} px-4`}
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
            <li>20K+ Happy Patients</li>
          </ul>
        </div>
        <div className="hidden md:relative md:flex-1 md:flex md:justify-center md:items-center">
          <Image
            className="absolute top-44 right-[-60px]"
            src={heroImg}
            alt="hero Img"
            width={452}
            height={422}
            priority
          />
        </div>
        <div className="relative flex-1 flex justify-center items-center md:hidden">
          <Image
            className="absolute bottom-[-76px] right-[-30px]"
            src={heroImgMob}
            alt="hero Img"
            width={210}
            height={193}
            priority
          />
        </div>
        <div className="flex-1 flex justify-center flex-col items-center gap-3 mt-9 md:mt-16 z-10">
          <FormHeader />
          <Form
            formLocation="Hero-Section-Osteoarthritis-Page"
            formName="Hero-Section-Form"
          />
        </div>
      </div>
      <div className="mt-8 lg:mt-12">
        <HeaderMetric />
        <HeadMetricMob />
      </div>
    </div>
  );
};

export default HeroSection;
