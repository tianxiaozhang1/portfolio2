"use client"
import React, { useRef } from 'react';
import { useInView, motion } from 'framer-motion';

import Image from 'next/image';

// Import all your card images
import C10 from '../../../images/freecell/10c.png';
import D10 from '../../../images/freecell/10d.png';
import H10 from '../../../images/freecell/10h.png';
import S10 from '../../../images/freecell/10s.png';
import C11 from '../../../images/freecell/11c.png';
import D11 from '../../../images/freecell/11d.png';
import H11 from '../../../images/freecell/11h.png';
import S11 from '../../../images/freecell/11s.png';
import C12 from '../../../images/freecell/12c.png';
import D12 from '../../../images/freecell/12d.png';
import H12 from '../../../images/freecell/12h.png';
import S12 from '../../../images/freecell/12s.png';
import C13 from '../../../images/freecell/13c.png';
import D13 from '../../../images/freecell/13d.png';
import H13 from '../../../images/freecell/13h.png';
import S13 from '../../../images/freecell/13s.png';
import Blank from '../../../images/freecell/blank.png'; // Import the blank image

// Define a constant for the stacking offset, if applicable to all
const STACKING_OFFSET_Y = -233;
const BASE_INITIAL_Y_OFFSET = 280; // This seems to be a common offset in your initial Y calculations

// Card data with their specific animation properties, now with calculated delays
const animatedCardsData = [
    // Jacks
    {
        id: '11h', // Jack in 1st column
        src: H11,
        alt: '11h',
        initialX: 0,
        initialY: 47 + BASE_INITIAL_Y_OFFSET,
        targetX: 450,
        targetY: -423 + BASE_INITIAL_Y_OFFSET,
        initialZ: 100,
        targetZ: 100,
        delay: 0.03, // Calculated delay
        stackOffset: STACKING_OFFSET_Y,
    },
    {
        id: '11s', // Jack in 2nd column
        src: S11,
        alt: '11s',
        initialX: 0,
        initialY: -233 + 47 + BASE_INITIAL_Y_OFFSET,
        targetX: 450, // Assuming this moves to the same X as H11, if not adjust
        targetY: -656 + BASE_INITIAL_Y_OFFSET,
        initialZ: 100,
        targetZ: 100,
        delay: 0.116, // Calculated delay
        stackOffset: 0, // This one had 0 stacking offset in your original
    },
    {
        id: '11d', // Jack in 3rd column
        src: D11,
        alt: '11d',
        initialX: 0,
        initialY: -233 + 47 + BASE_INITIAL_Y_OFFSET,
        targetX: -450,
        targetY: -376,
        initialZ: 100,
        targetZ: 100,
        delay: 0.202, // Calculated delay
        stackOffset: 0, // This one had 0 stacking offset in your original
    },
    {
        id: '11c', // Jack in 4th column
        src: C11,
        alt: '11c',
        initialX: 0,
        initialY: -233 + 47 + BASE_INITIAL_Y_OFFSET,
        targetX: -450, // Assuming this moves to the same X as D11, if not adjust
        targetY: -376,
        initialZ: 100,
        targetZ: 100,
        delay: 0.288, // Calculated delay
        stackOffset: 0, // This one had 0 stacking offset in your original
    },
    // Queens
    {
        id: '12s', // Queen in 1st column
        src: S12,
        alt: '12s',
        initialX: 0,
        initialY: BASE_INITIAL_Y_OFFSET, // 0+280
        targetX: 675,
        targetY: -423 + BASE_INITIAL_Y_OFFSET,
        initialZ: 10,
        targetZ: 200,
        delay: 0.374, // Calculated delay
        stackOffset: STACKING_OFFSET_Y,
    },
    {
        id: '12h', // Queen in 2nd column
        src: H12,
        alt: '12h',
        initialX: 0,
        initialY: BASE_INITIAL_Y_OFFSET, // 0+280
        targetX: 225,
        targetY: -423 + BASE_INITIAL_Y_OFFSET,
        initialZ: 10,
        targetZ: 200,
        delay: 0.460, // Calculated delay
        stackOffset: STACKING_OFFSET_Y,
    },
    {
        id: '12c', // Queen in 3rd column
        src: C12,
        alt: '12c',
        initialX: 0,
        initialY: BASE_INITIAL_Y_OFFSET, // 0+280
        targetX: -225,
        targetY: -423 + BASE_INITIAL_Y_OFFSET,
        initialZ: 10,
        targetZ: 200,
        delay: 0.546, // Calculated delay
        stackOffset: STACKING_OFFSET_Y,
    },
    {
        id: '12d', // Queen in 4th column
        src: D12,
        alt: '12d',
        initialX: 0,
        initialY: BASE_INITIAL_Y_OFFSET, // 0+280
        targetX: -675,
        targetY: -143,
        initialZ: 10,
        targetZ: 200,
        delay: 0.632, // Calculated delay
        stackOffset: STACKING_OFFSET_Y,
    },
    // Kings
    {
        id: '13d', // King in 1st column
        src: D13,
        alt: '13d',
        initialX: 0,
        initialY: 0,
        targetX: 0, // 675-675 in your original was 0, maintaining
        targetY: -376,
        initialZ: 5,
        targetZ: 300,
        delay: 0.718, // Calculated delay
        stackOffset: 0,
    },
    {
        id: '13s', // King in 2nd column
        src: S13,
        alt: '13s',
        initialX: 0,
        initialY: 0,
        targetX: 675 - 225,
        targetY: -376,
        initialZ: 5,
        targetZ: 300,
        delay: 0.804, // Calculated delay
        stackOffset: 0,
    },
    {
        id: '13h', // King in 3rd column
        src: H13,
        alt: '13h',
        initialX: 0,
        initialY: 0,
        targetX: 0,
        targetY: -376,
        initialZ: 5,
        targetZ: 300,
        delay: 0.890, // Calculated delay
        stackOffset: 0,
    },
    {
        id: '13c', // King in 4th column
        src: C13,
        alt: '13c',
        initialX: 0,
        initialY: 0,
        targetX: -675 + 225,
        targetY: -376,
        initialZ: 5,
        targetZ: 300,
        delay: 0.976, // Calculated delay
        stackOffset: 0,
    },
];

function FreeCell() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.8 });

    // Define common styles for the blank card to position it below the animated cards
    const blankCardStyle = {
        position: 'absolute',
        bottom: 0, // Position at the bottom of its parent div
        left: 0,
        width: '100%', // Ensure it takes the full width of its parent div
        height: '100%', // Ensure it takes the full height of its parent div
        zIndex: 1, // Place it behind the animated cards
    };

    return (
        <div className='w-full bg-[#244c1a] py-12'>
            <div className='lg:max-w-[1200px] xl:max-w-[1500px] mx-auto'>
                <div className='bg-[#66925c] mx-auto w-10/12 rounded-4xl lg:rounded-[62px] p-6 h-260'>
                    <div className='bg-[#244c1a] w-full h-full rounded-4xl lg:rounded-[48px] flex justify-center items-center relative overflow-hidden'>
                        <div className='space-y-24 -mt-24'>
                            {/* TOP ROW - These cards are static based on your original code */}
                            <div className='space-x-6 flex'>
                                <Image src={D10} alt="10d" />
                                <Image src={C10} alt="10c" />
                                <Image src={H10} alt="10h" />
                                <Image src={S10} alt="10s" />
                            </div>

                            {/* BOTTOM ROW - Animated Cards */}
                            <div ref={containerRef} className='space-x-6 flex'>
                                {/* Column 1 */}
                                <div className='w-[201px] h-[280px] bg-[#244c1a] relative'>
                                    {/* Blank card underneath */}
                                    <Image
                                        src={Blank}
                                        alt="Blank card"
                                        style={blankCardStyle}
                                    />
                                    {animatedCardsData
                                        .filter(card => ['11h', '12s', '13d'].includes(card.id))
                                        .map((card) => (
                                            <motion.div
                                                key={card.id}
                                                className='absolute'
                                                style={{ marginTop: card.stackOffset }}
                                                variants={{
                                                    hidden: {
                                                        x: card.initialX,
                                                        y: card.initialY,
                                                        opacity: 1,
                                                        zIndex: card.initialZ
                                                    },
                                                    visible: {
                                                        x: card.targetX,
                                                        y: card.targetY,
                                                        opacity: 1,
                                                        zIndex: card.targetZ
                                                    }
                                                }}
                                                initial="hidden"
                                                animate={isInView ? "visible" : "hidden"}
                                                transition={{
                                                    duration: 0.3,
                                                    ease: "easeOut",
                                                    delay: card.delay,
                                                }}
                                            >
                                                <Image
                                                    src={card.src}
                                                    alt={card.alt}
                                                />
                                            </motion.div>
                                        ))}
                                </div>
                                
                                {/* Column 2 */}
                                <div className='w-[201px] h-[280px] bg-[#244c1a] relative'>
                                    {/* Blank card underneath */}
                                    <Image
                                        src={Blank}
                                        alt="Blank card"
                                        style={blankCardStyle}
                                    />
                                    {animatedCardsData
                                        .filter(card => ['11s', '12h', '13s'].includes(card.id))
                                        .map((card) => (
                                            <motion.div
                                                key={card.id}
                                                className='absolute'
                                                style={{ marginTop: card.stackOffset }}
                                                variants={{
                                                    hidden: {
                                                        x: card.initialX,
                                                        y: card.initialY,
                                                        opacity: 1,
                                                        zIndex: card.initialZ
                                                    },
                                                    visible: {
                                                        x: card.targetX,
                                                        y: card.targetY,
                                                        opacity: 1,
                                                        zIndex: card.targetZ
                                                    }
                                                }}
                                                initial="hidden"
                                                animate={isInView ? "visible" : "hidden"}
                                                transition={{
                                                    duration: 0.3,
                                                    ease: "easeOut",
                                                    delay: card.delay,
                                                }}
                                            >
                                                <Image
                                                    src={card.src}
                                                    alt={card.alt}
                                                />
                                            </motion.div>
                                        ))}
                                </div>
                                {/* Column 3 */}
                                <div className='w-[201px] h-[280px] bg-[#244c1a] relative'>
                                    {/* Blank card underneath */}
                                    <Image
                                        src={Blank}
                                        alt="Blank card"
                                        style={blankCardStyle}
                                    />
                                    {animatedCardsData
                                        .filter(card => ['11d', '12c', '13h'].includes(card.id))
                                        .map((card) => (
                                            <motion.div
                                                key={card.id}
                                                className='absolute'
                                                style={{ marginTop: card.stackOffset }}
                                                variants={{
                                                    hidden: {
                                                        x: card.initialX,
                                                        y: card.initialY,
                                                        opacity: 1,
                                                        zIndex: card.initialZ
                                                    },
                                                    visible: {
                                                        x: card.targetX,
                                                        y: card.targetY,
                                                        opacity: 1,
                                                        zIndex: card.targetZ
                                                    }
                                                }}
                                                initial="hidden"
                                                animate={isInView ? "visible" : "hidden"}
                                                transition={{
                                                    duration: 0.3,
                                                    ease: "easeOut",
                                                    delay: card.delay,
                                                }}
                                            >
                                                <Image
                                                    src={card.src}
                                                    alt={card.alt}
                                                />
                                            </motion.div>
                                        ))}
                                </div>
                                {/* Column 4 */}
                                <div className='w-[201px] h-[280px] bg-[#244c1a] relative'>
                                    {/* Blank card underneath */}
                                    <Image
                                        src={Blank}
                                        alt="Blank card"
                                        style={blankCardStyle}
                                    />
                                    {animatedCardsData
                                        .filter(card => ['11c', '12d', '13c'].includes(card.id))
                                        .map((card) => (
                                            <motion.div
                                                key={card.id}
                                                className='absolute'
                                                style={{ marginTop: card.stackOffset }}
                                                variants={{
                                                    hidden: {
                                                        x: card.initialX,
                                                        y: card.initialY,
                                                        opacity: 1,
                                                        zIndex: card.initialZ
                                                    },
                                                    visible: {
                                                        x: card.targetX,
                                                        y: card.targetY,
                                                        opacity: 1,
                                                        zIndex: card.targetZ
                                                    }
                                                }}
                                                initial="hidden"
                                                animate={isInView ? "visible" : "hidden"}
                                                transition={{
                                                    duration: 0.3,
                                                    ease: "easeOut",
                                                    delay: card.delay,
                                                }}
                                            >
                                                <Image
                                                    src={card.src}
                                                    alt={card.alt}
                                                />
                                            </motion.div>
                                        ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FreeCell;