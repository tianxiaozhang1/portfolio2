import React from 'react'

function MSN() {
  return (
    <div className='w-400 h-152 mx-auto rounded-3xl my-6 border-slate-200 border-4 flex items-center pl-2'>

        <div className='w-200 h-146 bg-red-600 rounded-xl overflow-hidden'>
            <div className='bg-blue-700 h-10 w-full'></div>
            <div className='bg-stone-200 h-8 w-full'></div>
            <div className='bg-blue-200 h-16 w-full'></div>
            <div className='bg-white h-102 w-full space-y-2 pt-2'>
                <div className='bg-stone-200 h-54 w-full flex'>
                    <div className='bg-slate-800 w-3/4 h-full'>

                    </div>

                    <div className='w-1/4 bg-red-100 h-full flex justify-center'>
                        <div className='h-40 w-40 rounded-lg border-2 border-stone-400 flex justify-center pt-0.5'>
                            <div className='bg-lime-300 h-34 w-34 rounded-xl'></div>
                        </div>
                        
                    </div>
                </div>
                <div className='bg-stone-300 h-42 w-full flex'>
                    <div className='bg-slate-800 w-3/4 h-full'>

                    </div>

                    <div className='w-1/4 bg-red-100 h-full flex justify-center'>
                        <div className='h-40 w-40 rounded-lg border-2 border-stone-400 flex justify-center pt-0.5'>
                            <div className='bg-lime-300 h-34 w-34 rounded-xl'></div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default MSN
