"use client";

import { montserratBold, rubikBold } from "@/app/fonts";
import FaqCard from "@/components/FaqCard";
import Image from "next/image";
import React, { useState } from "react";

const Faq = () => {
  const [openCardIndex, setOpenCardIndex] = useState(0);

  const handleCardToggle = (index: number) => {
    setOpenCardIndex(openCardIndex === index ? -1 : index === 0 ? 0 : index);
  };
  const cardMap = askedCardData.map((data, i) => {
    return (
      <div key={i}>
        <FaqCard
          data={data}
          isOpen={openCardIndex === i}
          onToggle={() => handleCardToggle(i)}
        />
      </div>
    );
  });
  return (
    <div className="bg-[#EAF1FB] lg:py-6">
      <div className="max-w-7xl mx-auto p-6 flex flex-col ">
        <div className=" flex justify-center"></div>

        <h1
          className={`${montserratBold.className}  text-center text-2xl text-[#2F438F] lg:w-full lg:my-6 my-2 lg:text-5xl`}
        >
          FAQ&apos;s
        </h1>
        {cardMap}
      </div>
    </div>
  );
};

export default Faq;
const askedCardData = [
  {
    title: "What is the Osteoarthritis?",
    desc: "Osteoarthritis is a degenerative joint disease that is characterized by the breakdown of joint cartilage and the underlying bones, causing joint pain with swelling, reduced mobility, and joint stiffness.",
  },
  {
    title: "Which vaccination is available for HPV at Nivaancare?",
    desc: "Gardasil brand vaccine is available for HPV at Nivaancare. There are two types - Gardasil 9 (highly recommended) which protects against 9 HPV strains and Gardasil 4 which protects against 4 different strains. Gardasil 9 is expected to prevent close to 98% of cervical cancers whereas Gardasil 4 can prevent close to 83% of cervical cancers.",
  },
  {
    title: "Can men get the Gardasil vaccine?",
    desc: "Yes, in India, only the Gardasil 9 is approved for men.",
  },
  {
    title:
      "Can Gardasil be taken with other vaccines or when the child is unwell?",
    desc: "Yes, Gardasil can be taken with other vaccines. TDaP/TDwP are given approximately at the same age and can be clubbed together. Gardasil can also be given when the child is down with low-grade fever or cough and cold symptoms.",
  },
  {
    title: "How much does the HPV vaccine cost?",
    desc: "You can find out the HPV vaccine cost by speaking with the Nivaancare team. Just fill out the form to request a callback and our team member will connect with you for the costing.",
  },
  {
    title: "What is the vaccination schedule for the HPV vaccine?",
    desc: "For ages 9-14 years: Two doses are administered at an interval of 6 months, 0 - 6 months For 15 years and older: Three doses are administered at 0 months (first dose) - 2 months - 6 months in Gardasill",
  },
  {
    title: "Can my child get the HPV vaccine on Sundays?",
    desc: "Yes, the Nivaancare clinic is open on Sundays for vaccinations. Book an appointment beforehand to avail our vaccination service easily.",
  },
  {
    title: "Who should not get the HPV vaccine?",
    desc: "The following should not get the HPV vaccine -",
  },
  {
    title: "What if my child misses a dose of the HPV vaccine?",
    desc: "If your child misses a dose of the HPV vaccine, try to catch up as soon as possible. The vaccination schedule may need to be adjusted depending on number of doses missed and your child’s age. Our paediatricians can guide when to get the missed dose and how to continue with the vaccination series.",
  },
  {
    title: "Is HPV vaccine relevant for boys?",
    desc: "Yes, HPV vaccine is relevant for both boys and girls. The vaccine helps prevent genital warts, anal and penile cancer in men.",
  },
  {
    title: "Is the HPV vaccine safe? Does it have side effects?",
    desc: "Indeed, the HPV vaccine is considered safe. Extensive clinical trials have rigorously tested its safety and effectiveness. Similar to other vaccines, the HPV vaccine may cause minor side effects such as temporary pain or redness at the injection site, headache, nausea, joint pain, dizziness and fainting (more common in adolescents), and mild fever.",
  },
  {
    title: "Can adults get the HPV vaccine?",
    desc: "Yes, adults can get the HPV vaccine. While the vaccine is primarily recommended for children and young adults, it can be given to adults up to age 26 for females and age 21 for males who have not previously been vaccinated. However, the vaccine may be less effective in older individuals who have already been exposed to HPV.",
  },
];
