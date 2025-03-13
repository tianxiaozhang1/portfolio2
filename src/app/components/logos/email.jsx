import React from 'react'

const EmailLogo = ({bgColour, darkColour, lightColour, sizeFactor}) => {
    return (
      <div className={`${darkColour} flex justify-center items-center `} style={{width: 22*sizeFactor, height: 22*sizeFactor, borderRadius: 0*sizeFactor}}>
  
          <div className='' style={{marginLeft: 0*2*sizeFactor}}>
            <div>
                <div className={`${lightColour}`} style={{width: 3*2*sizeFactor, height: 1*2*sizeFactor, marginLeft: 2*2*sizeFactor}}></div>
                <div className='flex'>
                    <div className={`${lightColour}`} style={{width: 1*2*sizeFactor, height: 1*2*sizeFactor, marginLeft: 1*2*sizeFactor}}></div>
                    <div className={`${lightColour}`} style={{width: 1*2*sizeFactor, height: 1*2*sizeFactor, marginLeft: 3*2*sizeFactor}}></div>
                </div>
                <div className='flex'>
                    <div className={`${lightColour}`} style={{width: 1*2*sizeFactor, height: 1*2*sizeFactor, marginLeft: 0*2*sizeFactor}}></div>
                    <div className={`${lightColour}`} style={{width: 1*2*sizeFactor, height: 1*2*sizeFactor, marginLeft: 1*2*sizeFactor}}></div>
                    <div className={`${lightColour}`} style={{width: 1*2*sizeFactor, height: 1*2*sizeFactor, marginLeft: 1*2*sizeFactor}}></div>
                    <div className={`${lightColour}`} style={{width: 1*2*sizeFactor, height: 1*2*sizeFactor, marginLeft: 1*2*sizeFactor}}></div>
                </div>
                <div className='flex'>
                    <div className={`${lightColour}`} style={{width: 1*2*sizeFactor, height: 1*2*sizeFactor, marginLeft: 0*2*sizeFactor}}></div>
                    <div className={`${lightColour}`} style={{width: 1*2*sizeFactor, height: 1*2*sizeFactor, marginLeft: 2*2*sizeFactor}}></div>
                    <div className={`${lightColour}`} style={{width: 1*2*sizeFactor, height: 1*2*sizeFactor, marginLeft: 2*2*sizeFactor}}></div>
                </div>
                <div className='flex'>
                    <div className={`${lightColour}`} style={{width: 1*2*sizeFactor, height: 2*2*sizeFactor, marginLeft: 0*2*sizeFactor}}></div>
                    <div className={`${lightColour}`} style={{width: 1*2*sizeFactor, height: 2*2*sizeFactor, marginLeft: 5*2*sizeFactor}}></div>
                </div>
                <div className={`${lightColour}`} style={{width: 7*2*sizeFactor, height: 1*2*sizeFactor, marginLeft: 0*2*sizeFactor}}></div>
            </div>
          </div>
  
      </div>
    )
  }

export default EmailLogo