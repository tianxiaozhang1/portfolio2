import React, { useState } from 'react'; // Import useState
import Image from 'next/image';
import Link from 'next/link';
import localFont from 'next/font/local';
import { Plus as PlusIcon, LayoutGrid, Tag, Grid3X3Icon, SquareUser, ChevronDown, Link as LinkIcon } from 'lucide-react'; // Added LayoutGrid and Tag icons

// Import the FireworksEffect component
import FireworksEffect from './FireworksEffect'; // Adjust path if necessary

const selawkReg = localFont({ src: '../../fonts/selawk.ttf' });

import LeftImage from '../../../../public/instagram/left.jpg';
import P1 from '../../../../public/instagram/p1.jpg';
import Beethoven from '../../../../public/beethoven.jpg'

// Using your provided image paths, added more for scrolling demonstration
const defaultInstagramPosts = [
    P1, LeftImage, P1, LeftImage, P1, LeftImage, P1, LeftImage, P1, LeftImage, P1, LeftImage,
    P1, LeftImage, P1, LeftImage, P1, LeftImage, P1, LeftImage, P1, LeftImage, P1, LeftImage,
    P1, LeftImage, P1, LeftImage, P1, LeftImage, P1, LeftImage, P1, LeftImage, P1, LeftImage,
];

// Placeholder for tagged images - you can replace these with actual paths later
const taggedInstagramPosts = [
    LeftImage, P1, LeftImage, P1, LeftImage, P1,
    LeftImage, P1, LeftImage, P1, LeftImage, P1,
    LeftImage, P1, LeftImage, P1, LeftImage, P1,
];


function InstagramContent({ theme }) {
    const buttonCSS = `flex items-center ${theme==="dark" ? `bg-slate-600 text-gray-100 border-gray-400 hover:bg-slate-500` : 'bg-slate-100 text-gray-700 border-gray-300 hover:bg-slate-200'} rounded-lg px-3 text-xs`;
    const baseButtonFollowingCSS = `${theme==="dark" ? `bg-slate-600 text-gray-100 border-gray-400` : 'bg-slate-100 text-gray-700 border-gray-300'} rounded-lg px-3 text-xs`;
    

    const [displayMode, setDisplayMode] = useState('posts'); 

    const currentPosts = displayMode === 'posts' ? defaultInstagramPosts : taggedInstagramPosts;

    const [showFireworks, setShowFireworks] = useState(false);
    const [isFollowing, setIsFollowing] = useState(false);

    const handleLaunchFireworks = () => {
        setShowFireworks(true);
        setIsFollowing(true);
    };

    const handleFireworksComplete = () => {
        setShowFireworks(false);
    };

    const followButtonClasses = isFollowing
        ? `${baseButtonFollowingCSS} ml-4 flex items-center` // Already Following
        : theme === "dark"
            ? `bg-[#615EA8] text-white border-transparent hover:bg-[#4A4B9D] ml-4 flex items-center rounded-lg px-3 text-xs` // Dark theme, Follow state
            : `bg-blue-300 text-blue-900 border-transparent hover:bg-blue-400 ml-4 flex items-center rounded-lg px-3 text-xs`; // Light theme, Follow state

    return (
        // IMPORTANT: The main container needs 'relative' positioning for Fireworks to overlay correctly
        <div className='flex space-x-4 justify-center w-full h-full'>
            <style>{`
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
            {/* This is now the primary scrolling container and needs position:relative */}
            <div className={`w-9/12 h-full flex flex-col ${selawkReg.className} pb-0 overflow-y-auto no-scrollbar relative`}> {/* Added 'relative' */}
                
                {/* Profile Header Section */}
                <div className='flex w-full h-30 mt-1 flex-shrink-0 pb-2'>
                    {/* ... (your existing profile header content) ... */}
                    <div className='w-1/3 flex justify-center items-center pt-2'>
                        <Image src={Beethoven} alt="Beethoven" className='rounded-full h-26 w-26 p-1 border-3 border-pink-500' />
                    </div>
                    <div className={`w-2/3 ${theme==="dark" ? 'text-gray-200' : 'text-gray-800'} flex flex-col justify-center items-start pl-0`}>
                        <div className='flex'>
                            <div className='text-lg '>tianxiaozhang</div>
                            {/* Example button to trigger fireworks */}
                            {/* <button 
                                onClick={handleLaunchFireworks} // Call the fireworks trigger
                                className={`${buttonCSS} ml-4 flex items-center`}
                            >
                                Follow
                            </button> */}
                            <button 
                                onClick={handleLaunchFireworks} 
                                // Disable the button while fireworks are showing to prevent re-triggering,
                                // but allow it to be clicked again after fireworks complete.
                                // disabled={showFireworks} 
                                className={`${followButtonClasses} ${showFireworks ? '' : ''}`}
                            >
                                {isFollowing ? (
                                    <>Following</>
                                ) : "Follow"}
                            </button>
                            <Link href="https://www.instagram.com/tianxiaozhang" target="_blank" rel="noopener noreferrer" className={`${buttonCSS} ml-2`}>
                                <button>Profile</button>
                            </Link>
                        </div>
                        <div className='flex w-full space-x-4 my-1 text-sm'>
                            <div className='flex'><div className='font-semibold'>1112</div><div className={`${theme==="dark" ? 'text-gray-300' : 'text-gray-500'}`}>&nbsp;posts</div></div>
                            <div className='flex'><div className='font-semibold'>104k</div><div className={`${theme==="dark" ? 'text-gray-300' : 'text-gray-500'}`}>&nbsp;followers</div></div>
                            <div className='flex'><div className='font-semibold'>600</div><div className={`${theme==="dark" ? 'text-gray-300' : 'text-gray-500'}`}>&nbsp;following</div></div>
                        </div>
                        <div className='text-start leading-4 mt-0.5 text-sm'>
                            <div className='font-semibold'>Tian</div>
                            <div className=''>Coder & photographer.</div>
                            <Link href="https://tianphoto.ca" target="_blank" rel="noopener noreferrer"
                                className={`font-semibold ${theme === 'dark' ? 'text-[#9cc0ee]' : 'text-[#11386a]'}  flex mt-0.25`}>
                                <LinkIcon className={`h-3 w-3 ${theme==="dark" ? `text-gray-400` : 'text-gray-500'} mt-0.5 mr-0.5`} />
                                &nbsp;<div className='hover:underline'>tianphoto.ca</div>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* ... (your existing DISPLAY SELECTION and photo grid) ... */}
                <div className={`w-full mt-2 flex-grow`}>
                    <div className={`h-7 mb-1 w-full flex justify-center ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                        <div className='flex justify-between items-center w-2/5 px-2'>
                            <div 
                                className={`flex items-center cursor-pointer pb-2 w-14 justify-center border-b-2
                                            ${displayMode === 'posts' ? (theme === 'dark' ? 'border-white text-gray-100' : ' border-gray-800 text-gray-800') : ''}`}
                                onClick={() => setDisplayMode('posts')}
                            >
                                <Grid3X3Icon className='h-6 w-6' />
                            </div>
                            <div 
                                className={`flex items-center cursor-pointer pb-2 w-14 justify-center border-b-2
                                            ${displayMode === 'tagged' ? (theme === 'dark' ? ' border-white text-gray-100' : 'border-gray-800 text-gray-800') : ''}`}
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
    );
}

export default InstagramContent;

// import React, { useState } from 'react'; // Import useState
// import Image from 'next/image';
// import Link from 'next/link';
// import localFont from 'next/font/local';
// import { Plus as PlusIcon, LayoutGrid, Tag, Grid3X3Icon, SquareUser, ChevronDown } from 'lucide-react'; // Added LayoutGrid and Tag icons

// // Import the FireworksEffect component
// import FireworksEffect from './FireworksEffect'; // Adjust path if necessary

// const selawkReg = localFont({ src: '../../fonts/selawk.ttf' });

// import LeftImage from '../../../../public/instagram/left.jpg';
// import P1 from '../../../../public/instagram/p1.jpg';
// import Beethoven from '../../../../public/beethoven.jpg'

// // Using your provided image paths, added more for scrolling demonstration
// const defaultInstagramPosts = [
//     P1, LeftImage, P1, LeftImage, P1, LeftImage, P1, LeftImage, P1, LeftImage, P1, LeftImage,
//     P1, LeftImage, P1, LeftImage, P1, LeftImage, P1, LeftImage, P1, LeftImage, P1, LeftImage,
//     P1, LeftImage, P1, LeftImage, P1, LeftImage, P1, LeftImage, P1, LeftImage, P1, LeftImage,
// ];

// // Placeholder for tagged images - you can replace these with actual paths later
// const taggedInstagramPosts = [
//     LeftImage, P1, LeftImage, P1, LeftImage, P1,
//     LeftImage, P1, LeftImage, P1, LeftImage, P1,
//     LeftImage, P1, LeftImage, P1, LeftImage, P1,
// ];


// function InstagramContent({ theme }) {
//     const buttonCSS = `${theme==="dark" ? `bg-slate-600 text-gray-100 border-gray-400` : 'bg-slate-100 text-gray-700 border-gray-300'} rounded-lg px-3 text-xs`;

//     const [displayMode, setDisplayMode] = useState('posts'); 
//     const [showFireworks, setShowFireworks] = useState(false); // New state for fireworks

//     const currentPosts = displayMode === 'posts' ? defaultInstagramPosts : taggedInstagramPosts;

//     // Function to trigger fireworks
//     const handleLaunchFireworks = () => {
//         // Toggle the state to re-trigger the effect.
//         // The key prop in FireworksEffect ensures a fresh animation cycle each time.
//         setShowFireworks(prev => !prev); 
//     };

//     // const handleLaunchFireworks = () => {
//     //     // Only trigger if fireworks are not currently active
//     //     if (!showFireworks) {
//     //         setShowFireworks(true); // Set to true to start the animation
//     //         // REMOVE THE setTimeout LINE HERE if you want it once-only per load
//     //         // setTimeout(() => setShowFireworks(false), 3000); // <-- DELETE THIS LINE for once-only
//     //     }
//     // };

//     return (
//         // IMPORTANT: The main container needs 'relative' positioning for Fireworks to overlay correctly
//         <div className='flex space-x-4 justify-center w-full h-full'>
//             <style>{`
//                 .no-scrollbar::-webkit-scrollbar { display: none; }
//                 .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
//             `}</style>
//             {/* This is now the primary scrolling container and needs position:relative */}
//             <div className={`w-9/12 h-full flex flex-col ${selawkReg.className} pb-0 overflow-y-auto no-scrollbar relative`}> {/* Added 'relative' */}
                
//                 {/* Profile Header Section */}
//                 <div className='flex w-full h-30 mt-1 flex-shrink-0 pb-2'>
//                     {/* ... (your existing profile header content) ... */}
//                     <div className='w-1/3 flex justify-center items-center pt-2'>
//                         <Image src={Beethoven} alt="Beethoven" className='rounded-full h-26 w-26 p-1 border-3 border-pink-500' />
//                     </div>
//                     <div className={`w-2/3 ${theme==="dark" ? 'text-gray-200' : 'text-gray-800'} flex flex-col justify-center items-start pl-0`}>
//                         <div className='flex'>
//                             <div className='text-lg '>tianxiaozhang</div>
//                             {/* Example button to trigger fireworks */}
//                             <button 
//                                 onClick={handleLaunchFireworks} // Call the fireworks trigger
//                                 className={`${buttonCSS} ml-4 flex items-center`}
//                             >
//                                 Celebrate!&nbsp;<ChevronDown className={`${theme==="dark" ? 'text-gray-200' : 'text-gray-800'} h-3 w-3 -mr-1 mt-1`} />
//                             </button>
                            
//                             <button className={`${buttonCSS} ml-2`}>Message</button>
//                         </div>
//                         {/* ... (rest of your profile header) ... */}
//                         <div className='flex w-full space-x-4 my-1 text-sm'>
//                             <div className='flex'><div className='font-semibold'>1113</div><div className={`${theme==="dark" ? 'text-gray-300' : 'text-gray-500'}`}>&nbsp;posts</div></div>
//                             <div className='flex'><div className='font-semibold'>105k</div><div className={`${theme==="dark" ? 'text-gray-300' : 'text-gray-500'}`}>&nbsp;followers</div></div>
//                             <div className='flex'><div className='font-semibold'>611</div><div className={`${theme==="dark" ? 'text-gray-300' : 'text-gray-500'}`}>&nbsp;following</div></div>
//                         </div>
//                         <div className='text-start leading-4 mt-0.5 text-sm'>
//                             <div className='font-semibold'>Tian</div>
//                             <div className=''>Coder & photographer.</div>
//                             <Link href="https://tianphoto.ca" target="_blank" rel="noopener noreferrer"
//                                 className={`font-semibold ${theme === 'dark' ? 'text-[#9cc0ee]' : 'text-[#11386a]'} hover:underline`}>
//                                 tianphoto.ca
//                             </Link>
//                         </div>
//                     </div>
//                 </div>

//                 {/* ... (your existing DISPLAY SELECTION and photo grid) ... */}
//                 <div className={`w-full mt-2 flex-grow`}>
//                     <div className={`h-7 mb-1 w-full flex justify-center ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
//                         <div className='flex justify-between items-center w-2/5 px-2'>
//                             <div 
//                                 className={`flex items-center cursor-pointer pb-2 w-14 justify-center border-b-2
//                                             ${displayMode === 'posts' ? (theme === 'dark' ? 'border-white text-gray-100' : ' border-gray-800 text-gray-800') : ''}`}
//                                 onClick={() => setDisplayMode('posts')}
//                             >
//                                 <Grid3X3Icon className='h-6 w-6' />
//                             </div>
//                             <div 
//                                 className={`flex items-center cursor-pointer pb-2 w-14 justify-center border-b-2
//                                             ${displayMode === 'tagged' ? (theme === 'dark' ? ' border-white text-gray-100' : 'border-gray-800 text-gray-800') : ''}`}
//                                 onClick={() => setDisplayMode('tagged')}
//                             >
//                                 <SquareUser className='h-6 w-6' />
//                             </div>
//                         </div>
//                     </div>
//                     <div className='grid grid-cols-3 gap-1'>
//                         {currentPosts.map((src, index) => (
//                             <Image
//                                 key={index}
//                                 src={src}
//                                 alt={`Instagram Post ${index + 1}`}
//                                 className="w-full h-auto object-cover aspect-square"
//                                 width={150}
//                                 height={150}
//                             />
//                         ))}
//                     </div>
//                 </div>

//                 {/* Render the FireworksEffect component */}
//                 {showFireworks && (
//                     <FireworksEffect 
//                         key={String(showFireworks)} // Important: key prop forces re-mount for new animation
//                         trigger={showFireworks}
//                         options={{
//                             particleCount: 80,
//                             particleSize: 6,
//                             colors: ['#FFD700', '#FF4500', '#ADFF2F', '#1E90FF', '#BA55D3', '#FFFFFF'], // Gold, OrangeRed, GreenYellow, DodgerBlue, MediumPurple, White
//                             initialSpeedUp: -10, // Faster upward speed
//                             initialSpeedSpread: 2, // Less horizontal spread
//                             gravity: 0.3,      // Slightly stronger gravity
//                             friction: 0.98,    // Less friction, particles travel further
//                             fadeSpeed: 0.015,  // Slower fade out
//                         }}
//                     />
//                 )}
//             </div>
//         </div>
//     );
// }

// export default InstagramContent;