import React from "react";

const Modal = ({
  isOpen,
  onClose,
  contentOptions,
  industryOptions,
  selectedContent,
  setSelectedContent,
  selectedIndustry,
  setSelectedIndustry,
}: {
  isOpen: boolean;
  onClose: () => void;
  contentOptions: string[];
  industryOptions: string[];
  selectedContent: string;
  setSelectedContent: (content: string) => void;
  selectedIndustry: string;
  setSelectedIndustry: (industry: string) => void;
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-11/12 max-w-md rounded-lg bg-white p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Categories</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800"
          >
            &times;
          </button>
        </div>
        <div className="mt-4">
          <h2 className="font-semibold">Content</h2>
          <div className="mt-2 flex flex-wrap gap-2">
            {contentOptions.map((option) => (
              <button
                key={option}
                className={`rounded-md border px-3 py-1 ${
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
        <div className="mt-4">
          <h2 className="font-semibold">Industries</h2>
          <div className="mt-2 flex flex-wrap gap-2">
            {industryOptions.map((option) => (
              <button
                key={option}
                className={`rounded-md border px-3 py-1 ${
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
    </div>
  );
};

export default Modal;
