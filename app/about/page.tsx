import type { Metadata } from "next";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Saurabh Sanap — Full Stack Developer & AI Engineer based in Pune, India. Career timeline, philosophy, skills, and interests.",
};

export default function AboutPage() {
  return <AboutContent />;
}
