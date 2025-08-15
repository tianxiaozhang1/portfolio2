import React from 'react'
import Image from 'next/image'
import { emojiData } from '../../../data/emojis'
import { ScrollReveal } from '../../../effects/ScrollReveal'

import localFont from 'next/font/local'
const futura = localFont({ src: '../../../fontFiles/FuturaCyrillicBook.ttf' })
const futuraLight = localFont({ src: '../../../fontFiles/FuturaCyrillicLight.ttf' })
// const futuraBold = localFont({ src: '../../fontFiles/FuturaCyrillicBold.ttf' })

function BuyItAll() {
    return (
      <> {/* Use a fragment here if you don't need a wrapper div */}
        {emojiData.map((emoji, emojiIndex) => {
          return (
            // Remove the surrounding div if you want them to truly inline
            // Otherwise, if you need a wrapper for animation/spacing later, keep it but ensure it's inline-block
            <Image
              key={emojiIndex} // Key should be directly on the Image or the innermost mapped element
              src={emoji.src}
              alt={emoji.alt}
              // Use 'inline-block' if you need each image to behave like text but have block properties (like width/height)
              // The 'lg:w-12' on the Image itself will make it behave correctly as an inline element.
              className='lg:w-12 inline-block mx-1' // Add inline-block to ensure consistent text flow
            />
          );
        })}
      </>
    );
}

function CityBank() {
    return (
        <div className='lg:max-w-[1200px] xl:max-w-[1500px] mx-auto cursor-default '>
            <div className={`rounded-4xl lg:rounded-[62px] lg:w-2/3 mx-auto font-semibold ${futura.className} grid lg:grid-cols-2 gap-x-8 overflow-hidden bg-blue-800`}>
                <div className={` bg-gray-50 text-gray-600 py-20 px-20 text-5xl`}>
                    <div className='mb-3 text-[#108B96]'>City Wallet.</div>
                    <div className=''>Buy all the <BuyItAll/> and more. Anywhere you see&nbsp;
                        <div className='shadow-sm inline-block text-3xl items-center bg-[#108B96] text-gray-100 px-3 py-1 rounded-2xl uppercase mr-0.25'>
                            City Pay
                        </div>
                    </div>                 
                </div>
            </div>
        </div>
        
    )
}

export default CityBank
