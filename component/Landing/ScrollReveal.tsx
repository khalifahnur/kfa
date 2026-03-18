"use client";

import React from "react";
import { motion } from "framer-motion";

export const ScrollReveal = ({ 
  children, 
  delay = 0, 
  className = "" 
}: { 
  children: React.ReactNode, 
  delay?: number, 
  className?: string 
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.2 }}
    transition={{ duration: 0.7, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);