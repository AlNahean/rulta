"use client";
import React from "react";
import { useState } from "react";
import {
  AiOutlineCheck,
  AiFillInfoCircle,
  AiOutlineDown,
  AiOutlineUp,
} from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

const PricingUlData = [
  {
    id: 1,
    title: "Pro",
    monthlyPrice: 109,
    triMonthlyPrice: 279,
    usernames: 1,
    coreFeaturesData: [
      {
        name: "Anonymity ",
        is: true,
      },
      {
        name: " Scaner",
        is: true,
      },
      {
        name: " Google search and image remover",
        is: true,
      },
      {
        name: " Re-crawler & Re-checker",
        is: true,
      },
      {
        name: "Email Reports ",
        is: true,
      },
      {
        name: " Protection Badges",
        is: true,
      },
      {
        name: "DesignTools",
        is: true,
      },
      {
        name: " Report Frequency",
        is: "text",
        text: "daily",
      },
      {
        name: " Usernames",
        is: "text",
        text: "1",
      },
      {
        name: "Automated DMCA Takedown ",
        is: "text",
        text: "unlimited",
      },
      {
        name: " Make A Request",
        is: "text",
        text: "10/day",
      },
      {
        name: " Suitable For",
        is: "text",
        text: "active creator",
      },
      {
        name: " Face Recognition",
        is: true,
      },
      {
        name: " Tube Websites",
        is: true,
      },
      {
        name: " Social media",
        is: false,
      },
      {
        name: " Custom Domain names",
        is: false,
      },
    ],
  },
  {
    id: 2,
    title: "Premier",
    monthlyPrice: 144,
    triMonthlyPrice: 389,
    usernames: 2,
    coreFeaturesData: [
      {
        name: "Anonymity ",
        is: true,
      },
      {
        name: " Scaner",
        is: true,
      },
      {
        name: " Google search and image remover",
        is: true,
      },
      {
        name: " Re-crawler & Re-checker",
        is: true,
      },
      {
        name: "Email Reports ",
        is: true,
      },
      {
        name: " Protection Badges",
        is: true,
      },
      {
        name: "DesignTools",
        is: true,
      },
      {
        name: " Report Frequency",
        is: "text",
        text: "daily",
      },
      {
        name: " Usernames",
        is: "text",
        text: "2",
      },
      {
        name: "Automated DMCA Takedown ",
        is: "text",
        text: "unlimited",
      },
      {
        name: " Make A Request",
        is: "text",
        text: "20/day",
      },
      {
        name: " Suitable For",
        is: "text",
        text: "recognized creator",
      },
      {
        name: " Face Recognition",
        is: true,
      },
      {
        name: " Tube Websites",
        is: true,
      },
      {
        name: " Social media",
        is: true,
      },
      {
        name: " Custom Domain names",
        is: false,
      },
    ],
  },
  {
    id: 3,
    title: "Legend",
    monthlyPrice: 324,
    triMonthlyPrice: 739,
    usernames: 4,
    coreFeaturesData: [
      {
        name: "Anonymity ",
        is: true,
      },
      {
        name: " Scaner",
        is: true,
      },
      {
        name: " Google search and image remover",
        is: true,
      },
      {
        name: " Re-crawler & Re-checker",
        is: true,
      },
      {
        name: "Email Reports ",
        is: true,
      },
      {
        name: " Protection Badges",
        is: true,
      },
      {
        name: "DesignTools",
        is: true,
      },
      {
        name: " Report Frequency",
        is: "text",
        text: "daily",
      },
      {
        name: " Usernames",
        is: "text",
        text: "4",
      },
      {
        name: "Automated DMCA Takedown ",
        is: "text",
        text: "unlimited",
      },
      {
        name: " Make A Request",
        is: "text",
        text: "unlimited",
      },
      {
        name: " Suitable For",
        is: "text",
        text: "famous creator",
      },
      {
        name: " Face Recognition",
        is: true,
      },
      {
        name: " Tube Websites",
        is: true,
      },
      {
        name: " Social media",
        is: true,
      },
      {
        name: " Custom Domain names",
        is: true,
      },
    ],
  },
];

const pricingFeatures = [
  {
    name: "Anonymity ",
    is: true,
  },
  {
    name: " Scaner",
    is: true,
  },
  {
    name: " Google search and image remover",
    is: true,
  },
  {
    name: " Re-crawler & Re-checker",
    is: true,
  },
  {
    name: "Email Reports ",
    is: true,
  },
  {
    name: " Protection Badges",
    is: true,
  },
  {
    name: "DesignTools",
    is: false,
  },
  {
    name: " Report Frequency",
    is: "text",
    text: "daily",
  },
  {
    name: " Usernames",
    is: true,
  },
  {
    name: "Automated DMCA Takedown ",
    is: true,
  },
  {
    name: " Make A Request",
    is: true,
  },
  {
    name: " Suitable For",
    is: true,
  },
  {
    name: " Face Recognition",
    is: true,
  },
  {
    name: " Tube Websites",
    is: true,
  },
  {
    name: " Social media",
    is: true,
  },
  {
    name: " Custom Domain names",
    is: true,
  },
];

const ServiceDetailsAccordion = ({ data }) => {
  const [show, setShow] = useState(false);
  const [showMonthly, setShowMonthly] = useState(false);
  console.log(data);
  return (
    <div className=" flex flex-col w-full py-6">
      <div
        onClick={() => {
          setShow(!show);
        }}
        className=" flex w-full justify-between text-center cursor-pointer bg-zinc-700 px-4 py-2 rounded-xl "
      >
        <h1>Service Details</h1>
        <div className=" center">
          {show ? <AiOutlineUp /> : <AiOutlineDown />}
        </div>
      </div>
      {show && (
        <div className=" flex flex-col px-4 gap-2 pt-2">
          {data.map((term, index) => {
            return (
              <div className=" flex w-full justify-between " key={index}>
                <div>{term.name}</div>
                <div className=" text-emerald-700 ">
                  {term.is === "text" && (
                    <div className=" flex " key={index}>
                      {/* <div>{term.name}</div> */}
                      <div className=" text-base  px-2    flex items-center">
                        {term.text}
                      </div>
                    </div>
                  )}
                  {term.is === true && (
                    <div className=" text-2xl">
                      <AiOutlineCheck />
                    </div>
                  )}
                  {term.is === false && (
                    <div className=" text-2xl">
                      <RxCross2 />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

const PricingMain = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <div className="  min-h-screen pt-[var(--header-height)]">
      <div className=" pricing-hero flex flex-col justify-center items-center pt-20 text-center">
        <h1 className=" text-6xl font-bold py-6">
          30-day money-back guarantee.
        </h1>
        <h1 className=" text-2xl font-semibold">
          No lock-in contracts, no hidden fees. Cancel anytime.
        </h1>
        {/* <h1 className=" py-6">3 MONTHLY MONTHLY</h1> */}
        <div className=" flex items-center text-xl gap-3 my-6">
          <span className="ml-3  text-gray-900 dark:text-gray-300">
            3 Monthly
          </span>

          <div className="center">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                defaultValue
                className="sr-only peer"
                checked={isMonthly}
                onClick={() => {
                  setIsMonthly(!isMonthly);
                }}
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-emerald-700" />
            </label>
          </div>

          <span className="ml-3  text-gray-900 dark:text-gray-300">
            Monthly
          </span>
        </div>
      </div>

      <div className=" pricing-cards-section ">
        <div className=" w-full grid grid-cols-4 px-6">
          <div className=" col-span-4 sm:col-span-2 lg:col-span-1 ">
            <div className=" card-hero-container   flex flex-col items-center gap-4  relative  py-8 px-4 rounded-lg  ">
              <h1 className=" text-4xl font-semibold">Title</h1>
              {!isMonthly && (
                <p className=" bg-green-700 px-3 py-1 rounded-full text-base">
                  <span className=" line-through mr-2">aasasasas</span>
                  SAVE
                </p>
              )}
              {!isMonthly && <h1 className=" text-3xl font-semibold ">$</h1>}
              {isMonthly && (
                <h1 className=" text-3xl font-semibold mt-4">$asas</h1>
              )}
              <p className=" mt-5">6 username</p>
              <p>daily reports</p>
              <p className=" px-3 py-2 bg-green-700 rounded-lg">Buy</p>
              <div className=" absolute top-0 h-full w-full bg-zinc-900 rounded-lg center text-4xl text-center">
                Plans Priced to suit your needs
              </div>
            </div>
            <div className=" hidden lg:flex flex-col bg-white ">
              <div className=" text-center text-3xl py-6 text-emerald-700 font-semibold">
                Core details
              </div>
              <div className=" flex flex-col">
                {pricingFeatures.map((item) => {
                  return (
                    <div className=" flex items-center text-xl px-2 gap-6  text-emerald-700 h-[60px]">
                      <div className=" center">
                        <AiFillInfoCircle />
                      </div>
                      <h1>{item.name}</h1>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {PricingUlData.map((item) => {
            return (
              <div className=" col-span-4  sm:col-span-2 lg:col-span-1  bg-zinc-800  rounded-lg  relative  ">
                <div className=" relative">
                  {item.title === "Legend" && (
                    <>
                      <div className=" absolute inset-0  z-10 rounded-lg bg-gradient-to-r from-red-500 to-orange-500"></div>
                    </>
                  )}
                  <div className="relative z-20">
                    <div className=" card-hero-container   flex flex-col items-center gap-4 py-8 px-4 rounded-lg">
                      <h1 className=" text-4xl font-semibold">{item.title}</h1>
                      {!isMonthly && (
                        <p className=" bg-emerald-700 px-3 py-1 rounded-full text-base">
                          <span className=" line-through mr-2">
                            ${item.monthlyPrice * 3}
                          </span>
                          SAVE ${item.monthlyPrice * 3 - item.triMonthlyPrice}
                        </p>
                      )}
                      {!isMonthly && (
                        <h1 className=" text-3xl font-semibold ">
                          ${item.triMonthlyPrice}/3mo
                        </h1>
                      )}
                      {isMonthly && (
                        <h1 className=" text-3xl font-semibold mt-4">
                          ${item.monthlyPrice}/3mo
                        </h1>
                      )}
                      <p className=" mt-5">{item.usernames} username</p>
                      <p>daily reports</p>
                      <p className=" text-xl px-5 py-1.5  bg-emerald-700 rounded-lg">
                        Buy
                      </p>
                    </div>
                    <div className=" w-full px-4 lg:hidden  flex flex-col">
                      <ServiceDetailsAccordion data={item.coreFeaturesData} />
                    </div>
                  </div>
                </div>
                <div className="hidden lg:flex flex-col bg-white ">
                  <div className=" text-center text-3xl py-6">Core details</div>
                  <div className=" flex flex-col ">
                    {item.coreFeaturesData.map((term, index) => {
                      if (term.is === "text") {
                        return (
                          <div className=" flex w-full center" key={index}>
                            {/* <div>{term.name}</div> */}
                            <div className=" text-xl  px-2  text-emerald-700 h-[60px] center">
                              {term.text}
                            </div>
                          </div>
                        );
                      }
                      if (term.is === false) {
                        return (
                          <div className=" flex w-full center" key={index}>
                            {/* <div>{term.name}</div> */}
                            <div className=" text-2xl  px-2  text-emerald-700 h-[60px] center">
                              <RxCross2 />
                            </div>
                          </div>
                        );
                      }
                      return (
                        <div className=" flex w-full center" key={index}>
                          {/* <div>{term.name}</div> */}
                          <div className=" text-2xl  px-2  text-emerald-700 h-[60px] center">
                            <AiOutlineCheck />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PricingMain;
