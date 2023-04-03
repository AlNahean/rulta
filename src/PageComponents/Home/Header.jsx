import React from "react";

const Header = () => {
  return (
    <div className="header-wrapper    mx-auto z-50 relative">
      <div className=" flex h-[var(--header-height)] w-full justify-between items-center fixed px-[var(--page-padding)] ">
        <h1 className=" text-3xl font-bold">Rulla</h1>
        <div className=" hidden items-center gap-20 font-bold md:flex">
          <div>Pricing</div>
          <div>Blog</div>
          <div>Resources</div>
          <div>Log In</div>
          <div className=" px-6 py-2 bg-blue-800 rounded-lg font-bold ">
            Sign In
          </div>
        </div>
        <div className=" md:hidden">a</div>
      </div>
    </div>
  );
};

export default Header;
