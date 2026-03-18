// "use client";

// import { ArrowUpRight } from "lucide-react";
// import { ScrollReveal } from "./ScrollReveal";
// import MainHeader from "./MainHeader";

// export default function Hero() {
//   return (
//     <section className="relative h-screen min-h-200 w-full flex flex-col">
//       <div
//         className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
//         style={{ backgroundImage: "url('assets/img_3.jpg')" }}
//       >
//         <div className="absolute inset-0 bg-black/30"></div>
//         <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-[#fcfcfc] to-transparent"></div>
//       </div>

//       <MainHeader />

//       <div className="relative z-10 grow flex items-center max-w-7xl w-full mx-auto px-8 pt-20 md:pt-0">
//         <div className="max-w-2xl">
//           <ScrollReveal>
//             <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6">
//               Empowering Lives <span className="text-[#cdff05]">Building</span>{" "}
//               Brighter Future
//             </h1>
//           </ScrollReveal>
//           <ScrollReveal
//             delay={0.2}
//             className="flex gap-8 text-white/80 text-sm border-t border-white/20 pt-6 mt-12"
//           >
//             <div className="flex flex-col gap-1 w-24">
//               <span className="text-xs uppercase tracking-wider">
//                 Football Kits
//               </span>
//               <span className="border-b border-white/40 pb-1">(5)</span>
//             </div>
//             <div className="flex flex-col gap-1 w-24">
//               <span className="text-xs uppercase tracking-wider">Counties</span>
//               <span className="border-b border-white/40 pb-1">(12)</span>
//             </div>
//           </ScrollReveal>
//         </div>

//         <ScrollReveal
//           delay={0.4}
//           className="hidden lg:block absolute right-8 bottom-32 bg-white p-4 w-72 shadow-2xl"
//         >
//           <img
//             src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=2070&auto=format&fit=crop"
//             alt="Recent Project"
//             className="w-full h-32 object-cover mb-4"
//           />
//           <div className="flex justify-between items-end">
//             <button className="p-2 border border-gray-200 hover:bg-gray-50 transition-colors">
//               <ArrowUpRight className="w-5 h-5" />
//             </button>
//             <span className="text-sm font-semibold text-right max-w-30 leading-tight text-gray-900">
//               Discover our recent news
//             </span>
//           </div>
//         </ScrollReveal>
//       </div>
//     </section>
//   );
// }


"use client";
import { ArrowUpRight, ArrowRight, ChevronDown } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const FontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500&display=swap');
    .font-playfair { font-family: 'Playfair Display', serif; }
    .font-dm       { font-family: 'DM Sans', sans-serif; }

    @keyframes fadeUp {
      from { opacity:0; transform:translateY(32px); }
      to   { opacity:1; transform:translateY(0); }
    }
    @keyframes fadeIn {
      from { opacity:0; }
      to   { opacity:1; }
    }
    @keyframes bounceSlow {
      0%,100% { transform:translateY(0); }
      50%      { transform:translateY(7px); }
    }
    @keyframes scaleIn {
      from { opacity:0; transform:scale(0.94) translateY(16px); }
      to   { opacity:1; transform:scale(1) translateY(0); }
    }

    .hero-anim-0 { opacity:0; animation: fadeUp 0.9s cubic-bezier(.22,1,.36,1) 0.1s forwards; }
    .hero-anim-1 { opacity:0; animation: fadeUp 0.9s cubic-bezier(.22,1,.36,1) 0.25s forwards; }
    .hero-anim-2 { opacity:0; animation: fadeUp 0.9s cubic-bezier(.22,1,.36,1) 0.4s forwards; }
    .hero-anim-3 { opacity:0; animation: fadeUp 0.9s cubic-bezier(.22,1,.36,1) 0.55s forwards; }
    .hero-anim-4 { opacity:0; animation: scaleIn 0.8s cubic-bezier(.22,1,.36,1) 0.65s forwards; }
    .hero-bg     { opacity:0; animation: fadeIn 1.2s ease 0s forwards; }
    .bounce-hint { animation: bounceSlow 2.2s ease-in-out infinite; }

    /* news card hover */
    .news-card { transition: transform 0.35s cubic-bezier(.22,1,.36,1), box-shadow 0.35s; }
    .news-card:hover { transform: translateY(-4px); box-shadow: 0 20px 60px rgba(0,0,0,0.35); }
    .news-card:hover .news-arrow { background:#c8e63a; color:#0d0d0d; }
    .news-arrow { transition: background 0.2s, color 0.2s; }

    /* stat separator */
    .stat-item + .stat-item { border-left: 1px solid rgba(255,255,255,0.2); }

    /* cta hover gap */
    .hero-cta:hover { gap: 18px; }
  `}</style>
);

export default function Hero() {
  return (
    <section className="font-dm relative min-h-screen w-full flex flex-col overflow-hidden">
      <FontLoader />
      <div className="hero-bg absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-[1.03] transition-transform duration-8000"
          style={{ backgroundImage: "url('assets/img_3.jpg')" }}
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/75 via-black/40 to-black/20" />
        <div className="absolute top-0 left-0 right-0 h-40 bg-linear-to-b from-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-64 bg-linear-to-tr from-[#1a5c38]/30 to-transparent" />
      </div>



      <div className="relative z-10 flex-1 flex items-center max-w-7xl w-full mx-auto px-6 sm:px-10 pt-28 pb-24 md:pt-20 md:pb-0">
        <div className="flex flex-col max-w-160 w-full">

          <h1 className="hero-anim-1 font-playfair text-[clamp(44px,6.5vw,42px)] font-black leading-[.93] text-white mb-8">
            Empowering<br />
            Lives,{" "}
            <span className="italic text-[#c8e63a]">Building</span>
            <br />
            Brighter Futures
          </h1>

          <p className="hero-anim-2 text-[16px] font-light leading-[1.75] text-white/65 max-w-115 mb-10">
            Using football as a force for education and development across
            Murang'a County providing kits, coaching, and opportunity to
            young people who need it most.
          </p>

          <div className="hero-anim-3 flex flex-wrap items-center gap-4 mb-14">
            <a
              href="/programs"
              className="hero-cta inline-flex items-center gap-3 bg-[#c8e63a] text-[#0d0d0d] text-sm font-semibold tracking-wide uppercase px-7 py-4 transition-all duration-200 hover:bg-[#d9f54a]"
            >
              Our Programmes <ArrowRight size={15} />
            </a>
            <a
              href="/donate"
              className="inline-flex items-center gap-3 border border-white/30 text-white text-sm font-medium tracking-wide uppercase px-7 py-4 transition-all duration-200 hover:border-[#c8e63a] hover:text-[#c8e63a]"
            >
              Donate Now <ArrowUpRight size={15} />
            </a>
          </div>

          {/* <div className="hero-anim-3 flex items-stretch gap-0 border-t border-white/15 pt-8">
            {[
              { num: "5",   label: "Football Kit Packs" },
              { num: "12",  label: "Counties Reached"   },
              { num: "50%", label: "Female Participation"},
            ].map((s, i) => (
              <div
                key={i}
                className={`stat-item flex flex-col gap-1 pr-8 ${i > 0 ? "pl-8" : ""}`}
              >
                <span className="font-playfair text-[28px] font-bold text-white leading-none">{s.num}</span>
                <span className="text-[11px] font-medium tracking-[.12em] uppercase text-white/50">{s.label}</span>
              </div>
            ))}
          </div> */}
        </div>


        {/* <div className="hero-anim-4 news-card hidden lg:flex flex-col absolute right-10 xl:right-16 bottom-32 bg-white w-[280px] shadow-2xl overflow-hidden">
          <div className="relative overflow-hidden h-[148px]">
            <img
              src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=2070&auto=format&fit=crop"
              alt="Recent news"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <span className="absolute top-3 left-3 bg-[#c8e63a] text-[#0d0d0d] text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1">
              Latest News
            </span>
          </div>

          <div className="p-5 flex flex-col gap-4">
            <p className="text-[13.5px] font-medium text-[#0d0d0d] leading-snug">
              Discover our most recent stories and impact from the field
            </p>
            <div className="flex items-center justify-between border-t border-[#e8e0d0] pt-4">
              <span className="text-[11px] uppercase tracking-widest text-[#6b6560] font-medium">Read More</span>
              <a
                href="/news"
                className="news-arrow w-9 h-9 border border-[#e8e0d0] flex items-center justify-center"
                aria-label="Go to news"
              >
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}