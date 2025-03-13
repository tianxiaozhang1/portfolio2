import React from 'react'
import Image from "next/image";

import { aldrich } from '../../../fonts'

import home1 from '../../../images/citybank/home1.jpg'
import home2 from '../../../images/citybank/home2.jpg'
import home3 from '../../../images/citybank/home3.jpg'
import home4 from '../../../images/citybank/home4.jpg'
import home5 from '../../../images/citybank/home5.jpg'
import home6 from '../../../images/citybank/home6.jpg'

const segmentData = [
    {
        num: 0, 
        title: "Get tools. Get tips. Get peace of mind.",
        info: "Discover digital tools to help you budget, save, manage credit, and more.",
        image: home1,
        button: "Learn more",
        link: "/",
    },
    {
        num: 1, 
        title: "Get an account with tax-free daily interest.",
        info: "With a City TFSA Tax Advantage Savings Account®, you can grow your money and access it at any time.",
        image: home2,
        button: "Learn more",
        link: "/",
    },
    {
        num: 2, 
        title: "Pack your suitcase with more savings",
        info: "Deposit and withdraw U.S. funds without converting currencies using the City US$ Personal Account.",
        image: home5,
        button: "Learn more",
        link: "/",
    },
    {
        num: 0, 
        title: "$4,500 cash back when you try City mortgage.",
        info: "Help cover your costs when you switch your mortgage from another financial institution.",
        image: home3,
        button: "Learn more",
        link: "/",
    },
    {
        num: 1, 
        title: "Get 4.50% on a 1-year City Bonus Rate GIC",
        info: "Put your hard-earned money into a secure investment where your returns are guaranteed.",
        image: home4,
        button: "Learn more",
        link: "/",
    },
    {
        num: 2, 
        title: "Get $3,500 cash back on select City mortgages",
        info: "Plus, enjoy an extra $1,000 if you switch your mortgage to City.",
        image: home6,
        button: "Learn more",
        link: "/",
    },
]

const ThirdSegment = () =>
        <div className={`grid grid-cols-3`}>
            {segmentData.map((item) => (
                <div item={item} key={item.num} className="rounded-xl shadow-[0_2px_4px_-2px_rgba(0,0,0,0.8)] text-rouLan mx-2 lg:mx-2 lg:my-1.5 mb-2">
                        <Image
                            src={item.image}
                            alt=""
                            className="rounded-t-xl"
                        />
                    <div className="px-4 bg-white my-1">
                        <div className="text-xxs text-slate-600 font-semibold mt-2 lg:-leading-4">{item.title}</div>
                        {/* <div className="my-1 lg:my-0.5 text-slate-600 text-xxxs">{item.info}</div> */}
                        <div className="flex text-md lg:text-xxs font-semibold items-center mb-0.5">{item.button}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="size-2 lg:size-3 mt-0.5 ml-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>
                    </div>
                </div>
            ))}


        </div>

function BankLaptop() {
  return (
    <div>
        <div className='xl:w-190 flex justify-center'>
            <div className='xl:h-120 xl:w-184 bg-white rounded-t-3xl border-4 border-slate-800 overflow-hidden'>
                <div className={`h-12 w-full smart-pay-gradient font-bold text-slate-100 flex justify-center items-center text-lg ${aldrich.className}`}>
                    CITY BANK
                </div>
                
                <div className={`h-12 grid-cols-5 gap-x-2 px-1 py-2 grid text-slate-50 text-base ${aldrich.className}`}>
                    <div className='rounded-xl shadow-sm h-full banking-gradient flex items-center justify-center'>
                        Banking
                    </div>
                    <div className='rounded-xl shadow-md h-full mortgage-gradient flex items-center justify-center'>
                        Mortgage
                    </div>
                    <div className='rounded-xl shadow-md h-full investment-gradient flex items-center justify-center'>
                        Investment
                    </div>
                    <div className='rounded-xl shadow-md h-full insurance-gradient flex items-center justify-center'>
                        Insurance
                    </div>
                    <div className='rounded-xl shadow-md h-full newaccount-gradient flex items-center justify-center'>
                        Account
                    </div>
                </div>

                <div className="flex justify-center text-center text-slate-500 -my-1 lg:px-12">
                    <div className={`${aldrich.className}`}><div className="text-2xl lg:text-lg font-semibold my-0.5">Do more with your money.</div></div>
                </div>
                <div className="lg:flex mx-auto mb-1">
                    <div><ThirdSegment/></div>
                </div>
                </div>
        </div>
        <div className='xl:w-190 h-6 bg-gradient-to-b from-slate-800 to-slate-600 border-4 border-slate-800 rounded-b-xl'></div>
    </div>
  )
}

export default BankLaptop
