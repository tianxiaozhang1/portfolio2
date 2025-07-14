"use client";
import React from 'react';
import { useState, useEffect, useRef } from 'react';

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

// Original grid definitions
const originalXLGrid = [
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

const originalLGGrid = [
    [[0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1]], 
    [[0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1]], 
    [[0, -1], [0, -1], [0, -1], ["S1", 1], ["E1", 1], ["L1", 1], ["F1", 1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1]], 
    [[0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], ["S2", 1], ["O", 1], ["L2", 1], ["V", 1], ["FF", 1], ["N2", 1], ["G", 1], [0, -1], [0, -1], [0, -1]],
    [[0, -1], [0, -1], [0, -1], ["M", 1], ["I", 2],  ["N", 1], ["E", 1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1]],
    [[0, -1], [0, -1], [0, -1], [1, -6], [1, -7], [1, -8], [0, -2], ["S", 1], ["W", 1], ["E", 1], ["E", 1], ["P", 1], ["E", 1], ["R", 1], [0, -1], [0, -1], [0, -1]],
    [[0, -1], [0, -1], [0, -1], [0, -2], [0, -2],  [0, -2], [0, -2], [0, -2], [0, -2], [0, -2], [0, -2], [0, -2], [0, -2], [0, -2], [0, -1], [0, -1], [0, -1]],
    [[0, -1], [0, -1], [0, -1], [1, -3], [1, -4], [1, -5], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1]],
];

const originalMDGrid = [
    [[0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1]], 
    [[0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1]], 
    [[0, -1], ["S1", 1], ["E1", 1], ["L1", 1], ["F1", 1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1]], 
    [[0, -1], [0, -1], [0, -1], [0, -1], [0, -1], ["S2", 1], ["O", 1], ["L2", 1], ["V", 1], ["FF", 1], ["N2", 1], ["G", 1], [0, -1]],
    [[0, -1], ["M", 1], ["I", 2],  ["N", 1], ["E", 1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1]],
    [[0, -1], [1, -6], [1, -7], [1, -8], [0, -2], ["S", 1], ["W", 1], ["E", 1], ["E", 1], ["P", 1], ["E", 1], ["R", 1], [0, -1]],
    [[0, -1], [0, -2], [0, -2],  [0, -2], [0, -2], [0, -2], [0, -2], [0, -2], [0, -2], [0, -2], [0, -2], [0, -2], [0, -1]],
    [[0, -1], [1, -3], [1, -4], [1, -5], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1]],
];

const originalSmallInitialGrid = [
    [[1, -4], [1, -5], [0, -1], [0, -1], [0, -1], [0, -1]],
    [ [0, -1], ["M", 1], ["I", 2],  ["N", 1], ["E", 1], [0, -1]],
    [[1, -6], ["S", 1], ["W", 1], ["E", 1], ["E", 1],  [0, -1]],
    [[0, -2], ["P", 1], ["E", 1], ["R", 1], [0, -2], [0, -2]],
    [[0, -2], [0, -2], [0, -2], [0, -2], [0, -2], [0, -2]],
];

// Helper to deep copy a grid
const deepCopyGrid = (grid) => JSON.parse(JSON.stringify(grid));

// Function to replace characters with 0 for initial animation state
const createInitialAnimatedGrid = (grid, charactersToReplace) => {
    const newGrid = deepCopyGrid(grid);
    charactersToReplace.forEach(item => {
        newGrid[item.row][item.col] = [0, 1]; // Set to 0, but keep status as 1 for rendering
    });
    return newGrid;
};

// Character definitions for animation
const XLCharactersToAnimate = [
    { row: 3, col: 5, char: "S1" }, { row: 3, col: 6, char: "E1" }, { row: 3, col: 7, char: "L1" }, { row: 3, col: 8, char: "F1" },
    { row: 4, col: 9, char: "S2" }, { row: 4, col: 10, char: "O" }, { row: 4, col: 11, char: "L2" }, { row: 4, col: 12, char: "V" },
    { row: 4, col: 13, char: "FF" }, { row: 4, col: 14, char: "N2" }, { row: 4, col: 15, char: "G" }
];

const LGCharactersToAnimate = [
    { row: 2, col: 3, char: "S1" }, { row: 2, col: 4, char: "E1" }, { row: 2, col: 5, char: "L1" }, { row: 2, col: 6, char: "F1" },
    { row: 3, col: 7, char: "S2" }, { row: 3, col: 8, char: "O" }, { row: 3, col: 9, char: "L2" }, { row: 3, col: 10, char: "V" },
    { row: 3, col: 11, char: "FF" }, { row: 3, col: 12, char: "N2" }, { row: 3, col: 13, char: "G" }
];

const MDCharactersToAnimate = [
    { row: 2, col: 1, char: "S1" }, { row: 2, col: 2, char: "E1" }, { row: 2, col: 3, char: "L1" }, { row: 2, col: 4, char: "F1" },
    { row: 3, col: 5, char: "S2" }, { row: 3, col: 6, char: "O" }, { row: 3, col: 7, char: "L2" }, { row: 3, col: 8, char: "V" },
    { row: 3, col: 9, char: "FF" }, { row: 3, col: 10, char: "N2" }, { row: 3, col: 11, char: "G" }
];

const SMCharactersToAnimate = [
    { row: 1, col: 1, char: "M" }, { row: 1, col: 2, char: "F" }, { row: 1, col: 3, char: "N" }, { row: 1, col: 4, char: "E" },
    { row: 2, col: 1, char: "S" }, { row: 2, col: 2, char: "W" }, { row: 2, col: 3, char: "E" }, { row: 2, col: 4, char: "E" },
    { row: 3, col: 1, char: "P" }, { row: 3, col: 2, char: "E" }, { row: 3, col: 3, char: "R" }
];


const Minesweeper = () => {
    // Initial states for animated grids (all non-numeric characters start as 0)
    const [animatedXLGrid, setAnimatedXLGrid] = useState(() => createInitialAnimatedGrid(originalXLGrid, XLCharactersToAnimate));
    const [animatedLGGrid, setAnimatedLGGrid] = useState(() => createInitialAnimatedGrid(originalLGGrid, LGCharactersToAnimate));
    const [animatedMDGrid, setAnimatedMDGrid] = useState(() => createInitialAnimatedGrid(originalMDGrid, MDCharactersToAnimate));
    const [animatedSMGrid, setAnimatedSMGrid] = useState(() => createInitialAnimatedGrid(originalSmallInitialGrid, SMCharactersToAnimate));

    // Refs for Intersection Observer
    const xlRef = useRef(null);
    const lgRef = useRef(null);
    const mdRef = useRef(null);
    const smRef = useRef(null);

    // Function to handle character reveal animation
    const startAnimation = (setGridState, charactersToAnimate) => {
        charactersToAnimate.forEach((item, index) => {
            setTimeout(() => {
                setGridState(prevGrid => {
                    const newGrid = deepCopyGrid(prevGrid);
                    // Ensure the row and column exist before attempting to update
                    if (newGrid[item.row] && newGrid[item.row][item.col]) {
                        newGrid[item.row][item.col] = [item.char, 1];
                    }
                    return newGrid;
                });
            }, index * (1500 / charactersToAnimate.length)); // Distribute 1500ms evenly
        });
    };

    // Effect for XL grid animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    startAnimation(setAnimatedXLGrid, XLCharactersToAnimate);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );
        if (xlRef.current) {
            observer.observe(xlRef.current);
        }
        return () => {
            if (xlRef.current) {
                observer.unobserve(xlRef.current);
            }
        };
    }, []);

    // Effect for LG grid animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    startAnimation(setAnimatedLGGrid, LGCharactersToAnimate);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );
        if (lgRef.current) {
            observer.observe(lgRef.current);
        }
        return () => {
            if (lgRef.current) {
                observer.unobserve(lgRef.current);
            }
        };
    }, []);

    // Effect for MD grid animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    startAnimation(setAnimatedMDGrid, MDCharactersToAnimate);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );
        if (mdRef.current) {
            observer.observe(mdRef.current);
        }
        return () => {
            if (mdRef.current) {
                observer.unobserve(mdRef.current);
            }
        };
    }, []);

    // Effect for SM grid animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    startAnimation(setAnimatedSMGrid, SMCharactersToAnimate);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );
        if (smRef.current) {
            observer.observe(smRef.current);
        }
        return () => {
            if (smRef.current) {
                observer.unobserve(smRef.current);
            }
        };
    }, []);


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
    
    return (

        <div>
            {/* EXTRA LARGE */}
            <Link target="_blank" href="https://minesweeper-pi-azure.vercel.app/" rel="noopener noreferrer">                        
                <div ref={xlRef} className='hidden xl:flex xl:w-316 xl:h-152 overflow-hidden justify-center items-center rounded-3xl'>
                    <div className='bg-mineBoardColor py-5 px-5 flex justify-center items-center cursor-pointer rounded-3xl'>
                        <div className='bg-mineBoardColor px-0 overflow-hidden'>
                            {animatedXLGrid.map((singleRow, i) => {
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
                <div ref={lgRef} className='hidden lg:flex lg:w-252 lg:h-120 xl:hidden overflow-hidden justify-center items-center rounded-3xl'>
                    <div className='bg-mineBoardColor py-5 px-5 flex justify-center items-center cursor-pointer rounded-3xl'>
                        <div className='bg-mineBoardColor px-0 overflow-hidden'>
                            {animatedLGGrid.map((singleRow, i) => {
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
                <div ref={mdRef} className='hidden md:flex md:w-190 md:h-132 lg:hidden overflow-hidden justify-center items-center rounded-3xl'>
                    <div className='bg-mineBoardColor py-5 px-5 flex justify-center items-center cursor-pointer rounded-3xl'>
                        <div className='bg-mineBoardColor px-0 overflow-hidden scale-95'>
                            {animatedMDGrid.map((singleRow, i) => {
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
            <Link target="_blank" href="https://minesweeper-pi-azure.vercel.app/" rel="noopener noreferrer">                        
                <div ref={smRef} className='w-92 h-78 md:hidden overflow-hidden justify-center items-center rounded-3xl'>
                    <div className='bg-mineBoardColor py-2 px-2 flex justify-center items-center cursor-pointer rounded-3xl'>
                        <div className='bg-mineBoardColor px-0 overflow-hidden scale-95'>
                            {animatedSMGrid.map((singleRow, i) => {
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
        </div>
    )
}

export default Minesweeper