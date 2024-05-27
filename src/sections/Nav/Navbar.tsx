"use client";
import React, { useState } from "react";
import NivaanLogo from "../../../public/desktop/nivaan-logo.webp";
import NivaanLogoMob from "../../../public/mobile/nivaan-logo-mob.webp";
import Image from "next/image";
import CustomButton from "@/components/CustomButton";
import Form from "@/components/Form";
import { X } from "lucide-react";

const Navbar = () => {
  const [modal, setModal] = useState(false);
  const handleClick = () => {
    setModal(!modal);
    console.log(modal);
  };
  return (
    <nav className="flex flex-row justify-between py-3 md:py-6 ">
      <div className="px-6">
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
      </div>
      <div className="px-6">
        <button
          className="bg-[#DB5115] font-bold rounded-lg text-xs md:text-3xl py-2 px-4 md:py-3 md:px-6 text-white z-40"
          onClick={() => setModal(!modal)}
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
            <Form formLocation="Navbar-Herniated-Page" formName="CTA-Form" />
            <X
              className="absolute top-3 z-[999] right-5 hover:cursor-pointer"
              onClick={() => setModal(!modal)}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
