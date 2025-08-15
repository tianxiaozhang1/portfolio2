import React from 'react';
import Link from 'next/link';

function BurgerShackContent({ theme }) {
    return (
        <div className='text-start'>
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
    );
}

export default BurgerShackContent;
