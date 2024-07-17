import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function LandingHeader() {
  return (
    <div className="relative z-50 w-full">
      <div className="xs:gap-6 absolute -top-2 right-7 flex flex-row items-center gap-7 sm:right-10 sm:top-0">
        <Link
          href="/"
          className="mt-2 flex items-center justify-center rounded-b-2xl bg-white p-2 px-1 py-3 sm:hidden"
        >
          <Image src="/soma.png" alt="Soma Capital" width={45} height={60} />
        </Link>
        <button className="relative -mt-3 w-fit min-w-fit rounded-b-2xl bg-gray-100 px-3 py-2 text-sm font-bold text-deepPurple hover:bg-gray-300 sm:px-5 sm:py-3 md:mt-0 md:text-base lg:px-6 lg:py-3 xl:px-6 xl:py-2">
          Subscribe to the Soma Newsletter
        </button>
      </div>
      <div className="absolute left-4 top-7 hidden sm:flex md:left-10 lg:left-16 xl:left-20">
        <Link href="/">
          <Image src="/soma.png" alt="Soma Capital" width={60} height={60} />
        </Link>
      </div>
    </div>
  );
}
