import React from "react";
import Image from "next/image";
import grassScribbleImage from "../images/grassscribble.png";

function HeroSection() {
  return (
    <section className="grid grid-rows-1 relative">
      {/* <div style={{background: `url(${grassScribbleImage})`, backgroundSize:"cover", height: "100vh" }}> */}
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center">
          <h1 className="text-[#574F4A] leading-[1.2] mb-12 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            Hello! I’m Melanie, a Product Designer with a New Media +
            Architecture background.{" "}
          </h1>
          <p className="text-[#76655B] mb-4 text-m lg:text-l">
            Previously at Singapore Airlines and Activate Interactive.
          </p>
          <p className="text-[#76655B] mb-4 text-m lg:text-l">
            Scroll down to view my works.
          </p>
        </div>

        <div className="col-span-5 place-self-right"></div>
      </div>
      <div className="flex justify-end relative lg:bottom-40">
        <Image
          src={grassScribbleImage}
          alt="hero image"
          width={800}
          height={100}
        />
      </div>
      {/* </div> */}
    </section>
  );
}

export default HeroSection;
