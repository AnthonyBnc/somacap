import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ArticleTwo() {
  return (
    <>
      <div className="h-fit max-w-4xl overflow-hidden rounded-lg bg-customPurple text-white shadow-lg">
        <div className="p-7">
          <Link href="/ArticlePage" className="hover:underline">
            <h2 className="mb-2 text-xl font-semibold">Enterprise Climate</h2>
          </Link>
          <div className="mt-4 flex items-center">
            <Image
              src="/User2.jpg"
              alt="User 2"
              width={400}
              height={400}
              className="mr-4 h-10 w-10 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-semibold">Jiayan Luo</p>
              <p className="text-sm">Jan 10, 2022 &middot; Research</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
