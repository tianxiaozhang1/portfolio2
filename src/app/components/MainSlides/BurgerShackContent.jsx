import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import localFont from 'next/font/local'
import { pixelify_sans, inter, vt323 } from '../../../fonts'; 
const selawkReg = localFont({ src: '../../fonts/selawk.ttf' })
const bkReg = localFont({ src: '../../fonts/Flame-Regular.ttf' })
const bkSans = localFont({ src: '../../fonts/FlameSans-Regular.ttf' })
const merchantCopy = localFont({ src: '../../fonts/MerchantCopy.ttf' });

import CustomBox from './CustomBox'
import BurgerPhoto from '../../../../public/images/burgershack/burger5.png'



function BurgerShackContent({ theme }) {

    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setDateTime(new Date());
        }, 1000);

        return () => {
        clearInterval(timer);
        };
    }, []);

    const formattedDate = dateTime.toLocaleDateString('en-US');
    const formattedTime = dateTime.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    });

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
                        fullBoxContent={
                            <div className='w-32 h-32 bg-[#f7f1e7]  flex justify-center items-center'>
                                <div className={`${bkReg.className} text-center text-base lg:text-xl text-[#4c2216] `}>
                                    <div className='w-16 h-3 lg:w-20 lg:h-4 bg-[#ec8740] -mb-1 lg:-mb-1.5 rounded-t-3xl'></div>
                                    <div className='flex justify-center'>
                                        <div className='my-0.25'>
                                            <div className='-mb-2.5'>BURGER</div>
                                            <div className='mt-0'>SHACK</div>
                                        </div>
                                    </div>
                                    <div className='w-16 h-3 lg:w-20 lg:h-4 bg-[#ec8740] -mt-1 lg:-mt-1 rounded-b-3xl'></div>
                                </div>
                            </div>
                        }
                        theme={theme}
                        // Props for the rest of the content
                        headingOne="Burger Shack"
                        headingTwo="Your burger, your way."
                        linkText="Visit Site"
                        linkHref="https://burgershack.vercel.app/"
                        featuresTitle="Features"
                        features={['Shopping Cart', 'Neon Database', 'Zod']}
                        dependenciesTitle="Dependencies"
                        dependencies={['postgres', 'bcryptjs', '@vis.gl']}
                    />
                </div>

                <div className='w-1/2 h-full pb-3 pr-0'>
                    <div className='w-full h-full bg-[#c89e70] border-[#ae804f] border-t-8 flex'>
                        <div className=' w-1/12 h-full'>
                            <div className='h-12 mt-24 bg-[#4c2216]'></div>
                            <div className='h-12 bg-[#cd2917]'></div>
                            <div className='h-12 bg-[#318636]'></div>
                        </div>
                        <div className={`w-10/12 h-full ${merchantCopy.className}`}>
                            <div className='mt-7 border-t-8 border-x-8 border-stone-300 h-80 bg-gray-100 px-6 pt-2 text-2xl text-stone-600'>
                                <div className={`${bkReg.className} cursor-default text-center text-xxs md:text-xs lg:text-base text-stone-600 flex justify-center items-center scale-100 lg:scale-75 mt-2 lg:mt-1`}>
                                    <div>
                                        <div className='w-8 h-1.5 md:w-12 md:h-2 lg:w-16 lg:h-3 bg-stone-600 -mb-0.5 lg:-mb-1.5 rounded-t-3xl'></div>
                                        <div className='flex justify-center'>
                                            <div>
                                                <div className='mt-0.5 -mb-0.5 md:-mb-2 lg:-mb-2.5 lg:mt-0.5'>BURGER</div>
                                                <div>SHACK</div>
                                            </div>
                                        </div>
                                        <div className='w-8 h-1.5 md:w-12 md:h-2 lg:w-16 lg:h-3 bg-stone-600 -mt-0.5 lg:-mt-1 rounded-b-3xl'></div>
                                    </div>
                                </div>

                                <div className={`text-xl -mt-2 ${bkReg.className}`}>Burger Shack</div>
                                <div className='leading-3'>
                                    <div className='text-xl -mt-0'>{formattedTime}, {formattedDate}</div>
                                    <div className='text-xl mt-0.25'>328 Yonge St, Toronto, ON M5B 1R8</div>
                                    <div className='text-xl mt-0.25'>(416)555-9876</div>
                                    <div className={`bg-stone-600 px-3 py-1 ${bkSans.className} text-white text-sm mt-1`}>ORDER TXZ123</div>

                                    <div className={`text-base px-3 mt-2 space-y-1 ${bkSans.className}`}>
                                        <div className='flex justify-between mb-0 py-0'>
                                            <div className='flex mr-2'>
                                                <div className='-ml-2 w-3'>2</div>
                                                <div className='ml-3 uppercase'>Triple Cheese Burger</div>
                                            </div>
                                            <div>
                                                $9.99
                                            </div>
                                        </div>
                                        <div className='flex justify-between mb-0 py-0'>
                                            <div className='flex mr-2'>
                                                <div className='-ml-2 w-3'>1</div>
                                                <div className='ml-3 uppercase'>Extra Large Fries</div>
                                            </div>
                                            <div>
                                                $6.99
                                            </div>
                                        </div>
                                    </div>

                                    <div className={`flex justify-between pl-7 pr-3 mt-2 text-base uppercase ${bkSans.className}`}>
                                        <div className='ml-0'>Subtotal</div>
                                        <div>$26.97</div>
                                    </div>
                                    <div className={`flex justify-between pl-7 pr-3 mt-1 text-base uppercase ${bkSans.className}`}>
                                        <div className='ml-0'>Tax</div>
                                        <div>$3.51</div>
                                    </div>
                                    <div className={`flex justify-between pl-7 pr-3 mt-1 text-base uppercase font-semibold ${bkSans.className}`}>
                                        <div className='ml-0'>Total</div>
                                        <div>$30.48</div>
                                    </div>

                                    <div className='flex justify-center mt-4'>
                                        {/* <div className='hidden lg:flex mx-auto text-center text-sm mt-1'>===============================================</div> */}
                                        <div className='text-center text-base mt-1'>=============================================</div>
                                    </div>

                                    <div className={`text-sm uppercase text-center mt-2 ${bkSans.className}`}>
                                        Join our team! Visit joinbs.ca today!
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=' w-1/12 h-full'>
                            <div className='h-12 mt-24 bg-[#4c2216]'></div>
                            <div className='h-12 bg-[#cd2917]'></div>
                            <div className='h-12 bg-[#318636]'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BurgerShackContent;
