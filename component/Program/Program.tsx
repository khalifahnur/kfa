import React from 'react';
import {
  GraduationCap, Users, Heart,
  ShieldCheck, Leaf, BarChart3,
  ArrowRight, ChevronDown, Check
} from 'lucide-react';

const FontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500&display=swap');
    .font-playfair { font-family: 'Playfair Display', serif; }
    .font-dm       { font-family: 'DM Sans', sans-serif; }

    @keyframes fadeUp {
      from { opacity:0; transform:translateY(28px); }
      to   { opacity:1; transform:translateY(0); }
    }
    @keyframes bounceSlow {
      0%,100% { transform:translateY(0); }
      50%      { transform:translateY(6px); }
    }
    .anim-fadeup { animation: fadeUp 0.7s cubic-bezier(.22,1,.36,1) forwards; }
    .delay-100   { animation-delay:.10s; }
    .delay-200   { animation-delay:.20s; }
    .delay-300   { animation-delay:.32s; }
    .anim-bounce { animation: bounceSlow 2s ease-in-out infinite; }

    /* hover bar on programme cards */
    .prog-card::after {
      content:'';
      position:absolute; bottom:0; left:0; right:0;
      height:3px; background:#c8e63a;
      transform:scaleX(0); transform-origin:left;
      transition:transform .4s cubic-bezier(.22,1,.36,1);
    }
    .prog-card:hover::after { transform:scaleX(1); }

    /* approach icon hover */
    .approach-card:hover .approach-icon {
      background:#c8e63a; border-color:#c8e63a; color:#0d0d0d;
    }

    /* hero cta hover gap */
    .hero-cta:hover { gap:20px; }
    .cta-btn:hover  { gap:24px; }
  `}</style>
);

/* ── Data ── */
const programmes = [
  {
    num: '01',
    title: 'Schools Football & Education',
    desc: "Working with schools in Murang'a County to provide football equipment, coaching, and structured activities that support student engagement and educational outcomes.",
    Icon: GraduationCap,
    features: [
      'Football equipment packages for participating schools',
      'Inter-school competitions with educational components',
      'Teacher and coach training on safeguarding',
      'Life skills development through sport',
    ],
  },
  {
    num: '02',
    title: "Girls' Football",
    desc: 'Targeted programmes addressing the gender participation gap in football, creating safe spaces for girls to develop through sport.',
    Icon: Users,
    features: [
      'Minimum 50% female participation across all activities',
      "Partnership with Murang'a Seals women's team",
      'Female coach development pathways',
      "Girls' leadership programmes",
    ],
  },
  {
    num: '03',
    title: 'Inclusive Sport',
    desc: 'Ensuring young people with disabilities have access to football and sporting opportunities in a welcoming, adapted environment.',
    Icon: Heart,
    features: [
      'Partnership with special needs schools',
      'Adapted football activities for all abilities',
      'Inclusive coaching training & certification',
    ],
  },
];

const approaches = [
  { Icon: Users,      title: 'Needs Assessment', desc: 'Every programme begins with understanding local context and community needs before a single session is delivered.' },
  { Icon: ShieldCheck, title: 'Safeguarding',    desc: 'Comprehensive child protection policies and mandatory training for all staff, coaches, and volunteers.' },
  { Icon: Leaf,       title: 'Sustainability',   desc: 'Environmental awareness integrated into activities; eco-friendly equipment choices throughout.' },
  { Icon: BarChart3,  title: 'Measurement',      desc: 'Tracking educational and developmental outcomes — not just participation numbers — to prove real impact.' },
];

const stats = [
  { num: '3,200+', label: "Young people reached annually" },
  { num: '47',     label: "Partner schools in Murang'a County" },
  { num: '50%',    label: 'Minimum female participation target' },
  { num: '100%',   label: 'Safeguarding-trained delivery staff' },
];

export default function ProgrammesPage() {
  return (
    <div className="font-dm bg-[#f8f4ee] text-[#0d0d0d] overflow-x-hidden">
      <FontLoader />

      {/* <section className="relative min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-[#1a5c38] overflow-hidden">

        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1.5' cy='1.5' r='1.5' fill='white'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 80% at 110% 50%, #2e8b5a, transparent 60%)' }}
        />

        <div className="relative z-10 flex flex-col justify-center px-8 sm:px-16 lg:px-20 py-24">

          <span className="opacity-0 anim-fadeup flex items-center gap-3 text-[11px] font-medium tracking-[.18em] uppercase text-[#c8e63a] mb-8">
            <span className="block w-8 h-px bg-[#c8e63a]" />
            Our Programmes
          </span>

          <h1 className="opacity-0 anim-fadeup delay-100 font-playfair text-[clamp(52px,7vw,88px)] font-black leading-[.92] text-white mb-9">
            Football<br />
            as a{' '}
            <span className="italic text-[#c8e63a]">force</span>
            <br />for change
          </h1>

          <p className="opacity-0 anim-fadeup delay-200 text-[17px] font-light leading-[1.75] text-white/70 max-w-[440px] mb-14">
            We use football as a vehicle for delivering educational and
            developmental outcomes — integrating safeguarding, inclusion, and
            environmental awareness into every session.
          </p>

          <button className="hero-cta opacity-0 anim-fadeup delay-300 w-fit inline-flex items-center gap-3 bg-[#c8e63a] text-[#0d0d0d] text-sm font-medium tracking-wide px-7 py-4 transition-all duration-200 hover:bg-[#d9f54a]">
            Explore Programmes <ArrowRight size={16} />
          </button>
        </div>

        <div className="relative z-10 hidden lg:flex items-center justify-center px-8 pr-20 py-24">
          <div className="opacity-0 anim-fadeup delay-200 flex flex-col gap-[2px] w-full max-w-[340px]">
            {stats.map((s, i) => (
              <div
                key={i}
                className="bg-white/[.06] border border-white/10 backdrop-blur-sm px-8 py-7 flex flex-col gap-1.5 transition-colors duration-200 hover:bg-white/10"
              >
                <span className="font-playfair text-[44px] font-bold text-[#c8e63a] leading-none">{s.num}</span>
                <span className="text-[13px] text-white/60 tracking-wide">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="anim-bounce absolute bottom-9 left-8 sm:left-20 z-10 flex items-center gap-2.5 text-[11px] tracking-[.16em] uppercase text-white/40">
          <ChevronDown size={14} /> Scroll to explore
        </div>
      </section> */}
      <section className="px-6 sm:px-16 lg:px-20 py-24 lg:py-32 bg-[#f8f4ee]">

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-20">
          <div>
            <h2 className="font-playfair text-[clamp(36px,5vw,60px)] font-bold leading-[1.05] text-[#0d0d0d]">
              Three core<br />programme areas
            </h2>
          </div>
          <p className="text-[16px] font-light leading-[1.7] text-[#6b6560] max-w-[360px]">
            Each strand addresses a specific barrier to participation, working
            together to create lasting change across Murang'a County.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border border-[#e8e0d0]">
          {programmes.map((p, i) => (
            <div
              key={i}
              className="prog-card relative flex flex-col bg-white px-10 py-14
                         border-b md:border-b-0 md:border-r border-[#e8e0d0]
                         last:border-b-0 last:md:border-r-0
                         transition-colors duration-300 hover:bg-[#fcfaf6] cursor-default overflow-hidden"
            >
              <span className="font-playfair text-[72px] font-black leading-none text-[#e8e0d0] mb-6 select-none">
                {p.num}
              </span>

              <div className="w-14 h-14 bg-blue-950 flex items-center justify-center mb-7 shrink-0">
                <p.Icon size={22} color="#fff" />
              </div>

              <h3 className="font-playfair text-2xl font-bold text-[#0d0d0d] mb-4 leading-snug">{p.title}</h3>
              <p className="text-[15px] font-light leading-[1.75] text-[#6b6560] mb-9 grow">{p.desc}</p>

              <ul className="flex flex-col gap-3 pt-7 border-t border-[#e8e0d0]">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3 text-[13.5px] text-[#3a3530] leading-snug">
                    <span className="mt-0.5 w-5 h-5 bg-[#c8e63a] flex items-center justify-center shrink-0">
                      <Check size={10} strokeWidth={2.5} color="#0d0d0d" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════ APPROACH ══════════════ */}
      <section className="relative bg-blue-950 px-6 sm:px-16 lg:px-20 py-24 lg:py-32 overflow-hidden">
        <span
          className="font-playfair absolute -top-4 -right-6 text-[260px] font-black text-white/[.025] leading-none pointer-events-none select-none"
          aria-hidden="true"
        >
          HOW
        </span>

        <div className="relative z-10 max-w-[560px] mb-20">
          <p className="text-[11px] font-medium tracking-[.18em] uppercase text-[#c8e63a] mb-4">How We Work</p>
          <h2 className="font-playfair text-[clamp(36px,4.5vw,56px)] font-bold text-white leading-[1.1]">
            Principles that<br />guide everything
          </h2>
        </div>

        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[.08]">
          {approaches.map((a, i) => (
            <div
              key={i}
              className="approach-card bg-[#0d0d0d] px-10 py-12 flex flex-col gap-5 transition-colors duration-300 hover:bg-[#161616]"
            >
              <div
                className="approach-icon w-11 h-11 border border-[#c8e63a]/40 flex items-center justify-center text-[#c8e63a] shrink-0 transition-all duration-300"
              >
                <a.Icon size={18} />
              </div>
              <h4 className="font-playfair text-xl font-bold text-white">{a.title}</h4>
              <p className="text-sm font-light leading-[1.75] text-white/50">{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* <section className="bg-[#c8e63a] px-6 sm:px-16 lg:px-20 py-20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
        <h2 className="font-playfair text-[clamp(28px,4vw,46px)] font-bold text-[#0d0d0d] leading-[1.15] max-w-[600px]">
          Ready to partner<br />with us on the pitch?
        </h2>
        <button className="cta-btn inline-flex items-center gap-4 bg-[#0d0d0d] text-white text-sm font-medium tracking-[.06em] uppercase px-8 py-5 transition-all duration-200 hover:bg-[#1f1f1f] whitespace-nowrap">
          Get Involved <ArrowRight size={16} />
        </button>
      </section> */}
    </div>
  );
}