import React from 'react';
import Image from 'next/image';
// import { cinzel, patua_one } from '../../../fonts'
import { Cinzel, Inter } from 'next/font/google'
import image1 from '../../../images/venus/main2a.jpg'
import Link from 'next/link'

const textBow = "rounded-lg w-4 h-4 xl:w-8 xl:h-8 flex justify-center items-center text-sm xl:text-lg font-bold"

const cinzel = Cinzel({ subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })

import { ScrollReveal } from '../../../effects/ScrollReveal'

function Venus() {
    return (
        <div className='w-full'>
            {/* MOBILE */}
            {/* <div className='lg:hidden'>
                <div className='mx-2 h-88 rounded-3xl' style={{
                    backgroundImage: `url(${image1.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 1,
                }}>
                    <div className='h-1/2 flex justify-center text-center items-end text-white drop-shadow-[0_2px_2px_rgba(100,100,100,1)]'>
                        <div className='leading-6'>
                            <div className={`text-4xl mb-3 ml-6 ${cinzel.className}`}>For &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; love.</div>
                        </div>
                    </div>
                    
                </div>
            </div> */}

            {/* <div className='hidden rounded-3xl overflow-hidden'
                style={{
                    backgroundImage: `url(${image1.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 1,
                }}>

                <div className={`w-full h-full`} >
                    <div className='h-1/4 '></div>

                    <div className={`text-white text-6xl xl:text-7xl h-1/2 -mt-12 flex justify-center items-center drop-shadow-[0_2px_2px_rgba(100,100,100,1)] -mr-8 space-x-36 ${cinzel.className}`}>
                        <div className=''>for</div>
                        <div>love</div>
                    </div>

                    <div className={`text-white text-4xl xl:text-5xl h-1/4 flex justify-between text-center mt-24 drop-shadow-[0_2px_2px_rgba(0,0,0,1)] ${cinzel.className}`}>
                        <div className='w-1/3'></div>

                        <div className='w-1/3'>
                            <div className='mt-2 -mb-7'>venus</div>
                            <div className='lg:mt-1.5 xl:-mt-6 xl:text-2xl lg:text-lg'>jewelery</div>
                        </div>

                        <div className='w-1/3'>
                            <div className='text-xl mb-2 xl:mt-12 mr-8 xl:mr-6 flex items-end justify-end '>
                                <div className={`border-2 border-slate-300 text-slate-200 rounded-xl py-1.5 px-3 mt-3.5 -mr-2 uppercase text-xs ${inter.className}`}>Visit Site</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* DESKTOP */}
            <div className='w-full h-screen overflow-hidden' style={{
                    backgroundImage: `url(${image1.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 1,
                }}>
                    {/* w-92 h-78 md:w-190 md:h-132 lg:flex lg:w-252 lg:h-120 xl:w-316 xl:h-180 */}
                
                <div className={`w-full h-full`} >
                    <div className='h-1/4'></div>

                    {/* <ScrollReveal> */}
                        <div className={`text-white text-3xl md:text-5xl lg:text-6xl xl:text-7xl h-1/2 lg:-mt-10 md:-mt-8 -mt-6 flex justify-center items-center drop-shadow-[0_2px_2px_rgba(100,100,100,1)] md:-mr-8 -mr-3.5 space-x-20 md:space-x-36 ${cinzel.className}`}>
                            <div className=''>for</div>
                            <div>love</div>
                        </div>
                    {/* </ScrollReveal> */}

                    <div className={`text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl h-1/4 flex justify-between text-center mt-24 drop-shadow-[0_2px_2px_rgba(0,0,0,1)] ${cinzel.className}`}>
                        <div className='w-1/3'></div>

                        <div className='w-1/3 -pt-6 md:-pt-6 lg:-pt-2 xl:pt-0'>
                            <div className='xl:mt-2 lg:-mt-3 xl:-mb-7 lg:-mb-7 md:-mb-6 md:-mt-1 -mb-6 -mt-12'>venus</div>
                            <div className='lg:mt-1.5 xl:-mt-6 md:mt-2 mt-2 xl:text-2xl lg:text-xl md:text-lg text-base'>jewelery</div>
                        </div>

                        <div className='w-1/3'>
                            <div className='hidden lg:flex text-xl lg:-mt-2 lg:mb-2 xl:mb-0 xl:mt-12 mb-6 mr-8 xl:mr-6 items-end justify-end xl:pr-0.25'>
                                <Link target="_blank" href="https://venusjewellery.vercel.app/" rel="noopener noreferrer">
                                    <div className={`hover:text-slate-50 hover:bg-slate-800 hover:border-slate-700 border-2 border-slate-300 text-slate-200 rounded-xl py-1.5 px-3 lg:mt-3.5 xl:-mt-2.5 xl:-mr-0.5 lg:-mr-2 uppercase text-xs ${inter.className}`}>Visit Site</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Venus
