'use client';
import React, { useState, useRef, useEffect, useCallback } from 'react'
import Link from 'next/link'

// import mainBG from '../../../images/now/homex2b.jpg'
// import fireflies from '../../../images/fireflies.jpg'

const languageBoxSmall = "h-16 w-16 lg:h-26 lg:w-26 font-semibold text-sm lg:text-xl flex items-center justify-center rounded-xl lg:rounded-3xl shadow-md cursor-default"
const winPhoneStyle = "h-28 lg:h-full flex justify-center items-center text-2xl lg:text-4xl cursor-default"

import { Aldrich, Cinzel, Roboto, Noto_Sans_Ogham, Open_Sans, Inconsolata, Source_Sans_3, Source_Code_Pro } from 'next/font/google';
const aldrich = Aldrich({ subsets: ['latin'], weight: "400" })
const cinzel = Cinzel({ subsets: ['latin'] })
const roboto = Roboto({ subsets: ['latin'], weight: '700' })
const notoSans = Noto_Sans_Ogham({ subsets: ['latin'], weight: '400' })
const openSans = Open_Sans({ subsets: ['latin'], weight: '600' })
const inconsolata = Inconsolata({ subsets: ['latin'], weight: '700' })
const sourceSans3 = Source_Sans_3({ subsets: ['latin'], weight: "400" })
const sourceCodePro = Source_Code_Pro({ subsets: ['latin'], weight: "400" })

const leftCol = "border-2 border-[#333333] hover:border-stone-600"

// const SourceControlIcon = () => {
//     return (
//         <svg width="16px" height="16px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#fff">
//             <path d="M21.007 8.222A3.738 3.738 0 0 0 15.045 5.2a3.737 3.737 0 0 0 1.156 6.583 2.988 2.988 0 0 1-2.668 1.67h-2.99a4.456 4.456 0 0 0-2.989 1.165V7.4a3.737 3.737 0 1 0-1.494 0v9.117a3.776 3.776 0 1 0 1.816.099 2.99 2.99 0 0 1 2.668-1.667h2.99a4.484 4.484 0 0 0 4.223-3.039 3.736 3.736 0 0 0 3.25-3.687zM4.565 3.738a2.242 2.242 0 1 1 4.484 0 2.242 2.242 0 0 1-4.484 0zm4.484 16.441a2.242 2.242 0 1 1-4.484 0 2.242 2.242 0 0 1 4.484 0zm8.221-9.715a2.242 2.242 0 1 1 0-4.485 2.242 2.242 0 0 1 0 4.485z"/>
//         </svg>
//     )
// }

// const SyncIcon = () => {
//     return (
//         <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#fff"><path fillRule="evenodd" clipRule="evenodd" d="M2.006 8.267L.78 9.5 0 8.73l2.09-2.07.76.01 2.09 2.12-.76.76-1.167-1.18a5 5 0 0 0 9.4 1.983l.813.597a6 6 0 0 1-11.22-2.683zm10.99-.466L11.76 6.55l-.76.76 2.09 2.11.76.01 2.09-2.07-.75-.76-1.194 1.18a6 6 0 0 0-11.11-2.92l.81.594a5 5 0 0 1 9.3 2.346z"/></svg>
//     )
// }

// const ErrorIcon = () => {
//     return (
//         <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#fff"><path fillRule="evenodd" clipRule="evenodd" d="M8.6 1c1.6.1 3.1.9 4.2 2 1.3 1.4 2 3.1 2 5.1 0 1.6-.6 3.1-1.6 4.4-1 1.2-2.4 2.1-4 2.4-1.6.3-3.2.1-4.6-.7-1.4-.8-2.5-2-3.1-3.5C.9 9.2.8 7.5 1.3 6c.5-1.6 1.4-2.9 2.8-3.8C5.4 1.3 7 .9 8.6 1zm.5 12.9c1.3-.3 2.5-1 3.4-2.1.8-1.1 1.3-2.4 1.2-3.8 0-1.6-.6-3.2-1.7-4.3-1-1-2.2-1.6-3.6-1.7-1.3-.1-2.7.2-3.8 1-1.1.8-1.9 1.9-2.3 3.3-.4 1.3-.4 2.7.2 4 .6 1.3 1.5 2.3 2.7 3 1.2.7 2.6.9 3.9.6zM7.9 7.5L10.3 5l.7.7-2.4 2.5 2.4 2.5-.7.7-2.4-2.5-2.4 2.5-.7-.7 2.4-2.5-2.4-2.5.7-.7 2.4 2.5z"/></svg>
//     )
// }

// const WarningIcon = () => {
//     return (
//         <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#fff"><path fillRule="evenodd" clipRule="evenodd" d="M7.56 1h.88l6.54 12.26-.44.74H1.44L1 13.26 7.56 1zM8 2.28L2.28 13H13.7L8 2.28zM8.625 12v-1h-1.25v1h1.25zm-1.25-2V6h1.25v4h-1.25z"/></svg>
//     )
// }

// const RemoteIcon = () => {
//     return (
//         <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#fff"><path fillRule="evenodd" clipRule="evenodd" d="M12.904 9.57L8.928 5.596l3.976-3.976-.619-.62L8 5.286v.619l4.285 4.285.62-.618zM3 5.62l4.072 4.07L3 13.763l.619.618L8 10v-.619L3.619 5 3 5.619z"/></svg>
//     )
// }

// const BellIcon = () => {
//     return (
//         <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#fff">
//             <path d="M13.377 10.573a7.63 7.63 0 0 1-.383-2.38V6.195a5.115 5.115 0 0 0-1.268-3.446 5.138 5.138 0 0 0-3.242-1.722c-.694-.072-1.4 0-2.07.227-.67.215-1.28.574-1.794 1.053a4.923 4.923 0 0 0-1.208 1.675 5.067 5.067 0 0 0-.431 2.022v2.2a7.61 7.61 0 0 1-.383 2.37L2 12.343l.479.658h3.505c0 .526.215 1.04.586 1.412.37.37.885.586 1.412.586.526 0 1.04-.215 1.411-.586s.587-.886.587-1.412h3.505l.478-.658-.586-1.77zm-4.69 3.147a.997.997 0 0 1-.705.299.997.997 0 0 1-.706-.3.997.997 0 0 1-.3-.705h1.999a.939.939 0 0 1-.287.706zm-5.515-1.71l.371-1.114a8.633 8.633 0 0 0 .443-2.691V6.004c0-.563.12-1.113.347-1.616.227-.514.55-.969.969-1.34.419-.382.91-.67 1.436-.837.538-.18 1.1-.24 1.65-.18a4.147 4.147 0 0 1 2.597 1.4 4.133 4.133 0 0 1 1.004 2.776v2.01c0 .909.144 1.818.443 2.691l.371 1.113h-9.63v-.012z"/>
//         </svg>
//     )
// }

// const FeedbackIcon = () => {
//     return (
//         <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#fff">
//             <path d="M4.5 1L4 1.5V3.02746C4.16417 3.00932 4.331 3 4.5 3C4.669 3 4.83583 3.00932 5 3.02746V2H14V7H12.2929L11 8.29289V7H8.97254C8.99068 7.16417 9 7.331 9 7.5C9 7.669 8.99068 7.83583 8.97254 8H10V9.5L10.8536 9.85355L12.7071 8H14.5L15 7.5V1.5L14.5 1H4.5Z"/>
//             <path fillRule="evenodd" clipRule="evenodd" d="M6.41705 10.4288C7.37039 9.80348 8 8.72527 8 7.5C8 5.567 6.433 4 4.5 4C2.567 4 1 5.567 1 7.5C1 8.72527 1.62961 9.80348 2.58295 10.4288C2.11364 10.6498 1.68557 10.9505 1.31802 11.318C0.900156 11.7359 0.568688 12.232 0.342542 12.7779C0.180451 13.1692 0.0747425 13.5807 0.0278638 14C0.00933826 14.1657 0 14.3326 0 14.5V15H1L0.999398 14.5C0.999398 14.4784 0.999599 14.4567 1 14.4351C1.00811 13.9975 1.09823 13.5651 1.26587 13.1604C1.44179 12.7357 1.69964 12.3498 2.0247 12.0247C2.34976 11.6996 2.73566 11.4418 3.16038 11.2659C3.57088 11.0958 4.00986 11.0056 4.45387 10.9997C4.46922 10.9999 4.4846 11 4.5 11C4.5154 11 4.53078 10.9999 4.54613 10.9997C4.99014 11.0056 5.42912 11.0958 5.83962 11.2659C6.26433 11.4418 6.65024 11.6996 6.9753 12.0247C7.30036 12.3498 7.55821 12.7357 7.73413 13.1604C7.90177 13.5651 7.99189 13.9975 8 14.4351C8.0004 14.4567 8.0006 14.4784 8.0006 14.5L8 15H9V14.5C9 14.3326 8.99066 14.1657 8.97214 14C8.92526 13.5807 8.81955 13.1692 8.65746 12.7779C8.43131 12.232 8.09984 11.7359 7.68198 11.318C7.31443 10.9505 6.88636 10.6498 6.41705 10.4288ZM4.5 10C3.11929 10 2 8.88071 2 7.5C2 6.11929 3.11929 5 4.5 5C5.88071 5 7 6.11929 7 7.5C7 8.88071 5.88071 10 4.5 10Z"/>
//         </svg>
//     )
// }

// const UserIcon = () => {
//     return (
//         <div className={`w-14 h-14`}>
//             <div className='flex'>
//                 <div className={`w-4 h-6 bg-rouLan`}></div>
//                 <div className={`w-6 h-6 bg-slate-100`}></div>
//             </div>
//             <div className={`w-14 h-2 bg-rouLan`}></div>
//             <div className={`w-14 h-6 bg-slate-100`}></div>
//         </div>
//     )
// }

// const UserCodeIcon = () => {
//     return (
//         <div className={`w-14 h-14 scale-50`}>
//             <div className='flex'>
//                 <div className={`w-4 h-6 `}></div>
//                 <div className={`w-6 h-6 bg-stone-100`}></div>
//             </div>
//             <div className={`w-14 h-2 `}></div>
//             <div className={`w-14 h-6 bg-stone-100`}></div>
//         </div>
//     )
// }

// const MailCodeIcon = () => {
//     return (
//         <div className={`w-14 h-14 bg-[#858585] scale-50`}>
//             <div className='h-2'></div>
//             <div className='flex'>
//                 <div className={`w-2 h-2 bg-[#333333]`}></div>
//                 <div className={`w-10 h-2 bg-[#858585]`}></div>
//                 <div className={`w-2 h-2 bg-[#333333]`}></div>
//             </div>
//             <div className='flex'>
//                 <div className={`w-2 h-2 bg-[#858585]`}></div>
//                 <div className={`w-2 h-2 bg-[#333333]`}></div>
//                 <div className={`w-6 h-2 bg-[#858585]`}></div>
//                 <div className={`w-2 h-2 bg-[#333333]`}></div>
//             </div>
//             <div className='flex'>
//                 <div className={`w-4 h-2 bg-[#858585]`}></div>
//                 <div className={`w-2 h-2 bg-[#333333]`}></div>
//                 <div className={`w-2 h-2 bg-[#858585]`}></div>
//                 <div className={`w-2 h-2 bg-[#333333]`}></div>
//             </div>
//             <div className='flex'>
//                 <div className={`w-6 h-2 bg-[#858585]`}></div>
//                 <div className={`w-2 h-2 bg-[#333333]`}></div>
//             </div>
//         </div>
//     )
// }

// const IGCodeIcon = () => {
//     return (
//         <div className={`w-14 h-14 flex justify-center items-center bg-[#858585] scale-50`}>
//             <div className={`w-10 h-10 bg-[#333333]`}>
//                 <div className='flex'>
//                     <div className={`w-8 h-2 `}></div>
//                     <div className={`w-2 h-2 bg-[#858585]`}></div>
//                 </div>
//                 <div className='flex'>
//                     <div className={`w-2 h-6 `}></div>
//                     <div className={`w-6 h-6 bg-[#858585]`}></div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// const WebsiteCodeIcon = ({background, foreground}) => {
//     return (
//         <div className='scale-50'>
//             <div className={`w-14 h-10 flex justify-center items-center bg-${foreground}`}>
//                 <div className={`w-10 h-6 bg-${background}`}>
//                 </div>
//             </div>
//             <div className='w-14 h-2 '></div>
//             <div className={`w-14 h-2 bg-${foreground}`}></div>
//         </div>
//     )
// }

// const PhoneCodeIcon = ({background, foreground}) => {
//     return (
//         <div className='scale-50'>
//             <div className={`w-10 h-14 bg-${foreground}`}>
//                 <div className={`w-10 h-2 bg-${foreground}`}></div>
//                 <div className='flex'>
//                     <div className={`w-2 h-6 bg-${foreground}`}></div>
//                     <div className={`w-6 h-6 bg-${background}`}></div>
//                 </div>
//                 <div className={`w-2 h-2 bg-${foreground}`}></div>
//                 <div className='flex'>
//                     <div className={`w-2 h-2 bg-${foreground}`}></div>
//                     <div className={`w-6 h-2 bg-${background}`}></div>
//                 </div>
//             </div>

//         </div>
//     )
// }

// const GithubCodeIcon = ({background, foreground}) => {
//     return (
//         <div className='scale-50 hover:cursor-pointer'>
//             <div className={`w-14 h-2 flex bg-${background} `}>
//                 <div className={`w-2 h-2 bg-${background}`}></div>
//                 <div className={`w-2 h-2 bg-${foreground}`}></div>
//                 <div className={`w-6 h-2 bg-${background}`}></div>
//                 <div className={`w-2 h-2 bg-${foreground}`}></div>
//             </div>
//             <div className={`w-14 h-10 flex bg-${foreground}`}></div>
//             <div className={`w-14 h-2 flex bg-${background}`}>
//                 <div className={`w-4 h-2 bg-${background}`}></div>
//                 <div className={`w-6 h-2 bg-${foreground}`}></div>
//             </div>
//         </div>
//     )
// }

// const MailIcon = () => {
//     return (
//         <div className={`w-14 h-14 bg-slate-100`}>
//             <div className='h-2'></div>
//             <div className='flex'>
//                 <div className={`w-2 h-2 bg-[#344e6c]`}></div>
//                 <div className={`w-10 h-2 bg-slate-100`}></div>
//                 <div className={`w-2 h-2 bg-[#344e6c]`}></div>
//             </div>
//             <div className='flex'>
//                 <div className={`w-2 h-2 bg-slate-100`}></div>
//                 <div className={`w-2 h-2 bg-[#344e6c]`}></div>
//                 <div className={`w-6 h-2 bg-slate-100`}></div>
//                 <div className={`w-2 h-2 bg-[#344e6c]`}></div>
//             </div>
//             <div className='flex'>
//                 <div className={`w-4 h-2 bg-slate-100`}></div>
//                 <div className={`w-2 h-2 bg-[#344e6c]`}></div>
//                 <div className={`w-2 h-2 bg-slate-100`}></div>
//                 <div className={`w-2 h-2 bg-[#344e6c]`}></div>
//             </div>
//             <div className='flex'>
//                 <div className={`w-6 h-2 bg-slate-100`}></div>
//                 <div className={`w-2 h-2 bg-[#344e6c]`}></div>
//             </div>
//         </div>
//     )
// }

// const IGIcon = () => {
//     return (
//         <div className={`w-14 h-14 flex justify-center items-center bg-slate-100`}>
//             <div className={`w-10 h-10 bg-[#344e6c]`}>
//                 <div className='flex'>
//                     <div className={`w-8 h-2 `}></div>
//                     <div className={`w-2 h-2 bg-slate-100`}></div>
//                 </div>
//                 <div className='flex'>
//                     <div className={`w-2 h-6 `}></div>
//                     <div className={`w-6 h-6 bg-slate-100`}></div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// const WebsiteIcon = () => {
//     return (
//         <div className=''>
//             <div className={`w-14 h-10 flex justify-center items-center bg-slate-100`}>
//                 <div className={`w-10 h-6 bg-[#344e6c]`}>
//                 </div>
//             </div>
//             <div className='w-14 h-2 '></div>
//             <div className='w-14 h-2 bg-slate-100'></div>
//         </div>
//     )
// }

// const PhoneIcon = () => {
//     return (
//         <div className=''>
//             <div className={`w-10 h-14 bg-slate-100`}>
//                 <div className={`w-10 h-2 bg-slate-100`}></div>
//                 <div className='flex'>
//                     <div className={`w-2 h-6 bg-slate-100`}></div>
//                     <div className={`w-6 h-6 bg-[#344e6c]`}></div>
//                 </div>
//                 <div className={`w-2 h-2 bg-slate-100`}></div>
//                 <div className='flex'>
//                     <div className={`w-2 h-2 bg-slate-100`}></div>
//                     <div className={`w-6 h-2 bg-[#344e6c]`}></div>
//                 </div>
//             </div>

//         </div>
//     )
// }

// const GithubIcon = () => {
//     return (
//         <div className=''>
//             <div className={`w-14 h-2 flex `}>
//                 <div className={`w-2 h-2 `}></div>
//                 <div className={`w-2 h-2 bg-slate-100`}></div>
//                 <div className={`w-6 h-2 `}></div>
//                 <div className={`w-2 h-2 bg-slate-100`}></div>
//             </div>
//             <div className={`w-14 h-10 flex bg-slate-100`}></div>
//             <div className={`w-14 h-2 flex `}>
//                 <div className={`w-4 h-2 `}></div>
//                 <div className={`w-6 h-2 bg-slate-100`}></div>
//             </div>
//         </div>
//     )
// }

// const ArrowIcon = () => {
//     return (
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#a8a29e" className="size-10">
//             <path fillRule="evenodd" d="M11.47 13.28a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 0 0-1.06-1.06L12 11.69 5.03 4.72a.75.75 0 0 0-1.06 1.06l7.5 7.5Z" clipRule="evenodd" />
//             <path fillRule="evenodd" d="M11.47 19.28a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 1 0-1.06-1.06L12 17.69l-6.97-6.97a.75.75 0 0 0-1.06 1.06l7.5 7.5Z" clipRule="evenodd" />
//         </svg>
//     )
// }

import ProjectDisplay from './ProjectDisplay';

import { Phone, User as UserIcon, Sun as SunIcon, Moon as MoonIcon } from 'lucide-react'; 
import {
    SourceControlIcon,
    SyncIcon,
    ErrorIcon,
    WarningIcon,
    RemoteIcon,
    BellIcon,
    FeedbackIcon,
    UserCodeIcon,
    MailCodeIcon,
    IGCodeIcon,
    WebsiteCodeIcon,
    PhoneCodeIcon,
    GithubCodeIcon,
    IGLucide,
    GithubLucide,
    GithubTwo,
    TerminalPowershell,
    VSCAdd,
    VSCSplit,
    VSCTrash,
    VSCClose,
    VSCUp,
    VSCDown,
    VSCRight,
    VSCEllipsis,
    VSCSearch,
    ReactIcon,
    PythonIcon,
    SquareSpaceIcon,
    CheckMarkIcon,
    BroadcastIcon
} from './ProfileIcons';

const numberList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]

function MobileProfile() {

    const copyNumber = (e) => {
        navigator.clipboard.writeText("4167286940")
    }

    const [theme, setTheme] = useState('dark'); // Initial theme is dark
    const mainContentRef = useRef(null)
    const [activeMainContent, setActiveMainContent] = useState('default'); // 'default' for HELLO WORLD
    const [selectedIcon, setSelectedIcon] = useState('user'); // Default selected icon is 'user'
    const [selectedItem, setSelectedItem] = useState(null); // Keep for explorer selection

    const getIconColumnClasses = (iconKey) => {
        const base = 'w-full h-14 flex justify-center items-center cursor-pointer';
        const selected = selectedIcon === iconKey
            ? (theme === 'dark' ? 'bg-[#333333] text-[#cccccc]' : 'bg-[#dedede] text-gray-800') // Updated light mode text color
            : (theme === 'dark' ? 'text-[#838383] hover:text-white' : 'text-gray-400 hover:text-gray-700');
        return `${base} ${selected}`;
    };

    const handleLeftIconClick = (iconKey) => {
        setSelectedIcon(iconKey);
        // If the 'user' icon is clicked, revert to default 'HELLO WORLD' content
        if (iconKey === 'user') {
            setActiveMainContent('default');
            setSelectedItem(null); // Clear project selection when user icon is clicked
        } else if (iconKey === 'phone_contact') { // New key for consolidated contact
            setActiveMainContent('contact'); // Set active content to 'contact'
            setSelectedItem(null);
        }
        else {
            // For other icons, if they eventually have content, you'd set activeMainContent here
            // For now, they just change the selected icon state
            setActiveMainContent(iconKey); // If you want them to display some default content based on icon
            setSelectedItem(null); // Clear project selection if an icon is clicked
        }
    };
    
    return (
        <div className=''>
            <div className='w-92 md:w-100'>
                <div className={`w-full md:w-100 `}>
                    <div className='h-8 w-full bg-[#3c3c3c] text-sm cursor-default text-stone-200 flex items-center justify-center'>
                        Tianxiao Zhang - Full Stack Developer
                    </div>
                    
                    <div className='flex w-full h-150'>

                        <div className='w-18 h-full bg-[#333333] flex justify-center'>
                            {/* <div className='mt-2'>
                                <UserCodeIcon/>
                                <div className={`${leftCol}`}>
                                    <Link target="_blank" href="mailto:tianxiaozhang@gmail.com" rel="noopener noreferrer">
                                        <MailCodeIcon/>
                                    </Link>
                                </div>
                                <div className={`${leftCol}`}>
                                    <Link target="_blank" href="https://www.instagram.com/tianxiaozhang" rel="noopener noreferrer">
                                        <IGCodeIcon/>
                                    </Link>
                                </div>
                                <div className={`${leftCol}`}>
                                    <Link target="_blank" href="https://tianphoto.ca" rel="noopener noreferrer">
                                        <WebsiteCodeIcon background={`[#333333]`} foreground={"[#858585]"}/>
                                    </Link>
                                </div>
                                <div onClick={copyNumber} className={`flex justify-center cursor-pointer ${leftCol}`}>
                                    <PhoneCodeIcon background={`[#333333]`} foreground={"[#858585]"}/>
                                </div>
                                <div className={`${leftCol}`}>
                                    <Link target="_blank" href="https://github.com/tianxiaozhang1/" rel="noopener noreferrer">
                                        <GithubCodeIcon background={`[#333333]`} foreground={"[#858585]"}/>
                                    </Link>
                                </div>
                            </div> */}

                            <div>
                                <div className={getIconColumnClasses('user')} onClick={() => handleLeftIconClick('user')}><UserIcon className='w-8 h-8' theme={theme}/></div>
                                <div className={getIconColumnClasses('github')} onClick={() => handleLeftIconClick('github')}><GithubTwo className='w-12 h-12'/></div>  
                                <div className={getIconColumnClasses('instagram')} onClick={() => handleLeftIconClick('instagram')}><IGLucide size="w-10 h-10" /></div>
                                <div className={getIconColumnClasses('phone_contact')} onClick={() => handleLeftIconClick('phone_contact')}><Phone className="w-9 h-9" strokeWidth={1.5} /></div>
                            </div>
                        </div>

                        <div className='h-full w-full overflow-hidden'>
                            <ProjectDisplay activeMainContent={activeMainContent} theme={theme} />

                            <div className='hidden'>
                                <div className={`h-full w-full bg-[#1e1e1e] flex overflow-hidden cursor-default ${sourceCodePro.className}`}>
                                    <div className={`w-8 h-full text-end pr-2 pt-0 text-stone-500 ${sourceCodePro.className}`}>
                                        {numberList.map((number, i) => {
                                            return (
                                                <div key={i} className='leading-6'>{number}</div>
                                            )
                                        })}
                                    </div>
                                    <div className=''>
                                        <div className='text-[#659849] mt-0'>&#47;&#47;&nbsp;HELLO WORLD</div>
                                        <div className='text-sky-200 flex'>name: Tian<div className='text-stone-200'>&#x2c;</div></div>

                                        <div className='text-sky-200 flex'>languages: <div className='text-yellow-200 ml-0'>&nbsp; &#123;</div></div>
                                        <div className='flex h-18'>
                                            <div className='w-1 h-12'></div>
                                            <div className='w-26 mr-4 space-x-8 flex pt-1'>
                                                <div className='w-0.25 h-22 bg-stone-600'></div>
                                                <div className='w-0.25 h-22 bg-stone-600'></div>
                                                <div className='w-0.25 h-22 bg-stone-600'></div>
                                                <div className='w-0.25 h-22 bg-stone-600'></div>
                                            </div>
                                            <div className='text-sky-200'>
                                                <div className='ml-2 flex'>python<div className='text-stone-200'>&#x2c;</div></div>
                                                <div className='ml-2 flex'>javascript<div className='text-stone-200'>&#x2c;</div></div>
                                                <div className='ml-2'>typescript</div>
                                            </div>
                                        </div>
                                        <div className='ml-29 text-yellow-200 mt-0.25 flex'>&#125;<div className='text-stone-200'>&#x2c;</div></div>

                                        <div className='text-sky-200 flex -mt-0.25'>frameworks: <div className='text-yellow-200 pl-0.5 ml-2'>&#123;</div></div>
                                        <div className='flex h-30'>
                                            <div className='w-1 h-24'></div>
                                            <div className='w-26 mr-4 space-x-8 flex pt-1.5'>
                                                <div className='w-0.25 h-34 bg-stone-600'></div>
                                                <div className='w-0.25 h-34 bg-stone-600'></div>
                                                <div className='w-0.25 h-34 bg-stone-600'></div>
                                                <div className='w-0.25 h-34 bg-stone-600'></div>
                                            </div>
                                            <div className='text-sky-200'>
                                                <div className='ml-2 flex'>django<div className='text-stone-200'>&#x2c;</div></div>
                                                <div className='ml-2 flex'>react<div className='text-stone-200'>&#x2c;</div></div>
                                                <div className='ml-2 flex'>next.js<div className='text-stone-200'>&#x2c;</div></div>
                                                <div className='ml-2 text-sky-500 flex'>vue<div className='text-stone-200'>&#x2c;</div></div>
                                                <div className='ml-2 text-sky-500'>angular</div>
                                            </div>
                                        </div>
                                        <div className='ml-29 text-yellow-200 mt-0.25 flex'>&#125;<div className='text-stone-200'>&#x2c;</div></div>

                                        <div className='text-sky-200 flex'>database: <div className='text-yellow-200 ml-2 pl-0.5'>&nbsp; &#123;</div></div>
                                        <div className='flex h-12'>
                                            <div className='w-1 h-12'></div>
                                            <div className='w-26 mr-4 space-x-8 flex pt-1'>
                                                <div className='w-0.25 h-16 bg-stone-600'></div>
                                                <div className='w-0.25 h-16 bg-stone-600'></div>
                                                <div className='w-0.25 h-16 bg-stone-600'></div>
                                                <div className='w-0.25 h-16 bg-stone-600'></div>
                                            </div>
                                            <div className='text-sky-200'>
                                                <div className='ml-2 flex'>MySQL<div className='text-stone-200'>&#x2c;</div></div>
                                                <div className='ml-2'>MongoDB</div>
                                            </div>
                                        </div>
                                        <div className='ml-29 text-yellow-200 mt-0.25 flex'>&#125;<div className='text-stone-200'>&#x2c;</div></div>

                                        <div className='text-sky-200 flex -mt-0.25'>other_skills:<div className='text-yellow-200 ml-1.5'>&#123;</div></div>
                                        <div className='flex h-30'>
                                            <div className='w-1 h-24'></div>
                                            <div className='w-29 mr-2 space-x-8 flex pt-1.5'>
                                                <div className='w-0.25 h-33 bg-stone-600'></div>
                                                <div className='w-0.25 h-33 bg-stone-600'></div>
                                                <div className='w-0.25 h-33 bg-stone-600'></div>
                                                <div className='w-0.25 h-33 bg-stone-600'></div>
                                            </div>
                                            <div className='text-sky-200 pl-0.5'>
                                                <div className='flex'>TailwindCSS<div className='text-stone-200'>&#x2c;</div></div>
                                                <div className='flex -mt-0.5'>css<div className='text-stone-200'>&#x2c;&nbsp;</div>html<div className='text-stone-200'>&#x2c;</div></div>
                                                <div className='flex'>RESTful API<div className='text-stone-200'>&#x2c;</div></div>
                                                <div className='flex'>Stripe<div className='text-stone-200'>&#x2c;</div></div>
                                                <div className=''>Firebase</div>
                                            </div>
                                        </div>
                                        <div className='ml-33 text-yellow-200 -mt-0.25 flex'>&#125;</div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>

                        <div className='w-1.5 h-full bg-[#285970]'></div>
                    </div>

                </div>
                <div className='h-6 w-full bg-[#2d7acb] flex items-center justify-between'>
                    <div className='flex'>
                        <div className='bg-[#2f815c] text-white hover:bg-[#428e8b] px-2 h-6 flex items-center cursor-pointer'>
                            <RemoteIcon/>
                        </div>
                        <div className='flex h-6 hover:bg-[#3b8bd1] items-center cursor-pointer px-1 text-white'>
                            <SourceControlIcon/>
                            <div className=' text-xs ml-0.5 '>main</div>
                        </div>
                        <div className='mx-0.5 flex justify-center items-center hover:bg-[#3b8bd1] cursor-pointer h-6 w-6 text-white'>
                            <SyncIcon/>
                        </div>

                        <div className='flex justify-center items-center hover:bg-[#3b8bd1] cursor-pointer h-6 px-1 text-white text-xs'>
                            <ErrorIcon/>
                            <div className='mx-0.5'>0</div>
                            <WarningIcon/>
                            <div className='mx-0.5'>0</div>
                        </div>
                    </div>

                    <div className='pr-1 flex text-white'>
                        <div className='hidden h-6 hover:bg-[#3b8bd1] items-center cursor-pointer px-1'>
                            <div className=' text-xxs ml-0.5 '>Ln 25, Col 1</div>
                        </div>
                        <div className='flex h-6 hover:bg-[#3b8bd1] items-center cursor-pointer px-1'>
                            <div className=' text-xs ml-0.5 '>Spaces: 4</div>
                        </div>
                        <div className='flex h-6 hover:bg-[#3b8bd1] items-center cursor-pointer px-1 pr-2'>
                            <div className=' text-xs ml-0.5 '>UTF-8</div>
                        </div>
                        <div className='flex h-6 hover:bg-[#3b8bd1] items-center cursor-pointer px-1'>
                            <FeedbackIcon/>
                        </div>
                        <div className='flex h-6 hover:bg-[#3b8bd1] items-center cursor-pointer px-1'>
                            <BellIcon/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileProfile
