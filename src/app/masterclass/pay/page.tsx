"use client";

import React from "react";
import Image from "../../../../node_modules/next/image";

import masterclassImage from "@/assets/masterclass.jpg";
//import Link from "../../../../node_modules/next/link";

export default function page() {
  return (
    <div className="grid place-items-center h-screen">
      <section className="lg:flex lg:flex-row-reverse h-fit justify-center w-5/6 max-w-7xl">
        <div className="lg:mt-10 xl:mt-20">
          <div className="lg:flex lg:items-center gap-2">
            <div className="relative h-32 w-40 shrink-0">
              <Image
                src={masterclassImage}
                alt="masterclass"
                fill
                objectFit="cover"
                className="rounded-3xl"
              />
            </div>
            <h2 className="font-bold text-lg lg:text-2xl mt-3 lg:mt-0 lg:ml-4">
              Master the Art of Prompt Engineering: Unlock AI’s Full Potential
            </h2>
          </div>
          <div className="lg:w-96 mt-2 lg:mt-5 mx-auto lg:mx-0 text-sm lg:text-base">
            <p>
              Discover the power of AI with our masterclass—learn prompt
              crafting, enhance results, and build creative solutions
              seamlessly.
            </p>
          </div>
        </div>
        <div className="w-full mt-5 lg:mt-10">
          <form className="w-full" onSubmit={(e) => e.preventDefault()}>
            <label
              className="block lg:w-3/5 xl:w-2/4 mx-auto pl-1 mt-4"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              type="text"
              placeholder="jondoe@gmail.com"
              className="block border-2 w-full lg:w-3/5 xl:w-2/4 mx-auto h-10 rounded-xl box-border px-5 py-5 mt-1"
            />
            <label
              className="block lg:w-3/5 xl:w-2/4 mx-auto pl-1 mt-4"
              htmlFor="email"
            >
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="block border-2 w-full lg:w-3/5 xl:w-2/4 mx-auto h-10 rounded-xl box-border px-5 py-5 mt-1"
            />
            <h2 className="w-full lg:w-3/5 xl:w-2/4 text-right mx-auto mt-4 font-bold">
              <span className="text-2xl text-black/75">Amount:</span>
              <span className="text-3xl ml-3">$50</span>
            </h2>
            <div className="w-full lg:w-3/5 xl:w-2/4 mt-7 lg:mt-10 mx-auto">
              <button className="block bg-black text-white lg:text-xl rounded-full py-1.5 px-4 lg:py-2 lg:px-6 w-full">
                Pay
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
