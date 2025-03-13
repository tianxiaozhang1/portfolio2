import React from 'react'

const languageBox = "h-36 w-36 font-semibold text-3xl flex items-center justify-center rounded-3xl shadow-md cursor-default"
const languageBoxSmall = "h-16 w-16 lg:h-26 lg:w-26 font-semibold text-sm lg:text-xl flex items-center justify-center rounded-xl lg:rounded-3xl shadow-md cursor-default"
// const languageBoxSmall2 = "h-26 w-26 font-semibold text-sm lg:text-xl flex items-center justify-center rounded-3xl shadow-md cursor-default border-4"
// shadow-[6px_6px_6px_rgba(188,188,188,0.5)]

import { Aldrich, Cinzel, Roboto, Noto_Sans_Ogham, Open_Sans, Inconsolata } from 'next/font/google';
const aldrich = Aldrich({ subsets: ['latin'], weight: "400" })
const cinzel = Cinzel({ subsets: ['latin'] })

const roboto = Roboto({ subsets: ['latin'], weight: '700' })
const notoSans = Noto_Sans_Ogham({ subsets: ['latin'], weight: '400' })
const openSans = Open_Sans({ subsets: ['latin'], weight: '600' })

const inconsolata = Inconsolata({ subsets: ['latin'], weight: '700' })

function Profile() {
    return (
        <div>
            <div className=' w-92 h-78 md:w-190 md:h-132 lg:w-252 lg:h-120 xl:w-316 xl:h-152 rounded-3xl overflow-hidden home-box p-1.5 justify-center items-center shadow-md' >
                <div className='w-full h-full p-6 bg-white rounded-2xl inset-shadow-sm inset-shadow-indigo-500 flex justify-center items-center'>
                    <div className=' text-rouLan'>
                        <div className='text-2xl lg:text-4xl text-center font-semibold text-rouLan flex justify-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7 lg:size-10 flex justify-center mt-1 lg:mt-2.5 mr-3">
                                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                            </svg>
                            <div className=''>tian</div>
                            xiao zhang
                        </div>

                        <div className='lg:text-xl font-semibold text-center'>416 728 6940</div>
                        <div className='lg:text-xl font-semibold -mt-2 mb-6 text-center'>tianxiaozhang@gmail.com</div>

                        <div className='space-x-1 lg:space-x-3 flex mx-auto'>
                            <div className={`bg-gradient-to-br from-[#3c6a98] to-[#24415d] text-[#fada65] ${languageBoxSmall}`}>python</div>
                            <div className={`bg-gradient-to-br from-[#f9f78b] to-[#dec55f] text-slate-950 ${languageBoxSmall} `}>JS</div>
                            <div className={`bg-gradient-to-br from-[#4178c5] to-[#2f5a96] text-slate-50 ${languageBoxSmall}`}>TS</div>   
                            <div className={`bg-gradient-to-br from-[#58ac65] to-[#194b33] text-white ${languageBoxSmall} ${roboto.className}`}>django</div>                         
                            <div className={`bg-[#2d7ea3] text-white ${languageBoxSmall}`}>react</div>                            
                        </div>
                        <div className='space-x-1 lg:space-x-3 flex mt-3'>
                            <div className={`bg-gradient-to-br from-[#42b7e9] to-[#2562ac] text-white ${languageBoxSmall} ${openSans.className} font-bold`}>SQL</div>
                            <div className={`bg-gradient-to-br from-slate-600 to-slate-900 text-slate-100 ${languageBoxSmall}`}>next.js</div>
                            <div className={`bg-gradient-to-br from-[#3cbbff] to-rouLan text-white ${languageBoxSmall}`}>tailwind</div>
                            <div className={`bg-gradient-to-br from-[#56b782] to-[#38495e] text-slate-50 ${languageBoxSmall}`}>vue</div>   
                            <div className={`bg-gradient-to-br from-[#8d2bfc] to-[#de316e] text-slate-50 ${languageBoxSmall}`}>angular</div>  
                        </div>
                    </div>
                </div>
            </div>

            <div className='hidden w-92 h-78 md:w-190 md:h-132 lg:w-252 lg:h-120 xl:w-316 xl:h-152 rounded-3xl overflow-hidden home-box p-1.5 justify-center items-center shadow-md'>
                <div className='w-full h-full p-6 bg-neutral-50 rounded-2xl inset-shadow-sm inset-shadow-indigo-500 flex justify-center items-center'>
                    <div className='h-full'>
                        <div className='h-1/3'>
                            <div className={`bg-gradient-to-br from-[#3c6a98] to-black ${languageBoxSmall} text-[#fada65]`}>python</div>
                            <div className={`bg-gradient-to-br from-[#3c6a98] to-[#24415d] text-[#fada65] ${languageBoxSmall}`}>python</div>
                        </div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
