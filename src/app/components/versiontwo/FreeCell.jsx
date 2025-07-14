import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

import Card10 from '../../../images/freecell/10.png'
import Card11 from '../../../images/freecell/11.png'
import Card12 from '../../../images/freecell/12.png'
import Card13 from '../../../images/freecell/13.png'

const Freecell = () => {
    const freecellRef = useRef(null);
    const isInView = useInView(freecellRef, { once: true, amount: 0.5 }); // Trigger when 50% of the element is visible

    const fallAnimationVariants = {
        hidden: { y: -500, opacity: 1 }, // Start significantly above the viewport
        visible: { y: 0, opacity: 1 }, // End at its natural position, fully visible
    };

    // Card data with source paths and their corresponding class names for layout
    const cards = [
        { id: '10', src: '/images/freecell/10.png', className: 'hidden md:flex' },
        { id: '11', src: '/images/freecell/11.png', className: 'mr-2 md:mr-0' },
        { id: '12', src: '/images/freecell/12.png', className: 'ml-2 md:ml-0' },
        { id: '13', src: '/images/freecell/13.png', className: 'hidden md:flex' },
    ];

    return (
        <div>
            <Link target="_blank" href="https://github.com/tianxiaozhang1/freecell" rel="noopener noreferrer">   
                <div className='flex'>
                    <div className='w-92 h-78 md:w-190 md:h-132 lg:w-252 lg:h-120 xl:w-316 xl:h-152 bg-[#244c1a] rounded-[3vw] md:rounded-[4vw] lg:rounded-[5vw] xl:rounded-[6vw] border-[#66925c] border-[1.5vw] lg:border-[1vw] mx-auto flex justify-center items-center cursor-pointer'>
                        <div className='xl:w-260 xl:h-116 xl:rounded-[3.5vw] bg-[#66925c] flex justify-center items-center rounded-3xl overflow-hidden'>
                            <div className='xl:w-252 xl:h-108 xl:rounded-[3vw] bg-[#244c1a] flex justify-center items-center rounded-3xl'>
                                {/* This is the container that the Intersection Observer will watch */}
                                <div ref={freecellRef} className='flex md:space-x-4 scale-75 md:scale-75 lg:scale-100'>
                                    {cards.map((card, index) => (
                                        <motion.div
                                            key={card.id}
                                            className={card.className} // Apply visibility (hidden/flex) and margin classes
                                            variants={fallAnimationVariants}
                                            initial="hidden"
                                            // Animate to "visible" only if the container is in view
                                            animate={isInView ? "visible" : "hidden"}
                                            transition={{
                                                duration: 0.4, // How fast each card falls
                                                delay: index * 0.2, // Staggered delay based on position
                                                ease: "easeOut", // Make it feel like falling
                                            }}
                                            // Set the base size for each card slot (201x280)
                                            // The `scale-75 md:scale-75 lg:scale-100` on the parent will handle responsive scaling
                                            style={{ width: '201px', height: '280px' }}
                                        >
                                            <img 
                                                src={card.src} 
                                                alt={`FreeCell Card ${card.id}`} 
                                                className='w-full h-full object-contain' // Ensures the image fits within its container
                                            />
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </Link>
        </div>
        );
    }

    export default Freecell;