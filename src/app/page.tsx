import Footer from "@/sections/Footer/Footer";
import Navbar from "@/sections/Nav/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="text-4xl montserrat">
      <div className="px-6 md:px-[70px]">
        <Navbar />
        <h1>Hello World how r you</h1>
        <h2>Hello World how r you</h2>
      </div>
      <Footer />
    </main>
  );
}
