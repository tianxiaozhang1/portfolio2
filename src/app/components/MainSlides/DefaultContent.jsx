import React from 'react';
import Link from 'next/link'; // Assuming Link is used for navigation

function DefaultContent({ theme }) {
    return (
        <div className=''>
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
    );
}

export default DefaultContent;
