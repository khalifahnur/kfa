"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const FontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500&display=swap');
    .font-playfair { font-family: 'Playfair Display', serif; }
    .font-dm       { font-family: 'DM Sans', sans-serif; }

    /* Animated underline for links */
    .nav-link {
      position: relative;
      display: inline-block;
      width: fit-content;
      padding-bottom: 2px;
    }
    .nav-link::after {
      content: '';
      position: absolute;
      bottom: -2px; 
      left: 0;
      width: 0; 
      height: 1px;
      background: #c8e63a;
      transition: width 0.3s cubic-bezier(.22,1,.36,1);
    }
    .nav-link:hover::after { width: 100%; }
    .nav-link:hover { color: #c8e63a; }
  `}</style>
);

export default function Footer() {
  const footerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [150, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);

  return (
    <>
      <FontLoader />
      <footer
        ref={footerRef}
        className="relative bg-secondary overflow-hidden flex flex-col font-dm"
      >
        <div className="relative z-20 bg-blue-950 rounded-b-[40px] md:rounded-b-[80px] w-full pt-20 pb-10 px-6 md:px-12 lg:px-16 shadow-2xl shadow-black/20">
          <div className="max-w-7xl mx-auto">
            
            <div className="flex flex-col lg:flex-row justify-between gap-y-16 gap-x-12 mb-16">
              <div className="w-full lg:w-[30%] flex flex-col gap-y-6">
                <Link href="/" className="inline-block w-fit group">
                  <div className="bg-white/80 transition-transform duration-300 group-hover:scale-105 shadow-lg">
                    <Image
                      src="/kfa_logo.png"
                      alt="Kits For Africa Logo"
                      width={120}
                      height={80}
                      className="object-contain h-12 md:h-16 w-auto"
                    />
                  </div>
                </Link>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-sm">
                  Using the power of football to improve educational outcomes for young people in Kenya.
                </p>
              </div>

              <div className="w-full lg:w-[60%] grid grid-cols-2 md:grid-cols-3 gap-8">
                
                <div className="flex flex-col gap-y-4">
                  <h3 className="text-[15px] font-semibold text-white tracking-wide mb-2 uppercase">
                    Quick Links
                  </h3>
                  <Link href="#" className="text-[15px] text-gray-400 transition-colors nav-link duration-200">Donation</Link>
                  <Link href="/about" className="text-[15px] text-gray-400 transition-colors nav-link duration-200">About Us</Link>
                  <Link href="/programs" className="text-[15px] text-gray-400 transition-colors nav-link duration-200">Programs</Link>
                </div>

                <div className="flex flex-col gap-y-4">
                  <h3 className="text-[15px] font-semibold text-white tracking-wide mb-2 uppercase">
                    More
                  </h3>
                  <Link href="/news" className="text-[15px] text-gray-400 transition-colors nav-link duration-200">News</Link>
                  <Link href="/contact" className="text-[15px] text-gray-400 transition-colors nav-link duration-200">Contact</Link>
                </div>

                <div className="flex flex-col gap-y-4">
                  <h3 className="text-[15px] font-semibold text-white tracking-wide mb-2 uppercase">
                    Legal
                  </h3>
                  <Link href="#" className="text-[15px] text-gray-400 hover:text-white transition-colors duration-200">Privacy Policy</Link>
                  <Link href="#" className="text-[15px] text-gray-400 hover:text-white transition-colors duration-200">Support</Link>
                  <Link href="#" className="text-[15px] text-gray-400 hover:text-white transition-colors duration-200">Changelog</Link>
                </div>
              </div>

            </div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-y-6 border-t border-white/10 pt-8 mt-8">
              <span className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Kits For Africa. All rights reserved.
              </span>

              <div className="flex gap-x-4">
                {[
                  { icon: 'https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000', label: "Facebook", href: "https://www.facebook.com/kitsforafrica", hoverClass: "hover:bg-blue-600" },
                  { icon: 'https://img.icons8.com/?size=100&id=32323&format=png&color=000000', label: "Instagram", href: "https://www.instagram.com/kitsforafrica/", hoverClass: "hover:bg-pink-600" },
                  { icon: 'https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000', label: "LinkedIn", href: "https://www.linkedin.com/company/kits-for-africa/about/", hoverClass: "hover:bg-gray-200" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className={`flex items-center justify-center w-10 h-10 rounded-full bg-white transition-colors duration-300 ${social.hoverClass}`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image 
                      src={social.icon} 
                      alt={social.label} 
                      width={22} 
                      height={22}
                      className="object-contain" 
                    />
                  </motion.a>
                ))}
              </div>
            </div>

          </div>
        </div>

        <div className="relative z-10 w-full -mt-20 pt-32 pb-6 md:pt-40 min-h-[35vh] md:min-h-[45vh] flex flex-col justify-end items-center overflow-hidden">
          <motion.div 
            style={{ y: parallaxY, opacity }}
            className="w-full text-center flex-1 flex items-center justify-center px-4"
          >
            <h1 className="font-playfair text-7xl leading-none text-blue-950 tracking-tighter select-none font-black opacity-90">
              KITS FOR AFRICA
            </h1>
          </motion.div>
        </div>

      </footer>
    </>
  );
}