"use client";
import React, { useEffect, useRef, useState } from 'react';

import Profile from './components/homepage/Profile';
import Profile2 from './components/homepage/Profile2';
import ProjectsHeading from './components/homepage/ProjectsHeading';
import BurgerShack from './components/homepage/BurgerShack';
import Momenta from './components/homepage/Momenta';
import CityBank from './components/homepage/CityBank';
import Venus from './components/homepage/Venus';
import NowModels from './components/homepage/NowModels';

import Minesweeper from './projects/Minesweeper';
// import Freecell from './projects/FreeCell';
import FreeCell2 from './components/versiontwo/FreeCell'
// import Sudoku from './projects/Sudoku';
import Sudoku from './components/versiontwo/Sudoku'
// import Pathfinder from './projects/Pathfinder';
import Pathfinder2 from './components/versiontwo/Pathfinder'
import Sorting from './components/versiontwo/Sorting'
// import Sorting2 from './projects/Sorting2';
// import { Oswald } from 'next/font/google';
// const oswald = Oswald({ subsets: ['latin'], weight: "400" });

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
    const [currentPageBackgroundColor, setCurrentPageBackgroundColor] = useState<string>('#fff');

    // Create individual refs for each section
    const section1Ref = useRef<HTMLDivElement>(null);
    const section2Ref = useRef<HTMLDivElement>(null);
    const section3Ref = useRef<HTMLDivElement>(null);
    const section4Ref = useRef<HTMLDivElement>(null);

    // Use a ref to store the current intersection status of each section
    const intersectingSections = useRef<Record<string, IntersectingSectionInfo>>({});

    const sectionConfigs = useRef<Record<string, SectionData>>({
        section1: { id: 'section1', color: '#fff', text: 'Section One (White)', order: 0 },
        section2: { id: 'section2', color: '#ebeee8', text: 'Section Two (Light Blue)', order: 1 },
        section3: { id: 'section3', color: '#509296', text: 'Section Three (Light Green)', order: 2 },
        section4: { id: 'section4', color: '#446A37', text: 'Section Four (Gold)', order: 3 },
    });

    useEffect(() => {
        document.body.style.backgroundColor = sectionConfigs.current.section1.color;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const sectionId = entry.target.id;
                const sectionData = sectionConfigs.current[sectionId];

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

            // Find the section with the highest intersectionRatio
            const dominantSection = activeSections.reduce((prev, current) => {
                // If the ratios are equal, prioritize the one that appears earlier in the document
                if (current.ratio === prev.ratio) {
                    return current.order < prev.order ? current : prev;
                }
                // Otherwise, prioritize the one with the highest ratio
                return (current.ratio > prev.ratio) ? current : prev;
            }, activeSections[0]);

            if (dominantSection && currentPageBackgroundColor !== dominantSection.color) {
                setCurrentPageBackgroundColor(dominantSection.color);
                document.body.style.backgroundColor = dominantSection.color;
                console.log(`Final color set to ${dominantSection.color} for ${dominantSection.id} (ratio: ${dominantSection.ratio.toFixed(2)})`);
            }
        }, {
            root: null,
            rootMargin: '0px',
            threshold: Array.from({ length: 101 }, (_, i) => i / 100),
        });

        const sectionsToObserve = [section1Ref, section2Ref, section3Ref, section4Ref];
        sectionsToObserve.forEach(ref => {
            if (ref.current) observer.observe(ref.current);
        });

        // Cleanup function
        return () => {
            observer.disconnect();
            document.body.style.backgroundColor = '#fff';
        };
    }, [currentPageBackgroundColor]);

    return (
      <div className='bg-slate-50'>
        {/* Set main wrapper background to the current page background color */}
        {/* This div's background won't be seen if body's background is used, but good as fallback/container */}
        <div style={{ backgroundColor: currentPageBackgroundColor, transition: 'background-color 0.8s ease-in-out' }}>

        <div id="section1" ref={section1Ref} className='flex justify-center items-start md:items-center mt-0 md:mt-0 h-screen'>
          {/* flex */}
            <div>
              <Profile2 />
            </div>
          </div>

          <div id="section2" ref={section2Ref}>
            <ProjectsHeading content="Projects" textColour="text-[#4994C4]" bgColour="bg-[#ebeee8]" />

            <div className='flex justify-center mt-3 md:mt-6'><BurgerShack /></div>
            <div className='flex justify-center mt-3 md:mt-6'><Momenta /></div>
            <div className='flex justify-center mt-3 md:mt-6'><CityBank /></div>
            <div className='flex justify-center mt-3 md:mt-6'><Venus /></div>
            <div className='flex justify-center mt-3 md:mt-6'><NowModels /></div>
          </div>

          <div id="section3"  ref={section3Ref}> {/* Added ref and ID for section 3 */}
            <ProjectsHeading content="Games" textColour="text-[#f9fafb]" bgColour="bg-[#509296]" />
            <div className='flex justify-center mt-3 md:mt-6'><Minesweeper /></div>
            {/* <div className='flex justify-center mt-3 md:mt-6'><Freecell /></div> */}
            <div className='flex justify-center mt-3 md:mt-6'><FreeCell2 /></div>
            <div className='flex justify-center mt-3 md:mt-6'><Sudoku /></div>
          </div>

          <div id="section4"  ref={section4Ref}> {/* Added ref and ID for section 4 */}
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