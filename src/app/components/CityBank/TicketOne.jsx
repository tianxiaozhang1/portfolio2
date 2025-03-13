import React from 'react'

import AirCanada from './svg/aircanada.svg'

const TicketOne = () => {
  return (
    <div className='bg-white border-4 border-luoShenZhu' style={{height: 158, width: 250, borderRadius: 12}}>
        <div className='flex justify-between overflow-hidden'>
            
            <div className='flex' style={{paddingTop: 5, paddingLeft: 8}}>
                <img src={AirCanada} style={{height: 26, paddingTop: 3}} /><div className='text-lg font-bold text-slate-700 ml-1.5'>AIR CANADA</div>
            </div>

            <div className='text-xs' style={{paddingTop: 8, marginRight:-12}}>
                <div className='-mt-1 text-slate-400 font-semibold flex justify-end'>
                    Gate
                </div>
                <div className='-mt-0.5 text-slate-600 font-bold flex justify-end'>
                    F12
                </div>
            </div>

            <div className='text-xs' style={{paddingTop: 8, paddingRight: 10}}>
                <div className='-mt-1 text-slate-400 font-semibold flex justify-end'>
                    Flight
                </div>
                <div className='-mt-0.5 text-slate-600 font-bold'>
                    AC886
                </div>
            </div>
        </div>
    </div>
  )
}

export default TicketOne
