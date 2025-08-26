import React from 'react'
import Link from 'next/link'; 
import localFont from 'next/font/local'
// import { source_code_pro, inter } from '../../../fonts'; 
const selawkReg = localFont({ src: '../../fonts/selawk.ttf' })

function Tianphoto({theme}) { 
    return (
        <div className='text-start ml-2'>
            <Link target="_blank" href="https://tianphoto.ca" className={`hover:cursor-pointer`}>
                <div className={`${theme === 'dark' ? ' ' : '' } ${selawkReg.className} font-normal rounded-sm text-stone-100 bg-[#27639b] text-start px-2 py-1 my-5 w-fit`}>tianphoto.ca</div>
            </Link>
            <div className={`${theme === 'dark' ? 'text-sky-200' : 'text-[#3271AE]'}`}>description:<span className={`${theme === 'dark' ? 'text-stone-300' : 'text-gray-700'}`}>&nbsp;A professional online portfolio showcasing diverse photography work, including fashion, headshot, wedding, and ballet.</span></div>
            {/* <div className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'} text-start`}>&#x2c;</div>  */}

            <div className={`${theme === 'dark' ? 'text-sky-200' : 'text-[#3271AE]'} flex`}>key_features:<span className={`${theme === 'dark' ? 'text-[#fad91c]' : 'text-[#DB9D34]'} `}>&nbsp;&#123;</span></div>
            <div className={`${theme === 'dark' ? 'text-sky-200' : 'text-[#3271AE]'} text-left ml-38`}>
                <div className='flex text-'>
                    <div className='flex '>portfolio_display<div className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;&nbsp;</div></div>
                    <div className='flex '>responsive_layouts<div className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;&nbsp;</div></div>
                    <div className='flex'>visual_storytelling<div className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;&nbsp;</div></div>
                </div>                    
                <div className='flex'>
                    <div className='flex'>user_experience</div>
                </div>
            </div>
            <div className={`${theme === 'dark' ? 'text-[#fad91c]' : 'text-[#DB9D34]'} text-start ml-32`}>&nbsp;&#125;<span className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;</span></div> 

            <div className={`${theme === 'dark' ? 'text-sky-200' : 'text-[#3271AE]'} text-left `}>
                <div className='flex '>
                    <div className={`${theme === 'dark' ? 'text-sky-200' : 'text-[#3271AE]'} flex`}>technologies:&nbsp;</div>
                    <span className={`${theme === 'dark' ? 'text-[#fad91c]' : 'text-[#DB9D34]'} `}>&#123;&nbsp;</span>
                    <div className='flex '>squarespace<div className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;&nbsp;</div></div>
                    <div className='flex '>html<div className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;&nbsp;</div></div>
                    <div className='flex '>css&nbsp;</div>
                    <div className={`${theme === 'dark' ? 'text-[#fad91c]' : 'text-[#DB9D34]'} text-start`}>&#125;
                    <span className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;</span></div> 
                </div>                    
            </div>

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
                    <div className='flex '>Canon&nbsp;</div>
                    <div className={`${theme === 'dark' ? 'text-[#fad91c]' : 'text-[#DB9D34]'} text-start`}>&#125;
                    <span className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;</span></div> 
                </div>                    
            </div>

            <div className={`${theme === 'dark' ? 'text-sky-200' : 'text-[#3271AE]'} text-left lowercase`}>
                <div className='flex '>
                    <div className={`${theme === 'dark' ? 'text-sky-200' : 'text-[#3271AE]'} flex`}>Lenses:&nbsp;</div>
                    <span className={`${theme === 'dark' ? 'text-[#fad91c]' : 'text-[#DB9D34]'} `}>&#123;&nbsp;</span>
                    <div className='flex '>Sigma_20mm_f/1.4_ART<div className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;&nbsp;</div></div>
                    <div className='flex '>Sigma_50mm_f/1.4_ART<div className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;&nbsp;</div></div>
                    <div className='flex '>Canon_85mm_f/1.4L&nbsp;</div>
                    <div className={`${theme === 'dark' ? 'text-[#fad91c]' : 'text-[#DB9D34]'} text-start`}>&#125;
                    <span className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;</span></div> 
                </div>                    
            </div>
            
            <div className={`${theme === 'dark' ? 'text-sky-200' : 'text-[#3271AE]'} text-left lowercase`}>
                <div className='flex '>
                    <div className={`${theme === 'dark' ? 'text-sky-200' : 'text-[#3271AE]'} flex`}>Lighting:&nbsp;</div>
                    <span className={`${theme === 'dark' ? 'text-[#fad91c]' : 'text-[#DB9D34]'} `}>&#123;&nbsp;</span>
                    <div className='flex '>Canon<div className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;&nbsp;</div></div>
                    <div className='flex '>Alien_Bees&nbsp;</div>
                    <div className={`${theme === 'dark' ? 'text-[#fad91c]' : 'text-[#DB9D34]'} text-start`}>&#125;
                    </div> 
                </div>                    
            </div>


        </div>
    )
}

export default Tianphoto
