import { rubikBold, rubikLight, rubikReg } from "@/app/fonts";
import Form from "@/components/Form";
import Image from "next/image";
import React from "react";

const FormAd = () => {
  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto p-4 flex justify-center gap-16">
        <div className=" flex flex-col justify-evenly">
          <FormAdCard />
          <FormAdCard />
          <FormAdCard />
        </div>
        <div className="">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default FormAd;

const FormAdCard = () => {
  return (
    <div className="border-[1px] border-[#2F438F] w-[250px] rounded-lg text-[#2F438F] px-8 p-3 relative">
      <p className={`${rubikBold.className} text-2xl`}>4.8/5</p>
      <p className={`${rubikReg.className} text-xl`}>Positive Reviews</p>
      <div className="border-[1px] border-[#2F438F] rounded-full absolute bg-white top-5 -left-5 ">
        <Image src={require("../../../public/googleImage.svg")} alt="logo" />
      </div>
    </div>
  );
};
