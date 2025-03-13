import React from 'react'

import Visa from './svg/visa2.svg'

const CreditCardOne = () => {
  return (
    <div className='bg-black border-2 border-rouLan credit-card credit-card-front credit-card-gradient text-slate-200' style={{height: 158, width: 250, borderRadius: 12}}>

        <div className='bg-blue-300' style={{opacity: 0.2, height: 63, width: 150, zIndex: 1, marginTop: 40}}></div>
        <div className='bg-blue-300 ' style={{opacity: 0.1, height: 58, width: 123, zIndex: 1, marginTop: -103, marginLeft: 123, borderTopRightRadius: 12}}></div>
        <div className='bg-blue-300 ' style={{opacity: 0.1, height: 78, width: 123, zIndex: 1, marginTop: 19, marginLeft: 123, borderBottomRightRadius: 12}}></div>

        <div className='flex justify-between overflow-hidden' style={{zIndex: 4, marginTop: -155}}>
            
            <div className=' flex' style={{paddingTop: 5, paddingLeft: 12}}>
                <div className='text-slate-200 font-semibold text-lg'>CASH BACK</div>
            </div>

            <div className='text-md font-semibold text-neutral-100' style={{paddingTop: 8, paddingRight: 12}}>
                $1,230.00 
            </div>
        </div>

        <div>
            <div className='bg-huangBuLao flex' style={{height: 27, width: 27, borderRadius: 4, marginLeft: 30, marginTop: 18}}>
                <div>
                    <div className='bg-slate-600' style={{height: 1, width: 7, marginLeft: 0, marginTop: 6}}></div>
                    <div className='bg-slate-600' style={{height: 1, width: 7, marginLeft: 0, marginTop: 6}}></div>
                    <div className='bg-slate-600' style={{height: 1, width: 7, marginLeft: 0, marginTop: 6}}></div>
                </div>
                <div>
                    <div className='bg-slate-600' style={{height: 27, width: 1}}></div>
                </div>
                <div>
                    <div className='bg-slate-600' style={{height: 21, width: 1, marginLeft: 11, marginTop: 6}}></div>
                </div>
                <div>
                    <div className='bg-slate-600' style={{height: 1, width: 7, marginLeft: 0, marginTop: 6}}></div>
                    <div className='bg-slate-600' style={{height: 1, width: 7, marginLeft: 0, marginTop: 6}}></div>
                    <div className='bg-slate-600' style={{height: 1, width: 7, marginLeft: 0, marginTop: 6}}></div>
                </div>
            </div>
        </div>


        <div className='flex justify-between' style={{paddingTop: 46, paddingLeft: 14, paddingRight: 12}}>
            <div className='text-md font-semibold text-slate-300 mt-0.5'>John Doe</div>
            <img src={Visa} style={{height: 22, paddingTop: 3, filter: "invert(97%) sepia(99%) saturate(0%) hue-rotate(201deg) brightness(95%) contrast(100%)"}} />
        </div>

        {/* <div className='flex flex-column justify-between'>
            <div className=''>
                <div className='flex-1 visa-card-chip visa-card-logo-gradient'></div>
                <div className='flex-2 credit-card-chip-line-v1'></div>
                <div className='flex-2 credit-card-chip-line-v2'></div>
                <div className='flex-3 credit-card-chip-line-h1'></div>
                <div className='flex-3 credit-card-chip-line-h2'></div>
                <div className='flex-3 credit-card-chip-line-h3'></div>
                <div className='flex-3 credit-card-chip-line-h3-1'></div>
                <div className='flex-3 credit-card-chip-line-h3-2'></div>
                <div className='flex-3 credit-card-chip-line-h3-3'></div>
                <div className='flex-3 credit-card-chip-line-h4'></div>
                <div className='flex-3 credit-card-chip-line-h5'></div>
            </div>
        </div> */}

        {/* <div className='visa-card-logo text-slate-100 '>VISA</div> */}

    </div>
  )
}

export default CreditCardOne
