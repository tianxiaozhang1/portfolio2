'use client';
import React from 'react'
import Link from 'next/link'

// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import Header from '../Header'

import mainBG from '../../../images/now/homex2b.jpg'

import fireflies from '../../../images/fireflies.jpg'

// const languageBox = "h-36 w-36 font-semibold text-3xl flex items-center justify-center rounded-3xl shadow-md cursor-default"
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

const SourceControlIcon = () => {
    return (
        <svg width="16px" height="16px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#fff">
            <path d="M21.007 8.222A3.738 3.738 0 0 0 15.045 5.2a3.737 3.737 0 0 0 1.156 6.583 2.988 2.988 0 0 1-2.668 1.67h-2.99a4.456 4.456 0 0 0-2.989 1.165V7.4a3.737 3.737 0 1 0-1.494 0v9.117a3.776 3.776 0 1 0 1.816.099 2.99 2.99 0 0 1 2.668-1.667h2.99a4.484 4.484 0 0 0 4.223-3.039 3.736 3.736 0 0 0 3.25-3.687zM4.565 3.738a2.242 2.242 0 1 1 4.484 0 2.242 2.242 0 0 1-4.484 0zm4.484 16.441a2.242 2.242 0 1 1-4.484 0 2.242 2.242 0 0 1 4.484 0zm8.221-9.715a2.242 2.242 0 1 1 0-4.485 2.242 2.242 0 0 1 0 4.485z"/>
        </svg>
    )
}

const SyncIcon = () => {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#fff"><path fillRule="evenodd" clipRule="evenodd" d="M2.006 8.267L.78 9.5 0 8.73l2.09-2.07.76.01 2.09 2.12-.76.76-1.167-1.18a5 5 0 0 0 9.4 1.983l.813.597a6 6 0 0 1-11.22-2.683zm10.99-.466L11.76 6.55l-.76.76 2.09 2.11.76.01 2.09-2.07-.75-.76-1.194 1.18a6 6 0 0 0-11.11-2.92l.81.594a5 5 0 0 1 9.3 2.346z"/></svg>
    )
}

const ErrorIcon = () => {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#fff"><path fillRule="evenodd" clipRule="evenodd" d="M8.6 1c1.6.1 3.1.9 4.2 2 1.3 1.4 2 3.1 2 5.1 0 1.6-.6 3.1-1.6 4.4-1 1.2-2.4 2.1-4 2.4-1.6.3-3.2.1-4.6-.7-1.4-.8-2.5-2-3.1-3.5C.9 9.2.8 7.5 1.3 6c.5-1.6 1.4-2.9 2.8-3.8C5.4 1.3 7 .9 8.6 1zm.5 12.9c1.3-.3 2.5-1 3.4-2.1.8-1.1 1.3-2.4 1.2-3.8 0-1.6-.6-3.2-1.7-4.3-1-1-2.2-1.6-3.6-1.7-1.3-.1-2.7.2-3.8 1-1.1.8-1.9 1.9-2.3 3.3-.4 1.3-.4 2.7.2 4 .6 1.3 1.5 2.3 2.7 3 1.2.7 2.6.9 3.9.6zM7.9 7.5L10.3 5l.7.7-2.4 2.5 2.4 2.5-.7.7-2.4-2.5-2.4 2.5-.7-.7 2.4-2.5-2.4-2.5.7-.7 2.4 2.5z"/></svg>
    )
}

const WarningIcon = () => {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#fff"><path fillRule="evenodd" clipRule="evenodd" d="M7.56 1h.88l6.54 12.26-.44.74H1.44L1 13.26 7.56 1zM8 2.28L2.28 13H13.7L8 2.28zM8.625 12v-1h-1.25v1h1.25zm-1.25-2V6h1.25v4h-1.25z"/></svg>
    )
}

const RemoteIcon = () => {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#fff"><path fillRule="evenodd" clipRule="evenodd" d="M12.904 9.57L8.928 5.596l3.976-3.976-.619-.62L8 5.286v.619l4.285 4.285.62-.618zM3 5.62l4.072 4.07L3 13.763l.619.618L8 10v-.619L3.619 5 3 5.619z"/></svg>
    )
}

const BellIcon = () => {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#fff">
            <path d="M13.377 10.573a7.63 7.63 0 0 1-.383-2.38V6.195a5.115 5.115 0 0 0-1.268-3.446 5.138 5.138 0 0 0-3.242-1.722c-.694-.072-1.4 0-2.07.227-.67.215-1.28.574-1.794 1.053a4.923 4.923 0 0 0-1.208 1.675 5.067 5.067 0 0 0-.431 2.022v2.2a7.61 7.61 0 0 1-.383 2.37L2 12.343l.479.658h3.505c0 .526.215 1.04.586 1.412.37.37.885.586 1.412.586.526 0 1.04-.215 1.411-.586s.587-.886.587-1.412h3.505l.478-.658-.586-1.77zm-4.69 3.147a.997.997 0 0 1-.705.299.997.997 0 0 1-.706-.3.997.997 0 0 1-.3-.705h1.999a.939.939 0 0 1-.287.706zm-5.515-1.71l.371-1.114a8.633 8.633 0 0 0 .443-2.691V6.004c0-.563.12-1.113.347-1.616.227-.514.55-.969.969-1.34.419-.382.91-.67 1.436-.837.538-.18 1.1-.24 1.65-.18a4.147 4.147 0 0 1 2.597 1.4 4.133 4.133 0 0 1 1.004 2.776v2.01c0 .909.144 1.818.443 2.691l.371 1.113h-9.63v-.012z"/>
        </svg>
    )
}

const FeedbackIcon = () => {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#fff">
            <path d="M4.5 1L4 1.5V3.02746C4.16417 3.00932 4.331 3 4.5 3C4.669 3 4.83583 3.00932 5 3.02746V2H14V7H12.2929L11 8.29289V7H8.97254C8.99068 7.16417 9 7.331 9 7.5C9 7.669 8.99068 7.83583 8.97254 8H10V9.5L10.8536 9.85355L12.7071 8H14.5L15 7.5V1.5L14.5 1H4.5Z"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M6.41705 10.4288C7.37039 9.80348 8 8.72527 8 7.5C8 5.567 6.433 4 4.5 4C2.567 4 1 5.567 1 7.5C1 8.72527 1.62961 9.80348 2.58295 10.4288C2.11364 10.6498 1.68557 10.9505 1.31802 11.318C0.900156 11.7359 0.568688 12.232 0.342542 12.7779C0.180451 13.1692 0.0747425 13.5807 0.0278638 14C0.00933826 14.1657 0 14.3326 0 14.5V15H1L0.999398 14.5C0.999398 14.4784 0.999599 14.4567 1 14.4351C1.00811 13.9975 1.09823 13.5651 1.26587 13.1604C1.44179 12.7357 1.69964 12.3498 2.0247 12.0247C2.34976 11.6996 2.73566 11.4418 3.16038 11.2659C3.57088 11.0958 4.00986 11.0056 4.45387 10.9997C4.46922 10.9999 4.4846 11 4.5 11C4.5154 11 4.53078 10.9999 4.54613 10.9997C4.99014 11.0056 5.42912 11.0958 5.83962 11.2659C6.26433 11.4418 6.65024 11.6996 6.9753 12.0247C7.30036 12.3498 7.55821 12.7357 7.73413 13.1604C7.90177 13.5651 7.99189 13.9975 8 14.4351C8.0004 14.4567 8.0006 14.4784 8.0006 14.5L8 15H9V14.5C9 14.3326 8.99066 14.1657 8.97214 14C8.92526 13.5807 8.81955 13.1692 8.65746 12.7779C8.43131 12.232 8.09984 11.7359 7.68198 11.318C7.31443 10.9505 6.88636 10.6498 6.41705 10.4288ZM4.5 10C3.11929 10 2 8.88071 2 7.5C2 6.11929 3.11929 5 4.5 5C5.88071 5 7 6.11929 7 7.5C7 8.88071 5.88071 10 4.5 10Z"/>
        </svg>
    )
}

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

// const MailIcon = () => {
//     return (
//         <div className={`w-14 h-14 bg-slate-100`}>
//             <div className='h-2'></div>
//             <div className='flex'>
//                 <div className={`w-2 h-2 bg-[#436bb0]`}></div>
//                 <div className={`w-10 h-2 bg-slate-100`}></div>
//                 <div className={`w-2 h-2 bg-[#436bb0]`}></div>
//             </div>
//             <div className='flex'>
//                 <div className={`w-2 h-2 bg-slate-100`}></div>
//                 <div className={`w-2 h-2 bg-[#436bb0]`}></div>
//                 <div className={`w-6 h-2 bg-slate-100`}></div>
//                 <div className={`w-2 h-2 bg-[#436bb0]`}></div>
//             </div>
//             <div className='flex'>
//                 <div className={`w-4 h-2 bg-slate-100`}></div>
//                 <div className={`w-2 h-2 bg-[#436bb0]`}></div>
//                 <div className={`w-2 h-2 bg-slate-100`}></div>
//                 <div className={`w-2 h-2 bg-[#436bb0]`}></div>
//             </div>
//             <div className='flex'>
//                 <div className={`w-6 h-2 bg-slate-100`}></div>
//                 <div className={`w-2 h-2 bg-[#436bb0]`}></div>
//             </div>
//         </div>
//     )
// }

// const IGIcon = () => {
//     return (
//         <div className={`w-14 h-14 flex justify-center items-center bg-slate-100`}>
//             <div className={`w-10 h-10 bg-[#436bb0]`}>
//                 <div className='flex'>
//                     <div className={`w-8 h-2 bg-[#436bb0]`}></div>
//                     <div className={`w-2 h-2 bg-slate-100`}></div>
//                 </div>
//                 <div className='flex'>
//                     <div className={`w-2 h-6 bg-[#436bb0]`}></div>
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
//                 <div className={`w-10 h-6 bg-[#436bb0]`}>
//                 </div>
//             </div>
//             <div className='w-14 h-2 bg-[#436bb0]'></div>
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
//                     <div className={`w-6 h-6 bg-[#436bb0]`}></div>
//                 </div>
//                 <div className={`w-2 h-2 bg-slate-100`}></div>
//                 <div className='flex'>
//                     <div className={`w-2 h-2 bg-slate-100`}></div>
//                     <div className={`w-6 h-2 bg-[#436bb0]`}></div>
//                 </div>
//             </div>

//         </div>
//     )
// }

// const GithubIcon = () => {
//     return (
//         <div className=''>
//             <div className={`w-14 h-2 flex bg-[#436bb0]`}>
//                 <div className={`w-2 h-2 bg-[#436bb0]`}></div>
//                 <div className={`w-2 h-2 bg-slate-100`}></div>
//                 <div className={`w-6 h-2 bg-[#436bb0]`}></div>
//                 <div className={`w-2 h-2 bg-slate-100`}></div>
//             </div>
//             <div className={`w-14 h-10 flex bg-slate-100`}></div>
//             <div className={`w-14 h-2 flex bg-[#436bb0]`}>
//                 <div className={`w-4 h-2 bg-[#436bb0]`}></div>
//                 <div className={`w-6 h-2 bg-slate-100`}></div>
//             </div>
//         </div>
//     )
// }

const UserIcon = () => {
    return (
        <div className={`w-14 h-14`}>
            <div className='flex'>
                <div className={`w-4 h-6 bg-rouLan`}></div>
                <div className={`w-6 h-6 bg-slate-100`}></div>
            </div>
            <div className={`w-14 h-2 bg-rouLan`}></div>
            <div className={`w-14 h-6 bg-slate-100`}></div>
        </div>
    )
}

const UserCodeIcon = () => {
    return (
        <div className={`w-14 h-14 scale-50`}>
            <div className='flex'>
                <div className={`w-4 h-6 `}></div>
                <div className={`w-6 h-6 bg-stone-100`}></div>
            </div>
            <div className={`w-14 h-2 `}></div>
            <div className={`w-14 h-6 bg-stone-100`}></div>
        </div>
    )
}

const MailCodeIcon = () => {
    return (
        <div className={`w-14 h-14 bg-[#858585] scale-50`}>
            <div className='h-2'></div>
            <div className='flex'>
                <div className={`w-2 h-2 bg-[#333333]`}></div>
                <div className={`w-10 h-2 bg-[#858585]`}></div>
                <div className={`w-2 h-2 bg-[#333333]`}></div>
            </div>
            <div className='flex'>
                <div className={`w-2 h-2 bg-[#858585]`}></div>
                <div className={`w-2 h-2 bg-[#333333]`}></div>
                <div className={`w-6 h-2 bg-[#858585]`}></div>
                <div className={`w-2 h-2 bg-[#333333]`}></div>
            </div>
            <div className='flex'>
                <div className={`w-4 h-2 bg-[#858585]`}></div>
                <div className={`w-2 h-2 bg-[#333333]`}></div>
                <div className={`w-2 h-2 bg-[#858585]`}></div>
                <div className={`w-2 h-2 bg-[#333333]`}></div>
            </div>
            <div className='flex'>
                <div className={`w-6 h-2 bg-[#858585]`}></div>
                <div className={`w-2 h-2 bg-[#333333]`}></div>
            </div>
        </div>
    )
}

const IGCodeIcon = () => {
    return (
        <div className={`w-14 h-14 flex justify-center items-center bg-[#858585] scale-50`}>
            <div className={`w-10 h-10 bg-[#333333]`}>
                <div className='flex'>
                    <div className={`w-8 h-2 `}></div>
                    <div className={`w-2 h-2 bg-[#858585]`}></div>
                </div>
                <div className='flex'>
                    <div className={`w-2 h-6 `}></div>
                    <div className={`w-6 h-6 bg-[#858585]`}></div>
                </div>
            </div>
        </div>
    )
}

const WebsiteCodeIcon = ({background, foreground}) => {
    return (
        <div className='scale-50'>
            <div className={`w-14 h-10 flex justify-center items-center bg-${foreground}`}>
                <div className={`w-10 h-6 bg-${background}`}>
                </div>
            </div>
            <div className='w-14 h-2 '></div>
            <div className={`w-14 h-2 bg-${foreground}`}></div>
        </div>
    )
}

const PhoneCodeIcon = ({background, foreground}) => {
    return (
        <div className='scale-50'>
            <div className={`w-10 h-14 bg-${foreground}`}>
                <div className={`w-10 h-2 bg-${foreground}`}></div>
                <div className='flex'>
                    <div className={`w-2 h-6 bg-${foreground}`}></div>
                    <div className={`w-6 h-6 bg-${background}`}></div>
                </div>
                <div className={`w-2 h-2 bg-${foreground}`}></div>
                <div className='flex'>
                    <div className={`w-2 h-2 bg-${foreground}`}></div>
                    <div className={`w-6 h-2 bg-${background}`}></div>
                </div>
            </div>

        </div>
    )
}

const GithubCodeIcon = ({background, foreground}) => {
    return (
        <div className='scale-50 hover:cursor-pointer'>
            <div className={`w-14 h-2 flex bg-${background} `}>
                <div className={`w-2 h-2 bg-${background}`}></div>
                <div className={`w-2 h-2 bg-${foreground}`}></div>
                <div className={`w-6 h-2 bg-${background}`}></div>
                <div className={`w-2 h-2 bg-${foreground}`}></div>
            </div>
            <div className={`w-14 h-10 flex bg-${foreground}`}></div>
            <div className={`w-14 h-2 flex bg-${background}`}>
                <div className={`w-4 h-2 bg-${background}`}></div>
                <div className={`w-6 h-2 bg-${foreground}`}></div>
            </div>
        </div>
    )
}

const MailIcon = () => {
    return (
        <div className={`w-14 h-14 bg-slate-100`}>
            <div className='h-2'></div>
            <div className='flex'>
                <div className={`w-2 h-2 bg-[#344e6c]`}></div>
                <div className={`w-10 h-2 bg-slate-100`}></div>
                <div className={`w-2 h-2 bg-[#344e6c]`}></div>
            </div>
            <div className='flex'>
                <div className={`w-2 h-2 bg-slate-100`}></div>
                <div className={`w-2 h-2 bg-[#344e6c]`}></div>
                <div className={`w-6 h-2 bg-slate-100`}></div>
                <div className={`w-2 h-2 bg-[#344e6c]`}></div>
            </div>
            <div className='flex'>
                <div className={`w-4 h-2 bg-slate-100`}></div>
                <div className={`w-2 h-2 bg-[#344e6c]`}></div>
                <div className={`w-2 h-2 bg-slate-100`}></div>
                <div className={`w-2 h-2 bg-[#344e6c]`}></div>
            </div>
            <div className='flex'>
                <div className={`w-6 h-2 bg-slate-100`}></div>
                <div className={`w-2 h-2 bg-[#344e6c]`}></div>
            </div>
        </div>
    )
}

const IGIcon = () => {
    return (
        <div className={`w-14 h-14 flex justify-center items-center bg-slate-100`}>
            <div className={`w-10 h-10 bg-[#344e6c]`}>
                <div className='flex'>
                    <div className={`w-8 h-2 `}></div>
                    <div className={`w-2 h-2 bg-slate-100`}></div>
                </div>
                <div className='flex'>
                    <div className={`w-2 h-6 `}></div>
                    <div className={`w-6 h-6 bg-slate-100`}></div>
                </div>
            </div>
        </div>
    )
}

const WebsiteIcon = () => {
    return (
        <div className=''>
            <div className={`w-14 h-10 flex justify-center items-center bg-slate-100`}>
                <div className={`w-10 h-6 bg-[#344e6c]`}>
                </div>
            </div>
            <div className='w-14 h-2 '></div>
            <div className='w-14 h-2 bg-slate-100'></div>
        </div>
    )
}

const PhoneIcon = () => {
    return (
        <div className=''>
            <div className={`w-10 h-14 bg-slate-100`}>
                <div className={`w-10 h-2 bg-slate-100`}></div>
                <div className='flex'>
                    <div className={`w-2 h-6 bg-slate-100`}></div>
                    <div className={`w-6 h-6 bg-[#344e6c]`}></div>
                </div>
                <div className={`w-2 h-2 bg-slate-100`}></div>
                <div className='flex'>
                    <div className={`w-2 h-2 bg-slate-100`}></div>
                    <div className={`w-6 h-2 bg-[#344e6c]`}></div>
                </div>
            </div>

        </div>
    )
}

const GithubIcon = () => {
    return (
        <div className=''>
            <div className={`w-14 h-2 flex `}>
                <div className={`w-2 h-2 `}></div>
                <div className={`w-2 h-2 bg-slate-100`}></div>
                <div className={`w-6 h-2 `}></div>
                <div className={`w-2 h-2 bg-slate-100`}></div>
            </div>
            <div className={`w-14 h-10 flex bg-slate-100`}></div>
            <div className={`w-14 h-2 flex `}>
                <div className={`w-4 h-2 `}></div>
                <div className={`w-6 h-2 bg-slate-100`}></div>
            </div>
        </div>
    )
}
 
const numberList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]

function Profile() {

    const copyNumber = (e) => {
        navigator.clipboard.writeText("4167286940")
    }

    let height = screen.height;

    return (
        <div className='w-full lg:h-screen flex justify-center items-center bg-gradient-to-br from-[#d7eaf7] to-[#f9f9f9]'>

            <div className='hidden w-92 h-78 md:w-190 md:h-132 lg:w-252 lg:h-120 xl:w-316 xl:h-152 rounded-3xl overflow-hidden home-box p-1.5 justify-center items-center shadow-md' >
                <div className='w-full h-full p-6 bg-white rounded-2xl inset-shadow-sm inset-shadow-indigo-500 flex justify-center items-center'>
                    <div className=' text-rouLan'>
                        <div className='text-2xl lg:text-4xl text-center font-semibold text-rouLan flex justify-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7 lg:size-10 flex justify-center mt-1 lg:mt-2.5 mr-3">
                                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                            </svg>
                            <div className=''>tian</div>
                            xiao zhang
                        </div>

                        <div className='lg:text-xl font-semibold text-center'>416 728 6940</div>
                        <div className='lg:text-xl font-semibold -mt-2 mb-6 text-center'>tianxiaozhang@gmail.com</div>

                        <div className='space-x-1 lg:space-x-3 flex mx-auto'>
                            <div className={`bg-gradient-to-br from-[#3c6a98] to-[#24415d] text-[#fada65] ${languageBoxSmall}`}>python</div>
                            <div className={`bg-gradient-to-br from-[#f9f78b] to-[#dec55f] text-slate-950 ${languageBoxSmall} `}>JS</div>
                            <div className={`bg-gradient-to-br from-[#4178c5] to-[#2f5a96] text-slate-50 ${languageBoxSmall}`}>TS</div>   
                            <div className={`bg-gradient-to-br from-[#58ac65] to-[#194b33] text-white ${languageBoxSmall} ${roboto.className}`}>django</div>                         
                            <div className={`bg-gradient-to-br from-sky-400 to-[#2d7ea3] text-white ${languageBoxSmall}`}>react</div>                            
                        </div>
                        <div className='space-x-1 lg:space-x-3 flex mt-3'>
                            <div className={`bg-gradient-to-br from-[#42b7e9] to-[#2562ac] text-white ${languageBoxSmall} ${openSans.className} font-bold`}>SQL</div>
                            <div className={`bg-gradient-to-br from-slate-500 to-slate-900 text-slate-100 ${languageBoxSmall}`}>next.js</div>
                            <div className={`bg-gradient-to-br from-[#3cbbff] to-rouLan text-white ${languageBoxSmall}`}>tailwind</div>
                            <div className={`bg-gradient-to-br from-[#56b782] to-[#38495e] text-slate-50 ${languageBoxSmall}`}>vue</div>   
                            <div className={`bg-gradient-to-br from-[#8d2bfc] to-[#de316e] text-slate-50 ${languageBoxSmall}`}>angular</div>  
                        </div>
                    </div>
                </div>
            </div>
            <div className='hidden w-92 h-78 md:w-190 md:h-132 lg:w-252 lg:h-120 xl:w-316 xl:h-152 overflow-hidden bg-gradient-to-b from-slate-900 to-slate-700 justify-center items-center space-y-2 p-2 pb-6'>
                <div className=' h-1/3 w-full flex space-x-2'>
                    <div className='w-1/6 h-full bg-rouLan text-slate-200'>
                        <div className='h-1/3'></div>
                        <div className='h-1/3 flex justify-center items-center text-slate-100'>
                            <UserIcon/>
                        </div>
                        <div className='h-1/3 flex items-end pb-2 pl-2 font-semibold'>Tianxiao Zhang</div>
                    </div>

                    <div className='w-1/6 h-full bg-gradient-to-br from-[#4178c5] to-[#2f5a96] text-slate-100'>
                        <div className='h-1/3'></div>
                        <div className='h-1/3 flex justify-center items-center text-slate-100'>
                            <MailIcon/>
                        </div>
                        <div className='h-1/3 flex items-end pb-2.5 pl-2 text-sm'>tianxiaozhang@gmail.com</div>
                    </div>

                    <div className='w-1/6 h-full bg-gradient-to-br from-[#4178c5] to-[#2f5a96] text-slate-100'>
                        <div className='h-1/3'></div>
                        <div className='h-1/3 flex justify-center items-center text-slate-100'>
                            <PhoneIcon/>
                        </div>
                        <div className='h-1/3 flex items-end pb-2 pl-2 font-semibold'>416 728 6940</div>
                    </div>

                    <div className='w-1/6 h-full bg-gradient-to-br from-[#4178c5] to-[#2f5a96] text-slate-100'>
                        <div className='h-1/3'></div>
                        <div className='h-1/3 flex justify-center items-center text-slate-100'>
                            <GithubIcon/>
                        </div>
                        <div className='h-1/3 flex items-end pb-2 pl-2 font-semibold'>tianxiaozhang1</div>
                    </div>

                    <div className='w-1/6 h-full bg-gradient-to-br from-[#4178c5] to-[#2f5a96] text-slate-100'>
                        <div className='h-1/3'></div>
                        <div className='h-1/3 flex justify-center items-center text-slate-100'>
                            <IGIcon/>
                        </div>
                        <div className='h-1/3 flex items-end pb-2 pl-2 font-semibold'>@tianxiaozhang</div>
                    </div>

                    <div className='w-1/6 h-full bg-gradient-to-br from-[#4178c5] to-[#2f5a96] text-slate-100'>
                        <div className='h-1/3'></div>
                        <div className='h-1/3 flex justify-center items-center text-slate-100'>
                            <WebsiteIcon/>
                        </div>
                        <div className='h-1/3 flex items-end pb-2 pl-2 font-semibold'>tianphoto.ca</div>
                    </div>
                    
                </div>
                <div className=' h-1/3 w-full flex space-x-2'>
                    <div className='w-1/6 h-full flex justify-center items-center text-4xl bg-gradient-to-br from-[#3c6a98] to-[#24415d] text-[#fada65]'>
                        <div className={`${sourceSans3.className}`}>python</div>
                    </div>

                    <div className='w-1/6 h-full flex justify-center items-center text-4xl bg-gradient-to-br from-[#f9f78b] to-[#dec55f] text-slate-950'>
                        <div className={`${sourceSans3.className}`}>js</div>
                    </div>

                    <div className='w-1/6 h-full flex justify-center items-center text-4xl bg-gradient-to-br from-[#4178c5] to-[#2f5a96] text-slate-50'>
                        <div className={`${sourceSans3.className}`}>ts</div>
                    </div>

                    <div className='w-1/6 h-full flex justify-center items-center text-4xl bg-[#194b33] text-slate-200'>
                        <div className={`${sourceSans3.className}`}>django</div>
                    </div>

                    <div className='w-1/6 h-full flex justify-center items-center text-4xl bg-gradient-to-br from-sky-400 to-[#2d7ea3] text-white'>
                        <div className={`${sourceSans3.className}`}>react</div>
                    </div>

                    <div className='w-1/6 h-full flex justify-center items-center text-4xl bg-[#2562ac] text-white'>
                        <div className={`${sourceSans3.className}`}>SQL</div>
                    </div>
                </div>
                <div className=' h-1/3 w-full flex space-x-2'>
                    <div className='w-1/6 h-full flex justify-center items-center text-4xl bg-gradient-to-br from-slate-600 to-slate-900 text-slate-200'>
                        <div className={`${sourceSans3.className}`}>next.js</div>
                    </div>
                    
                    <div className='w-1/6 h-full flex justify-center items-center text-4xl bg-gradient-to-br from-[#3cbbff] to-rouLan text-slate-100'>
                        <div className={`${sourceSans3.className}`}>tailwind</div>
                    </div>

                    <div className='w-1/6 h-full flex justify-center items-center text-4xl bg-gradient-to-br from-[#56b782] to-[#38495e] text-slate-50'>
                        <div className={`${sourceSans3.className}`}>vue</div>
                    </div>

                    <div className='w-1/6 h-full flex justify-center items-center text-4xl bg-gradient-to-br from-[#8d2bfc] to-[#de316e] text-slate-50'>
                        <div className={`${sourceSans3.className}`}>angular</div>
                    </div>

                    <div className='w-1/6 h-full grid grid-cols-2 gap-1 text-2xl  text-white'>
                        <div className={`bg-gradient-to-br from-sky-400 to-[#2d7ea3] flex justify-center items-center ${sourceSans3.className}`}>html</div>
                        <div className={`bg-rouLan flex justify-center items-center ${sourceSans3.className}`}>css</div>
                        <div className={`bg-rouLan flex justify-center items-center ${sourceSans3.className}`}>react</div>
                        <div className={`bg-rouLan flex justify-center items-center ${sourceSans3.className}`}>react</div>
                    </div>

                    <div className='w-1/6 h-full flex justify-center items-center text-4xl bg-[#2562ac] text-white' style={{
                            background: `url(${mainBG.src})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            opacity: 1,
                        }} >
                        
                    </div>
                </div>
            </div>
            <div className='hidden lg:w-252 lg:h-120 xl:w-316 xl:h-152 overflow-hidden bg-gradient-to-b from-slate-100 to-slate-100  grid-cols-1 gap-1 p-2 pb-6'>
                <div className='h-full w-full grid grid-cols-3 lg:grid-cols-6 gap-1'>
                    <div className='h-28 lg:h-full bg-rouLan text-slate-200'>
                        <div className='h-1/3'></div>
                        <div className='h-1/3 justify-center items-center text-slate-200 hidden lg:flex'>
                            <UserIcon/>
                        </div>
                        <div className='h-1/3 flex justify-center items-center text-center text-slate-200 font-semibold'>
                            Tianxiao Zhang
                        </div>
                        <div className='h-1/3 justify-center items-end pb-8 font-semibold cursor-default hidden lg:flex'>Tianxiao Zhang</div>
                    </div>

                    <div className='h-28 lg:h-full bg-gradient-to-br from-[#0b2741] to-[#5e85a9] text-slate-200'>
                        <Link target="_blank" href="mailto:tianxiaozhang@gmail.com" rel="noopener noreferrer" className={``}>
                            <div className='h-1/3'></div>
                            <div className='h-1/3 flex justify-center items-center text-slate-200 scale-75 lg:scale-100'>
                                <MailIcon/>
                            </div>
                            <div className='h-1/3  hidden lg:flex justify-center items-end pb-8 font-semibold text-sm'>tianxiaozhang@gmail.com</div>
                        </Link>
                    </div>
                    
                    <div onClick={copyNumber} className='h-28 lg:h-full bg-gradient-to-br from-[#0b2741] to-[#5e85a9] text-slate-200 cursor-pointer'>
                        <div className='h-1/3'></div>
                        <div className='h-1/3 flex justify-center items-center text-slate-100 scale-75 lg:scale-100'>
                                <PhoneIcon/>
                        </div>
                        <div className='h-1/3  hidden lg:flex justify-center items-end pb-8 font-semibold'>416 728 6940</div>
                    </div>

                    <div className='h-28 lg:h-full bg-gradient-to-br from-[#0b2741] to-[#5e85a9] text-slate-200'>
                        <Link target="_blank" href="https://github.com/tianxiaozhang1/" rel="noopener noreferrer" className={``}>
                            <div className='h-1/3'></div>
                            <div className='h-1/3 flex justify-center items-center text-slate-100 scale-75 lg:scale-100'>
                                <GithubIcon/>
                            </div>
                            <div className='h-1/3 justify-center items-end pb-8 font-semibold hidden lg:flex'>tianxiaozhang1</div>
                        </Link>
                    </div>

                    <div className='h-28 lg:h-full bg-gradient-to-br from-[#0b2741] to-[#5e85a9] text-slate-100'>
                        <Link target="_blank" href="https://www.instagram.com/tianxiaozhang" rel="noopener noreferrer" className={``}>
                            <div className='h-1/3'></div>
                            <div className='h-1/3 flex justify-center items-center text-slate-200 scale-75 lg:scale-100'>
                                <IGIcon/>
                            </div>
                            <div className='h-1/3  hidden lg:flex justify-center items-end pb-8 font-semibold'>@tianxiaozhang</div>
                        </Link>
                    </div>

                    <div className='h-28 lg:h-full bg-gradient-to-br from-[#0b2741] to-[#5e85a9] text-slate-100'>
                        <Link target="_blank" href="https://tianphoto.ca" rel="noopener noreferrer" className={``}>
                            <div className='h-1/3'></div>
                            <div className='h-1/3 flex justify-center items-center text-slate-200 scale-75 lg:scale-100'>
                                <WebsiteIcon/>
                            </div>
                            <div className='h-1/3 hidden lg:flex justify-center items-end pb-8 font-semibold'>tianphoto.ca</div>
                        </Link>
                    </div>
                    
                </div>
                <div className='h-full w-full grid grid-cols-3 lg:grid-cols-6 gap-1'>
                    <div className={`bg-gradient-to-br from-[#3c6a98] to-[#24415d] text-[#fada65] ${winPhoneStyle}`}>
                        <div className={`${sourceSans3.className}`}>python</div>
                    </div>

                    <div className={`bg-gradient-to-br from-[#f9f78b] to-[#dec55f] text-slate-950 ${winPhoneStyle}`}>
                        <div className={`${sourceSans3.className}`}>js</div>
                    </div>

                    <div className={`bg-gradient-to-br from-[#4178c5] to-[#2f5a96] text-slate-50 ${winPhoneStyle}`}>
                        <div className={`${sourceSans3.className}`}>ts</div>
                    </div>

                    <div className={`bg-[#194b33] text-slate-200 ${winPhoneStyle}`}>
                        <div className={`${sourceSans3.className}`}>django</div>
                    </div>

                    <div className={`bg-gradient-to-br from-sky-800 to-[#2d7ea3] text-white ${winPhoneStyle}`}>
                        <div className={`${sourceSans3.className}`}>react</div>
                    </div>

                    <div className={`bg-[#2562ac] text-white ${winPhoneStyle}`}>
                        <div className={`${sourceSans3.className}`}>SQL</div>
                    </div>
                </div>
                <div className='h-full w-full grid grid-cols-3 lg:grid-cols-6 gap-1'>
                    <div className={`bg-gradient-to-br from-slate-600 to-slate-900 text-slate-200 ${winPhoneStyle}`}>
                        <div className={`${sourceSans3.className}`}>next.js</div>
                    </div>
                    
                    <div className={`bg-gradient-to-br from-[#3cbbff] to-sky-900 text-slate-100 ${winPhoneStyle}`}>
                        <div className={`${sourceSans3.className}`}>tailwind</div>
                    </div>

                    <div className={`bg-gradient-to-br from-[#56b782] to-[#38495e] text-slate-50 ${winPhoneStyle}`}>
                        <div className={`${sourceSans3.className}`}>vue</div>
                    </div>

                    <div className={`bg-gradient-to-br from-[#8d2bfc] to-[#de316e] text-slate-50 ${winPhoneStyle}`}>
                        <div className={`${sourceSans3.className}`}>angular</div>
                    </div>

                    <div className={`bg-[#BA79B1] text-slate-50 ${winPhoneStyle}`}>
                        <div className={`${sourceSans3.className}`}>css</div>
                    </div>

                    <div className={`bg-[#94784F] text-slate-50 ${winPhoneStyle}`}>
                        <div className={`${sourceSans3.className}`}>html</div>
                    </div>

                    {/* <div className='w-1/6 h-full grid grid-cols-2 gap-1 text-2xl  text-white'>
                        <div className={`bg-[#94784F] flex justify-center items-center cursor-default ${sourceSans3.className}`}>html</div>
                        <div className={`bg-[#B81A35] flex justify-center items-center cursor-default ${sourceSans3.className}`}>css</div>
                        <div className={`bg-[#BA79B1] flex justify-center items-center cursor-default ${sourceSans3.className}`}>react</div>
                        <div className={`bg-[#84A729] flex justify-center items-center cursor-default ${sourceSans3.className}`}>react</div>
                    </div>

                    <div className='w-1/6 h-full flex justify-center items-center text-4xl bg-[#2562ac] text-white' style={{
                            background: `url(${mainBG.src})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            opacity: 1,
                        }} >
                        
                    </div> */}
                </div>
            </div>
            <div className='hidden w-full md:w-190 md:h-132 bg-white ' style={{
                            background: `url(${fireflies.src})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            opacity: 1,
                            height: height-190
                        }} >
                
                {/* <Header/>
                <div className='text-3xl text-center my-6'>Hi! I'm Tian.</div>
                <div className='text-4xl font-semibold text-center px-12 leading-10 text-slate-800'>Full-Stack Developer</div> */}
                
                <div className='flex w-full h-12 '>

                </div>

                <div className='flex w-full h-48 '>
                    <div className='w-1/2 h-full flex justify-center'>
                        <div className='rounded-3xl  w-48 h-48'></div>
                    </div>
                    <div className='grid grid-cols-2 gap-0.5'>
                    <div className=' bg-rouLan h-20 w-20'></div>
                    <div className=' bg-rouLan h-20 w-20'></div>
                    <div className=' bg-rouLan h-20 w-20'></div>
                    <div className=' bg-rouLan h-20 w-20'></div>
                    </div>
                </div>

                <div className='flex w-full h-22  justify-between items-center px-3 space-x-1'>
                    <div className=' bg-rouLan h-20 w-22'></div>
                    <div className=' bg-rouLan h-20 w-22'></div>
                    <div className=' bg-rouLan h-20 w-22'></div>
                    <div className=' bg-rouLan h-20 w-22'></div>

                </div>
            </div>

            <div className='w-full md:w-100'>
                <div className={`w-full h-158 md:w-100 bg-red-800`}>
                    <div className='h-8 w-full bg-[#3c3c3c] text-sm cursor-default text-stone-200 flex items-center justify-center'>
                        Tianxiao Zhang - Full Stack Developer
                    </div>
                    
                    <div className='flex w-full h-150'>

                        <div className='w-20 h-full bg-[#333333] flex justify-center'>
                            <div className='mt-2'>
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
                            </div>
                        </div>

                        <div className={`bg-[#1e1e1e] h-full w-full flex overflow-hidden cursor-default ${sourceCodePro.className}`}>
                            <div className={`w-8 h-full text-end pr-2 pt-0 text-stone-500 ${sourceCodePro.className}`}>
                                {numberList.map((number, i) => {
                                    return (
                                        <div key={i} className='leading-6'>{number}</div>
                                    )
                                })}
                            </div>
                            <div className=''>
                                <div className='text-[#659849] mt-0'>//HELLO WORLD</div>
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

                                <div className='text-sky-200 flex '>other_skills:<div className='text-yellow-200 ml-1.5'>&#123;</div></div>
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

                        <div className='w-1.5 h-full bg-[#285970]'></div>
                    </div>

                </div>
                <div className='h-6 w-full bg-[#2d7acb] flex items-center justify-between'>
                    <div className='flex'>
                        <div className='bg-[#2f815c] hover:bg-[#428e8b] px-2 h-6 flex items-center cursor-pointer'>
                            <RemoteIcon/>
                        </div>
                        <div className='flex h-6 hover:bg-[#3b8bd1] items-center cursor-pointer px-1'>
                            <SourceControlIcon/>
                            <div className='text-white text-xs ml-0.5 '>main</div>
                        </div>
                        <div className='mx-0.5 flex justify-center items-center hover:bg-[#3b8bd1] cursor-pointer h-6 w-6'>
                            <SyncIcon/>
                        </div>

                        <div className='flex justify-center items-center hover:bg-[#3b8bd1] cursor-pointer h-6 px-1 text-white text-xs'>
                            <ErrorIcon/>
                            <div className='mx-0.5'>0</div>
                            <WarningIcon/>
                            <div className='mx-0.5'>0</div>
                        </div>
                    </div>

                    <div className='pr-1 flex'>
                        <div className='hidden h-6 hover:bg-[#3b8bd1] items-center cursor-pointer px-1'>
                            <div className='text-white text-xxs ml-0.5 '>Ln 25, Col 1</div>
                        </div>
                        <div className='flex h-6 hover:bg-[#3b8bd1] items-center cursor-pointer px-1'>
                            <div className='text-white text-xs ml-0.5 '>Spaces: 4</div>
                        </div>
                        <div className='flex h-6 hover:bg-[#3b8bd1] items-center cursor-pointer px-1 pr-2'>
                            <div className='text-white text-xs ml-0.5 '>UTF-8</div>
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

export default Profile