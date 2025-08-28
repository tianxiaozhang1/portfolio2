import React from 'react'
import Link from 'next/link'; 
import Image from 'next/image'; 
import localFont from 'next/font/local'
import { pixelify_sans, inter } from '../../../fonts'; 
const selawkReg = localFont({ src: '../../fonts/selawk.ttf' })

import SudokuLogo from '../../../../public/images/sudoku/sudokulogo.png'

function SudokuContent({theme}) { 
    return (
        <div className='text-start pr-4 pt-2'>

            <div className='flex text-white'>
                <div className={`${pixelify_sans.className} w-32 h-32 flex items-center justify-center text-white bg-[#e8e8de]`}>
                    <div>
                        <Image src={SudokuLogo} alt="Sudoku Logo" className='w-[120px] h-[120px]' />
                    </div>
                </div>
                <div className={`ml-4 ${selawkReg.className} items-center flex`}>
                    <div>
                        <div className='text-gray-200 text-2xl font-semibold'>Sudoku</div>
                        <div className='text-lg text-gray-100'>A Python-based implementation of the classic game.</div>
                        <div className='flex space-x-2 font-medium pt-2 text-sm'>
                            <Link target="_blank" href="https://github.com/tianxiaozhang1/sudoku" className={`hover:cursor-pointer`}>
                                <div className={`${theme === 'dark' ? ' ' : '' } rounded-sm text-stone-50 bg-[#27639b] text-start px-4 py-1 w-fit`}>Source Code</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className={`mt-2 space-y-1 ${selawkReg.className}`}>
                <div className={`${theme === 'dark' ? 'text-stone-300' : 'text-gray-700'}`}>In a 9-by-9 square puzzle, some numbers are shown and you&quot;re invited to fill the rest. The rule is simple: no number repeats in any row, in any column, or in any of the 9 3-by-3 smaller squares; they all contain 1 to 9.</div>
                <div className={`${theme === 'dark' ? 'text-stone-300' : 'text-gray-700'}`}>Although one may rightfully guess sudoku&quot;s difficulty is directly correlated with the amount of numbers missing, that isn&quot;t quite true. This program reverse-engineers some of the techniques involved in solving sudoku and attempts to design puzzles with different difficulty levels.</div>
                {/* <div className={`${theme === 'dark' ? 'text-stone-300' : 'text-gray-700'}`}>In the updated version a self-solving feature is added. The inital click will not only avoid a mine, but will always open up a small area for a smooth experience. This can be implemented for the human player as well.</div> */}
            </div>



        </div>
    )
}

export default SudokuContent
