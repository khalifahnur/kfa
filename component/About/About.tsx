"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Leaf, BarChart3, Users, Heart, Check } from "lucide-react";

const FontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500&display=swap');
    .font-playfair { font-family: 'Playfair Display', serif; }
    .font-dm       { font-family: 'DM Sans', sans-serif; }

    /* image hover zoom */
    .img-zoom { overflow: hidden; }
    .img-zoom img { transition: transform 0.7s cubic-bezier(.22,1,.36,1); }
    .img-zoom:hover img { transform: scale(1.05); }

    /* value card hover bar */
    .value-card { position: relative; overflow: hidden; }
    .value-card::before {
      content: '';
      position: absolute; top: 0; left: 0; right: 0;
      height: 2px; background: #c8e63a;
      transform: scaleX(0); transform-origin: left;
      transition: transform 0.4s cubic-bezier(.22,1,.36,1);
    }
    .value-card:hover::before { transform: scaleX(1); }

    /* rotating badge text */
    @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
    .spin-slow { animation: spin 14s linear infinite; }

    /* section divider line */
    .section-rule {
      width: 48px; height: 2px; background: #c8e63a;
    }
  `}</style>
);


const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 28 },
  whileInView:{ opacity: 1, y: 0  },
  viewport:   { once: true, margin: "-80px" },
  transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay },
});

const fadeLeft = (delay = 0) => ({
  initial:    { opacity: 0, x: -32 },
  whileInView:{ opacity: 1, x: 0   },
  viewport:   { once: true, margin: "-80px" },
  transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay },
});

const fadeRight = (delay = 0) => ({
  initial:    { opacity: 0, x: 32 },
  whileInView:{ opacity: 1, x: 0  },
  viewport:   { once: true, margin: "-80px" },
  transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay },
});

const stats = [
  { num: "2,140+", label: "Kits Distributed" },
  { num: "2017",   label: "Founded"          },
  { num: "12+",    label: "Counties Reached" },
  { num: "2026",   label: "Relaunched"       },
];

const values = [
  { Icon: Shield,   title: "Child Protection First",      desc: "Comprehensive safeguarding embedded in every session, every activity, every partnership." },
  { Icon: Leaf,     title: "Environmental Responsibility", desc: "Sustainability baked into our operations — from kit choices to programme delivery." },
  { Icon: BarChart3,title: "Evidence-Based",               desc: "Programmes shaped by needs assessments and tracked through measurable outcomes." },
  { Icon: Users,    title: "Partnership",                  desc: "Deep collaboration with communities, schools, and football bodies across Kenya." },
  { Icon: Heart,    title: "Inclusion",                    desc: "Equal opportunities for girls and boys, including young people with disabilities." },
];

const Eyebrow = ({ label }:{label:string}) => (
  <div className="flex items-center gap-3 mb-6">
    <span className="block w-8 h-px bg-[#1a5c38]" />
    <span className="text-[11px] font-medium tracking-[.18em] uppercase text-[#1a5c38]">{label}</span>
  </div>
);

export default function AboutPage() {
  return (
    <div className="font-dm w-full bg-[#f8f4ee] text-[#0d0d0d] overflow-hidden">
      <FontLoader />

      <section className="max-w-7xl mx-auto px-6 sm:px-10 pt-36 pb-24 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          <motion.div className="flex flex-col">
            <Eyebrow label="Who We Are" />

            <h1 className="font-playfair text-[clamp(52px,6.5vw,80px)] font-black leading-[.93] text-[#0d0d0d] mb-8">
              Kits<span className="italic text-[#c8e63a]"> For</span><br />Africa
            </h1>

            <p className="text-[16px] font-light leading-[1.85] text-[#3a3530] mb-5 max-w-[520px]">
              Kits For Africa is a registered organisation (Company No.&nbsp;CLG-QPF72M)
              and the CSR arm of Lycan International Limited. Founded in 2017, we have
              distributed over <strong className="font-semibold text-[#0d0d0d]">2,140 football kits</strong> to
              schools and grassroots teams across Kenya in partnership with UK football clubs.
            </p>
            <p className="text-[15px] font-light leading-[1.8] text-[#6b6560] mb-12 max-w-[520px]">
              Following a period of dormancy during COVID-19, we relaunched in January 2026
              with a renewed focus on using football as a pathway to educational outcomes —
              not just equipment distribution, but meaningful programmes that create lasting
              impact for young people.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 border border-[#e8e0d0]">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-1 px-5 py-6 border-r border-[#e8e0d0] last:border-r-0 bg-white"
                >
                  <span className="font-playfair text-[28px] font-bold text-blue-950 leading-none">{s.num}</span>
                  <span className="text-[11px] font-medium tracking-[.1em] uppercase text-[#6b6560]">{s.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }} 
      transition={{ duration: 0.5, ease: "easeOut" }} className="relative hidden md:block">
            <div className="img-zoom w-full h-[520px]">
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80"
                alt="KitsForAfrica team"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 left-0 right-0 h-1 bg-blue-950" />
            </div>

            <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-white shadow-2xl flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="spin-slow w-full h-full absolute inset-0">
                <path id="bp" d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0" fill="none"/>
                <text style={{ fontSize: "10.5px", fontWeight: 600, letterSpacing: "0.18em", fill: "#1a5c38", fontFamily: "DM Sans, sans-serif" }}>
                  <textPath href="#bp" startOffset="0%">• KITSFORAFRICA • KITSFORAFRICA </textPath>
                </text>
              </svg>
              <div className="w-11 h-11 bg-blue-950 flex items-center justify-center z-10">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c8e63a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>

            <div className="absolute top-6 -right-4 w-12 h-12 border-2 border-[#c8e63a]/40 -z-10" />
            <div className="absolute -bottom-4 right-12 w-7 h-7 bg-[#c8e63a]/25 -z-10" />
          </motion.div>
        </div>
      </section>

      <section className="bg-blue-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">

            <motion.div initial={{ opacity: 0, x: 50 }} 
    animate={{ opacity: 1, x: 0 }} 
    transition={{ duration: 0.5 }}   className="relative hidden md:block h-[480px]">
              <div className="img-zoom absolute top-0 left-0 w-[78%] h-[82%] shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80"
                  alt="Football coaching"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="img-zoom absolute bottom-0 right-0 w-[52%] h-[52%] shadow-xl ">
                <img
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80"
                  alt="Young players"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 right-0 h-1 " />
              </div>
            </motion.div>


            <motion.div initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }} className="flex flex-col">
              <Eyebrow label="Our Mission" />
              <h2 className="font-playfair text-[clamp(36px,4.5vw,54px)] font-bold leading-[1.05] text-white mb-8">
                A pathway to<br />
                <span className="italic text-[#c8e63a]">opportunity</span>
              </h2>
              <p className="text-[16px] font-light leading-[1.85] text-white/65 mb-6 max-w-[500px]">
                To use football as a pathway to improve educational outcomes and life
                opportunities for children and young people in Kenya — with child
                protection and environmental sustainability at the heart of everything we do.
              </p>
              <p className="text-[15px] font-light leading-[1.8] text-white/45 max-w-[500px]">
                Every kit, every session, every partnership is evaluated against this
                mission — ensuring our work moves beyond sport and into lasting social change.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f4ee]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-24 lg:py-32">

          <motion.div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-16">
            <div>
              <Eyebrow label="What We Stand For" />
              <h2 className="font-playfair text-[clamp(36px,5vw,58px)] font-bold leading-[1.05] text-[#0d0d0d]">
                Our values
              </h2>
            </div>
            <p className="text-[15px] font-light leading-[1.75] text-[#6b6560] max-w-[360px]">
              Five principles that shape every decision, every programme, and
              every relationship we build.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-[#e8e0d0] border border-[#e8e0d0]">
            {values.map(({ Icon, title, desc }, i) => (
              <motion.div
                key={i}
                className="value-card bg-white px-6 py-8 flex flex-col gap-4 transition-colors duration-300 hover:bg-[#fcfaf6] cursor-default"
              >
                <div className="w-10 h-10 bg-[#1a5c38] flex items-center justify-center shrink-0">
                  <Icon size={16} color="#c8e63a" />
                </div>
                <h4 className="font-playfair text-[15px] font-bold text-[#0d0d0d] leading-snug">{title}</h4>
                <p className="text-[12.5px] font-light leading-relaxed text-[#6b6560]">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-950 overflow-hidden relative">
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='1' fill='white'/%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">


            <motion.div initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }} className="flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <span className="block w-8 h-px bg-[#c8e63a]" />
                <span className="text-[11px] font-medium tracking-[.18em] uppercase text-[#c8e63a]">Our Vision</span>
              </div>

              <h2 className="font-playfair text-[clamp(36px,4.5vw,56px)] font-bold leading-[1.05] text-white mb-8">
                A Kenya where<br />
                every young person{" "}
                <span className="italic text-[#c8e63a]">thrives</span>
              </h2>

              <p className="text-[16px] font-light leading-[1.85] text-white/70 mb-12 max-w-[500px]">
                A Kenya where every young person has access to safe, structured
                sporting opportunities that support their education and personal
                development — regardless of gender, ability, or background.
              </p>


              <ul className="flex flex-col gap-4">
                {[
                  "Safe, structured football for all young people",
                  "Education and sport working hand in hand",
                  "Communities empowered to sustain programmes",
                  "Measurable impact at every level",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[14px] font-light text-white/80 leading-snug">
                    <span className="mt-0.5 w-5 h-5 bg-[#c8e63a] flex items-center justify-center shrink-0">
                      <Check size={10} strokeWidth={2.5} color="#0d0d0d" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }} className="relative hidden md:block h-[500px]">
              <div className="img-zoom absolute top-0 right-0 w-[78%] h-[82%] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?auto=format&fit=crop&q=80"
                  alt="Young athletes"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="img-zoom absolute bottom-0 left-0 w-[50%] h-[50%] shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80"
                  alt="Kit distribution"
                  className="w-full h-full object-cover"
                />
              </div>
              
            </motion.div>
          </div>
        </div>
      </section>


    </div>
  );
}