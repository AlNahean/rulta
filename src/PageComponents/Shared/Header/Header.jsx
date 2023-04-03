"use client";

import Link from "next/link";
import React, { useState, useEffect, useLayoutEffect } from "react";

import { AiOutlineMenu } from "react-icons/ai";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);
  useLayoutEffect(() => {
    const handleScroll = () => {
      let scrollHeight = window.scrollY;
      // console.log(scrollHeight);
      if (scrollHeight > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="header-wrapper    mx-auto z-50 relative ">
      <div
        className=" flex h-[var(--header-height)] w-full justify-between items-center fixed px-[var(--page-padding)] "
        style={{ backgroundColor: isScrolled ? "#000000df" : "transparent" }}
      >
        <Link href="/">
          <h1 className=" text-3xl font-semibold">Rulta</h1>
        </Link>

        <div className=" hidden items-center gap-20 font-bold md:flex h-full">
          <div>
            <Link href="/pricing">Pricing</Link>
          </div>
          <div>
            <Link href="/blog">Blog</Link>
          </div>
          <div
            className=" relative h-[100%] "
            onMouseOver={() => {
              setShowPopUp(true);
            }}
            onMouseOut={() => {
              setShowPopUp(false);
            }}
          >
            <div className=" h-full center ">Resources</div>
            {showPopUp && (
              <div className=" absolute bottom-0  translate-y-[100%] translate-x-[-30%]">
                <div className=" flex flex-col w-[300px] items-center bg-white  text-black rounded-lg py-4">
                  <div className=" py-2">
                    <Link href="/referral-program">Referral Program</Link>
                  </div>
                  <div className=" py-2">
                    <Link href="/dmca-badges">DMCA Badges</Link>
                  </div>
                </div>
              </div>
            )}
          </div>
          <Link href="/log-in">
            <div>Log In</div>
          </Link>

          <Link href="/sign-up">
            <div className=" px-6 py-2  bg-emerald-700 rounded-lg font-bold text-white ">
              Sign Up
            </div>
          </Link>
        </div>
        <div className=" md:hidden text-3xl">
          <AiOutlineMenu />
        </div>
      </div>
    </div>
  );
};

export default Header;
