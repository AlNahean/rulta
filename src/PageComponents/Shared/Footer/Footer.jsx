import React from "react";

const Footer = () => {
  return (
    <div className=" px-8 bg-[#1e1b4b] py-20 text-white">
      <div className=" grid grid-cols-5">
        <div className=" col-span-5 md:col-span-2 lg:col-span-1 flex flex-col gap-2">
          <h1 className=" font-bold text-xl mb-6 ">Product</h1>

          <p>Pricing</p>
          <p>DMCA Badges</p>
          <p>Profile Designer</p>
          <p>Chaturbate Floating Icons</p>
        </div>
        <div className=" col-span-5 md:col-span-2 lg:col-span-1 flex flex-col gap-2">
          <h1 className=" font-bold text-xl mb-6 ">Product</h1>

          <p>Pricing</p>
          <p>DMCA Badges</p>
          <p>Profile Designer</p>
          <p>Chaturbate Floating Icons</p>
        </div>
        <div className=" col-span-5 md:col-span-2 lg:col-span-1 flex flex-col gap-2">
          <h1 className=" font-bold text-xl mb-6 ">Product</h1>

          <p>Pricing</p>
          <p>DMCA Badges</p>
          <p>Profile Designer</p>
          <p>Chaturbate Floating Icons</p>
        </div>

        <div className="col-span-5 md:col-span-2 flex items-center justify-between gap-2 mt-8">
          <div className=" hover:bg-emerald-700 w-full py-2 rounded-lg text-center">
            Log In
          </div>
          <div className=" bg-emerald-700 w-full py-2 rounded-lg text-center">
            Log In
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-2 mt-20">
        <div className=" col-span-2 sm:col-span-1 text-lg">
          <p>© Rulta OÜ</p>
          <p>Harju maakond, Kuusalu vald, Pudisoo küla, Männimäe/1,</p>
          <p>74626 Estonia</p>
          <p>Register Code: 14640476</p>
          <p>VAT: EE 102233393</p>
        </div>
        <div className="col-span-2 sm:col-span-1">
          <img src="https://www.rulta.com/assets/logo.webp" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
