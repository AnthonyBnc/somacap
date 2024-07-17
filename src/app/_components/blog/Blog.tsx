import React from "react";
import BlogList from "./BlogList";
import { Minus } from "lucide-react";
import DesktopFilter from "../Filter/DesktopFilter";

export default function BlogArticle() {
  return (
    <>
      <div className="p-0 md:p-4">
        <div className="mb-4">
          <div className="flex flex-row items-center justify-center gap-8 md:flex-col md:items-start md:gap-2">
            <DesktopFilter />
            <div className="order-first mt-5 flex flex-row md:order-none">
              <h1 className="text-3xl font-semibold md:mt-0 md:text-lg">
                Featured Articles
              </h1>
              <Minus size={30} className="mt-1 md:mt-0" />
            </div>
          </div>
          <div className="mt-4 flex items-center justify-center p-2 md:mt-4">
            <BlogList />
          </div>
        </div>
      </div>
    </>
  );
}
