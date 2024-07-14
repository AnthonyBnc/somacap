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
      <div className="relative w-full">
        <div className="flex flex-col lg:flex-row">
          <h1 className="block p-5 text-center text-5xl font-bold md:hidden">
            Enterprise <br /> Climate
          </h1>
          <aside className="w-full border-r-2 border-black lg:w-1/4">
            <ArticleProfile />
          </aside>
          <main className="w-full border-r-2 border-black p-4 lg:w-2/4">
            <ArticleContent />
          </main>
          <div className="flex w-full flex-col overflow-hidden md:hidden">
            <h1 className="mt-4 border-t-2 border-black p-2 text-4xl font-bold">
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
