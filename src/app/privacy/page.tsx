import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="w-4/5 max-w-7xl mx-auto">
      <header className="my-10">
        <h2 className="text-2xl lg:text-3xl font-bold">
          LLM Vikings Privacy Policy
        </h2>
        <p className="font-semibold">
          Effective Date: {new Date().getFullYear()}
        </p>
        <p>
          At LLMVikings, your privacy is our priority. This Privacy Policy
          explains how we collect, use, and protect your data in compliance with
          GDPR and CCPA.
        </p>
      </header>
      <section className="mb-5">
        <h2 className="text-lg lg:text-xl font-bold">
          What Information We Collect
        </h2>
        <ul className="list-disc">
          <li>Personal Data: Name, email address, and payment details.</li>
          <li>
            Technical Data: IP address, device type, browser, and activity logs.
          </li>
          <li>
            Masterclass Data: Attendance logs and chat messages during sessions.
          </li>
        </ul>
      </section>
      <section className="mb-5">
        <h2 className="text-lg lg:text-xl font-bold">How We Use Your Data</h2>
        <ul className="list-disc">
          <li>
            Service Delivery: To facilitate registration, deliver live sessions,
            and provide post-session .
          </li>
          <li>
            Improvement: To analyze session participation and enhance our
            offerings.
          </li>
          <li>
            Marketing (with Consent): To inform you about future masterclasses
            or promotions.
          </li>
        </ul>
      </section>
      <section className="mb-5">
        <h2 className="text-lg lg:text-xl font-bold">
          Legal Basis for Processing (GDPR)
        </h2>
        <ul className="list-disc">
          <li>Contractual Obligation: To fulfill services you purchase.</li>
          <li>Legitimate Interest: To improve services.</li>
          <li>Consent: For optional marketing communications.</li>
        </ul>
      </section>
      <section className="mb-5">
        <h2 className="text-lg lg:text-xl font-bold">Your Rights (GDPR)</h2>
        <ul className="list-disc">
          <li>Access: Request a copy of your personal data.</li>
          <li>Rectification: Correct inaccuracies in your data.</li>
          <li>Erasure: Request data deletion (Right to be Forgotten).</li>
          <li>Objection: Opt-out of certain data uses.</li>
        </ul>
      </section>
      <section className="mb-5">
        <h2 className="text-lg lg:text-xl font-bold">Your Rights (CCPA)</h2>
        <ul className="list-disc">
          <li>Access: Know what personal data we collect, use, and share.</li>
          <li>Deletion: Request the deletion of personal data.</li>
          <li>Opt-Out of Sale: LLMVikings does not sell personal data.</li>
        </ul>
      </section>
      <section className="mb-5">
        <h2 className="text-lg lg:text-xl font-bold">Cookies and Tracking</h2>
        <ul className="list-disc">
          <li>
            GDPR Compliance: A cookie banner will collect explicit consent for
            non-essential cookies.
          </li>
          <li>
            GDPR Compliance: A cookie banner will collect explicit consent for
            non-essential cookies.
          </li>
        </ul>
      </section>
      <section className="mb-5">
        <h2 className="text-lg lg:text-xl font-bold">Data Retention</h2>
        <ul className="list-disc">
          <li>
            Personal data is stored securely and retained only as long as
            necessary to provide services.
          </li>
          <li>
            Payment information is processed by PCI DSS-compliant third-party
            providers.
          </li>
        </ul>
      </section>
      <section className="mb-5">
        <h2 className="text-lg lg:text-xl font-bold">Data Sharing</h2>
        <ul className="list-disc">
          <li>
            Your personal data is never sold. Limited data may be shared with
            trusted third-party service providers to facilitate payment
            processing or session hosting.
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
          <li>Address: 2261 Market Street #22750 San Francisco, CA 94114</li>
        </ul>
      </section>
    </div>
  );
}
