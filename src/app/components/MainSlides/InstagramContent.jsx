import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import localFont from 'next/font/local';
import { Plus as PlusIcon, LayoutGrid, Tag, Grid3X3Icon, SquareUser, ChevronDown, Link as LinkIcon } from 'lucide-react'; 

import FireworksEffect from './FireworksEffect'; 

const selawkReg = localFont({ src: '../../fonts/selawk.ttf' });

// import LeftImage from '../../../../public/instagram/left.jpg';
import P1 from '../../../../public/instagram/p1.jpg';
import P2 from '../../../../public/instagram/p2.jpg';
import P3 from '../../../../public/instagram/p3.jpg';
import P4 from '../../../../public/instagram/p4.jpg';
import P5 from '../../../../public/instagram/p5.jpg';
import P6 from '../../../../public/instagram/p6.jpg';
import P7 from '../../../../public/instagram/p7.jpg';
import P8 from '../../../../public/instagram/p8.jpg';
import P9 from '../../../../public/instagram/p9.jpg';
import P10 from '../../../../public/instagram/p10.jpg';
import P11 from '../../../../public/instagram/p11.jpg';
import P12 from '../../../../public/instagram/p12.jpg';
import P13 from '../../../../public/instagram/p13.jpg';
import P14 from '../../../../public/instagram/p14.jpg';
import P15 from '../../../../public/instagram/p15.jpg';
import P16 from '../../../../public/instagram/p16.jpg';
import P17 from '../../../../public/instagram/p17.jpg';
import P18 from '../../../../public/instagram/p18.jpg';
import P19 from '../../../../public/instagram/p19.jpg';
import P20 from '../../../../public/instagram/p20.jpg';
import P21 from '../../../../public/instagram/p21.jpg';
import P22 from '../../../../public/instagram/p22.jpg';
import P23 from '../../../../public/instagram/p23.jpg';
import P24 from '../../../../public/instagram/p24.jpg';
import P25 from '../../../../public/instagram/p25.jpg';
import P26 from '../../../../public/instagram/p26.jpg';
import P27 from '../../../../public/instagram/p27.jpg';
import P28 from '../../../../public/instagram/p28.jpg';
import P29 from '../../../../public/instagram/p29.jpg';
import P30 from '../../../../public/instagram/p30.jpg';
import Beethoven from '../../../../public/beethoven.jpg'

const defaultInstagramPosts = [
    P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, P14, P15, P16, P17, P18
];

const taggedInstagramPosts = [
    P19, P20, P21, P22, P23, P24, P25, P26, P27, P28, P29, P30,
];

function InstagramContent({ theme }) {
    const buttonCSS = `flex items-center ${theme==="dark" ? `bg-slate-600 text-gray-100 border-gray-400 hover:bg-[#0066a3]` : 'bg-slate-100 text-gray-700 border-gray-300 hover:bg-slate-200'} rounded-lg px-3 text-sm2 md:text-xs w-32 text-center md:w-fit`;
    const baseButtonFollowingCSS = `${theme==="dark" ? `bg-slate-600 text-gray-100 border-gray-400` : 'bg-slate-100 text-gray-700 border-gray-300'} rounded-lg px-3 text-sm2 md:text-xs`;
    
    const [displayMode, setDisplayMode] = useState('posts'); 

    const currentPosts = displayMode === 'posts' ? defaultInstagramPosts : taggedInstagramPosts;

    const [showFireworks, setShowFireworks] = useState(false);
    
    const [isFollowing, setIsFollowing] = useState(() => {
        if (typeof window !== 'undefined') {
            const savedState = localStorage.getItem('isFollowingTian');
            return savedState === 'true';
        }
        return false;
    });

    // Modified function to toggle the follow state
    const handleToggleFollow = () => {
        if (isFollowing) {
            // If currently following, unfollow
            setIsFollowing(false);
            localStorage.setItem('isFollowingTian', 'false');
        } else {
            // If not following, follow and show fireworks
            setShowFireworks(true);
            setIsFollowing(true);
            localStorage.setItem('isFollowingTian', 'true');
        }
    };

    const handleFireworksComplete = () => {
        setShowFireworks(false);
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('isFollowingTian', isFollowing.toString());
        }
    }, [isFollowing]);


    const followButtonClasses = isFollowing
        ? `${baseButtonFollowingCSS} md:ml-4 flex items-center px-3 text-sm2 md:text-xs py-1.5 md:py-1.5 w-32 text-center md:w-fit` 
        : theme === "dark"
            ? `bg-[#615EA8] text-white border-transparent hover:bg-[#4A4B9D] md:ml-4 flex items-center rounded-lg px-3 text-sm2 md:text-xs py-1.5 md:py-1.5 w-32 text-center md:w-fit` 
            : `bg-blue-300 text-blue-900 border-transparent hover:bg-blue-400 md:ml-4 flex items-center rounded-lg px-3 text-sm2 md:text-xs py-1.5 md:py-1.5 w-32 text-center md:w-fit`; 

    const FollowAndProfileButtons = ({ theme }) => {
        return (
            <div className='flex mt-2 md:mt-0  font-semibold md:font-normal'>
                <button 
                    onClick={handleToggleFollow} // Use the new function here
                    className={`${followButtonClasses} flex justify-center`}
                >
                    {isFollowing ? (
                        <>Following</>
                    ) : "Follow"}
                </button>
                <Link href="https://www.instagram.com/tianxiaozhang" target="_blank" rel="noopener noreferrer" className={`${buttonCSS} flex justify-center ml-2`}>
                    <button>Profile</button>
                </Link>
            </div>
        )
    }

    const BioAndLink = ({ theme }) => {
        return (
            <div className=''>
                <div className=''>Coder & photographer.</div>
                <Link href="https://tianphoto.ca" target="_blank" rel="noopener noreferrer"
                    className={`font-semibold ${theme === 'dark' ? 'text-[#9cc0ee]' : 'text-[#11386a]'}  flex mt-0.25`}>
                    <LinkIcon className={`h-3 w-3 ${theme==="dark" ? `text-gray-400` : 'text-gray-500'} mt-0.5 mr-0.5`} />
                    &nbsp;<div className='hover:underline'>tianphoto.ca</div>
                </Link>
            </div>
        )
    }

    return (

        <div>
            {/* MOBILE */}
            {/* <div className='md:hidden'>IG</div> */}

            {/* DESKTOP */}
            <div className={`flex md:space-x-4 justify-center w-full h-full ${selawkReg.className} ${theme==="dark" ? `bg-[#1e1e1e]` : 'bg-zinc-50'}`}>
                 {/* The CSS to hide the scrollbar should be placed in a global stylesheet,
                     such as `app/globals.css`, to ensure it is applied consistently.
                 */}
                <div className={`w-full md:w-9/12 h-full flex flex-col  pb-0 overflow-y-auto no-scrollbar relative`}> 
                    
                    <div className='flex w-full md:h-30 mt-1 flex-shrink-0 pb-2'>
                        <div className='w-1/3 flex justify-center items-center pt-2'>
                            <Image src={Beethoven} alt="Beethoven" className='rounded-full h-22 w-22 md:h-26 md:w-26 p-1 border-3 border-pink-500' />
                        </div>
                        <div className={`w-2/3 ${theme==="dark" ? 'text-gray-200' : 'text-gray-800'} flex flex-col text-center justify-center items-start pl-2 md:pl-0`}>
                            <div className='md:flex'>
                                <div className='text-lg hidden md:flex'>tianxiaozhang</div>
                                <div className='hidden md:block'><FollowAndProfileButtons theme={theme}/></div>
                            </div>
                            <div className='font-semibold -mb-2 text-lg md:hidden'>Tian</div>
                            <div className='flex w-full space-x-4 mb-1 mt-3 md:mt-2 text-sm'>
                                <div className='md:flex text-start md:text-start leading-3'>
                                    <div className='font-semibold'>
                                        1112
                                    </div>
                                    <div className='hidden md:flex'>&nbsp;</div>
                                    <div className={`${theme==="dark" ? 'text-gray-300' : 'text-gray-500'}`}>
                                        posts
                                    </div>
                                </div>
                                <div className='md:flex text-start md:text-start leading-3'>
                                    <div className='font-semibold'>
                                        104k
                                    </div>
                                    <div className='hidden md:flex'>&nbsp;</div>
                                    <div className={`${theme==="dark" ? 'text-gray-300' : 'text-gray-500'}`}>
                                        followers
                                    </div>
                                </div>
                                <div className='md:flex text-start md:text-start leading-3'>
                                    <div className='font-semibold'>
                                        600
                                    </div>
                                    <div className='hidden md:flex'>&nbsp;</div>
                                    <div className={`${theme==="dark" ? 'text-gray-300' : 'text-gray-500'}`}>
                                        following
                                    </div>
                                </div>
                            </div>
                            <div className='text-start leading-4 mt-0.5 text-sm hidden md:block'>
                                <div className='font-semibold'>Tian</div>
                                <div><BioAndLink theme={theme}/></div>
                            </div>
                        </div>
                    </div>

                    <div className={`md:hidden text-start leading-4 mt-0.5 text-sm pl-5 ${theme==="dark" ? 'text-gray-200' : 'text-gray-800'}`}><BioAndLink theme={theme}/></div>
                    <div className='md:hidden flex justify-center pb-2'><FollowAndProfileButtons theme={theme}/></div>

                    <div className={`w-full mt-2 flex-grow`}>
                        <div className={`h-7 mb-1 w-full flex justify-center ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                            <div className='flex justify-between items-center w-2/5 px-2'>
                                <div 
                                    className={`flex items-center cursor-pointer pb-2 w-14 justify-center border-b-2
                                               ${displayMode === 'posts' ? (theme === 'dark' ? 'border-white text-gray-100' : ' border-gray-800 text-gray-800') : (theme === 'dark' ? ' border-gray-500 text-gray-400' : 'border-gray-300 text-gray-600')}`}
                                    onClick={() => setDisplayMode('posts')}
                                >
                                    <Grid3X3Icon className='h-6 w-6' />
                                </div>
                                <div 
                                    className={`flex items-center cursor-pointer pb-2 w-14 justify-center border-b-2
                                               ${displayMode === 'tagged' ? (theme === 'dark' ? ' border-white text-gray-100' : 'border-gray-800 text-gray-800') : (theme === 'dark' ? ' border-gray-500 text-gray-400' : 'border-gray-300 text-gray-600')}`}
                                    onClick={() => setDisplayMode('tagged')}
                                >
                                    <SquareUser className='h-6 w-6' />
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-3 gap-1'>
                            {currentPosts.map((src, index) => (
                                <Image
                                    key={index}
                                    src={src}
                                    alt={`Instagram Post ${index + 1}`}
                                    className="w-full h-auto object-cover aspect-square"
                                    width={150}
                                    height={150}
                                />
                            ))}
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
    );
}


export default InstagramContent;
