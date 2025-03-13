import React from 'react'

import Starbucks from './svg/starbucks.svg'

const TicketFour = () => {
  return (
    <div className='bg-shiFa border-0 border-shiFa' style={{height: 158, width: 290, borderRadius: 12, marginLeft: -20, zIndex: 2}}>
        <div className='overflow-hidden flex'>            
            <img className='' src={Starbucks} style={{width: 280, marginTop: -93}} />
            <div className='bg-slate-100' style={{width: 14, height: 50, marginLeft: -274, marginTop: -0, zIndex: 3}}></div>
            <div className='bg-luoShenZhu' style={{width: 12, height: 12, marginLeft: 0, marginTop: 0, zIndex: 3}}>
                <div className='bg-white' style={{width: 12, height: 12, marginLeft: 0, marginTop: 0, zIndex: 4, borderTopLeftRadius: 12}}>
                </div>
            </div>
            <div className='bg-luoShenZhu' style={{width: 18, height: 28, marginLeft: 220, zIndex: 3}}>
                <div className='bg-white' style={{width: 18, height: 28, marginLeft: 0, marginTop: 0, zIndex: 4, borderTopRightRadius: 12}}>
                </div>
            </div>
            <div className='bg-slate-100' style={{width: 14, height: 50, marginLeft: 0, marginTop: 0, zIndex: 3}}></div>
        </div>
    </div>
  )
}

export default TicketFour
