import React from 'react'
import Image from 'next/image';
import NowProject2 from './now2'
import TexasHouse from './texashouse'

import sample0 from '../../images/texas/sample0.webp'
import sample1 from '../../images/texas/sample1.webp'
import sample2 from '../../images/texas/sample2.webp'
import sample3 from '../../images/texas/sample3.webp'
import sample4 from '../../images/texas/sample4.webp'

function Now3({projectName}) {
  return (
    <div className='w-full py-24 bg-red-500 text-white text-7xl flex justify-center items-center'>
      x
      {/* {projectName === "texas" ? <div className='scale-125'><Image src={sample0} width={1000} height={500} /></div> :<></>}
      {projectName === 0 ? <div className='scale-125'><Image src={sample1} width={1000} height={1000} /></div> :<></>}
      {projectName === 1 ? <div className='scale-125'><Image src={sample2} width={1000} height={1000} /></div> :<></>}
      {projectName === 2 ? <div className='scale-125'><Image src={sample3} width={1000} height={1000} /></div> :<></>}
      {projectName === 3 ? <div className='scale-125'><Image src={sample4} width={1000} height={1000} /></div> :<></>} */}
    </div>
  )
}

export default Now3
