import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import localFont from 'next/font/local'
import { pixelify_sans, inter, vt323, pt_sans_narrow } from '../../../fonts'; 
const selawkReg = localFont({ src: '../../fonts/selawk.ttf' })
const bkReg = localFont({ src: '../../fonts/selawk.ttf' })

import large1 from '../../../../public/images/venus/large1.jpg'

import smbg from '../../../images/momenta/smbg.jpg'

import CustomBox from './CustomBox'

function MomentaContent({ theme }) {
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
                        boxContent="momenta"
                        // boxFont={futura}
                        boxBgColor="bg-[#4994C4]"
                        boxTextColor="text-white"
                        boxFontSize="text-2xl"
                        boxTextTransform="uppercase"
                        boxTextLeading="leading-6"
                        fullBoxContent={
                            <div className={`${theme==='dark' ? `bg-gray-50` : `bg-gray-200` } text-gray-800 w-32 h-32  flex justify-center items-center`}>
                                <div className={`${pt_sans_narrow.className} text-center text-base lg:text-2xl leading-5`}>
                                    <div className='flex justify-center'>
                                        <div className='text-gray-800'>momenta</div>
                                    </div>
                                </div>
                            </div>
                        }
                        theme={theme}
                        // Props for the rest of the content
                        headingOne="Momenta"
                        headingTwo="Share your moments."
                        linkText="Visit Design"
                        linkHref="https://github.com/tianxiaozhang1/momenta"
                        featuresTitle="Features"
                        features={['Authentication', 'Web Tokens', 'Recoil']}
                        dependenciesTitle="Dependencies"
                        dependencies={['jwt_decoder', 'recoil', 'cors']}
                    />
                </div>

                <div className='w-1/2 h-full pb-3 pr-0'>
                    <div className='w-full h-full' 
                        style={{
                            backgroundImage: `url(${smbg.src})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            opacity: 1,
                        }}
                    >
                        <div className='h-full w-full'>
                            <div className='h-2/5 w-full'></div>
                            <div className='h-1/5 w-full flex justify-center items-center'>
                                <div className='h-26 w-26 xl:h-22 -mt-2 xl:w-22 border-2 border-slate-100 rounded-2xl'></div> 
                            </div>
                            <div className='h-2/5 w-full'>
                                <div className='h-1/2'>
                                    <div className={`h-12 mt-0 lg:text-xl xl:text-2xl flex items-start justify-center text-center text-slate-100 drop-shadow-[0_2px_2px_rgba(100,100,100,1)]
                                                        ${pt_sans_narrow.className}`}
                                    >
                                        momenta
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MomentaContent
