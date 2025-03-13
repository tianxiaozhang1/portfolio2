import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import i1 from '../../../images/momenta/i1.jpg'
import i2 from '../../../images/momenta/i2.jpg'
import i14 from '../../../images/momenta/i3.jpg'
import i3 from '../../../images/momenta/i4.jpg'
import i5 from '../../../images/momenta/i5.jpg'
import i6 from '../../../images/momenta/i6.jpg'
import i7 from '../../../images/momenta/i7.jpg'
import i8 from '../../../images/momenta/i8.jpg'
import i9 from '../../../images/momenta/i9.jpg'
import i10 from '../../../images/momenta/i10.jpg'
import i11 from '../../../images/momenta/i11.jpg'
import i12 from '../../../images/momenta/i12.jpg'
import i13 from '../../../images/momenta/i13.jpg'
import i4 from '../../../images/momenta/i14.jpg'
import i15 from '../../../images/momenta/i15.jpg'
import i16 from '../../../images/momenta/i16.jpg'
import i17 from '../../../images/momenta/i17.jpg'
import i18 from '../../../images/momenta/i18.jpg'

import smbg from '../../../images/momenta/smbg.jpg'
import lgbg from '../../../images/momenta/lgbg.jpg'

import { roboto, inter, pt_sans_narrow } from '../../../fonts'

const ImageTile = ({imageName, bg}) => {
    return (
        <div className={`rounded-3xl p-0 ${bg}`}>
            <div className='bg-white p-1 rounded-3xl'>
                <div className='rounded-lg'>
                    <Image src={imageName} className="rounded-3xl w-32" alt={imageName}/>
                </div>
            </div>
        </div>
    )
}

const textBow = "rounded-lg w-4 h-4 xl:w-8 xl:h-8 flex justify-center items-center text-xs lg:text-base font-semibold"

function Momenta() {
    return (
        <div>
            {/* MOBILE */}

            <a target="_blank" href="https://momenta-flax.vercel.app/" rel="noopener noreferrer">
                <div className='w-92 h-78 md:w-190 md:h-132 lg:hidden overflow-hidden rounded-3xl flex justify-center items-center shadow-sm' style={{
                        backgroundImage: `url(${smbg.src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        opacity: 1,
                    }}>

                    <div>
                        <div className='h-2/5'><div className='h-12'></div></div>
                        <div className='h-18 w-18 -mt-1 md:-mt-1.5 md:h-22 md:w-22 border-2 md:border-3 border-slate-100 rounded-xl'></div>    
                        <div className='h-2/5'>
                            <div className={`h-12 -mt-1 md:-mt-1.5 text-xl md:text-2xl flex justify-center text-center text-slate-200
                                            ${pt_sans_narrow.className}`}
                            >momenta</div>
                        </div>
                    </div>
                </div>
            </a>

            {/* DESKTOP */}

            <div className='hidden lg:flex justify-center items-center'>
                <div className='lg:w-252 lg:h-120 xl:w-316 xl:h-152 
                                overflow-hidden rounded-3xl flex justify-center items-center' 
                        style={{
                            backgroundImage: `url(${lgbg.src})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            opacity: 1,
                        }}
                >
                    <div className='h-full w-full'>
                        <div className='h-2/5 w-full'></div>
                        <div className='h-1/5 w-full flex justify-center items-center'>
                            <div className='h-26 w-26 xl:h-32 -mt-2 xl:w-32 border-4 border-slate-50 rounded-2xl'></div> 
                        </div>
                        <div className='h-2/5 w-full'>
                            <div className='h-1/2'>
                                <div className={`h-12 -mt-2 lg:text-3xl xl:text-4xl flex items-start justify-center text-center text-white  drop-shadow-[0_2px_2px_rgba(100,100,100,1)]
                                                    ${pt_sans_narrow.className}`}
                                >
                                    momenta
                                </div>
                            </div>
                            <div className='h-1/2 mt-2 flex justify-end items-end'>
                                <Link target="_blank" href="https://momenta-flax.vercel.app/" rel="noopener noreferrer">
                                    <div className={`hover:text-stone-100 hover:bg-[#2f8d99] hover:border-[#18525c] border-2 border-slate-100 text-slate-50 rounded-xl py-1.5 px-3 mb-6 mr-6 uppercase text-xs ${inter.className}`}>Visit Site</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* <div>
                        <div className='h-2/5'></div>
                        <div className='flex justify-center items-center h-1/5'>
                            <div className='h-26 w-26 xl:h-32 xl:w-32 -mt-2 border-4 border-slate-50 rounded-2xl'></div> 
                        </div>
                        <div>
                            <div className='h-2/5'>
                                <div className={`h-12 -mt-2 lg:text-3xl xl:text-4xl flex items-start justify-center text-center text-white  drop-shadow-[0_2px_2px_rgba(100,100,100,1)]
                                                ${pt_sans_narrow.className}`}
                                >momenta</div>
                            </div>
                        </div>
                    </div>     */}
                </div>
            </div>

            {/* HIDDEN */}

            <div className='hidden w-92 h-78 md:w-190 md:h-132 lg:w-252 lg:h-120 xl:w-316 xl:h-152 overflow-hidden bg-white rounded-3xl drop-shadow-[0_2px_2px_rgba(100,100,100,0.8)]'>
                <div className='flex h-full justify-center items-center'>

                    <div className=' flex justify-center items-center w-40 h-40 border-8 rounded-2xl border-slate-50'>
                        <div className=' flex justify-center items-center w-32 h-32 border-8 rounded-2xl border-slate-100'>
                            <div className='flex justify-center items-center w-24 h-24 border-8 rounded-2xl border-slate-200'>
                                <div className='rounded-xl camera-gradient flex justify-center items-center w-16 h-16 mt-0'>
                                    <div className='rounded-full bg-neutral-50 flex justify-center items-center w-12 h-12'>
                                        <div className='rounded-full lens-gradient w-10 h-10'></div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className='text-camera-gradient lg:text-3xl xl:text-4xl font-semibold flex justify-center text-center text-slate-400'>momenta</div>
                        </div>
                    </div>

                </div>
                <div className='hidden h-2/3 px-6'>
                    <div className='w-1/3 flex justify-center'>
                        <div className='space-y-2'>
                            {/* <Image
                                src={i1} alt="X"
                                className='xl:max-w-108 xl:-ml-22 xl:mt-42
                                        max-w-24 rounded-xl'
                            /> */}
                            <div className='w-24 h-24 camera-gradient flex justify-center items-center rounded-2xl'>
                                {/* <div className='w-22 h-22 bg-white rounded-2xl flex justify-center items-center'> */}
                                    <Image
                                        src={i1} alt="X"
                                        className='xl:max-w-108 xl:-ml-22 xl:mt-42
                                                max-w-22 rounded-2xl'
                                    />
                                {/* </div> */}
                            </div>
                            <Image
                                src={i16} alt="X"
                                className='xl:max-w-108 xl:-ml-22 xl:mt-42
                                        max-w-24 rounded-xl'
                            />
                        </div>
                    </div>
                    <div className='w-1/3 flex justify-center pt-6'>
                        <div className='space-y-2'>
                            <Image
                                src={i12} alt="X"
                                className='xl:max-w-108 xl:-ml-22 xl:mt-42
                                        max-w-24 rounded-xl'
                            />
                            <Image
                                src={i8} alt="X"
                                className='xl:max-w-108 xl:-ml-22 xl:mt-42
                                        max-w-24 rounded-xl'
                            />
                        </div>
                    </div>
                    <div className='w-1/3 flex justify-center'>
                        <div className='space-y-2'>
                            <Image
                                src={i17} alt="X"
                                className='xl:max-w-108 xl:-ml-22 xl:mt-42
                                        max-w-24 rounded-xl'
                            />
                            <Image
                                src={i6} alt="X"
                                className='xl:max-w-108 xl:-ml-22 xl:mt-42
                                        max-w-24 rounded-xl'
                            />
                        </div>
                    </div>
                </div>
            </div>

            

            {/* DESKTOP */}
            <div>
                {/* <div className='md:w-160 md:h-200 xl:w-320 xl:h-176 rounded-3xl overflow-hidden border-2 border-slate-100 bg-neutral-50'>
                    <div className='w-full h-1/4 flex'>
                        <div className='w-1/5 flex justify-center'>
                            <div className='w-36 h-36'>
                                <ImageTile imageName={i4} />
                            </div>
                        </div>
                        <div className='w-1/5 flex justify-end -mt-8'>
                            <div className='w-42 h-42'>
                                <ImageTile imageName={i1} />
                            </div>
                        </div>
                        <div className='w-1/5 flex justify-end'>
                            <div className='w-28 h-28'>
                                <ImageTile imageName={i3} />
                            </div>
                        </div>
                        <div className='w-1/5 flex justify-center -mt-12 overflow-hidden'>
                            <div className='w-36 h-36'>
                                <ImageTile imageName={i4} />
                            </div>
                        </div>
                        <div className='w-1/5 flex justify-end -mt-4 -ml-4'>
                            <div className='w-46 h-46'>
                                <ImageTile imageName={i5} />
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-1/2 flex'>
                        <div className='w-1/3 flex'>
                            <div className='w-1/2 flex justify-center items-center mt-12'>
                                <div className='w-36 h-36'>
                                    <ImageTile imageName={i11} />
                                </div>
                            </div>
                            <div className='w-1/2 flex justify-end items-center -mt-16 -mr-16'>
                                <div className='w-36 h-36'>
                                    <ImageTile imageName={i12} />
                                </div>
                            </div>
                        </div>

                        <div className='w-1/3 flex justify-center items-center '>
                            <div className=''>
                                <div className='flex justify-center items-center h-56 w-56  '>
                                    <div>
                                        <div className='flex justify-center'>
                                            <div className='rounded-2xl camera-gradient flex justify-center items-center w-20 h-20 mt-2'>
                                                <div className='rounded-full bg-neutral-50 flex justify-center items-center w-16 h-16'>
                                                    <div className='rounded-full lens-gradient w-14 h-14'></div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className='text-camera-gradient text-6xl font-semibold flex justify-center text-center text-slate-500'>momenta</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-1/3 flex'>
                            <div className='w-1/2 flex justify-center items-start mt-12 ml-6'>
                                <div className='w-32 h-32 -ml-16'>
                                    <ImageTile imageName={i10} />
                                </div>
                                <div className='w-36 h-36 ml-6 mt-6'>
                                    <ImageTile imageName={i13} />
                                </div>
                            </div>
                            <div className='w-1/2 flex justify-start items-end mb-12 -mr-20 ml-8 mt-2'>
                                <div className='w-32 h-32'>
                                    <ImageTile imageName={i14} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-1/4 flex'>
                        <div className='w-1/5 flex justify-center items-end mb-2'>
                            <div className='w-36 h-36'>
                                <ImageTile imageName={i6} />
                            </div>
                        </div>
                        <div className='w-1/5 flex justify-end -mt-8'>
                            <div className='w-46 h-46'>
                                <ImageTile imageName={i7} />
                            </div>
                        </div>
                        <div className='w-1/5 flex justify-end items-end mb-2'>
                            <div className='w-28 h-28'>
                                <ImageTile imageName={i8} />
                            </div>
                        </div>
                        <div className='w-1/5 flex justify-center -mt-12 overflow-hidden ml-8 -mr-20'>
                            <div className='w-36 h-36'>
                                <ImageTile imageName={i9} />
                            </div>
                        </div>
                        <div className='w-1/5 flex justify-end -mt-4 -ml-4'>
                            
                        </div>
                    </div>
                </div> */}
                {/* <div className='hidden lg:flex bg-white w-full xl:h-176 my-0 rounded-3xl shadow-xl border-2 border-slate-100 overflow-hidden'>
                    <div className='w-1/6 flex justify-end'>
                        <div className='w-4/5 px-6 flex justify-center items-center'>
                            <div className='space-y-12'>
                                <ImageTile imageName={i4}/>
                                <ImageTile imageName={i3}/>
                                <ImageTile imageName={i4}/>
                                <ImageTile imageName={i1}/>
                            </div>
                        </div>                
                    </div>

                    <div className='w-2/3 flex'>
                        <div className='w-1/5 px-6 flex justify-center items-center'>
                            <div className='space-y-12'>
                                <ImageTile imageName={i5}/>
                                <ImageTile imageName={i6}/>
                                <ImageTile imageName={i7}/>
                            </div>
                        </div>
                        <div className='w-1/5 px-6 flex justify-center items-center'>
                            <div className='space-y-12'>
                                <ImageTile imageName={i8}/>
                                <ImageTile imageName={i9}/>
                                <ImageTile imageName={i10}/>
                                <ImageTile imageName={i11}/>
                            </div>
                        </div>

                        MIDDLE
                        <div className='w-1/5 px-6 flex justify-center items-center'>
                            <div className='space-y-12'>
                                <div className='-mb-1'><ImageTile imageName={i12}/></div>
                                
                                <div className='flex justify-center my-1'>
                                    <div>
                                        <div className='rounded-3xl camera-gradient flex justify-center items-center w-40 h-40 mt-10'>
                                            <div className='rounded-full bg-neutral-50 flex justify-center items-center w-32 h-32'>
                                                <div className='rounded-full lens-gradient w-28 h-28'></div>
                                            </div>
                                        </div>
                                        
                                        <div className='text-slate-400 text-xl font-semibold flex justify-center'>momenta</div>
                                    </div>
                                </div>

                                <div className='-mt-1'><ImageTile imageName={i13}/></div>
                            </div>
                        </div>
                        <div className='w-1/5 px-6 flex justify-center items-center'>
                            <div className='space-y-12'>
                                <ImageTile imageName={i4}/>
                                <ImageTile imageName={i3}/>
                                <ImageTile imageName={i4}/>
                                <ImageTile imageName={i4}/>
                            </div>
                        </div>
                        <div className='w-1/5 px-6 flex justify-center items-center'>
                            <div className='space-y-12'>
                                <ImageTile imageName={i16}/>
                                <ImageTile imageName={i15}/>
                                <ImageTile imageName={i14}/>
                            </div>
                        </div>
                    </div>

                    <div className='w-1/6 flex justify-start h-full '>
                        <div className='w-full flex justify-center items-center h-full'>
                            <div className=' h-full w-full'>
                                <div className='h-1/5  w-4/5 overflow-hidden flex items-end px-6 -mt-8 mb-9'>
                                    <ImageTile imageName={i17}/>
                                </div>
                                
                                <div className='h-3/5 w-4/5 px-6 flex justify-center items-center'>
                                    <div className='space-y-12'>
                                        <ImageTile imageName={i18}/>
                                        <ImageTile imageName={i4}/>
                                    </div>
                                </div>
                                <div className='h-1/5 flex items-end justify-end'>
                                    <div className='text-xl mb-10 mr-12 flex items-center'>
                                        <div className={`${roboto.className} border-2 border-stone-400 text-stone-400 ${textBow} mr-1`}>
                                            dj
                                        </div>

                                        <div className={`border-2 border-stone-400 text-stone-400 flex ${textBow} mr-2`}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                fill="none"
                                                viewBox="0 0 32 32"
                                                >
                                                <path
                                                    fill="#a8a29e"
                                                    d="M18.679 15.976c0-1.435-1.2-2.598-2.679-2.598-1.48 0-2.679 1.163-2.679 2.598 0 1.434 1.2 2.597 2.679 2.597 1.48 0 2.679-1.163 2.679-2.597z"
                                                ></path>
                                                <path
                                                    fill="#a8a29e"
                                                    fillRule="evenodd"
                                                    d="M24.7 11.154c.566-2.23 1.277-6.363-1.23-7.764-2.495-1.395-5.742 1.278-7.456 2.883-1.71-1.589-5.048-4.25-7.552-2.845-2.494 1.4-1.725 5.465-1.147 7.708-2.327.64-6.315 2.02-6.315 4.84 0 2.811 3.984 4.313 6.297 4.953-.58 2.255-1.311 6.262 1.186 7.659 2.514 1.405 5.842-1.194 7.572-2.816 1.726 1.614 4.942 4.23 7.437 2.83 2.504-1.406 1.852-5.484 1.273-7.74 2.242-.641 6.235-2.11 6.235-4.886 0-2.793-4.01-4.184-6.3-4.822zm-.284 8.513a28.65 28.65 0 00-1.519-3.685 28.625 28.625 0 001.46-3.631c1.679.472 5.361 1.55 5.361 3.625 0 2.094-3.533 3.183-5.302 3.691zm-1.566 7.859c-1.862 1.045-4.628-1.456-5.902-2.645a29.352 29.352 0 002.514-3.096c1.45-.125 2.821-.329 4.064-.607.407 1.595 1.194 5.298-.676 6.348zm-13.726-.015c-1.863-1.041-1.011-4.616-.584-6.278 1.228.264 2.589.453 4.042.568.83 1.132 1.7 2.173 2.576 3.085-1.083 1.015-4.163 3.671-6.034 2.625zM2.28 15.976c0-2.102 3.661-3.173 5.378-3.643a29.257 29.257 0 001.462 3.673 29.689 29.689 0 00-1.48 3.726c-1.637-.454-5.36-1.653-5.36-3.756zM9.104 4.504c1.87-1.05 4.77 1.506 6.012 2.656a29.97 29.97 0 00-2.556 3.066c-1.41.127-2.761.33-4.003.604-.466-1.81-1.321-5.278.547-6.326zm11.275 7.073c.957.117 1.875.273 2.736.464-.259.803-.581 1.643-.96 2.504a41.165 41.165 0 00-1.776-2.968zm-4.365-3.529c.591.621 1.183 1.314 1.766 2.066a38.897 38.897 0 00-3.546 0 27.651 27.651 0 011.78-2.066zm-6.157 6.496a26.884 26.884 0 01-.954-2.517 29.762 29.762 0 012.72-.452 36.303 36.303 0 00-1.766 2.97zm1.793 5.922a28.076 28.076 0 01-2.764-.431c.264-.83.59-1.692.972-2.568a36.306 36.306 0 001.792 2.999zm4.4 3.525a28.142 28.142 0 01-1.805-2.094c1.188.045 2.378.045 3.566-.006a26.611 26.611 0 01-1.761 2.1zm6.117-6.569c.4.886.739 1.744 1.007 2.559a27.97 27.97 0 01-2.798.462c.639-.982 1.239-1.99 1.79-3.02zm-3.42 3.172a41.486 41.486 0 01-5.463.01 34.923 34.923 0 01-2.746-4.598 34.908 34.908 0 012.73-4.59c1.82-.133 3.65-.134 5.469 0a39.137 39.137 0 012.739 4.572 39.146 39.146 0 01-2.729 4.606zM22.83 4.467c1.87 1.046 1.038 4.76.63 6.376a31.597 31.597 0 00-4.012-.615 29.379 29.379 0 00-2.536-3.069c1.258-1.175 4.066-3.728 5.918-2.692z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                        </div>

                                        <div className='border-2 border-stone-400 text-stone-400 font-semibold text-md rounded-3xl py-2 px-4'>momenta</div>
                                    </div>
                                </div>
                            </div>
                        </div>                
                    </div>
                </div> */}

                {/* <div className='md:w-160 md:h-200 xl:w-320 xl:h-176 rounded-3xl overflow-hidden border-4 border-slate-50 bg-white shadow-md my-18'>
                    <div className='w-full h-2/3 flex'>
                        <div className='h-full w-1/3 flex'>
                            <div className='h-full w-1/3 px-2 flex items-end'>
                                <div className='space-y-4 mb-104'>
                                    <ImageTile imageName={i17} />
                                </div>
                            </div>
                            <div className='h-full w-1/3 px-2 flex items-end'>
                                <div className='space-y-4 mb-78'>
                                    <ImageTile imageName={i15}   />
                                    <ImageTile imageName={i16} />
                                </div>
                            </div>
                            <div className='h-full w-1/3 px-2 flex items-end'>
                                <div className='space-y-4 mb-52'>
                                    <ImageTile imageName={i13} />
                                    <ImageTile imageName={i14}   />
                                </div>
                            </div>
                        </div>
                        <div className='h-full w-1/3 flex'>
                            <div className='h-full w-1/3 px-2 flex items-end'>
                                <div className='space-y-4 mb-26'>
                                    <ImageTile imageName={i5} />
                                    <ImageTile imageName={i6} />
                                    <ImageTile imageName={i7} bg={`camera-gradient`} />
                                </div>
                            </div>
                            <div className='h-full w-1/3 px-2 flex items-end'> 
                                <div className='space-y-4'>
                                    <ImageTile imageName={i4} />
                                    <ImageTile imageName={i1} />
                                    <ImageTile imageName={i3} />
                                    <ImageTile imageName={i4} bg={`momenta-gradient1`} />
                                </div>
                            </div>
                            <div className='h-full w-1/3 px-2 flex items-end'>
                                <div className='space-y-4 mb-26'>
                                    <ImageTile imageName={i8} />
                                    <ImageTile imageName={i9} />
                                    <ImageTile imageName={i10} bg={`momenta-gradient2`} />
                                </div>
                            </div>
                        </div>
                        <div className='h-full w-1/3 flex'>
                            <div className='h-full w-1/3 px-2 flex items-end'>
                                <div className='space-y-4 mb-52'>
                                    <ImageTile imageName={i11} />
                                    <ImageTile imageName={i12} bg={`momenta-gradient3`} />
                                </div>
                            </div>
                            <div className='h-full w-1/3 px-2 flex items-end'>
                                <div className='space-y-4 mb-78'>
                                    <ImageTile imageName={i17} />
                                    <ImageTile imageName={i18} />
                                </div>
                            </div>
                            <div className='h-full w-1/3 px-2 flex items-end'>
                                <div className='space-y-4 mb-104'>
                                    <ImageTile imageName={i17} bg={`camera-gradient`} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-full h-1/3 flex justify-center items-center'>
                        <div className='w-1/3'></div>

                        <div className='w-1/3'>
                            <div className='flex justify-center'>
                                <div className='rounded-2xl camera-gradient flex justify-center items-center w-20 h-20 mt-2'>
                                    <div className='rounded-full bg-neutral-50 flex justify-center items-center w-16 h-16'>
                                        <div className='rounded-full lens-gradient w-14 h-14'></div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className='text-camera-gradient text-4xl font-semibold flex justify-center text-center text-slate-500'>momenta</div>
                        </div>

                        <div className='h-full w-1/3 flex items-end justify-end'>
                            <div className='text-xl mt-16 mb-6 mr-8 flex'>
                                <div className={`border-2 border-slate-300 text-slate-400 ${textBow} mr-2`}>dj</div>
                                <div className={`border-2 border-slate-300 flex ${textBow} mr-2`}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        fill="none"
                                        viewBox="0 0 32 32"
                                        >
                                        <path
                                            fill="#94a3b8"
                                            d="M18.679 15.976c0-1.435-1.2-2.598-2.679-2.598-1.48 0-2.679 1.163-2.679 2.598 0 1.434 1.2 2.597 2.679 2.597 1.48 0 2.679-1.163 2.679-2.597z"
                                        ></path>
                                        <path
                                            fill="#94a3b8"
                                            fillRule="evenodd"
                                            d="M24.7 11.154c.566-2.23 1.277-6.363-1.23-7.764-2.495-1.395-5.742 1.278-7.456 2.883-1.71-1.589-5.048-4.25-7.552-2.845-2.494 1.4-1.725 5.465-1.147 7.708-2.327.64-6.315 2.02-6.315 4.84 0 2.811 3.984 4.313 6.297 4.953-.58 2.255-1.311 6.262 1.186 7.659 2.514 1.405 5.842-1.194 7.572-2.816 1.726 1.614 4.942 4.23 7.437 2.83 2.504-1.406 1.852-5.484 1.273-7.74 2.242-.641 6.235-2.11 6.235-4.886 0-2.793-4.01-4.184-6.3-4.822zm-.284 8.513a28.65 28.65 0 00-1.519-3.685 28.625 28.625 0 001.46-3.631c1.679.472 5.361 1.55 5.361 3.625 0 2.094-3.533 3.183-5.302 3.691zm-1.566 7.859c-1.862 1.045-4.628-1.456-5.902-2.645a29.352 29.352 0 002.514-3.096c1.45-.125 2.821-.329 4.064-.607.407 1.595 1.194 5.298-.676 6.348zm-13.726-.015c-1.863-1.041-1.011-4.616-.584-6.278 1.228.264 2.589.453 4.042.568.83 1.132 1.7 2.173 2.576 3.085-1.083 1.015-4.163 3.671-6.034 2.625zM2.28 15.976c0-2.102 3.661-3.173 5.378-3.643a29.257 29.257 0 001.462 3.673 29.689 29.689 0 00-1.48 3.726c-1.637-.454-5.36-1.653-5.36-3.756zM9.104 4.504c1.87-1.05 4.77 1.506 6.012 2.656a29.97 29.97 0 00-2.556 3.066c-1.41.127-2.761.33-4.003.604-.466-1.81-1.321-5.278.547-6.326zm11.275 7.073c.957.117 1.875.273 2.736.464-.259.803-.581 1.643-.96 2.504a41.165 41.165 0 00-1.776-2.968zm-4.365-3.529c.591.621 1.183 1.314 1.766 2.066a38.897 38.897 0 00-3.546 0 27.651 27.651 0 011.78-2.066zm-6.157 6.496a26.884 26.884 0 01-.954-2.517 29.762 29.762 0 012.72-.452 36.303 36.303 0 00-1.766 2.97zm1.793 5.922a28.076 28.076 0 01-2.764-.431c.264-.83.59-1.692.972-2.568a36.306 36.306 0 001.792 2.999zm4.4 3.525a28.142 28.142 0 01-1.805-2.094c1.188.045 2.378.045 3.566-.006a26.611 26.611 0 01-1.761 2.1zm6.117-6.569c.4.886.739 1.744 1.007 2.559a27.97 27.97 0 01-2.798.462c.639-.982 1.239-1.99 1.79-3.02zm-3.42 3.172a41.486 41.486 0 01-5.463.01 34.923 34.923 0 01-2.746-4.598 34.908 34.908 0 012.73-4.59c1.82-.133 3.65-.134 5.469 0a39.137 39.137 0 012.739 4.572 39.146 39.146 0 01-2.729 4.606zM22.83 4.467c1.87 1.046 1.038 4.76.63 6.376a31.597 31.597 0 00-4.012-.615 29.379 29.379 0 00-2.536-3.069c1.258-1.175 4.066-3.728 5.918-2.692z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </div>

                                <div className={`border-2 border-slate-300 text-slate-400 rounded-xl py-1.5 px-3 uppercase text-xs ${inter.className}`}>Visit Site</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-400 bg-white border-4 border-stone-200 h-152 mx-auto rounded-3xl my-6'>
                    <div className='flex items-center space-x-2 h-48  overflow-hidden'>
                        <ImageTile imageName={i11} />
                        <ImageTile imageName={i12} />
                        <ImageTile imageName={i13} />
                        <ImageTile imageName={i14} />
                        <ImageTile imageName={i15} />
                        <ImageTile imageName={i16} />
                        <ImageTile imageName={i11} />
                        <ImageTile imageName={i12} />
                    </div>
                    <div className='flex items-center space-x-2 h-48  overflow-hidden'>
                        <ImageTile imageName={i11} />
                        <ImageTile imageName={i12} />
                        <ImageTile imageName={i13} />
                        <ImageTile imageName={i14} />
                        <ImageTile imageName={i15} />
                        <ImageTile imageName={i16} />
                        <ImageTile imageName={i11} />
                        <ImageTile imageName={i12} />
                    </div>

                    <div className='flex items-center space-x-2 h-48  overflow-hidden'>
                        <ImageTile imageName={i11} className="-ml-12" />
                        <ImageTile imageName={i11} />
                        <ImageTile imageName={i12} />
                        <ImageTile imageName={i13} />
                        <ImageTile imageName={i14} />
                        <ImageTile imageName={i15} />
                        <ImageTile imageName={i16} />
                        <ImageTile imageName={i11} />
                        <ImageTile imageName={i12} />
                    </div>
                    
                    
                </div> */}

                <div className='hidden md:w-160 md:h-200 lg:w-252 lg:h-120 xl:w-316 xl:h-152 rounded-3xl overflow-hidden bg-white drop-shadow-[0_2px_2px_rgba(100,100,100,0.5)]'>
                    <div>
                        <div className='w-full h-2/3 flex'>
                            <div className='h-full w-1/3 flex'>
                                <div className='h-full w-1/3 px-2 flex items-end'>
                                    {/* <div className='space-y-4 mb-104'>
                                        <ImageTile imageName={i17} />
                                    </div> */}
                                </div>
                                <div className='h-full w-1/3 px-2 flex items-end'>
                                    <div className='space-y-8 mb-78'>
                                        <ImageTile imageName={i15} />
                                        <ImageTile imageName={i16} />
                                    </div>
                                </div>
                                <div className='h-full w-1/3 px-2 flex items-end'>
                                    <div className='space-y-8 mb-52'>
                                        <ImageTile imageName={i13} />
                                        <ImageTile imageName={i14}   />
                                    </div>
                                </div>
                            </div>
                            <div className='h-full w-1/3 flex'>
                                <div className='h-full w-1/3 px-2 flex items-end'>
                                    <div className='space-y-8 mb-26'>
                                        <ImageTile imageName={i5} />
                                        <ImageTile imageName={i8} />
                                        <ImageTile imageName={i7}/>
                                    </div>
                                </div>
                                <div className='h-full w-1/3 px-2 flex items-end'> 
                                    <div className='space-y-8'>
                                        <ImageTile imageName={i4} />
                                        <ImageTile imageName={i1} />
                                        <ImageTile imageName={i3} />
                                        <ImageTile imageName={i17} />
                                    </div>
                                </div>
                                <div className='h-full w-1/3 px-2 flex items-end'>
                                    <div className='space-y-8 mb-26'>
                                        <ImageTile imageName={i8} />
                                        <ImageTile imageName={i9} />
                                        <ImageTile imageName={i10} />
                                    </div>
                                </div>
                            </div>
                            <div className='h-full w-1/3 flex'>
                                <div className='h-full w-1/3 px-2 flex items-end'>
                                    <div className='space-y-8 mb-52'>
                                        <ImageTile imageName={i11} />
                                        <ImageTile imageName={i12} />
                                    </div>
                                </div>
                                <div className='h-full w-1/3 px-2 flex items-end'>
                                    <div className='space-y-8 mb-78'>
                                        <ImageTile imageName={i17} />
                                        <ImageTile imageName={i18} />
                                    </div>
                                </div>
                                <div className='h-full w-1/3 px-2 flex items-end'>
                                    {/* <div className='space-y-4 mb-104'>
                                        <ImageTile imageName={i17} bg={`camera-gradient`} />
                                    </div> */}
                                </div>
                            </div>
                        </div>

                        <div className='w-full h-1/3 flex justify-center items-center'>
                            <div className='w-1/3'></div>

                            <div className='w-1/3'>
                                <div className='flex justify-center'>
                                    <div className='rounded-2xl camera-gradient flex justify-center items-center w-20 h-20 mt-2'>
                                        <div className='rounded-full bg-neutral-50 flex justify-center items-center w-16 h-16'>
                                            <div className='rounded-full lens-gradient w-14 h-14'></div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className='text-camera-gradient lg:text-3xl xl:text-4xl font-semibold flex justify-center text-center text-slate-500'>momenta</div>
                            </div>

                            <div className='h-full w-1/3 flex items-end justify-end'>
                                <div className='mt-16 mb-5 mr-5 flex'>
                                    <div className={`border-2 border-slate-300 text-slate-400 rounded-xl py-1.5 px-3 uppercase text-xs ${inter.className}`}>Visit Site</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className='shadow-md rounded-3xl hidden lg:flex
                                lg:w-252 lg:h-120 xl:w-316 xl:h-152 bg-slate-50'>
                    <div className='w-1/3 flex justify-center items-center'>
                        <div className=' h-56 w-56  '>
                            <div>
                                <div className='flex justify-center'>
                                    <div className='rounded-2xl camera-gradient flex justify-center items-center w-20 h-20 mt-2'>
                                        <div className='rounded-full bg-neutral-50 flex justify-center items-center w-16 h-16'>
                                            <div className='rounded-full lens-gradient w-14 h-14'></div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className={`text-camera-gradient text-5xl font-semibold flex justify-center text-center text-slate-400 ${pt_sans_narrow}`}>momenta</div>
                            </div>
                        </div>
                    </div>
                    <div className='w-2/3 flex overflow-hidden'>
                        <div className='w-1/5 items-end flex'>
                            <div className='space-y-12 mb-10'>
                                <div className='w-36 h-36'>
                                    <ImageTile imageName={i1} />
                                </div>
                            </div>
                        </div>
                        <div className='w-1/5 items-end flex '>
                            <div className='space-y-12 -mb-14'>
                                <div className='w-36 h-36'>
                                    <ImageTile imageName={i12} />
                                </div>
                                <div className='w-36 h-36'>
                                    <ImageTile imageName={i15} />
                                </div>
                            </div>
                        </div>
                        <div className='w-1/5 items-end flex'>
                            <div className='space-y-12 mb-10'>
                                <div className='w-36 h-36'>
                                    <ImageTile imageName={i4} />
                                </div>
                                <div className='w-36 h-36'>
                                    <ImageTile imageName={i5} />
                                </div>
                            </div>
                        </div>
                        <div className='w-1/5 items-end flex'>
                            <div className='space-y-12 -mb-14'>
                                <div className='w-36 h-36'>
                                    <ImageTile imageName={i14} />
                                </div>
                                <div className='w-36 h-36'>
                                    <ImageTile imageName={i7} />
                                </div>
                                <div className='w-36 h-36'>
                                    <ImageTile imageName={i17} />
                                </div>
                                
                            </div>
                        </div>
                        <div className='w-1/5 items-end flex'>
                            <div className='space-y-12 mb-10'>
                                <div className='w-36 h-36'>
                                    <ImageTile imageName={i9} />
                                </div>
                                <div className='w-36 h-36'>
                                    <ImageTile imageName={i10} />
                                </div>
                                <div className='w-36 h-36'>
                                    <ImageTile imageName={i11} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Momenta
