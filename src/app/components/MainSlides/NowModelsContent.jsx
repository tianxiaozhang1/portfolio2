import React from 'react'
import Link from 'next/link'; 

function NowModelsContent({ theme }) {
  return (
    <div className='text-start'>
            <div className={`${theme === 'dark' ? 'text-[#659849]' : 'text-[#68945c]'} text-start`}>&#47;&#47;&nbsp;Project: NowModels.tsx</div>
            <div className={`${theme === 'dark' ? 'text-sky-200' : 'text-[#3271AE]'}`}>description: <span className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&nbsp;A front-end recreation of a high-fashion model agency's digital presence, focusing on aesthetic and usability.</span></div>
            <div className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'} text-start`}>&#x2c;</div>
            
            <div className={`${theme === 'dark' ? 'text-sky-200' : 'text-[#3271AE]'} flex`}>key_features:<span className={`${theme === 'dark' ? 'text-[#fad91c]' : 'text-[#DB9D34]'} `}>&nbsp;&#123;</span></div>
            <div className={`${theme === 'dark' ? 'text-sky-200' : 'text-[#3271AE]'} flex flex-col ml-6`}>
                <div className='flex'>chic_modern_design: "Translating a high-end fashion brand's identity into a web experience"<div className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;</div></div>
                <div className='flex'>dynamic_portfolios: "Showcasing model profiles with responsive image galleries"<div className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;</div></div>
                <div className='flex'>intuitive_navigation: "Clean and logical pathways for users to explore talent and services"<div className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;</div></div>
                <div className='flex'>cross_browser_compatibility: "Ensuring consistent visuals and functionality across different browsers"</div>
            </div>
            <div className={`${theme === 'dark' ? 'text-[#fad91c]' : 'text-[#DB9D34]'} text-start ml-2`}>&nbsp;&#125;<span className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;</span></div>

            <div className={`${theme === 'dark' ? 'text-sky-200' : 'text-[#3271AE]'} flex`}>technologies:<span className={`${theme === 'dark' ? 'text-[#fad91c]' : 'text-[#DB9D34]'} `}>&nbsp;&#123;</span></div>
            <div className={`${theme === 'dark' ? 'text-sky-200' : 'text-[#3271AE]'} flex flex-col ml-6`}>
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
  )
}

export default NowModelsContent
