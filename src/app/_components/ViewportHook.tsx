"use client";

import { useEffect } from "react";

const useViewportScale = () => {
  useEffect(() => {
    const updateViewport = () => {
      const viewport = document.querySelector('meta[name="viewport"]');
      if (window.innerWidth <= 768) {
        viewport!.setAttribute(
          "content",
          "width=device-width, initial-scale=0.7",
        );
      } else {
        viewport!.setAttribute(
          "content",
          "width=device-width, initial-scale=1.0",
        );
      }
    };

    // Initial update
    updateViewport();

    // Update on resize
    window.addEventListener("resize", updateViewport);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", updateViewport);
  }, []);
};

export default useViewportScale;
