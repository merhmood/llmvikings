"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "../../node_modules/next/link";
import Image, { StaticImageData } from "../../node_modules/next/image";

import googleLogo from "../assets/logos/google.png";
import microsoftLogo from "../assets/logos/microsoft.png";
import nvidiaLogo from "../assets/logos/nvidia.png";
import appleLogo from "../assets/logos/apple.png";
import teslaLogo from "../assets/logos/tesla.png";
import metaLogo from "../assets/logos/meta.png";
import doubleqoute from "../assets/double-quotes.png";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const IMAGES = [
  googleLogo,
  microsoftLogo,
  nvidiaLogo,
  appleLogo,
  teslaLogo,
  metaLogo,
];

const TESTIMONIES = [
  {
    title: "Jeff Bezos",
    subtitle: "Founder of Amazon",
    description:
      "The key to achieving big things is focusing on what truly matters. AI enables us to do that by automating the mundane and scaling innovation.",
  },
  {
    title: "Elon Musk",
    subtitle: "CEO of Tesla and SpaceX",
    description:
      "AI is the new electricity. It will transform every industry and create massive opportunities for those who understand it.",
  },
  {
    title: "Satya Nadella",
    subtitle: "CEO of Microsoft",
    description:
      "AI is the most important technology that humanity is working on. It will redefine how we work, live, and relate to each other.",
  },
  {
    title: "Sundar Pichai",
    subtitle: "CEO of Google",
    description:
      "AI will have a bigger impact on humanity than electricity or fire. The potential is limitless, and it's happening now.",
  },
];

export default function HomePage() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  useEffect(() => {
    if (videoRef && videoRef.current) videoRef.current.playbackRate = 0.6;
  }, []);
  return (
    <div>
      <section className="max-w-6xl w-full lg:w-10/12 mx-auto xl:flex xl:justify-between pt-8 lg:pt-10">
        <div>
          <header>
            <Navigation />
          </header>
          <div className="w-10/12 xl:w-full mx-auto mt-14">
            <Hero />
          </div>
        </div>
        <aside className="relative w-10/12 lg:w-full h-56 lg:h-auto xl:w-9/12 xl:ml-10 mt-5 lg:mt-14 xl:mt-0 mx-auto">
          <video
            className="w-full h-full object-cover object-right rounded-3xl"
            src="/home.mp4"
            muted
            autoPlay
            loop
            ref={videoRef}
          ></video>
          <div className="absolute flex flex-col justify-end top-0 h-full w-full bg-gradient-to-b from-black/0 to-black rounded-3xl">
            <div className="flex justify-start lg:justify-end px-4 pb-6">
              <div className="flex lg:justify-end mt-5 lg:mt-20">
                <Link
                  href="/community"
                  className="bg-white text-black px-3 py-2 lg:px-5 lg:py-3 rounded-full text-sm lg:text-base font-bold"
                >
                  Join Community
                </Link>
              </div>
            </div>
          </div>
        </aside>
      </section>
      <section className="mt-20 lg:mt-44">
        <h2 className="bg-gradient-to-r from-[#000000] to-[#666666] bg-clip-text text-transparent text-base lg:text-3xl max-w-3xl w-4/5 text-center mx-auto font-semibold">
          Companies currently transforming their workforce through Artificial
          Intelligence.
        </h2>
        <div className="mt-6 lg:mt-16">
          <Slider images={IMAGES} />
        </div>
      </section>
      <section className="mt-20 lg:mt-44">
        <h2 className="text-base lg:text-3xl max-w-3xl w-4/5 text-center mx-auto font-semibold">
          What Top Professionals are Saying!
        </h2>
        <div className="flex lg:justify-center overflow-x-scroll mt-7 lg:mt-16 mobile">
          {TESTIMONIES.map((testimonyDetails, index) =>
            index == 0 ? (
              <div className="shrink-0 basis-64 ml-6" key={index}>
                <Testimony details={testimonyDetails} />
              </div>
            ) : (
              <Testimony key={index} details={testimonyDetails} />
            )
          )}
        </div>
      </section>
      <section className="mt-20 lg:mt-44 mb-20 lg:mb-36">
        <h2 className="bg-gradient-to-r from-[#666666] to-[#000000] bg-clip-text text-transparent text-lg lg:text-4xl max-w-3xl w-4/5 text-center mx-auto font-semibold">
          Ready to join the thousands of people improving their productivity
          worldwide?
        </h2>
        <div className="mt-6 lg:mt-14 w-fit mx-auto">
          <Link
            className="bg-black text-white lg:text-xl rounded-full py-2 px-4 lg:py-3 lg:px-6"
            href="/masterclass"
          >
            See Masterclass
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}

const Hero = () => (
  <div className="lg:ml-10 mt-10 lg:mt-24">
    <h2 className="text-3xl lg:text-8xl font-black lg:w-3/4">
      Making a Change
    </h2>
    <p className="mt-4 lg:mt-8 lg:text-3xl lg:w-11/12">
      Building the future one intelligence at a time through community driven
      approach.
    </p>
    <div className="flex justify-end">
      <p className="text-right mt-7 lg:mt-20 text-sm lg:text-xl lg:w-7/12">
        Thousands of people are changing the trajectory of thier carrier with AI
      </p>
    </div>
  </div>
);

const Slider = ({ images }: { images: (string | StaticImageData)[] }) => {
  const [sliderImages, setSliderImages] = useState<
    Array<string | StaticImageData>
  >([]);
  const animationFrameRef = useRef<number | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let increasedSliderImages: (string | StaticImageData)[] = [];

    for (let i = 0; i < 20; i++) {
      increasedSliderImages = [...increasedSliderImages, ...images];
    }

    setSliderImages(increasedSliderImages);
  }, []);

  let position = 0;
  const scrollSlider = () => {
    const slider = sliderRef.current;

    position -= 1;

    if (!slider) return;

    if (slider) {
      slider.style.transform = `translateX(${position}px) translateZ(0)`;
      slider.style.willChange = "transform";

      // When scroll reaches the end, reset to the beginning to create a seamless loop
      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0;
      }
    }

    // Store the requestAnimationFrame ID so we can cancel it if needed
    animationFrameRef.current = requestAnimationFrame(scrollSlider);
  };

  useEffect(() => {
    // Start the scrolling animation
    animationFrameRef.current = requestAnimationFrame(scrollSlider);

    // Cleanup: Cancel the animation when the component unmounts
    return () => cancelAnimationFrame(animationFrameRef.current as number);
  }, []); // Re-run if `isPaused` state changes

  return (
    <div className="flex flex-col items-center">
      <div className="w-full overflow-hidden whitespace-nowrap">
        <div className="inline-flex" ref={sliderRef}>
          {sliderImages.length > 0 &&
            sliderImages.map((src, index) => (
              <div className="relative w-28 h-20 lg:w-56 lg:h-32" key={index}>
                <Image
                  src={src}
                  alt={`Slide ${index}`}
                  fill
                  objectFit="contain"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

const Testimony = ({
  details,
}: {
  details: { title: string; subtitle: string; description: string };
}) => (
  <div className="shrink-0 basis-64 bg-gray-50 py-6 pr-2 rounded-3xl mr-6">
    <h2 className="text-xl ml-6 font-medium">{details.title}</h2>
    <h3 className="ml-6 font-bold text-gray-500">{details.subtitle}</h3>
    <div className="relative w-16 h-16">
      <Image src={doubleqoute} alt="quotes" fill objectFit="contain" />
    </div>
    <p className="text-sm ml-6">{details.description}</p>
  </div>
);
