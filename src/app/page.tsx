import { Framework } from "@/components/Framework";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Problem } from "@/components/Problem";
import { Credibility } from "@/components/Credibility";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Tiers } from "@/components/Tiers";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Problem />
      <Framework />
      <HowItWorks />
      <Tiers />
      <Credibility />
      <Faq />
      <FinalCta />
    </main>
  );
}
