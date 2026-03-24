import React from "react";
import Home from "./Home";
import AboutUsCard from "./AboutUs";
import Footer from "./Footer";
import PartnershipSection from "./PartnershipSection";
import Services from "./Services";
import MainHeader from "./MainHeader";

export default function MainContainer() {
  return (
    <>
      <MainHeader />
      <main className="bg-[#FAF9F5] ">
        <Home />
        <AboutUsCard />
        <Services />
        <PartnershipSection />
      </main>
      <Footer />
    </>
  );
}
