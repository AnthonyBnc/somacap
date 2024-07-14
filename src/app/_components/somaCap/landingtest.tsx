import React from "react";
import Image from "next/image";
import Stack from "../_svg/stack";
import BgR from "../_svg/bgRight";
import DotCompo from "../_svg/dot";
import Link from "next/link";

const LandingPage: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-r text-white">
      <div className="absolute -top-8 left-10 flex items-center gap-28 sm:left-auto sm:right-10 md:gap-5">
        <button className="mt-5 rounded-b-lg bg-white px-5 py-4 text-xl font-bold text-deepPurple hover:bg-gray-200">
          Subscribe to the Soma Newsletter
        </button>
        <div className="order-first mt-6 flex items-center justify-center rounded-b-lg bg-white p-2 px-1 py-5 md:order-none">
          <Link href="/">
            <Image src="/soma.png" alt="Soma Capital" width={60} height={60} />
          </Link>
        </div>
      </div>
      <BgR />
      <div className="relative flex min-h-screen flex-1 flex-col items-center justify-center">
        <div className="flex w-full max-w-full flex-col items-center">
          <div className="flex flex-col items-center space-x-4 py-16 lg:flex-row lg:gap-10 lg:py-4">
            <div className="z-40 max-w-lg py-20 text-left">
              <h1 className="text-7xl font-semibold">
                You’ve entered the LatticeSphere
              </h1>
              <div className="text-3xl font-light italic tracking-wide">
                <p className="mt-5">connect the nodes.</p>
                <p>explore our hub for theses and research.</p>
              </div>
            </div>
            <div className="mt-0 flex w-full justify-center lg:mt-10">
              <Stack />
            </div>
          </div>
          <div className="hidden justify-center overflow-hidden xl:flex">
            <DotCompo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
