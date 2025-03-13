import React from 'react'

const Phone = ({innerContent, bgColour, innerMarginLeft, innerMarginRight}) => {
  return (
    
    <div className='flex' style={{height: 616, width: 304}}>
        <div>
            <div className='bg-stone-500' style={{height: 24, width: 2, marginTop: 115}}></div>
            <div className='bg-stone-500' style={{height: 44, width: 2, marginTop: 24}}></div>
            <div className='bg-stone-500' style={{height: 44, width: 2, marginTop: 16}}></div>
        </div>
        <div className='bg-stone-500 mx-0 rounded-3xl flex justify-center items-center' style={{height: 608, width: 296}}>
            <div className='bg-neutral-800 mx-0 rounded-3xl flex justify-center items-center' style={{height: 600, width: 288}}>
                <div className={`bg-slate-100 rounded-2xl justify-center`} style={{height: 588, width: 278, paddingLeft: innerMarginLeft, paddingRight: innerMarginRight, overflow: 'hidden'}}>

                {innerContent}

                </div>
            </div>
        </div>
        
        <div className='bg-stone-500' style={{height: 72, width: 2, marginTop: 194}}></div>
    </div>
  )
}

export default Phone
