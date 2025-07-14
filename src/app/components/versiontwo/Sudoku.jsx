"use client";
import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

function sudokuNumber (number, colour, background) {
    if (number === 0) {
        return <div>
                    <div className={`bg-${background}`} style={{width: 80, height: 80}}></div>
                </div>
    }
    if (number === 1) {
        return <div>
                    <div className={`bg-${background}`} style={{width: 80, height: 16}}></div>

                    <div className='flex'>
                        <div className={`bg-${background}`} style={{width: 19, height: 8}}></div>
                        <div className={`bg-${background}`} style={{width: 16, height: 8}}></div>
                        <div className={`bg-${colour}`} style={{width: 12, height: 8}}></div>
                        <div className={`bg-${background}`} style={{width: 14, height: 8}}></div>
                        <div className={`bg-${background}`} style={{width: 19, height: 8}}></div>
                    </div>

                    <div className='flex'>                        
                        <div className={`bg-${background}`} style={{width: 19, height: 10}}></div>
                        
                        <div className={`bg-${background}`} style={{width: 6, height: 10}}></div>    
                        <div className={`bg-${colour}`} style={{width: 22, height: 10}}></div>   
                        <div className={`bg-${background}`} style={{width: 14, height: 10}}></div>     

                        <div className={`bg-${background}`} style={{width: 19, height: 10}}></div>
                    </div>

                    <div className='flex'>
                        <div className={`bg-${background}`} style={{width: 19, height: 20}}></div>
                        <div className={`bg-${background}`} style={{width: 14, height: 20}}></div>
                        <div className={`bg-${colour}`} style={{width: 14, height: 20}}></div>
                        <div className={`bg-${background}`} style={{width: 14, height: 20}}></div>
                        <div className={`bg-${background}`} style={{width: 19, height: 20}}></div>
                    </div>

                    <div className='flex'>
                        <div className={`bg-${background}`} style={{width: 19, height: 10}}></div>
                        <div className={`bg-${colour}`} style={{width: 42, height: 10}}></div>
                        <div className={`bg-${background}`} style={{width: 19, height: 10}}></div>
                    </div>

                    <div className={`bg-${background}`} style={{width: 80, height: 16}}></div>
                </div>
    }
    if (number === 2) {
        return <div>
                    <div className={`bg-${background}`} style={{width: 80, height: 16}}></div>

                    <div className='flex'>
                        <div className={`bg-${background}`} style={{width: 19, height: 10}}></div>
                        <div className={`bg-${colour}`} style={{width: 42, height: 10}}></div>
                        <div className={`bg-${background}`} style={{width: 19, height: 10}}></div>
                    </div>

                    <div className='flex'>                        
                        <div className={`bg-${background}`} style={{width: 19, height: 8}}></div>
                        
                        <div className={`bg-${background}`} style={{width: 32, height: 8}}></div>    
                        <div className={`bg-${colour}`} style={{width: 10, height: 8}}></div>                    
                        <div className={`bg-${background}`} style={{width: 19, height: 8}}></div>
                    </div>

                    <div className='flex'>
                        <div className={`bg-${background}`} style={{width: 19, height: 10}}></div>
                        <div className={`bg-${colour}`} style={{width: 42, height: 10}}></div>
                        <div className={`bg-${background}`} style={{width: 19, height: 10}}></div>
                    </div>

                    <div className='flex'>
                        <div className={`bg-${background}`} style={{width: 19, height: 10}}></div>
                        <div className={`bg-${colour}`} style={{width: 10, height: 10}}></div>
                        <div className={`bg-${background}`} style={{width: 32, height: 10}}></div>
                        
                        <div className={`bg-${background}`} style={{width: 19, height: 10}}></div>
                    </div>

                    <div className='flex'>
                        <div className={`bg-${background}`} style={{width: 19, height: 10}}></div>
                        <div className={`bg-${colour}`} style={{width: 42, height: 10}}></div>
                        <div className={`bg-${background}`} style={{width: 19, height: 10}}></div>
                    </div>

                    <div className={`bg-${background}`} style={{width: 80, height: 16}}></div>
                </div>
    }
    if (number === 3) {
        return <div>
        <div className={`bg-${background}`} style={{width: 80, height: 16}}></div>

        <div className='flex'>
            <div className={`bg-${background}`} style={{width: 19, height: 10}}></div>
            <div className={`bg-${colour}`} style={{width: 42, height: 10}}></div>
            <div className={`bg-${background}`} style={{width: 19, height: 10}}></div>
        </div>

        <div className='flex'>
            <div className={`bg-${background}`} style={{width: 19, height: 8}}></div>
            <div className={`bg-${background}`} style={{width: 32, height: 8}}></div>
            <div className={`bg-${colour}`} style={{width: 10, height: 8}}></div>
            <div className={`bg-${background}`} style={{width: 19, height: 8}}></div>
        </div>

        <div className='flex'>
            <div className={`bg-${background}`} style={{width: 29, height: 10}}></div>
            <div className={`bg-${colour}`} style={{width: 32, height: 10}}></div>
            <div className={`bg-${background}`} style={{width: 19, height: 10}}></div>
        </div>

        <div className='flex'>
            <div className={`bg-${background}`} style={{width: 19, height: 10}}></div>
            <div className={`bg-${background}`} style={{width: 32, height: 10}}></div>
            <div className={`bg-${colour}`} style={{width: 10, height: 10}}></div>
            <div className={`bg-${background}`} style={{width: 19, height: 10}}></div>
        </div>

        <div className='flex'>
            <div className={`bg-${background}`} style={{width: 19, height: 10}}></div>
            <div className={`bg-${colour}`} style={{width: 42, height: 10}}></div>
            <div className={`bg-${background}`} style={{width: 19, height: 10}}></div>
        </div>

        <div className={`bg-${background}`} style={{width: 80, height: 16}}></div>
    </div>
    }
    if (number === 4) {
        return <div>
        <div className={`bg-${background}`} style={{width: 80, height: 16}}></div>

        <div className='flex'>
            <div className={`bg-${background}`} style={{width: 19, height: 18}}></div>
            <div className={`bg-${background}`} style={{width: 8, height: 18}}></div>
            <div className={`bg-${colour}`} style={{width: 12, height: 18}}></div>
            <div className={`bg-${background}`} style={{width: 12, height: 18}}></div>
            <div className={`bg-${colour}`} style={{width: 10, height: 18}}></div>
            <div className={`bg-${background}`} style={{width: 19, height: 18}}></div>
        </div>

        <div className='flex'>
            <div className={`bg-${background}`} style={{width: 19, height: 10}}></div>
            <div className={`bg-${colour}`} style={{width: 42, height: 10}}></div>
            <div className={`bg-${background}`} style={{width: 19, height: 10}}></div>
        </div>

        <div className='flex'>
            <div className={`bg-${background}`} style={{width: 19, height: 20}}></div>
            <div className={`bg-${background}`} style={{width: 32, height: 20}}></div>
            <div className={`bg-${colour}`} style={{width: 10, height: 20}}></div>
            <div className={`bg-${background}`} style={{width: 19, height: 20}}></div>
        </div>

        <div className={`bg-${background}`} style={{width: 80, height: 16}}></div>
    </div>
    }
    if (number === 5) {
        return <div>
        <div className={`bg-${background}`} style={{width: 80, height: 16}}></div>

        <div className='flex'>
            <div className={`bg-${background}`} style={{width: 19, height: 10}}></div>
            <div className={`bg-${colour}`} style={{width: 42, height: 10}}></div>
            <div className={`bg-${background}`} style={{width: 19, height: 10}}></div>
        </div>

        <div className='flex'>                        
            <div className={`bg-${background}`} style={{width: 19, height: 8}}></div>
            <div className={`bg-${colour}`} style={{width: 10, height: 8}}></div>
            <div className={`bg-${background}`} style={{width: 32, height: 8}}></div>                        
            <div className={`bg-${background}`} style={{width: 19, height: 8}}></div>
        </div>

        <div className='flex'>
            <div className={`bg-${background}`} style={{width: 19, height: 10}}></div>
            <div className={`bg-${colour}`} style={{width: 42, height: 10}}></div>
            <div className={`bg-${background}`} style={{width: 19, height: 10}}></div>
        </div>

        <div className='flex'>
            <div className={`bg-${background}`} style={{width: 19, height: 10}}></div>
            <div className={`bg-${background}`} style={{width: 32, height: 10}}></div>
            <div className={`bg-${colour}`} style={{width: 10, height: 10}}></div>
            <div className={`bg-${background}`} style={{width: 19, height: 10}}></div>
        </div>

        <div className='flex'>
            <div className={`bg-${background}`} style={{width: 19, height: 10}}></div>
            <div className={`bg-${colour}`} style={{width: 42, height: 10}}></div>
            <div className={`bg-${background}`} style={{width: 19, height: 10}}></div>
        </div>

        <div className={`bg-${background}`} style={{width: 80, height: 16}}></div>
    </div>
    }
    if (number === 6) {
        return <div>
        <div className={`bg-${background}`} style={{width: 80, height: 16}}></div>

        <div className='flex'>
            <div className={`bg-${background}`} style={{width: 19, height: 10}}></div>
            <div className={`bg-${colour}`} style={{width: 42, height: 10}}></div>
            <div className={`bg-${background}`} style={{width: 19, height: 10}}></div>
        </div>

        <div className='flex'>                        
            <div className={`bg-${background}`} style={{width: 19, height: 8}}></div>
            <div className={`bg-${colour}`} style={{width: 10, height: 8}}></div>
            <div className={`bg-${background}`} style={{width: 32, height: 8}}></div>                        
            <div className={`bg-${background}`} style={{width: 19, height: 8}}></div>
        </div>

        <div className='flex'>
            <div className={`bg-${background}`} style={{width: 19, height: 10}}></div>
            <div className={`bg-${colour}`} style={{width: 42, height: 10}}></div>
            <div className={`bg-${background}`} style={{width: 19, height: 10}}></div>
        </div>

        <div className='flex'>
            <div className={`bg-${background}`} style={{width: 19, height: 10}}></div>
            <div className={`bg-${colour}`} style={{width: 10, height: 10}}></div>
            <div className={`bg-${background}`} style={{width: 22, height: 10}}></div>
            <div className={`bg-${colour}`} style={{width: 10, height: 10}}></div>
            <div className={`bg-${background}`} style={{width: 19, height: 10}}></div>
        </div>

        <div className='flex'>
            <div className={`bg-${background}`} style={{width: 19, height: 10}}></div>
            <div className={`bg-${colour}`} style={{width: 42, height: 10}}></div>
            <div className={`bg-${background}`} style={{width: 19, height: 10}}></div>
        </div>

        <div className={`bg-${background}`} style={{width: 80, height: 16}}></div>
    </div>
    }
    if (number === 7) {
        return <div>
        <div className={`bg-${background}`} style={{width: 80, height: 16}}></div>

        <div className='flex'>
            <div className={`bg-${background}`} style={{width: 19, height: 10}}></div>
            <div className={`bg-${colour}`} style={{width: 42, height: 10}}></div>
            <div className={`bg-${background}`} style={{width: 19, height: 10}}></div>
        </div>

        <div className='flex'>                        
            <div className={`bg-${background}`} style={{width: 19, height: 8}}></div>

            <div className={`bg-${background}`} style={{width: 32, height: 8}}></div>   
            <div className={`bg-${colour}`} style={{width: 10, height: 8}}></div>                     
            <div className={`bg-${background}`} style={{width: 19, height: 8}}></div>
        </div>

        <div className='flex'>
            <div className={`bg-${background}`} style={{width: 19, height: 30}}></div>
            <div className={`bg-${background}`} style={{width: 32, height: 30}}></div>
            <div className={`bg-${colour}`} style={{width: 10, height: 30}}></div>
            <div className={`bg-${background}`} style={{width: 19, height: 30}}></div>
        </div>



        <div className={`bg-${background}`} style={{width: 80, height: 16}}></div>
    </div>
    }
    if (number === 8) {
        return <div>
        <div className={`bg-${background}`} style={{width: 80, height: 16}}></div>

        <div className='flex'>
            <div className={`bg-${background}`} style={{width: 19, height: 10}}></div>
            <div className={`bg-${colour}`} style={{width: 42, height: 10}}></div>
            <div className={`bg-${background}`} style={{width: 19, height: 10}}></div>
        </div>

        <div className='flex'>                        
            <div className={`bg-${background}`} style={{width: 19, height: 8}}></div>
            <div className={`bg-${colour}`} style={{width: 10, height: 8}}></div>
            <div className={`bg-${background}`} style={{width: 22, height: 8}}></div>   
            <div className={`bg-${colour}`} style={{width: 10, height: 8}}></div>                     
            <div className={`bg-${background}`} style={{width: 19, height: 8}}></div>
        </div>

        <div className='flex'>
            <div className={`bg-${background}`} style={{width: 19, height: 10}}></div>
            <div className={`bg-${colour}`} style={{width: 42, height: 10}}></div>
            <div className={`bg-${background}`} style={{width: 19, height: 10}}></div>
        </div>

        <div className='flex'>
            <div className={`bg-${background}`} style={{width: 19, height: 10}}></div>
            <div className={`bg-${colour}`} style={{width: 10, height: 10}}></div>
            <div className={`bg-${background}`} style={{width: 22, height: 10}}></div>
            <div className={`bg-${colour}`} style={{width: 10, height: 10}}></div>
            <div className={`bg-${background}`} style={{width: 19, height: 10}}></div>
        </div>

        <div className='flex'>
            <div className={`bg-${background}`} style={{width: 19, height: 10}}></div>
            <div className={`bg-${colour}`} style={{width: 42, height: 10}}></div>
            <div className={`bg-${background}`} style={{width: 19, height: 10}}></div>
        </div>

        <div className={`bg-${background}`} style={{width: 80, height: 16}}></div>
    </div>
    }
    if (number === 9) {
        return <div>
        <div className={`bg-${background}`} style={{width: 80, height: 16}}></div>

        <div className='flex'>
            <div className={`bg-${background}`} style={{width: 19, height: 10}}></div>
            <div className={`bg-${colour}`} style={{width: 42, height: 10}}></div>
            <div className={`bg-${background}`} style={{width: 19, height: 10}}></div>
        </div>

        <div className='flex'>                        
            <div className={`bg-${background}`} style={{width: 19, height: 8}}></div>
            <div className={`bg-${colour}`} style={{width: 10, height: 8}}></div>
            <div className={`bg-${background}`} style={{width: 22, height: 8}}></div>   
            <div className={`bg-${colour}`} style={{width: 10, height: 8}}></div>                     
            <div className={`bg-${background}`} style={{width: 19, height: 8}}></div>
        </div>

        <div className='flex'>
            <div className={`bg-${background}`} style={{width: 19, height: 10}}></div>
            <div className={`bg-${colour}`} style={{width: 42, height: 10}}></div>
            <div className={`bg-${background}`} style={{width: 19, height: 10}}></div>
        </div>

        <div className='flex'>
            <div className={`bg-${background}`} style={{width: 19, height: 10}}></div>
            <div className={`bg-${background}`} style={{width: 32, height: 10}}></div>
            <div className={`bg-${colour}`} style={{width: 10, height: 10}}></div>
            <div className={`bg-${background}`} style={{width: 19, height: 10}}></div>
        </div>

        <div className='flex'>
            <div className={`bg-${background}`} style={{width: 19, height: 10}}></div>
            <div className={`bg-${colour}`} style={{width: 42, height: 10}}></div>
            <div className={`bg-${background}`} style={{width: 19, height: 10}}></div>
        </div>

        <div className={`bg-${background}`} style={{width: 80, height: 16}}></div>
    </div>
    }

    if (number === "S") {
        return <div>
        <div className={`bg-${background}`} style={{width: 80, height: 16}}></div>

        <div className='flex'>
            <div className={`bg-${background}`} style={{width: 29, height: 10}}></div>
            <div className={`bg-${colour}`} style={{width: 32, height: 10}}></div>
            <div className={`bg-${background}`} style={{width: 19, height: 10}}></div>
        </div>

        <div className='flex'>                        
            <div className={`bg-${background}`} style={{width: 19, height: 8}}></div>
            <div className={`bg-${colour}`} style={{width: 10, height: 8}}></div>
            <div className={`bg-${background}`} style={{width: 32, height: 8}}></div>                        
            <div className={`bg-${background}`} style={{width: 19, height: 8}}></div>
        </div>

        <div className='flex'>
            <div className={`bg-${background}`} style={{width: 19, height: 10}}></div>
            <div className={`bg-${colour}`} style={{width: 42, height: 10}}></div>
            <div className={`bg-${background}`} style={{width: 19, height: 10}}></div>
        </div>

        <div className='flex'>
            <div className={`bg-${background}`} style={{width: 29, height: 10}}></div>
            {/* <div className={`bg-${colour}`} style={{width: 10, height: 10}}></div> */}
            <div className={`bg-${background}`} style={{width: 22, height: 10}}></div>
            <div className={`bg-${colour}`} style={{width: 10, height: 10}}></div>
            <div className={`bg-${background}`} style={{width: 19, height: 10}}></div>
        </div>

        <div className='flex'>
            <div className={`bg-${background}`} style={{width: 19, height: 10}}></div>
            <div className={`bg-${colour}`} style={{width: 32, height: 10}}></div>
            <div className={`bg-${background}`} style={{width: 29, height: 10}}></div>
        </div>

        <div className={`bg-${background}`} style={{width: 80, height: 16}}></div>
    </div>
    }
    if (number === "U") {
        return <div>
        <div className={`bg-${background}`} style={{width: 80, height: 16}}></div>

        <div className='flex'>
            <div className={`bg-${background}`} style={{width: 19, height: 10}}></div>
            <div className={`bg-${colour}`} style={{width: 10, height: 10}}></div>
            <div className={`bg-${background}`} style={{width: 22, height: 10}}></div>   
            <div className={`bg-${colour}`} style={{width: 10, height: 10}}></div>  
            <div className={`bg-${background}`} style={{width: 19, height: 10}}></div>
        </div>

        <div className='flex'>                        
            <div className={`bg-${background}`} style={{width: 19, height: 18}}></div>
            <div className={`bg-${colour}`} style={{width: 10, height: 18}}></div>
            <div className={`bg-${background}`} style={{width: 22, height: 18}}></div>   
            <div className={`bg-${colour}`} style={{width: 10, height: 18}}></div>                     
            <div className={`bg-${background}`} style={{width: 19, height: 18}}></div>
        </div>

        <div className='flex'>
            <div className={`bg-${background}`} style={{width: 19, height: 10}}></div>
            <div className={`bg-${colour}`} style={{width: 10, height: 10}}></div>
            <div className={`bg-${background}`} style={{width: 22, height: 10}}></div>
            <div className={`bg-${colour}`} style={{width: 10, height: 10}}></div>
            <div className={`bg-${background}`} style={{width: 19, height: 10}}></div>
        </div>

        <div className='flex'>
            <div className={`bg-${background}`} style={{width: 29, height: 10}}></div>
            <div className={`bg-${colour}`} style={{width: 22, height: 10}}></div>
            <div className={`bg-${background}`} style={{width: 29, height: 10}}></div>
        </div>

        <div className={`bg-${background}`} style={{width: 80, height: 16}}></div>
    </div>
    }
    if (number === "D") {
        return <div>
        <div className={`bg-${background}`} style={{width: 80, height: 16}}></div>

        <div className='flex'>
            <div className={`bg-${background}`} style={{width: 19, height: 10}}></div>
            <div className={`bg-${colour}`} style={{width: 32, height: 10}}></div>
            <div className={`bg-${background}`} style={{width: 29, height: 10}}></div>
        </div>

        <div className='flex'>                        
            <div className={`bg-${background}`} style={{width: 19, height: 18}}></div>
            <div className={`bg-${colour}`} style={{width: 10, height: 18}}></div>
            <div className={`bg-${background}`} style={{width: 22, height: 18}}></div>   
            <div className={`bg-${colour}`} style={{width: 10, height: 18}}></div>                     
            <div className={`bg-${background}`} style={{width: 19, height: 18}}></div>
        </div>

        <div className='flex'>
            <div className={`bg-${background}`} style={{width: 19, height: 10}}></div>
            <div className={`bg-${colour}`} style={{width: 10, height: 10}}></div>
            <div className={`bg-${background}`} style={{width: 22, height: 10}}></div>
            <div className={`bg-${colour}`} style={{width: 10, height: 10}}></div>
            <div className={`bg-${background}`} style={{width: 19, height: 10}}></div>
        </div>

        <div className='flex'>
            <div className={`bg-${background}`} style={{width: 19, height: 10}}></div>
            <div className={`bg-${colour}`} style={{width: 32, height: 10}}></div>
            <div className={`bg-${background}`} style={{width: 29, height: 10}}></div>
        </div>

        <div className={`bg-${background}`} style={{width: 80, height: 16}}></div>
    </div>
    }
    if (number === "O") {
        return <div>
        <div className={`bg-${background}`} style={{width: 80, height: 16}}></div>

        <div className='flex'>
            <div className={`bg-${background}`} style={{width: 29, height: 10}}></div>
            <div className={`bg-${colour}`} style={{width: 22, height: 10}}></div>
            <div className={`bg-${background}`} style={{width: 29, height: 10}}></div>
        </div>

        <div className='flex'>                        
            <div className={`bg-${background}`} style={{width: 19, height: 18}}></div>
            <div className={`bg-${colour}`} style={{width: 10, height: 18}}></div>
            <div className={`bg-${background}`} style={{width: 22, height: 18}}></div>   
            <div className={`bg-${colour}`} style={{width: 10, height: 18}}></div>                     
            <div className={`bg-${background}`} style={{width: 19, height: 18}}></div>
        </div>

        <div className='flex'>
            <div className={`bg-${background}`} style={{width: 19, height: 10}}></div>
            <div className={`bg-${colour}`} style={{width: 10, height: 10}}></div>
            <div className={`bg-${background}`} style={{width: 22, height: 10}}></div>
            <div className={`bg-${colour}`} style={{width: 10, height: 10}}></div>
            <div className={`bg-${background}`} style={{width: 19, height: 10}}></div>
        </div>

        <div className='flex'>
            <div className={`bg-${background}`} style={{width: 29, height: 10}}></div>
            <div className={`bg-${colour}`} style={{width: 22, height: 10}}></div>
            <div className={`bg-${background}`} style={{width: 29, height: 10}}></div>
        </div>

        <div className={`bg-${background}`} style={{width: 80, height: 16}}></div>
    </div>
    }
    if (number === "K") {
        return <div>
        <div className={`bg-${background}`} style={{width: 80, height: 16}}></div>

        <div className='flex'>
            <div className={`bg-${background}`} style={{width: 19, height: 10}}></div>
            <div className={`bg-${colour}`} style={{width: 10, height: 10}}></div>
            <div className={`bg-${background}`} style={{width: 22, height: 10}}></div>
            <div className={`bg-${colour}`} style={{width: 10, height: 10}}></div>
            <div className={`bg-${background}`} style={{width: 19, height: 10}}></div>
        </div>

        <div className='flex'>                        
            <div className={`bg-${background}`} style={{width: 19, height: 8}}></div>
            <div className={`bg-${colour}`} style={{width: 10, height: 8}}></div>
            <div className={`bg-${background}`} style={{width: 12, height: 8}}></div>      
            <div className={`bg-${colour}`} style={{width: 10, height: 8}}></div>  
            <div className={`bg-${background}`} style={{width: 10, height: 8}}></div>                    
            <div className={`bg-${background}`} style={{width: 19, height: 8}}></div>
        </div>

        <div className='flex'>
            <div className={`bg-${background}`} style={{width: 19, height: 10}}></div>
            <div className={`bg-${colour}`} style={{width: 22, height: 10}}></div>
            <div className={`bg-${background}`} style={{width: 29, height: 10}}></div>
        </div>

        <div className='flex'>                        
            <div className={`bg-${background}`} style={{width: 19, height: 10}}></div>
            <div className={`bg-${colour}`} style={{width: 10, height: 10}}></div>
            <div className={`bg-${background}`} style={{width: 12, height: 10}}></div>      
            <div className={`bg-${colour}`} style={{width: 10, height: 10}}></div>  
            <div className={`bg-${background}`} style={{width: 10, height: 10}}></div>                    
            <div className={`bg-${background}`} style={{width: 19, height: 10}}></div>
        </div>

        <div className='flex'>
            <div className={`bg-${background}`} style={{width: 19, height: 10}}></div>
            <div className={`bg-${colour}`} style={{width: 10, height: 10}}></div>
            <div className={`bg-${background}`} style={{width: 22, height: 10}}></div>
            <div className={`bg-${colour}`} style={{width: 10, height: 10}}></div>
            <div className={`bg-${background}`} style={{width: 19, height: 10}}></div>
        </div>

        <div className={`bg-${background}`} style={{width: 80, height: 16}}></div>
    </div>
    }
}

const SixLines = () => {
    return (
        <div className='w-full h-fit space-y-2'>
            <div className='bg-sudokuBoard2 h-3 w-full'></div>
            <div className='bg-sudokuBoard2 h-3 w-full'></div>
            <div className='bg-sudokuBoard2 h-3 w-full'></div>
            <div className='bg-sudokuBoard2 h-3 w-full'></div>
            <div className='bg-sudokuBoard2 h-3 w-full'></div>
            <div className='bg-sudokuBoard2 h-3 w-full'></div>
        </div>
    )
}

const Sudoku = () => {

    const [animatedNumbers, setAnimatedNumbers] = useState({
        num6: 0,
        num7: 0,
        num8a: 0,
        num1b: 0,
        num4b: 0,
        num8b: 0,
        num2c: 0,
        num4c: 0,
        num9c: 0,
        num7d: 0,
        num4d: 0,
        num8d: 0,
        num1e: 0,
        num2e: 0,
        num4e: 0,
        num9e: 0,
        num8f: 0,
        num6f: 0,
        num3f: 0,
        num2f: 0,
        num4g: 0,
        num9g: 0,
        num7h: 0,
        num5h: 0,
        num1h: 0,
        num2i: 0,
        num8i: 0,
        num3i: 0,
        num5i: 0,
        num7j: 0,
        num9j: 0,
        num3j: 0,
        num1j: 0,
        num5j: 0,
    });
    const [hasAnimated, setHasAnimated] = useState(false);
    const sudokuRef = useRef(); 

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio >= 0.9 && !hasAnimated) {
                        setHasAnimated(true); // Start animation only once
                        // Trigger the animation for each number
                        const numbersToAnimate = [
                            { key: 'num6', finalValue: 6 },
                            { key: 'num7', finalValue: 7 },
                            { key: 'num8a', finalValue: 8 },
                            { key: 'num1b', finalValue: 1 },
                            { key: 'num4b', finalValue: 4 },
                            { key: 'num8b', finalValue: 8 },
                            { key: 'num2c', finalValue: 2 },
                            { key: 'num4c', finalValue: 4 },
                            { key: 'num9c', finalValue: 9 },
                            { key: 'num7d', finalValue: 7 },
                            { key: 'num4d', finalValue: 4 },
                            { key: 'num8d', finalValue: 8 },
                            { key: 'num1e', finalValue: 1 },
                            { key: 'num2e', finalValue: 2 },
                            { key: 'num4e', finalValue: 4 },
                            { key: 'num9e', finalValue: 9 },
                            { key: 'num8f', finalValue: 8 },
                            { key: 'num6f', finalValue: 6 },
                            { key: 'num3f', finalValue: 3 },
                            { key: 'num2f', finalValue: 2 },
                            { key: 'num4g', finalValue: 4 },
                            { key: 'num9g', finalValue: 9 },
                            { key: 'num7h', finalValue: 7 },
                            { key: 'num5h', finalValue: 5 },
                            { key: 'num1h', finalValue: 1 },
                            { key: 'num2i', finalValue: 2 },
                            { key: 'num8i', finalValue: 8 },
                            { key: 'num3i', finalValue: 3 },
                            { key: 'num5i', finalValue: 5 },
                            { key: 'num7j', finalValue: 7 },
                            { key: 'num9j', finalValue: 9 },
                            { key: 'num3j', finalValue: 3 },
                            { key: 'num1j', finalValue: 1 },
                            { key: 'num5j', finalValue: 5 },
                        ];
    
                        const totalDuration = 1000;
                        const delayPerNumber = totalDuration / numbersToAnimate.length;
    
                        numbersToAnimate.forEach((num, index) => {
                            setTimeout(() => {
                                setAnimatedNumbers(prev => ({
                                    ...prev,
                                    [num.key]: num.finalValue
                                }));
                            }, index * delayPerNumber);
                        });
                    }
                });
            },
            { threshold: 0.9 } // Trigger when 90% of the component is visible
        );
    
        if (sudokuRef.current) {
            observer.observe(sudokuRef.current);
        }
    
        return () => {
            if (sudokuRef.current) {
                observer.unobserve(sudokuRef.current);
            }
        };
    }, [hasAnimated]); // Re-run effect if hasAnimated changes (though it only changes once)

    return (
        // className='bg-sudokuBoard rounded-3xl flex justify-center items-center border-sudokuBoard border-4' style={{height: 408, width: 640, overflow: 'hidden'}}
        <Link target="_blank" href="https://github.com/tianxiaozhang1/sudoku" rel="noopener noreferrer">
            <div ref={sudokuRef} className='w-92 h-78 md:w-190 md:h-132 lg:w-252 lg:h-120 xl:w-316 xl:h-152 bg-sudokuBoard rounded-3xl border-stone-300 border-8 mx-auto flex justify-center items-center cursor-pointer overflow-hidden'>
                <div className='bg-sudokuBoard5 h-full flex w-108'>
                    <div className='w-3 h-full bg-sudokuBoard5'></div>
                    <div className='h-full w-104 bg-sudokuBoard5 border-r-8 border-sudokuBoard2 mr-3 '>
                        <div className='h-72 w-full pr-2.5 pb-2.5 flex items-end overflow-hidden'>
                            <div className='w-full space-y-2'>
                                <SixLines/><SixLines/>
                                <div className='bg-sudokuBoard2 h-3 w-full'></div>
                                <div className='bg-sudokuBoard2 h-3 w-full'></div>
                            </div>
                        </div>
                        
                        <div className='h-80 w-full bg-sudokuBoard5 border-y-8 border-sudokuBoard2 pr-2.5 py-2 flex items-center overflow-hidden pt-3'>
                            <div className='w-full h-full space-y-2'>
                                <div className='h-fit flex'>
                                    
                                    <div className='w-3/4  flex items-center'>
                                        <div className='w-full h-fit space-y-2 pr-2'>
                                            <SixLines/>
                                            <div className='bg-sudokuBoard2 h-3 w-full'></div>
                                            <div className='bg-sudokuBoard2 h-3 w-full'></div>
                                        </div>
                                    </div>
                                    <div className='bg-sudokuBoard2 w-1/4 h-40'></div>
                                </div>
                                <div className='pt-0.5'>
                                    <SixLines/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-184 scale-90 md:scale-100 -ml-1 lg:ml-0 lg:scale-100'>
                    <div className='flex' style={{marginBottom: 8}}>
                        <div style={{marginRight: 8}}>

                            <div className='flex' style={{height: 160}}></div>

                            <div className='flex'>
                                <div className='bg-sudokuBoard5 pt-2' style={{height: 80, width: 80}}>
                                    <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber(4, "sudokuBoard5", "sudokuBoard1x")}</div>
                                </div>
                                <div className='bg-sudokuBoard4x pt-2' style={{height: 80, width: 80}}>
                                    <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber(5, "sudokuBoard4x", "sudokuBoard2")}</div>
                                </div>
                                <div className='bg-sudokuBoard5 pt-2' style={{height: 80, width: 80}}>
                                    <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber(3, "sudokuBoard5", "sudokuBoard1x")}</div>
                                </div>
                            </div>
                            <div className='flex items-center justify-center'>
                                <div className='bg-sudokuBoard4x pt-2' style={{height: 80, width: 80}}>
                                    <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber(8, "sudokuBoard4x", "sudokuBoard2")}</div> 
                                </div>
                                <div className='bg-sudokuBoard5 pt-2' style={{height: 80, width: 80}}>
                                    <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber(9, "sudokuBoard5", "sudokuBoard1x")}</div>
                                </div>
                                <div className='bg-sudokuBoard4x pt-2' style={{height: 80, width: 80}}>
                                    <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber(2, "sudokuBoard4x", "sudokuBoard2")}</div> 
                                </div>
                            </div>

                            <div className='flex'>
                                <div className='bg-sudokuBoard5 pt-2 ' style={{height: 80, width: 80}}>
                                    <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber(1, "sudokuBoard5", "sudokuBoard1x")}</div> 
                                </div>
                                <div className='bg-sudokuBoard4x pt-2' style={{height: 80, width: 80}}>
                                    {/* THIS */}
                                    <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber(animatedNumbers.num6, "sudokuBoard4x", "sudokuBoard2")}</div>
                                </div>
                                <div className='bg-sudokuBoard5 pt-2' style={{height: 80, width: 80}}>
                                    {/* THIS */}
                                    <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber(animatedNumbers.num7, "sudokuBoard5", "sudokuBoard1x")}</div> 
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className='flex' style={{height: 160}}></div>

                            <div className='flex items-center justify-center'>
                                <div className='bg-sudokuBoard4x pt-2 ' style={{height: 80, width: 80}}>
                                    <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber(8, "sudokuBoard4x", "sudokuBoard2")}</div> 
                                </div>
                                <div className='bg-sudokuBoard5 pt-2' style={{height: 80, width: 80}}>
                                    <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber(2, "sudokuBoard5", "sudokuBoard1x")}</div>
                                </div>
                                <div className='bg-sudokuBoard4x pt-2' style={{height: 80, width: 80}}>
                                    <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber(6, "sudokuBoard4x", "sudokuBoard2")}</div> 
                                </div>
                            </div>

                            

                            <div className='flex'>
                                <div className='bg-sudokuBoard5 pt-2 ' style={{height: 80, width: 80}}>
                                    <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber(5, "sudokuBoard5", "sudokuBoard1x")}</div> 
                                </div>
                                <div className='bg-sudokuBoard4x pt-2' style={{height: 80, width: 80}}>
                                    <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber(7, "sudokuBoard4x", "sudokuBoard2")}</div>
                                </div>
                                <div className='bg-sudokuBoard5 pt-2' style={{height: 80, width: 80}}>
                                    <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber(1, "sudokuBoard5", "sudokuBoard1x")}</div> 
                                </div>
                            </div>

                            <div className='flex items-center justify-center'>
                                <div className='bg-sudokuBoard4x pt-2' style={{height: 80, width: 80}}>
                                    <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber(4, "sudokuBoard4x", "sudokuBoard2")}</div> 
                                </div>
                                <div className='bg-sudokuBoard5 pt-2' style={{height: 80, width: 80}}>
                                    <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber(9, "sudokuBoard5", "sudokuBoard1x")}</div>
                                </div>
                                <div className='bg-sudokuBoard4x pt-2' style={{height: 80, width: 80}}>
                                    <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber(3, "sudokuBoard4x", "sudokuBoard2")}</div> 
                                </div>
                            </div>
                        </div>

                        <div style={{marginLeft: 8}}>
                            <div className='flex' style={{height: 160}}></div>

                            
                            <div className='flex'>
                                <div className='bg-sudokuBoard5 pt-2' style={{height: 80, width: 80}}>
                                    <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber(1, "sudokuBoard5", "sudokuBoard1x")}</div>
                                </div>
                                <div className='bg-sudokuBoard4x pt-2' style={{height: 80, width: 80}}>
                                    <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber(9, "sudokuBoard4x", "sudokuBoard2")}</div>
                                </div>
                                <div className='bg-sudokuBoard5 pt-2' style={{height: 80, width: 80}}>
                                    <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber(7, "sudokuBoard5", "sudokuBoard1x")}</div>
                                </div>
                            </div>

                            <div className='flex items-center justify-center'>
                                <div className='bg-sudokuBoard4x pt-2' style={{height: 80, width: 80}}>
                                    <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber(6, "sudokuBoard4x", "sudokuBoard2")}</div> 
                                </div>
                                <div className='bg-sudokuBoard5 pt-2' style={{height: 80, width: 80}}>
                                    <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber(3, "sudokuBoard5", "sudokuBoard1x")}</div>
                                </div>
                                <div className='bg-sudokuBoard4x pt-2' style={{height: 80, width: 80}}>
                                    <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber(4, "sudokuBoard4x", "sudokuBoard2")}</div> 
                                </div>
                            </div>

                            <div className='flex'>
                                <div className='bg-sudokuBoard5 pt-2 ' style={{height: 80, width: 80}}>
                                    {/* THIS */}
                                    <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber(animatedNumbers.num5h, "sudokuBoard5", "sudokuBoard1x")}</div> 
                                </div>
                                <div className='bg-sudokuBoard4x pt-2' style={{height: 80, width: 80}}>
                                    <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber(2, "sudokuBoard4x", "sudokuBoard2")}</div>
                                </div>
                                <div className='bg-sudokuBoard5 pt-2' style={{height: 80, width: 80}}>
                                    <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber(8, "sudokuBoard5", "sudokuBoard1x")}</div> 
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex'>
                        <div style={{marginRight: 8}}>
                            <div className='flex items-center justify-center'>
                                <div className='bg-sudokuBoard4x pt-2' style={{height: 80, width: 80}}>
                                    <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber(7, "sudokuBoard4x", "sudokuBoard2")}</div> 
                                </div>
                                <div className='bg-sudokuBoard5 pt-2' style={{height: 80, width: 80}}>
                                    <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber(1, "sudokuBoard5", "sudokuBoard1x")}</div>
                                </div>
                                <div className='bg-sudokuBoard4x pt-2' style={{height: 80, width: 80}}>
                                    {/* THIS */}
                                    <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber(animatedNumbers.num4b, "sudokuBoard4x", "sudokuBoard2")}</div> 
                                </div>
                            </div>

                            <div className='flex'>
                                <div className='bg-sudokuBoard5 pt-2 ' style={{height: 80, width: 80}}>
                                    <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber(5, "sudokuBoard5", "sudokuBoard1x")}</div> 
                                </div>
                                <div className='bg-sudokuBoard4x pt-2' style={{height: 80, width: 80}}>
                                    {/* THIS */}
                                    <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber(animatedNumbers.num8a, "sudokuBoard4x", "sudokuBoard2")}</div>
                                </div>
                                <div className='bg-sudokuBoard5 pt-2' style={{height: 80, width: 80}}>
                                    {/* THIS */}
                                    <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber(animatedNumbers.num6f, "sudokuBoard5", "sudokuBoard1x")}</div> 
                                </div>
                            </div>

                            <div className='flex'>
                                <div className='bg-sudokuBoard4x pt-2' style={{height: 80, width: 80}}>
                                    <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber(3, "sudokuBoard4x", "sudokuBoard2")}</div> 
                                </div>
                                <div className='bg-sudokuBoard5 pt-2' style={{height: 80, width: 80}}>
                                    <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber(2, "sudokuBoard5", "sudokuBoard1x")}</div>
                                </div>
                                <div className='bg-sudokuBoard4x pt-2' style={{height: 80, width: 80}}>
                                    {/* THIS */}
                                    <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber(animatedNumbers.num9c, "sudokuBoard4x", "sudokuBoard2")}</div> 
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className='flex items-center justify-center'>
                                <div className='bg-yaoSe pt-2 ' style={{height: 80, width: 80}}>
                                    <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber("S", "sudokuBoard5", "yaoSe")}</div> 
                                </div>
                                <div className='bg-sudokuBoard2 pt-2' style={{height: 80, width: 80}}>
                                    <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber("U", "yaoSe", "sudokuBoard5")}</div>
                                </div>
                                <div className='bg-sudokuBoard1x pt-2' style={{height: 80, width: 80}}>
                                    {/* THIS */}
                                    <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber(animatedNumbers.num2c, "sudokuBoard5", "sudokuBoard1x")}</div> 
                                </div>
                            </div>

                            <div className='flex'>
                                <div className='bg-sudokuBoard5 pt-2' style={{height: 80, width: 80}}>
                                    {/* THIS */}
                                    <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber(animatedNumbers.num1b, "sudokuBoard1x", "sudokuBoard5")}</div> 
                                </div>
                                <div className='bg-yaoSe pt-2' style={{height: 80, width: 80}}>
                                    <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber("D", "sudokuBoard5", "yaoSe")}</div>
                                </div>
                                <div className='bg-sudokuBoard2 pt-2' style={{height: 80, width: 80}}>
                                    <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber("O", "yaoSe", "sudokuBoard5")}</div> 
                                </div>
                            </div>

                            <div className='flex'>
                                <div className='bg-yaoSe pt-2' style={{height: 80, width: 80}}>
                                    <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber("K", "sudokuBoard5", "yaoSe")}</div>
                                </div>
                                <div className='bg-sudokuBoard2 pt-2' style={{height: 80, width: 80}}>
                                    <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber("U", "yaoSe", "sudokuBoard5")}</div>
                                </div>
                                <div className='bg-sudokuBoard1x pt-2' style={{height: 80, width: 80}}>
                                    {/* THIS */}
                                    <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber(animatedNumbers.num4d, "sudokuBoard5", "sudokuBoard1x")}</div>
                                </div>
                            </div>
                        </div>

                        <div style={{marginLeft: 8}}>
                            <div className='flex items-center justify-center'>
                                <div className='bg-sudokuBoard4x pt-2' style={{height: 80, width: 80}}>
                                    {/* THIS */}
                                    <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber(animatedNumbers.num8b, "sudokuBoard4x", "sudokuBoard2")}</div> 
                                </div>
                                <div className='bg-sudokuBoard5 pt-2' style={{height: 80, width: 80}}>
                                    <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber(6, "sudokuBoard5", "sudokuBoard1x")}</div>
                                </div>
                                <div className='bg-sudokuBoard4x pt-2' style={{height: 80, width: 80}}>
                                    <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber(3, "sudokuBoard4x", "sudokuBoard2")}</div> 
                                </div>
                            </div>

                            <div className='flex'>
                                <div className='bg-sudokuBoard5 pt-2 ' style={{height: 80, width: 80}}>
                                    {/* THIS */}
                                    <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber(animatedNumbers.num2e, "sudokuBoard5", "sudokuBoard1x")}</div> 
                                </div>
                                <div className='bg-sudokuBoard4x pt-2' style={{height: 80, width: 80}}>
                                    {/* THIS */}
                                    <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber(animatedNumbers.num4c, "sudokuBoard4x", "sudokuBoard2")}</div>
                                </div>
                                <div className='bg-sudokuBoard5 pt-2' style={{height: 80, width: 80}}>
                                    {/* THIS */}
                                    <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber(animatedNumbers.num9e, "sudokuBoard5", "sudokuBoard1x")}</div> 
                                </div>
                            </div>

                            <div className='flex'>
                                <div className='bg-sudokuBoard4x pt-2' style={{height: 80, width: 80}}>
                                    {/* THIS */}
                                    <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber(animatedNumbers.num7d, "sudokuBoard4x", "sudokuBoard2")}</div> 
                                </div>
                                <div className='bg-sudokuBoard5 pt-2' style={{height: 80, width: 80}}>
                                    <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber(5, "sudokuBoard5", "sudokuBoard1x")}</div>
                                </div>
                                <div className='bg-sudokuBoard4x pt-2' style={{height: 80, width: 80}}>
                                    {/* THIS */}
                                    <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber(animatedNumbers.num1e, "sudokuBoard4x", "sudokuBoard2")}</div> 
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex' style={{marginTop: 8}}>
                        
                        <div style={{marginRight: 8}}>
                            <div style={{marginLeft: 0}}>
                                <div className='flex items-center justify-center'>
                                    <div className='bg-sudokuBoard5 pt-2' style={{height: 80, width: 80}}>
                                        <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber(9, "sudokuBoard5", "sudokuBoard1x")}</div> 
                                    </div>
                                    <div className='bg-sudokuBoard4x pt-2' style={{height: 80, width: 80}}>
                                        {/* THIS */}
                                        <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber(animatedNumbers.num3i, "sudokuBoard4x", "sudokuBoard2")}</div>
                                    </div>
                                    <div className='bg-sudokuBoard5 pt-2' style={{height: 80, width: 80}}>
                                        <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber(5, "sudokuBoard5", "sudokuBoard1x")}</div> 
                                    </div>
                                </div>

                                <div className='flex'>
                                    <div className='bg-sudokuBoard4x pt-2 ' style={{height: 80, width: 80}}>
                                        <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber(6, "sudokuBoard4x", "sudokuBoard2")}</div> 
                                    </div>
                                    <div className='bg-sudokuBoard5 pt-2' style={{height: 80, width: 80}}>
                                        <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber(7, "sudokuBoard5", "sudokuBoard1x")}</div>
                                    </div>
                                    <div className='bg-sudokuBoard4x pt-2' style={{height: 80, width: 80}}>
                                        <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber(1, "sudokuBoard4x", "sudokuBoard2")}</div> 
                                    </div>
                                </div>

                                <div className='flex items-center justify-center'>
                                    <div className='bg-sudokuBoard5 pt-2' style={{height: 80, width: 80}}>
                                        <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber(2, "sudokuBoard5", "sudokuBoard1x")}</div> 
                                    </div>
                                    <div className='bg-sudokuBoard4x pt-2' style={{height: 80, width: 80}}>
                                        <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber(4, "sudokuBoard4x", "sudokuBoard2")}</div>
                                    </div>
                                    <div className='bg-sudokuBoard5 pt-2' style={{height: 80, width: 80}}>
                                        <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber(8, "sudokuBoard5", "sudokuBoard1x")}</div> 
                                    </div>
                                </div>

                                
                            </div>

                            {/* <div className='flex' style={{height: 160}}></div> */}
                        </div>

                        <div>
                            
                            
                            <div className='flex items-center justify-center'>
                                <div className='bg-sudokuBoard4x pt-2' style={{height: 80, width: 80}}>
                                    {/* THIS */}
                                    <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber(animatedNumbers.num2f, "sudokuBoard4x", "sudokuBoard2")}</div> 
                                </div>
                                <div className='bg-sudokuBoard5 pt-2' style={{height: 80, width: 80}}>
                                    <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber(1, "sudokuBoard5", "sudokuBoard1x")}</div>
                                </div>
                                <div className='bg-sudokuBoard4x pt-2' style={{height: 80, width: 80}}>
                                    {/* THIS */}
                                    <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber(animatedNumbers.num8i, "sudokuBoard4x", "sudokuBoard2")}</div> 
                                </div>
                            </div>

                            <div className='flex items-center justify-center'>
                                <div className='bg-sudokuBoard5 pt-2' style={{height: 80, width: 80}}>
                                    <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber(3, "sudokuBoard5", "sudokuBoard1x")}</div> 
                                </div>
                                <div className='bg-sudokuBoard4x pt-2' style={{height: 80, width: 80}}>
                                    <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber(4, "sudokuBoard4x", "sudokuBoard2")}</div>
                                </div>
                                <div className='bg-sudokuBoard5 pt-2' style={{height: 80, width: 80}}>
                                    <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber(5, "sudokuBoard5", "sudokuBoard1x")}</div> 
                                </div>
                            </div>

                            <div className='flex items-center justify-center'>
                                <div className='bg-sudokuBoard4x pt-2' style={{height: 80, width: 80}}>
                                    <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber(7, "sudokuBoard4x", "sudokuBoard2")}</div> 
                                </div>
                                <div className='bg-sudokuBoard5 pt-2' style={{height: 80, width: 80}}>
                                    <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber(6, "sudokuBoard5", "sudokuBoard1x")}</div>
                                </div>
                                <div className='bg-sudokuBoard4x pt-2' style={{height: 80, width: 80}}>
                                    <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber(9, "sudokuBoard4x", "sudokuBoard2")}</div> 
                                </div>
                            </div>

                            <div className='flex' style={{height: 160}}></div>
                        </div>

                        <div style={{marginLeft: 8}}>
                            <div className='flex items-center justify-center'>
                                <div className='bg-sudokuBoard5 pt-2' style={{height: 80, width: 80}}>
                                    <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber(4, "sudokuBoard5", "sudokuBoard1x")}</div> 
                                </div>
                                <div className='bg-sudokuBoard4x pt-2' style={{height: 80, width: 80}}>
                                    <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber(7, "sudokuBoard4x", "sudokuBoard2")}</div>
                                </div>
                                <div className='bg-sudokuBoard5 pt-2' style={{height: 80, width: 80}}>
                                    {/* THIS */}
                                    <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber(animatedNumbers.num6f, "sudokuBoard5", "sudokuBoard1x")}</div> 
                                </div>
                            </div>

                            <div className='flex'>
                                <div className='bg-sudokuBoard4x pt-2 ' style={{height: 80, width: 80}}>
                                    <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber(9, "sudokuBoard4x", "sudokuBoard2")}</div> 
                                </div>
                                <div className='bg-sudokuBoard5 pt-2' style={{height: 80, width: 80}}>
                                    <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber(8, "sudokuBoard5", "sudokuBoard1x")}</div>
                                </div>
                                <div className='bg-sudokuBoard4x pt-2' style={{height: 80, width: 80}}>
                                    <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber(2, "sudokuBoard4x", "sudokuBoard2")}</div> 
                                </div>
                            </div>

                            <div className='flex'>
                                <div className='bg-sudokuBoard4x pt-2' style={{height: 80, width: 80}}>
                                    <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber(3, "sudokuBoard5", "sudokuBoard1x")}</div> 
                                </div>
                                <div className='bg-sudokuBoard5 pt-2' style={{height: 80, width: 80}}>
                                    <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber(1, "sudokuBoard4x", "sudokuBoard2")}</div>
                                </div>
                                <div className='bg-sudokuBoard4x pt-2' style={{height: 80, width: 80}}>
                                    <div style={{marginLeft: 0, marginTop: -8}}>{sudokuNumber(5, "sudokuBoard5", "sudokuBoard1x")}</div> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='bg-sudokuBoard5 h-full flex w-108'>
                    <div className='w-3 h-full bg-sudokuBoard5'></div>
                    <div className='h-full w-104 bg-sudokuBoard5 border-l-8 border-sudokuBoard2  '>
                        <div className='h-32 w-full pl-2.5 pb-2.5 flex items-end overflow-hidden'>
                            <SixLines/>
                        </div>
                        <div className='h-80 w-full bg-sudokuBoard5 border-y-8 border-sudokuBoard2 pl-2.5 py-2 flex items-center overflow-hidden pt-3'>
                            <div className='w-full h-full space-y-2'>
                                <div className='h-fit flex'>
                                    <div className='bg-sudokuBoard2 w-1/2 h-40'></div>
                                    <div className='w-1/2  flex items-center'>
                                        <div className='w-full h-fit space-y-2 pl-2'>
                                            <SixLines/>
                                            <div className='bg-sudokuBoard2 h-3 w-full'></div>
                                            <div className='bg-sudokuBoard2 h-3 w-full'></div>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className='pt-0.5'>
                                    <SixLines/>
                                </div>
                            </div>
                        </div>
                        <div className='h-40 w-full bg-sudokuBoard5 pl-2.5 pt-2.5 overflow-hidden'>
                            <div className='w-full space-y-2'>
                                <SixLines/>
                                <div className='bg-sudokuBoard2 h-3 w-full'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Sudoku
