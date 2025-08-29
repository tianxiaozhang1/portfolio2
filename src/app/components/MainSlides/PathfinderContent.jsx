import React from 'react'
import Link from 'next/link'; 
import localFont from 'next/font/local'
import { pixelify_sans, inter, vt323 } from '../../../fonts'; 
const selawkReg = localFont({ src: '../../fonts/selawk.ttf' })

function PathfinderContent({theme}) { 
    return (
        <div className='text-start pr-4 pt-2'>

            <div className='flex text-white'>
                <div className={`${vt323.className} w-32 h-32 flex items-center text-center leading-6 justify-center text-red-500 bg-white uppercase text-4xl`}>
                    <div>
                        <div className='flex'>
                            <div className='text-[#d24834]'>P</div>
                            <div className='text-[#c65656]'>a</div>
                            <div className='text-[#ba6478]'>t</div>
                            <div className='text-[#af729a]'>h</div>
                        </div>
                        <div className='flex'>
                            <div className='text-[#98BE34]'>f</div>
                            <div className='text-[#82AE36]'>i</div>
                            <div className='text-[#6C9E38]'>n</div>
                            <div className='text-[#568E3A]'>d</div>
                            <div className='text-[#407E3C]'>e</div>
                            <div className='text-[#2A6E3E]'>r</div>
                        </div>
                    </div>
                </div>
                <div className={`ml-4 ${selawkReg.className} items-center flex`}>
                    <div>
                        <div className='text-gray-200 text-2xl font-semibold'>Pathfinder</div>
                        <div className='text-lg text-gray-100'>A Python-based implementation of the classic algorithm.</div>
                        <div className='flex space-x-2 font-medium pt-2 text-sm'>
                            <Link target="_blank" href="https://github.com/tianxiaozhang1/pathfinders" className={`hover:cursor-pointer`}>
                                <div className={`${theme === 'dark' ? ' ' : '' } rounded-sm text-stone-50 bg-[#27639b] text-start px-4 py-1 w-fit`}>Source Code</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className={`mt-2 space-y-1 ${selawkReg.className}`}>
                <div className={`${theme === 'dark' ? 'text-stone-300' : 'text-gray-700'}`}>Breadth first search, depth first search, Dijkstra and A* are four useful path finding algorithms. Since breadth first and Dijkstra are identical when there&quot;s no terrain involved, only three are built here.</div>
                <div className={`${theme === 'dark' ? 'text-stone-300' : 'text-gray-700'}`}>The first two algorithms guarantee the shortest path possible. Depth first is less demanding on memory space.</div>
            </div>



        </div>
    )
}

export default PathfinderContent
