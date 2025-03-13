import React from 'react'

const CreditCardThree = () => {
  return (
    <div className='overflow-hidden bg-qiGu border-2 border-chunChen' style={{height: 158, width: 250, borderRadius: 12}}>
        <div className='flex justify-between overflow-hidden'>
            <div className=' flex' style={{paddingTop: 5, paddingLeft: 12}}>
                <div className='text-lime-200 font-semibold text-lg'>SMALL BUSINESS</div>
            </div>

            <div className='text-md font-semibold text-neutral-100' style={{paddingTop: 8, paddingRight: 12}}>
                $3,636.60
            </div>
        </div>
    </div>
  )
}

export default CreditCardThree
