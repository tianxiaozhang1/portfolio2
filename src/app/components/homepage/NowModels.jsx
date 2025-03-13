import React from 'react'
import Link from 'next/link'

import { playfairDisplay, inter } from '../../../fonts'
import mainBG from '../../../images/now/homex2b.jpg'


function NowModels() {
    // const sectionTitle = `mt-5 md:mt-12 xl:-mt-0 flex justify-center text-center cursor-default text-4xl md:text-5xl 2xl:text-6xl text-zinc-100 drop-shadow-[0_1px_1px_rgba(100,100,100,1)] ${playfairDisplay.className}`
    // const gradientCSS = `w-full h-1/4 bg-gradient-to-b from-transparent to-zinc-950`
    // const textBow = "rounded-lg w-4 h-4 xl:w-8 xl:h-8 flex justify-center items-center text-sm xl:text-lg font-bold"

    return (
        <div className='shadow-md xl:shadow-xs rounded-3xl'>
            {/* mx-4 lg:mx-0  */}
            {/* MOBILE */}
            {/* <div className='lg:hidden h-88 rounded-3xl flex items-center justify-center'
                style={{
                    backgroundImage: `url(${bg1.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 1,
                }}
            >
                <div className='h-full w-full'>
                <div className='h-1/2 flex justify-center items-center'>
                    <div className={`text-3xl uppercase text-slate-100 mb-7 ${playfairDisplay.className}`}>
                        NOW MODELS
                    </div>
                </div>
                <div className='h-1/2 flex justify-center items-end pb-8'>

                    <div className='flex space-x-2'>
                        <div className='rounded-xl bg-slate-600 border-2 w-12 h-12 flex justify-center items-center border-slate-300 text-slate-100'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </div>

                        <div className='rounded-xl bg-slate-600 w-12 h-12 flex justify-center items-center border-2 border-slate-300'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="28"
                                fill="none"
                                viewBox="0 0 32 32"
                                >
                                <path
                                    fill="#f1f5f9"
                                    d="M18.679 15.976c0-1.435-1.2-2.598-2.679-2.598-1.48 0-2.679 1.163-2.679 2.598 0 1.434 1.2 2.597 2.679 2.597 1.48 0 2.679-1.163 2.679-2.597z"
                                ></path>
                                <path
                                    fill="#f1f5f9"
                                    fillRule="evenodd"
                                    d="M24.7 11.154c.566-2.23 1.277-6.363-1.23-7.764-2.495-1.395-5.742 1.278-7.456 2.883-1.71-1.589-5.048-4.25-7.552-2.845-2.494 1.4-1.725 5.465-1.147 7.708-2.327.64-6.315 2.02-6.315 4.84 0 2.811 3.984 4.313 6.297 4.953-.58 2.255-1.311 6.262 1.186 7.659 2.514 1.405 5.842-1.194 7.572-2.816 1.726 1.614 4.942 4.23 7.437 2.83 2.504-1.406 1.852-5.484 1.273-7.74 2.242-.641 6.235-2.11 6.235-4.886 0-2.793-4.01-4.184-6.3-4.822zm-.284 8.513a28.65 28.65 0 00-1.519-3.685 28.625 28.625 0 001.46-3.631c1.679.472 5.361 1.55 5.361 3.625 0 2.094-3.533 3.183-5.302 3.691zm-1.566 7.859c-1.862 1.045-4.628-1.456-5.902-2.645a29.352 29.352 0 002.514-3.096c1.45-.125 2.821-.329 4.064-.607.407 1.595 1.194 5.298-.676 6.348zm-13.726-.015c-1.863-1.041-1.011-4.616-.584-6.278 1.228.264 2.589.453 4.042.568.83 1.132 1.7 2.173 2.576 3.085-1.083 1.015-4.163 3.671-6.034 2.625zM2.28 15.976c0-2.102 3.661-3.173 5.378-3.643a29.257 29.257 0 001.462 3.673 29.689 29.689 0 00-1.48 3.726c-1.637-.454-5.36-1.653-5.36-3.756zM9.104 4.504c1.87-1.05 4.77 1.506 6.012 2.656a29.97 29.97 0 00-2.556 3.066c-1.41.127-2.761.33-4.003.604-.466-1.81-1.321-5.278.547-6.326zm11.275 7.073c.957.117 1.875.273 2.736.464-.259.803-.581 1.643-.96 2.504a41.165 41.165 0 00-1.776-2.968zm-4.365-3.529c.591.621 1.183 1.314 1.766 2.066a38.897 38.897 0 00-3.546 0 27.651 27.651 0 011.78-2.066zm-6.157 6.496a26.884 26.884 0 01-.954-2.517 29.762 29.762 0 012.72-.452 36.303 36.303 0 00-1.766 2.97zm1.793 5.922a28.076 28.076 0 01-2.764-.431c.264-.83.59-1.692.972-2.568a36.306 36.306 0 001.792 2.999zm4.4 3.525a28.142 28.142 0 01-1.805-2.094c1.188.045 2.378.045 3.566-.006a26.611 26.611 0 01-1.761 2.1zm6.117-6.569c.4.886.739 1.744 1.007 2.559a27.97 27.97 0 01-2.798.462c.639-.982 1.239-1.99 1.79-3.02zm-3.42 3.172a41.486 41.486 0 01-5.463.01 34.923 34.923 0 01-2.746-4.598 34.908 34.908 0 012.73-4.59c1.82-.133 3.65-.134 5.469 0a39.137 39.137 0 012.739 4.572 39.146 39.146 0 01-2.729 4.606zM22.83 4.467c1.87 1.046 1.038 4.76.63 6.376a31.597 31.597 0 00-4.012-.615 29.379 29.379 0 00-2.536-3.069c1.258-1.175 4.066-3.728 5.918-2.692z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </div>
                    </div>
                
                </div>
                </div>
            </div> */}

            {/* DESKTOP */}
            {/* <div className='hidden lg:flex'>
                <div className={`bg-white md:w-160 md:h-200 xl:w-316 xl:h-152 rounded-3xl overflow-hidden border-4 border-slate-100`}>
                    <div className={`${playfairDisplay.className} h-1/6 flex justify-between items-center px-60 mt-4 -mb-2`}>
                        <div className='uppercase text-4xl'>now models</div>
                        <div className='text-lg flex justify-between space-x-3 text-slate-500'>
                            <div className='text-slate-800'>Toronto</div>
                            <div>New York</div>
                            <div>Paris</div>
                            <div>Milan</div>
                        </div>
                    </div>
                    <div className='h-4/6 px-80 '>
                        <div className='xl:grid xl:grid-cols-4 gap-2 mx-2'>
                            {
                                modelCategories.map((category, i) => {
                                return  <div key={i}>
                                            <a href={`/${category.name}`}  className="flex justify-center items-end"
                                                style={{
                                                    background: `url(${category.image.src})`,
                                                    backgroundSize: 'cover',
                                                    backgroundPosition: 'center',
                                                    height: 442,
                                                    opacity: 1,
                                                }} 
                                                
                                            >   
                                                <div className={gradientCSS}>
                                                    <div className={sectionTitle}>
                                                        {category.name}
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                })
                            }
                        </div>
                    </div>
                    <div className='h-1/6 flex justify-end items-end '>
                        <div className='text-xl mt-12 mb-6 mr-6 flex items-center justify-center '>
                            <div className={`border-2 border-slate-300 flex ${textBow} mr-2`}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    fill="none"
                                    viewBox="0 0 32 32"
                                    >
                                    <path
                                        fill="#64748b"
                                        d="M18.679 15.976c0-1.435-1.2-2.598-2.679-2.598-1.48 0-2.679 1.163-2.679 2.598 0 1.434 1.2 2.597 2.679 2.597 1.48 0 2.679-1.163 2.679-2.597z"
                                    ></path>
                                    <path
                                        fill="#64748b"
                                        fillRule="evenodd"
                                        d="M24.7 11.154c.566-2.23 1.277-6.363-1.23-7.764-2.495-1.395-5.742 1.278-7.456 2.883-1.71-1.589-5.048-4.25-7.552-2.845-2.494 1.4-1.725 5.465-1.147 7.708-2.327.64-6.315 2.02-6.315 4.84 0 2.811 3.984 4.313 6.297 4.953-.58 2.255-1.311 6.262 1.186 7.659 2.514 1.405 5.842-1.194 7.572-2.816 1.726 1.614 4.942 4.23 7.437 2.83 2.504-1.406 1.852-5.484 1.273-7.74 2.242-.641 6.235-2.11 6.235-4.886 0-2.793-4.01-4.184-6.3-4.822zm-.284 8.513a28.65 28.65 0 00-1.519-3.685 28.625 28.625 0 001.46-3.631c1.679.472 5.361 1.55 5.361 3.625 0 2.094-3.533 3.183-5.302 3.691zm-1.566 7.859c-1.862 1.045-4.628-1.456-5.902-2.645a29.352 29.352 0 002.514-3.096c1.45-.125 2.821-.329 4.064-.607.407 1.595 1.194 5.298-.676 6.348zm-13.726-.015c-1.863-1.041-1.011-4.616-.584-6.278 1.228.264 2.589.453 4.042.568.83 1.132 1.7 2.173 2.576 3.085-1.083 1.015-4.163 3.671-6.034 2.625zM2.28 15.976c0-2.102 3.661-3.173 5.378-3.643a29.257 29.257 0 001.462 3.673 29.689 29.689 0 00-1.48 3.726c-1.637-.454-5.36-1.653-5.36-3.756zM9.104 4.504c1.87-1.05 4.77 1.506 6.012 2.656a29.97 29.97 0 00-2.556 3.066c-1.41.127-2.761.33-4.003.604-.466-1.81-1.321-5.278.547-6.326zm11.275 7.073c.957.117 1.875.273 2.736.464-.259.803-.581 1.643-.96 2.504a41.165 41.165 0 00-1.776-2.968zm-4.365-3.529c.591.621 1.183 1.314 1.766 2.066a38.897 38.897 0 00-3.546 0 27.651 27.651 0 011.78-2.066zm-6.157 6.496a26.884 26.884 0 01-.954-2.517 29.762 29.762 0 012.72-.452 36.303 36.303 0 00-1.766 2.97zm1.793 5.922a28.076 28.076 0 01-2.764-.431c.264-.83.59-1.692.972-2.568a36.306 36.306 0 001.792 2.999zm4.4 3.525a28.142 28.142 0 01-1.805-2.094c1.188.045 2.378.045 3.566-.006a26.611 26.611 0 01-1.761 2.1zm6.117-6.569c.4.886.739 1.744 1.007 2.559a27.97 27.97 0 01-2.798.462c.639-.982 1.239-1.99 1.79-3.02zm-3.42 3.172a41.486 41.486 0 01-5.463.01 34.923 34.923 0 01-2.746-4.598 34.908 34.908 0 012.73-4.59c1.82-.133 3.65-.134 5.469 0a39.137 39.137 0 012.739 4.572 39.146 39.146 0 01-2.729 4.606zM22.83 4.467c1.87 1.046 1.038 4.76.63 6.376a31.597 31.597 0 00-4.012-.615 29.379 29.379 0 00-2.536-3.069c1.258-1.175 4.066-3.728 5.918-2.692z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </div>

                            <div className={`border-2 border-slate-300 text-slate-500 rounded-xl py-1.5 px-3 uppercase text-xs ${inter.className}`}>Visit Site</div>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* <div className='w-92 h-78 md:w-190 md:h-132 lg:w-252 lg:h-120 xl:w-316 xl:h-152
                            rounded-3xl overflow-hidden border-slate-200 border-2'>
                <div className='w-full h-2/5 grid grid-cols-6'>
                    
                </div>
                <div className='w-full h-1/5 flex items-center justify-center text-center'>
                    <div className={`${playfairDisplay.className}`}>
                        <div className='uppercase text-3xl md:text-4xl lg:text-5xl xl:text-6xl -mt-2 lg:-mt-3 xl:-mt-4 -mb-2 lg:-mb-3 xl:-mb-4'>now models</div>
                        <div className='flex space-x-4 text-slate-600 justify-between'>
                            <div className=''>Toronto</div>
                            <div>New York</div>
                            <div>Paris</div>
                            <div>Milan</div>
                        </div>
                    </div>
                </div>
                <div className='w-full h-2/5'></div>

            </div> */}

                {/* MOBILE */}
                <Link target="_blank" href="https://nowmodels.vercel.app/" rel="noopener noreferrer">
                    <div className='w-92 h-78 md:w-190 md:h-132 lg:hidden
                                    rounded-3xl overflow-hidden
                                    flex items-center justify-center text-center
                                    '
                        style={{
                            background: `url(${mainBG.src})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            opacity: 1,
                        }} 
                    >                   
                            <div className='w-full flex justify-center h-1/5 items-center'>
                                <div className={`${playfairDisplay.className} cursor-default`}>
                                    <div className='uppercase text-3xl md:text-4xl lg:text-5xl xl:text-6xl -mt-2 lg:-mt-3 xl:-mt-4 -mb-2 lg:-mb-3 xl:-mb-4 text-stone-50
                                                    drop-shadow-[0_1px_1px_rgba(100,100,100,1)
                                                    '>
                                        now models
                                    </div>
                                    <div className='flex space-x-4 text-stone-200 justify-between'>
                                        <div className=''>Toronto</div>
                                        <div>New York</div>
                                        <div>Paris</div>
                                        <div>Milan</div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </Link>

                {/* DESKTOP */}
                <div className='hidden lg:flex lg:w-252 lg:h-120 xl:w-316 xl:h-152
                                rounded-3xl overflow-hidden items-center justify-center text-center
                                '
                    style={{
                        background: `url(${mainBG.src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        opacity: 1,
                    }} 
                >
                    <div className='h-full w-full'>
                        <div className='h-2/5 w-full '></div>                    
                        <div className='w-full flex justify-center h-1/5 items-center'>
                            <div className={`${playfairDisplay.className} cursor-default`}>
                                <div className='uppercase text-3xl md:text-4xl lg:text-5xl xl:text-6xl -mt-2 lg:-mt-3 xl:-mt-4 -mb-2 lg:-mb-3 xl:-mb-4 text-stone-50
                                                drop-shadow-[0_1px_1px_rgba(100,100,100,1)
                                                '>
                                    now models
                                </div>
                                <div className='flex space-x-4 text-stone-200 justify-between'>
                                    <div className=''>Toronto</div>
                                    <div>New York</div>
                                    <div>Paris</div>
                                    <div>Milan</div>
                                </div>
                            </div>
                        </div>
                        <div className='hidden h-2/5 lg:flex justify-end items-end'>
                            <Link target="_blank" href="https://nowmodels.vercel.app/" rel="noopener noreferrer">
                                <div className={`hover:text-slate-50 hover:bg-slate-800 hover:border-slate-700 border-2 border-stone-300 text-stone-200 rounded-xl py-1.5 px-3 mb-6 mr-6 uppercase text-xs ${inter.className}`}>Visit Site</div>
                            </Link>
                        </div>
                    </div>


                </div>

            {/* </a> */}
        </div>
    )
}

export default NowModels
