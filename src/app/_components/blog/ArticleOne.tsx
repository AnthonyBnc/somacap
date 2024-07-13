import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ArticleOne() {
  return (
    <>
      <div className="max-w-xs overflow-hidden rounded-lg bg-purple-950 text-white shadow-lg">
        <div className="flex justify-center">
          <Image
            src="/Article_Image.png"
            alt="Article 1"
            width={300}
            height={300}
            className="mt-3 object-cover p-2"
          />
        </div>

        <div className="p-4">
          <Link href="#" className="hover:underline">
            <h2 className="mb-2 text-xl font-semibold">
              Green Financing That Promotes Sustainable Initiatives
            </h2>
          </Link>
          <div className="mt-4 flex items-center">
            <Image
              src="/User1.jpg"
              alt="User 1"
              width={400}
              height={400}
              className="mr-4 h-10 w-10 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold">Molly Smith</p>
              <p className="text-sm text-gray-200">
                Jan 10, 2022 &middot; Thesis
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
