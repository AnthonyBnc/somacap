import React from "react";
import DesktopFilter from "./_components/Filter/DesktopFilter";
import BlogArticle from "./_components/blog/Blog";
import Footer from "./_components/HeadnFooter/Footer";
import LandingPage from "./_components/somaCap/landingtest";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="relative w-full">
        <div className="relative w-fit md:w-full">
          <LandingPage />
          <div className="relative mx-auto px-4">
            <div className="relative mx-auto min-h-screen px-4 py-4 md:max-w-6xl">
              <DesktopFilter />
              <BlogArticle />
            </div>
          </div>
          <div className="mb-5 flex items-center justify-center">
            <button className="flex items-center justify-center rounded-lg bg-deepPurple px-4 py-2 font-semibold text-white shadow-md hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
              More Article
            </button>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
