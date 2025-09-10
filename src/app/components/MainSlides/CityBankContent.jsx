import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import localFont from 'next/font/local'
import { pixelify_sans, inter, vt323, lora } from '../../../fonts'; 
const selawkReg = localFont({ src: '../../fonts/selawk.ttf' })
const futura = localFont({ src: '../../fonts/FuturaCyrillicBook.ttf' })
const futuraLight = localFont({ src: '../../fonts/FuturaCyrillicLight.ttf' })

import AirCanadaLogo from '../../../../public/logos/aircanada.png'
import AirCanadaPlane from '../../../../public/svg/plane.svg'
import PrestoImage from '../../../../public/svg/Presto_Card.svg'
import DuaLipa from '../../../../public/images/citybank/DuaLipa.jpg'

import CurvedDottedLine from './components/CityBank/CurvedDottedLine'
import Spotlight from './components/CityBank/Spotlight'

const rightCurvePathData = "M 0 45 Q 50 10 100 50"; // Adjust if needed
const leftCurvePathData = "M 0 48 L 100 38";

import { ScrollReveal } from './components/CityBank/ScrollReveal'

import CustomBox from './CustomBox'

function CityBankContent({ theme }  ) {
    // const buttonCSS = `${theme==="dark" ? `bg-gray-600 text-gray-200 border-gray-400 hover:bg-[#0066a3]` : 'bg-gray-50 text-gray-700 border-gray-300 hover:bg-[#0066a3] hover:text-white'} cursor-pointer w-16 rounded-md border-1 px-2`
    const solidBox = `capitalize py-1 px-4 ${theme === 'dark' ? 'bg-zinc-700 text-gray-50 hover:bg-zinc-600' : 'bg-zinc-300 text-gray-700 hover:bg-zinc-200'}`
    const borderBox = `border-1 py-1 px-4 ${theme === 'dark' ? 'border-zinc-700 text-gray-50 hover:border-zinc-600' : 'border-zinc-300 text-gray-700 hover:border-zinc-400'}`
    return (
        <div className='h-full'>
            <div className={`hidden w-full h-full  pb-4 bg-slate-500 pr-0 rounded-2xl ${futura.className}`}>
                <div className='w-full h-full flex justify-center items-center space-x-2'>
                    {/* LEFT COLUMN */}
                    <div className='w-1/2 h-full space-y-2'>
                    {/* [300px] */}
                        <div className='w-full h-1/4 bg-[#4994C4] text-gray-50 text-5xl text-center items-center flex justify-center rounded-2xl'>
                            <div className='font-bold'>City Bank</div>
                            <div className=' '>&nbsp;Wallet</div>
                        </div>
                        <div className='w-full h-3/4 bg-gray-950 rounded-2xl flex '>
                            <div className='w-1/2 px-4 pt-4'>
                                <div className='bg-[#363739] rounded-t-2xl px-0.5 w-full h-full flex justify-center pt-0.5 border-t-2 border-x-2 border-[#121214]'>
                                    <div className='bg-gray-100 rounded-t-xl w-full pt-2 border-t-1 border-x-1 border-black'>
                                        <div className='px-2 mt-0'>
                                            <Image
                                                src={DuaLipa}
                                                alt=""
                                                className='rounded-t-xl'
                                            />
                                            <div className='bg-gradient-to-b from-[#cbafce] to-[#c1a4c3] px-1 text-xs  py-0.5 '>
                                                <div className='flex justify-between items-center pt-1'>
                                                    <div className={`${futuraLight.className} text-white`}>West</div>
                                                    <div>
                                                        <div className='text-gray-100 text-sm -mb-2 text-center'>Sec</div>
                                                        <div className={`${futuraLight.className} text-white`}>102</div>
                                                    </div>
                                                    <div>
                                                        <div className='text-gray-100 text-sm -mb-2 text-center'>Row</div>
                                                        <div className={`${futuraLight.className} text-white`}>3</div>
                                                    </div>
                                                    <div>
                                                        <div className='text-gray-100 text-sm -mb-2 text-center'>Seat</div>
                                                        <div className={`${futuraLight.className} text-white`}>6</div>
                                                    </div>
                                                </div>
                                                <div className='flex justify-between pt-0 pb-0 text-xs'>
                                                    <div>Rogers Centre</div>
                                                    <div className={`${futuraLight.className} italic`}>Ticketmaster</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-1/2 overflow-hidden rounded-r-2xl h-full'>
                                <Spotlight>
                                    <div className='px-4 mt-28 text-shadow-xl text-xl leading-5 font-medium'>
                                        <div className='text-white'>Music and live events.</div>
                                        <div className='text-[#FFF799]'>Just show.</div>
                                        <div className='text-[#FFF799]'>And go.</div>
                                    </div>
                                </Spotlight>
                            </div>
                        </div>
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className='w-1/2 h-full space-y-2'>
                    {/* [360px] */}
                        <div className='w-full h-1/2 bg-white rounded-2xl overflow-hidden flex'>
                            <div className='shadow-lg rounded-t-xl border-t-2 border-x-2 border-gray-300 p-2 w-1/2 h-full ml-4 mt-4'>
                                <div className='flex items-center'>
                                    <div className='w-1/2'>
                                        <Image src={AirCanadaLogo} className='w-full' alt="Air Canada Logo" />
                                    </div>
                                    <div className='w-1/2 flex justify-end space-x-3 pt-0.5'>
                                        <div className='flex justify-end'>
                                            <div>
                                                <div className='text-gray-400 text-xxs flex justify-end -mb-1.5'>GATE</div>
                                                <div className={`text-sm text-gray-600 font-semibold ${futuraLight.className}`}>G62</div>
                                            </div>
                                        </div>
                                        <div className='flex justify-end'>
                                            <div>
                                                <div className='text-gray-400 text-xxs flex justify-end -mb-1.5'>SEAT</div>
                                                <div className={`text-sm text-gray-600 font-semibold ${futuraLight.className}`}>1D</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-end justify-between mt-0'>
                                    <div className='w-1/3'>
                                        <div className='text-gray-400 text-xxs -mb-1.5 uppercase'>Toronto</div>
                                        <div className={`text-sm text-start text-gray-600 ${futura.className}`}>YYZ</div>
                                    </div>
                                    <div className='flex justify-center items-end -mb-0.5'>
                                        <Image src={AirCanadaPlane} className='w-1/4 ' alt="" />
                                    </div>
                                    <div className='w-1/3 text-end'>
                                        <div className='text-gray-400 text-xxs -mb-1.5 uppercase'>Montreal</div>
                                        <div className={`text-sm text-gray-600 ${futura.className}`}>YUL</div>
                                    </div>
                                </div>
                                <div className='flex items-end justify-between mt-2'>
                                    <div className='w-1/4  text-start'>
                                        <div className='text-gray-400 text-xxs -mb-1.5 uppercase text-start'>Flight</div>
                                        <div className={`text-sm text-gray-600 ${futura.className}`}>AC 420</div>
                                    </div>
                                    <div className='w-1/4  text-start'>
                                        <div className='text-gray-400 text-xxs -mb-1.5 uppercase '>Date</div>
                                        <div className={`text-sm text-gray-600 ${futura.className}`}>Nov 12</div>
                                    </div>
                                    <div className='w-1/4  text-start'>
                                        <div className='text-gray-400 text-xxs -mb-1.5 uppercase '>Boarding</div>
                                        <div className={`text-sm text-gray-600 ${futura.className}`}>11:32</div>
                                    </div>
                                    <div className='w-1/4 text-end'>
                                        <div className='text-gray-400 text-xxs -mb-1.5 uppercase '>Zone</div>
                                        <div className={`text-sm text-gray-600 ${futura.className}`}>1</div>
                                    </div>
                                </div>
                                <div className='flex items-end justify-between mt-2'>
                                    <div className='w-1/2 text-start'>
                                        <div className='text-gray-400 text-xxs -mb-1.5 uppercase'>Passenger</div>
                                        <div className={`text-sm text-gray-600 ${futura.className}`}>Tianxiao Zhang</div>
                                    </div>
                                    <div className='w-1/2 text-end'>
                                        <div className='text-gray-400 text-xxs -mb-1.5 uppercase'>Class</div>
                                        <div className={`text-sm text-gray-600 ${futura.className}`}>Priority</div>
                                    </div>
                                </div>
                            </div>

                            <div className='w-1/2 h-full text-xl font-semibold leading-6 text-start items-center'>
                                <div className='w-full h-20 mt-4 relative overflow-hidden'>
                                    <CurvedDottedLine pathData={rightCurvePathData} strokeColor="#6d8c3f" strokeWidth={2} dashArray="4 4"/>
                                </div>
                                <div className='pl-7'>
                                    <div className='text-[#6d8c3f] -mt-4'>
                                        Boarding passes.
                                    </div>
                                    <div>
                                        Easier on the fly.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full h-1/2 bg-red-600 rounded-2xl hidden'>
                        </div>
                        <div className='w-full h-1/2 flex flex-col justify-between bg-black rounded-2xl'>
                            <div className='flex items-center px-0 h-1/4'>
                                <div className='bg-[#6d8c3f] h-4 w-1/2 flex items-center justify-between px-2'>
                                    <div className='bg-gray-50 rounded-full h-3 w-3'></div>
                                    <div className='bg-gray-50 rounded-full h-3 w-3'></div>
                                    <div className='bg-gray-50 rounded-full h-3 w-3'></div>
                                    <div className='bg-gray-50 rounded-full h-3 w-3'></div>
                                    <div className='bg-gray-50 rounded-full h-3 w-3'></div>
                                </div>
                                <div className='bg-[#6d8c3f] h-4 w-2/12 ml-0 flex items-center px-2 space-x-6 '>
                                    <div className='bg-gray-50 rounded-full h-3 w-3 ml-4'></div>
                                    {/* <div className='bg-gray-50 rounded-full h-3 w-3'></div> */}
                                </div>

                                <div className='bg-[#f0b733] h-12 w-4 flex items-center px-0 justify-center'>
                                    <div className='bg-gray-50 rounded-full h-4 w-4 flex justify-center items-center'>
                                        <div className='bg-black h-2 w-2 rounded-full'></div>
                                    </div>
                                </div>

                                <div className='bg-[#6d8c3f] h-4 w-3/12 ml-0 flex items-center px-2 space-x-6 '>
                                    <div className='bg-gray-50 rounded-full h-3 w-3 ml-8'></div>
                                    <div className='bg-gray-50 rounded-full h-3 w-3'></div>
                                </div>

                                <div className='bg-[#6d8c3f] h-4 w-[18px]  flex items-center  space-x-6 '>
                                </div>

                            </div>
                            
                            <div className='flex h-3/4 '>
                                <div className='w-1/2 pl-6 text-xl font-semibold text-start leading-6'>
                                    <div className='text-[#C0D695] mt-12'>Express Mode.</div>
                                    <div className='text-gray-50 '>Tap. Ride. Done.</div>
                                </div>

                                <div className='w-1/2'>
                                    <div className='bg-[#363739] ml-2 rounded-t-2xl w-8/12 h-30 flex justify-center pt-0.5 border-t border-x border-[#121214] overflow-hidden'>
                                        <div className='w-full mx-2 mt-1 bg-gray-100 h-30 rounded-t-xl border-t border-x border-[#121214]'>
                                            <div className=' rounded-t-xl  w-full  '>
                                                <Image src={PrestoImage} className='w-fit mx-1 mt-1' alt="Presto Image" />
                                            </div>
                                            <div className='h-4 px-1 mt-1 bg-white mx-1 rounded-lg shadow-md flex justify-between items-center text-gray-800 text-xs'>
                                                <div>Cash Value</div>
                                                <div>$20.00</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>                            
                            </div>
                        </div>
                    </div>

                    <div className='hidden w-[178px] h-full space-y-2'>
                        <div className='w-full h-[304px] bg-gray-400 rounded-[36px]'></div>
                        <div className={`w-full h-[46px] ${selawkReg.className} text-sm flex item-center justify-center`}>
                            <Link target="_blank" href="https://github.com/tianxiaozhang1/freecell" className={`hover:cursor-pointer items-center flex`}>
                                <div className={`${theme === 'dark' ? ' ' : '' } rounded-sm text-stone-50 bg-[#27639b] text-start px-4 py-1 w-fit `}>Visit Page</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex h-full'>
                <div className='w-1/2'>
                    <CustomBox
                        // Props for the 32x32 square
                        boxContent="City Bank"
                        boxFont={futura}
                        boxBgColor="bg-[#4994C4]"
                        boxTextColor="text-white"
                        boxFontSize="text-4xl"
                        boxTextTransform="uppercase"
                        boxTextLeading="leading-6"
                        fullBoxContent={
                            <div className='w-32 h-32 bg-[#eaf2f9] flex justify-center items-center'>
                                <div className={`${lora.className} text-center text-base lg:text-2xl leading-5`}>
                                    <div className='flex justify-center'>
                                        <div className='my-0.25 '>
                                            <div className='text-zinc-800 font-semibold'>CityBank</div>
                                            {/* -mb-2 */}
                                            {/* <div className='text-xxs text-gray-500'>TORONTO NYC PARIS MILAN</div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                        theme={theme}
                        // Props for the rest of the content
                        headingOne="City Bank"
                        headingTwo="Better banking."
                        linkText="Visit Design"
                        linkHref="https://citywallet.vercel.app/"
                        featuresTitle="Features"
                        features={['Motion Path', 'scroll animation', 'framer Motion']}
                        dependenciesTitle="Dependencies"
                        dependencies={['framer-motion', 'gsap', 'motionpathplugin']}
                    />
                </div>

                <div className={`w-1/2 h-full space-y-2 pb-5 ${futura.className} font-semibold`}>
                    <div className='w-full h-1/2 bg-[#4994C4] rounded-xl flex items-center justify-center'>
                        <ScrollReveal>
                            <div className='leading-8'>
                                <div className='text-gray-50 text-3xl'>                         
                                    Payments and Rewards
                                </div>
                                <div className='text-[#06436F] text-3xl'>
                                    Start here. Pay anywhere.
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                    <div className='w-full h-1/2 bg-[#6d8c3f] rounded-xl flex items-center justify-center'>
                        <ScrollReveal delay={0.8}>
                            <div className='leading-8'>
                                <div className='text-gray-50 text-3xl'>
                                    Transit and Tickets
                                </div>
                                <div className='text-[#C0D695] text-3xl'>
                                    Your even more mobile device.
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>

            <div className='hidden text-start pr-4 pt-2'>

                <div className='flex text-white'>
                    <div className={`${futura.className} w-32 h-32 flex items-center justify-center text-white bg-[#4994C4] uppercase text-4xl leading-6`}>
                        <div>
                            City Bank
                        </div>
                    </div>
                    <div className={`ml-4 ${selawkReg.className} items-center flex`}>
                        <div>
                            <div className={` text-2xl font-semibold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-600'}`}>City Bank</div>
                            <div className='text-lg text-gray-300'>Better banking.</div>
                            <div className='flex space-x-2 font-medium pt-2 text-sm'>
                                <Link target="_blank" href="https://github.com/tianxiaozhang1/sudoku" className={`hover:cursor-pointer`}>
                                    <div className={`${theme === 'dark' ? ' ' : '' } rounded-sm text-stone-50 bg-[#27639b] text-start px-4 py-1 w-fit`}>Visit Design</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className={`${inter.className} text-base uppercase text-gray-400 w-full border-b border-b-zinc-600 pt-4 pb-1 mb-3`}>
                    Features
                </div>

                <div className={`grid grid-cols-4 gap-2 ${selawkReg.className}`}>
                    <div className={solidBox}>Motion Path</div>
                    <div className={solidBox}>scroll animation</div>
                    <div className={solidBox}>framer Motion</div>
                    {/* <div className='bg-gray-700 text-gray-50 capitalize py-2 px-4'>scroll animation</div> */}
                </div>

                <div className={`${inter.className} text-base uppercase text-gray-400 w-full border-b border-b-zinc-600 pt-4 pb-1 mb-3`}>
                    Dependencies
                </div>

                <div className={`grid grid-cols-4 gap-2 ${selawkReg.className}`}>
                    <div className={borderBox}>framer-motion</div>
                    <div className={borderBox}>gsap</div>
                    <div className={borderBox}>motionpathplugin</div>
                    {/* <div className='bg-gray-700 text-gray-50 capitalize py-2 px-4'>scroll animation</div> */}
                </div>



            </div>
        </div>
    )
}

export default CityBankContent
