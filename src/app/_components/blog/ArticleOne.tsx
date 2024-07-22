import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ArticleOne() {
  return (
    <>
      <div className="relative max-w-md overflow-visible rounded-3xl bg-purple-950 p-5 text-white shadow-lg md:p-2">
        <div className="flex justify-center sm:p-2">
          <Link href="/ArticlePageTwo">
            <Image
              src="/ArticleImage.png"
              alt="Article 1"
              width={400}
              height={300}
              className="object-cover"
            />
          </Link>
        </div>

        <div className="mb-1 ml-1 mt-5 flex flex-col md:mb-1 md:ml-2 md:mt-1 md:p-1">
          <Link href="/ArticlePageTwo" className="hover:underline">
            <h2 className="text-2xl font-semibold sm:text-lg">
              Green Financing That Promotes Sustainable Initiatives
            </h2>
          </Link>
          <div className="mt-6 flex items-center md:mt-0">
            <Image
              src="/User1.jpg"
              alt="User 1"
              width={400}
              height={400}
              className="mr-5 h-16 w-16 rounded-full object-cover sm:h-10 sm:w-10"
            />
            <div>
              <div className="text-xl font-semibold sm:text-base">
                <div className="group relative inline-block">
                  <a className="cursor-pointer hover:underline">Molly Smith</a>
                  <div className="absolute left-32 top-5 z-50 mt-2 w-80 -translate-x-1/2 scale-0 rounded bg-gray-50 p-5 text-black shadow-xl transition-transform duration-200 ease-in-out group-hover:scale-100 lg:left-40 lg:top-5">
                    <div className="flex items-center">
                      <Image
                        src="/User1.jpg"
                        alt="User 1"
                        width={50}
                        height={50}
                        className="h-16 w-16 rounded-full object-cover sm:h-12 sm:w-12"
                      />
                      <div className="ml-3 text-lg font-semibold">
                        Molly Smith
                      </div>
                    </div>
                    <div className="mt-2 text-sm font-normal">
                      Software Engineer at TechCorp Formerly at Startup Inc,
                      Google
                    </div>
                    <div className="mt-3 flex items-center justify-end border-t-2 border-deepPurple pt-3">
                      <a
                        href="#"
                        className="cursor-pointer rounded-3xl bg-green-500 px-3 py-2 text-white hover:bg-green-700"
                      >
                        View Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-md text-gray-200 sm:text-sm md:mb-2">
                Jan 10, 2022 &middot; Thesis
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
