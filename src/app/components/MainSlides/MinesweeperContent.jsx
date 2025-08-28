import React from 'react'
import Link from 'next/link'; 
import Image from 'next/image'; 
import localFont from 'next/font/local'
import { pixelify_sans, inter } from '../../../fonts'; 
const selawkReg = localFont({ src: '../../fonts/selawk.ttf' })

import Smiley1 from '../../../../public/images/minesweeper/smiley.svg'
// import moduleName from '../../../../public'


function MinesweeperContent({theme}) { 
    return (
        <div className='text-start pr-4 pt-2'>

            <div className='flex text-white'>
                <div className={`${pixelify_sans.className} w-32 h-32 flex items-center justify-center text-white bg-[#cacac4]`}>
                    <div>
                        <div className='w-16 h-2 bg-[#e8e8de] ml-2'></div>
                        <div className='flex'>
                            <div className='w-2 h-16 bg-[#e8e8de]'></div>
                            <Image src={Smiley1} alt="Smiley" className='w-16 h-16' />
                            <div className='w-2 h-16 bg-[#848480]'></div>
                        </div>
                        <div className='w-16 h-2 bg-[#848480] ml-2'></div>
                    </div>
                </div>
                <div className={`ml-4 ${selawkReg.className} items-center flex`}>
                    <div>
                        <div className='text-gray-200 text-2xl font-semibold'>Minesweeper</div>
                        <div className='text-lg text-gray-100'>A React-based implementation of the classic game.</div>
                        <div className='flex space-x-2 font-medium pt-2 text-sm'>
                            <Link target="_blank" href="https://minesweeper-pi-azure.vercel.app/" className={`hover:cursor-pointer`}>
                                <div className={`${theme === 'dark' ? ' ' : '' } rounded-sm text-stone-50 bg-[#27639b] hover:bg-[#2f77ba] text-start px-4 py-1 w-fit`}>Play Game</div>
                            </Link>
                            {/* <Link target="_blank" href="https://github.com/tianxiaozhang1/minesweeperNextJS" className={`hover:cursor-pointer`}>
                                <div className={`${theme === 'dark' ? ' ' : '' } rounded-sm text-stone-50 bg-[#27639b] hover:bg-[#2f77ba] text-start px-4 py-1 w-fit`}>Source Code</div>
                            </Link> */}
                            <Link target="_blank" href="https://github.com/tianxiaozhang1/minesweeper_js" className={`hover:cursor-pointer`}>
                                <div className={`${theme === 'dark' ? ' ' : '' } rounded-sm text-stone-50 bg-[#27639b] hover:bg-[#2f77ba] text-start px-4 py-1 w-fit`}>JavaScript Code</div>
                            </Link>
                            <Link target="_blank" href="https://github.com/tianxiaozhang1/minesweeper" className={`hover:cursor-pointer`}>
                                <div className={`${theme === 'dark' ? ' ' : '' } rounded-sm text-stone-50 bg-[#27639b] hover:bg-[#2f77ba] text-start px-4 py-1 w-fit`}>Python Code</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className={`mt-2 space-y-1 ${selawkReg.className}`}>
                <div className={`${theme === 'dark' ? 'text-stone-300' : 'text-gray-700'}`}>It leverages modern front-end technologies to provide an interactive and engaging user experience for the timeless puzzle. Only the &quot;Expert&quot; difficulty is implemented for simplicity.</div>
                <div className={`${theme === 'dark' ? 'text-stone-300' : 'text-gray-700'}`}>The rules of this particular version is similar to the Windows version; one minor difference being only flagging/sweeping all mines (and not necessarily opening any other squares) will win the game as well. One added function is to guarantee a successful initial click so the game won&apos;t be over before it begins (game will replace the map if a mine is hit upon first click).</div>
                <div className={`${theme === 'dark' ? 'text-stone-300' : 'text-gray-700'}`}>In the updated version a self-solving feature is added. The inital click will not only avoid a mine, but will always open up a small area for a smooth experience. This can be implemented for the human player as well.</div>
            </div>



        </div>
    )
}

export default MinesweeperContent
