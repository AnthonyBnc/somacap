import React from "react";
import DesktopFilter from "./_components/Filter/DesktopFilter";
import BlogArticle from "./_components/blog/Blog";
import Footer from "./_components/HeadnFooter/Footer";
import LandingPage from "./_components/somaCap/landingtest";

export default function Home() {
  return (
    <>
      <div className="relative w-full">
        <div className="relative w-fit sm:w-full">
          <LandingPage />
          <div className="relative mx-auto px-4">
            <div className="relative mx-auto min-h-screen md:max-w-6xl">
              <BlogArticle />
            </div>
          </div>
          <div className="mb-5 flex items-center justify-center">
            <button className="hidden items-center justify-center rounded-lg bg-deepPurple px-4 py-2 font-semibold text-white shadow-md hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 md:flex">
              More Article
            </button>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
