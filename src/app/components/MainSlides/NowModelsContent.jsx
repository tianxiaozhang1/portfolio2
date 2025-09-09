import React, { useState, useRef, useCallback } from 'react'
import Link from 'next/link'; 
import Image from 'next/image'; 

import CustomBox from './CustomBox'

import Ana from '../../../../public/images/nowmodels/1ba.jpg'
import { playfairDisplay } from '../../../fonts'; 

import RightSideMenu from './components/NowModels/RightSideMenu'
import { X as XButton, Menu as MenuButton } from 'lucide-react';

function NowModelsContent({ theme }) {

    const [showMenu, setShowMenu] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite); // Toggle the state
    };

    const [transitionTimingClass, setTransitionTimingClass] = useState('ease-in-out'); 

    // Refs to directly interact with DOM elements for click outside logic
    const menuRef = useRef(null);
    const toggleButtonRef = useRef(null);

    // Memoized callback to open the menu
    const openMenu = useCallback(() => {
         ('ease-out'); // For slide-in: faster at the end
        setIsMenuOpen(true);
    }, []);

    // Memoized callback to close the menu
    const closeMenu = useCallback(() => {
        setTransitionTimingClass('ease-in'); // For slide-out: faster at the beginning
        setIsMenuOpen(false);
    }, []);

    const toggleMenu = () => {
        setShowMenu(!showMenu); // Toggle the state
    };

  return (
    <div className='h-full'>
        <div className='hidden text-start'>
            <div className={`${theme === 'dark' ? 'text-[#659849]' : 'text-[#68945c]'} text-start`}>&#47;&#47;&nbsp;Project: NowModels.tsx</div>
            <div className={`${theme === 'dark' ? 'text-sky-200' : 'text-[#3271AE]'}`}>description: <span className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&nbsp;A front-end recreation of a high-fashion model agency&apos;s digital presence, focusing on aesthetic and usability.</span></div>
            {/* <div className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'} text-start`}>&#x2c;</div> */}
            
            <div className={`${theme === 'dark' ? 'text-sky-200' : 'text-[#3271AE]'} flex`}>key_features:<span className={`${theme === 'dark' ? 'text-[#fad91c]' : 'text-[#DB9D34]'} `}>&nbsp;&#123;</span></div>
            <div className={`${theme === 'dark' ? 'text-sky-200' : 'text-[#3271AE]'} flex flex-col ml-6`}>
                <div className='flex'>chic_modern_design:&nbsp;&apos;Translating a high-end fashion brand&apos;s identity into a web experience&apos;<div className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;</div></div>
                <div className='flex'>dynamic_portfolios:&nbsp;&apos;Showcasing model profiles with responsive image galleries&apos;<div className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;</div></div>
                {/* <div className='flex'>intuitive_navigation:&nbsp;&apos;Clean and logical pathways for users to explore talent and services&apos;<div className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;</div></div>
                <div className='flex'>cross_browser_compatibility:&nbsp;&apos;Ensuring consistent visuals and functionality across different browsers&apos;</div> */}
            </div>
            <div className={`${theme === 'dark' ? 'text-[#fad91c]' : 'text-[#DB9D34]'} text-start ml-2`}>&nbsp;&#125;<span className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;</span></div>

            <div className={`${theme === 'dark' ? 'text-sky-200' : 'text-[#3271AE]'} flex`}>technologies:<span className={`${theme === 'dark' ? 'text-[#fad91c]' : 'text-[#DB9D34]'} `}>&nbsp;&#123;</span></div>
            <div className={`${theme === 'dark' ? 'text-sky-200' : 'text-[#3271AE]'} flex  ml-6`}>
                <div className='flex'>React.js<div className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;</div></div>
                <div className='flex'>Next.js<div className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;</div></div>
                <div className='flex'>Tailwind_CSS<div className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;</div></div>
                <div className='flex'>HTML<div className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;</div></div>
                <div className='flex'>CSS</div>
            </div>
            <div className={`${theme === 'dark' ? 'text-[#fad91c]' : 'text-[#DB9D34]'} text-start ml-2`}>&nbsp;&#125;<span className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;</span></div>
            
            <div className={`${theme === 'dark' ? 'text-sky-200' : 'text-[#3271AE]'} flex`}>
                <Link target="_blank" href="https://yournowmodelslink.vercel.app/" rel="noopener noreferrer" className={`${theme === 'dark' ? 'text-[#2f7ed3]' : 'text-blue-700'} hover:underline`}>
                    &#47;&#47;&nbsp;[Visit Live Site]
                </Link>
            </div>
            <div className={`${theme === 'dark' ? 'text-sky-200' : 'text-[#3271AE]'} flex`}>
                <Link href="#nowmodels-full-details" className={`${theme === 'dark' ? 'text-[#2f7ed3]' : 'text-blue-700'} hover:underline`}>
                    &#47;&#47;&nbsp;[View Full Project Details Below]
                </Link>
            </div>
        </div>

        <div className='flex h-full'>
            <div className='w-1/2'>
                <CustomBox
                    // Props for the 32x32 square
                    boxContent="now models"
                    // boxFont={futura}
                    boxBgColor="bg-[#4994C4]"
                    boxTextColor="text-white"
                    boxFontSize="text-2xl"
                    boxTextTransform="uppercase"
                    boxTextLeading="leading-6"
                    fullBoxContent={
                        <div className='w-32 h-32 bg-gray-50 flex justify-center items-center'>
                            <div className={`${playfairDisplay.className} text-center text-base lg:text-2xl leading-5`}>
                                <div className='flex justify-center'>
                                    <div className='my-0.25 '>
                                        <div className='text-gray-800'>NOW MODELS</div>
                                        {/* -mb-2 */}
                                        {/* <div className='text-xxs text-gray-500'>TORONTO NYC PARIS MILAN</div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    theme={theme}
                    // Props for the rest of the content
                    headingOne="Now Models"
                    headingTwo="Toronto. NYC. Paris. Milan."
                    linkText="Visit Site"
                    linkHref="https://nowmodels.vercel.app/"
                    featuresTitle="Features"
                    features={['Mobile friendly', 'Responsive']}
                    dependenciesTitle="Dependencies"
                    dependencies={['eslint', 'lucide-react', 'tailwindcss']}
                />
            </div>

            <div className='z-10 w-1/2 h-full pb-3 pr-0'>
                    <div className='h-full border-gray-400 border-2'
                        style={{
                            backgroundImage: `url(${Ana.src})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'top',
                            opacity: 1,
                            // height: size.height,
                        }}>
                        <div className='border-b-2 border-gray-400 w-full flex text-stone-100' style={{height:60}}>

                        <div className='flex justify-between items-center px-5 text-2xl w-5/6' >

                            <div className='flex'>
                                <a href="/" className={` mt-0.5 ${playfairDisplay.className}`}>
                                    NOW MODELS 
                                </a>
                            </div>
                            
                            <div className='mt-1 text-gray-200'>
                                <svg onClick={toggleFavorite} fill={isFavorite ? "currentColor" : "none"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-6 cursor-pointer">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                </svg>
                            </div>
                        </div>
                        <div className='w-1/6 border-l-2 pt-1 border-gray-400 flex justify-center items-center text-gray-200'>
                            <MenuButton ref={toggleButtonRef} onClick={openMenu} size={88} strokeWidth={2} className={`cursor-pointer w-[28px] h-[28px] `}/>
                        </div>

                        </div>

                    </div>
                </div>

            {isMenuOpen === false            
                ? 
                <div></div>
                :
                <div ref={menuRef} className={`z-20 w-1/4 h-full pb-3 pr-0 text-7xl 
                    ${transitionTimingClass} 
                    ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`} 
                >                    
                    <div className='w-full h-full bg-gray-500'>
                        <div onClick={closeMenu}>ZX</div>
                    </div>
                </div>
            }

        </div>
    </div>
  )
}

export default NowModelsContent
