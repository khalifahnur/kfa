"use client";
import React, { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const FontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500&display=swap');
    .font-playfair { font-family: 'Playfair Display', serif; }
    .font-dm       { font-family: 'DM Sans', sans-serif; }

    @keyframes slideDown {
      from { opacity:0; transform:translateY(-8px); }
      to   { opacity:1; transform:translateY(0); }
    }
    .mobile-menu-enter { animation: slideDown 0.3s cubic-bezier(.22,1,.36,1) forwards; }

    /* nav link animated underline */
    .nav-link {
      position: relative;
      padding-bottom: 2px;
    }
    .nav-link::after {
      content: '';
      position: absolute;
      bottom: -2px; left: 0;
      width: 0; height: 1px;
      background: #c8e63a;
      transition: width 0.3s cubic-bezier(.22,1,.36,1);
    }
    .nav-link:hover::after { width: 100%; }
    .nav-link:hover { color: #c8e63a; }
  `}</style>
);

const NAV_LINKS = [
  { label: "About Us",  href: "/about"    },
  { label: "Programs",  href: "/programs" },
  { label: "News",      href: "/news"     },
  { label: "Contact",   href: "/contact"  },
];

export default function MainHeader() {
  const [isScrolled,       setIsScrolled]       = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
  }, [isMobileMenuOpen]);

  return (
    <>
      <FontLoader />

      <header
        className={`font-dm fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-blue-950 backdrop-blur-md shadow-[0_4px_40px_rgba(0,0,0,0.4)] py-3 border-b border-white/5"
            : "bg-transparent py-6"
        }`}
      >
        <nav className="flex items-center justify-between max-w-7xl mx-auto px-6 sm:px-10">
          <Link href="/" className="relative z-50 flex items-center gap-2.5 group bg-white">
              <div className="h-10 w-15 md:h-16 md:w-32 transition-transform duration-300 hover:scale-105 flex items-center justify-center">
                <Image
                  src="/kfa_logo.png"
                  alt="kfa"
                  width={1000}
                  height={800}
                  className="md:h-24 md:w-auto  transition-transform duration-300 hover:scale-105"
                />
              </div>
            
          </Link>
          <div className="hidden md:flex items-center gap-10 text-xl text-white font-medium font-playfair">
            {NAV_LINKS.map(({ label, href }) => (
              <Link key={href} href={href} className="nav-link transition-colors duration-200">
                {label}
              </Link>
            ))}
          </div>
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-2 bg-[#c8e63a] text-[#0d0d0d] text-[13px] font-semibold tracking-widest uppercase px-6 py-3 transition-all duration-200 hover:bg-[#d9f54a] hover:gap-3"
          >
            Donate <ArrowUpRight className="w-4 h-4" />
          </Link>

          <button
            className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center text-white transition-colors hover:text-[#c8e63a]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen
              ? <X className="w-6 h-6" />
              : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </header>

      <div
        className={`font-dm fixed inset-0 z-40 bg-[#0d1f14] flex flex-col md:hidden transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='1' fill='white'/%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px',
          }}
        />

        <div className="relative z-10 flex flex-col justify-center items-center h-full gap-0 px-8">
          <nav className="flex flex-col items-center gap-2 w-full max-w-xs mb-12">
            {NAV_LINKS.map(({ label, href }, i) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="mobile-menu-enter w-full text-center text-[28px] font-playfair font-bold text-white py-3 border-b border-white/10 hover:text-[#c8e63a] transition-colors duration-200"
                style={{ animationDelay: `${i * 0.06}s`, opacity: 0 }}
              >
                {label}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mobile-menu-enter inline-flex items-center gap-3 bg-[#c8e63a] text-[#0d0d0d] text-sm font-semibold tracking-widest uppercase px-10 py-4 hover:bg-[#d9f54a] transition-colors"
            style={{ animationDelay: '0.28s', opacity: 0 }}
          >
            Donate Now <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>

        <p className="relative z-10 text-center text-white/20 text-xs tracking-widest uppercase pb-10">
          KitsForAfrica © 2026
        </p>
      </div>
    </>
  );
}