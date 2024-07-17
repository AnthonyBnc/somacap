import React from "react";
import HeaderArticle from "../_components/HeadnFooter/Header";
import Footer from "../_components/HeadnFooter/Footer";
import ProfileTwo from "../_components/ArticleTwo/ProfileTwo";
import ContentTwo from "../_components/ArticleTwo/ContentTwo";
import ArticleOTwo from "../_components/ArticleReckon/ArticleOTwo";

export default function ArticlePage() {
  return (
    <div className="flex flex-col">
      <HeaderArticle />
      <div className="relative w-full lg:px-8">
        <div className="lg:w-full lg:flex-row">
          <div className="lg:mt-5 lg:flex lg:w-full lg:flex-row lg:border-purple-950">
            <div className="lg:w-1/3 xl:w-1/5"></div>
            <div className="hidden lg:flex lg:w-3/5 lg:border-l-2 lg:border-r-2 lg:border-purple-950 lg:text-white xl:w-4/6">
              a
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:border-t-2 lg:border-purple-950">
          <h1 className="block p-5 text-center text-5xl font-bold lg:hidden">
            Tech <br /> Inovation
          </h1>
          <aside className="w-full p-3 lg:w-1/3 xl:w-1/5">
            <ProfileTwo />
          </aside>
          <main className="w-full p-4 lg:w-3/5 lg:border-l-2 lg:border-r-2 lg:border-purple-950 xl:w-4/6">
            <ContentTwo />
          </main>
          <div className="mb-3 flex w-full flex-col overflow-hidden border-t-2 border-purple-950 p-4 lg:hidden">
            <h1 className="text-3xl font-bold">What to Read Next</h1>
            <div className="mb-2 mt-4 flex items-center justify-center">
              <div className="pl-5 pr-5">
                <div className="grid w-fit grid-cols-1 gap-4">
                  <ArticleOTwo />
                </div>
              </div>
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
