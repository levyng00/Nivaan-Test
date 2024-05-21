import Footer from "@/sections/Footer/Footer";
import Navbar from "@/sections/Nav/Navbar";
import OurCareExperts from "@/sections/OurCareExperts/OurCareExperts";
import Image from "next/image";

export default function Home() {
  return (
    <main className="text-4xl montserrat">
      <div className="px-6 md:px-[70px]">
        <Navbar />
        <OurCareExperts />
      </div>
      <Footer />
    </main>
  );
}
