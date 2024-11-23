import React from "react";
import { Metadata } from "../../../node_modules/next/types";
import Image from "../../../node_modules/next/image";
import Link from "../../../node_modules/next/link";

import Navigation from "@/components/Navigation";
import masterclassImage from "@/assets/masterclass.jpg";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "LLM Vikings | Masterclass",
  description: "Masterclass holding by LLM vikings",
};

// What you'll learn
const WYL = [
  "Craft clear, concise, and effective prompts tailored to different AI tasks.",
  "Techniques to refine prompts for accurate, relevant, and high-quality responses.",
  "Learn multi-step, conditional, and dynamic prompt designs for solving complex problems.",
  "Use prompts for storytelling, content creation, brainstorming, and more.",
  "Explore practical applications across industries such as marketing, customer service, education, and development.",
  "Create ethical and inclusive prompts to minimize biases in AI-generated outputs.",
  "Solve real-world challenges and gain actionable insights with guided exercises.",
];

// Skills you'll gain
const SYG = [
  "Foundations of Prompt Engineering",
  "Advanced Prompt Structuring",
  "Optimization Techniques",
  "Use Case Specialization",
  "Iterative Prompt Testing",
];

function page() {
  return (
    <div>
      <section className="max-w-6xl mx-auto pt-10">
        <div>
          <header>
            <Navigation />
          </header>
        </div>
      </section>
      <section className="lg:mt-7">
        <div className="bg-gray-50 py-16 lg:py-28">
          <div className="lg:flex lg:justify-center items-center lg:w-fit lg:mx-auto">
            <div className="relative ml-6 lg:ml-0 w-40 h-32 lg:w-60 lg:h-48">
              <Image
                src={masterclassImage}
                alt="masterclass"
                fill
                objectFit="cover"
                className="rounded-3xl"
              />
            </div>
            <div className="pl-6 mt-5 lg:mt-0 w-11/12 lg:w-6/12 lg:ml-12">
              <h2 className="text-2xl lg:text-3xl font-bold">
                Master the Art of Prompt Engineering: Unlock AI’s Full Potential
              </h2>
              <p className="mt-2 lg:mt-4">
                Discover the power of AI with our masterclass—learn prompt
                crafting, enhance results, and build creative solutions
                seamlessly.
              </p>
              <div className="font-bold my-4 lg:my-6">
                <p>Duration: 3 days</p>
                <p>Starts: 27th of December 2024</p>
                <p>Locations: Google Meet and Zoom</p>
              </div>
              <div className="w-fit mt-5">
                <Link
                  className="bg-black text-white lg:text-xl rounded-full py-1.5 px-4 lg:py-3 lg:px-6"
                  href="/masterclass/pay"
                >
                  Enroll
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-14 lg:mt-16 lg:max-w-6xl mx-auto">
        <h2 className="text-xl lg:text-3xl font-bold ml-10">
          Skills you&apos;ll gain
        </h2>
        <div className="mt-0 lg:mt-7">
          <ul className="list-disc flex overflow-x-scroll lg:flex-wrap lg:w-full gap-2 lg:gap-5 lg:ml-16 mobile pr-2 lg:pr-0">
            {SYG.map((text, index) => (
              <div
                className={`basis-fit shrink-0 ${
                  index === 0 && "ml-14 lg:ml-0"
                }`}
                key={index}
              >
                <ListItem border={true} text={text} />
              </div>
            ))}
          </ul>
        </div>
      </section>
      <section className="mt-12 lg:mt-14 mb-16 lg:mb-36 w-4/5 max-w-6xl mx-auto">
        <h2 className="text-xl lg:text-3xl font-bold">
          What you&apos;ll learn
        </h2>
        <div className="mt-2 lg:mt-3">
          <ul className="lg:flex lg:flex-wrap lg:w-full ml-10">
            {WYL.map((text, index) => (
              <div key={index} className="lg:basis-3/6 shrink-0 lg:pr-40">
                <ListItem border={false} text={text} />
              </div>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
}

const ListItem = ({ border, text }: { border: boolean; text: string }) =>
  border ? (
    <li className="list-none px-5 py-3 text-xs w-fit lg:text-base mt-4 lg:mt-0 bg-[#f7f7f7] border border-[#b6b5b5] rounded-full">
      {text}
    </li>
  ) : (
    <li className="list-disc mt-4 text-sm lg:text-base">{text}</li>
  );

export default page;
