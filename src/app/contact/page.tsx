import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="w-4/5 max-w-7xl mx-auto">
      <header className="my-10">
        <h2 className="text-2xl lg:text-3xl font-bold">
          LLM Vikings Contact Information
        </h2>
      </header>
      <section className="mb-5">
        <ul className="list-disc">
          <li>
            Email:{" "}
            <Link className="text-blue-700" href="mailto:contact@llmvikings.us">
              contact@llmvikings.us
            </Link>
          </li>
          <li>Address: 2261 Market Street #22750 San Francisco, CA 94114</li>
        </ul>
      </section>
    </div>
  );
}
