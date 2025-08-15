import React from 'react'

import Link from 'next/link'

import { playfairDisplay, inter } from '../../../fonts'
import mainBG from '../../../images/now/homex2b.jpg'
import { ScrollReveal } from '../../../effects/ScrollReveal'

function NowModels() {
    return (
        <div className='w-full'>
            <div className='w-full h-screen flex justify-center  text-5xl' 
                style={{
                    background: `url(${mainBG.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 1,
                }}
            >
                <div className='h-full w-full'>
                    <div className='h-2/5 w-full '></div>                    
                    <div className='w-full flex justify-center h-1/5 items-center'>
                        <ScrollReveal>
                            <div className={`${playfairDisplay.className} cursor-default`}>
                                <div className='uppercase text-4xl md:text-4xl lg:text-5xl xl:text-9xl -mt-2 lg:-mt-3 xl:-mt-4 -mb-2 lg:-mb-3 xl:-mb-4 text-stone-50
                                                drop-shadow-[0_1px_1px_rgba(100,100,100,1) text-center
                                                '>
                                    now models
                                </div>
                                <div className='flex space-x-4 text-stone-200 justify-between text-base xl:text-4xl'>
                                    <div className=''>Toronto</div>
                                    <div>New York</div>
                                    <div>Paris</div>
                                    <div>Milan</div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                    <div className='hidden h-2/5 lg:flex justify-end items-end'>
                        <Link target="_blank" href="https://nowmodels.vercel.app/" rel="noopener noreferrer">
                            <div className={`hover:text-slate-50 hover:bg-slate-800 hover:border-slate-700 border-2 border-stone-500 text-stone-200 rounded-xl py-1.5 px-3 mb-6 mr-6 uppercase text-xs ${inter.className}`}>Visit Site</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NowModels
