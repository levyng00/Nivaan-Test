import { rubikBold, rubikLight, rubikReg } from "@/app/fonts";
import Form from "@/components/Form";
import Image from "next/image";
import React from "react";
import googleImg from "../../../public/googleImage.svg";
import smileImg from "../../../public/smile.svg";
import likeImg from "../../../public/like.svg";
type CardDataType = {
  title: string;
  desc: string;
  img: any;
};
const FormAd = () => {
  return (
    <div className="py-8 px-2">
      <div className="max-w-7xl mx-auto p-4 flex justify-center gap-16">
        <div className=" lg:flex flex-col justify-between hidden">
          <FormAdCard title="4.8/5" desc="Positive Reviews" img={googleImg} />
          <FormAdCard title="20K+" desc="Happy Patients" img={smileImg} />
          <FormAdCard title="95%" desc="Surgeries Avoided" img={likeImg} />
        </div>
        <div className="w-full lg:w-auto z-10 ">
          <Form
            formLocation="Bottom Open form"
            formName="Bottom-Open-Form"
          />
        </div>
      </div>
    </div>
  );
};

export default FormAd;

const FormAdCard = ({ title, desc, img }: CardDataType) => {
  return (
    <div className="border-[1px] border-[#2F438F] w-[250px] rounded-lg text-[#2F438F] px-8 p-4 relative">
      <p className={`${rubikBold.className} text-2xl`}>{title}</p>
      <p className={`${rubikReg.className} text-xl`}>{desc}</p>
      <div className="border-[1px] border-[#2F438F] rounded-full absolute bg-white top-5 -left-5 p-2">
        <Image src={img} alt="logo" height={30} />
      </div>
    </div>
  );
};
