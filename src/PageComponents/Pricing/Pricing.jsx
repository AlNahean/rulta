import React from "react";
import Header from "../Shared/Header/Header";
import PricingMain from "./PricingMain";
import Footer from "../Shared/Footer/Footer";

const Pricing = () => {
  return (
    <div className=" text-white bg-[#1e1b4b]">
      <Header />
      <PricingMain />
      <div className=" flex flex-col justify-center items-center gap-5 py-20">
        <h1 className=" text-5xl font-bold">Your fans can gift you a plan</h1>
        <div className=" px-4 py-2  bg-emerald-700 rounded-lg">Learn How</div>
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;
