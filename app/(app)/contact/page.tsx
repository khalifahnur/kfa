import Container from '@/component/Contact/Container'
import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Kits For Africa",
  description:
    "Get in touch with Kits For Africa. Whether you want to donate used football kits, partner with our organization, volunteer, or simply learn more about our mission, we want to hear from you.",
  openGraph: {
    title: "Contact Kits For Africa | Partner, Donate, or Volunteer",
    description:
      "Ready to make an impact? Reach out to our team today and find out how you can contribute to providing essential sports equipment to young athletes across Africa.",
    url: "https://www.kitsforafrica.org/contact",
  },
};

export default function page() {
  return (
    <Container />
  )
}
