import AiTools from "@/components/home/AiTools";
import Consultation from "@/components/home/Consultation";
import Destinations from "@/components/home/Destinations";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import TrustBar from "@/components/home/TrustBar";
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
    </div>
  );
};

export default page;
