import React from 'react';

import Image from 'next/image'

// import { AtSign as AtSignIcon, PhoneIcon } from 'lucide-react';
// import { source_code_pro, inter } from '../../../fonts';
import Link from 'next/link'; 
import localFont from 'next/font/local'
const selawkReg = localFont({ src: '../../fonts/selawk.ttf' })

import InstagramLogo from '../../../../public/logos/Instagram.svg'

function InstagramContent({ theme }) {
    return (
        <div className='text-start'>
            <div className='flex items-center space-x-2'>
                <Image src={InstagramLogo} className="w-8 h-8" alt="Instagram Logo" />
                <Link target="_blank" href="https://www.instagram.com/tianxiaozhang" className={`hover:cursor-pointer`}>
                    <div className={`${theme === 'dark' ? ' ' : '' } ${selawkReg.className} font-normal rounded-sm text-stone-100 bg-[#27639b] text-start px-2 py-1 my-5 w-fit`}>@tianxiaozhang</div>
                </Link>
            </div>
            <div className={`${theme === 'dark' ? 'text-stone-300' : 'text-gray-700'} pr-4`}>
                With extensive experience in social media management, I have a proven track record of developing and implementing content strategies. I am skilled at creating engaging visuals and ad copy, and I manage social media calendars to ensure consistent brand messaging.
            </div>

            <div>&nbsp;</div> 

            <div className={`${theme === 'dark' ? 'text-sky-200' : 'text-[#3271AE]'} flex`}>key_features:<span className={`${theme === 'dark' ? 'text-[#fad91c]' : 'text-[#DB9D34]'} `}>&nbsp;&#123;</span></div>
            <div className={`${theme === 'dark' ? 'text-sky-200' : 'text-[#3271AE]'} text-left ml-38 lowercase`}>
                <div className='flex'>
                    <div className='flex '>Social_Media_Strategy<div className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;&nbsp;</div></div>
                    <div className='flex '>Paid_Ad_Optimization<div className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;&nbsp;</div></div>
                    <div className='flex'>Audience_Targeting<div className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;&nbsp;</div></div>
                </div>                    
                <div className='flex'>
                    <div className='flex '>Performance_Analytics<div className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;&nbsp;</div></div>
                    <div className='flex'>Content_Calendar_Management</div>
                </div>
            </div>
            <div className={`${theme === 'dark' ? 'text-[#fad91c]' : 'text-[#DB9D34]'} text-start ml-32`}>&nbsp;&#125;<span className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;</span></div> 

            <div className={`${theme === 'dark' ? 'text-sky-200' : 'text-[#3271AE]'} text-left lowercase`}>
                <div className='flex '>
                    <div className={`${theme === 'dark' ? 'text-sky-200' : 'text-[#3271AE]'} flex`}>Software:&nbsp;</div>
                    <span className={`${theme === 'dark' ? 'text-[#fad91c]' : 'text-[#DB9D34]'} `}>&#123;&nbsp;</span>
                    <div className='flex '>Adobe_Photoshop<div className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;&nbsp;</div></div>
                    <div className='flex '>Adobe_Lightroom<div className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;&nbsp;</div></div>
                    <div className='flex '>Adobe_Premiere&nbsp;</div>
                    <div className={`${theme === 'dark' ? 'text-[#fad91c]' : 'text-[#DB9D34]'} text-start`}>&#125;
                    <span className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;</span></div> 
                </div>                    
            </div>

            <div className={`${theme === 'dark' ? 'text-sky-200' : 'text-[#3271AE]'} text-left lowercase`}>
                <div className='flex '>
                    <div className={`${theme === 'dark' ? 'text-sky-200' : 'text-[#3271AE]'} flex`}>Camera:&nbsp;</div>
                    <span className={`${theme === 'dark' ? 'text-[#fad91c]' : 'text-[#DB9D34]'} `}>&#123;&nbsp;</span>
                    <div className='flex '>Canon&#x2c;&nbsp;</div>
                    <div className='flex '>Apple&nbsp;</div>
                    <div className={`${theme === 'dark' ? 'text-[#fad91c]' : 'text-[#DB9D34]'} text-start`}>&#125;</div> 
                </div>                    
            </div>

        </div>
    )
}

export default InstagramContent
