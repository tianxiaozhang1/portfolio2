import React from 'react'
import Link from 'next/link'; 
import localFont from 'next/font/local'
import { pixelify_sans, inter } from '../../../fonts'; 
const selawkReg = localFont({ src: '../../fonts/selawk.ttf' })

function SortingContent({theme}) { 
    return (
        <div className='text-start pr-4 pt-2'>

            <div className='flex text-white'>
                <div className={`${pixelify_sans.className} w-32 h-32 flex items-center justify-center text-white bg-slate-600`}>
                    <div>
                        <div>Sorting</div>
                    </div>
                </div>
                <div className={`ml-4 ${selawkReg.className} items-center flex`}>
                    <div>
                        <div className='text-gray-200 text-2xl font-semibold'>Sorting</div>
                        <div className='text-lg text-gray-100'>A Python-based implementation of the classic algorithm.</div>
                        <div className='flex space-x-2 font-medium pt-2 text-sm'>
                            <Link target="_blank" href="https://minesweeper-pi-azure.vercel.app/" className={`hover:cursor-pointer`}>
                                <div className={`${theme === 'dark' ? ' ' : '' } rounded-sm text-stone-50 bg-[#27639b] text-start px-4 py-1 w-fit`}>Source Code</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className={`mt-2 space-y-1 ${selawkReg.className}`}>
                <div className={`${theme === 'dark' ? 'text-stone-300' : 'text-gray-700'}`}>Playing is simple. The game begins with a full deck of 52 playing cards randomly assigned into 8 cascades. Above those, there are four open/"free" cells on the left and four (initially) empty foundations on the right. The player shall arrange the cards into the four foundations corresponding to the four suits, in order of rank. Only a sequence of cards with alternating colours and downwardly continuous ranks can be moved among the cascades. Victory is declared upon completion.</div>
                <div className={`${theme === 'dark' ? 'text-stone-300' : 'text-gray-700'}`}>This version doesn't include the "Microsoft 32,000" catalogue (hence each game is just random). An addition is the option of auto-completion (called auto stack in the game) instead of always having it.</div>
            </div>



        </div>
    )
}

export default SortingContent
