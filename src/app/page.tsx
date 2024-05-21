import Footer from "@/sections/Footer/Footer";
import Navbar from "@/sections/Nav/Navbar";
import OurCareExperts from "@/sections/OurCareExperts/OurCareExperts";
import TreatmentAtNivaan from "@/sections/TreatmentAtNivaan/TreatmentAtNivaan";
import WhatPatientSayAboutUs from "@/sections/WhatPatientSayAboutUs/WhatPatientSayAboutUs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="text-4xl montserrat">
        <Navbar />
        <OurCareExperts />
        <TreatmentAtNivaan />
        <WhatPatientSayAboutUs />
        <Footer />
    </main>
  );
}
