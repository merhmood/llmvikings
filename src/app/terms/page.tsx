import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="w-4/5 max-w-7xl mx-auto">
      <header className="my-10">
        <h2 className="text-2xl lg:text-3xl font-bold">
          LLM Vikings Terms of Service
        </h2>
        <p className="font-semibold">
          Effective Date: {new Date().getFullYear()}
        </p>
        <p>
          Welcome to LLMVikings! By registering for our masterclasses, you agree
          to these Terms of Service. Please read them carefully before
          participating in any of our services.
        </p>
      </header>
      <section className="mb-5">
        <h2 className="text-lg lg:text-xl font-bold">Masterclass Access</h2>
        <ul className="list-disc">
          <li>
            Access to live masterclasses is granted only to registered
            participants.
          </li>
          <li>
            Sharing login details, session links, or materials with others is
            strictly prohibited.
          </li>
          <li>
            Recordings (if available) will be accessible for a limited time
            after the masterclass ends (7 days).
          </li>
        </ul>
      </section>
      <section className="mb-5">
        <h2 className="text-lg lg:text-xl font-bold">Refund Policy</h2>
        <ul className="list-disc">
          <li>
            Refunds are governed by the terms outlined in our{" "}
            <Link className="text-blue-700" href="/refund">
              Refund Policy
            </Link>
            .
          </li>
        </ul>
      </section>
      <section className="mb-5">
        <h2 className="text-lg lg:text-xl font-bold">Intellectual Property</h2>
        <ul className="list-disc">
          <li>
            All content, including slides, videos, handouts, and other materials
            provided during the masterclass, is the intellectual property of
            LLMVikings.
          </li>
          <li>
            Reproduction, redistribution, or resale of these materials without
            explicit written permission is prohibited.
          </li>
        </ul>
      </section>
      <section className="mb-5">
        <h2 className="text-lg lg:text-xl font-bold">
          Privacy and Data Protection
        </h2>
        <ul className="list-disc">
          <li>
            LLMVikings collects and processes personal data in compliance with
            GDPR and CCPA.
          </li>
          <li>
            By using our services, you consent to the collection, use, and
            storage of your personal data as outlined in our{" "}
            <Link className="text-blue-700" href="/privacy">
              Privacy Policy.
            </Link>{" "}
          </li>
        </ul>
      </section>
      <section className="mb-5">
        <h2 className="text-lg lg:text-xl font-bold">
          Limitation of Liability
        </h2>
        <ul className="list-disc">
          <li>
            LLMVikings is not liable for technical issues, including but not
            limited to internet disruptions, that prevent your participation in
            the masterclass.
          </li>
          <li>
            LLMVikings shall not be responsible for any indirect or
            consequential loss arising from the use of our services.
          </li>
        </ul>
      </section>
      <section className="mb-5">
        <h2 className="text-lg lg:text-xl font-bold">Modifications to Terms</h2>
        <ul className="list-disc">
          <li>
            LLMVikings reserves the right to modify these Terms of Service at
            any time. Updates will be communicated via our website.
          </li>
        </ul>
      </section>
      <section className="mb-5">
        <h2 className="text-lg lg:text-xl font-bold">Contact Information</h2>
        <ul className="list-disc">
          <li>
            Email:{" "}
            <Link className="text-blue-700" href="mailto:support@llmvikings.us">
              support@llmvikings.us
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
