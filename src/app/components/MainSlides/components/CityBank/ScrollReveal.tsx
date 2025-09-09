// components/CityBank/ScrollReveal.jsx
"use client";

import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  // Add an optional delay prop
  delay?: number;
}

export const ScrollReveal = ({ children, delay = 0.3 }: ScrollRevealProps) => { // Use a default value
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} style={{ position: 'relative', overflow: 'hidden' }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 52 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.6, ease: "easeIn", delay }} // Use the delay prop here
      >
        {children}
      </motion.div>
    </div>
  );
};