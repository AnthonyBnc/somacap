import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function LandingHeader() {
  return (
    <div className="relative z-50 w-full">
      <div className="absolute -top-2 left-6 flex items-center gap-2">
        <a
          href="https://somacap.com/"
          className="mt-2 flex items-center justify-center rounded-b-xl bg-white p-2 px-1 py-3 md:hidden lg:hidden"
        >
          <Image src="/soma.png" alt="Soma Capital" width={45} height={60} />
        </a>
      </div>
      <div className="absolute right-7 top-0 flex flex-row items-center">
        <button className="relative w-fit min-w-fit rounded-b-2xl bg-gray-100 px-2 py-2 text-sm font-bold text-deepPurple hover:bg-gray-300 md:right-3 md:px-5 md:py-4 md:text-2xl lg:right-10 lg:px-6 lg:py-5 lg:text-2xl xl:px-6 xl:py-2">
          Subscribe to the Soma Newsletter
        </button>
      </div>
      <div className="absolute left-6 top-4 hidden md:left-10 md:flex lg:left-16 lg:flex xl:left-20">
        <Link href="https://somacap.com/">
          <Image src="/soma.png" alt="Soma Capital" width={60} height={60} />
        </Link>
      </div>
    </div>
  );
}
