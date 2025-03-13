import React from 'react'

const WebsiteLogo = ({bgColour, darkColour, lightColour, sizeFactor}) => {
    return (
      <div className={`${darkColour} flex justify-center items-center`} style={{width: 22*sizeFactor, height: 22*sizeFactor, borderRadius: 0*sizeFactor}}>
          <div>

            {/* <div className='flex'>
              <div className={`${lightColour}`} style={{width: 2*sizeFactor, height: 2*sizeFactor, marginTop: 0}}></div>
              <div className={`${lightColour}`} style={{width: 2*sizeFactor, height: 2*sizeFactor, marginLeft: 18*sizeFactor}}></div>
            </div> */}

            <div className='flex justify-center' style={{marginLeft: 0*sizeFactor, marginTop:2*sizeFactor, marginBottom:2*sizeFactor}}>
                <div>
                    <div className={`${lightColour}`} style={{width: 14*sizeFactor, height: 10*sizeFactor, marginTop: 0}}></div>
                    <div className={`${lightColour}`} style={{width: 14*sizeFactor, height: 2*sizeFactor, marginTop: 2*sizeFactor}}></div>
                </div>
            </div>

            {/* <div className='flex'>
              <div className={`${lightColour}`} style={{width: 2*sizeFactor, height: 2*sizeFactor, marginTop: 0}}></div>
              <div className={`${lightColour}`} style={{width: 2*sizeFactor, height: 2*sizeFactor, marginLeft: 18*sizeFactor}}></div>
            </div> */}
          </div>
  
      </div>
    )
  }

export default WebsiteLogo