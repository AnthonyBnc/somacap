import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ArticleOne() {
  return (
    <>
      <div className="max-w-md overflow-hidden rounded-3xl bg-purple-950 p-5 text-white shadow-lg md:p-2">
        <div className="flex justify-center sm:p-2">
          <Image
            src="/ArticleImage.png"
            alt="Article 1"
            width={400}
            height={300}
            className="object-cover"
          />
        </div>

        <div className="mb-3 ml-1 mt-5 flex flex-col md:mb-1 md:ml-2 md:p-1">
          <Link href="/ArticlePageTwo" className="hover:underline">
            <h2 className="mb-2 text-3xl font-semibold sm:mb-2 sm:text-lg">
              Green Financing That Promotes Sustainable Initiatives
            </h2>
          </Link>
          <div className="mt-6 flex items-center md:mt-0">
            <Image
              src="/User1.jpg"
              alt="User 1"
              width={400}
              height={400}
              className="mr-4 h-20 w-20 rounded-full object-cover sm:h-10 sm:w-10"
            />
            <div>
              <p className="text-2xl font-semibold sm:text-lg">Molly Smith</p>
              <p className="text-xl text-gray-200 sm:text-base md:mb-2">
                Jan 10, 2022 &middot; Thesis
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
