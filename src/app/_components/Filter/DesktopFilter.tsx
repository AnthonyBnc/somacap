"use client";
import React, { useState } from "react";

export default function DesktopFilter() {
  const [selectedContent, setSelectedContent] = useState("All");
  const [selectedIndustry, setSelectedIndustry] = useState("All");

  const contentOptions = ["All", "Sector Thesis", "Research"];
  const industryOptions = [
    "All",
    "B2B/SaaS",
    "AI",
    "FinTech",
    "Logistics",
    "CleanTech",
    "FrontierTech",
    "PropTech",
    "HealthTech",
    "Crypto",
    "Consumer",
  ];

  return (
    <>
      <div className="p-4">
        <div className="mb-4">
          <h1 className="text-lg font-semibold">Browse The Categories</h1>
          <h2 className="mt-4 font-semibold">Content</h2>
          <div className="mt-2 flex flex-wrap gap-2">
            {contentOptions.map((option) => (
              <button
                key={option}
                className={`rounded-md border px-4 py-2 ${
                  selectedContent === option
                    ? "border-purple-500 bg-purple-200 text-purple-800"
                    : "border-gray-300 bg-gray-100 text-gray-700"
                }`}
                onClick={() => setSelectedContent(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
        <div>
          <h2 className="font-semibold">Industries</h2>
          <div className="mt-2 flex flex-wrap gap-2">
            {industryOptions.map((option) => (
              <button
                key={option}
                className={`rounded-md border px-4 py-2 ${
                  selectedIndustry === option
                    ? "border-purple-500 bg-purple-200 text-purple-800"
                    : "border-gray-300 bg-gray-100 text-gray-700"
                }`}
                onClick={() => setSelectedIndustry(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
