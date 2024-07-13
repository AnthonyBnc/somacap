import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-4">
      <div className="container mx-auto text-center text-gray-600">
        <p className="text-sm">
          Copyright © 2024 Sorna Capital - Sorna Capital Management LLC. All
          rights reserved. -{" "}
          <Link
            href="https://somacap.com/disclaimers"
            className="text-gray-500 underline"
          >
            Website Disclaimers
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
