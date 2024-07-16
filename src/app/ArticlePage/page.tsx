import React from "react";
import HeaderArticle from "../_components/HeadnFooter/Header";
import Footer from "../_components/HeadnFooter/Footer";
import ArticleProfile from "../_components/article/ArticleProfile";
import ArticleContent from "../_components/article/ArticleContent";
import ArticleOne from "../_components/blog/ArticleOne";

export default function ArticlePage() {
  return (
    <div className="flex flex-col">
      <HeaderArticle />
      <div className="relative w-full lg:px-8">
        <div className="lg:w-full lg:flex-row">
          <div className="lg:mt-5 lg:flex lg:w-full lg:flex-row lg:border-black">
            <div className="lg:w-1/3"></div>
            <div className="hidden lg:flex lg:w-3/5 lg:border-l-2 lg:border-r-2 lg:border-black lg:text-white">
              a
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:border-t-2 lg:border-black">
          <h1 className="block p-5 text-center text-5xl font-bold lg:hidden">
            Enterprise <br /> Climate
          </h1>
          <aside className="w-full lg:w-1/3">
            <ArticleProfile />
          </aside>
          <main className="w-full p-4 lg:w-3/5 lg:border-l-2 lg:border-r-2 lg:border-black">
            <ArticleContent />
          </main>
          <div className="mb-3 flex w-full flex-col overflow-hidden lg:hidden">
            <h1 className="border-t-2 border-black p-2 text-4xl font-bold">
              What to Read Next
            </h1>
            <div className="flex items-center justify-center p-4">
              <ArticleOne />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
