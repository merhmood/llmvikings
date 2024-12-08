import { Metadata } from "next/types";

import MasterclassContent from "@/components/MasterclassContent";

export const metadata: Metadata = {
  title: 'LLM Vikings | Masterclass',
  description: 'Masterclass holding by LLM vikings',
};

function page() {
  return (
    <MasterclassContent/>
  );
}

export default page;
