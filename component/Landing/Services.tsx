// "use client";

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { ArrowUpRight, PersonStanding, GraduationCap, Wind } from "lucide-react";

// const PROGRAMS = [
//   {
//     id: 0,
//     title: "Football and Education",
//     desc: "Structured programmes that keep young people engaged in school while developing through sport.",
//     img: "assets/img_4.jpeg",
//     Icon: GraduationCap,
//   },
//   {
//     id: 1,
//     title: "Child Protection",
//     desc: "Comprehensive safeguarding frameworks ensuring every young person participates safely.",
//     img: "assets/child_protection.jpg",
//     Icon: PersonStanding,
//   },
//   {
//     id: 2,
//     title: "Environmental Sustainability",
//     desc: "Embedding environmental awareness into all our activities and operations.",
//     img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80",
//     Icon: Wind,
//   },
// ];

// export default function ServicesCarousel() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % PROGRAMS.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   const getCardPosition = (index: number) => {
//     const offset = (index - currentIndex + PROGRAMS.length) % PROGRAMS.length;
//     if (offset === 0) return "center";
//     if (offset === 1) return "right";
//     return "left";
//   };

//   const cardVariants = {
//     center: {
//       left: "50%",
//       x: "-50%",
//       width: "80%",       
//       maxWidth: "800px",
//       scale: 1,
//       zIndex: 20,
//       opacity: 1,
//       filter: "blur(0px) brightness(1)",
//     },
//     left: {
//       left: "15%",         
//       x: "-50%",
//       width: "50%",        
//       maxWidth: "350px",
//       scale: 0.85,
//       zIndex: 10,
//       opacity: 0.6,
//       filter: "blur(8px) brightness(0.4)",
//     },
//     right: {
//       left: "85%",         
//       x: "-50%",
//       width: "50%",      
//       maxWidth: "350px",
//       scale: 0.85,
//       zIndex: 10,
//       opacity: 0.6,
//       filter: "blur(8px) brightness(0.4)",
//     },
//   };

//   return (
//     <section className="w-full py-16 overflow-hidden font-sans">
//       <div className="max-w-7xl mx-auto px-8 w-full">
        
//         <div className="flex justify-between items-end mb-12 w-full">
//           <h2 className="text-2xl font-bold text-gray-900">Programs</h2>
//           <button className="hidden md:flex items-center gap-2 bg-[#cdff05] text-black px-4 py-2 font-semibold text-xs hover:bg-[#b8e600] transition-colors">
//             View all <ArrowUpRight className="w-3 h-3" />
//           </button>
//         </div>

//         <div className="relative h-100 md:h-120 w-full flex items-center">
//           {PROGRAMS.map((card, index) => {
//             const position = getCardPosition(index);
//             const isActive = position === "center";

//             return (
//               <motion.div
//                 key={card.id}
//                 initial={false}
//                 animate={position}
//                 variants={cardVariants}
//                 transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
//                 className="absolute h-full rounded-2xl overflow-hidden shadow-2xl cursor-pointer group"
//                 onClick={() => setCurrentIndex(index)}
//               >
//                 <div
//                   className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
//                   style={{ backgroundImage: `url(${card.img})` }}
//                 />

//                 <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />
//                 <div className="absolute inset-x-0 bottom-0 p-6 md:p-10 flex flex-col pointer-events-none">
//                   <div className={`w-12 h-12 flex items-center justify-center rounded-full mb-6 transition-colors duration-500 ${isActive ? 'bg-[#cdff05]' : 'bg-white/20'}`}>
//                     <card.Icon className={`w-6 h-6 ${isActive ? 'text-black' : 'text-white'}`} />
//                   </div>
                  
//                   <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
//                     {card.title}
//                   </h3>
                  
//                   <div className={`transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
//                     <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 max-w-lg">
//                       {card.desc}
//                     </p>
//                     <button className="flex items-center gap-2 bg-[#cdff05] text-black px-5 py-2.5 font-semibold text-sm hover:bg-[#b8e600] transition-colors pointer-events-auto">
//                       Learn more <ArrowUpRight className="w-4 h-4" />
//                     </button>
//                   </div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>

//         <div className="flex justify-center md:justify-end items-center mt-12 gap-x-3">
//           {PROGRAMS.map((_, idx) => (
//             <button
//               key={idx}
//               onClick={() => setCurrentIndex(idx)}
//               className={`transition-all duration-300 rounded-full ${
//                 currentIndex === idx
//                   ? "w-8 h-2.5 bg-[#cdff05]"
//                   : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
//               }`}
//               aria-label={`Go to slide ${idx + 1}`}
//             />
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }

"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, GraduationCap, Shield, Leaf } from "lucide-react";

/* ── Fonts ── */
const FontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500&display=swap');
    .font-playfair { font-family: 'Playfair Display', serif; }
    .font-dm       { font-family: 'DM Sans', sans-serif; }

    /* progress bar animation */
    @keyframes progressFill {
      from { width: 0%; }
      to   { width: 100%; }
    }
    .progress-bar {
      animation: progressFill 4s linear forwards;
    }

    /* card image zoom */
    .focus-img {
      transition: transform 0.9s cubic-bezier(.22,1,.36,1);
    }
    .focus-card:hover .focus-img {
      transform: scale(1.06);
    }

    /* cta hover gap */
    .focus-cta:hover { gap: 14px; }
  `}</style>
);

/* ── Data ── */
const CARDS = [
  {
    id: 0,
    eyebrow: "Programme 01",
    title: "Football &\nEducation",
    titleDisplay: ["Football &", "Education"],
    desc: "Structured programmes that keep young people engaged in school while developing critical life skills through sport.",
    img: "assets/img_4.jpeg",
    Icon: GraduationCap,
    stat: { num: "47", label: "Partner Schools" },
    href: "/programs#education",
  },
  {
    id: 1,
    eyebrow: "Programme 02",
    title: "Child\nProtection",
    titleDisplay: ["Child", "Protection"],
    desc: "Comprehensive safeguarding frameworks ensuring every young person participates safely, with trained staff at every level.",
    img: "assets/child_protection.jpg",
    Icon: Shield,
    stat: { num: "100%", label: "Trained Staff" },
    href: "/programs#safeguarding",
  },
  {
    id: 2,
    eyebrow: "Programme 03",
    title: "Environmental\nSustainability",
    titleDisplay: ["Environmental", "Sustainability"],
    desc: "Embedding environmental awareness into all our activities and operations — from kit choices to programme delivery.",
    img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80",
    Icon: Leaf,
    stat: { num: "3,200+", label: "Lives Reached" },
    href: "/programs#sustainability",
  },
];

export default function FocusAreas() {
  const [active, setActive]     = useState(0);
  const [paused, setPaused]     = useState(false);
  const [key,    setKey]        = useState(0);   // resets progress bar

  const go = useCallback((idx: number) => {
    setActive(idx);
    setKey((k) => k + 1);
  }, []);

  const prev = () => go((active - 1 + CARDS.length) % CARDS.length);
  const next = () => go((active + 1) % CARDS.length);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => go((active + 1) % CARDS.length), 4000);
    return () => clearInterval(t);
  }, [active, paused, go]);

  const card = CARDS[active];

  return (
    <section
      className="font-dm w-full bg-[#f8f4ee] overflow-hidden py-24 lg:py-32"
      id="focus-areas"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <FontLoader />

      <div className="max-w-7xl mx-auto px-6 sm:px-10">

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="block w-8 h-px bg-[#1a5c38]" />
              <span className="text-[11px] font-medium tracking-[.18em] uppercase text-[#1a5c38]">
                Focus Areas
              </span>
            </div>
            <h2 className="font-playfair text-[clamp(36px,5vw,60px)] font-bold leading-[1.05] text-[#0d0d0d]">
              What we focus on
            </h2>
          </div>
          <p className="text-[15px] font-light leading-[1.75] text-[#6b6560] max-w-[360px]">
            Three interconnected focus areas that shape every programme we
            design and every community we serve.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_480px] gap-6 lg:gap-8 items-stretch">
          <div className="focus-card relative overflow-hidden bg-[#0d0d0d] h-[420px] lg:h-[580px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={`img-${active}`}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <div
                  className="focus-img absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${card.img})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d]/90 via-[#0d0d0d]/30 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1a5c38]/20 to-transparent" />
              </motion.div>
            </AnimatePresence>
            <div className="absolute top-0 left-0 right-0 h-1 bg-blue-950 z-20" />
            <div className="absolute top-6 left-6 z-20 flex items-center gap-2">
              <span className="bg-[#c8e63a] text-[#0d0d0d] text-[10px] font-semibold tracking-widest uppercase px-3 py-1.5">
                {card.eyebrow}
              </span>
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={`copy-${active}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                className="absolute bottom-0 left-0 right-0 z-20 p-8 lg:p-10"
              >
                <h3 className="font-playfair text-[clamp(32px,4vw,48px)] font-bold text-white leading-[1.0] mb-4">
                  {card.titleDisplay.map((line, i) => (
                    <span key={i} className="block">
                      {i === 1 ? <em className="not-italic text-[#c8e63a]">{line}</em> : line}
                    </span>
                  ))}
                </h3>
                <p className="text-[14px] font-light leading-[1.75] text-white/70 max-w-[400px]">
                  {card.desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex flex-col gap-3">
            {CARDS.map((c, i) => {
              const isActive = i === active;
              return (
                <button
                  key={c.id}
                  onClick={() => go(i)}
                  className={`w-full text-left flex items-start gap-5 px-6 py-6 transition-all duration-300 border
                    ${isActive
                      ? "bg-blue-950"
                      : "bg-white border-[#e8e0d0] hover:border-[#1a5c38]/40 hover:bg-[#fcfaf6]"
                    }`}
                >
                  <div className={`w-11 h-11 flex items-center justify-center shrink-0 transition-colors duration-300 ${
                    isActive ? "bg-[#c8e63a]" : "bg-[#f0ece4]"
                  }`}>
                    <c.Icon size={18} color={isActive ? "#0d0d0d" : "#1a5c38"} />
                  </div>

                  {/* text */}
                  <div className="flex flex-col gap-1 flex-1 min-w-0">
                    <span className={`font-playfair text-[17px] font-bold leading-snug transition-colors duration-300 ${
                      isActive ? "text-white" : "text-[#0d0d0d]"
                    }`}>
                      {c.titleDisplay.join(" ")}
                    </span>
                    <span className={`text-[12.5px] font-light leading-snug line-clamp-2 transition-colors duration-300 ${
                      isActive ? "text-white/55" : "text-[#6b6560]"
                    }`}>
                      {c.desc}
                    </span>

                    {isActive && !paused && (
                      <div className="mt-3 h-px bg-white/20 overflow-hidden">
                        <div key={key} className="progress-bar h-full bg-[#c8e63a]" />
                      </div>
                    )}
                  </div>
                </button>
              );
            })}

            <div className="mt-auto pt-3 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  className="w-11 h-11 border border-[#e8e0d0] flex items-center justify-center text-[#6b6560] hover:border-[#1a5c38] hover:text-[#1a5c38] hover:bg-white transition-all duration-200"
                  aria-label="Previous"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={next}
                  className="w-11 h-11 border border-[#e8e0d0] flex items-center justify-center text-[#6b6560] hover:border-[#1a5c38] hover:text-[#1a5c38] hover:bg-white transition-all duration-200"
                  aria-label="Next"
                >
                  <ChevronRight size={18} />
                </button>
                {/* counter */}
                <span className="text-[12px] font-medium text-[#6b6560] tracking-widest ml-2">
                  <span className="text-[#0d0d0d]">{String(active + 1).padStart(2, "0")}</span>
                  {" / "}
                  {String(CARDS.length).padStart(2, "0")}
                </span>
              </div>

              <a
                href={card.href}
                className="focus-cta inline-flex items-center gap-3 bg-[#c8e63a] text-[#0d0d0d] text-[12px] font-semibold tracking-widest uppercase px-6 py-3.5 transition-all duration-200 hover:bg-[#d9f54a]"
              >
                Learn More <ArrowRight size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}