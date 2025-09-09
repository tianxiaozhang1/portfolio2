import React, { useState } from 'react';

import Image from 'next/image'
import Link from 'next/link';

import { AtSign as AtSignIcon, PhoneIcon, MapPin, Link as LinkIcon, Mail as MailIcon, UserRound, UsersRound, Star as StarIcon, UserIcon, ChevronDown } from 'lucide-react';
import { IGLucide } from '../homepage/ProfileIcons'
import { source_code_pro, inter } from '../../../fonts';
import localFont from 'next/font/local'
const selawkReg = localFont({ src: '../../fonts/selawk.ttf' })

import PythonLogo from '../../../../public/logos/Python.svg'
import ReactLogo from '../../../../public/logos/React.svg'
import JavaScriptLogo from '../../../../public/logos/JavaScript.svg'
import TypescriptLogo from '../../../../public/logos/Typescript.svg'
import NeonLogo from '../../../../public/logos/Neon.svg'
import NextjsLogo from '../../../../public/logos/Nextjs.svg'
import NodejsLogo from '../../../../public/logos/Nodejs.svg'
import FirebaseLogo from '../../../../public/logos/Firebase.svg'
import GitLogo from '../../../../public/logos/Git.svg'
import TailwindLogo from '../../../../public/logos/Tailwind.svg'
import StripeLogo from '../../../../public/logos/Stripe.svg'
import MongoDBLogo from '../../../../public/logos/MongoDB.svg'
import ReduxLogo from '../../../../public/logos/Redux.svg'
import FigmaLogo from '../../../../public/logos/Figma2.svg'

import ChatGPTLogo from '../../../../public/logos/ChatGPTLogo.svg'
import GeminiLogo from '../../../../public/logos/Gemini.svg'
import DeepSeekLogo from '../../../../public/logos/DeepSeek.svg'
import RetoolLogo from '../../../../public/logos/Retool.svg'
import SquarespaceLogo from '../../../../public/logos/Squarespace.svg'
import ZapierLogo from '../../../../public/logos/Zapier.svg'

import Beethoven from '../../../../public/beethoven.jpg'

import FireworksEffect from './FireworksEffect'

function GithubContent({ theme }) {
    const buttonCSS = `${theme==="dark" ? `bg-gray-600 text-gray-200 border-gray-400 hover:bg-[#0066a3]` : 'bg-gray-50 text-gray-700 border-gray-300 hover:bg-[#0066a3] hover:text-white'} cursor-pointer  py-1 md:py-0 md:w-16 rounded-md md:border-1 md:px-2`
    // const emailParts = ['tian', 'xiao', 'zhang', '@', 'gmail', '.', 'com'];
    // const handleEmailCopy = () => {
    //     copyToClipboard(emailParts.join(''), setEmailCopyStatus);
    //     setTimeout(() => setEmailCopyStatus(''), 2000); // Clear message after 2 seconds
    // };
    const gridData = [
        [6, 6, 6, 0, 6, 6, 6, 0, 0, 6, 6, 0, 0, 0, 6, 0, 6, 0, 0, 6, 6, 0, 0, 6, 6, 0, 0, 0, 0, 6, 0, 6, 0, 0, 6],
        [6, 6, 0, 3, 5, 5, 6, 6, 3, 5, 4, 0, 5, 2, 3, 4, 3, 6, 5, 0, 6, 3, 0, 3, 0, 0, 3, 0, 4, 2, 4, 3, 0, 6, 6],
        [6, 6, 4, 6, 0, 6, 6, 0, 0, 4, 0, 0, 5, 0, 4, 0, 5, 6, 3, 0, 0, 4, 0, 2, 0, 6, 2, 0, 0, 4, 0, 0, 4, 6, 6],
        [6, 6, 5, 6, 4, 3, 5, 0, 6, 3, 0, 0, 0, 6, 4, 0, 0, 0, 4, 4, 5, 3, 0, 3, 6, 6, 4, 6, 6, 3, 5, 3, 0, 0, 6],
        [6, 6, 4, 0, 0, 0, 5, 0, 6, 5, 0, 0, 6, 0, 2, 0, 0, 6, 3, 0, 0, 3, 0, 4, 0, 0, 3, 6, 6, 5, 0, 6, 5, 0, 6],
        [6, 6, 0, 5, 3, 5, 0, 0, 5, 3, 4, 6, 6, 5, 3, 5, 0, 0, 2, 0, 0, 4, 0, 0, 5, 3, 0, 0, 3, 4, 3, 4, 6, 0, 6],
        [6, 6, 6, 6, 0, 0, 0, 0, 0, 6, 0, 0, 6, 0, 6, 0, 0, 6, 6, 6, 6, 0, 0, 6, 6, 6, 0, 6, 0, 0, 0, 0, 6, 6, 6],
    ];
    
    const colors = {
        0: theme === 'dark' ? 'bg-[#18181b]' : 'bg-[#f3f4f6]',
        
        1: theme === 'dark' ? 'bg-[#8aa191]' : 'bg-[#A8BFAF]',
        2: theme === 'dark' ? 'bg-[#8aa191]' : 'bg-[#88aa85]',
        3: theme === 'dark' ? 'bg-[#A8BFAF]' : 'bg-[#68945C]',
        4: theme === 'dark' ? 'bg-[#88aa85]' : 'bg-[#4C8045]',
        5: theme === 'dark' ? 'bg-[#68945C]' : 'bg-[#446A37]',

        6: theme === 'dark' ? 'bg-[#030712]' : 'bg-[#dcf0d9]',
    };

    const [showFireworks, setShowFireworks] = useState(false); // New state for fireworks
    // Function to trigger fireworks
    const handleLaunchFireworks = () => {
        setShowFireworks(true);
    };

    const handleFireworksComplete = () => {
        setShowFireworks(false);
    };

    const ProfileBadge = ({ theme }) => {
        return (
            <div className={`${theme==="dark" ? `bg-zinc-800` : 'bg-zinc-50'} h-fit w-full md:w-52 rounded-lg flex justify-center items-start pt-4 border-1 ${theme==="dark" ? `border-stone-500 text-gray-300` : `border-stone-400 text-gray-600`}`}>
                <div className='pb-4'>
                    <div className={`${theme==="dark" ? `text-gray-50` : 'text-gray-800'} space-y-1`}>
                        <div className='bg-stone-700 rounded-full h-22 w-22 md:h-28 md:w-28 mx-auto my-1 md:my-2'>
                            <Image src={Beethoven} alt="Beethoven" className='rounded-full h-22 w-22 md:h-28 md:w-28' />
                        </div>
                        <div className={`font-semibold text-center`}>Tian</div>
                        <div className={`text-sm2 px-8 leading-3 ${theme==="dark" ? `text-gray-300` : 'text-gray-700'}`}>Photographer turned coder.</div>
                        <div className={`flex space-x-1.5 text-center text-gray-900 text-lg md:text-sm2 pt-2 justify-center `}>
                            <Link href="https://github.com/tianxiaozhang1/" target="_blank" rel="noopener noreferrer">                                
                                <div className={`${buttonCSS}`}>Profile</div>
                            </Link>
                            <div className={`${buttonCSS}`} onClick={handleLaunchFireworks}>Hire</div>
                        </div>
                        <div className='hidden md:flex justify-center pt-2 space-x-2'>
                            <UserRound className={`h-5 w-5 ${theme==="dark" ? `text-gray-400 hover:text-[#FAC03D]` : 'text-gray-500 hover:text-[#DB9B34]'} cursor-pointer`} />
                            <UsersRound className={`h-5 w-5 ${theme==="dark" ? `text-gray-400 hover:text-[#FAC03D]` : 'text-gray-500 hover:text-[#DB9B34]'} cursor-pointer`} />
                            <StarIcon className={`h-5 w-5 ${theme==="dark" ? `text-gray-400 hover:text-[#FAC03D]` : 'text-gray-500 hover:text-[#DB9B34]'} cursor-pointer`} />
                        </div>
                        <div className={`pl-4 pt-1 text-sm2 md:text-xs space-y-0.5 text-center md:text-start ${theme==="dark" ? `text-gray-300` : 'text-gray-700'}`}>
                            <div className='flex space-x-1 '>
                                <MapPin className={`h-5 w-5 hover:text-[#FAC03D] ${theme==="dark" ? `text-gray-400` : 'text-gray-500'}`} />
                                <div>Toronto, Ontario</div>
                            </div>
                            <Link href="https://tianphoto.ca" target="_blank" rel="noopener noreferrer"
                                className={`hover:underline flex space-x-1`}>
                                <LinkIcon className={`h-4 w-4 hover:text-[#FAC03D] ${theme==="dark" ? `text-gray-400` : 'text-gray-500'} mt-0.5 mr-2`} />
                                tianphoto.ca
                            </Link>
                            <Link href="https://www.instagram.com/tianxiaozhang" target="_blank" rel="noopener noreferrer"
                                className={`hover:underline flex space-x-1`}>
                                <IGLucide size={`h-4 w-4 hover:text-[#FAC03D] ${theme==="dark" ? `text-gray-400` : 'text-gray-500'} mt-0.5 mr-2`} />
                                @tianxiaozhang
                            </Link>
    
                            <div className='w-full md:h-1 md:mt-1'></div>
                        </div>
                        {/* <div className='text-center font-semibold bg-gray-50 rounded-md border-1 border-gray-300 py-0 my-1.5'>tian</div> */}
    
                    </div>
                </div>
            </div>
        )
    };

    const MobileProfileBadge = ({ theme }) => {
        return (
            <div className={`${selawkReg.className} ${theme==="dark" ? `bg-zinc-800` : 'bg-zinc-50'} h-fit w-full rounded-lg flex justify-center items-start pt-2 border-1 ${theme==="dark" ? `border-stone-500 text-gray-300` : `border-stone-400 text-gray-600`}`}>
                <div className='pb-3'>
                    <div className={`${theme==="dark" ? `text-gray-50` : 'text-gray-800'} space-y-1`}>
                        <div className='flex'>
                            <div className='w-1/2 flex justify-end'>
                                <div className='rounded-full h-22 w-22 md:h-28 md:w-28 my-1 md:my-2 mr-3'>
                                    <Image src={Beethoven} alt="Beethoven" className='rounded-full h-22 w-22 md:h-28 md:w-28' />
                                </div>
                            </div>
                            <div className='w-1/2 px-1 flex text-start items-center'>
                                <div>
                                    <div className={`font-semibold text-xl md:text-start -mb-0.5`}>Tian</div>
                                    <div className={`text-base leading-4 ${theme==="dark" ? `text-gray-300` : 'text-gray-700'}`}>Toronto photographer turned coder.</div>
                                </div>
                            </div>
                        </div>
                        <div className={`flex space-x-1.5 text-center text-gray-900 text-lg md:text-sm2 md:pt-2 justify-center `}>
                            <Link href="https://github.com/tianxiaozhang1/" target="_blank" rel="noopener noreferrer">                                
                                <div className={`${buttonCSS} w-26`}>Profile</div>
                            </Link>
                            {/* <div className={`${buttonCSS} w-26`} onClick={handleLaunchFireworks}>Hire</div> */}
                            <button className={`${buttonCSS} w-26`} onClick={handleLaunchFireworks}>Hire</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    };

    const LanguagesTools = ({ theme }) => {
        return (
            <div className={` ${theme==="dark" ? `bg-zinc-800` : 'bg-zinc-50'} w-full border-1 rounded-lg md:h-38 text-start ${theme==="dark" ? `border-stone-500 text-gray-300` : `border-stone-400 text-gray-600`} flex justify-center`}>
                <div className='pt-2 pl-3 pr-3 md:pl-5 md:pr-3 pb-1 md:pb-0'>
                    <div className={`font-semibold text-center md:text-start my-1 md:my-0 ${selawkReg.className}`}>Languages and Tools</div>
                    <div className='flex flex-wrap mt-3 gap-2 items-center justify-center md:justify-start pb-3'>
                        <div><Image src={PythonLogo} alt="Python Logo" className='w-10 h-10 md:w-10 md:h-10' /></div>
                        <div><Image src={ReactLogo} alt="React Logo" className='w-10 h-10 md:w-10 md:h-10' /></div>
                        <div><Image src={JavaScriptLogo} alt="JavaScriptLogoLogo" className='w-10 h-10 md:w-10 md:h-10 rounded-md' /></div>
                        <div><Image src={TypescriptLogo} alt="Typescript Logo" className='w-10 h-10 md:w-10 md:h-10 rounded-md' /></div>
                        <div className={`bg-gray-50 w-10 h-10 md:w-10 md:h-10 rounded-md`}><Image src={NextjsLogo} alt="Nextjs Logo" className={``} /></div>
                        <div><Image src={NodejsLogo} alt="Nodejs Logo" className='w-10 h-10 md:w-10 md:h-10' /></div>
                        <div><Image src={NeonLogo} alt="Neon Logo" className='w-10 h-10 md:w-10 md:h-10' /></div>
                        <div><Image src={FirebaseLogo} alt="Firebase Logo" className='w-10 h-10 md:w-10 md:h-10' /></div>

                        <div><Image src={GitLogo} alt="Nodejs Logo" className='w-10 h-10 md:w-10 md:h-10' /></div>
                        <div className={`${theme==="dark" ? `bg-gray-50` : 'bg-gray-800' } md:p-0.5 rounded-md`}><Image src={TailwindLogo} alt="Tailwind Logo" className='w-10 h-10 md:w-10 md:h-10' /></div>
                        <div className='flex items-center bg-white rounded-md'><Image src={MongoDBLogo} alt="MongoDB Logo" className='w-10 h-10 md:w-10 md:h-10' /></div>
                        <div><Image src={StripeLogo} alt="Stripe Logo" className='w-10 h-10 md:w-10 md:h-10 rounded-md' /></div>
                        <div><Image src={FigmaLogo} alt="Figma Logo" className={`w-10 h-10 md:w-10 md:h-10 p-0.5 ${theme==="dark" ? `bg-gray-50` : 'bg-gray-800' } rounded-md`} /></div>
                        <div className={`bg-white rounded-sm`}><Image src={ReduxLogo} alt="ChatGPT Logo" className='w-10 h-10 md:w-10 md:h-10' /></div>
                        <div className={`bg-white rounded-md`}><Image src={ChatGPTLogo} alt="ChatGPT Logo" className='w-10 h-10 md:w-10 md:h-10' /></div>
                        <div className={`${theme==="dark" ? `bg-gray-50` : 'bg-gray-50' } rounded-md`}><Image src={GeminiLogo} alt="Gemini Logo" className='w-10 h-10 md:w-10 md:h-10' /></div>
                        <div className='bg-white rounded-md'><Image src={DeepSeekLogo} alt="Firebase Logo" className='w-10 h-10 md:w-10 md:h-10' /></div>
                        <div className={`${theme==="dark" ? `bg-gray-50` : 'bg-gray-50' } rounded-md`}><Image src={RetoolLogo} alt="ChatGPT Logo" className='w-10 h-10 md:w-10 md:h-10' /></div>
                        <div className={`' } rounded-md`}><Image src={ZapierLogo} alt="Gemini Logo" className='w-10 h-10 md:w-10 md:h-10' /></div>
                        <div className={`${theme==="dark" ? `bg-gray-50` : 'bg-gray-50' } rounded-md w-10 h-10 md:w-10 md:h-10 `}><Image src={SquarespaceLogo} alt="Firebase Logo" className='h-9 w-9 m-auto mt-0.5' /></div>
                    </div>
                </div>
            </div>
        )
    };
    
    return (

        <div>
            <div className={`md:hidden ${theme==="dark" ? `bg-zinc-800` : 'bg-zinc-50'} w-full h-fit px-3 space-y-3`}>
                <div className='flex justify-center pt-3 '>
                    <MobileProfileBadge theme={theme}/>
                </div>
                <div className={`leading-4 ${theme==="dark" ? `bg-zinc-800` : 'bg-zinc-50'} h-36 w-full md:w-52 rounded-lg flex px-4 items-center pt-0 border-1 ${theme==="dark" ? `border-stone-500 text-gray-300` : `border-stone-400 text-gray-600`}`}>
                    Hello, my name is Tian. I am a passionate full stack developer with a knack for building robust and scalable web applications. My focus is on creating intuitive user experiences and efficient backend systems.
                </div>
                <div className='pb-4'>
                    <LanguagesTools theme={theme}/>
                </div>
            </div>

            <div className={`hidden md:block w-full h-full pt-0.5 ${selawkReg.className}`}>
                <div className='w-full h-full flex items-start space-x-2 pb-2'>
                    <ProfileBadge theme={theme}/>
                    <div className={`hidden ${theme==="dark" ? `bg-zinc-800` : 'bg-zinc-50'} h-fit w-52 rounded-lg flex justify-center items-start pt-4 border-1 ${theme==="dark" ? `border-stone-500 text-gray-300` : `border-stone-400 text-gray-600`}`}>
                        <div className='pb-4'>
                            <div className={`${theme==="dark" ? `text-gray-50` : 'text-gray-800'} space-y-1`}>
                                <div className='bg-stone-700 rounded-full h-28 w-28 mx-auto my-2'>
                                    <Image src={Beethoven} alt="Beethoven" className='rounded-full h-28 w-28' />
                                </div>
                                <div className={`font-semibold `}>Tian</div>
                                <div className={`text-sm2 px-8 leading-3 ${theme==="dark" ? `text-gray-300` : 'text-gray-700'}`}>Photographer turned coder.</div>
                                <div className={`flex space-x-1.5 text-center text-gray-900 text-sm2 pt-2 justify-center `}>
                                    <Link href="https://github.com/tianxiaozhang1/" target="_blank" rel="noopener noreferrer">                                
                                        <div className={`${buttonCSS}`}>Profile</div>
                                    </Link>
                                    <div className={`${buttonCSS}`} onClick={handleLaunchFireworks}>Hire</div>
                                </div>
                                <div className='flex justify-center pt-2 space-x-2'>
                                    <UserRound className={`h-5 w-5 ${theme==="dark" ? `text-gray-400 hover:text-[#FAC03D]` : 'text-gray-500 hover:text-[#DB9B34]'} cursor-pointer`} />
                                    <UsersRound className={`h-5 w-5 ${theme==="dark" ? `text-gray-400 hover:text-[#FAC03D]` : 'text-gray-500 hover:text-[#DB9B34]'} cursor-pointer`} />
                                    <StarIcon className={`h-5 w-5 ${theme==="dark" ? `text-gray-400 hover:text-[#FAC03D]` : 'text-gray-500 hover:text-[#DB9B34]'} cursor-pointer`} />
                                </div>
                                <div className={`pl-4 pt-1 text-xs space-y-0.5 ${theme==="dark" ? `text-gray-300` : 'text-gray-700'}`}>
                                    <div className='flex space-x-1'>
                                        <MapPin className={`h-5 w-5 hover:text-[#FAC03D] ${theme==="dark" ? `text-gray-400` : 'text-gray-500'}`} />
                                        <div>Toronto, Ontario</div>
                                    </div>
                                    <Link href="https://tianphoto.ca" target="_blank" rel="noopener noreferrer"
                                        className={`hover:underline flex space-x-1`}>
                                        <LinkIcon className={`h-4 w-4 hover:text-[#FAC03D] ${theme==="dark" ? `text-gray-400` : 'text-gray-500'} mt-0.5 mr-2`} />
                                        tianphoto.ca
                                    </Link>
                                    <Link href="https://www.instagram.com/tianxiaozhang" target="_blank" rel="noopener noreferrer"
                                        className={`hover:underline flex space-x-1`}>
                                        <IGLucide size={`h-4 w-4 hover:text-[#FAC03D] ${theme==="dark" ? `text-gray-400` : 'text-gray-500'} mt-0.5 mr-2`} />
                                        @tianxiaozhang
                                    </Link>

                                    <div className='w-full h-1 mt-1'></div>
                                </div>
                                {/* <div className='text-center font-semibold bg-gray-50 rounded-md border-1 border-gray-300 py-0 my-1.5'>tian</div> */}

                            </div>
                        </div>
                    </div>

                    <div className='space-y-2 w-full pr-0'>
                        <LanguagesTools theme={theme}/>
                        <div className={`hidden ${theme==="dark" ? `bg-zinc-800` : 'bg-zinc-50'} w-full border-1 rounded-lg h-38 text-start pt-2 pl-5 pr-3 ${theme==="dark" ? `border-stone-500 text-gray-300` : `border-stone-400 text-gray-600`}`}>
                            <div className='font-semibold'>Languages and Tools</div>
                            <div className='flex flex-wrap mt-3 gap-2 items-center'>
                                <div><Image src={PythonLogo} alt="Python Logo" className='w-10 h-10 md:w-10 md:h-10' /></div>
                                <div><Image src={ReactLogo} alt="React Logo" className='w-10 h-10 md:w-10 md:h-10' /></div>
                                <div><Image src={JavaScriptLogo} alt="JavaScriptLogoLogo" className='w-10 h-10 md:w-10 md:h-10 rounded-md' /></div>
                                <div><Image src={TypescriptLogo} alt="Typescript Logo" className='w-10 h-10 md:w-10 md:h-10 rounded-md' /></div>
                                <div className={`bg-gray-50 w-10 h-10 md:w-10 md:h-10 rounded-md`}><Image src={NextjsLogo} alt="Nextjs Logo" className={``} /></div>
                                <div><Image src={NodejsLogo} alt="Nodejs Logo" className='w-10 h-10 md:w-10 md:h-10' /></div>
                                <div><Image src={NeonLogo} alt="Neon Logo" className='w-10 h-10 md:w-10 md:h-10' /></div>
                                <div><Image src={FirebaseLogo} alt="Firebase Logo" className='w-10 h-10 md:w-10 md:h-10' /></div>

                                <div><Image src={GitLogo} alt="Nodejs Logo" className='w-10 h-10 md:w-10 md:h-10' /></div>
                                <div className={`${theme==="dark" ? `bg-gray-50` : 'bg-gray-800' } p-0.5 rounded-md`}><Image src={TailwindLogo} alt="Tailwind Logo" className='w-10 h-10 md:w-10 md:h-10' /></div>
                                <div className='flex items-center bg-white rounded-md'><Image src={MongoDBLogo} alt="MongoDB Logo" className='w-10 h-10 md:w-10 md:h-10' /></div>
                                <div><Image src={StripeLogo} alt="Stripe Logo" className='w-10 h-10 md:w-10 md:h-10 rounded-md' /></div>
                                <div><Image src={FigmaLogo} alt="Figma Logo" className={`w-10 h-10 md:w-10 md:h-10 p-0.5  ${theme==="dark" ? `bg-gray-50` : 'bg-gray-800' } rounded-md`} /></div>
                                <div className={`bg-white rounded-sm`}><Image src={ReduxLogo} alt="ChatGPT Logo" className='w-10 h-10 md:w-10 md:h-10' /></div>
                                <div className={`bg-white rounded-md`}><Image src={ChatGPTLogo} alt="ChatGPT Logo" className='w-10 h-10 md:w-10 md:h-10' /></div>
                                <div className={`${theme==="dark" ? `bg-gray-50` : 'bg-gray-50' } rounded-md`}><Image src={GeminiLogo} alt="Gemini Logo" className='w-10 h-10 md:w-10 md:h-10' /></div>
                                <div className='bg-white rounded-md'><Image src={DeepSeekLogo} alt="Firebase Logo" className='w-10 h-10 md:w-10 md:h-10' /></div>
                                <div className={`${theme==="dark" ? `bg-gray-50` : 'bg-gray-50' } rounded-md`}><Image src={RetoolLogo} alt="ChatGPT Logo" className='w-10 h-10 md:w-10 md:h-10' /></div>
                                <div className={`' } rounded-md`}><Image src={ZapierLogo} alt="Gemini Logo" className='w-10 h-10 md:w-10 md:h-10' /></div>
                                <div className={`${theme==="dark" ? `bg-gray-50` : 'bg-gray-50' } rounded-md w-10 h-10 md:w-10 md:h-10 `}><Image src={SquarespaceLogo} alt="Firebase Logo" className='h-9 w-9 m-auto mt-0.5' /></div>
                            </div>
                        </div>

                        <div className={`${theme==="dark" ? `bg-zinc-800` : 'bg-zinc-50'} w-full h-48 rounded-lg border-1 text-start py-3 pl-5 pr-3 ${theme==="dark" ? `border-stone-500 text-gray-300` : `border-stone-400 text-gray-600`}`}>
                            <div className='flex justify-between'>
                                <div className='font-semibold text-base'>Contributions in the last year</div> 
                                <div className='flex items-center'>
                                    <div className='text-sm'>Contribution Settings</div>
                                    <div><ChevronDown className='w-4 h-4' fill="true" /></div>
                                </div> 
                            </div>
                            <div className='flex h-36 mt-1.5 text-gray-400'>
                                <div className='w-8 h-full flex justify-end text-sm pr-1 pt-9 ml-3'>
                                    <div className='pt-0.25 space-y-3'>
                                        <div>Mon</div>
                                        <div className='pt-0.25'>Wed</div>
                                        <div className='pt-0.25'>Fri</div>
                                    </div>
                                </div>
                                <div className='ml-1'>
                                    <div className='h-5 w-full flex space-x-6 text-sm mt-0.5'>
                                        <div>Sep</div><div>Oct</div><div>Nov</div><div>Dec</div>
                                        <div>Jan</div><div>Feb</div><div>Mar</div><div>Apr</div><div>May</div><div>Jun</div><div>Jul</div><div>Aug</div>
                                    </div>
                                    <div className="flex flex-col items-center justify-center p-0 mt-0.5 ">
                                        {gridData.map((row, rowIndex) => (
                                            <div key={rowIndex} className="flex">
                                                {row.map((colorValue, colIndex) => (
                                                    <div
                                                        key={`${rowIndex}-${colIndex}`}
                                                        className={`h-3 w-3 rounded-sm m-0.5 ${colors[colorValue]}`}
                                                    />
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    {showFireworks && (
                        <FireworksEffect 
                            trigger={showFireworks}
                            onComplete={handleFireworksComplete}
                            options={{
                                particleCount: 320,
                                particleSize: 6,
                                colors: ['#FFD700', '#FF4500', '#ADFF2F', '#1E90FF', '#BA55D3', '#FFFFFF'],
                                initialSpeedUp: -10,
                                initialSpeedSpread: 1,
                                gravity: 0.28,
                                friction: 0.99,
                                fadeSpeed: 0.001,
                            }}
                        />
                    )}

                </div>
            </div>
        </div>
    )
}

export default GithubContent
