// components/ScrollRevealSection.jsx
"use client";
// components/ScrollRevealGSAP.jsx
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

gsap.registerPlugin(ScrollTrigger);

const ScrollRevealGSAP = () => {
  const mainRef = useRef(null);
  const contentARef = useRef(null); // Component A (the background image/initial content)
  const contentBRef = useRef(null); // Component B (the content that slides up)

  useEffect(() => {
    // 1. Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2, // Keep this for overall scroll feel
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 0.8,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // 2. Set up the GSAP animation with ScrollTrigger
    if (contentARef.current && contentBRef.current) {
      // Ensure Component B starts off-screen below Component A's natural flow position
      gsap.set(contentBRef.current, { yPercent: 100 }); // Initially move B down by its own height (100% of its height)

      gsap.to(contentBRef.current, {
        yPercent: 0, // Animate Component B's Y position to 0% (its natural position)
        ease: 'none', // Use linear ease for direct scrub connection
        scrollTrigger: {
          trigger: contentARef.current, // The trigger is still Component A
          // We want the animation to start when the bottom of Component A hits the middle of the viewport.
          // This allows part of A to be visible, but also ensures enough content to trigger the reveal.
          start: 'center center', // Animation starts when the center of A hits the center of the viewport
          // The animation should end after a certain scroll distance.
          // This 'end' value controls how much scroll is needed for the animation to complete.
          // Let's make it more than one viewport height for a 'slower' transition.
          end: '+=200%', // Animation ends after scrolling 200% of the viewport height from the start
          scrub: 2, // A larger scrub value (e.g., 2 or 3) makes the animation feel "slower" and more responsive to scroll, meaning more scroll distance for the animation to complete.
          // pin: true, // We don't want to pin A, just have B slide over it
          markers: true, // Keep for debugging, set to false for production
          onUpdate: self => {
            // Optional: log progress for debugging
            // console.log("B progress:", self.progress.toFixed(3), "direction:", self.direction);
          }
        }
      });
    }

    // Cleanup
    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={mainRef} className="relative w-full overflow-hidden">
      {/* Content above A - pushes everything down initially */}
      <div className="h-screen bg-gray-700 text-white flex items-center justify-center">
        <h2 className="text-4xl">Content Above A (Initial Scroll)</h2>
      </div>

      {/*
        Component A: This is now the *background* content.
        It should be placed *before* Component B in the DOM.
        We make it taller than the viewport to ensure part of it is always hidden
        until B slides up.
      */}
      <div
        ref={contentARef}
        className="relative w-full h-[150vh] bg-blue-500 text-white flex flex-col items-center justify-center z-10" // h-[150vh] makes it taller than viewport
      >
        <h1 className="text-5xl mb-4">Component A (Background Content)</h1>
        <p className="text-2xl">A large portion of me is hidden initially!</p>
        <p className="absolute bottom-10 text-xl">Scroll more to reveal Component B...</p>
      </div>

      {/*
        Component B: The component that slides up and covers Component A.
        It must be absolutely positioned *within the same stacking context*
        as Component A to slide over it effectively.
        However, for this "slide up from below" effect where A is background,
        B should effectively sit "on top" of A in terms of Z-index,
        and its initial position (before the animation) should be directly below A.

        Since we're using `yPercent` to animate, `top: 0` makes sense, as `yPercent`
        will then move it relative to its own height from that `top:0` position.
      */}
      <div
        ref={contentBRef}
        className="absolute top-0 left-0 w-full h-screen bg-red-500 text-white flex items-center justify-center z-20"
      >
        <div className="text-center p-8 bg-white text-gray-800 rounded shadow-lg">
          <h1 className="text-4xl font-bold mb-4">Component B (The Revealer)</h1>
          <p className="text-lg">This content slides up to cover Component A!</p>
        </div>
      </div>

      {/*
        This placeholder/spacer div is crucial for providing the scrollable height
        *after* Component A and *before* Component B fully covers A.
        It needs to be tall enough to allow the `end` scrollTrigger to complete.
        If `end: '+=200%'` (relative to viewport), you might need an element
        that extends that far.
      */}
      <div className="h-[250vh] w-full bg-transparent pointer-events-none">
        {/* This creates enough scrollable space below A to allow B to animate up */}
      </div>

      {/* Content below the animation */}
      <div className="h-screen bg-gray-800 text-white flex items-center justify-center">
        <h2 className="text-4xl">Content Below the Reveal</h2>
      </div>
    </div>
  );
};

export default ScrollRevealGSAP;