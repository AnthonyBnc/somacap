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
          <Footer />
        </div>
      </div>
    </>
  );
}
