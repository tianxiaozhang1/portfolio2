import React from 'react'

const GitHubLogo = ({bgColour, darkColour, lightColour, sizeFactor}) => {
    return (
      <div className={`${darkColour} flex justify-center items-center`} style={{width: 22*sizeFactor, height: 22*sizeFactor, borderRadius: 0*sizeFactor}}>
  
          <div className='flex justify-center' style={{marginLeft: 4*sizeFactor}}>
              <div>
                  <div className='flex' style={{width: 14*sizeFactor, marginTop: 0}}>
                      <div className={`${lightColour}`} style={{width: 2*sizeFactor, height: 2*sizeFactor, marginLeft: 0*sizeFactor}}></div>
                      <div className={`${lightColour}`} style={{width: 2*sizeFactor, height: 2*sizeFactor, marginLeft: 6*sizeFactor}}></div>                 
                  </div>
                  <div className={`${lightColour} flex justify-between items-end`} style={{width: 14*sizeFactor, height: 10*sizeFactor, marginLeft: -2*sizeFactor}}>
                  </div>
                  <div className='flex'>
                      <div className={`${lightColour}`} style={{width: 6*sizeFactor, height: 2*sizeFactor, marginLeft: 2*sizeFactor}}></div>
                  </div>
              </div>
          </div>
  
      </div>
    )
  }

// const GitHubLogo = ({bgColour, darkColour, lightColour}) => {
//   return (
//     <div className={`${darkColour} flex justify-center items-center shadow-inner`} style={{width: 66, height: 66, borderRadius: 12}}>

//         <div className='flex justify-center' style={{marginLeft: 8}}>
//             <div>
//                 <div className='flex justify-between' style={{width: 28, marginTop: 0}}>
//                     <div className={`${lightColour}`} style={{width: 6, height: 6, marginLeft: 0}}></div>
//                     <div className={`${lightColour}`} style={{width: 6, height: 6, marginRight: 0}}></div>                 
//                 </div>
//                 <div className={`${lightColour} flex justify-between items-end`} style={{width: 40, height: 30, marginLeft: -6}}>
//                 </div>
//                 <div className='flex'>
//                     <div className={`${lightColour}`} style={{width: 16, height: 6, marginLeft: 6}}></div>
//                 </div>
//             </div>
//         </div>

//     </div>
//   )
// }

export default GitHubLogo