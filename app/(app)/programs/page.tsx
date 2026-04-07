import Container from '@/component/Program/Container'
import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Programs | Kits For Africa",
  description:
    "Explore the impactful programs driven by Kits For Africa. From kit collection drives and distribution missions to grassroots tournaments and youth mentorship initiatives.",
  openGraph: {
    title: "Kits For Africa Programs | Grassroots Football & Community Impact",
    description:
      "Dive into our core initiatives. Learn how our kit distribution, educational partnerships, and sports programs are creating sustainable opportunities for African youth on and off the pitch.",
    url: "https://www.kitsforafrica.org/programs",
  },
};

export default function page() {
  return (
    <Container />
  )
}
