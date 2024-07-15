import React from "react";
import Image from "next/image";
import Stack from "../_svg/stack";
import BgR from "../_svg/bgRight";
import DotCompo from "../_svg/dot";
import Link from "next/link";

const LandingPage: React.FC = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-gradient-to-r text-white">
      <div className="absolute -top-9 left-10 flex items-center gap-32 sm:left-auto sm:right-10 md:gap-5">
        <button className="relative w-auto min-w-fit rounded-b-lg bg-white px-5 py-2 text-sm font-bold text-deepPurple hover:bg-gray-200 sm:mt-3 sm:px-5 sm:py-3 md:text-base lg:px-6 lg:py-3 xl:px-8 xl:py-4">
          Subscribe to the Soma Newsletter
        </button>
        <div className="order-first mt-6 flex min-w-fit items-center justify-center rounded-b-lg bg-white p-2 px-1 py-5 md:order-none">
          <Link href="/">
            <Image src="/soma.png" alt="Soma Capital" width={60} height={60} />
          </Link>
        </div>
      </div>
      <BgR />
      <div className="relative flex min-h-screen w-full flex-1 flex-col items-center justify-center p-6 md:w-full lg:p-0">
        <div className="flex w-full max-w-full flex-col items-center">
          <div className="flex flex-col items-center space-x-4 py-16 lg:flex-row lg:gap-10 lg:py-4">
            <div className="z-40 max-w-lg py-20 text-left lg:py-4">
              <h1 className="text-4xl font-semibold lg:text-7xl">
                You’ve entered the LatticeSphere
              </h1>
              <div className="text-xl font-light italic tracking-wide lg:text-3xl">
                <p className="mt-5">connect the nodes.</p>
                <p>explore our hub for theses and research.</p>
              </div>
            </div>
            <div className="mt-10 flex w-fit justify-center lg:mt-0">
              <Stack />
            </div>
          </div>
        </div>
      </div>
      <div className="hidden justify-center overflow-hidden xl:flex">
        <DotCompo />
      </div>
    </div>
  );
};

export default LandingPage;
