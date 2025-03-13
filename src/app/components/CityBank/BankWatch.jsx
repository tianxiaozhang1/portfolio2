import React from 'react'
import { aldrich } from '../../../fonts';

function BankWatch() {
  return (
    <div className='xl:h-25 xl:w-21 bg-slate-800 rounded-3xl flex justify-center items-center'>
        <div className='xl:h-24 xl:w-20 bg-slate-700 rounded-3xl border-2 border-slate-400 px-2 py-3 space-y-0.5'>
            <div className={`text-blue-100 -mt-1.5 -mb-0.5 text-xxs flex justify-center ${aldrich.className}`}>CITY BANK</div>
            <div className='rounded-sm bg-rouLan text-blue-200 h-5 w-full flex items-center px-0.5'>
                <div className='  w-4 h-4 flex items-center justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="size-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                    </svg>
                </div>
                <div className={`text-xxxs ml-1 mt-0.5 ${aldrich.className}`}>Transfers</div>
            </div>
            <div className='rounded-sm bg-rouLan text-blue-200 h-5 w-full flex items-center px-0.5'>
                <div className='  w-4 h-4 flex items-center justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="size-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                </div>
                <div className={`text-xxxs ml-1 mt-0.5 ${aldrich.className}`}>Locations</div>
            </div>
            <div className='rounded-sm bg-rouLan text-blue-200 h-5 w-full flex items-center px-0.5'>
                <div className='  w-4 h-4 flex items-center justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" class="size-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                </div>
                <div className={`text-xxxs ml-1 mt-0.5 ${aldrich.className}`}>Contact Us</div>
            </div>
        </div>
    </div>
  )
}

export default BankWatch
