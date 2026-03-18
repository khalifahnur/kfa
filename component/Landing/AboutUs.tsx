"use client";
import { ArrowUpRight} from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import Link from "next/link";

const FontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500&display=swap');
    .font-playfair { font-family: 'Playfair Display', serif; }
    .font-dm       { font-family: 'DM Sans', sans-serif; }

    /* image parallax-ish hover */
    .about-img-wrap { overflow: hidden; }
    .about-img-wrap img {
      transition: transform 0.7s cubic-bezier(.22,1,.36,1);
    }
    .about-img-wrap:hover img { transform: scale(1.05); }

    /* pill hover */
    .about-cta:hover { gap: 16px; }

    /* value card hover bar */
    .value-card {
      position: relative;
      overflow: hidden;
    }
    .value-card::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 2px;
      background: #c8e63a;
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.4s cubic-bezier(.22,1,.36,1);
    }
    .value-card:hover::before { transform: scaleX(1); }
  `}</style>
);


export default function AboutUs() {
  return (
    <section className="font-dm bg-[#f8f4ee] overflow-hidden">
      <FontLoader />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-24 lg:py-32">

        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          <ScrollReveal>
            <div className="flex flex-col">

              <div className="flex items-center gap-3 mb-6">
                <span className="block w-8 h-px bg-[#1a5c38]" />
                <span className="text-[11px] font-medium tracking-[.18em] uppercase text-[#1a5c38]">
                  Who We Are
                </span>
              </div>

              <h2 className="font-playfair text-[clamp(36px,5vw,58px)] font-bold leading-[1.05] text-[#0d0d0d] mb-8">
                Football as a<br />
                pathway to{" "}
                <span className="italic text-[#c8e63a]">opportunity</span>
              </h2>

              <p className="text-[16px] font-light leading-[1.85] text-[#3a3530] mb-6 max-w-[500px]">
                We use football to improve educational outcomes and life
                opportunities for children and young people in Kenya —
                delivering structured programmes that combine sport, learning,
                and mentorship.
              </p>
              <p className="text-[15px] font-light leading-[1.8] text-[#6b6560] mb-12 max-w-[500px]">
                Child protection and environmental sustainability sit at the
                heart of everything we do, ensuring every young person
                participates safely and every resource is used responsibly.
              </p>
              
              <Link
                href="/about"
                className="about-cta w-fit inline-flex items-center gap-3 bg-[#c8e63a] text-[#0d0d0d] text-[13px] font-semibold tracking-widest uppercase px-7 py-4 transition-all duration-200 hover:bg-[#d9f54a]"
              >
                About Us <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>

          <div className="relative h-[520px] lg:h-[620px] hidden md:block">
            <ScrollReveal
              delay={0.15}
              className="about-img-wrap absolute left-0 top-0 w-[82%] h-[82%] shadow-xl"
            >
              <img
                src="/assets/img_1.jpg"
                alt="Young players in training"
                className="w-full h-full object-cover"
              />
            </ScrollReveal>
            <ScrollReveal
              delay={0.35}
              className="about-img-wrap absolute right-0 bottom-0 w-[68%] h-[68%] shadow-xl"
            >
              <img
                src="/assets/img_3.jpg"
                alt="Football kit distribution"
                className="w-full h-full object-cover"
              />
            </ScrollReveal>
            <div className="absolute top-[10%] right-[44%] w-16 h-16 border-2 border-[#c8e63a]/40 -z-10" />
            <div className="absolute bottom-[24%] left-[4%]  w-10 h-10 bg-[#c8e63a]/20 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}