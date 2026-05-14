import type { Metadata } from "next";
import { WorkContent } from "./WorkContent";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Explore Saurabh Sanap's project portfolio — enterprise platforms, AI integrations, cloud-native applications, and full-stack web products.",
};

export default function WorkPage() {
  return <WorkContent />;
}
