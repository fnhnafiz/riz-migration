import AiTools from "@/components/home/AiTools";
import Consultation from "@/components/home/Consultation";
import CourseFinderBanner from "@/components/home/CourseFinderBanner";
import Destinations from "@/components/home/Destinations";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import Services from "@/components/home/Services";
import TrustBar from "@/components/home/TrustBar";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import React from "react";

const page = () => {
  return (
    <div className="">
      <Hero />
      <TrustBar />
      <Services />
      <Destinations />
      <AiTools />
      <Consultation />
      <CourseFinderBanner />
      <HowItWorks />
      <WhyChooseUs />
    </div>
  );
};

export default page;
