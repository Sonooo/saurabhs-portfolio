import { Hero } from "@/components/sections/Hero";
import { SocialProof } from "@/components/sections/SocialProof";
import { WhatIDo } from "@/components/sections/WhatIDo";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { SkillsSnapshot } from "@/components/sections/SkillsSnapshot";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTABanner } from "@/components/sections/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SocialProof />
      <WhatIDo />
      <FeaturedProjects />
      <SkillsSnapshot />
      <Testimonials />
      <CTABanner />
    </>
  );
}
