import HeaderMetric from "@/components/HeaderMetric";
import Faq from "@/sections/Faq/Faq";
import Footer from "@/sections/Footer/Footer";
import FormAd from "@/sections/FormAd/FormAd";
import HeroSection from "@/sections/Heriniated/HeroSection/HeroSection";
import Navbar from "@/sections/Nav/Navbar";
import OurCareExperts from "@/sections/OurCareExperts/OurCareExperts";
import TreatmentAtNivaan from "@/sections/TreatmentAtNivaan/TreatmentAtNivaan";
import WhatPatientSayAboutUs from "@/sections/WhatPatientSayAboutUs/WhatPatientSayAboutUs";
import React, { Suspense } from "react";
import {
  backPainFaqData,
  doctorData,
  herniatedFaqData,
  herniatedPatientReviewData,
  herniatedTreatmentAtNivan,
} from "../../api/data";
import FloatingButton from "@/components/FloatingButton";

const page = () => {
  return (
    <div>
      <Suspense>
        <Navbar />
        <HeroSection />
        <OurCareExperts doctorData={doctorData} />
        <FloatingButton />
        <TreatmentAtNivaan TreatmentCardData={herniatedTreatmentAtNivan} />
        <WhatPatientSayAboutUs patientReviewData={herniatedPatientReviewData} />
        <Faq askedCardData={backPainFaqData} />
        <FormAd />

        <Footer />
      </Suspense>
    </div>
  );
};

export default page;
