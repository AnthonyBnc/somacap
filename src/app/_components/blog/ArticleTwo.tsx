import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ArticleTwo() {
  return (
    <>
      <div className="relative h-fit max-w-4xl overflow-visible rounded-2xl bg-customPurple text-white shadow-lg">
        <div className="mb-2 p-6 md:mb-1 md:p-4">
          <Link href="/ArticlePage" className="hover:underline">
            <h2 className="text-2xl font-semibold md:text-xl">
              Enterprise Climate
            </h2>
          </Link>
          <div className="mt-3 flex items-center md:mt-2">
            <Image
              src="/User2.jpg"
              alt="User 2"
              width={400}
              height={400}
              className="mr-4 h-16 w-16 rounded-full object-cover md:h-10 md:w-10"
            />
            <div>
              <div className="text-xl font-semibold sm:text-lg">
                <div className="group relative inline-block">
                  <a className="cursor-pointer hover:underline">Jiayan Luo</a>
                  <div className="absolute left-32 top-full z-50 w-80 -translate-x-1/2 scale-0 rounded bg-gray-50 p-5 text-black shadow-xl transition-transform duration-200 ease-in-out group-hover:scale-100 lg:left-40">
                    <div className="flex items-center">
                      <Image
                        src="/User2.jpg"
                        alt="User 2"
                        width={50}
                        height={50}
                        className="h-16 w-16 rounded-full object-cover sm:h-12 sm:w-12"
                      />
                      <div className="ml-3 text-lg font-semibold">
                        Jiayan Luo
                      </div>
                    </div>
                    <div className="mt-2 text-sm font-normal">
                      C&S & History at Northwestern Incoming at Palantir
                    </div>
                    <div className="mt-3 flex items-center justify-end border-t-2 border-deepPurple pt-3">
                      <a
                        href="/#"
                        className="cursor-pointer rounded-3xl bg-green-500 px-3 py-2 text-white hover:bg-green-700"
                      >
                        View Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-md whitespace-nowrap text-gray-200 sm:text-sm">
                Jan 10, 2022 &middot; Research
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
