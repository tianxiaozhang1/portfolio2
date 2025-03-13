"use client"
import React from 'react'
import Link from 'next/link'

import { useState, useEffect } from 'react'

import { pt_sans_narrow } from '../../fonts'

// const Sorting = () => {
//     const [sortShuffle, setSortShuffle] = useState(0);
  
//     const [currentIndex, setCurrentIndex] = useState(0);
//       const names = ["gnitros", "ngitrso", "nigtsro", "nitgsor", "intsgor", "instogr", "isntorg", "sintorg", "sinotrg", "sionrtg", "soirntg", "soritng", "sorting", "sorting"];
  
//       useEffect(() => {
//       if (currentIndex === names.length - 1) {
//           return;
//       }
//       const interval = setInterval(() => {
//           const updatedData = currentIndex + 1;
//           setCurrentIndex(updatedData);
//       }, 100);
  
//       return () => clearInterval(interval);
//       }, [currentIndex]);
  
//     return (
  
//           <div className='flex rounded-3xl bg-stone-100' onMouseEnter={(e)=>setCurrentIndex(0)} onMouseLeave={(e)=>setSortShuffle(0)} style={{height: 408, width: 640, overflow: 'hidden'}}>
//               <div className='w-4/12 h-full flex justify-end items-center pr-1 space-x-2'>
//                   <div className='bg-mergeColour1' style={{height: 98, width: 28}}></div>
  
//                   <div className='bg-mergeColour3' style={{height: 132+10, width: 28}}></div>
  
//                   <div className='bg-mergeColour5' style={{height: 152+21, width: 28}}></div>
  
//                   <div className='bg-mergeColour7' style={{height: 162+24, width: 28}}></div>
  
//                   <div className='bg-mergeColour9' style={{height: 172+23, width: 28}}></div>
//               </div>
//               <div className='w-4/12 flex justify-center text-slate-500 cursor-pointer h-full items-center space-x-1'>
  
//                   <div>
//                       <div className={`${pt_sans_narrow.className} text-6xl font-bold uppercase mx-6 text-mergeColour11 -my-4`} >{names[currentIndex]}</div>
//                   </div>
  
//               </div>
//               <div className='w-4/12 h-full flex justify-start items-center space-x-2 pl-1'>
  
//                   <div className='bg-mergeColour13' style={{height: 192+23, width: 28}}></div>
  
//                   <div className='bg-mergeColour15' style={{height: 212+20, width: 28}}></div>
  
//                   <div className='bg-mergeColour17' style={{height: 232+22, width: 28}}></div>
  
//                   <div className='bg-mergeColour19' style={{height: 252+26, width: 28}}></div>
  
//                   <div className='bg-mergeColour20' style={{height: 282+29, width: 28}}></div>
//               </div>
//           </div>
//     )
//   }

const Sorting = () => {
  const [sortShuffle, setSortShuffle] = useState(0);

  const [currentIndex, setCurrentIndex] = useState(0);
    const names = ["gnitros", "ngitrso", "nigtsro", "nitgsor", "intsgor", "instogr", "isntorg", "sintorg", "sinotrg", "sionrtg", "soirntg", "soritng", "sorting", "sorting"];

    useEffect(() => {
    if (currentIndex === names.length - 1) {
        return;
    }
    const interval = setInterval(() => {
        const updatedData = currentIndex + 1;
        setCurrentIndex(updatedData);
    }, 100);

    return () => clearInterval(interval);
    }, [currentIndex]);

  return (
        <Link target="_blank" href="https://github.com/tianxiaozhang1/sorting" rel="noopener noreferrer">
            <div className='w-92 h-78 md:w-190 md:h-132 lg:w-252 lg:h-120 xl:w-316 xl:h-152 bg-stone-100 rounded-3xl border-stone-200 border-4 mx-auto flex justify-center items-center cursor-pointer'
                                                                                            onMouseEnter={(e)=>setCurrentIndex(0)} onMouseLeave={(e)=>setSortShuffle(0)}>

                <div className='w-4/12 h-full flex justify-end items-center pr-1 space-x-2 mr-4 scale-50 md:scale-100'>
                    <div className='bg-mergeColour1' style={{height: 98+100-100, width: 28}}></div>

                    <div className='bg-mergeColour3' style={{height: 132+110-90, width: 28}}></div>

                    <div className='bg-mergeColour5' style={{height: 152+121-80, width: 28}}></div>

                    <div className='bg-mergeColour7' style={{height: 162+124-70, width: 28}}></div>

                    <div className='bg-mergeColour9' style={{height: 172+123-60, width: 28}}></div>
                </div>
                <div className='w-2/12 md:w-4/12 xl:-mx-22 flex justify-center text-slate-500 cursor-pointer h-full items-center space-x-1'>

                    <div>
                        <div className={`${pt_sans_narrow.className} text-4xl md:text-7xl font-bold uppercase mx-6 text-mergeColour11 -my-4 font-condensed`} >{names[currentIndex]}</div>
                    </div>

                </div>
                <div className='w-4/12 h-full flex justify-start items-center space-x-2 pl-1 ml-4 scale-50 md:scale-100'>

                    <div className='bg-mergeColour13' style={{height: 192+123-50, width: 28}}></div>

                    <div className='bg-mergeColour15' style={{height: 212+120-40, width: 28}}></div>

                    <div className='bg-mergeColour17' style={{height: 232+122-30, width: 28}}></div>

                    <div className='bg-mergeColour19' style={{height: 252+126-20, width: 28}}></div>

                    <div className='bg-mergeColour20' style={{height: 282+129-10, width: 28}}></div>
                </div>
            </div>
        </Link>
  )
}

export default Sorting


{/* <div className='w-3/8 bg-red-500 h-full flex justify-end items-center'>x</div>

<div className='w-2/8 flex justify-center text-slate-500 cursor-pointer h-full items-center'>
    <div className={`${pt_sans_narrow.className} font-semibold`} >{names[currentIndex]}</div>
</div>

<div className='w-3/8 bg-red-500 h-full flex justify-start items-center'>x</div> */}


// <div className='bg-slate-600 mx-2 rounded-3xl flex justify-between  items-end cursor-pointer' style={{height: 352, width: 636, overflow: 'hidden', paddingLeft: 12, paddingRight: 12, paddingBottom: 12}}>

// <div className='bg-mergeColour2' style={{height: 32+20, width: 23}}></div>

// <div className='bg-mergeColour3' style={{height: 42+20, width: 23}}></div>

// <div className='bg-mergeColour4' style={{height: 52+21, width: 23}}></div>

// <div className='bg-mergeColour5' style={{height: 62+24, width: 23}}></div>

// <div className='bg-mergeColour6' style={{height: 72+23, width: 23}}></div>

// <div className='bg-mergeColour7' style={{height: 82+22, width: 23}}></div>

// <div className='bg-mergeColour8' style={{height: 92+20, width: 23}}></div>

// {/* <div className='bg-mergeColour9' style={{height: 102+25, width: 23}}></div>

// <div className='bg-mergeColour10' style={{height: 112+22, width: 23}}></div>

// <div className='bg-mergeColour11' style={{height: 122+24, width: 23}}></div>

// <div className='bg-mergeColour12' style={{height: 132+25, width: 23}}></div>

// <div className='bg-mergeColour13' style={{height: 142+28, width: 23}}></div> */}

// <div className='bg-mergeColour14' style={{height: 162+21, width: 23}}></div>

// <div className='bg-mergeColour15' style={{height: 182+22, width: 23}}></div>

// <div className='bg-mergeColour16' style={{height: 192+23, width: 23}}></div>

// <div className='bg-mergeColour17' style={{height: 212+20, width: 23}}></div>

// <div className='bg-mergeColour18' style={{height: 232+22, width: 23}}></div>

// <div className='bg-mergeColour19' style={{height: 252+26, width: 23}}></div>

// <div className='bg-mergeColour20' style={{height: 282+29, width: 23}}></div>


// </div>