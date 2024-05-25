import FloatingButton from "@/components/FloatingButton";
import Faq from "@/sections/Faq/Faq";
import Footer from "@/sections/Footer/Footer";
import FormAd from "@/sections/FormAd/FormAd";
import Navbar from "@/sections/Nav/Navbar";
import HeroSection from "@/sections/Osteoarthritis/HeroSection";
import OurCareExperts from "@/sections/OurCareExperts/OurCareExperts";
import TreatmentAtNivaan from "@/sections/TreatmentAtNivaan/TreatmentAtNivaan";
import WhatPatientSayAboutUs from "@/sections/WhatPatientSayAboutUs/WhatPatientSayAboutUs";
import React, { Suspense } from "react";
import { doctorData, osteoarthritisFaqData, osteoarthritisPatientReviewData, osteooarthritisTreatmentAtNivan } from "./api/data";

export default function Home() {
  return (
    <main className="text-4xl montserrat">
      <Suspense>
        <Navbar />
        <HeroSection />
        <FloatingButton />
        <OurCareExperts doctorData={doctorData} />
        <TreatmentAtNivaan TreatmentCardData={osteooarthritisTreatmentAtNivan} />
        <WhatPatientSayAboutUs patientReviewData={osteoarthritisPatientReviewData} />
        <Faq askedCardData={osteoarthritisFaqData} />
        <FormAd />
        <Footer />
      </Suspense>
    </main>
  );
}
