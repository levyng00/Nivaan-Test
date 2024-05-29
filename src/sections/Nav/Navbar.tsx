"use client";
import React, { useState } from "react";
import NivaanLogo from "../../../public/desktop/nivaan-logo.webp";
import NivaanLogoMob from "../../../public/mobile/nivaan-logo-mob.webp";
import Image from "next/image";
import CustomButton from "@/components/CustomButton";
import Form from "@/components/Form";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";
import { sendGTMEvent } from "@next/third-parties/google";

const Navbar = () => {
  const pathName = usePathname();
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";
  const landingPageUrl = `${origin}${pathName}`;
  const [modal, setModal] = useState(false);
  const handleClick = () => {
    setModal(!modal);
    sendGTMEvent({ event: 'Form Open', value: {"Form Name": "NavBar-Form", "CTA Button text": "Book Consultation", "Landing Page URL": landingPageUrl} })
  };
  const handleCloseModal = () => {
    setModal(!modal)
    sendGTMEvent({ event: 'Form Close', value: {"Form Name": "NavBar-Form", "CTA Button text": null, "Landing Page URL": landingPageUrl} })
  }
  return (
    <nav className="flex flex-row justify-between py-3 md:py-6 ">
      <div className="max-w-7xl mx-auto lg:mx-18 flex justify-between w-full px-4">
        <Image
          className="hidden md:flex"
          src={NivaanLogo}
          alt="Nivaan logo in desktop Navbar"
          width={231}
          height={51}
        />
        <Image
          className="flex md:hidden"
          src={NivaanLogo}
          alt="Nivaan logo in Mobile Navbar"
          height={20}
        />
        <button
          className="bg-[#DB5115] font-bold rounded-lg text-xs md:text-2xl py-2 px-4 md:py-2 md:px-6 text-white z-40"
          onClick={handleClick}
        >
          Book Consultation
        </button>
      </div>

      {modal && (
        <div
          className="fixed top-0 h-full w-full flex justify-center items-center z-[99] "
          style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
        >
          <div className="relative">
            <Form formLocation="Navbar-Herniated-Page" formName="NavBar-Form" />
            <X
              className="absolute top-3 z-[999] right-5 hover:cursor-pointer"
              onClick={handleCloseModal}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
