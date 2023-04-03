import React from "react";

const MainContent = () => {
  return (
    <div className=" pt-[var(--header-height)]  min-h-screen px-8">
      <div className=" p-4 bg-[#172554] rounded-xl mt-10">
        <h1 className=" text-5xl font-semibold my-5">Select your badge</h1>
        <p className=" text-base text-xl">
          Click on the image to get the code to add your profiles
        </p>
      </div>

      <div className=" grid grid-cols-2 gap-8">
        <div className=" col-span-2 md:col-span-1 my-4 relative m-2">
          <img
            src="https://rulta-images.s3.amazonaws.com/rulta-dmca-badge-gold.png"
            alt=""
            className=" w-full"
          />
          <div className=" absolute bottom-4 right-4 flex flex-col gap-4 text-white m-2 ">
            <div className="  bg-emerald-700 px-3 py-1 rounded-lg">
              Copy Html
            </div>
            <div className=" bg-emerald-700 px-3 py-1 rounded-lg">Download</div>
          </div>
        </div>
        <div className=" col-span-2 md:col-span-1 my-4 relative m-2">
          <img
            src="https://rulta-images.s3.amazonaws.com/rulta-dmca-badge-gold-transparent.png"
            alt=""
            className=" w-full"
          />
          <div className=" absolute bottom-4 right-4 flex flex-col gap-4 text-white m-2 ">
            <div className="  bg-emerald-700 px-3 py-1 rounded-lg">
              Copy Html
            </div>
            <div className=" bg-emerald-700 px-3 py-1 rounded-lg">Download</div>
          </div>
        </div>
        <div className=" col-span-2 md:col-span-1 my-4 relative m-2">
          <img
            src="https://rulta-images.s3.amazonaws.com/rulta-dmca-badge-1.png"
            alt=""
            className=" w-full"
          />
          <div className=" absolute bottom-4 right-4 flex flex-col gap-4 text-white m-2 ">
            <div className="  bg-emerald-700 px-3 py-1 rounded-lg">
              Copy Html
            </div>
            <div className=" bg-emerald-700 px-3 py-1 rounded-lg">Download</div>
          </div>
        </div>
        <div className=" col-span-2 md:col-span-1 my-4 relative m-2">
          <img
            src="https://rulta-images.s3.amazonaws.com/rulta-dmca-badge-2.png"
            alt=""
            className=" w-full"
          />
          <div className=" absolute bottom-4 right-4 flex flex-col gap-4 text-white m-2 ">
            <div className="  bg-emerald-700 px-3 py-1 rounded-lg">
              Copy Html
            </div>
            <div className=" bg-emerald-700 px-3 py-1 rounded-lg">Download</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
