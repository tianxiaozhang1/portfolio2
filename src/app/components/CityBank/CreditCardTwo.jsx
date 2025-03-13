import React from 'react'

const CreditCardTwo = () => {
  return (
    <div className='overflow-hidden bg-slate-900 border-2 border-slate-600 ' style={{height: 158, width: 250, borderRadius: 12}}>

        <div className='flex justify-between overflow-hidden'>
            <div className=' flex' style={{paddingTop: 5, paddingLeft: 12}}>
                {/* <div className='text-lg font-semibold text-slate-400'>CITY&nbsp;</div><div className='text-slate-300 text-lg font-semibold'>PASSPORT</div> */}

                <div className='text-slate-300 font-semibold text-lg flex'><div className='mt-1' style={{font: "bold 19px Aldrich, sans-serif"}}>CITY&nbsp;</div>PASSPORT</div>
            </div>

            <div className='text-md font-semibold text-neutral-100' style={{paddingTop: 8, paddingRight: 12}}>
                $7,232.08
            </div>
        </div>
    </div>
  )
}

export default CreditCardTwo
