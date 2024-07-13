import React from "react";
import HeaderArticle from "../_components/HeadnFooter/Header";
import Footer from "../_components/HeadnFooter/Footer";
import ArticleProfile from "../_components/article/ArticleProfile";
import ArticleContent from "../_components/article/ArticleContent";

export default function ArticlePage() {
  return (
    <div className="flex flex-col">
      <HeaderArticle />
      <div className="flex flex-col lg:flex-row">
        <aside className="w-full border-r border-black p-4 lg:w-1/4">
          <ArticleProfile />
        </aside>
        <main className="w-full border-r border-black p-4 lg:w-2/4">
          <ArticleContent />
        </main>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
