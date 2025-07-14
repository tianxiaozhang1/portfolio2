"use client";
import React, { useEffect, useRef, useState } from 'react';

import Profile from './components/homepage/Profile';
import ProjectsHeading from './components/homepage/ProjectsHeading';
import BurgerShack from './components/homepage/BurgerShack';
import Momenta from './components/homepage/Momenta';
import CityBank from './components/homepage/CityBank';
import Venus from './components/homepage/Venus';
import NowModels from './components/homepage/NowModels';

import Minesweeper from './projects/Minesweeper';
import Freecell from './projects/FreeCell';
import FreeCell2 from './components/versiontwo/FreeCell'
// import Sudoku from './projects/Sudoku';
import Sudoku from './components/versiontwo/Sudoku'
import Pathfinder from './projects/Pathfinder';
import Pathfinder2 from './components/versiontwo/Pathfinder'
import Sorting from './components/versiontwo/Sorting'
// import Sorting2 from './projects/Sorting2';

import { Oswald } from 'next/font/google';
const oswald = Oswald({ subsets: ['latin'], weight: "400" });

const titleCSS = "w-92 h-18 md:w-190 md:h-22 lg:flex lg:w-26 lg:h-120 xl:w-316 xl:h-28 text-3xl lg:text-5xl font-semibold text-slate-500 mx-auto mt-3 md:mt-6 flex items-center text-center justify-center";

// Define a type for your section data for clarity
interface SectionData {
  id: string;
  color: string;
  text: string;
  order: number;
  // We'll store the actual calculated height here
  height?: number;
  // We can define a different strategy for trigger, e.g., an intersectionRatio or a pixel offset
  triggerRatio?: number; // e.g., 0.5 for 50% visible
}

// Define a type for what we store in intersectingSections.current
interface IntersectingSectionInfo {
  id: string;
  ratio: number;
  color: string;
  order: number;
}

export default function Home() {
    const [currentPageBackgroundColor, setCurrentPageBackgroundColor] = useState<string>('#d7eaf7'); // Set initial background to section1's color

    // Create individual refs for each section
    const section1Ref = useRef<HTMLDivElement>(null);
    const section2Ref = useRef<HTMLDivElement>(null);
    const section3Ref = useRef<HTMLDivElement>(null);
    const section4Ref = useRef<HTMLDivElement>(null);

    // Use a ref to store the current intersection status of each section
    const intersectingSections = useRef<Record<string, IntersectingSectionInfo>>({});

  // Use a ref to store the dynamic section configurations
    const sectionConfigs = useRef<Record<string, SectionData>>({
        section1: { id: 'section1', color: '#d7eaf7', text: 'Section One (Pink)', order: 0, triggerRatio: 0.2 }, // Change when 20% of section1 is visible
        section2: { id: 'section2', color: '#f9fafb', text: 'Section Two (Light Blue)', order: 1, triggerRatio: 0.1 }, // Change when 30% of section2 is visible
        section3: { id: 'section3', color: '#509296', text: 'Section Three (Light Green)', order: 2, triggerRatio: 0.1 },
        section4: { id: 'section4', color: '#446A37', text: 'Section Four (Gold)', order: 3, triggerRatio: 0.05 },
    });

    useEffect(() => {
      // Set initial body background color
      document.body.style.backgroundColor = sectionConfigs.current.section1.color;

      // Dynamically update section heights AFTER render
      // Use a setTimeout to ensure all child components have rendered and measured
      const updateSectionHeights = () => {
        if (section1Ref.current) sectionConfigs.current.section1.height = section1Ref.current.offsetHeight;
        if (section2Ref.current) sectionConfigs.current.section2.height = section2Ref.current.offsetHeight;
        if (section3Ref.current) sectionConfigs.current.section3.height = section3Ref.current.offsetHeight;
        if (section4Ref.current) sectionConfigs.current.section4.height = section4Ref.current.offsetHeight;
        console.log("Updated Section Heights:", sectionConfigs.current);
      };

      // Use a small delay to ensure DOM is fully rendered
      const timer = setTimeout(updateSectionHeights, 100);
      // You might also want to re-run this on window resize
      window.addEventListener('resize', updateSectionHeights);


      const thresholdArray = Array.from({ length: 101 }, (_, i) => i / 100);

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const sectionId = entry.target.id;
          const sectionData = sectionConfigs.current[sectionId]; // Get from the ref

          if (!sectionData) {
            console.warn(`Section data not found for ID: ${sectionId}`);
            return;
          }

          if (entry.isIntersecting) {
            intersectingSections.current[sectionId] = {
              id: sectionId,
              ratio: entry.intersectionRatio,
              color: sectionData.color,
              order: sectionData.order
            };
          } else {
            delete intersectingSections.current[sectionId];
          }
        });

        const activeSections = Object.values(intersectingSections.current);

        if (activeSections.length === 0) {
          return;
        }

        // Sort by document order to break ties, especially important if multiple sections intersect
        activeSections.sort((a, b) => a.order - b.order);

        let dominantSectionCandidate: IntersectingSectionInfo | null = null;

        // First pass: Prioritize sections that meet their triggerRatio
        activeSections.forEach(section => {
          const originalSectionData = sectionConfigs.current[section.id];
          if (!originalSectionData) return;

          // Use triggerRatio directly from config
          const triggerThreshold = originalSectionData.triggerRatio !== undefined ? originalSectionData.triggerRatio : 0.5; // Default to 0.5 if not set

          if (section.ratio >= triggerThreshold) {
            // If a section meets its trigger threshold, it's a strong candidate
            if (!dominantSectionCandidate ||
                section.ratio > dominantSectionCandidate.ratio || // Higher ratio wins
                (section.ratio === dominantSectionCandidate.ratio && section.order < dominantSectionCandidate.order)) { // Tie-break by order
              dominantSectionCandidate = section;
            }
          }
        });

        // Fallback: If no section explicitly meets its trigger threshold, pick the one with the highest ratio
        // This ensures a color is always selected if something is intersecting
        if (!dominantSectionCandidate && activeSections.length > 0) {
          activeSections.forEach(section => {
            if (!dominantSectionCandidate ||
                section.ratio > dominantSectionCandidate.ratio ||
                (section.ratio === dominantSectionCandidate.ratio && section.order < dominantSectionCandidate.order)) {
              dominantSectionCandidate = section;
            }
          });
        }

        if (dominantSectionCandidate !== null) {
          const finalDominantSection = dominantSectionCandidate as IntersectingSectionInfo;

          if (currentPageBackgroundColor !== finalDominantSection.color) {
            setCurrentPageBackgroundColor(finalDominantSection.color);
            document.body.style.backgroundColor = finalDominantSection.color;
            console.log(`Final color set to ${finalDominantSection.color} for ${finalDominantSection.id} (ratio: ${finalDominantSection.ratio.toFixed(2)})`);
          }
        }
      }, {
        root: null,
        rootMargin: '0px',
        threshold: thresholdArray,
      });

      // Observe all relevant sections
      const sectionsToObserve = [section1Ref, section2Ref, section3Ref, section4Ref];
      sectionsToObserve.forEach(ref => {
        if (ref.current) observer.observe(ref.current);
      });

      // Cleanup function
      return () => {
        observer.disconnect();
        document.body.style.backgroundColor = '#FFFFFF'; // Reset on unmount
        clearTimeout(timer); // Clear the initial height update timer
        window.removeEventListener('resize', updateSectionHeights); // Remove resize listener
      };
    }, [currentPageBackgroundColor]); // Added currentPageBackgroundColor to dependencies to avoid stale closure (though not strictly necessary for this observer, good practice)

    return (
      <div className='bg-slate-50'>
        {/* Set main wrapper background to the current page background color */}
        {/* This div's background won't be seen if body's background is used, but good as fallback/container */}
        <div style={{ backgroundColor: currentPageBackgroundColor, transition: 'background-color 0.8s ease-in-out' }}>

          <div id="section1" ref={section1Ref} className='flex justify-center mt-0 md:mt-0 '>
            <Profile />
          </div>

          <div id="section2" ref={section2Ref}>
            <ProjectsHeading content="Projects" textColour="text-[#4994C4]" bgColour="bg-[#f9fafb]" />

            <div className='flex justify-center mt-3 md:mt-6'><BurgerShack /></div>
            <div className='flex justify-center mt-3 md:mt-6'><Momenta /></div>
            <div className='flex justify-center mt-3 md:mt-6'><CityBank /></div>
            <div className='flex justify-center mt-3 md:mt-6'><Venus /></div>
            <div className='flex justify-center mt-3 md:mt-6'><NowModels /></div>
          </div>

          <div id="section3" ref={section3Ref}> {/* Added ref and ID for section 3 */}
            <ProjectsHeading content="Games" textColour="text-[#f9fafb]" bgColour="bg-[#509296]" />
            <div className='flex justify-center mt-3 md:mt-6'><Minesweeper /></div>
            {/* <div className='flex justify-center mt-3 md:mt-6'><Freecell /></div> */}
            <div className='flex justify-center mt-3 md:mt-6'><FreeCell2 /></div>
            <div className='flex justify-center mt-3 md:mt-6'><Sudoku /></div>
          </div>

          <div id="section4" ref={section4Ref}> {/* Added ref and ID for section 4 */}
            <ProjectsHeading content="Algorithm" textColour="text-[#f9fafb]" bgColour="bg-[#446A37]" />
            <div className='flex justify-center mt-3 md:mt-6'><Pathfinder2 /></div>
            <div className='flex justify-center mt-3 md:mt-6'><Sorting /></div>
          </div>

          <div className={`h-20 w-full`}></div>
        </div>

        {/* Global styles for smooth transition */}
        <style jsx global>{`
          body {
            transition: background-color 0.8s ease-in-out;
          }
        `}</style>
      </div>
    );
}