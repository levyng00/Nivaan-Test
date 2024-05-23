import { montserratBold, rubikReg, rubikSemiBolder } from "@/app/fonts";
import Image from "next/image";
import React from "react";
import ThankYouCard from "./ThankYouCard";
import ThankYouPlaceCard from "./ThankYouPlaceCard";

const ThankYou = () => {
  return (
    <div className={`flex flex-col gap-6 py-10 pb-20`}>
      <div className="flex justify-center items-center ">
        <Image
          src={require("../../public/desktop/nivaan-logo.webp")}
          alt="logo"
          height={30}
        />
      </div>
      <div className="bg-[#EAF1FB]">
        <div className="max-w-7xl mx-auto p-6 flex flex-col items-center gap-4 ">
          <Image
            src={require("../../public/thankyou-tick.svg")}
            alt="logo-tick"
          />
          <p
            className={`${montserratBold.className} text-[#2D458F] lg:text-5xl text-2xl`}
          >
            Thank you{" "}
          </p>
          <p
            className={`${rubikReg.className}  text-center text-sm lg:text-xl`}
          >
            We will get in touch with you shortly to book <br /> your
            consultation with our team of experts.
          </p>
          <div className="flex gap-3 translate-y-10">
            <ThankYouCard />
            <ThankYouCard /> <ThankYouCard /> <ThankYouCard />
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto text-[#2F438F] lg:text-2xl py-10 text-sm">
        <p className={`${rubikReg.className} text-center`}>
          In case of any queries, please contact{" "}
          <span className={`${rubikSemiBolder.className} `}>
            +91-9070057005 <br />
          </span>{" "}
          {""}
          or visit your nearest Nivaan clinic
        </p>
      </div>
      <div className="max-w-7xl mx-auto  w-full flex justify-center px-6">
        <ThankYouPlaceCard />
      </div>
    </div>
  );
};

export default ThankYou;
//
