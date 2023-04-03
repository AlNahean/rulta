import React from "react";

const Section1 = () => {
  return (
    <>
      <div className=" px-[var(--page-padding)]">
        {/* <div className=" grid grid-cols-8">
          <div className=" col-span-8 md:col-span-3  border">a</div>
          <div className=" col-span-8  md:col-span-5 border">a</div>

          <div className=" col-span-8 md:col-span-4  border">a</div>
          <div className=" col-span-8  md:col-span-4 border">a</div>

          <div className=" col-span-5 md:col-span-5  border">a</div>
          <div className=" col-span-8  md:col-span-3 border">a</div>
        </div> */}

        <div className=" container mx-auto grid grid-cols-2 mb-52">
          <div className=" max-w-[550px] ms-auto col-span-2 md:col-span-1 flex flex-col justify-center  justify-self-center p-10">
            <h1 className=" text-6xl font-bold">We have your back</h1>
            <p className=" text-2xl mb-4">
              Trust us to shield your brand from content thieves.
            </p>
            <p className=" bg-blue-700 center py-2 rounded-lg ">
              Try rulta for free today
            </p>
          </div>
          <div className=" col-span-2 md:col-span-1">
            <img
              src="homepage/home_video_thumbnail_vgpmee_c_scale_w_624_voddyz_c_scale,w_624.webp"
              className=" rounded-xl"
            />
          </div>
        </div>
      </div>

      <div className=" flex flex-col   min-h-[100vh] pt-[var(--header-height)] relative ">
        <div className=" flex flex-col justify-start items-center relative z-20 ">
          <h1 className=" text-6xl font-bold mb-10">Quick Setup</h1>
          <h3 className=" max-w-[700px] mb-10">
            Our fast and effective service means that your account will be up
            and running within 24 hours, with your first detailed report of
            detected copyright infringements available to view on your
            dashboard.
          </h3>
          <p className=" px-6 py-2 bg-blue-800">START A TRAIL</p>
        </div>
        <div className=" absolute h-[100%] w-[100%] flex justify-center items-end">
          <img
            src="homepage/rulta-mockup_qdipec_c_scale_w_1080_t6ex1n_c_scale,w_1080.webp"
            alt=""
            srcset=""
            className=" h-full w-auto"
          />
        </div>
      </div>
    </>
  );
};

export default Section1;
