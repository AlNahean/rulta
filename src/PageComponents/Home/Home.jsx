import React from "react";
import Section1 from "./Section1";
import HeroSection from "./HeroSection";
import Slider from "./Slider";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";

const Home = () => {
  return (
    <div className=" text-white bg-zinc-800 min-h-screen ">
      <Header />
      <HeroSection />
      {/* <Slider /> */}
      <Section1 />
      <Footer />
    </div>
  );
};

export default Home;
