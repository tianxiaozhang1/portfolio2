import React from 'react'

import Shell from './svg/shell.svg'

const TicketFive = () => {
  return (
    <div className='bg-white border-4 border-zhiZi' style={{height: 158, width: 250, borderRadius: 12, overflow: "hidden"}}>
        <div className='flex justify-between overflow-hidden'>
            
            <div className='flex' style={{paddingTop: 1, paddingLeft: 8, overflow: "hidden"}}>
                <img src={Shell} style={{height: 35, paddingTop: 0, overflow: "hidden"}} />
            </div>

            <div className='text-xl font-bold' style={{paddingTop: 7, paddingRight: 10}}>
                <div className='-mt-0.5 text-luoShenZhu flex justify-end'>
                    Drivers Club
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

export default TicketFive
