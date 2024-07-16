import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ArticleTwo() {
  return (
    <>
      <div className="h-fit max-w-4xl overflow-hidden rounded-2xl bg-customPurple text-white shadow-lg">
        <div className="mb-2 p-6 md:mb-1 md:p-4">
          <Link href="/ArticlePage" className="hover:underline">
            <h2 className="text-3xl font-semibold md:text-xl">
              Enterprise Climate
            </h2>
          </Link>
          <div className="mt-4 flex items-center md:mt-2">
            <Image
              src="/User2.jpg"
              alt="User 2"
              width={400}
              height={400}
              className="mr-4 h-20 w-20 rounded-full object-cover md:h-10 md:w-10"
            />
            <div>
              <p className="text-2xl font-semibold sm:text-lg">Jiayan Luo</p>
              <p className="whitespace-nowrap text-xl sm:text-sm">
                Jan 10, 2022 &middot; Research
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
