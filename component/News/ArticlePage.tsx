"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { RichText } from "../RichText";

const FontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Barlow:wght@300;400;500;600&display=swap');

    :root {
      --ink:   #111210;
      --cream: #f8f5ef;
      --green:  #c8e63a;
      --gold-light: rgba(184,146,42,0.15);
      --rule:  rgba(17,18,16,0.12);
    }

    .art-root { background: var(--cream); font-family: 'Barlow', sans-serif; color: var(--ink); }
    .font-baskerville { font-family: 'Libre Baskerville', serif; }
    .font-barlow      { font-family: 'Barlow', sans-serif; }

    /* Hero overlay gradient */
    .hero-overlay {
      background: linear-gradient(
        to bottom,
        rgba(0,0,0,0)     0%,
        rgba(0,0,0,0.25) 40%,
        rgba(17,18,16,0.85) 80%,
        var(--ink)        100%
      );
    }

    /* Animated entrance */
    @keyframes fadeUp {
      from { opacity:0; transform:translateY(20px); }
      to   { opacity:1; transform:translateY(0); }
    }
    .fade-up-1 { animation: fadeUp 0.7s ease both 0.1s; }
    .fade-up-2 { animation: fadeUp 0.7s ease both 0.25s; }
    .fade-up-3 { animation: fadeUp 0.7s ease both 0.4s; }
    .fade-up-4 { animation: fadeUp 0.7s ease both 0.55s; }

    /* article body typography */
    .article-body {
      font-family: 'Libre Baskerville', serif;
      font-size: 17px;
      line-height: 1.85;
      color: #2a2a28;
    }
    .article-body p { margin-bottom: 1.5em; }
    .article-body h2 {
      font-family: 'Barlow', sans-serif;
      font-weight: 600;
      font-size: 22px;
      letter-spacing: 0.01em;
      margin: 2.2em 0 0.7em;
      color: var(--ink);
    }
    .article-body blockquote {
      border-left: 3px solid var(--green);
      margin: 2em 0;
      padding: 0.5em 0 0.5em 1.5em;
      font-style: italic;
      color: #555;
    }

    /* share button */
    .share-btn {
      display:flex; align-items:center; gap:8px;
      padding: 8px 18px;
      border-radius: 2px;
      border: 1px solid var(--rule);
      background: transparent;
      font-family: 'Barlow', sans-serif;
      font-size: 12px;
      font-weight: 500;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--ink);
      cursor:pointer;
      transition: background 0.2s, border-color 0.2s, color 0.2s;
    }
    .share-btn:hover {
      background: var(--ink);
      border-color: var(--ink);
      color: var(--cream);
    }
    .share-btn:hover svg path, .share-btn:hover svg rect, .share-btn:hover svg circle {
      stroke: var(--cream);
    }

    /* tag pill */
    .tag-pill {
      display:inline-block;
      padding: 3px 10px;
      border: 1px solid var(--rule);
      border-radius: 2px;
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--green);
      font-family: 'Barlow', sans-serif;
      background: var(--gold-light);
    }

    /* thin gold rule */
    .gold-rule {
      border: none;
      height: 1px;
      background: linear-gradient(90deg, var(--green), transparent);
      margin: 0;
    }

    /* top accent stripe */
    .accent-stripe {
      height: 3px;
      background: linear-gradient(90deg, var(--ink) 0%, var(--green) 50%, var(--ink) 100%);
    }

    /* reading progress bar */
    .progress-bar {
      position: fixed;
      top: 0; left: 0;
      height: 3px;
      background: var(--green);
      z-index: 100;
      transition: width 0.1s linear;
    }

    /* drop cap */
    .article-body > p:first-of-type::first-letter {
      float: left;
      font-family: 'Libre Baskerville', serif;
      font-size: 5.2em;
      line-height: 0.75;
      margin-right: 0.08em;
      margin-top: 0.06em;
      color: var(--green);
      font-weight: 700;
    }
  `}</style>
);

function useReadingProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const update = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      setProgress((scrollTop / (scrollHeight - clientHeight)) * 100);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return progress;
}

function useShareUrl() {
  const [url, setUrl] = useState("");
  useEffect(() => { setUrl(window.location.href); }, []);
  return url;
}

interface Article {
  cloudinaryUrl?: string;
  title: string;
  publishedDate: string;
  excerpt?: string;
  content: any;
  category?: string;
  author?: string;
  readTime?: number;
}

interface Props { article: Article; }

export default function ArticlePage({ article }: Props) {
  const progress = useReadingProgress();
  const shareUrl = useShareUrl();

  const formattedDate = new Date(article.publishedDate).toLocaleDateString("en-KE", {
    year: "numeric", month: "long", day: "numeric",
  });

  const shareLinks = [
    {
      label: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      label: "Twitter / X",
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(article.title)}`,
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
    },
    {
      label: "WhatsApp",
      href: `https://wa.me/?text=${encodeURIComponent(article.title + " " + shareUrl)}`,
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(article.title)}`,
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
  ];

  return (
    <>
      <FontLoader />

      <div className="progress-bar" style={{ width: `${progress}%` }} />

      <div className="art-root min-h-screen">

        {article.cloudinaryUrl ? (
          <div className="relative w-full" style={{ height: "70vh", minHeight: "420px" }}>
            <Image
              src={article.cloudinaryUrl}
              alt={article.title}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="hero-overlay absolute inset-0" />

            <div className="absolute bottom-0 left-0 right-0 px-6 md:px-16 lg:px-24 pb-12 max-w-5xl">
              {article.category && (
                <div className="fade-up-1 mb-4">
                  <span className="tag-pill">{article.category}</span>
                </div>
              )}
              <h1
                className="fade-up-2 font-baskerville text-white leading-tight mb-4"
                style={{ fontSize: "clamp(28px, 4.5vw, 58px)", textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}
              >
                {article.title}
              </h1>
              <div className="fade-up-3 flex items-center gap-4" style={{ color: "rgba(255,255,255,0.65)", fontSize: "13px" }}>
                <time className="font-barlow uppercase tracking-widest">{formattedDate}</time>
                {article.readTime && (
                  <>
                    <span style={{ color: "rgba(255,255,255,0.3)" }}>·</span>
                    <span className="font-barlow">{article.readTime} min read</span>
                  </>
                )}
                {article.author && (
                  <>
                    <span style={{ color: "rgba(255,255,255,0.3)" }}>·</span>
                    <span className="font-barlow">By {article.author}</span>
                  </>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div style={{ background: "var(--ink)", paddingTop: "80px", paddingBottom: "48px" }}
               className="px-6 md:px-16 lg:px-24">
            {article.category && <div className="mb-4"><span className="tag-pill">{article.category}</span></div>}
            <h1 className="font-baskerville text-white leading-tight mb-4"
                style={{ fontSize: "clamp(28px, 4.5vw, 58px)", maxWidth: "800px" }}>
              {article.title}
            </h1>
            <div className="flex items-center gap-4" style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px" }}>
              <time className="font-barlow uppercase tracking-widest">{formattedDate}</time>
              {article.readTime && <><span>·</span><span>{article.readTime} min read</span></>}
              {article.author && <><span>·</span><span>By {article.author}</span></>}
            </div>
          </div>
        )}

        <div className="relative z-10 px-4 md:px-8 -mt-6 pb-20">
          <div
            className="max-w-4xl mx-auto"
            style={{
              background: "var(--cream)",
              boxShadow: "0 -4px 60px rgba(0,0,0,0.18), 0 20px 60px rgba(0,0,0,0.08)",
            }}
          >
            <div className="accent-stripe" />

            <div className="px-8 md:px-14 lg:px-20 pt-12 pb-16">
              {article.excerpt && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="font-baskerville mb-10"
                  style={{
                    fontSize: "clamp(17px, 2vw, 21px)",
                    lineHeight: 1.7,
                    fontStyle: "italic",
                    color: "#4a4a47",
                    borderLeft: "3px solid var(--green)",
                    paddingLeft: "24px",
                    paddingTop: "8px",
                    paddingBottom: "8px",
                  }}
                >
                  {article.excerpt}
                </motion.div>
              )}

              {/* Ornament divider */}
              <div className="flex items-center gap-4 mb-10">
                <div className="gold-rule flex-1" />
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <rect x="7" y="0" width="4" height="4" fill="var(--green)" transform="rotate(0 9 9) translate(-2,-2)"/>
                  <rect x="0" y="7" width="4" height="4" fill="var(--green)" opacity="0.4"/>
                  <rect x="14" y="7" width="4" height="4" fill="var(--green)" opacity="0.4"/>
                  <rect x="7" y="14" width="4" height="4" fill="var(--green)" opacity="0.4"/>
                </svg>
                <div className="flex-1" style={{ height: "1px", background: "linear-gradient(90deg, transparent, var(--green))" }} />
              </div>
              <motion.div
                className="article-body"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <RichText content={article.content} />
              </motion.div>
              <div className="mt-16 mb-10" style={{ borderTop: "2px solid var(--ink)" }} />
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div>
                  <p
                    className="font-barlow uppercase tracking-widest mb-3"
                    style={{ fontSize: "10px", fontWeight: 600, color: "var(--green)" }}
                  >
                    Share this story
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {shareLinks.map((s) => (
                      <motion.a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Share on ${s.label}`}
                        className="share-btn"
                        whileHover={{ y: -1 }}
                        whileTap={{ scale: 0.96 }}
                      >
                        {s.icon}
                        {s.label}
                      </motion.a>
                    ))}
                  </div>
                </div>
                <Link
                  href="/news"
                  className="font-barlow flex items-center gap-2 group"
                  style={{ fontSize: "13px", color: "var(--ink)", textDecoration: "none" }}
                >
                  <svg
                    width="16" height="16" viewBox="0 0 16 16" fill="none"
                    className="transition-transform duration-200 group-hover:-translate-x-1"
                  >
                    <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span style={{ borderBottom: "1px solid var(--rule)" }}>Back to News</span>
                </Link>
              </div>

            </div>

            <div className="accent-stripe" />
          </div>
        </div>

      </div>
    </>
  );
}