import React from 'react'

import CreditCardOne from './CreditCardOne'
import CreditCardTwo from './CreditCardTwo'
import CreditCardThree from './CreditCardThree'
import CreditCardFour from './CreditCardFour'

import TicketOne from './TicketOne';
import TicketTwo from './TicketTwo';
import TicketThree from './TicketThree';
import TicketFour from './TicketFour';
import TicketFive from './TicketFive';

const PhoneContent = () => {
  return (
    <div>
        <div className='items-center bg-white text-rouLan flex justify-between px-2 pt-0.5 rounded-xl border-2 border-slate-200' style={{height: 32, width: 246, marginTop: 10}}>
            <div className='flex text-slate-500'>
                <svg  className="w-5 h-5  mt-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                <div className='ml-1 -mt-0.5'>
                    Search Wallet
                </div>
            </div>

            <div className='flex text-slate-400'>
                <svg className="w-5 h-5 -mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                </svg>                            
            </div> 
        </div>

        <div className='flex justify-between mt-2'>
            <div className='font-bold text-2xl ml-1 -mt-0.5 text-rouLan flex'>                            
                <div className='mt-1.5' style={{font: "bold 22px Aldrich, sans-serif"}}>CITY&nbsp;WALLET</div>
            </div>
            <div className='flex mt-1 mr-5'>
                <div className='bg-rouLan rounded-full -mt-0 mr-1 flex justify-center items-center' style={{height: 24, width: 24}}>
                    <div className='text-white mb-1 font-semibold text-md'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mt-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                    </div>
                </div>
                <div className='bg-rouLan rounded-full -mt-0 -mr-4 flex justify-center items-center' style={{height: 24, width: 24}}>
                    <div className='text-white mb-1 font-semibold text-xl'>+</div>
                </div>
            </div>
            
        </div>

        <div style={{marginTop: 10, marginLeft: -2}}>
            <div style={{zIndex: 7, marginTop: 0}}><CreditCardFour/></div>
            <div style={{zIndex: 8, marginTop: -118}}><CreditCardThree/></div>
            <div style={{zIndex: 9, marginTop: -118}}><CreditCardTwo/></div>
            <div style={{zIndex: 10, marginTop: -118}}><CreditCardOne/></div>
        </div>

        <div style={{marginTop: 10, marginLeft: -2}}>

            <div style={{zIndex: 7, marginTop: 0}}><TicketOne/></div>
            <div style={{zIndex: 8, marginTop: -118}}><TicketTwo/></div>
            <div style={{zIndex: 9, marginTop: -118}}><TicketFive/></div>
            <div style={{zIndex: 10, marginTop: -118}}><TicketThree/></div>
            <div style={{zIndex: 11, marginTop: -118}}><TicketFour/></div>

        </div>
    </div>
  )
}

export default PhoneContent
