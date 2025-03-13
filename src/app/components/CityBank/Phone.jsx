import React from 'react'

// import PhoneContent from './PhoneContent'

const Phone = ({innerContent, bgColour}) => {
  return (
    <div className='flex' style={{height: 616, width: 304}}>
        <div>
            <div className='bg-stone-500' style={{height: 24, width: 2, marginTop: 115}}></div>
            <div className='bg-stone-500' style={{height: 44, width: 2, marginTop: 24}}></div>
            <div className='bg-stone-500' style={{height: 44, width: 2, marginTop: 16}}></div>
        </div>
        <div className='bg-stone-500 mx-0 rounded-3xl flex justify-center items-center' style={{height: 608, width: 296}}>
            <div className='bg-neutral-700 mx-0 rounded-3xl flex justify-center items-center' style={{height: 600, width: 288}}>
                <div className={`bg-slate-100 rounded-2xl justify-center`} style={{height: 588, width: 278, paddingLeft: 16, paddingRight: 16, overflow: 'hidden'}}>

                    {innerContent}
                    
                </div>
            </div>
        </div>
        
        <div className='bg-stone-500' style={{height: 72, width: 2, marginTop: 194}}></div>
    </div>
  )
}

export default Phone
