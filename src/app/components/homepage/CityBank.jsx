import React from 'react'
import Image from "next/image";
import Link from 'next/link'

import {  roboto, orbitron, pt_sans_narrow, inter } from '../../../fonts';
// aldrich,
import { Aldrich, Cinzel } from 'next/font/google';
const aldrich = Aldrich({ subsets: ['latin'], weight: "400" })
const cinzel = Cinzel({ subsets: ['latin'] })

import Phone from '../../components/Phone'
import PhoneContent from '../../components/CityBank/PhoneContent'
import BankWatch from '../../components/CityBank/BankWatch';
import BankLaptop from '../../components/CityBank/BankLaptop';
import BankPhone from '../../components/CityBank/BankPhone';

import appStoreLogo from '../../../images/citybank/appstore.svg'
import googlePlayLogo from '../../../images/citybank/googleplay.svg'


import card1 from '../../../images/citybank/card5a.png'
// import googlePlayLogo from '../../../images/citybank/googleplay.svg'
// import googlePlayLogo from '../../../images/citybank/googleplay.svg'
// import googlePlayLogo from '../../../images/citybank/googleplay.svg'

// import batteryIcon from '../../../images/citybank/battery-full-icon.svg'

import Couch from '../CityBank/Couch'

// import CreditCardOne from './components/CityBank/CreditCardOne'
// import CreditCardOne from '../CityBank/CreditCardOne'
// import CreditCardTwo from '../CityBank/CreditCardTwo'
// import CreditCardThree from '../CityBank/CreditCardThree'
// import CreditCardFour from '../CityBank/CreditCardFour'

import pixelMap from '../../../images/citybank/pixelmap2.png'

import car from '../../../images/citybank/emojis/car.png'
import creditcard from '../../../images/citybank/emojis/creditcard.png'
import plane from '../../../images/citybank/emojis/plane.png'
import ticket from '../../../images/citybank/emojis/ticket.png'
import id from '../../../images/citybank/emojis/id.png'

import arena from '../../../images/citybank/emojis/arena.png'
import train from '../../../images/citybank/emojis/train.png'
import bus from '../../../images/citybank/emojis/bus.png'
import gaming from '../../../images/citybank/emojis/gaming.png'
import food from '../../../images/citybank/emojis/food.png'

import drink from '../../../images/citybank/emojis/drink.png'
import rollercoaster from '../../../images/citybank/emojis/rollercoaster.png'
import taxi from '../../../images/citybank/emojis/taxi.png'
import shopping from '../../../images/citybank/emojis/shopping.png'
import store from '../../../images/citybank/emojis/store.png'

import park from '../../../images/citybank/emojis/park.png'

import porsche from '../../../images/citybank/logos/Porsche.png'
import merc from '../../../images/citybank/logos/mercedes.png'
import CAA from '../../../images/citybank/logos/CAA.png'
import Starbucks from '../../../images/citybank/logos/Starbucks.png'
import Indigo from '../../../images/citybank/logos/Indigo.svg'
import Shell from '../../../images/citybank/logos/Shell.png'

import AirCanada from '../../../images/citybank/logos/AirCanada.png'
import planeSvg from '../../../images/citybank/logos/plane.svg'
import Audi from '../../../images/citybank/logos/Audi.svg'

import AirMiles from '../../../images/citybank/logos/AirMiles.png'
import BurgerShack from '../../../images/citybank/logos/BurgerShack.png'

// const textBow = "rounded-lg w-4 h-4 xl:w-8 xl:h-8 flex justify-center items-center text-sm xl:text-lg font-bold"
const topThreeCards = "w-56 h-28 lg:w-56 lg:h-28 xl:w-70 xl:h-28 rounded-t-2xl mx-auto"
const CreditCardChip = () => {
    return (
        <div className='h-17 xl:h-24 pl-7 xl:pl-8 flex md:pt-3 lg:pt-2 xl:pt-4'>
            <div className='h-7 w-9 xl:h-8 xl:w-10 bg-gradient-to-br from-yellow-300 to-yellow-600 rounded-md flex justify-between xl:mt-0.5 xl:ml-0.5'>
                <div className='w-1/3 border-r-1.5 border-yellow-300'>
                    <div className='h-1/4 border-b-1.5 border-yellow-300'></div>
                    <div className='h-1/4 border-b-1.5 border-yellow-300'></div>
                    <div className='h-1/4 border-b-1.5 border-yellow-300'></div>
                </div>
                <div className='w-1/3 border-yellow-300'>
                    <div className='h-1/4'></div>
                    <div className='h-1/4 border-l-1.5 border-t-1.5 border-yellow-400'></div>
                    <div className='h-1/4 border-l-1.5 border-t-1.5 border-yellow-400'></div>
                    <div className='h-1/4 border-l-1.5 border-t-1.5 border-yellow-400'></div>
                </div>
            </div>

            <div className='xl:hidden mt-0.5 ml-0.5'>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="#dcdcdc" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.3 19.5002C17.4 17.2002 18 14.7002 18 12.0002C18 9.30024 17.4 6.70024 16.3 4.50024M12.7 17.8003C13.5 16.0003 14 14.0003 14 12.0003C14 10.0003 13.5 7.90034 12.7 6.10034M9.1001 16.1001C9.7001 14.8001 10.0001 13.4001 10.0001 12.0001C10.0001 10.6001 9.7001 9.10015 9.1001 7.90015M5.5 14.3003C5.8 13.6003 6 12.8003 6 12.0003C6 11.2003 5.8 10.3003 5.5 9.60034" stroke="#b7c1ca" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>

            <div className='hidden xl:flex mt-0.5 ml-0.5'>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="#dcdcdc" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.3 19.5002C17.4 17.2002 18 14.7002 18 12.0002C18 9.30024 17.4 6.70024 16.3 4.50024M12.7 17.8003C13.5 16.0003 14 14.0003 14 12.0003C14 10.0003 13.5 7.90034 12.7 6.10034M9.1001 16.1001C9.7001 14.8001 10.0001 13.4001 10.0001 12.0001C10.0001 10.6001 9.7001 9.10015 9.1001 7.90015M5.5 14.3003C5.8 13.6003 6 12.8003 6 12.0003C6 11.2003 5.8 10.3003 5.5 9.60034" stroke="#b7c1ca" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
        </div>
    )
}

const CellularIcon = () => {
    return (
        <svg fill="#20293b" width="12px" height="12px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M472,432H424a24,24,0,0,1-24-24V104a24,24,0,0,1,24-24h48a24,24,0,0,1,24,24V408A24,24,0,0,1,472,432Z"/><path d="M344,432H296a24,24,0,0,1-24-24V184a24,24,0,0,1,24-24h48a24,24,0,0,1,24,24V408A24,24,0,0,1,344,432Z"/><path d="M216,432H168a24,24,0,0,1-24-24V248a24,24,0,0,1,24-24h48a24,24,0,0,1,24,24V408A24,24,0,0,1,216,432Z"/><path d="M88,432H40a24,24,0,0,1-24-24V312a24,24,0,0,1,24-24H88a24,24,0,0,1,24,24v96A24,24,0,0,1,88,432Z"/></svg>                         
    )
}

const XLCellularIcon = () => {
    return (
        <svg fill="#20293b" width="14px" height="14px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M472,432H424a24,24,0,0,1-24-24V104a24,24,0,0,1,24-24h48a24,24,0,0,1,24,24V408A24,24,0,0,1,472,432Z"/><path d="M344,432H296a24,24,0,0,1-24-24V184a24,24,0,0,1,24-24h48a24,24,0,0,1,24,24V408A24,24,0,0,1,344,432Z"/><path d="M216,432H168a24,24,0,0,1-24-24V248a24,24,0,0,1,24-24h48a24,24,0,0,1,24,24V408A24,24,0,0,1,216,432Z"/><path d="M88,432H40a24,24,0,0,1-24-24V312a24,24,0,0,1,24-24H88a24,24,0,0,1,24,24v96A24,24,0,0,1,88,432Z"/></svg>                         
    )
}

const WifiIcon = () => {
    return (
        <svg fill="#20293b" height="12px" width="14px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
                viewBox="0 0 365.892 365.892" xmlSpace="preserve">
            <g>
                <circle cx="182.945" cy="286.681" r="41.494"/>
                <path d="M182.946,176.029c-35.658,0-69.337,17.345-90.09,46.398c-5.921,8.288-4.001,19.806,4.286,25.726
                    c3.249,2.321,6.994,3.438,10.704,3.438c5.754,0,11.423-2.686,15.021-7.724c13.846-19.383,36.305-30.954,60.078-30.954
                    c23.775,0,46.233,11.571,60.077,30.953c5.919,8.286,17.437,10.209,25.726,4.288c8.288-5.92,10.208-17.438,4.288-25.726
                    C252.285,193.373,218.606,176.029,182.946,176.029z"/>
                <path d="M182.946,106.873c-50.938,0-99.694,21.749-133.77,59.67c-6.807,7.576-6.185,19.236,1.392,26.044
                    c3.523,3.166,7.929,4.725,12.32,4.725c5.051-0.001,10.082-2.063,13.723-6.116c27.091-30.148,65.849-47.439,106.336-47.439
                    s79.246,17.291,106.338,47.438c6.808,7.576,18.468,8.198,26.043,1.391c7.576-6.808,8.198-18.468,1.391-26.043
                    C282.641,128.621,233.883,106.873,182.946,106.873z"/>
                <path d="M360.611,112.293c-47.209-48.092-110.305-74.577-177.665-74.577c-67.357,0-130.453,26.485-177.664,74.579
                    c-7.135,7.269-7.027,18.944,0.241,26.079c3.59,3.524,8.255,5.282,12.918,5.281c4.776,0,9.551-1.845,13.161-5.522
                    c40.22-40.971,93.968-63.534,151.344-63.534c57.379,0,111.127,22.563,151.343,63.532c7.136,7.269,18.812,7.376,26.08,0.242
                    C367.637,131.238,367.745,119.562,360.611,112.293z"/>
            </g>
        </svg>
    )
}

const XLWifiIcon = () => {
    return (
        <svg fill="#20293b" height="14px" width="14px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
                viewBox="0 0 365.892 365.892" xmlSpace="preserve">
            <g>
                <circle cx="182.945" cy="286.681" r="41.494"/>
                <path d="M182.946,176.029c-35.658,0-69.337,17.345-90.09,46.398c-5.921,8.288-4.001,19.806,4.286,25.726
                    c3.249,2.321,6.994,3.438,10.704,3.438c5.754,0,11.423-2.686,15.021-7.724c13.846-19.383,36.305-30.954,60.078-30.954
                    c23.775,0,46.233,11.571,60.077,30.953c5.919,8.286,17.437,10.209,25.726,4.288c8.288-5.92,10.208-17.438,4.288-25.726
                    C252.285,193.373,218.606,176.029,182.946,176.029z"/>
                <path d="M182.946,106.873c-50.938,0-99.694,21.749-133.77,59.67c-6.807,7.576-6.185,19.236,1.392,26.044
                    c3.523,3.166,7.929,4.725,12.32,4.725c5.051-0.001,10.082-2.063,13.723-6.116c27.091-30.148,65.849-47.439,106.336-47.439
                    s79.246,17.291,106.338,47.438c6.808,7.576,18.468,8.198,26.043,1.391c7.576-6.808,8.198-18.468,1.391-26.043
                    C282.641,128.621,233.883,106.873,182.946,106.873z"/>
                <path d="M360.611,112.293c-47.209-48.092-110.305-74.577-177.665-74.577c-67.357,0-130.453,26.485-177.664,74.579
                    c-7.135,7.269-7.027,18.944,0.241,26.079c3.59,3.524,8.255,5.282,12.918,5.281c4.776,0,9.551-1.845,13.161-5.522
                    c40.22-40.971,93.968-63.534,151.344-63.534c57.379,0,111.127,22.563,151.343,63.532c7.136,7.269,18.812,7.376,26.08,0.242
                    C367.637,131.238,367.745,119.562,360.611,112.293z"/>
            </g>
        </svg>
    )
}

const BatteryIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" 
            fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512 258.25" fill="currentColor"><path fillRule="nonzero" fill="currentColor"
            d="M472.06 38.53v29.62h27.84c3.36 0 6.38 1.37 8.55 3.55 2.19 2.19 3.55 5.25 3.55 8.55v97.76c0 3.32-1.39 6.37-3.56 8.54-2.17 2.16-5.22 3.56-8.54 3.56h-27.84v29.61c0 21.2-17.35 38.53-38.53 38.53h-395C17.33 258.25 0 240.93 0 219.72V38.53C0 17.35 17.37 0 38.53 0h395c21.22 0 38.53 17.31 38.53 38.53zm-69.88 10.01c8.57 0 15.59 7.13 15.59 15.59v129.99c0 8.46-7.13 15.59-15.59 15.59H69.88c-8.46 0-15.58-7.02-15.58-15.59V64.13c0-8.57 7.01-15.59 15.58-15.59h332.3zm44.42 168.41V41.3c0-8.69-7.15-15.84-15.83-15.84H41.3c-8.71 0-15.84 7.13-15.84 15.84v175.65c0 8.68 7.17 15.84 15.84 15.84h389.47c8.69 0 15.83-7.12 15.83-15.84z"/>
        </svg>
    )
}

const emojiClassName = "w-6 md:w-10 lg:w-12 xl:w-16"

const Emojis = () => {
    return (
        <div>
            <div className='flex space-x-2 items-center'>
                <Image
                    src={car}
                    alt="X"
                    className={`${emojiClassName}`}
                />
                <Image
                    src={creditcard}
                    alt="X"
                    className={`${emojiClassName}`}
                />
                <Image
                    src={train}
                    alt="X"
                    className={`${emojiClassName}`}
                />
                <Image
                    src={ticket}
                    alt="X"
                    className={`${emojiClassName}`}
                />
                <Image
                    src={plane}
                    alt="X"
                    className={`${emojiClassName}`}
                />
                
            </div>
            <div className='flex space-x-2 items-center'>
                <Image
                    src={arena}
                    alt="X"
                    className={`${emojiClassName}`}
                />
                <Image
                    src={bus}
                    alt="X"
                    className={`${emojiClassName}`}
                />
                <Image
                    src={id}
                    alt="X"
                    className={`${emojiClassName}`}
                />
                <Image
                    src={gaming}
                    alt="X"
                    className={`${emojiClassName}`}
                />
                <Image
                    src={food}
                    alt="X"
                    className={`${emojiClassName}`}
                />
                
            </div>
            <div className='flex space-x-2 items-center'>
                <Image
                    src={rollercoaster}
                    alt="X"
                    className={`${emojiClassName}`}
                />
                <Image
                    src={store}
                    alt="X"
                    className={`${emojiClassName}`}
                />
                <Image
                    src={drink}
                    alt="X"
                    className={`${emojiClassName}`}
                />
                <Image
                    src={taxi}
                    alt="X"
                    className={`${emojiClassName}`}
                />
                <Image
                    src={shopping}
                    alt="X"
                    className={`${emojiClassName}`}
                />
                
            </div>
        </div>
    )
}

function CityBank() {
    return (
        <div className='rounded-3xl overflow-hidden bg-white border-4 shadow-md'>
            <div className='hidden w-92 h-78 md:w-190 md:h-132 lg:hidden
                              items-center justify-center 
                            '>
                <div>
                    <div className='flex items-center justify-center'>
                        <div className='w-1/3 flex justify-end pr-0'>
                            <div className='h-33 w-27 bg-slate-300 rounded-2xl flex justify-center items-center'>
                                <div className='h-32 w-26 bg-slate-900 rounded-2xl border-2 border-slate-400'>
                                    <div className='mt-1.5 h-3.5 px-2 w-full text-xxs font-semibold flex justify-between'>
                                        <div className='text-blue-400'>Banking</div>
                                        <div className='text-slate-300'>10:02</div>
                                    </div>
                                    <div className='h-24 w-full px-2 space-y-1 overflow-hidden'>
                                        <div className='bg-gradient-to-b from-blue-900 to-blue-950 h-10 pl-1 rounded-md'>
                                            <div className='text-slate-200 text-sm'>$4,596.02</div>
                                            <div className='text-slate-300 uppercase leading-[1] text-xxs'>chequing account</div>
                                        </div>
                                        <div className='bg-gradient-to-b from-blue-900 to-blue-950 h-8 pl-1 rounded-md'>
                                            <div className='text-slate-200 text-sm'>$24,098.86</div>
                                            <div className='text-slate-300 uppercase leading-[1] text-xxs'>savings account</div>
                                        </div>
                                        <div className='bg-gradient-to-b from-blue-900 to-black h-8 pl-1 rounded-md'>
                                            <div className='text-slate-200 text-sm'>$12,968.18</div>
                                            <div className='text-slate-300 uppercase leading-[1] text-xxs'>savings account</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-1/3 flex justify-center'>
                            <div className='h-33 w-27 bg-slate-300 rounded-2xl flex justify-center items-center'>
                                <div className='h-32 w-26 bg-slate-900 rounded-2xl border-2 border-slate-400'>
                                    <div className='mt-1.5 h-3.5 px-2 w-full text-xxs font-semibold flex justify-between'>
                                        <div className='text-lime-500'>Credit</div>
                                        <div className='text-slate-300'>10:02</div>
                                    </div>
                                    <div className='h-24 w-full px-2 space-y-1 overflow-hidden'>
                                        <div className="relative size-20 ">
                                            <svg className="size-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                                                {/* Background Circle */}
                                                <circle cx="18" cy="18" r="15" fill="none" className="stroke-current text-cangJia" strokeWidth="4"></circle>
                                                {/* Progress Circle */}
                                                <circle cx="18" cy="18" r="15" fill="none" className="stroke-current text-cuiWei" strokeWidth="4" strokeDasharray="50" strokeDashoffset="2" strokeLinecap="round"></circle>
                                            </svg>

                                            {/* Percentage Text */}
                                            <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                                <span className="text-center text-base font-bold text-cangJia">52%</span>
                                                <div className='text-tingWuLv text-center -mt-1.5 text-xxs'>/$10,000</div>
                                            </div>

                                            <div className='text-xxxs uppercase text-tingWuLv flex justify-center'>City Credit Card</div>
                                            <div className='flex justify-center space-x-1 mt-0.5'>
                                                <div className='h-1 w-1 bg-tingWuLv rounded-full'></div>
                                                <div className='h-1 w-1 bg-cangJia rounded-full'></div>
                                                <div className='h-1 w-1 bg-tingWuLv rounded-full'></div>
                                                <div className='h-1 w-1 bg-tingWuLv rounded-full'></div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='w-1/3 flex pl-0'>
                            <div className='h-33 w-27 bg-slate-300 rounded-2xl flex justify-center items-center'>
                                <div className='h-32 w-26 bg-slate-900 rounded-2xl border-2 border-slate-400'>
                                    <div className='mt-1.5 h-3.5 px-2 w-full text-xxs font-semibold flex justify-between'>
                                        <div className='text-ziPu'>Markets</div>
                                        <div className='text-slate-300'>10:02</div>
                                    </div>
                                    <div className='h-24 w-full px-2 space-y-1.5 overflow-hidden'>
                                        <div className='flex justify-between'>
                                            <div className='text-purple-300 text-sm'>APPL</div>
                                            <div className='flex justify-center items-center text-slate-100 text-xs px-0.5 bg-qiGu rounded-md'>+0.25%</div>
                                        </div>
                                        <div className='flex justify-between'>
                                            <div className='text-purple-300 text-sm'>NVDA</div>
                                            <div className='flex justify-center items-center text-slate-100 text-xs px-0.5 bg-luoShenZhu rounded-md'>-0.14%</div>
                                        </div>
                                        <div className='flex justify-between'>
                                            <div className='text-purple-300 text-sm'>AMD</div>
                                            <div className='flex justify-center items-center text-slate-100 text-xs px-0.5 bg-qiGu rounded-md'>+0.12%</div>
                                        </div>
                                        <div className='flex justify-between'>
                                            <div className='text-purple-300 text-sm'>SPOT</div>
                                            <div className='flex justify-center items-center text-slate-100 text-xs px-0.5 bg-qiGu rounded-md'>+0.22%</div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=' flex justify-center items-center mt-6'>
                        <div className='flex'>
                            <div className={`bg-rouLan text-slate-100 h-10 w-10 flex justify-center items-center text-xl mr-2 rounded-lg shadow-sm ${aldrich.className}`}>CB</div>

                            <Link  target="_blank" href="https://citybank-three.vercel.app/" rel="noopener noreferrer" className={`${aldrich.className} mt-0.5`}>
                                <div className={`text-2xl md:text-4xl font-bold text-rouLan`}>CITY BANK</div>
                            </Link>
                        </div>
                    </div>
                    <div className='flex justify-center mt-1 text-rouLan font-semibold -mb-2'>
                        Better Banking. Everywhere.
                    </div>
                </div>
        
            </div>

            {/* SMALL */}
            <div className='w-92 h-78 flex justify-center items-center md:hidden'>
                <div className=''>
                    <div className='w-58 px-4 -mt-2'>
                        <div className='h-58 w-50 bg-slate-300 rounded-[9vw] flex justify-center items-center'>
                            <div className='h-54 w-46 bg-slate-900 rounded-[8vw] border-4 border-slate-700 overflow-hidden'>
                                <div className='mt-1 mb-1.5 h-5 px-6 w-full text-sm font-semibold flex justify-between'>
                                    <div className='text-blue-100'>City Wallet</div>
                                    <div className='text-slate-300'>10:02</div>
                                </div>
                                <div className='h-44 overflow-hidden flex text-center justify-center items-center'>
                                    <div className='px-1 w-full h-full text-kongQueLan text-base rounded-xl'>
                                        <div>
                                            <div className='flex space-x-1'>
                                                <div className='flex w-10 p-1 h-10 bg-zinc-100 rounded-full justify-center items-center'>
                                                    <Image
                                                        src={rollercoaster}
                                                        className="w-7 h-5"
                                                        alt=""
                                                    />
                                                </div>

                                                <div className='flex w-10 p-1 h-10 bg-sky-100 rounded-full justify-center items-center'>
                                                    <Image
                                                        src={plane}
                                                        className="w-7 h-6"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className='flex w-10 p-1 h-10 bg-orange-100 rounded-full justify-center items-center'>
                                                    <Image
                                                        src={id}
                                                        className="w-7 h-5"
                                                        alt=""
                                                    />
                                                </div>

                                                <div className='flex w-10 p-1 h-10 bg-indigo-100 rounded-full justify-center items-center'>
                                                    <Image
                                                        src={food}
                                                        className="w-7 h-6"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                            <div className='flex space-x-1 mt-1'>
                                                <div className='flex w-10 p-1 h-10 bg-teal-100 rounded-full justify-center items-center'>
                                                    <Image
                                                        src={taxi}
                                                        className="w-7 h-5"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className='flex w-10 p-1 h-10 bg-amber-100 rounded-full justify-center items-center'>
                                                    <Image
                                                        src={store}
                                                        className="w-6 h-6"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className='flex w-10 p-1 h-10 bg-violet-100 rounded-full justify-center items-center'>
                                                    <Image
                                                        src={gaming}
                                                        className="w-7 h-5"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className='flex w-10 p-1 h-10 bg-white rounded-full justify-center items-center'>
                                                    <Image
                                                        src={train}
                                                        className="w-7 h-6"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                            <div className='flex space-x-1 mt-1'>
                                                <div className='flex w-10 p-1 h-10 bg-lime-100 rounded-full justify-center items-center'>
                                                    <Image
                                                        src={arena}
                                                        className="w-7 h-7"
                                                        alt=""
                                                    />
                                                </div>

                                                <div className='flex w-10 p-1 h-10 bg-red-100 rounded-full justify-center items-center'>
                                                    <Image
                                                        src={bus}
                                                        className="w-7 h-5"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className='flex w-10 p-1 h-10 bg-blue-100 rounded-full justify-center items-center'>
                                                    <Image
                                                        src={creditcard}
                                                        className="w-7 h-5"
                                                        alt=""
                                                    />
                                                </div>

                                                <div className='flex w-10 p-1 h-10 bg-green-100 rounded-full justify-center items-center'>
                                                    <Image
                                                        src={ticket}
                                                        className="w-7 h-5"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                            <div className='flex space-x-1 mt-1'>
                                                <div className='flex w-10 p-1 h-10 bg-cyan-100 rounded-full justify-center items-center'>
                                                    <Image
                                                        src={drink}
                                                        className="w-7 h-6"
                                                        alt=""
                                                    />
                                                </div>

                                                <div className='flex w-10 p-1 h-10 bg-yellow-100 rounded-full justify-center items-center'>
                                                    <Image
                                                        src={shopping}
                                                        className="w-7 h-6"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className='flex w-10 p-1 h-10 bg-stone-50 rounded-full justify-center items-center'>
                                                    <Image
                                                        src={car}
                                                        className="w-7 h-4"
                                                        alt=""
                                                    />
                                                </div>

                                                <div className='flex w-10 p-1 h-10 bg-white rounded-full justify-center items-center'>
                                                    <Image
                                                        src={park}
                                                        className="w-6 h-6"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                            {/* <div className='mt-1'>all at once.</div> */}
                                            {/* <div className='flex items-center justify-center h-7 bg-lime-500 w-full rounded-b-3xl text-slate-50 bg-gradient-to-br from-kongQueLan to-rouLan'>all at once.</div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-58 flex items-center justify-center text-center h-8 text-rouLan text-xl mt-2'>
                        <div>
                            <div className='font-bold mt-3 flex text-center justify-center items-center'>
                                <div className={`${aldrich.className}`}>
                                    <div className='font-bold mt-0.25'>City Bank</div>
                                </div>
                                <div className='-mt-0.25'>&nbsp;App.</div>
                            </div>
                            <div className='font-bold -mt-2.5'><div className={``}>Everything's at hand.</div></div>
                        </div>
                    </div>
                </div>
            </div>



            {/* MEDIUM AND UP */}
            <div className='w-92 h-78 hidden md:flex md:w-190 md:h-132 lg:flex lg:w-252 lg:h-120 xl:w-316 xl:h-152
                            items-center justify-center 
                            '>
                <div className='w-full h-full justify-center items-center flex '>

                    <div className='hidden h-36 md:h-46 justify-center items-center text-center font-bold text-2xl md:text-4xl'>
                        <div>
                            {/* <div className='-mb-2'>Add a credit or debit card.</div>
                            <div className='text-kongQueLan -mt-2'>With no added effort.</div> */}
                            <div className='text-kongQueLan px-12 leading-8 mt-2.5 md:mt-6'>Carry <Emojis/> all at once.</div>
                            {/* <div className={`${aldrich.className}`}><div className='font-bold md:mt-2 md:text-3xl lg:text-xl xl:text-2xl text-rouLan'>CITY BANK</div></div> */}
                        </div>
                    </div>
                    
                    <div className='flex w-full md:w-1/2 h-full pt-8 md:pt-0 justify-center lg:justify-end items-start md:items-end md:px-6 lg:px-8'>

                        <div className='md:mr-8 md:w-32 md:h-115 lg:w-68 lg:h-115 xl:w-82 xl:h-139 flex'>
                            <div className='w-1 h-115 xl:w-1 xl:h-139'>
                                <div className='w-1 mt-26 h-6 xl:mt-32 xl:h-7 bg-slate-700 rounded-l-xl'></div>
                                <div className='w-1 mt-5 h-11 xl:mt-6 xl:h-14 bg-slate-700 rounded-l-xl'></div>
                                <div className='w-1 mt-3 h-11 xl:mt-4 xl:h-14 bg-slate-700 rounded-l-xl'></div>
                            </div>
                            <div className='w-66 h-115 xl:w-80 xl:h-139 bg-slate-600 flex justify-center items-end rounded-t-[6vw] lg:rounded-t-[3vw] xl:rounded-t-[1.5vw]'>
                                <div className='w-64 h-114 lg:w-64 lg:h-114 xl:w-78 xl:h-138 bg-white border-t-8 border-l-8 border-r-8 border-slate-800 overflow-hidden  rounded-t-[6vw] lg:rounded-t-[3vw] xl:rounded-t-[1.5vw]'>
                                    <div className='h-8 md:h-10 lg:h-12 w-full text-slate-800 flex justify-between px-7 lg:px-7 pt-2.5 md:pt-3'>
                                        <div className='text-xs xl:text-sm font-semibold xl:mt-0.25'>10:20</div>
                                        <div className='flex space-x-0.5 xl:space-x-1.5'>
                                            <div className='mt-0.5 pt-0.25 xl:hidden'>
                                                <CellularIcon/>
                                            </div>
                                            <div className='mt-0.5 pt-0.25 hidden xl:flex'>
                                                <XLCellularIcon/>
                                            </div>
                                            <div className='mt-0.5 xl:hidden'>
                                                <WifiIcon/>
                                            </div>
                                            <div className='mt-0.5 hidden xl:flex'>
                                                <XLWifiIcon/>
                                            </div>
                                            <div className='text-slate-700 w-5 h-5 mt-1 xl:w-6 xl:h-6'>
                                                <BatteryIcon/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='px-4 py-0 md:pt-0 md:pb-1 lg:pb-2 flex justify-between mt-1'>
                                        <div className={`${aldrich.className}`}><div className='font-bold lg:text-xl xl:text-2xl py-1 text-rouLan'>CITY WALLET</div></div>
                                        <div className='text-rouLan flex items-center'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 md:size-6 lg:size-7 xl:size-8">
                                                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>

                                    <div className={`bg-gradient-to-br from-black to-guanLv ${topThreeCards}`}>
                                        <div className='text-slate-200 px-4  pt-2 xl:pt-2 text-sm lg:h-9 xl:h-10'>
                                            <div className={`${aldrich.className}`}>
                                                <div className='font-bold flex xl:text-lg'>
                                                    <div className='text-stone-300'>CITY</div><div className='text-stone-200'>&nbsp;PREFERRED</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`hidden md:flex bg-gradient-to-br from-red-800 to-luoShenZhu -mt-20 lg:-mt-20 xl:-mt-18 ${topThreeCards}`}>
                                        <div className='text-slate-200 px-4 pt-2 xl:pt-2 text-sm lg:h-9 xl:h-10'>
                                            <div className={`${aldrich.className}`}>
                                                <div className='font-bold flex xl:text-lg'>
                                                    <div className='text-slate-200'>CITY</div><div className='text-slate-50'>&nbsp;EVERYDAY</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`hidden  bg-black -mt-20 xl:-mt-18 ${topThreeCards}`}>
                                    {/* md:flex */}
                                        <div className='text-slate-200 px-4 pt-2 xl:pt-2 text-sm lg:h-9 xl:h-10'>
                                            <div className={`${aldrich.className}`}>
                                                <div className='font-bold flex xl:text-lg'>
                                                    <div className='text-slate-300'>CITY</div><div className='text-slate-200'>&nbsp;RESERVE</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-56 h-35 lg:w-56 lg:h-35 xl:w-70 xl:h-44 rounded-2xl mx-auto -mt-20 lg:-mt-20 xl:-mt-18 overflow-hidden'
                                        style={{
                                            background: `url(${pixelMap.src})`,
                                            backgroundColor: "#0b284d",
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            opacity: 1,
                                        }} 
                                    >
                                        <div className='text-slate-200 px-4 pt-2 xl:pt-2 text-sm lg:h-9 xl:h-10'>
                                            <div className={`${aldrich.className}`}>
                                                <div className='font-bold flex xl:text-lg'>
                                                    <div className='text-slate-300'>CITY</div><div className='text-slate-300'>&nbsp;TRAVEL</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='hidden md:flex'><CreditCardChip/></div>

                                        <div className='hidden md:flex items-end justify-between pl-4 pr-3 lg:h-9 xl:h-10'>
                                            <div className={`${pt_sans_narrow.className} text-slate-300 mb-2.5`}>A. NAME</div>
                                            <div className='-mb-1'>
                                                <svg fill="#dcdcdc" width="52px" height="52px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16.539 9.186a4.155 4.155 0 0 0-1.451-.251c-1.6 0-2.73.806-2.738 1.963-.01.85.803 1.329 1.418 1.613.631.292.842.476.84.737-.004.397-.504.577-.969.577-.639 0-.988-.089-1.525-.312l-.199-.093-.227 1.332c.389.162 1.09.301 1.814.313 1.701 0 2.813-.801 2.826-2.032.014-.679-.426-1.192-1.352-1.616-.563-.275-.912-.459-.912-.738 0-.247.299-.511.924-.511a2.95 2.95 0 0 1 1.213.229l.15.067.227-1.287-.039.009zm4.152-.143h-1.25c-.389 0-.682.107-.852.493l-2.404 5.446h1.701l.34-.893 2.076.002c.049.209.199.891.199.891h1.5l-1.31-5.939zm-10.642-.05h1.621l-1.014 5.942H9.037l1.012-5.944v.002zm-4.115 3.275.168.825 1.584-4.05h1.717l-2.551 5.931H5.139l-1.4-5.022a.339.339 0 0 0-.149-.199 6.948 6.948 0 0 0-1.592-.589l.022-.125h2.609c.354.014.639.125.734.503l.57 2.729v-.003zm12.757.606.646-1.662c-.008.018.133-.343.215-.566l.111.513.375 1.714H18.69v.001h.001z"/>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <div className='border-kongQueLan border-2 bg-white md:hidden w-56 h-35 lg:w-56 lg:h-35 xl:w-70 xl:h-44 rounded-2xl mx-auto -mt-20 lg:-mt-20 xl:-mt-18 overflow-hidden'>



                                        <div className=' w-full h-full text-center text-kongQueLan text-xl font-bold rounded-xl'>
                                            <div>
                                                <div className=''>Carry</div>
                                                <div className='flex justify-center'>
                                                    <Emojis/>
                                                </div>
                                                <div className='mt-1'>all at once.</div>
                                            </div>
                                        </div>



                                    </div> */}

                                    <div className='hidden md:flex mt-2 md:px-1 lg:px-0'>
                                        <div className='w-27 h-25 lg:w-27 lg:h-30 xl:w-34 xl:h-40 lg:mr-0.5 xl:mr-1 rounded-2xl mx-auto bg-gradient-to-b from-green-950 to-slate-200 flex justify-between px-3'>
                                            <div className='md:w-7 lg:w-7 xl:w-9 md:pt-1.5 lg:pt-1.5 xl:pt-1'>
                                                    <Image
                                                        src={Starbucks}
                                                        alt="X"
                                                        className='w-full '
                                                    />
                                                </div>
                                                <div className='flex text-slate-200 font-semibold xl:pt-3 lg:pt-2 md:pt-2 xl:scale-110 xl:mt-1'>
                                                    <div className='text-sm mt-0.5'>$50.38</div>
                                                </div>
                                            </div>
                                        <div className='w-27 h-25 lg:w-27 lg:h-30 xl:w-34 xl:h-40 lg:ml-0.5 xl:ml-1 rounded-2xl mx-auto bg-gradient-to-r from-sky-600 to-sky-950 flex justify-between px-3 '>
                                            <div className='md:w-8 lg:w-8 xl:w-10 lg:pt-2.5 md:pt-2'>
                                                <Image
                                                    src={CAA}
                                                    alt="X"
                                                    className='w-full'
                                                />
                                            </div>
                                            <div className='flex text-slate-200 xl:pt-3 font-semibold lg:pt-2 md:pt-2 xl:scale-110 xl:mt-1'>
                                                <div className='text-sm mt-0.5'>$50.00</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='hidden md:flex xl:-mt-29 lg:-mt-21 md:-mt-15p md:px-1 lg:px-0'>
                                        <div className='w-27 h-25 lg:w-27 lg:h-30 xl:w-34 xl:h-44 lg:mr-0.5 xl:mr-1 rounded-2xl mx-auto bg-[#f6ce1e] flex justify-between px-3'>                                            
                                            <div className='md:w-7 lg:w-7 xl:w-9 pt-1.5'>
                                                <Image
                                                    src={Shell}
                                                    alt="X"
                                                    className='w-full mt-0 -ml-0'
                                                />
                                            </div>
                                            <div className='flex text-luoShenZhu font-semibold xl:scale-110 xl:mt-1.5 xl:pt-3 md:pt-2'>
                                                <div className='text-sm mt-0.5'>$64.22</div>
                                            </div>
                                        </div>
                                            
                                        <div className='w-27 h-25 lg:w-27 lg:h-30 xl:w-34 xl:h-44 lg:ml-0.5 xl:ml-1 rounded-2xl mx-auto bg-slate-900  pt-1.5 pl-0 '>
                                            <div className='flex justify-between px-3'>
                                                <div className='md:text-xxs lg:text-xs xl:text-sm text-slate-300 md:pt-0.25 md:mt-0.5 lg:mt-0 lg:-ml-0.5 md:scale-125 lg:scale-100'>PRESTO</div>
                                                <div className='md:text-xs lg:text-xs xl:text-sm text-slate-100 lg:-mr-0.5 md:mt-0 lg:mt-0'>$15.68</div>
                                            </div>
                                            <div>
                                                <div className='w-full md:h-0.5 xl:h-1 bg-slate-100 mt-0.5'></div>
                                                <div className='w-full md:h-0.5 xl:h-1 md:bg-lime-500 xl:bg-lime-400 mt-0.5'></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='hidden md:flex xl:-mt-33 lg:-mt-21 md:-mt-15p md:px-1 lg:px-0'>
                                        <div className='w-27 h-25 lg:w-27 lg:h-30 xl:w-34 xl:h-44 lg:mr-0.5 xl:mr-1 rounded-2xl mx-auto bg-slate-50 border-4 border-red-600 flex justify-between'>                                            
                                            <div className='flex justify-between px-2 pt-0 w-full text-slate-500'>
                                                <div className='md:w-7 lg:w-6 xl:w-8 '>
                                                    <Image
                                                        src={AirCanada}
                                                        alt="X"
                                                        className='w-full mt-1 lg:ml-0.25 md:-ml-0.25'
                                                    />
                                                </div>
                                                <div className='text-xxs flex md:pt-2 lg:pt-2.5 xl:pt-3.5 mt-0.25  pr-0'>
                                                    <div className='text-end flex scale-110'>
                                                        <div>
                                                            <div className='font-semibold'>GATE</div>
                                                            <div className='md:text-xs xl:text-sm -mt-1.5 text-slate-700'>D20</div>
                                                        </div>
                                                    </div>
                                                    <div className='text-end flex ml-2 scale-110 xl:mr-0.5 pr-0.25'>
                                                        <div>
                                                            <div className='font-semibold'>SEAT</div>
                                                            <div className='md:text-xs xl:text-sm -mt-1.5 md:-ml-1 lg:ml-0 text-slate-700'>12D</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='w-27 h-25 lg:w-27 lg:h-30 xl:w-34 xl:h-44 lg:ml-0.5 xl:ml-1 rounded-2xl mx-auto bg-mainBurgerBG pl-0 '>
                                            <div className='w-full flex justify-between px-3'>
                                                <div className='md:w-7 lg:w-7 xl:w-9 pt-0 mt-1.5 '>
                                                    <Image
                                                        src={BurgerShack}
                                                        alt="X"
                                                        className='w-full mt-0.25'
                                                    />
                                                </div>
                                                <div className='flex text-burgerMainText lg:pt-2 xl:pt-3 mt-1 xl:scale-110 xl:mt-0.5'>
                                                    <div className='md:text-xs lg:text-xs xl:text-sm md:mt-2 lg:-mt-0.5 font-semibold'>$56.12</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='hidden md:flex xl:-mt-33 lg:-mt-21 md:-mt-15p md:px-1 lg:px-0'>
                                        <div className='lg:pt-1.5 xl:pt-2 w-27 h-25 lg:w-27 lg:h-30 xl:w-34 xl:h-44 lg:mr-0.5 xl:mr-1 rounded-2xl mx-auto bg-[#1c29ba] flex justify-between px-3'>                                            
                                            <div className='md:w-7 lg:w-8 xl:w-10 md:mt-3 lg:mt-0.5'>
                                                <Image
                                                    src={Indigo}
                                                    alt="X"
                                                    className='w-full mt-0.25'
                                                />
                                            </div>
                                            <div className='flex text-slate-200 xl:scale-110 xl:mt-2'>
                                                <div className='md:text-xs xl:text-sm lg:mt-0.5 md:mt-2.5 '>862pts</div>
                                            </div>
                                        </div>
                                            
                                        <div className='lg:pt-1 xl:pt-2 w-27 h-25 lg:w-27 lg:h-30 xl:w-34 xl:h-44 lg:ml-0.5 xl:ml-1 rounded-2xl mx-auto bg-gradient-to-br from-slate-600 to-black flex justify-between px-3'>
                                            <div className={`w-9 ${cinzel.className} text-slate-50 flex text-center`}>
                                                <div className='md:mt-1.5 lg:mt-0'>
                                                    <div className='text-xs '>venus</div>
                                                    <div className='text-xxs -mt-1.5'>jewelery</div>
                                                </div>
                                            </div>
                                            <div className='flex text-slate-200 lg:pt-0.5 xl:scale-110 xl:mt-2'>
                                                <div className='text-xs lg:mt-0.5 md:mt-2.5'>722pts</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-1 h-101 xl:w-1 xl:h-128 '>
                                <div className='w-1 mt-41 h-17 xl:mt-51 xl:h-21 bg-slate-700 rounded-r-xl'></div>
                            </div>
                        </div>

                    </div>

                    <div className='hidden h-full md:flex md:w-1/2 md:text-4xl lg:text-5xl xl:text-6xl font-bold'>
                        <div className='h-full w-full'>
                            <div className='h-1/4 w-full '></div>
                            <div className='h-1/2 px-6 flex items-center'>
                                <div>
                                    <div className=' text-kongQueLan pr-12'>
                                        <div className='-mb-2'>Carry</div>  
                                        <Emojis/>
                                        <div className='xl:-mt-2'>all at once. </div>
                                    </div>
                                    <div className={`${aldrich.className} hidden items-center`}>
                                        <div className='font-bold mt-4 lg:text-4xl xl:text-5xl text-rouLan'>CITY BANK</div>
                                        <div className='mt-3 ml-4 w-16 h-12 rounded-xl bg-rouLan'></div>
                                    </div>
                                </div>
                            </div>
                            <div className='hidden lg:flex h-1/4 w-full  items-end justify-end pb-6 pr-6'>
                                <Link target="_blank" href="https://citybank-three.vercel.app/" rel="noopener noreferrer">
                                    <div className={`hover:text-slate-50 hover:bg-kongQueLan w-fit rounded-xl py-1.5 px-3 border-2 border-kongQueLan text-kongQueLan uppercase text-xs ${inter.className}`}>Visit Site</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        // <div className={`hidden md:w-160 md:h-200 xl:w-320 xl:h-176 rounded-3xl overflow-hidden border-4 border-slate-50 bg-white shadow-md `}>
        //     {/* drop-shadow-[0_5px_5px_rgba(220,220,220,1)]  */}
        //     {/* MOBILE UP TO MD */}
        //     <div className='lg:hidden h-88 rounded-3xl flex items-center justify-center'>

        //         <div>
        //         <div className='text-xl flex justify-center'>We're everywhere you are.</div>
        //         <div className={`text-5xl font-black uppercase flex justify-center ${aldrich.className} -mt-2 text-rouLan`}>City Bank</div>
        //         </div>

        //     </div>
        //     {/* DESKTOP */}
        //     <div className='w-full h-full hidden lg:flex'>
        //         <div className='w-1/3 text-slate-800 pr-12 flex items-center justify-end'>
        //             <div>
        //             <div className='text-xl flex justify-end'>We're everywhere you are.</div>
        //             <div className={`text-5xl font-black uppercase flex justify-end ${aldrich.className} -mt-2 text-rouLan`}>City Bank</div>

        //             <div className='scale-110'>
        //                 <Phone
        //                     innerMarginLeft = {16}
        //                     innerMarginRight = {16}
        //                     innerContent={<PhoneContent/>}
        //                 />
        //             </div>
        //             <div className='flex justify-end space-x-2 -mt-8'>
        //                 <div className='w-20'>
        //                     <Image
        //                         src={appStoreLogo}
        //                     />
        //                 </div>
        //                 <div className='w-20'>
        //                     <Image
        //                         src={googlePlayLogo}
        //                     />
        //                 </div>
        //             </div>
        //             </div>
        //         </div>

        //         <div className='w-2/3 '>
        //             <div className='h-1/6 '></div>
        //             <div className='h-4/6 flex items-end mt-0'>
        //                 <div className='z-10'><BankLaptop/></div>
        //                 <div className='-ml-20 z-20'><BankPhone/></div>
        //                 <div className='-ml-4 z-30'><BankWatch/></div>
        //             </div>
        //             <div className='h-1/6 flex justify-end items-end'>
        //                 <div className='text-xl mb-10 mr-12 flex items-center'>
        //                     <div className={`${roboto.className} border-2 border-rouLan text-rouLan ${textBow} mr-1`}>
        //                         dj
        //                     </div>

        //                     <div className={`border-2 border-rouLan text-rouLan flex ${textBow} mr-2`}>
        //                         <svg
        //                             xmlns="http://www.w3.org/2000/svg"
        //                             width="20"
        //                             fill="none"
        //                             viewBox="0 0 32 32"
        //                             >
        //                             <path
        //                                 fill="#106898"
        //                                 d="M18.679 15.976c0-1.435-1.2-2.598-2.679-2.598-1.48 0-2.679 1.163-2.679 2.598 0 1.434 1.2 2.597 2.679 2.597 1.48 0 2.679-1.163 2.679-2.597z"
        //                             ></path>
        //                             <path
        //                                 fill="#106898"
        //                                 fillRule="evenodd"
        //                                 d="M24.7 11.154c.566-2.23 1.277-6.363-1.23-7.764-2.495-1.395-5.742 1.278-7.456 2.883-1.71-1.589-5.048-4.25-7.552-2.845-2.494 1.4-1.725 5.465-1.147 7.708-2.327.64-6.315 2.02-6.315 4.84 0 2.811 3.984 4.313 6.297 4.953-.58 2.255-1.311 6.262 1.186 7.659 2.514 1.405 5.842-1.194 7.572-2.816 1.726 1.614 4.942 4.23 7.437 2.83 2.504-1.406 1.852-5.484 1.273-7.74 2.242-.641 6.235-2.11 6.235-4.886 0-2.793-4.01-4.184-6.3-4.822zm-.284 8.513a28.65 28.65 0 00-1.519-3.685 28.625 28.625 0 001.46-3.631c1.679.472 5.361 1.55 5.361 3.625 0 2.094-3.533 3.183-5.302 3.691zm-1.566 7.859c-1.862 1.045-4.628-1.456-5.902-2.645a29.352 29.352 0 002.514-3.096c1.45-.125 2.821-.329 4.064-.607.407 1.595 1.194 5.298-.676 6.348zm-13.726-.015c-1.863-1.041-1.011-4.616-.584-6.278 1.228.264 2.589.453 4.042.568.83 1.132 1.7 2.173 2.576 3.085-1.083 1.015-4.163 3.671-6.034 2.625zM2.28 15.976c0-2.102 3.661-3.173 5.378-3.643a29.257 29.257 0 001.462 3.673 29.689 29.689 0 00-1.48 3.726c-1.637-.454-5.36-1.653-5.36-3.756zM9.104 4.504c1.87-1.05 4.77 1.506 6.012 2.656a29.97 29.97 0 00-2.556 3.066c-1.41.127-2.761.33-4.003.604-.466-1.81-1.321-5.278.547-6.326zm11.275 7.073c.957.117 1.875.273 2.736.464-.259.803-.581 1.643-.96 2.504a41.165 41.165 0 00-1.776-2.968zm-4.365-3.529c.591.621 1.183 1.314 1.766 2.066a38.897 38.897 0 00-3.546 0 27.651 27.651 0 011.78-2.066zm-6.157 6.496a26.884 26.884 0 01-.954-2.517 29.762 29.762 0 012.72-.452 36.303 36.303 0 00-1.766 2.97zm1.793 5.922a28.076 28.076 0 01-2.764-.431c.264-.83.59-1.692.972-2.568a36.306 36.306 0 001.792 2.999zm4.4 3.525a28.142 28.142 0 01-1.805-2.094c1.188.045 2.378.045 3.566-.006a26.611 26.611 0 01-1.761 2.1zm6.117-6.569c.4.886.739 1.744 1.007 2.559a27.97 27.97 0 01-2.798.462c.639-.982 1.239-1.99 1.79-3.02zm-3.42 3.172a41.486 41.486 0 01-5.463.01 34.923 34.923 0 01-2.746-4.598 34.908 34.908 0 012.73-4.59c1.82-.133 3.65-.134 5.469 0a39.137 39.137 0 012.739 4.572 39.146 39.146 0 01-2.729 4.606zM22.83 4.467c1.87 1.046 1.038 4.76.63 6.376a31.597 31.597 0 00-4.012-.615 29.379 29.379 0 00-2.536-3.069c1.258-1.175 4.066-3.728 5.918-2.692z"
        //                                 clipRule="evenodd"
        //                             ></path>
        //                         </svg>
        //                     </div>

        //                     <div className={`border-2 border-rouLan text-rouLan font-semibold text-md rounded-3xl py-2 px-4 uppercase ${aldrich.className}`}>City Bank</div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default CityBank
