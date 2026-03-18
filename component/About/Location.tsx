"use client";

import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { motion } from "framer-motion";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

const LOCATIONS = {
  pilot: { name: "Murang'a", lng: 37.1478, lat: -0.7839, color: "#3DF2A7", scale: 1 },
  expansions: [
    { name: "Kirinyaga", lng: 37.3090, lat: -0.5023, color: "#FFFFFF", scale: 0.8 },
    { name: "Nyeri", lng: 36.9535, lat: -0.4284, color: "#FFFFFF", scale: 0.8 },
    { name: "Kiambu", lng: 36.8290, lat: -1.1714, color: "#FFFFFF", scale: 0.8 },
    { name: "Laikipia", lng: 36.7768, lat: 0.3606, color: "#FFFFFF", scale: 0.8 },
  ]
};

const FontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500&display=swap');
    .font-playfair { font-family: 'Playfair Display', serif; }
    .font-dm       { font-family: 'DM Sans', sans-serif; }

  `}</style>
);

export default function LocationGlobe() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  useEffect(() => {
    if (!mapContainer.current || mapRef.current) return;

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/dark-v11",
      center: [LOCATIONS.pilot.lng, LOCATIONS.pilot.lat],
      zoom: 1,
      projection: "globe", 
      interactive: true, 
    });

    mapRef.current = map;

    map.on("style.load", () => {
      map.setFog({
        color: "rgb(186, 210, 235)", 
        "high-color": "rgb(36, 92, 223)",
        "horizon-blend": 0.02,
        "space-color": "rgb(11, 11, 25)",
        "star-intensity": 0.6,
      });

      new mapboxgl.Marker({ color: LOCATIONS.pilot.color, scale: LOCATIONS.pilot.scale })
        .setLngLat([LOCATIONS.pilot.lng, LOCATIONS.pilot.lat])
        .addTo(map);

      LOCATIONS.expansions.forEach(loc => {
        new mapboxgl.Marker({ color: loc.color, scale: loc.scale })
          .setLngLat([loc.lng, loc.lat])
          .addTo(map);
      });

      setIsMapLoaded(true);
    });

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!isMapLoaded || !mapRef.current || !mapContainer.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          mapRef.current?.flyTo({
            center: [LOCATIONS.pilot.lng, LOCATIONS.pilot.lat],
            zoom: 7.5,    
            speed: 0.8,     
            curve: 1.5,     
            pitch: 45,      
            essential: true,
          });
          observer.disconnect(); 
        }
      },
      { threshold: 0.5 } 
    );

    observer.observe(mapContainer.current);

    return () => observer.disconnect();
  }, [isMapLoaded]);

  return (
    <section className="font-dm w-full py-24 bg-[#f8f4ee] text-[#0d0d0d] overflow-hidden flex justify-center items-center">
      <FontLoader />
      <div className="w-full max-w-300 mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-y-6"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
            <span className="text-xl font-bold tracking-widest text-blue-950 uppercase">
              Where We Work
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-[#0d0d0d] tracking-tight leading-[1.1]">
            Rooted in Kenya.<br />
            Built for impact.
          </h2>
          
          <p className="text-[#0d0d0d] text-lg md:text-[19px] leading-relaxed max-w-md mt-4">
            Our pilot programme operates in <span className="text-[#0d0d0d] font-medium">Murang'a County, Kenya</span>, 
            with plans to expand across five counties in the Central Kenya region: 
            Murang'a, Kirinyaga, Nyeri, Kiambu, and Laikipia.
          </p>
          <div className="mt-8 flex flex-col gap-y-4 text-sm font-medium">
            <div className="flex items-center gap-x-3">
              <span className="w-3 h-3 rounded-full bg-secondary" />
              <span className="text-[#0d0d0d]">Active Pilot Programme (Murang'a)</span>
            </div>
            <div className="flex items-center gap-x-3">
              <span className="w-3 h-3 rounded-full " />
              <span className="text-[#0d0d0d]">Planned Expansion Regions</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative w-full aspect-square md:aspect-auto md:h-137.5 rounded-[2.5rem] overflow-hidden shadow-[0_0_50px_rgba(36,92,223,0.1)] border border-white/10"
        >
          <div ref={mapContainer} className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing" />
          <div className="absolute inset-0 pointer-events-none rounded-[2.5rem] shadow-[inset_0_0_60px_rgba(10,10,10,0.9)]" />
        </motion.div>

      </div>
    </section>
  );
}