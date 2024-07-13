import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AlignJustify } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-gray-200">
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-5 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Soma Capital</span>
            <Image src="/soma.png" alt="Soma Capital" width={50} height={50} />
          </Link>
        </div>
        <div className="flex h-full items-end lg:hidden">
          <button
            type="button"
            className="flex items-end justify-center self-end rounded-md text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <AlignJustify className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="-mb-[4px] hidden items-center lg:flex lg:gap-x-5">
          <Link
            target="_self"
            href="/"
            className="relative border-b-2 border-transparent p-1 text-sm font-semibold leading-6 text-gray-900 transition-all hover:border-purple-800"
          >
            Portfolio
          </Link>
          <Link
            target="_self"
            href="/about"
            className="relative border-b-2 border-transparent p-1 text-sm font-semibold leading-6 text-gray-900 transition-all hover:border-purple-800"
          >
            About Us
          </Link>
          <Link
            target="_self"
            href="/team"
            className="relative border-b-2 border-transparent p-1 text-sm font-semibold leading-6 text-gray-900 transition-all hover:border-purple-800"
          >
            Team
          </Link>
          <Link
            target="_self"
            href="/news"
            className="relative border-b-2 border-transparent p-1 text-sm font-semibold leading-6 text-gray-900 transition-all hover:border-purple-800"
          >
            News
          </Link>
          <Link
            target="_self"
            href="/jobs"
            className="relative border-b-2 border-transparent p-1 text-sm font-semibold leading-6 text-gray-900 transition-all hover:border-purple-800"
          >
            Jobs
          </Link>
          <Link
            target="_self"
            href="https://somafellows.com/"
            className="relative border-b-2 border-transparent p-1 text-sm font-semibold leading-6 text-gray-900 transition-all hover:border-purple-800"
          >
            Fellowship
          </Link>
          <Link
            target="_self"
            href="https://airtable.com/appzO3diTm7xrL9nI/shrTYxt9W5bqYE08T"
            className="relative border-b-2 border-transparent p-1 text-sm font-semibold leading-6 text-gray-900 transition-all hover:border-purple-800"
          >
            Pitch Us
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
