import React from 'react'

import localFont from 'next/font/local'
const futura = localFont({ src: '../../../fontFiles/FuturaCyrillicBook.ttf' })
const futuraLight = localFont({ src: '../../../fontFiles/FuturaCyrillicLight.ttf' })

import { ScrollReveal } from '../../../effects/ScrollReveal'
import ScrollAnimatedWrapper from '../../../effects/ScrollAnimatedWrapper'

function ProjectsHeading( {content, bgColour, textColour} ) {
    return (
        <div>
            <div className='lg:max-w-[1200px] xl:max-w-[1500px] mx-auto cursor-default space-y-12 px-6 lg:px-0 mt-6'>
                {/* TITLE */}
                {/* <ScrollAnimatedWrapper> */}
                    <div className={`lg:w-252 xl:w-316 mx-auto font-semibold ${futura.className} ${bgColour} py-6 lg:py-16 rounded-3xl`}>
                        <ScrollReveal>
                            <div className={`${textColour} text-5xl lg:text-7xl text-center`}>                         
                                {content}
                            </div>
                        </ScrollReveal>
                    </div>
                {/* </ScrollAnimatedWrapper> */}
            </div>
        </div>
    )
}

export default ProjectsHeading
