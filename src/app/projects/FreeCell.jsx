import React from 'react'
import Link from 'next/link'

import Card from '../components/FreeCell/Card'

const Freecell = () => {
    return (
        <div>
            {/* <div className='bg-freeCellBoard  flex items-center border-freeCellBoardLight border-4' style={{height: 408, width: 640, overflow: 'hidden'}}>
                    <div>
                        <div className='h-16 '>

                        </div>

                        <div className='flex'>
                            <div style={{marginLeft: -115}}>
                                <Card Number="Ten" Suit="Diamond" Colour1="bg-freeCellWhite" Colour2="bg-freeCellRed"/>
                            </div>

                            <div style={{ marginLeft: 15}}>
                                <Card Number="Jack" Suit="Free" Colour1="bg-freeCellWhite" Colour2="bg-freeCellBlack"/>
                            </div>

                            <div style={{marginLeft: 15}}>
                                <Card Number="Queen" Suit="Cell" Colour1="bg-freeCellWhite" Colour2="bg-freeCellRed"/>
                            </div>

                            <div style={{marginLeft: 15}}>
                                <Card Number="King" Suit="Spade" Colour1="bg-freeCellWhite" Colour2="bg-freeCellBlack"/>
                            </div>
                        </div>

                        <div className='h-16 flex items-end'>
                            <div className='text-freeCellWhite flex justify-center items-center' style={{width: 56, height: 56, marginLeft: 576}}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-10 -rotate-45">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            </div>
                        </div>        
                    </div>
            </div> */}
            <Link target="_blank" href="https://github.com/tianxiaozhang1/freecell" rel="noopener noreferrer">   
                <div className='flex'>
                    <div className='w-92 h-78 md:w-190 md:h-132 lg:w-252 lg:h-120 xl:w-316 xl:h-152 bg-freeCellBoard rounded-[3vw] md:rounded-[4vw] lg:rounded-[5vw] xl:rounded-[6vw] border-freeCellBoardLight border-[1.5vw] lg:border-[1vw] mx-auto flex justify-center items-center cursor-pointer'>
                        <div className='xl:w-260 xl:h-116 xl:rounded-[3.5vw] bg-freeCellBoardLight flex justify-center items-center rounded-3xl overflow-hidden'>
                            <div className='xl:w-252 xl:h-108 xl:rounded-[3vw] bg-freeCellBoard flex justify-center items-center rounded-3xl'>
                                <div className='flex md:space-x-4 scale-75 md:scale-75 lg:scale-100'>
                                    <div className='hidden md:flex'>
                                        <Card Number="Ten" Suit="Diamond" Colour1="bg-freeCellWhite" Colour2="bg-freeCellRed"/>
                                    </div>
                                    <div className='mr-2 md:mr-0'>
                                        <Card Number="Jack" Suit="Free" Colour1="bg-freeCellWhite" Colour2="bg-freeCellBlack"/>
                                    </div>

                                    <div className='ml-2 md:ml-0'>
                                        <Card Number="Queen" Suit="Cell" Colour1="bg-freeCellWhite" Colour2="bg-freeCellRed"/>
                                    </div>

                                    <div className='hidden md:flex'>
                                        <Card Number="King" Suit="Spade" Colour1="bg-freeCellWhite" Colour2="bg-freeCellBlack"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
  }
  
  export default Freecell