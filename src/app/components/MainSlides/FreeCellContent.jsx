import React from 'react'
import Link from 'next/link'; 
import Image from 'next/image'; 
import localFont from 'next/font/local'
import { pixelify_sans, inter } from '../../../fonts'; 
const selawkReg = localFont({ src: '../../fonts/selawk.ttf' })

import FreeCellLogo from '../../../../public/images/freecell/freecelllogo.png'

function FreeCellContent({theme}) { 
    return (
        <div className='text-start pr-4 pt-2'>

            <div className='flex text-white'>
                <div className={`${pixelify_sans.className} w-32 h-32 flex items-center justify-center text-white bg-[#4e7046]`}>
                    <div className='bg-[#ecece8] w-26 h-26 flex justify-center items-center'>
                        <Image src={FreeCellLogo} alt="Freecell Logo" className='w-[82px] h-[51px]' />
                    </div>
                </div>
                <div className={`ml-4 ${selawkReg.className} items-center flex`}>
                    <div>
                        <div className='text-gray-200 text-2xl font-semibold'>Freecell</div>
                        <div className='text-lg text-gray-100'>A Python-based implementation of the classic game.</div>
                        <div className='flex space-x-2 font-medium pt-2 text-sm'>
                            <Link target="_blank" href="https://github.com/tianxiaozhang1/freecell" className={`hover:cursor-pointer`}>
                                <div className={`${theme === 'dark' ? ' ' : '' } rounded-sm text-stone-50 bg-[#27639b] text-start px-4 py-1 w-fit`}>Source Code</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className={`mt-2 space-y-1 ${selawkReg.className}`}>
                <div className={`${theme === 'dark' ? 'text-stone-300' : 'text-gray-700'}`}>Playing is simple. The game begins with a full deck of 52 playing cards randomly assigned into 8 cascades. Above those, there are four open/&quot;free&quot; cells on the left and four (initially) empty foundations on the right. The player shall arrange the cards into the four foundations corresponding to the four suits, in order of rank. Only a sequence of cards with alternating colours and downwardly continuous ranks can be moved among the cascades. Victory is declared upon completion.</div>
                <div className={`${theme === 'dark' ? 'text-stone-300' : 'text-gray-700'}`}>This version doesn&apos;t include the &quot;Microsoft 32,000&quot; catalogue (hence each game is just random). An addition is the option of auto-completion (called auto stack in the game) instead of always having it.</div>
            </div>



        </div>
    )
}

export default FreeCellContent
