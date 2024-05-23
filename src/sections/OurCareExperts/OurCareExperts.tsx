import React from "react";
import doc1Mob from "../../../public/mobile/doc1-mob.webp";
import doc2Mob from "../../../public/mobile/doc2-mob.webp";
import doc3Mob from "../../../public/mobile/doc3-mob.webp";
import doc1 from "../../../public/desktop/doc-1.webp";
import doc2 from "../../../public/desktop/doc-2.webp";
import doc3 from "../../../public/desktop/doc-3.webp";
import DoctorCard, { Doctor } from "@/components/DoctorCard";
import CustomButton from "@/components/CustomButton";

const OurCareExperts = () => {
  const handleClick = () => console.log("Book Consultation in OurCareExperts");
  return (
    <section className="max-w-7xl mx-auto">
      <h2 className="mb-6 mt-12 text-center font-extrabold text-lg md:text-[42px] md:leading-[51.2px] text-[#2F438F]">
        Our Care Experts
      </h2>
      <div className="hidden md:flex md:flex-row md:justify-between">
        {doctorData.map((doc) => (
          <DoctorCard key={doc.id} doc={doc} />
        ))}
      </div>
      <div className="flex flex-col md:hidden  items-center">
        {doctorData.map((doc) => (
          <DoctorCard key={doc.id} doc={doc} />
        ))}
      </div>
      <div className="mt-6 mb-8 hidden md:flex md:justify-center">
        <CustomButton
          className="bg-[#DB5115] mx-auto"
          title="Book Consultation"
          onBtnClick={handleClick}
        />
      </div>
    </section>
  );
};

export default OurCareExperts;

const doctorData: Doctor[] = [
  {
    id: 1,
    img: doc1,
    name: "Dr. Rohit Gulati ",
    field: "Pain Management Specialist",
    degree: "MBBS, DA, DNB",
    experience: "18+",
  },
  {
    id: 2,
    img: doc2,
    name: "Dr. Naveen Talwar",
    field: "Orthopaedic Surgeon,",
    degree: "MBBS, MS – Orthopaedics",
    experience: "32+",
  },
  {
    id: 3,
    img: doc3,
    name: "Dr. Garima Gupta",
    field: "Pain Management Specialist",
    degree: "MBBS, DA, FIPM",
    experience: "15+",
  },
];

const doctorDataMob: Doctor[] = [
  {
    id: 1,
    img: doc1Mob,
    name: "Dr. Naveen Talwar",
    field: "Orthopaedic Surgeon,",
    degree: "MBBS, MS – Orthopaedics",
    experience: "32+",
  },
  {
    id: 2,
    img: doc2Mob,
    name: "Dr. Rohit Gulati ",
    field: "Pain Management Specialist",
    degree: "MBBS, DA, DNB",
    experience: "18+",
  },
  {
    id: 3,
    img: doc3Mob,
    name: "Dr. Garima Gupta",
    field: "Pain Management Specialist",
    degree: "MBBS, DA, FIPM",
    experience: "15+",
  },
];
