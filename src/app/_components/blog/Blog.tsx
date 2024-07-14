import React from "react";
import BlogList from "./BlogList";
import DesktopFilter from "../Filter/DesktopFilter";

export default function BlogArticle() {
  return (
    <>
      <div className="p-4">
        <div className="mb-4">
          <h1 className="text-lg font-semibold">Featured Articles</h1>
          <div className="mt-7 flex items-center justify-center">
            <BlogList />
          </div>
        </div>
      </div>
    </>
  );
}
