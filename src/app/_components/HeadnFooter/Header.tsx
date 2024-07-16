import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function HeaderArticle() {
  return (
    <div className="relative flex h-20 max-h-full bg-deepPurple">
      <div className="absolute -top-8 left-10 flex items-center gap-5 md:left-auto md:right-10">
        <button className="mt-5 hidden overflow-hidden rounded-b-2xl bg-white px-5 py-4 text-xl font-bold text-deepPurple hover:bg-gray-200 md:flex">
          Subscribe to the Soma Newsletter
        </button>
        <div className="mt-6 flex items-center justify-center rounded-b-2xl bg-white p-2 px-1 py-5">
          <Link href="/">
            <Image src="/soma.png" alt="Soma Capital" width={60} height={60} />
          </Link>
        </div>
      </div>
    </div>
  );
}
