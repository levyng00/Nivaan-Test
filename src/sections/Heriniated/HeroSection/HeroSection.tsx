"use client";
import { montserratBold, rubikLight } from "@/app/fonts";
import Form from "@/components/Form";
import FormHeader from "@/components/FormHeader";
import HeadMetricMob from "@/components/HeadMetricMob";
import HeaderMetric from "@/components/HeaderMetric";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
const HeroSection = () => {
  const pathName = usePathname();
  return (
    <div className="bg-[#EAF1FB] pt-8 px-8 lg:px-0 ">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 relative">
        <div className="flex-1 relative">
          <h1
            className={`${montserratBold.className} text-[#2F438F] lg:text-5xl text-3xl`}
          >
            {pathName === "/v1/herniated"
              ? "Non-Surgical Herniated Disc Treatment"
              : "Non Surgical Back Pain Treatment"}
          </h1>
          <p className="text-[#DB5115] mt-4 text-sm lg:text-xl">
            100% Insurance Coverage
          </p>
          <ul
            className={`list-disc lg:mt-14 mt-10 text-sm md:text-xl flex flex-col gap-2 ${rubikLight.className} px-8`}
          >
            <div className="flex items-center">
              <li>4.8+ Rating on</li>
              <Image
                src={require("../../../../public/googleImage.svg")}
                alt="logo"
                height={30}
              />
            </div>
            <li>90% Surgeries Avoided</li>
            <li>Insurance Support</li>
          </ul>
          {pathName === "/v1/back-pain-men" ? (
            <Image
              src={require("../../../../public/backPainHero.webp")}
              alt="img"
              className="absolute bottom-0 right-0 translate-y-10 lg:hidden"
              height={160}
            />
          ) : (
            <Image
              src={require("../../../../public/heroHerniated.webp")}
              alt="img"
              className="absolute bottom-0 right-0 translate-y-10 lg:hidden"
              height={160}
            />
          )}
        </div>
        <div className="flex-1 flex justify-center flex-col items-center gap-3 z-10 lg:pb-14">
          <FormHeader />
          <Form
            formLocation="Hero-Section-Herniated-Page"
            formName="Page-Form"
          />
        </div>
        {pathName === "/v1/back-pain-men" ? (
          <Image
            src={require("../../../../public/backPainHero.webp")}
            alt="img"
            className="absolute bottom-8 left-[46%] transform -translate-x-1/2 hidden lg:block"
            height={300}
          />
        ) : (
          <Image
            src={require("../../../../public/heroHerniated.webp")}
            alt="img"
            className="absolute bottom-8 left-[46%] transform -translate-x-1/2 hidden lg:block"
            height={300}
          />
        )}
      </div>
      <div className="mt-8 lg:-translate-y-16">
        <HeaderMetric />
        <HeadMetricMob />
      </div>
    </div>
  );
};

export default HeroSection;
