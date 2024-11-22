import { Metadata } from "../../../node_modules/next/types";

import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "LLM Vikings | About",
  description: "Everything you need to know about LLM Vikings",
};

export default function page() {
  return <AboutContent />;
}
