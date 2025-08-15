import React, { useState } from 'react';

import Image from 'next/image'

import { AtSign as AtSignIcon, PhoneIcon } from 'lucide-react';
import { source_code_pro, inter } from '../../../fonts';
import Link from 'next/link'; 
import localFont from 'next/font/local'
const selawkReg = localFont({ src: '../../fonts/selawk.ttf' })

function GithubContent({ theme }) {
    return (
        <div className='text-start'>
            <div className={`${theme === 'dark' ? 'text-[#659849]' : 'text-[#68945c]'} text-start`}>&#47;&#47;&nbsp;My GitHub Profile: Your Code Hub</div>
            <div className={`${theme === 'dark' ? 'text-sky-200' : 'text-[#3271AE]'}`}>description: <span className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&nbsp;Explore my coding journey, open-source contributions, and a diverse range of personal projects.</span></div>
            <div className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'} text-start`}>&#x2c;</div>
            
            {/* <div className={`${theme === 'dark' ? 'text-sky-200' : 'text-[#3271AE]'} flex`}>key_stats:<span className={`${theme === 'dark' ? 'text-[#fad91c]' : 'text-[#DB9D34]'} `}>&nbsp;&#123;</span></div>
            <div className={`${theme === 'dark' ? 'text-sky-200' : 'text-[#3271AE]'} flex flex-col ml-6`}>
                <div className='flex'>repositories: "30+"<div className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;</div></div>
                <div className='flex'>contributions: "Consistent commits and activity"<div className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;</div></div>
                <div className='flex'>languages: "Python, JavaScript, TypeScript, HTML, CSS"</div>
            </div>
            <div className={`${theme === 'dark' ? 'text-[#fad91c]' : 'text-[#DB9D34]'} text-start ml-2`}>&nbsp;&#125;<span className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;</span></div>  */}

            {/* <div className={`${theme === 'dark' ? 'text-sky-200' : 'text-[#3271AE]'} flex`}>featured_projects:<span className={`${theme === 'dark' ? 'text-[#fad91c]' : 'text-[#DB9D34]'} `}>&nbsp;&#123;</span></div>
            <div className={`${theme === 'dark' ? 'text-sky-200' : 'text-[#3271AE]'} flex flex-col ml-6`}>
                <div className='flex'>BurgerShack: "Full-stack ordering platform"<div className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;</div></div>
                <div className='flex'>Minesweeper: "Multi-platform game with AI solver"<div className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;</div></div>
                <div className='flex'>Pathfinder: "Algorithm visualization"<div className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;</div></div>
                <div className='flex'>Momenta: "Social media app concept"</div>
            </div>
            <div className={`${theme === 'dark' ? 'text-[#fad91c]' : 'text-[#DB9D34]'} text-start ml-2`}>&nbsp;&#125;<span className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;</span></div> 

            <div className={`${theme === 'dark' ? 'text-sky-200' : 'text-[#3271AE]'} flex`}>
                <Link target="_blank" href="https://github.com/tianxiaozhang1/" rel="noopener noreferrer" className={`${theme === 'dark' ? 'text-[#2f7ed3]' : 'text-blue-700'} hover:underline`}>
                    &#47;&#47;&nbsp;[Visit GitHub Profile]
                </Link>
            </div> */}
        </div>
    )
}

export default GithubContent
