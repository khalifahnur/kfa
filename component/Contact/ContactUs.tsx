"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function ContactUs() {
  const [subject, setSubject] = useState("Volunteer");

  return (
    <section className="w-full pt-20 px-4 md:px-8 bg-[#FAF9F5] font-sans flex justify-center items-center">
      <div className="w-full max-w-275 bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row p-2 md:p-4">
        <div className="relative w-full lg:w-[40%] bg-secondary rounded-2xl p-8 md:p-10 flex flex-col justify-between overflow-hidden text-white shrink-0">
          
          <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-[#0A5F2D] rounded-full opacity-90" />
          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-secondary rounded-full opacity-80" />
          <div className="relative z-10">
            <h2 className="text-2xl font-semibold mb-2 text-blue-950">Contact Information</h2>
            <p className="text-blue-950 text-sm">Got questions or ideas? Let's connect!</p>
          </div>
          <div className="relative z-10 flex flex-col gap-y-8 my-16">
            <div className="flex items-center gap-x-4">
              <svg className="w-5 h-5 text-blue-950 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-sm text-blue-950">+254 790 689192 </span>
            </div>
            <div className="flex items-center gap-x-4">
              <svg className="w-5 h-5 text-blue-950 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-sm text-blue-950">hello@kitsforafrica.org</span>
            </div>
            <div className="flex items-start gap-x-4">
              <svg className="w-5 h-5 text-blue-950 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-sm leading-relaxed text-blue-950">
                Kabarnet Rd, Woodley Estate,<br />
                 Nairobi, Kenya
              </span>
            </div>
          </div>

          <div className="relative z-10 flex items-center gap-x-4">
            <a href="https://www.facebook.com/kitsforafrica " className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#0E793C] hover:scale-110 transition-transform">
              <Image src={'https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000' }  alt='fb' 
                    width={20} 
                    height={20}
                    className="object-contain"  
                    />
            </a>
            <a href="https://www.instagram.com/kitsforafrica/ " className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#0E793C] hover:scale-110 transition-transform">
              <Image src={'https://img.icons8.com/?size=100&id=32323&format=png&color=000000' }  alt='ig' 
                    width={20} 
                    height={20}
                    className="object-contain"  
                    />
            </a>
            <a href="https://www.linkedin.com/company/kits-for-africa/about/ " className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#0E793C] hover:scale-110 transition-transform">
              <Image src={'https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000' }  alt='in' 
                    width={20} 
                    height={20}
                    className="object-contain"  
                    />
            </a>
          </div>
        </div>

        <div className="w-full lg:w-[60%] p-8 md:p-12 lg:px-16 lg:py-12 flex flex-col justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 mb-10">
            <div className="flex flex-col gap-y-2">
              <label className="text-[13px] font-semibold text-gray-800">First Name</label>
              <input
                type="text"
                placeholder="John"
                className="w-full bg-transparent border-b border-gray-300 pb-2 text-gray-600 text-sm focus:outline-none focus:border-[#0E793C] transition-colors"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label className="text-[13px] font-semibold text-gray-800">Last Name</label>
              <input
                type="text"
                placeholder="Doe"
                className="w-full bg-transparent border-b border-gray-300 pb-2 text-gray-600 text-sm focus:outline-none focus:border-[#0E793C] transition-colors"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label className="text-[13px] font-semibold text-gray-800">Email</label>
              <input
                type="email"
                placeholder="email"
                className="w-full bg-transparent border-b border-gray-300 pb-2 text-gray-600 text-sm focus:outline-none focus:border-[#0E793C] transition-colors"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label className="text-[13px] font-semibold text-gray-800">Phone Number</label>
              <input
                type="text"
                placeholder="+1234567890"
                className="w-full bg-transparent border-b border-gray-300 pb-2 text-gray-600 text-sm focus:outline-none focus:border-[#0E793C] transition-colors"
              />
            </div>
          </div>
          <div className="mb-10">
            <label className="block text-[13px] font-semibold text-gray-800 mb-4">Select Subject</label>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
              {["Volunteer", "Donation", "General Inquiry"].map((item) => (
                <label key={item} className="flex items-center gap-x-2 cursor-pointer group">
                  <div className={`w-4 h-4 rounded-full flex items-center justify-center border transition-colors ${subject === item ? 'border-[#0E793C] bg-[#0E793C]' : 'border-gray-300 bg-gray-100 group-hover:border-[#0E793C]'}`}>
                    {subject === item && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                  </div>
                  <input 
                    type="radio" 
                    name="subject" 
                    value={item}
                    checked={subject === item}
                    onChange={() => setSubject(item)}
                    className="hidden" 
                  />
                  <span className="text-sm text-gray-600">{item}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-y-2 mb-10">
            <label className="text-[13px] font-semibold text-gray-800">Message</label>
            <textarea
              placeholder="Write your message..."
              rows={1}
              className="w-full bg-transparent border-b border-gray-300 pb-2 text-gray-600 text-sm focus:outline-none focus:border-[#0E793C] transition-colors resize-none"
            />
          </div>

          <div className="flex justify-start">
            <button className="bg-secondary text-blue-950 font-medium text-[13px] px-8 py-3 rounded-md hover:bg-secondary/60 transition-colors shadow-md">
              Send Message
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}