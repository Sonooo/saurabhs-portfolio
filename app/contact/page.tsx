import type { Metadata } from "next";
import { ContactContent } from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Saurabh Sanap for senior engineering roles or freelance projects. Based in Pune, India. Typically responds within 24 hours.",
};

export default function ContactPage() {
  return <ContactContent />;
}
