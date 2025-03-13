import React from 'react'

import Chickfila from './svg/chickfila.svg'

// import {ReactComponent as Icon} from '../img/svg/timhortons.svg';

const MenuIcon = (props) =>(
    <svg xmlns="http://www.w3.org/2000/svg" fill={props.fill} className={props.class}></svg>
)

const TicketThree = () => {
  return (
    <div className='bg-luoShenZhu' style={{height: 158, width: 250, borderRadius: 12}}>
        <div className='flex justify-between overflow-hidden'>
            
            <div className='flex overflow-hidden' style={{paddingTop: 3, paddingLeft: 11}}>
                <img src={Chickfila} style={{filter: "invert(83%) sepia(33%) saturate(133%) hue-rotate(202deg) brightness(208%) contrast(107%)", height: 34, zIndex: 1}} /> 
            </div>

            <div className='text-xs' style={{paddingTop: 8, marginRight: 12}}>
                <div className='-mt-1 text-slate-100 font-semibold flex justify-end'>
                    RED MEMBER
                </div>
                <div className='-mt-0.5 text-slate-50 font-bold flex justify-end'>
                    1,678 pts
                </div>
            </div>
        </div>
    </div>
  )
}

export default TicketThree
