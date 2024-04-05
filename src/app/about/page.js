import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

const About = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#FFFBFA]">
      <Navbar />

      <div className="container mt-36 mx-auto py-4 px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="col-span-7 place-self-left pb-16">
            <h1 className="text-[#574F4A] text-2xl font-bold pb-8">
              Hello there, 👋🏻
            </h1>

            <p className="text-[#574F4A] pb-4 leading-relaxed">
              I’m Melanie. I’m a fresh graduate from the National University of
              Singapore having studied a focus on{" "}
              <b>
                Interactive Media Development (UI/UX) and Architectural Studies
              </b>
              .{" "}
            </p>
            <p className="text-[#574F4A] pb-4 leading-relaxed">
              {" "}
              A little fun fact about me: I studied Architecture in my first
              three semesters of university! My architecture school experience
              continues to guide my design thinking processes. I seek to make
              informed, sensible design decisions that empowers users.{" "}
            </p>
            <p className="text-[#574F4A] pb-4 leading-relaxed">
              I have some experience in software engineering, having assisted
              with front-end development for my recent internship as a{" "}
              <b>Digital Innovation Intern at Singapore Airlines</b>.
              Previously, I’ve been a{" "}
              <b>UI/UX intern at Activate Interactive</b>, as well as a{" "}
              <b>Undergraduate Teaching Assistant for Interaction Design</b>.{" "}
            </p>
          </div>

          <div className="col-span-5  place-self-right lg:pl-16">
            <Image
              src="/images/melpic.jpg"
              alt="Melanie's Picture"
              width={302.4}
              height={403.2}
              className="rounded-xl"
            />
          </div>
        </div>
      </div>

      <div className="container mt-24 mx-auto py-4 px-12">
        <Footer />
      </div>
    </main>
  );
};

export default About;
