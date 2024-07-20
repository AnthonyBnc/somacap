import React from "react";
import Stack from "../_svg/stack";
import BgR from "../_svg/bgRight";
import DotCompo from "../_svg/dot";
import LandingHeader from "../HeadnFooter/LandingHeader";
import MobileDotCompo from "../_svg/mobiledot";

const LandingPage: React.FC = () => {
  return (
    <div className="relative max-h-fit w-full flex-col overflow-x-hidden bg-gradient-to-r text-white">
      <div className="absolute right-0 top-0 z-0 hidden h-full md:block">
        <BgR />
      </div>
      <div className="relative mx-auto h-full w-full">
        <div className="max-h-full">
          <LandingHeader />
        </div>
      </div>

      <div className="relative mb-2 mt-20 flex min-h-fit w-full flex-1 flex-col items-center justify-center p-2 sm:w-full sm:p-0 md:min-h-screen lg:mt-7">
        <div className="absolute inset-0 z-0 hidden md:block">
          <DotCompo />
        </div>

        <div className="absolute inset-0 z-0 block md:hidden">
          <MobileDotCompo />
        </div>

        <div className="flex w-full max-w-full flex-col items-center">
          <div className="flex flex-col items-center space-x-4 p-4 md:mt-5 md:flex-row md:gap-12 lg:py-4">
            <div className="z-40 max-w-lg text-left lg:py-4">
              <h1 className="text-5xl font-bold lg:text-7xl">
                You’ve entered the LatticeSphere
              </h1>
              <div className="w-3/4 text-2xl font-light italic tracking-wide sm:w-fit lg:text-4xl">
                <p className="mt-5">connect the nodes.</p>
                <p>explore our hub for theses and research.</p>
              </div>
            </div>
            <div className="flex w-fit justify-center md:mt-0">
              <Stack />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
