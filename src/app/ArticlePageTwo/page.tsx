import React from "react";
import HeaderArticle from "../_components/HeadnFooter/Header";
import Footer from "../_components/HeadnFooter/Footer";
import ProfileTwo from "../_components/ArticleTwo/ProfileTwo";
import ContentTwo from "../_components/ArticleTwo/ContentTwo";

export default function ArticlePage() {
  return (
    <div className="flex flex-col">
      <HeaderArticle />
      <div className="relative w-full">
        <div className="flex flex-col lg:flex-row">
          <aside className="w-full border-r border-black p-4 lg:w-1/4">
            <ProfileTwo />
          </aside>
          <main className="w-full border-r border-black p-4 lg:w-2/4">
            <ContentTwo />
          </main>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
