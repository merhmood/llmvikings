"use client";

import React, { useEffect, useState } from "react";
import { gabarito } from "@/app/constants/font";
import Link from "../../node_modules/next/link";
import { usePathname } from "../../node_modules/next/navigation";
import Modal from "./Modal";

const NAVIGATIONS = [
  { name: "Home", link: "/" },
  { name: "Masterclass", link: "/masterclass" },
  { name: "Community", link: "/community" },
  { name: "About", link: "/about" },
];

const Navigation = () => {
  const currentPath = usePathname();

  const setActive = (href: string) => href === currentPath;
  return (
    <div>
      <DesktopNav setActive={setActive} />
      <MobileNav />
    </div>
  );
};

export default Navigation;

const MobileNav = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    // Enable scrolling between page changes
    const body = document.querySelector("body");
    body?.removeAttribute("style");
  });

  return (
    <div className="fixed top-0 w-full lg:hidden bg-[white]/40 backdrop-blur-xl py-4 z-40">
      <div className="flex w-full items-center justify-between">
        <div className="w-11/12">
          <h2 className={`${gabarito.className} ml-8 text-lg font-semibold`}>
            LLM Vikings
          </h2>
        </div>
        <div
          className="flex justify-end"
          onClick={() => setShowMobileMenu(true)}
        >
          <div className="mr-6 cursor-pointer ">
            <div className="w-5 h-0.5 bg-black rounded-full"></div>
            <div className="w-3 h-0.5 bg-gray-800 mt-1 rounded-full"></div>
            <div className="w-4 h-0.5 bg-gray-300 mt-1 rounded-full"></div>
          </div>
        </div>
      </div>

      {showMobileMenu && (
        <Modal
          showMobileMenu={showMobileMenu}
          onShowMobileMenu={setShowMobileMenu}
        />
      )}
    </div>
  );
};

const DesktopNav = ({
  setActive,
}: {
  setActive: (href: string) => boolean;
}) => (
  <div className="hidden lg:flex justify-between items-center gap-16">
    <div>
      <h2 className={`${gabarito.className} text-lg lg:text-2xl font-bold`}>
        LLM Vikings
      </h2>
    </div>
    <div>
      <ul className="flex items-center gap-5 lg:text-xl">
        {NAVIGATIONS.map((navigation, index) => (
          <li key={index}>
            <Link
              href={navigation.link}
              className={`${setActive(navigation.link) && "font-bold"}`}
            >
              {navigation.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);
