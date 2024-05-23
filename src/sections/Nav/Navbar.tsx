import React from "react";
import NivaanLogo from "../../../public/desktop/nivaan-logo.webp";
import NivaanLogoMob from "../../../public/mobile/nivaan-logo-mob.webp";
import Image from "next/image";
import CustomButton from "@/components/CustomButton";

const Navbar = () => {
  const handleClick = () => console.log("Button Clicked !!!");
  return (
    <section className="flex flex-row justify-between py-3 md:py-6 max-w-7xl mx-auto">
      <Image
        className="hidden md:flex"
        src={NivaanLogo}
        alt="Nivaan logo in desktop Navbar"
        width={231}
        height={51}
      />
      <Image
        className="flex md:hidden"
        src={NivaanLogoMob}
        alt="Nivaan logo in Mobile Navbar"
        width={74.67}
        height={16.67}
      />
      <CustomButton
        className="bg-[#DB5115]"
        title="Book Consultation"
        onBtnClick={handleClick}
      />
    </section>
  );
};

export default Navbar;
