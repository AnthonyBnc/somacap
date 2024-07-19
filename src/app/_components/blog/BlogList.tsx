import React from "react";
import ArticleOne from "./ArticleOne";
import ArticleTwo from "./ArticleTwo";

const BlogList = () => {
  return (
    <div className="grid w-fit grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
      <div className="flex flex-col gap-5">
        <ArticleOne />
        <ArticleTwo />
        <ArticleTwo />
        <ArticleOne />
      </div>
      <div className="flex flex-col gap-5">
        <ArticleTwo />
        <ArticleOne />
        <ArticleOne />
        <ArticleTwo />
      </div>
      <div className="flex flex-col gap-5">
        <ArticleOne />
        <ArticleTwo />
        <ArticleTwo />
        <ArticleTwo />
      </div>
      <div className="flex flex-col gap-5 md:hidden lg:flex">
        <ArticleOne />
        <ArticleOne />
        <ArticleOne />
      </div>
    </div>
  );
};

export default BlogList;
