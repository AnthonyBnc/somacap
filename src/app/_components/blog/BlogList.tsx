import React from "react";
import ArticleOne from "./ArticleOne";
import ArticleTwo from "./ArticleTwo";

const BlogList = () => {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
      <div className="flex flex-col gap-4">
        <ArticleOne />
        <ArticleTwo />
        <ArticleTwo />
        <ArticleOne />
      </div>
      <div className="flex flex-col gap-4">
        <ArticleTwo />
        <ArticleOne />
        <ArticleOne />
        <ArticleTwo />
      </div>
      <div className="flex flex-col gap-4">
        <ArticleOne />
        <ArticleTwo />
        <ArticleTwo />
        <ArticleTwo />
      </div>
      <div className="flex flex-col gap-4">
        <ArticleOne />
        <ArticleOne />
        <ArticleOne />
      </div>
    </div>
  );
};

export default BlogList;
