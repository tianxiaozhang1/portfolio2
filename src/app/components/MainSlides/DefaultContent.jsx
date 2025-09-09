import React from 'react';
import Link from 'next/link'; // Assuming Link is used for navigation

import { Aldrich, Cinzel, Roboto, Noto_Sans_Ogham, Open_Sans, Inconsolata, Source_Sans_3, Source_Code_Pro } from 'next/font/google';
const sourceCodePro = Source_Code_Pro({ subsets: ['latin'], weight: "400" })

const numberList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]

function DefaultContent({ theme }) {
    return (
        <div>
            {/* MOBILE */}
            <div className={`lg:hidden h-full w-full bg-[#1e1e1e] flex overflow-hidden cursor-default ${sourceCodePro.className}`}>
                <div className={`w-8 h-full text-end pr-2 pt-0 text-stone-500 ${sourceCodePro.className}`}>
                    {numberList.map((number, i) => {
                        return (
                            <div key={i} className='leading-6'>{number}</div>
                        )
                    })}
                </div>
                <div className=''>
                    <div className='text-[#659849] mt-0'>&#47;&#47;&nbsp;HELLO WORLD</div>
                    <div className='text-sky-200 flex'>name: Tian<div className='text-stone-200'>&#x2c;</div></div>

                    <div className='text-sky-200 flex'>languages: <div className='text-yellow-200 ml-0'>&nbsp; &#123;</div></div>
                    <div className='flex h-18'>
                        <div className='w-1 h-12'></div>
                        <div className='w-26 mr-4 space-x-8 flex pt-1'>
                            <div className='w-0.25 h-22 bg-stone-600'></div>
                            <div className='w-0.25 h-22 bg-stone-600'></div>
                            <div className='w-0.25 h-22 bg-stone-600'></div>
                            <div className='w-0.25 h-22 bg-stone-600'></div>
                        </div>
                        <div className='text-sky-200'>
                            <div className='ml-2 flex'>python<div className='text-stone-200'>&#x2c;</div></div>
                            <div className='ml-2 flex'>javascript<div className='text-stone-200'>&#x2c;</div></div>
                            <div className='ml-2'>typescript</div>
                        </div>
                    </div>
                    <div className='ml-29 text-yellow-200 mt-0.25 flex'>&#125;<div className='text-stone-200'>&#x2c;</div></div>

                    <div className='text-sky-200 flex -mt-0.25'>frameworks: <div className='text-yellow-200 pl-0.5 ml-2'>&#123;</div></div>
                    <div className='flex h-30'>
                        <div className='w-1 h-24'></div>
                        <div className='w-26 mr-4 space-x-8 flex pt-1.5'>
                            <div className='w-0.25 h-34 bg-stone-600'></div>
                            <div className='w-0.25 h-34 bg-stone-600'></div>
                            <div className='w-0.25 h-34 bg-stone-600'></div>
                            <div className='w-0.25 h-34 bg-stone-600'></div>
                        </div>
                        <div className='text-sky-200'>
                            <div className='ml-2 flex'>django<div className='text-stone-200'>&#x2c;</div></div>
                            <div className='ml-2 flex'>react<div className='text-stone-200'>&#x2c;</div></div>
                            <div className='ml-2 flex'>next.js<div className='text-stone-200'>&#x2c;</div></div>
                            <div className='ml-2 text-sky-500 flex'>vue<div className='text-stone-200'>&#x2c;</div></div>
                            <div className='ml-2 text-sky-500'>angular</div>
                        </div>
                    </div>
                    <div className='ml-29 text-yellow-200 mt-0.25 flex'>&#125;<div className='text-stone-200'>&#x2c;</div></div>

                    <div className='text-sky-200 flex'>database: <div className='text-yellow-200 ml-2 pl-0.5'>&nbsp; &#123;</div></div>
                    <div className='flex h-12'>
                        <div className='w-1 h-12'></div>
                        <div className='w-26 mr-4 space-x-8 flex pt-1'>
                            <div className='w-0.25 h-16 bg-stone-600'></div>
                            <div className='w-0.25 h-16 bg-stone-600'></div>
                            <div className='w-0.25 h-16 bg-stone-600'></div>
                            <div className='w-0.25 h-16 bg-stone-600'></div>
                        </div>
                        <div className='text-sky-200'>
                            <div className='ml-2 flex'>MySQL<div className='text-stone-200'>&#x2c;</div></div>
                            <div className='ml-2'>MongoDB</div>
                        </div>
                    </div>
                    <div className='ml-29 text-yellow-200 mt-0.25 flex'>&#125;<div className='text-stone-200'>&#x2c;</div></div>

                    <div className='text-sky-200 flex -mt-0.25'>other_skills:<div className='text-yellow-200 ml-1.5'>&#123;</div></div>
                    <div className='flex h-30'>
                        <div className='w-1 h-24'></div>
                        <div className='w-29 mr-2 space-x-8 flex pt-1.5'>
                            <div className='w-0.25 h-33 bg-stone-600'></div>
                            <div className='w-0.25 h-33 bg-stone-600'></div>
                            <div className='w-0.25 h-33 bg-stone-600'></div>
                            <div className='w-0.25 h-33 bg-stone-600'></div>
                        </div>
                        <div className='text-sky-200 pl-0.5'>
                            <div className='flex'>TailwindCSS<div className='text-stone-200'>&#x2c;</div></div>
                            <div className='flex -mt-0.5'>css<div className='text-stone-200'>&#x2c;&nbsp;</div>html<div className='text-stone-200'>&#x2c;</div></div>
                            <div className='flex'>RESTful API<div className='text-stone-200'>&#x2c;</div></div>
                            <div className='flex'>Stripe<div className='text-stone-200'>&#x2c;</div></div>
                            <div className=''>Firebase</div>
                        </div>
                    </div>
                    <div className='ml-33 text-yellow-200 -mt-0.25 flex'>&#125;</div>
                </div>
                
            </div>

            {/* DESKTOP */}
            <div className='hidden lg:block'>
                <div className={`${theme === 'dark' ? 'text-[#659849]' : 'text-[#68945c]'} text-start`}>&#47;&#47;&nbsp;HELLO WORLD</div>
                <div className={`${theme === 'dark' ? 'text-sky-200' : 'text-[#3271AE]'} flex`}>name: tian<div className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;</div></div>
                <div className={`${theme === 'dark' ? 'text-sky-200' : 'text-[#3271AE]'} flex`}>location: toronto<div className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;</div></div>
                <div className={`${theme === 'dark' ? 'text-sky-200' : 'text-[#3271AE]'} flex`}>languages:
                    <div className={`${theme === 'dark' ? 'text-[#fad91c]' : 'text-[#DB9D34]'} ml-0`}>&nbsp;&#123;</div>
                    <div className={`${theme === 'dark' ? 'text-sky-200' : 'text-[#3271AE]'} flex`}>
                        <div className='ml-2 flex'>python<div className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;</div></div>
                        <div className='ml-2 flex'>javascript<div className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;</div></div>
                        <div className='ml-2'>typescript</div>
                    </div>
                    <div className={`${theme === 'dark' ? 'text-[#fad91c]' : 'text-[#DB9D34]'} mt-0 flex`}>&nbsp;&#125;<div className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;</div></div>
                </div>
                <div className={`${theme === 'dark' ? 'text-sky-200' : 'text-[#3271AE]'} flex`}>frameworks:
                    <div className={`${theme === 'dark' ? 'text-[#fad91c]' : 'text-[#DB9D34]'} ml-0`}>&nbsp;&#123;</div>
                    <div className={`${theme === 'dark' ? 'text-sky-200' : 'text-[#3271AE]'} flex`}>
                        <div className='ml-2 flex'>django<div className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;</div></div>
                        <div className='ml-2 flex'>react<div className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;</div></div>
                        <div className='ml-2 flex'>next.js<div className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;</div></div>
                        <div className='ml-2 flex'>angular<div className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;</div></div>
                        <div className='ml-2 flex'>vue</div>
                    </div>
                    <div className={`${theme === 'dark' ? 'text-[#fad91c]' : 'text-[#DB9D34]'} mt-0 flex`}>&nbsp;&#125;<div className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;</div></div>
                </div>
                <div className={`${theme === 'dark' ? 'text-sky-200' : 'text-[#3271AE]'} flex`}>database:
                    <div className={`${theme === 'dark' ? 'text-[#fad91c]' : 'text-[#DB9D34]'} ml-0`}>&nbsp;&#123;</div>
                    <div className={`${theme === 'dark' ? 'text-sky-200' : 'text-[#3271AE]'} flex`}>
                        <div className='ml-2 flex'>postgreSQL<div className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;</div></div>
                        <div className='ml-2 flex'>mongoDB</div>
                    </div>
                    <div className={`${theme === 'dark' ? 'text-[#fad91c]' : 'text-[#DB9D34]'} mt-0 flex`}>&nbsp;&#125;<div className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;</div></div>
                </div>
                <div className={`${theme === 'dark' ? 'text-sky-200' : 'text-[#3271AE]'} flex`}>skills/tools:
                    <div className={`${theme === 'dark' ? 'text-[#fad91c]' : 'text-[#DB9D34]'} ml-0`}>&nbsp;&#123;</div>
                    <div className={`${theme === 'dark' ? 'text-sky-200' : 'text-[#3271AE]'} flex`}>
                        <div className='ml-2 flex'>tailwindCSS<div className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;</div></div>
                        <div className='ml-2 flex'>css<div className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;</div></div>
                        <div className='ml-2 flex'>html<div className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;</div></div>
                        <div className='ml-2 flex'>RESTful&nbsp;API<div className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;</div></div>
                        <div className='ml-2 flex'>stripe<div className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;</div></div>
                        <div className='ml-2 flex'>firebase</div>
                    </div>
                </div>
                <div className={`${theme === 'dark' ? 'text-sky-200' : 'text-[#3271AE]'} flex`}>
                    <div className={`${theme === 'dark' ? 'text-sky-200' : 'text-[#3271AE]'} flex ml-36`}>
                        <div className='ml-2 flex'>Redux<div className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;</div></div>
                        <div className='ml-2 flex'>Vite<div className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;</div></div>
                        <div className='ml-2 flex'>SQLite<div className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;</div></div>
                        <div className='ml-2 flex'>Git<div className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;</div></div>
                        <div className='ml-2 flex'>Google&nbsp;Lighthouse</div>
                    </div>
                    <div className={`${theme === 'dark' ? 'text-[#fad91c]' : 'text-[#DB9D34]'} mt-0 flex`}>&nbsp;&#125;<div className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;</div></div> 
                </div>
                <div className={`${theme === 'dark' ? 'text-sky-200' : 'text-[#3271AE]'} flex`}>llm/ml:
                    <div className={`${theme === 'dark' ? 'text-[#fad91c]' : 'text-[#DB9D34]'} ml-0`}>&nbsp;&#123;</div>
                    <div className={`${theme === 'dark' ? 'text-sky-200' : 'text-[#3271AE]'} flex`}>
                        <div className='ml-2 flex'>Gemini<div className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;</div></div>
                        <div className='ml-2 flex'>ChatGPT<div className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;</div></div>
                        <div className='ml-2 flex'>PyTorch</div>
                    </div>
                    <div className={`${theme === 'dark' ? 'text-[#fad91c]' : 'text-[#DB9D34]'} mt-0 flex`}>&nbsp;&#125;<div className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;</div></div>
                </div>
                <div className={`${theme === 'dark' ? 'text-[#469cd5]' : 'text-[#7E527F]'} flex`}>low_code:
                    <div className={`${theme === 'dark' ? 'text-[#fad91c]' : 'text-[#DB9D34]'} ml-0`}>&nbsp;&#123;</div>
                    <div className={`${theme === 'dark' ? 'text-[#469cd5]' : 'text-[#7E527F]'} flex`}>
                        <div className='ml-2 flex'>retool<div className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;</div></div>
                        <div className='ml-2 flex'>zapier</div>
                    </div>
                    <div className={`${theme === 'dark' ? 'text-[#fad91c]' : 'text-[#DB9D34]'} mt-0 flex`}>&nbsp;&#125;<div className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;</div></div>
                </div>
                <div className={`${theme === 'dark' ? 'text-[#469cd5]' : 'text-[#7E527F]'} flex`}>cloud_devops:
                    <div className={`${theme === 'dark' ? 'text-[#fad91c]' : 'text-[#DB9D34]'} ml-0`}>&nbsp;&#123;</div>
                    <div className={`${theme === 'dark' ? 'text-[#469cd5]' : 'text-[#7E527F]'} flex`}>
                        <div className='ml-2 flex'>aws<div className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;</div></div>
                        <div className='ml-2'>docker</div>
                    </div>
                    <div className={`${theme === 'dark' ? 'text-[#fad91c]' : 'text-[#DB9D34]'} mt-0 flex`}>&nbsp;&#125;<div className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;</div></div>
                </div>
                <div className={`${theme === 'dark' ? 'text-[#469cd5]' : 'text-[#7E527F]'} flex`}>testing_ci_cd:
                    <div className={`${theme === 'dark' ? 'text-[#fad91c]' : 'text-[#DB9D34]'} ml-0`}>&nbsp;&#123;</div>
                    <div className={`${theme === 'dark' ? 'text-[#469cd5]' : 'text-[#7E527F]'} flex`}>
                        <div className='ml-2'>github_actions</div>
                    </div>
                    <div className={`${theme === 'dark' ? 'text-[#fad91c]' : 'text-[#DB9D34]'} mt-0 flex`}>&nbsp;&#125;<div className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;</div></div>
                </div>
                <div className={`${theme === 'dark' ? 'text-sky-200' : 'text-[#3271AE]'} flex`}>links:
                    <div className={`${theme === 'dark' ? 'text-[#fad91c]' : 'text-[#DB9D34]'} ml-0`}>&nbsp;&#123;</div>
                    <div className={`${theme === 'dark' ? 'text-sky-200' : 'text-[#3271AE]'} flex`}>
                        <div className='ml-2 flex'>email<div className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;</div></div>
                        <div className='ml-2 flex'>message<div className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;</div></div>
                        <div className='ml-2 flex'>website<div className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;</div></div>
                        <div className='ml-2 flex'>instagram<div className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;</div></div>                                        
                        <div className='ml-2 flex'>phone<div className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}>&#x2c;</div></div>
                        <div className='ml-2 flex'>github</div>
                    </div>
                    <div className={`${theme === 'dark' ? 'text-[#fad91c]' : 'text-[#DB9D34]'} mt-0 flex`}>&nbsp;&#125;<div className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}></div></div>
                </div>
                <div className={`${theme === 'dark' ? 'text-sky-200' : 'text-[#3271AE]'} flex`}>projects:
                    <div className={`${theme === 'dark' ? 'text-[#fad91c]' : 'text-[#DB9D34]'} ml-0`}>&nbsp;&#123;</div>
                    <div className={`${theme === 'dark' ? 'text-sky-200' : 'text-[#3271AE]'} flex`}>
                        <div className='ml-2 flex'>see_below</div>
                    </div>
                    <div className={`${theme === 'dark' ? 'text-[#fad91c]' : 'text-[#DB9D34]'} mt-0 flex`}>&nbsp;&#125;<div className={`${theme === 'dark' ? 'text-stone-200' : 'text-gray-700'}`}></div></div>
                </div>
            </div>
        </div>
    );
}

export default DefaultContent;
