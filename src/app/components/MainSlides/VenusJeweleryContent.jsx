import React from 'react'
import Link from 'next/link'; 
import Image from 'next/image'; 
import localFont from 'next/font/local'
import { pixelify_sans, inter, cinzel } from '../../../fonts'; 
const selawkReg = localFont({ src: '../../fonts/selawk.ttf' })

import large1 from '../../../../public/images/venus/large1.jpg'
// import moduleName from '../../../../public'
import CustomBox from './CustomBox'

function VenusJeweleryContent({ theme }) { 
    return (
        <div className='h-full'>
            {/* VERSION 1 TEXT ONLY */}
            <div className='hidden text-start'>
                <div className={`${theme === 'dark' ? 'text-[#659849]' : 'text-[#68945c]'} text-start`}>&#47;&#47;&nbsp;Project: BurgerShack.tsx</div>
                <div className={`${theme === 'dark' ? 'text-sky-200' : 'text-[#3271AE]'}`}>description: <span className={`${theme === 'dark' ? 'text-stone-300' : 'text-gray-700'}`}>&nbsp;A full-stack ordering platform for a fictional burger joint. It streamlines the customer experience from menu browsing to secure payments, and offers an admin panel for comprehensive business management.</span></div>
                
                <div className={`${theme === 'dark' ? 'text-sky-200' : 'text-[#3271AE]'} flex`}>key_features:<span className={`${theme === 'dark' ? 'text-[#fad91c]' : 'text-[#DB9D34]'} `}>&nbsp;&#123;</span></div>
                <div className={`${theme === 'dark' ? 'text-sky-200' : 'text-[#3271AE]'} text-left ml-38`}>
                    <div className='flex text-'>
                        <div className='flex '>online_menu_browsing<div className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;&nbsp;</div></div>
                        <div className='flex '>secure_payment_gateway<div className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;</div></div>
                    </div>                    
                    <div className='flex'>
                        <div className='flex'>admin_dashboard<div className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;&nbsp;</div></div>
                        <div className='flex'>realtime_order_updates</div>
                    </div>
                </div>
                <div className={`${theme === 'dark' ? 'text-[#fad91c]' : 'text-[#DB9D34]'} text-start ml-32`}>&nbsp;&#125;<span className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;</span></div> 

                <div className={`${theme === 'dark' ? 'text-sky-200' : 'text-[#3271AE]'} flex`}>technologies:<span className={`${theme === 'dark' ? 'text-[#fad91c]' : 'text-[#DB9D34]'} `}>&nbsp;&#123;</span></div>
                <div className={`${theme === 'dark' ? 'text-sky-200' : 'text-[#3271AE]'} text-left ml-38`}>
                    <div className='flex text-'>
                        <div className='flex '>React<div className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;&nbsp;</div></div>
                        <div className='flex '>Next.js<div className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;&nbsp;</div></div>
                        <div className='flex '>Tailwind_CSS<div className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;&nbsp;</div></div>
                        <div className='flex '>PostgreSQL<div className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;&nbsp;</div></div>
                        <div className='flex '>Neon<div className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;&nbsp;</div></div>
                    </div>                    
                    <div className='flex'>
                        <div className='flex'>Stripe_API</div>
                    </div>
                </div>
                <div className={`${theme === 'dark' ? 'text-[#fad91c]' : 'text-[#DB9D34]'} text-start ml-32`}>&nbsp;&#125;<span className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;</span></div> 
        
                <div className={`${theme === 'dark' ? 'text-sky-200' : 'text-[#3271AE]'} flex`}>
                    <Link target="_blank" href="https://burgershack.vercel.app/" rel="noopener noreferrer" className={`${theme === 'dark' ? 'text-[#2f7ed3]' : 'text-blue-700'} hover:underline`}>
                        [Visit Live Site]
                    </Link>
                </div>
                <div className={`${theme === 'dark' ? 'text-sky-200' : 'text-[#3271AE]'} flex`}>
                    <Link href="#burgershack-full-details" className={`${theme === 'dark' ? 'text-[#2f7ed3]' : 'text-blue-700'} hover:underline`}>
                        [View Full Project Thumbnail Below]
                    </Link>
                </div>
            </div>

            <div className='pr-0 pt-0 flex h-full'>
                <div className='w-1/2'>
                    <CustomBox
                        // Props for the 32x32 square
                        boxContent="venus jewelery"
                        // boxFont={futura}
                        boxBgColor="bg-[#4994C4]"
                        boxTextColor="text-white"
                        boxFontSize="text-2xl"
                        boxTextTransform="uppercase"
                        boxTextLeading="leading-6"
                        fullBoxContent={
                            <div className={`${theme==='dark' ? `bg-[#fdfaf2]` : `bg-[#dfdcd4]` } w-32 h-32  flex justify-center items-center`}>
                                <div className={`${cinzel.className} text-center text-base lg:text-2xl leading-5`}>
                                    <div className='flex justify-center'>
                                        <div className='text-gray-800'>venus jewelery</div>
                                    </div>
                                </div>
                            </div>
                        }
                        theme={theme}
                        // Props for the rest of the content
                        headingOne="Venus Jewelery"
                        headingTwo="Diamonds are forever."
                        linkText="Visit Design"
                        linkHref="https://venusjewellery.vercel.app/"
                        featuresTitle="Features"
                        features={['Stripe', 'Redis', 'Redux']}
                        dependenciesTitle="Dependencies"
                        dependencies={['framer-motion', 'stripe-js', 'react-redux']}
                    />
                </div>

                <div className='w-1/2 h-full pb-3 pr-0'>
                    <div className='w-full h-full flex'>
                        <div className='h-full w-1/2 overflow-hidden'>
                            <Image
                                src={large1}
                                alt="X"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className='h-full w-1/2 bg-lime-100 flex items-center'>
                            <div>
                                <div className={`${cinzel.className} text-xl lg:text-xl`}>Wedding Rings</div>
                                <div className={`mx-4 text-sm flex justify-center p-1 md:px-2 md:py-1 border-2 text-stone-600 border-stone-300 hover:bg-zinc-500 hover:text-stone-100 uppercase ${inter.className}`}>Shop Wedding Rings</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VenusJeweleryContent