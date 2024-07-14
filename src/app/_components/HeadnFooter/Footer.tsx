import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black py-4 text-white md:bg-gray-200 md:text-black">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          Copyright © 2024 Sorna Capital - Sorna Capital Management LLC. All
          rights reserved. -{" "}
          <Link href="https://somacap.com/disclaimers" className="underline">
            Website Disclaimers
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
