import React from 'react'

function Spotlight({ children }) {
    return (
        <div
            // ref={ref} // Attach the ref to the main container
            className="relative w-full h-full    bg-gray-950
                        flex flex-col items-center justify-center overflow-hidden p-4"
            style={{ minHeight: '10vh' }} // Ensure it takes full viewport height
        >

            <div 
                className="absolute top-0 opacity-30 blur-xl -ml-12"
                style={{
                    borderLeft: '0px solid transparent', // Left side is vertical (right angle)
                    borderRight: '60px solid transparent', // Controls the slope of the hypotenuse
                    borderBottom: `288px solid white`, // The visible height of the light beam
                    }}
            ></div>

            <div 
                className="absolute top-0 opacity-40 blur-xl "
                style={{
                    borderLeft: '30px solid transparent', // Controls the left slope
                    borderRight: '30px solid transparent',
                    borderBottom: `288px solid white`, // The visible height of the light beam
                }}
            ></div>

            <div 
                className="absolute top-0 opacity-30 blur-xl ml-12"
                style={{
                    borderLeft: '60px solid transparent', // Controls the slope of the hypotenuse
                    borderRight: '0px solid transparent', // Right side is vertical (right angle)
                    borderBottom: `288px solid white`, // The visible height of the light beam
                }}
            ></div>

        {/* Center Stage Content */}
        <div
            className="relative z-10 text-center max-w-3xl mx-auto"
        >
            {children} {/* This is where your "center stage" text will go */}
        </div>
        </div>
    )
}

export default Spotlight
