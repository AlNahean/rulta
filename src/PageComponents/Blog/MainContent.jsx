import React from "react";

const MainContent = () => {
  return (
    <div className=" pt-[var(--header-height)]">
      <div className=" flex flex-col">
        <div className=" hero-article px-10 pt-10 relative ">
          <img
            src="https://d2lrbix8tkaup8.cloudfront.net/QA_vista_wife_nzzivc_c_scale,w_1080.png"
            alt=""
            className=" w-[60%]"
          />
          <div className=" md:absolute md:top-0 md:left-[50%] bg-white py-8 px-8 rounded-xl">
            <div className=" flex items-center border-l-2 border-slate-900  pl-10 gap-10 mt-8 ">
              <h1 className=" text-2xl font-semibold">
                Onlyfans tips Interview
              </h1>
              <div className=" center ">8 MIN Read</div>
            </div>
            <h1 className=" text-3xl font-bold mt-20 mb-20">
              Q&A with Vista Wife: Britain’s most famous swinger answered our
              questions.
            </h1>
          </div>
        </div>
        <div className=" more-articles ">
          <h1 className=" text-6xl text-center font-bold py-20">
            The Rulta Blog
          </h1>

          <div className=" grid grid-cols-2">
            {[1, 2, 3, 4].map((item, index) => {
              return (
                <div className=" col-span-2 md:col-span-1 relative">
                  <img
                    src="https://d2lrbix8tkaup8.cloudfront.net/Q_A_1_ngg3wo_c_scale,w_1080.jpg"
                    alt=""
                    className=" w-[60%] px-8"
                  />
                  <div className="  bg-white py-8 px-8 rounded-xl">
                    <div className=" flex items-center border-l-2 border-slate-900  pl-10 gap-10 mt-8 ">
                      <h1 className=" text-2xl font-semibold">
                        Onlyfans tips Interview
                      </h1>
                      <div className=" center ">8 MIN Read</div>
                    </div>
                    <h1 className=" text-3xl font-bold mt-10 mb-20">
                      Q&A with Vista Wife: Britain’s most famous swinger
                      answered our questions.
                    </h1>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
