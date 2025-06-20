"use client";
import React from 'react';
import { useState } from 'react';

import Link from 'next/link'

const Numbers = (number) => {

    if (number === 0 || number === 10) {
        return (
            <div className='bg-mineSqColour' style={{width: 56, height: 56}}>
            </div>
        )
    }

    else if (number === 1) {
        return (
            <div className='bg-mineSqColour flex' style={{width: 56, height: 56}}>
                <div className='bg-mineColour1' style={{width: 8, height: 6, marginLeft: 26, marginTop: 9}}></div>
                <div className='bg-mineColour1' style={{width: 17, height: 8, marginLeft: 26-34-9, marginTop: 15}}></div>
                <div className='bg-mineColour1' style={{width: 11, height: 15, marginLeft: 23-34, marginTop: 23}}></div>
                <div className='bg-mineColour1' style={{width: 30, height: 8, marginLeft: 13-26-8, marginTop: 38}}></div>
            </div>
        )
    } else if (number === 2) {
        return (
            <div className='bg-mineSqColour flex' style={{width: 56, height: 56}}>
                <div className='bg-mineColour2' style={{width: 30, height: 37, marginLeft: 13, marginTop: 9}}></div>
                <div className='bg-mineSqColour' style={{width: 22, height: 6, marginLeft: -30, marginTop: 17}}></div>
                <div className='bg-mineSqColour' style={{width: 22, height: 7, marginLeft: -14, marginTop: 31}}></div>
            </div>
        )
    } else if (number === 3) {
        return (
            <div className='bg-mineSqColour flex' style={{width: 56, height: 56}}>
                <div className='bg-mineColour3' style={{width: 30, height: 37, marginLeft: 13, marginTop: 9}}></div>
                <div className='bg-mineSqColour' style={{width: 22, height: 6, marginLeft: -30, marginTop: 17}}></div>
                <div className='bg-mineSqColour' style={{width: 6, height: 8, marginLeft: -22, marginTop: 23}}></div>
                <div className='bg-mineSqColour' style={{width: 22, height: 7, marginLeft: -6, marginTop: 31}}></div>
            </div>
        )
    } else if (number === 4) {
        return (
            <div className='bg-mineSqColour flex' style={{width: 56, height: 56}}>
                <div className='bg-mineColour4 flex' style={{width: 28, height: 37, marginLeft: 14, marginTop: 9}}>
                    <div className='bg-mineSqColour' style={{width: 4, height: 14, marginLeft: 0, marginTop: 0}}></div>
                    <div className='bg-mineSqColour' style={{width: 6, height: 14, marginLeft: 8, marginTop: 0}}></div>
                    <div className='bg-mineSqColour' style={{width: 18, height: 15, marginLeft: -18, marginTop: 22}}></div>
                </div>
            </div>
        )
    } else if (number === 5) {
        return (
            <div className='bg-mineSqColour flex' style={{width: 56, height: 56}}>
                <div className='bg-mineColour5' style={{width: 30, height: 37, marginLeft: 13, marginTop: 9}}></div>
                <div className='bg-mineSqColour' style={{width: 22, height: 6, marginLeft: -22, marginTop: 17}}></div>
                <div className='bg-mineSqColour' style={{width: 22, height: 7, marginLeft: -30, marginTop: 31}}></div>
            </div>
        )
    } else if (number === "F") {
        // Flagged
        return (
            <div className='bg-mineSqShadow flex' style={{width: 56, height: 56}}>
                <div className='bg-mineSqColour flex' style={{width: 54, height: 54}}>
                    <div className='bg-mineColour3' style={{width: 6, height: 6, marginLeft: 10, marginTop: 15}}></div>
                    <div className='bg-mineColour3' style={{width: 6, height: 12, marginLeft: 0, marginTop: 12}}></div>
                    <div className='bg-mineColour3' style={{width: 12, height: 22, marginLeft: 0, marginTop: 8}}></div>
                    <div className='bg-mineSmileyBlack' style={{width: 6, height: 6, marginLeft: -6, marginTop: 30}}></div>
                    <div className='bg-mineSmileyBlack' style={{width: 20, height: 4, marginLeft: -16, marginTop: 36}}></div>
                    <div className='bg-mineSmileyBlack' style={{width: 30, height: 8, marginLeft: -25, marginTop: 40}}></div>                        
                </div>
            </div>
        )
    } 

    else if (number === 11) {
        return (
            <div className='bg-mineSqColour flex' style={{width: 56, height: 56}}>
                <div className='bg-mineColour1a' style={{width: 8, height: 6, marginLeft: 26, marginTop: 9}}></div>
                <div className='bg-mineColour1a' style={{width: 17, height: 8, marginLeft: 26-34-9, marginTop: 15}}></div>
                <div className='bg-mineColour1a' style={{width: 11, height: 15, marginLeft: 23-34, marginTop: 23}}></div>
                <div className='bg-mineColour1a' style={{width: 30, height: 8, marginLeft: 13-26-8, marginTop: 38}}></div>
            </div>
        )
    } else if (number === 12) {
        return (
            <div className='bg-mineSqColour flex' style={{width: 56, height: 56}}>
                <div className='bg-mineColour2a' style={{width: 30, height: 37, marginLeft: 13, marginTop: 9}}></div>
                <div className='bg-mineSqColour' style={{width: 22, height: 6, marginLeft: -30, marginTop: 17}}></div>
                <div className='bg-mineSqColour' style={{width: 22, height: 7, marginLeft: -14, marginTop: 31}}></div>
            </div>
        )
    } else if (number === 13) {
        return (
            <div className='bg-mineSqColour flex' style={{width: 56, height: 56}}>
                <div className='bg-mineColour3a' style={{width: 30, height: 37, marginLeft: 13, marginTop: 9}}></div>
                <div className='bg-mineSqColour' style={{width: 22, height: 6, marginLeft: -30, marginTop: 17}}></div>
                <div className='bg-mineSqColour' style={{width: 6, height: 8, marginLeft: -22, marginTop: 23}}></div>
                <div className='bg-mineSqColour' style={{width: 22, height: 7, marginLeft: -6, marginTop: 31}}></div>
            </div>
        )
    } else if (number === 14) {
        return (
            <div className='bg-mineSqColour flex' style={{width: 56, height: 56}}>
                <div className='bg-mineColour4a flex' style={{width: 28, height: 37, marginLeft: 14, marginTop: 9}}>
                    <div className='bg-mineSqColour' style={{width: 4, height: 14, marginLeft: 0, marginTop: 0}}></div>
                    <div className='bg-mineSqColour' style={{width: 6, height: 14, marginLeft: 8, marginTop: 0}}></div>
                    <div className='bg-mineSqColour' style={{width: 18, height: 15, marginLeft: -18, marginTop: 22}}></div>
                </div>
            </div>
        )
    } else if (number === 15) {
        return (
            <div className='bg-mineSqColour flex' style={{width: 56, height: 56}}>
                <div className='bg-mineColour5a' style={{width: 30, height: 37, marginLeft: 13, marginTop: 9}}></div>
                <div className='bg-mineSqColour' style={{width: 22, height: 6, marginLeft: -22, marginTop: 17}}></div>
                <div className='bg-mineSqColour' style={{width: 22, height: 7, marginLeft: -30, marginTop: 31}}></div>
            </div>
        )
    } else if (number === "FF") {
        // Flagged
        return (
            <div className='bg-mineSqShadow flex' style={{width: 56, height: 56}}>
                <div className='bg-mineSqColour flex' style={{width: 54, height: 54}}>
                    <div className='bg-mineColour3a' style={{width: 6, height: 6, marginLeft: 10, marginTop: 15}}></div>
                    <div className='bg-mineColour3a' style={{width: 6, height: 12, marginLeft: 0, marginTop: 12}}></div>
                    <div className='bg-mineColour3a' style={{width: 12, height: 22, marginLeft: 0, marginTop: 8}}></div>
                    <div className='bg-mineSmileyBlack' style={{width: 6, height: 6, marginLeft: -6, marginTop: 30}}></div>
                    <div className='bg-mineSmileyBlack' style={{width: 20, height: 4, marginLeft: -16, marginTop: 36}}></div>
                    <div className='bg-mineSmileyBlack' style={{width: 30, height: 8, marginLeft: -25, marginTop: 40}}></div>                        
                </div>
            </div>
        )
    }
    
    else if (number === "U") {
        // Unflagged covered square
        return (
            <div className='bg-mineSqShadow flex' style={{width: 56, height: 56}}>
                <div className='bg-mineSqColour flex' style={{width: 54, height: 54}}></div>
            </div>
        )
    } 

    else if (number === "S1") {
        return (
            <div className='bg-mineSqColour flex' style={{width: 56, height: 56}}>
                <div className='bg-mineColour10' style={{width: 30, height: 37, marginLeft: 13, marginTop: 9}}>
                    <div className='bg-mineSqColour' style={{width: 8, height: 8, marginLeft: 0, marginTop: 0}}></div>
                    <div className='bg-mineSqColour' style={{width: 8, height: 8, marginLeft: 22, marginTop: 21}}></div>
                </div>
                <div className='bg-mineSqColour' style={{width: 22, height: 6, marginLeft: -22, marginTop: 17}}></div>
                <div className='bg-mineSqColour' style={{width: 22, height: 7, marginLeft: -30, marginTop: 31}}></div>
            </div>
        )
    }

    else if (number === "E1") {
        return (
            <div className='bg-mineSqColour flex' style={{width: 56, height: 56}}>
                <div className='bg-mineColour10' style={{width: 30, height: 37, marginLeft: 13, marginTop: 9}}></div>
                <div className='bg-mineSqColour' style={{width: 22, height: 6, marginLeft: -22, marginTop: 17}}></div>
                <div className='bg-mineSqColour' style={{width: 6, height: 8, marginLeft: -6, marginTop: 23}}></div>
                <div className='bg-mineSqColour' style={{width: 22, height: 7, marginLeft: -22, marginTop: 31}}></div>
            </div>
        )
    }

    else if (number === "L1") {
        return (
            <div className='bg-mineSqColour flex' style={{width: 56, height: 56}}>
                <div className='bg-mineColour10' style={{width: 30, height: 37, marginLeft: 13, marginTop: 9}}></div>
                <div className='bg-mineSqColour' style={{width: 22, height: 29, marginLeft: -22, marginTop: 9}}></div>
            </div>
        )
    }

    else if (number === "F1") {
        return (
            <div className='bg-mineSqColour flex' style={{width: 56, height: 56}}>
                <div className='bg-mineColour10' style={{width: 30, height: 37, marginLeft: 13, marginTop: 9}}></div>
                <div className='bg-mineSqColour' style={{width: 22, height: 6, marginLeft: -22, marginTop: 17}}></div>
                <div className='bg-mineSqColour' style={{width: 6, height: 8, marginLeft: -6, marginTop: 23}}></div>
                <div className='bg-mineSqColour' style={{width: 22, height: 15, marginLeft: -22, marginTop: 31}}></div>
            </div>
        )
    }

    else if (number === "S2") {
        return (
            <div className='bg-mineSqColour flex' style={{width: 56, height: 56}}>
                <div className='bg-mineColour1' style={{width: 30, height: 37, marginLeft: 13, marginTop: 9}}>
                    <div className='bg-mineSqColour' style={{width: 8, height: 8, marginLeft: 0, marginTop: 0}}></div>
                    <div className='bg-mineSqColour' style={{width: 8, height: 8, marginLeft: 22, marginTop: 21}}></div>
                </div>
                <div className='bg-mineSqColour' style={{width: 22, height: 6, marginLeft: -22, marginTop: 17}}></div>
                <div className='bg-mineSqColour' style={{width: 22, height: 7, marginLeft: -30, marginTop: 31}}></div>
            </div>
        )
    }

    else if (number === "O") {
        return (
            <div className='bg-mineSqColour flex' style={{width: 56, height: 56}}>
                <div className='bg-mineColour1' style={{width: 30, height: 37, marginLeft: 13, marginTop: 9}}>
                    <div className='flex' style={{width: 30, height: 8}}>
                        <div className='bg-mineSqColour' style={{width: 8, height: 8}}></div>
                        <div className='bg-mineSqColour' style={{width: 8, height: 8, marginLeft: 14}}></div>
                    </div>

                    <div className='flex justify-center' style={{width: 30, height: 21}}>
                        <div className='bg-mineSqColour' style={{width: 12, height: 21}}></div>
                    </div>

                    <div className='flex' style={{width: 30, height: 8}}>
                        <div className='bg-mineSqColour' style={{width: 8, height: 8}}></div>
                        <div className='bg-mineSqColour' style={{width: 8, height: 8, marginLeft: 14}}></div>
                    </div>
                </div>
            </div>
        )
    }

    else if (number === "L2") {
        return (
            <div className='bg-mineSqColour flex' style={{width: 56, height: 56}}>
                <div className='bg-mineColour1' style={{width: 30, height: 37, marginLeft: 13, marginTop: 9}}></div>
                <div className='bg-mineSqColour' style={{width: 22, height: 29, marginLeft: -22, marginTop: 9}}></div>
            </div>
        )
    }

    else if (number === "V") {
        return (
            <div className='bg-mineSqColour flex justify-center items-center' style={{width: 56, height: 56}}>
                <div>
                    <div className='bg-mineColour1 ' style={{width: 28, height: 29, marginLeft: 0, marginTop: 0}}>
                        <div className='bg-mineSqColour' style={{width: 12, height: 29, marginLeft: 8, marginTop: 0}}></div>
                    </div>

                    <div className='bg-mineColour1' style={{width: 12, height: 8, marginLeft: 8, marginTop: 0}}></div>
                </div>
            </div>
        )
    }

    else if (number === "N2") {
        return (
            <div className='bg-mineSqColour flex' style={{width: 56, height: 56}}>
                <div className='bg-mineColour1 flex' style={{width: 8, height: 37, marginLeft: 13, marginTop: 9}}></div>
                <div className='bg-mineColour1 flex' style={{width: 7, height: 8, marginLeft: 0, marginTop: 18}}></div>
                <div className='bg-mineColour1 flex' style={{width: 6, height: 8, marginLeft: 0, marginTop: 23}}></div>
                <div className='bg-mineColour1 flex' style={{width: 8, height: 37, marginLeft: 0, marginTop: 9}}></div>
            </div>
        )
    }

    else if (number === "G") {
        return (
            <div className='bg-mineSqColour flex justify-center items-center' style={{width: 56, height: 56}}>
                <div className='bg-mineColour1' style={{width: 30, height: 37}}>
                    <div className='bg-mineSqColour' style={{width: 22, height: 6, marginLeft: 8, marginTop: 8}}></div>
                    <div className='bg-mineSqColour' style={{width: 8, height: 8, marginLeft: 8}}></div>
                    <div className='bg-mineSqColour' style={{width: 14, height: 7, marginLeft: 8}}></div>
                </div>
            </div>
        )
    }

    else if (number === "M") {
        return (
            <div className='bg-mineSqColour flex' style={{width: 56, height: 56}}>
                <div className='bg-mineColour2 flex' style={{width: 8, height: 37, marginLeft: 12, marginTop: 9}}></div>
                <div className='bg-mineColour2 flex' style={{width: 5, height: 8, marginLeft: 0, marginTop: 18}}></div>
                <div className='bg-mineColour2 flex' style={{width: 6, height: 8, marginLeft: 0, marginTop: 23}}></div>
                <div className='bg-mineColour2 flex' style={{width: 5, height: 8, marginLeft: 0, marginTop: 18}}></div>
                <div className='bg-mineColour2 flex' style={{width: 8, height: 37, marginLeft: 0, marginTop: 9}}></div>
            </div>
        )
    }

    else if (number === "I") {
        return (
            <div className='bg-mineSqColour flex' style={{width: 56, height: 56}}>
                <div className='bg-mineColour1' style={{width: 8, height: 37, marginLeft: 26, marginTop: 9}}></div>
            </div>
        )
    } 

    else if (number === "N") {
        return (
            <div className='bg-mineSqColour flex' style={{width: 56, height: 56}}>
                <div className='bg-mineColour2 flex' style={{width: 8, height: 37, marginLeft: 13, marginTop: 9}}></div>
                <div className='bg-mineColour2 flex' style={{width: 7, height: 8, marginLeft: 0, marginTop: 18}}></div>
                <div className='bg-mineColour2 flex' style={{width: 6, height: 8, marginLeft: 0, marginTop: 23}}></div>
                <div className='bg-mineColour2 flex' style={{width: 8, height: 37, marginLeft: 0, marginTop: 9}}></div>
            </div>
        )
    }

    else if (number === "E") {
        return (
            <div className='bg-mineSqColour flex' style={{width: 56, height: 56}}>
                <div className='bg-mineColour2' style={{width: 30, height: 37, marginLeft: 13, marginTop: 9}}></div>
                <div className='bg-mineSqColour' style={{width: 22, height: 6, marginLeft: -22, marginTop: 17}}></div>
                <div className='bg-mineSqColour' style={{width: 6, height: 8, marginLeft: -6, marginTop: 23}}></div>
                <div className='bg-mineSqColour' style={{width: 22, height: 7, marginLeft: -22, marginTop: 31}}></div>
            </div>
        )
    }

    else if (number === "S") {
        return (
            <div className='bg-mineSqColour flex' style={{width: 56, height: 56}}>
                <div className='bg-mineColour2' style={{width: 30, height: 37, marginLeft: 13, marginTop: 9}}>
                    <div className='bg-mineSqColour' style={{width: 8, height: 8, marginLeft: 0, marginTop: 0}}></div>
                    <div className='bg-mineSqColour' style={{width: 8, height: 8, marginLeft: 22, marginTop: 21}}></div>
                </div>
                <div className='bg-mineSqColour' style={{width: 22, height: 6, marginLeft: -22, marginTop: 17}}></div>
                <div className='bg-mineSqColour' style={{width: 22, height: 7, marginLeft: -30, marginTop: 31}}></div>
            </div>
        )
    }

    else if (number === "W") {
        return (
            <div className='bg-mineSqColour flex' style={{width: 56, height: 56}}>
                <div className='bg-mineColour2' style={{width: 8, height: 29, marginLeft: 12, marginTop: 9}}></div>
                <div className='bg-mineColour2' style={{width: 7, height: 8, marginLeft: -2, marginTop: 38}}></div>
                <div className='bg-mineColour2' style={{width: 8, height: 8, marginLeft: -1, marginTop: 31}}></div>
                <div className='bg-mineColour2' style={{width: 7, height: 8, marginLeft: -1, marginTop: 38}}></div>
                <div className='bg-mineColour2' style={{width: 8, height: 29, marginLeft: -2, marginTop: 9}}></div>
            </div>
        )
    }

    else if (number === "P") {
        return (
            <div className='bg-mineSqColour flex' style={{width: 56, height: 56}}>
                <div className='bg-mineColour2' style={{width: 30, height: 37, marginLeft: 13, marginTop: 9}}></div>
                <div className='bg-mineSqColour' style={{width: 14, height: 6, marginLeft: -22, marginTop: 17}}></div>
                <div className='bg-mineSqColour' style={{width: 22, height: 15, marginLeft: -14, marginTop: 31}}></div>
            </div>
        )
    }

    else if (number === "R") {
        return (
            <div className='bg-mineSqColour flex' style={{width: 56, height: 56}}>
                <div className='bg-mineColour2' style={{width: 30, height: 37, marginLeft: 13, marginTop: 9}}>
                    <div className='bg-mineSqColour' style={{width: 8, height: 7, marginLeft: 22, marginTop: 0}}></div>
                    <div className='bg-mineSqColour' style={{width: 8, height: 7, marginLeft: 22, marginTop: 8}}></div>
                </div>
                
                <div className='bg-mineSqColour' style={{width: 14, height: 6, marginLeft: -22, marginTop: 17}}></div>
                <div className='bg-mineSqColour' style={{width: 14, height: 15, marginLeft: -14, marginTop: 31}}></div>
            </div>
        )
    }

    else if (number === "AR") {
        return (
            <div className='bg-mineSqColour text-mineColour1 flex justify-center items-center' style={{width: 56, height: 56}}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-10 -rotate-45">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </div>
        )
    }

    else if (number === "F2") {
        // Flagged
        return (
            <div className='bg-mineSqShadow flex' style={{width: 56, height: 56}}>
                <div className='bg-mineSqColour flex' style={{width: 54, height: 54}}>
                    <div className='bg-mineSqShadow' style={{width: 6, height: 6, marginLeft: 10, marginTop: 15}}></div>
                    <div className='bg-mineSqShadow' style={{width: 6, height: 12, marginLeft: 0, marginTop: 12}}></div>
                    <div className='bg-mineSqShadow' style={{width: 12, height: 22, marginLeft: 0, marginTop: 8}}></div>
                    <div className='bg-mineSqShadow' style={{width: 6, height: 6, marginLeft: -6, marginTop: 30}}></div>
                    <div className='bg-mineSqShadow' style={{width: 20, height: 4, marginLeft: -16, marginTop: 36}}></div>
                    <div className='bg-mineSqShadow' style={{width: 30, height: 8, marginLeft: -25, marginTop: 40}}></div>                        
                </div>
            </div>
        )
    } 

    else if (number === "1a") {
        return (
            <div className='bg-mineSqColour flex' style={{width: 56, height: 56}}>
                <div className='bg-mineSqShadow' style={{width: 8, height: 6, marginLeft: 26, marginTop: 9}}></div>
                <div className='bg-mineSqShadow' style={{width: 17, height: 8, marginLeft: 26-34-9, marginTop: 15}}></div>
                <div className='bg-mineSqShadow' style={{width: 11, height: 15, marginLeft: 23-34, marginTop: 23}}></div>
                <div className='bg-mineSqShadow' style={{width: 30, height: 8, marginLeft: 13-26-8, marginTop: 38}}></div>
            </div>
        )
    } 

}

let initialGrid = [

    [[0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1]],
    [[1, -3], [1, -4], [1, -5], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1]],
    [["M", 1], ["I", 2],  ["N", 1], ["E", 1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1]],
    [[1, -6], [1, -7], [1, -8], [0, -2], ["S", 1], ["W", 1], ["E", 1], ["E", 1], ["P", 1], ["E", 1], ["R", 1]],
    [[0, -2], [0, -2],  [0, -2], [0, -2], [0, -2], [0, -2], [0, -2], [0, -2], [0, -2], [0, -2], [0, -2]],
    [[0, -2], [0, -2],  [0, -2], [0, -2], [0, -2], [0, -2], [0, -2], [0, -2], [0, -2], [0, -2], [0, -2]],
    [[0, -2], [0, -2],  [0, -2], [0, -2], [0, -2], [0, -2], [0, -2], [0, -2], [0, -2], [0, -2], ["AR", 1]]
];

let XLGrid = [
    [[0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [1, -3], [1, -4], [1, -5], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1]],
    [[0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1]], 
    [[0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1]], 
    [[0, -1], [0, -1], [0, -1], [0, -1], [0, -1], ["S1", 1], ["E1", 1], ["L1", 1], ["F1", 1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1]], 
    [[0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], ["S2", 1], ["O", 1], ["L2", 1], ["V", 1], ["FF", 1], ["N2", 1], ["G", 1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1]],
    [[0, -1], [0, -1], [0, -1], [0, -1], [0, -1], ["M", 1], ["I", 2],  ["N", 1], ["E", 1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1]],
    [[0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [1, -6], [1, -7], [1, -8], [0, -2], ["S", 1], ["W", 1], ["E", 1], ["E", 1], ["P", 1], ["E", 1], ["R", 1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1]],
    [[0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -2], [0, -2],  [0, -2], [0, -2], [0, -2], [0, -2], [0, -2], [0, -2], [0, -2], [0, -2], [0, -2], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1]],
    [[0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [1, -3], [1, -4], [1, -5], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1]],
    [[0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -2], [0, -2],  [0, -2], [0, -2], [0, -2], [0, -2], [0, -2], [0, -2], [0, -2], [0, -2], [0, -2], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1]],
];

let LGGrid = [
    [[0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1]], 
    [[0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1]], 
    [[0, -1], [0, -1], [0, -1], ["S1", 1], ["E1", 1], ["L1", 1], ["F1", 1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1]], 
    [[0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], ["S2", 1], ["O", 1], ["L2", 1], ["V", 1], ["FF", 1], ["N2", 1], ["G", 1], [0, -1], [0, -1], [0, -1]],
    [[0, -1], [0, -1], [0, -1], ["M", 1], ["I", 2],  ["N", 1], ["E", 1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1]],
    [[0, -1], [0, -1], [0, -1], [1, -6], [1, -7], [1, -8], [0, -2], ["S", 1], ["W", 1], ["E", 1], ["E", 1], ["P", 1], ["E", 1], ["R", 1], [0, -1], [0, -1], [0, -1]],
    [[0, -1], [0, -1], [0, -1], [0, -2], [0, -2],  [0, -2], [0, -2], [0, -2], [0, -2], [0, -2], [0, -2], [0, -2], [0, -2], [0, -2], [0, -1], [0, -1], [0, -1]],
    [[0, -1], [0, -1], [0, -1], [1, -3], [1, -4], [1, -5], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1]],
];

let MDGrid = [
    [[0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1]], 
    [[0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1]], 
    [[0, -1], ["S1", 1], ["E1", 1], ["L1", 1], ["F1", 1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1]], 
    [[0, -1], [0, -1], [0, -1], [0, -1], [0, -1], ["S2", 1], ["O", 1], ["L2", 1], ["V", 1], ["FF", 1], ["N2", 1], ["G", 1], [0, -1]],
    [[0, -1], ["M", 1], ["I", 2],  ["N", 1], ["E", 1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1]],
    [[0, -1], [1, -6], [1, -7], [1, -8], [0, -2], ["S", 1], ["W", 1], ["E", 1], ["E", 1], ["P", 1], ["E", 1], ["R", 1], [0, -1]],
    [[0, -1], [0, -2], [0, -2],  [0, -2], [0, -2], [0, -2], [0, -2], [0, -2], [0, -2], [0, -2], [0, -2], [0, -2], [0, -1]],
    [[0, -1], [1, -3], [1, -4], [1, -5], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1]],
];

let smallInitialGrid = [
    [[1, -4], [1, -5], [0, -1], [0, -1], [0, -1], [0, -1]],
    [ [0, -1], ["M", 1], ["I", 2],  ["N", 1], ["E", 1], [0, -1]],
    [[1, -6], ["S", 1], ["W", 1], ["E", 1], ["E", 1],  [0, -1]],
    [[0, -2], ["P", 1], ["E", 1], ["R", 1], [0, -2], [0, -2]],
    [[0, -2], [0, -2], [0, -2], [0, -2], [0, -2], [0, -2]],
];

// let bigGrid = [

//     [[0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [1, -3], [1, -4], [1, -5], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1]],
//     [[0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1]], 
//     [[0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1]], 
//     [[0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], ["S1", 1], ["E1", 1], ["L1", 1], ["F1", 1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1]], 
//     [[0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], ["S2", 1], ["O", 1], ["L2", 1], ["V", 1], ["FF", 1], ["N2", 1], ["G", 1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1]],
//     // [[0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1]], 
//     [[0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], ["M", 1], ["I", 2],  ["N", 1], ["E", 1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1]],
//     [[0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [1, -6], [1, -7], [1, -8], [0, -2], ["S", 1], ["W", 1], ["E", 1], ["E", 1], ["P", 1], ["E", 1], ["R", 1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1]],
//     [[0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -2], [0, -2],  [0, -2], [0, -2], [0, -2], [0, -2], [0, -2], [0, -2], [0, -2], [0, -2], [0, -2], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1]],
//     [[0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [1, -3], [1, -4], [1, -5], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1]],
//     [[0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -2], [0, -2],  [0, -2], [0, -2], [0, -2], [0, -2], [0, -2], [0, -2], [0, -2], [0, -2], [0, -2], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1]],
//     // [[0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -2], [0, -2],  [0, -2], [0, -2], [0, -2], [0, -2], [0, -2], [0, -2], [0, -2], [0, -2], ["AR", 1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1]],
//     // [[0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1]]
// ];

// let smallInitialGrid = [
//     [[0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1]],
//     [[0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1]],
//     [[1, -3], [1, -4], [1, -5], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1]],
//     [[0, -1], [0, -1], ["M", 1], ["I", 2],  ["N", 1], ["E", 1], [0, -1], [0, -1], [0, -1], [0, -1]],
//     [[1, -6], [1, -6], ["S", 1], ["W", 1], ["E", 1], ["E", 1],  [0, -1], [0, -2], [0, -2], [0, -2], ],
//     [[0, -2], [0, -2], ["P", 1], ["E", 1], ["R", 1], [0, -2], [0, -2], [0, -2], [0, -2], [0, -1]],
//     [[0, -2], [0, -2],  [0, -2], [0, -2], [0, -2], [0, -2], [0, -2], [0, -2], [0, -2], [0, -1]],
//     [[0, -1], [0, -1],  [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1]],
// ];

// let initialGrid = [
//     [[0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1]],
//     [[0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1]],
//     [[1, -3], [1, -4], [1, -5], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1]],
//     [["M", 1], ["I", 2],  ["N", 1], ["E", 1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1]],
//     [[1, -6], [1, -7], [1, -8], [0, -2], ["S", 1], ["W", 1], ["E", 1], ["E", 1], ["P", 1], ["E", 1], ["R", 1]],
//     [[0, -2], [0, -2],  [0, -2], [0, -2], [0, -2], [0, -2], [0, -2], [0, -2], [0, -2], [0, -2], [0, -2]],
//     [[0, -2], [0, -2],  [0, -2], [0, -2], [0, -2], [0, -2], [0, -2], [0, -2], [0, -2], [0, -2], [0, -2]],
//     [[0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1]]
// ];

const Minesweeper = () => {
    const [miniXLGrid, setMiniXLGrid] = useState(
        XLGrid
    );

    const [miniLGGrid, setMiniLGGrid] = useState(
        LGGrid
    );

    const [miniMDGrid, setMiniMDGrid] = useState(
        MDGrid
    );

function showOneSquare(singleBlock) {
    if (singleBlock[1] < 1) {      
        return Numbers("U")
    } else if (singleBlock[1] === 1) {
        if (Number.isInteger(singleBlock[0])) {
            return Numbers(singleBlock[0])
        } else {
            return Numbers(singleBlock[0])
        }
    } else if (singleBlock[1] === 2) {
        return Numbers("F")
    }
}

    // function openUpSquare(singleBlock) {

    //     const updatedGrid = miniGrid.map(miniRow => {
    //         return (
    //             miniRow.map(miniSquare => {

    //                 if (singleBlock[1] === 1) {
    //                     return miniSquare;
    //                 } 
    //                 else if (singleBlock[1] === -1) {
    //                     if (miniSquare[1] === -1) {
    //                         return [0, 1]
    //                     } 
    //                     if (miniSquare[1] === -3 || miniSquare[1] === -4 || miniSquare[1] === -5) {
    //                         return [1, 1]
    //                     }
    //                     else {
    //                         return miniSquare;
    //                     }
    //                 } 
    //                 else if (singleBlock[1] === -2) {
    //                     if (miniSquare[1] === -2) {
    //                         return [0, 1]
    //                     } 
    //                     if (miniSquare[1] === -6 || miniSquare[1] === -7 || miniSquare[1] === -8) {
    //                         return [1, 1]
    //                     }
    //                     else {
    //                         return miniSquare;
    //                     }
    //                 } 
    //                 else if (singleBlock[1] < -2) {
    //                     if (miniSquare[1] === singleBlock[1]) {
    //                         return [1, 1]
    //                     }
    //                     else {
    //                         return miniSquare;
    //                     }
    //                 } 
    //             })
    //         )

    //     })

    //     setMiniGrid(updatedGrid);

    // }
    
    return (

        <div>
            
            {/* EXTRA LARGE */}
            <Link target="_blank" href="https://minesweeper-pi-azure.vercel.app/" rel="noopener noreferrer">                        
                <div className='hidden xl:flex xl:w-316 xl:h-152 overflow-hidden justify-center items-center rounded-3xl'>
                    <div className='bg-mineBoardColor py-5 px-5 flex justify-center items-center cursor-pointer rounded-3xl'>
                        <div className='bg-mineBoardColor px-0 overflow-hidden'>
                            {miniXLGrid.map((singleRow, i) => {
                                return (
                                    <div className='flex' key={i} >
                                        {singleRow.map((singleBlock, j) => {
                                            return <div className='ml-0.5 mt-0.5' key={j}>
                                                    {showOneSquare(singleBlock)}
                                                    </div>
                                        })}
                                    </div> 
                                )
                            })}  
                        </div>
                    </div>
                </div>
            </Link>

            {/* LARGE */}
            <Link target="_blank" href="https://minesweeper-pi-azure.vercel.app/" rel="noopener noreferrer">                        
                <div className='hidden lg:flex lg:w-252 lg:h-120 xl:hidden overflow-hidden justify-center items-center rounded-3xl'>
                    <div className='bg-mineBoardColor py-5 px-5 flex justify-center items-center cursor-pointer rounded-3xl'>
                        <div className='bg-mineBoardColor px-0 overflow-hidden'>
                            {miniLGGrid.map((singleRow, i) => {
                                return (
                                    <div className='flex' key={i} >
                                        {singleRow.map((singleBlock, j) => {
                                            return <div className='ml-0.5 mt-0.5' key={j}>
                                                    {showOneSquare(singleBlock)}
                                                    </div>
                                        })}
                                    </div> 
                                )
                            })}  
                        </div>
                    </div>
                </div>
            </Link>

            {/* MEDIUM */}
            <Link target="_blank" href="https://minesweeper-pi-azure.vercel.app/" rel="noopener noreferrer">                        
                <div className='hidden md:flex md:w-190 md:h-132 lg:hidden overflow-hidden justify-center items-center rounded-3xl'>
                    <div className='bg-mineBoardColor py-5 px-5 flex justify-center items-center cursor-pointer rounded-3xl'>
                        <div className='bg-mineBoardColor px-0 overflow-hidden scale-95'>
                            {miniMDGrid.map((singleRow, i) => {
                                return (
                                    <div className='flex' key={i} >
                                        {singleRow.map((singleBlock, j) => {
                                            return <div className='ml-0.5 mt-0.5' key={j}>
                                                    {showOneSquare(singleBlock)}
                                                    </div>
                                        })}
                                    </div> 
                                )
                            })}  
                        </div>
                    </div>
                </div>
            </Link>

            {/* SMALL */}
            <Link target="_blank" href="https://github.com/tianxiaozhang1/minesweeper" rel="noopener noreferrer">                        
                <div className='w-92 h-78 md:hidden overflow-hidden justify-center items-center rounded-3xl'>
                    <div className='bg-mineBoardColor py-2 px-2 flex justify-center items-center cursor-pointer rounded-3xl'>
                        <div className='bg-mineBoardColor px-0 overflow-hidden scale-95'>
                            {smallInitialGrid.map((singleRow, i) => {
                                return (
                                    <div className='flex' key={i} >
                                        {singleRow.map((singleBlock, j) => {
                                            return <div className='ml-0.5 mt-0.5' key={j}>
                                                    {showOneSquare(singleBlock)}
                                                    </div>
                                        })}
                                    </div> 
                                )
                            })}  
                        </div>
                    </div>
                </div>
            </Link>
            {/* </div> */}

            {/* MEDIUM AND LARGER */}
            {/* xl:hidden */}
            {/* <div className='hidden md:flex'>
                <div className='bg-white flex justify-center items-center border-slate-200 border-2 rounded-3xl' style={{height: 408, width: 640, overflow: 'hidden'}}>
                    <div className=' flex items-center -mt-2'>
                        <div className='bg-mineBoardColor pt-2' style={{height: 418, width: 654, marginTop: 0}}>
                            {miniGrid.map((singleRow, i) => {
                                return (
                                    <div className='ml-2 flex' key={i} >
                                        {singleRow.map((singleBlock, j) => {
                                            return <div className='ml-0.5 mt-0.5 cursor-pointer' key={j}>
                                                    {showOneSquare(singleBlock)}
                                                    </div>
                                        })}
                                    </div> 
                                )
                            })}         
                        </div>
                    </div>
                </div>
            </div> */}
            {/* SMALL */}
            {/* <div className='md:hidden bg-white flex justify-center items-center border-slate-200 border-2 rounded-3xl' style={{height: 372, width: 372, overflow: 'hidden'}}>
                <div>
                    <div className='bg-mineBoardColor pt-2' style={{height: 400, width: 400, marginTop: -134, marginLeft: -80}}>
                        {smallInitialGrid.map(singleRow => {
                            return (
                                <div className='ml-2 flex'>
                                    {singleRow.map(singleBlock => {
                                        return <div className='ml-0.5 mt-0.5 cursor-pointer'>
                                                {showOneSquare(singleBlock)}
                                                </div>
                                    })}
                                </div> 
                            )
                        })}         
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Minesweeper
