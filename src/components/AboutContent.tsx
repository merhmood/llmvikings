"use client";

import { useEffect, useRef } from "react";
import Image from "../../node_modules/next/image";
import { StaticImageData } from "../../node_modules/next/image";

import blogImage1 from "@/assets/simplicity.jpg";
import blogImage2 from "@/assets/accessibility.jpg";
import blogImage3 from "@/assets/empowerment.jpg";
import Footer from "./Footer";
import Navigation from "./Navigation";
import Link from "../../node_modules/next/link";

const BLOG = [
  {
    image: blogImage1,
    title: "Simplicity",
    paragraph:
      "We strive to demystify emerging technologies, ensuring that everyone, regardless of background, can easily understand and utilize the latest advancements for personal and professional growth.",
  },
  {
    image: blogImage2,
    title: "Accessibility",
    paragraph:
      "Our goal is to break down the barriers to new technologies, providing straightforward solutions that empower individuals and businesses to adopt innovations without confusion or complexity.",
  },
  {
    image: blogImage3,
    title: "Empowerment",
    paragraph:
      "By making cutting-edge technologies accessible and simple, we enable people to harness their potential, transforming their ideas into reality with the tools of tomorrow.",
  },
];

const AboutContent = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  useEffect(() => {
    if (videoRef && videoRef.current) videoRef.current.playbackRate = 0.8;
  }, []);

  return (
    <div>
      <section className="max-w-6xl mx-auto pt-10">
        <div>
          <header>
            <Navigation />
          </header>
        </div>
      </section>
      <section className="relative max-w-6xl h-[calc(100vh-30vh)] lg:h-[calc(100vh-20vh)] mx-auto mt-5 lg:mt-10">
        <video
          className="w-full h-full object-cover object-center lg:object-right-top lg:rounded-3xl"
          src="/about.mp4"
          muted
          autoPlay
          loop
          ref={videoRef}
        ></video>
        <div className="absolute flex flex-col justify-end top-0 h-full w-full bg-gradient-to-b from-black/0 to-black lg:rounded-3xl">
          <div className="flex justify-start pl-6 pb-6 lg:pl-10 lg:pb-10">
            <p className="w-4/5 lg:w-3/6 text-white text-lg lg:text-3xl">
              Our mission is to make emerging technologies simple and accessible
              for everyone
            </p>
          </div>
        </div>
      </section>
      <section className="lg:mt-24">
        {BLOG.map((item, index) =>
          (index + 1) % 2 !== 0 ? (
            <BlogItem key={index} item={item} />
          ) : (
            <BlogItemWithShade key={index} item={item} />
          )
        )}
      </section>
      <section className="mt-5 lg:mt-16 mb-20 lg:mb-36 w-4/5 max-w-4xl px-5 lg:px-40 mx-auto border-t border-gray-200 pt-10 lg:pt-20">
        <div>
          <h2 className="text-xl lg:text-4xl font-semibold text-center">
            Building a strong career has never been more accessible
          </h2>
          <p className="text-xs lg:text-base text-center mt-5 lg:mt-10">
            Generative AI and LLMs are revolutionizing career-building by
            providing personalized guidance, real-time feedback, and tailored
            learning resources. These technologies empower individuals to
            upskill at their own pace, explore new paths, and connect with
            opportunities suited to their strengths.
          </p>
          <div className="mt-8 lg:mt-14 w-fit mx-auto">
            <Link
              className="bg-black text-white lg:text-xl rounded-full py-2 px-4 lg:py-3 lg:px-6"
              href="/community"
            >
              See Community
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

const BlogItem = ({
  item,
}: {
  item: { image: string | StaticImageData; title: string; paragraph: string };
}) => (
  <div className="lg:flex items-center py-16 lg:py-28 w-4/5 max-w-3xl mx-auto">
    <div className="relative w-full lg:w-3/5 h-48 lg:h-96">
      <Image
        src={item.image}
        alt={item.title}
        objectFit="cover"
        fill
        className="rounded-2xl"
      />
    </div>
    <div className="pt-6 lg:pl-24 lg:w-5/6">
      <h2 className="text-2xl lg:text-4xl font-bold">{item.title}</h2>
      <p className="text-sm lg:text-base mt-2">{item.paragraph}</p>
    </div>
  </div>
);

const BlogItemWithShade = ({
  item,
}: {
  item: { image: string | StaticImageData; title: string; paragraph: string };
}) => (
  <div className="py-16 lg:py-28 bg-gray-50/80">
    <div className="lg:flex flex-row-reverse items-center w-4/5 max-w-3xl mx-auto">
      <div className="relative w-full lg:w-3/5 h-48 lg:h-96">
        <Image
          src={item.image}
          alt={item.title}
          objectFit="cover"
          fill
          className="rounded-2xl"
        />
      </div>
      <div className="pt-6 lg:pr-24 lg:w-5/6">
        <h2 className="text-2xl lg:text-4xl font-bold">{item.title}</h2>
        <p className="text-sm lg:text-base mt-2">{item.paragraph}</p>
      </div>
    </div>
  </div>
);

export default AboutContent;
