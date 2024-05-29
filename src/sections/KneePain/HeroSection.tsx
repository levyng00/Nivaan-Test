import { montserratBold, rubikLight } from "@/app/fonts";
import Form from "@/components/Form";
import FormHeader from "@/components/FormHeader";
import HeadMetricMob from "@/components/HeadMetricMob";
import HeaderMetric from "@/components/HeaderMetric";
import Image from "next/image";
import React from "react";
import heroImg from "../../../public/desktop/kneePainHeroImg.png";
import heroImgMob from "../../../public/mobile/kneePainHeroImgMob.png";

const HeroSection = () => {
  return (
    <div className="bg-[#EAF1FB] pt-8 px-8 md:px-0 relative">
      <div className="max-w-7xl mx-auto md:mx-18 flex flex-col lg:flex-row gap-10">
        <div className="flex-1">
          <h1
            className={`${montserratBold.className} text-[#2F438F] lg:text-5xl w-[140%] hidden md:block`}
          >
            Non Surgical Knee
            <br /> Pain Treatment
          </h1>
          <h1
            className={`${montserratBold.className} text-[#2F438F] text-3xl block md:hidden w-[100%]`}
          >
            Non Surgical <br />
            Knee Pain <br />
            Treatment
          </h1>
          <p className="text-[#DB5115] mt-1 text-base lg:text-xl">
            100% Insurance Coverage
          </p>
          <ul
            className={`list-disc lg:mt-14 mt-6 text-sm md:text-2xl text-[#1E1E1E] flex flex-col gap-2 ${rubikLight.className} px-8`}
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
            className="absolute top-16 right-[-60px]"
            src={heroImg}
            alt="hero Img"
            width={400} // Add width
            height={400} // Add height
            priority
          />
        </div>
        <div className="relative flex-1 flex justify-center items-center md:hidden">
          <Image
            className="absolute bottom-[-41px] right-[-30px]"
            src={heroImgMob}
            alt="hero Img"
            width={178}
            height={171}
            priority
          />
        </div>
        <div className="flex-1 flex justify-center flex-col items-center gap-3 z-10">
          <FormHeader />
          <Form
            formLocation="Hero-Section-KneePain-Page"
            formName="Hero-Section-Form"
          />
        </div>
        <Image
          src={require("../../../public/kneePainImg.webp")}
          alt="img"
          className="absolute bottom-8 left-[46%] transform -translate-x-1/2 hidden lg:block"
          height={300}
        />
      </div>
      <div className="mt-8 md:mt-6">
        <HeaderMetric />
        <HeadMetricMob />
      </div>
    </div>
  );
};

export default HeroSection;
