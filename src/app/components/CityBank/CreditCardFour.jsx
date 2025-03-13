import React from 'react'

const CreditCardFour = () => {
  return (
    <div className='bg-black border-2 border-slate-600' style={{height: 158, width: 250, borderRadius: 12}}>
        <div className='flex justify-between overflow-hidden'>
            <div className=' flex' style={{paddingTop: 5, paddingLeft: 12}}>
                <div className='text-slate-300 font-semibold text-lg flex'><div className='mt-1' style={{font: "bold 19px Aldrich, sans-serif"}}>CITY&nbsp;</div>PLATINUM</div>
            </div>

            <div className='text-md font-semibold text-neutral-100' style={{paddingTop: 8, paddingRight: 12}}>
                $4,680.20
            </div>
        </div>
    </div>
  )
}

export default CreditCardFour
