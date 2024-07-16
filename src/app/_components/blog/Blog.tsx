import React from "react";
import BlogList from "./BlogList";
import { Minus } from "lucide-react";
import DesktopFilter from "../Filter/DesktopFilter";

export default function BlogArticle() {
  return (
    <>
      <div className="p-0 md:p-4">
        <div className="mb-4">
          <div className="flex flex-row items-center justify-center gap-24 md:flex-col md:items-start md:gap-2">
            <DesktopFilter />
            <div className="order-first mt-5 flex flex-row gap-2 md:order-none">
              <h1 className="text-4xl font-semibold md:mt-0 md:text-lg">
                Featured Articles
              </h1>
              <Minus size={24} className="mt-3 md:mt-1" />
            </div>
          </div>
          <div className="mt-7 flex items-center justify-center md:mt-4">
            <BlogList />
          </div>
        </div>
      </div>
    </>
  );
}
