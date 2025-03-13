import React from 'react'

import CAA from './svg/caa.svg'

const TicketTwo = () => {
  return (
    <div className='bg-white border-4 border-rouLan' style={{height: 158, width: 250, borderRadius: 12}}>
        <div className='flex justify-between overflow-hidden'>
            
            <div className='flex' style={{paddingTop: 4, paddingLeft: 8}}>
                <img src={CAA} style={{height: 30, paddingTop: 0}} />
            </div>

            <div className='text-xl font-semibold' style={{paddingTop: 8, paddingRight: 10}}>
                <div className='-mt-1 text-rouLan flex justify-end'>
                    Premier
                </div>
            </div>

            {/* <div className='text-xs' style={{paddingTop: 7, paddingRight: 10}}>
                <div className='-mt-1 text-slate-600 flex justify-end'>
                    MEMEBERSHIP CARD
                </div>
                <div className='-mt-0.5 text-rouLan font-bold flex justify-end'>
                    PLUS
                </div>
            </div> */}
        </div>
    </div>
  )
}

export default TicketTwo
