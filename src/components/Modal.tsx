import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "../../node_modules/next/link";

const Modal = ({
  showMobileMenu,
  onShowMobileMenu,
}: {
  showMobileMenu: boolean;
  onShowMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const container = document.createElement("div");

  useEffect(() => {
    const modal = document.getElementById("modal");
    if (modal && container) modal.appendChild(container);

    const body = document.querySelector("body");
    if (body) body.style.overflow = "hidden";

    return () => {
      removeModal(modal);
    };
  }, [showMobileMenu]);

  const children = (
    <div className={`fixed z-50 top-0 w-full h-screen bg-white slide-down`}>
      <div className="flex justify-end pt-5 pr-5">
        <div className="w-96">
          <div
            className="relative flex flex-col items-end cursor-pointer"
            onClick={() => {
              const body = document.querySelector("body");
              body?.removeAttribute("style");
              onShowMobileMenu(false);
            }}
          >
            <div className="absolute bg-black w-4 h-0.5 rounded-full -rotate-45"></div>
            <div className="absolute bg-black w-4 h-0.5 rounded-full rotate-45"></div>
          </div>
          <ul className="flex flex-col gap-3 mt-8 ml-10 text-2xl font-bold">
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
    </div>
  );
  return createPortal(children, container as HTMLDivElement);
};

const removeModal = (modal: HTMLElement | null) => {
  if (modal?.lastChild)
    while (modal.hasChildNodes()) modal.removeChild(modal.lastChild);
};
export default Modal;
