import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="w-4/5 max-w-7xl mx-auto">
      <header className="my-10">
        <h2 className="text-2xl lg:text-3xl font-bold">
          LLM Vikings Refund Policy
        </h2>
        <p className="font-semibold">
          Effective Date: {new Date().getFullYear()}
        </p>
        <p>
          At LLMVikings, we are committed to delivering high-quality
          masterclasses. Our refund policy is designed to ensure fairness while
          accounting for the nature of live sessions.
        </p>
      </header>
      <section className="mb-5">
        <h2 className="text-lg lg:text-xl font-bold">
          Eligibility for Refunds
        </h2>
        <ul className="list-disc">
          <li>
            Full refunds (100%) are available if a request is made at least 48
            hours prior to the start of the masterclass.
          </li>
          <li>
            After Day 1: A 50% refund is available if the request is submitted
            within 12 hours of completing the first session.
          </li>
          <li>After Day 2: No refunds will be issued.</li>
        </ul>
      </section>
      <section className="mb-5">
        <h2 className="text-lg lg:text-xl font-bold">Missed Sessions</h2>
        <ul className="list-disc">
          <li>Refunds are not provided for missed or unattended sessions.</li>
        </ul>
      </section>
      <section className="mb-5">
        <h2 className="text-lg lg:text-xl font-bold">
          Cancellations by LLMVikings
        </h2>
        <ul className="list-disc">
          <li>A full refund (100%), or</li>
          <li>Transfer to a rescheduled session.</li>
        </ul>
      </section>
      <section className="mb-5">
        <h2 className="text-lg lg:text-xl font-bold">Non-Refundable Fees</h2>
        <ul className="list-disc">
          <li>
            Certain charges, such as transaction fees from payment providers
            (e.g., Apple Pay, Google Pay, Flutterwave, Paystack), are
            non-refundable.
          </li>
        </ul>
      </section>
      <section className="mb-5">
        <h2 className="text-lg lg:text-xl font-bold">
          How to Request a Refund
        </h2>
        <ul className="list-disc">
          <li>
            Contact: Submit refund requests to{" "}
            <Link className="text-blue-700" href="mailto:support@llmvikings.us">
              support@llmvikings.us
            </Link>
          </li>
          <li>
            Details: Include your full name, payment confirmation, and reason
            for the refund.
          </li>
          <li>
            Processing Time: Approved refunds will be processed within 7–14
            business days.
          </li>
        </ul>
      </section>
      <section className="mb-5">
        <h2 className="text-lg lg:text-xl font-bold">Changes to this Policy</h2>
        <ul className="list-disc">
          <li>
            LLMVikings reserves the right to modify this Refund Policy at any
            time. Updates will be posted on our website.
          </li>
        </ul>
      </section>
    </div>
  );
}
