import React from "react";
import Image from "next/image";
import Stack from "../_svg/stack";
import BgR from "../_svg/bgRight";
import DotCompo from "../_svg/dot";
import Link from "next/link";

const LandingPage: React.FC = () => {
  return (
    <div className="relative flex min-h-fit w-full flex-col overflow-x-hidden bg-gradient-to-r text-white">
      <div className="absolute -top-9 left-10 flex items-center gap-32 sm:left-auto sm:right-10 md:gap-5">
        <button className="relative w-fit min-w-fit rounded-b-2xl bg-white px-5 py-2 text-sm font-bold text-deepPurple hover:bg-gray-200 sm:mt-3 sm:px-5 sm:py-3 md:text-base lg:px-6 lg:py-3 xl:px-8 xl:py-3">
          Subscribe to the Soma Newsletter
        </button>
        <div className="order-first mt-6 flex min-w-fit items-center justify-center rounded-b-2xl bg-white p-2 px-1 py-5 md:order-none">
          <Link href="/">
            <Image src="/soma.png" alt="Soma Capital" width={60} height={60} />
          </Link>
        </div>
      </div>
      <BgR />
      <div className="relative mb-24 mt-32 flex min-h-fit w-full flex-1 flex-col items-center justify-center p-3 sm:w-full sm:p-0 md:min-h-screen lg:mt-7">
        <div className="flex w-full max-w-full flex-col items-center">
          <div className="flex flex-col items-center space-x-4 p-4 md:mt-10 md:gap-12 lg:flex-row lg:py-4">
            <div className="z-40 max-w-lg text-left lg:py-4">
              <h1 className="text-5xl font-semibold lg:text-7xl">
                You’ve entered the LatticeSphere
              </h1>
              <div className="w-2/3 text-3xl font-light italic tracking-wide sm:w-fit lg:text-4xl">
                <p className="mt-5">connect the nodes.</p>
                <p>explore our hub for theses and research.</p>
              </div>
            </div>
            <div className="mt-10 flex w-fit justify-center md:mt-0">
              <Stack />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center overflow-hidden">
        <DotCompo />
      </div>
    </div>
  );
};

export default LandingPage;
