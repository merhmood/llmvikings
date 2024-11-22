import React from "react";
import Link from "../../node_modules/next/link";

const Footer = () => {
  return (
    <div className="bg-gray-50 py-6">
      <div className="flex flex-col lg:flex-row justify-between items-center w-4/5 max-w-6xl mx-auto">
        <h2 className="text-xl lg:text-2xl font-semibold mb-3 lg:mb-0">
          &copy; LLM Vikings
        </h2>
        <ul className="flex gap-6 lg:text-xl">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/masterclass">Masterclass</Link>
          </li>
          <li>
            <Link href="/community">Community</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
