import React from 'react'
import Image from 'next/image'
import now1 from '../../images/now/now1.PNG'
import now2 from '../../images/now/now2.PNG'
import now3 from '../../images/now/now3.PNG'
import now0 from '../../images/now/nowmodels.PNG'

function NowProject() {
  return (
    <div className='w-full py-0  bg-stone-100 lg:bg-white flex'>

        <div className='w-3/3 flex justify-center items-start shadow-xl border-2 border-slate-100 '>
            <Image
                src={now0}
                // width={1000}
                // height={1000}
                // fill={true}
                // layout="fill"
                width={0}
                height={0}
                sizes="100vw"
                // style={{ width: '100%', height: 'auto' }} // optional
            />

        </div>

        {/* <div className='w-1/3 flex '>
            <Image
                src={now1}
                width={0}
                height={0}
                sizes="33vw"
            />
            <Image
                src={now2}
                width={0}
                height={0}
                sizes="33vw"
            />
        </div> */}
    </div>
  )
}

export default NowProject
