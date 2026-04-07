import Container from '@/component/About/Container'
import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Kits For Africa",
  description:
    "Learn about the Kits For Africa mission. Discover our story, our core values, and the passionate team dedicated to delivering football equipment and hope to communities across the continent.",
  openGraph: {
    title: "About Kits For Africa | Our Mission, Vision & Impact",
    description:
      "Read the story behind Kits For Africa. See how we are transforming communities, promoting sustainability through recycled gear, and inspiring the next generation of African talent.",
    url: "https://www.kitsforafrica.org/about",
  },
};

export default function page() {
  return (
    <Container />
  )
}
