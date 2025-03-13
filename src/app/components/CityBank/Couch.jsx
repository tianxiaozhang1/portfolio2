import React from 'react'

const Couch = () => {
  return (
    <div className='flex'>

        <div className='bg-quickColour20' style={{width: 10, height: 100}}></div>
        <div>
            <div className='bg-quickColour20' style={{width: 10, height: 100}}></div>
            <div className='bg-slate-600' style={{width: 10, height: 30}}></div>
        </div>
        <div>
            <div className='bg-quickColour10' style={{width: 50, height: 40}}></div>
            <div className='bg-quickColour20' style={{width: 50, height: 60}}></div>
            <div className='bg-slate-600' style={{width: 10, height: 20}}></div>
        </div>
        <div>
            <div className='bg-quickColour10' style={{width: 20, height: 40}}></div>
            <div className='bg-quickColour15' style={{width: 20, height: 60}}></div>
            <div className='flex'>
                <div className='bg-slate-500' style={{width: 10, height: 30}}></div>
                <div className='bg-slate-500' style={{width: 10, height: 20}}></div>
            </div>
        </div>
        <div>
            <div className='bg-quickColour10' style={{width: 120, height: 60}}>
                <div className='bg-quickColour20' style={{width: 10, height: 60, marginLeft: 50}}></div>
            </div>
            <div className='bg-quickColour5' style={{width: 120, height: 20}}>
                <div className='bg-quickColour20' style={{width: 20, height: 20, marginLeft: 90}}></div>
            </div>
            <div className='bg-quickColour15' style={{width: 120, height: 20}}></div>
        </div>
        <div>
            <div className='bg-quickColour10' style={{width: 40, height: 60}}></div>
            <div className='bg-quickColour5' style={{width: 40, height: 20}}></div>
            <div className='bg-quickColour15' style={{width: 40, height: 20}}></div>
            <div className='flex'>
                <div className='bg-slate-600' style={{width: 10, height: 30}}></div>
                <div className='bg-slate-600' style={{width: 10, height: 20}}></div>
            </div>
        </div>
        <div>
            <div className='bg-quickColour15' style={{width: 40, height: 60, marginTop: 40}}>
                <div className='bg-quickColour20' style={{width: 20, height: 20}}></div>
                <div className='bg-quickColour5' style={{width: 20, height: 20}}></div>

            </div>
            
            <div className='flex justify-end'>
                <div className='bg-slate-500' style={{width: 10, height: 30}}></div>
                <div className='bg-slate-500' style={{width: 10, height: 20}}></div>
            </div>
        </div>

       
    </div>
  )
}

export default Couch
