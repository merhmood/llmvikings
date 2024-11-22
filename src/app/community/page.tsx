import Image, { StaticImageData } from "../../../node_modules/next/image";
import Link from "../../../node_modules/next/link";
import { Metadata } from "../../../node_modules/next/types";

import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import aboutImage from "../../assets/community.jpg";
import innovationImage from "../../assets/innovation.png";
import collaborationImage from "../../assets/collaboration.png";
import knowledgeImage from "../../assets/knowledge.png";

export const metadata: Metadata = {
  title: "LLM Vikings | Community",
  description: "Join the biggest AI community on the planet",
};

const INFOS = [
  {
    image: innovationImage,
    title: "Innovation",
    paragraph:
      "Driving groundbreaking advancements through collaborative efforts, fostering AI solutions that transform industries and lives.",
  },
  {
    image: collaborationImage,
    title: "Collaboration",
    paragraph:
      "Building a united AI community where diverse minds connect, share insights, and solve global challenges together.",
  },
  {
    image: knowledgeImage,
    title: "Knowledge",
    paragraph:
      "Empowering continuous learning by exchanging ideas, ensuring progress and inclusivity in the ever-evolving AI landscape.",
  },
];

export default function page() {
  return (
    <div>
      <section className="max-w-6xl full mx-auto lg:pt-10">
        <div>
          <header>
            <Navigation />
          </header>
        </div>
      </section>
      <section className="mt-16 lg:mt-28 w-5/6 max-w-6xl mx-auto">
        <Hero />
        <HeroMobile />
      </section>
      <section className="mt-14 lg:mt-36">
        <div className="flex flex-col lg:flex-row lg:justify-center gap-10">
          {INFOS.map((info, index) => (
            <Info key={index} info={info} />
          ))}
        </div>
      </section>
      <section className="mt-20 lg:mt-36 mb-20 lg:mb-36">
        <h2 className="text-base lg:text-3xl max-w-2xl w-4/5 text-center mx-auto font-semibold">
          Join Our Community: Unlock the Tools You Need to Shape and Transform
          Your Future
        </h2>
        <p className="text-sm lg:text-base text-center mt-3 lg:mt-4 max-w-3xl w-11/12 mx-auto">
          Become part of a dynamic community focused on simplifying emerging
          technologies, giving you the resources to create, innovate, and lead
          in a rapidly changing world.
        </p>
        <div className="w-fit mt-7 lg:mt-10 mx-auto">
          <Link
            className="bg-black text-white lg:text-xl rounded-full py-1.5 px-4 lg:py-3 lg:px-6"
            href="https://discord.gg/xFyEMM9yeX"
            target="_blank"
          >
            Join Discord
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}

const Hero = () => (
  <div className="hidden lg:block">
    <h2 className="text-lg lg:text-3xl font-medium max-w-2xl text-center mx-auto">
      Empowering innovation, collaboration, and knowledge sharing to shape the
      future of AI.
    </h2>
    <div className="w-fit mt-7 lg:mt-10 mx-auto">
      <Link
        className="bg-black text-white lg:text-xl rounded-full py-1.5 px-4 lg:py-3 lg:px-6"
        href="https://discord.gg/xFyEMM9yeX"
        target="_blank"
      >
        Join Discord
      </Link>
    </div>
    <div className="mt-8 lg:mt-16">
      <div className="relative h-[calc(100vh-25vh)]">
        <Image
          src={aboutImage}
          alt="community"
          fill
          objectFit="cover"
          className="rounded-2xl lg:rounded-3xl"
        />
      </div>
    </div>
  </div>
);

const HeroMobile = () => (
  <div className="relative">
    <div className="lg:hidden">
      <div className="mt-8 lg:mt-16">
        <div className="relative h-[calc(100vh-35vh)]">
          <Image
            src={aboutImage}
            alt="community"
            fill
            objectFit="cover"
            className="rounded-3xl"
          />
        </div>
      </div>
      <div className="absolute flex flex-col justify-end top-0 h-full w-full bg-gradient-to-b from-black/0 to-black rounded-3xl">
        <div className="mb-8 ml-6">
          <h2 className="text-lg lg:text-3xl max-w-2xl mx-auto text-white mr-10">
            Empowering innovation, collaboration, and knowledge sharing to shape
            the future of AI.
          </h2>
          <div className="w-fit mt-6 lg:mt-10">
            <Link
              className="bg-white text-black lg:text-xl rounded-full py-1.5 px-4 lg:py-3 lg:px-6 font-semibold"
              href="https://discord.gg/xFyEMM9yeX"
              target="_blank"
            >
              Join Discord
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Info = ({
  info,
}: {
  info: { image: string | StaticImageData; title: string; paragraph: string };
}) => (
  <div className=" basis-4/5 lg:basis-80 shrink-0 mt-10 lg:mt-0">
    <div className="relative h-16 w-16 mx-auto mb-2 lg:mb-6">
      <Image src={info.image} alt={info.title} fill objectFit="contain" />
    </div>
    <h2 className="text-xl lg:text-3xl font-bold text-center">{info.title}</h2>
    <p className="w-4/5 lg:w-full mx-auto text-sm lg:text-base text-center mt-2 lg:mt-4">
      {info.paragraph}
    </p>
  </div>
);
