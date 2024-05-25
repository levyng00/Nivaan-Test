import Faq from "@/sections/Faq/Faq";
import Footer from "@/sections/Footer/Footer";
import FormAd from "@/sections/FormAd/FormAd";
import HeroSection from "@/sections/KneePain/HeroSection";
import Navbar from "@/sections/Nav/Navbar";
import OurCareExperts from "@/sections/OurCareExperts/OurCareExperts";
import TreatmentAtNivaan from "@/sections/TreatmentAtNivaan/TreatmentAtNivaan";
import WhatPatientSayAboutUs from "@/sections/WhatPatientSayAboutUs/WhatPatientSayAboutUs";
import React, { Suspense } from "react";
import FloatingButton from "@/components/FloatingButton";
import { doctorData, kneePainFaqData, kneePainPatientReviewData, kneePainTreatmentAtNivan } from "../api/data";

const page = () => {
  return (
    <div>
      <Suspense>
        <Navbar />
        <HeroSection />
        <FloatingButton />
        <OurCareExperts doctorData={doctorData} />
        <TreatmentAtNivaan TreatmentCardData={kneePainTreatmentAtNivan} />
        <WhatPatientSayAboutUs patientReviewData={kneePainPatientReviewData} />
        <Faq askedCardData={kneePainFaqData} />
        <FormAd />
        <Footer />
      </Suspense>
    </div>
  );
};

export default page;
