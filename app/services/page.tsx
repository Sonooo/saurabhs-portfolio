import type { Metadata } from "next";
import { ServicesContent } from "./ServicesContent";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Freelance development services by Saurabh Sanap — Full-stack web apps, AI integrations, and cloud solutions. Get a quote today.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
