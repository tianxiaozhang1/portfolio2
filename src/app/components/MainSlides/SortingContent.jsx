import React from 'react'
import Link from 'next/link'; 
import localFont from 'next/font/local'
import { pixelify_sans, inter, vt323 } from '../../../fonts'; 
const selawkReg = localFont({ src: '../../fonts/selawk.ttf' })

function SortingContent({theme}) { 
    return (
        <div className='text-start pr-4 pt-2'>

            <div className='flex text-white'>
                <div className={`${vt323.className} w-32 h-32 flex items-center justify-center text-red-800 bg-white uppercase text-4xl`}>
                    <div>
                        <div className='flex'>
                            <div className='text-[#88ACDA]'>S</div>
                            <div className='text-[#72A1CD]'>o</div>
                            <div className='text-[#5594BB]'>r</div>
                            <div className='text-[#408AAE]'>t</div>
                            <div className='text-[#2A80A1]'>i</div>
                            <div className='text-[#157694]'>n</div>
                            <div className='text-[#006C88]'>g</div>
                        </div>
                    </div>
                </div>
                <div className={`ml-4 ${selawkReg.className} items-center flex`}>
                    <div>
                        <div className='text-gray-200 text-2xl font-semibold'>Sorting</div>
                        <div className='text-lg text-gray-100'>A Python-based implementation of the classic algorithm.</div>
                        <div className='flex space-x-2 font-medium pt-2 text-sm'>
                            <Link target="_blank" href="https://github.com/tianxiaozhang1/sorting" className={`hover:cursor-pointer`}>
                                <div className={`${theme === 'dark' ? ' ' : '' } rounded-sm text-stone-50 bg-[#27639b] text-start px-4 py-1 w-fit`}>Source Code</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className={`mt-2 space-y-1 ${selawkReg.className}`}>
                <p className={`${theme === 'dark' ? 'text-stone-300' : 'text-gray-700'}`}>
                    The four algorithms visualized are: <span className={`${theme === 'dark' ? 'text-[#2f7ed3]' : 'text-blue-700'} hover:underline cursor-pointer`}>bubble sort</span>,{' '}
                    <span className={`${theme === 'dark' ? 'text-[#2f7ed3]' : 'text-blue-700'} hover:underline cursor-pointer`}>heap sort</span>,{' '}
                    <span className={`${theme === 'dark' ? 'text-[#2f7ed3]' : 'text-blue-700'} hover:underline cursor-pointer`}>merge sort</span>,{' '}
                    and last but possibly the least (time required), <span className={`${theme === 'dark' ? 'text-[#2f7ed3]' : 'text-blue-700 '} hover:underline cursor-pointer`}>quick sort</span>.
                </p>
                <div className={`${theme === 'dark' ? 'text-stone-300' : 'text-gray-700'}`}>The four algorithms are different in efficiency but the clock rates are calibrated so that they appear to reach a sorted array in roughly the same amount of time for better viewing pleasure. At the same time, the advantage of the latter two algorithms should be easily noticeable.</div>
            </div>



        </div>
    )
}

export default SortingContent
