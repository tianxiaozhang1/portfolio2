"use client"
import React from 'react'

import { useState, useEffect } from 'react'

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

        <div onMouseEnter={(e)=>setCurrentIndex(0)} onMouseLeave={(e)=>setSortShuffle(0)}>
            {/* border-sudokuBoard4 border-4 */}
            <div className='bg-red-50 mx-2 rounded-3xl flex justify-between  items-end cursor-pointer' style={{height: 352, width: 636, overflow: 'hidden', paddingLeft: 12, paddingRight: 12, paddingBottom: 12}}>

                <div className='bg-bubbleColour2' style={{height: 32+20, width: 23}}></div>

                <div className='bg-bubbleColour3' style={{height: 42+20, width: 23}}></div>

                <div className='bg-bubbleColour4' style={{height: 52+21, width: 23}}></div>

                <div className='bg-bubbleColour5' style={{height: 62+24, width: 23}}></div>

                <div className='bg-bubbleColour6' style={{height: 72+23, width: 23}}></div>

                <div className='bg-bubbleColour7' style={{height: 82+22, width: 23}}></div>

                <div className='bg-bubbleColour8' style={{height: 92+20, width: 23}}></div>

                <div className='bg-bubbleColour9' style={{height: 102+25, width: 23}}></div>

                <div className='bg-bubbleColour10' style={{height: 112+22, width: 23}}></div>

                <div className='bg-bubbleColour11' style={{height: 122+24, width: 23}}></div>

                <div className='bg-bubbleColour12' style={{height: 132+25, width: 23}}></div>

                <div className='bg-bubbleColour13' style={{height: 142+28, width: 23}}></div>

                <div className='bg-bubbleColour14' style={{height: 162+21, width: 23}}></div>

                <div className='bg-bubbleColour15' style={{height: 182+22, width: 23}}></div>

                <div className='bg-bubbleColour16' style={{height: 192+23, width: 23}}></div>

                <div className='bg-bubbleColour17' style={{height: 212+20, width: 23}}></div>

                <div className='bg-bubbleColour18' style={{height: 232+22, width: 23}}></div>

                <div className='bg-bubbleColour19' style={{height: 252+26, width: 23}}></div>

                <div className='bg-bubbleColour20' style={{height: 282+29, width: 23}}></div>


            </div>

            <div className='flex justify-center text-slate-500 cursor-pointer' style={{paddingTop: 10, paddingBottom: 10, marginTop: -320}} >
                <div className=''style={{font: "bold 42px Aldrich, sans-serif"}}>{names[currentIndex]}</div>
            </div>
        </div>
  )
}

export default Sorting
