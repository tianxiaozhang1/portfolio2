// "use client";
import React from 'react'
// import { useState, useEffect } from "react";
import localFont from 'next/font/local'
import Image from 'next/image'
import Link from 'next/link'

import Burger1 from '../../../images/burgershack/burger1.webp'
import Burger1a from '../../../images/burgershack/burger1a.webp'
// import { patua_one, aldrich, inter } from '../../../fonts'

import { Patua_One, Inter, Fira_Mono } from 'next/font/google'
const patua_one = Patua_One({ subsets: ['latin'], weight: ['400'], })
const inter = Inter({ subsets: ['latin'], weight: ['400'], })
const fira_mono = Fira_Mono({ subsets: ['latin'], weight: ['700'], })

// import moduleName from '../../fonts'

const bkBold = localFont({ src: '../../fonts/Flame-Bold.ttf' })
const bkReg = localFont({ src: '../../fonts/Flame-Regular.ttf' })
const bkSans = localFont({ src: '../../fonts/FlameSans-Regular.ttf' })

import MealMain1 from '../../../images/burgershack/burger3.png'
import MealMain2 from '../../../images/burgershack/burger4.png'
import MealMain3 from '../../../images/burgershack/burger5.png'

const textBow = "rounded-lg w-4 h-4 xl:w-8 xl:h-8 flex justify-center items-center text-sm xl:text-lg font-bold"

function BurgerShack() {
    
    // const [isMounted, setIsMounted] = useState(false);

    // useEffect(() => {
    //   setIsMounted(true);
    // }, []);
  
    // if (!isMounted) {
    //   return null;
    // }

    return (
        <div className={`bg-mainBurgerBG rounded-3xl`}>
            {/* mx-4 my-4 rounded-3xl text-orange-800 md:text-9xl xl:text-14xl overflow-hidden shadow-sm font-extrabold */}
            {/* xl:my-12 md:py-16  */}
            
            {/* MOBILE UP TO MD */}
            <Link target="_blank" href="https://burgershack.vercel.app/" rel="noopener noreferrer">
                <div className='lg:hidden w-92 h-78 md:w-190 md:h-132 rounded-3xl'>
                    <div className='h-1/5 md:h-1/6 flex items-center justify-center'>
                        <div className={`${bkReg.className} text-center text-xs md:text-sm text-burgerMainText flex justify-center items-center md:scale-150`}>
                            <div>
                                <div className='w-12 h-2 md:w-12 md:h-2 lg:w-16 lg:h-3 bg-burgerOrange -mb-0.5 lg:-mb-1.5 rounded-t-3xl'></div>
                                <div className='flex justify-center'>
                                    <div>
                                        <div className='-mb-1.5 md:-mb-2 lg:-mb-2.5 lg:mt-0.5'>BURGER</div>
                                        <div>SHACK</div>
                                    </div>
                                </div>
                                <div className='w-12 h-2 md:w-12 md:h-2 lg:w-16 lg:h-3 bg-burgerOrange -mt-0.5 lg:-mt-1 rounded-b-3xl'></div>
                            </div>
                        </div>
                    </div>
                    <div className='h-1/2 md:h-3/5 bg-burgerMainText flex items-center justify-center'>
                        <div>
                            <div className={`text-orange-200 text-2xl md:text-4xl flex justify-center items-center md:-mt-4 ${bkReg.className}`}>
                                For the BBQ lo
                                <div className='mt-3 md:mt-2 lg:mt-5 -mx-0.5 text-red-500'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3.5" stroke="currentColor" className="size-5 md:size-7 -mt-0.5 md:mt-1">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                    </svg>
                                </div>
                                ers
                            </div>

                            <div className='flex items-center'>
                                <Image
                                    src={MealMain1}
                                    alt="X"
                                    className='
                                                max-w-42 md:max-w-86 md:mt-0 md:-ml-2 -ml-1
                                            '
                                />
                                <Image
                                    src={MealMain2}
                                    alt="X"
                                    className='
                                                max-w-42 md:max-w-86 md:mt-0 md:-ml-32 -ml-16
                                            '
                                />
                                <Image
                                    src={MealMain3}
                                    alt="X"
                                    className='
                                                max-w-42 md:max-w-86 md:mt-0 md:-ml-32 -ml-16
                                            '
                                />
                            </div>
                        </div>
                    </div>
                    <div className='h-fit md:h-1/5 flex justify-center items-center'>
                        <div className='w-full'>
                            <div className=''>
                                <div className='flex justify-center text-center w-full mt-1'>
                                    <div className={`${bkReg.className} text-burgerMainText flex justify-center text-center
                                                        text-xl md:text-2xl font-extrabold pt-0.5 md:pt-0 cursor-default `}>
                                        GET IT WHILE IT&apos;S HOT.  
                                    </div>
                                </div>
                                <div className="flex w-full -mt-1 px-2 md:px-16">
                                    <div className={`w-1/2 bg-burgerGreen text-stone-100 hover:text-white
                                                        py-2 font-bold text-sm  md:text-lg
                                                    flex justify-center mx-2 rounded-3xl my-2 cursor-pointer
                                                    ${patua_one.className}`}>
                                        <svg className="w-4 h-4 mt-0 md:w-6 md:h-6 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
                                            <path d="M5.223 2.25c-.497 0-.974.198-1.325.55l-1.3 1.298A3.75 3.75 0 0 0 7.5 9.75c.627.47 1.406.75 2.25.75.844 0 1.624-.28 2.25-.75.626.47 1.406.75 2.25.75.844 0 1.623-.28 2.25-.75a3.75 3.75 0 0 0 4.902-5.652l-1.3-1.299a1.875 1.875 0 0 0-1.325-.549H5.223Z" />
                                            <path fillRule="evenodd" d="M3 20.25v-8.755c1.42.674 3.08.673 4.5 0A5.234 5.234 0 0 0 9.75 12c.804 0 1.568-.182 2.25-.506a5.234 5.234 0 0 0 2.25.506c.804 0 1.567-.182 2.25-.506 1.42.674 3.08.675 4.5.001v8.755h.75a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1 0-1.5H3Zm3-6a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-3Zm8.25-.75a.75.75 0 0 0-.75.75v5.25c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-5.25a.75.75 0 0 0-.75-.75h-3Z" clipRule="evenodd" />
                                        </svg>
                                        COME ON IN
                                    </div>
                                    <div className={`w-1/2 bg-red-600 text-stone-100 hover:text-white
                                                        py-2 lg:py-3 px-4 font-bold text-sm md:text-lg
                                                    flex justify-center mx-2 rounded-3xl my-2 cursor-pointer
                                                    ${patua_one.className}`}>
                                        <svg className="w-4 h-4 mt-0 md:w-6 md:h-6 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                            <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
                                        </svg>
                                        ORDER ONLINE
                                    </div>
                                </div>
                            </div>
                            {/* <div className='w-full justify-center hidden md:flex mt-10'>
                                <div className={`border-2 border-burgerMainText text-burgerMainText font-semibold mb-6 rounded-xl py-1.5 px-3 uppercase text-xs w-22`}>Visit Site</div>
                            </div> */}
                            
                        </div>
                    </div>
                </div>
            </Link>

            {/* DESKTOP */}
            <div className='hidden lg:flex lg:w-252 lg:h-120 xl:w-316 xl:h-152 bg-mainBurgerBG rounded-3xl mx-auto shadow-md'>
                <div className='w-1/3 lg:pl-8 xl:pl-18 pr-2 flex items-center '>

                    <div className="">
                        <div className='flex justify-start pl-6 lg:-mt-2 xl:mt-0'>

                            <div className={`${bkReg.className} text-center text-base lg:text-xl text-mainText flex justify-center items-center`}>
                                <div>
                                    <div className='w-16 h-3 lg:w-20 lg:h-4 bg-burgerOrange -mb-1 lg:-mb-1.5 rounded-t-3xl'></div>
                                    <div className='flex justify-center'>
                                        <div>
                                            <div className='-mb-2.5'>BURGER</div>
                                            <div>SHACK</div>
                                        </div>
                                    </div>
                                    <div className='w-16 h-3 lg:w-20 lg:h-4 bg-burgerOrange -mt-1 lg:-mt-1 rounded-b-3xl'></div>
                                </div>
                            </div>

                        </div>
                        <div className={` ${bkReg.className} text-burgerMainText flex justify-center text-center
                                            text-xl md:text-3xl lg:text-5xl xl:text-6xl xl:mt-2 lg:-mt-2
                                            font-extrabold xl:font-black 
                                            pt-4 cursor-default lg:text-end lg:pr-6 lg:leading-[1]`}>
                            GET IT WHILE IT&apos;S HOT.  
                        </div>

                        <div className="xl:mt-6">
                            <div className={`bg-burgerGreen text-white
                                                py-2 lg:py-3 font-bold text-lg xl:text-2xl
                                            flex justify-center mx-6 xl:mx-2 rounded-3xl my-2 xl:my-3 cursor-pointer
                                            ${patua_one.className}`}>
                                <svg className="w-6 h-6 mt-0 lg:w-7 lg:h-7 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
                                    <path d="M5.223 2.25c-.497 0-.974.198-1.325.55l-1.3 1.298A3.75 3.75 0 0 0 7.5 9.75c.627.47 1.406.75 2.25.75.844 0 1.624-.28 2.25-.75.626.47 1.406.75 2.25.75.844 0 1.623-.28 2.25-.75a3.75 3.75 0 0 0 4.902-5.652l-1.3-1.299a1.875 1.875 0 0 0-1.325-.549H5.223Z" />
                                    <path fillRule="evenodd" d="M3 20.25v-8.755c1.42.674 3.08.673 4.5 0A5.234 5.234 0 0 0 9.75 12c.804 0 1.568-.182 2.25-.506a5.234 5.234 0 0 0 2.25.506c.804 0 1.567-.182 2.25-.506 1.42.674 3.08.675 4.5.001v8.755h.75a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1 0-1.5H3Zm3-6a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-3Zm8.25-.75a.75.75 0 0 0-.75.75v5.25c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-5.25a.75.75 0 0 0-.75-.75h-3Z" clipRule="evenodd" />
                                </svg>

                                COME ON IN
                            </div>
                            <div className={`bg-red-600 text-white
                                                py-2 lg:py-3 px-4 font-bold text-lg xl:text-2xl
                                            flex justify-center mx-6 xl:mx-2 rounded-3xl my-2 xl:my-3 cursor-pointer
                                            ${patua_one.className}`}>
                                <svg className="w-6 h-6 mt-0 lg:w-7 lg:h-7 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
                                </svg>

                                ORDER ONLINE
                            </div>
                        </div>
                    </div>

                </div>
                <div className='w-2/3 flex h-full '>
                    <div className='w-1/6'></div>
                    <div className='w-5/6 flex -ml-22'>
                        <div className='w-1/6 bg-orange-800 z-10 -skew-x-6 flex items-center'>
                            <Image
                                src={MealMain1}
                                alt="X"
                                className='skew-x-6
                                            xl:max-w-108 xl:-ml-22 xl:-mt-2
                                            lg:max-w-82 lg:mt-6 lg:-ml-12
                                        '
                            />
                        </div>
                        <div className='w-1/6 bg-orange-400 z-5 -skew-x-6'></div>
                        <div className='w-1/6 bg-green-600 z-10 -skew-x-6'>
                            <Image
                                src={MealMain2}
                                alt="X"
                                className='skew-x-6 
                                            xl:max-w-108 xl:-ml-22 xl:mt-42
                                            lg:max-w-82 lg:mt-38 lg:-ml-16
                                        '
                            />
                        </div>
                        <div className='w-1/6 bg-stone-50 z-5 -skew-x-6'></div>
                        <div className='w-1/6 bg-red-500 z-10 -skew-x-6 overflow-visible'>
                            <Image
                                src={MealMain3}
                                alt="X"
                                className='skew-x-6 
                                            xl:max-w-108 xl:-ml-22 xl:mt-38
                                            lg:max-w-82 lg:mt-36 lg:-ml-18
                                        '
                            />
                        </div>
                        <div className='w-1/6 bg-orange-500 z-5 -skew-x-6'></div>
                        
                    </div>
                    <div className='w-1/5 flex items-end lg:-ml-2 xl:ml-5 xl:pr-1'>
                        <Link target="_blank" href="https://burgershack.vercel.app/" rel="noopener noreferrer">                        
                            <div className={`border-2 border-burgerMainText text-burgerMainText font-semibold mb-6 rounded-xl py-1.5 px-3 uppercase text-xs xl:ml-0.5 lg:ml-0.25 hover:text-mainBurgerBG hover:bg-burgerMainText`}>Visit Site</div>
                        </Link>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default BurgerShack
