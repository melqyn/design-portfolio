import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectSection from "./components/ProjectSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#FFFBFA]">
      <Navbar/>
      <div className="container mt-36 mx-auto py-4 px-12">
      <HeroSection/>
      </div>

      <div id="works">
        <div className="flex justify-center mt-24">
        <ProjectSection/>
        </div>
      </div>

      <div className="container mt-24 mx-auto py-4 px-12">
      <Footer/>
      </div>

    </main>
  )
}