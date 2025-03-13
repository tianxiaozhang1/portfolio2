import React from 'react'
import Image from 'next/image'
import now1 from '../../images/now/now1.PNG'
import now2 from '../../images/now/now2.PNG'
import now3 from '../../images/now/now3.PNG'
import now0 from '../../images/now/nowmodels.PNG'

import {playfairDisplay} from '../../fonts'

import nowHome1 from '../../images/now/home1.JPG'
import nowHome2 from '../../images/now/home2.JPG'
import nowHome3 from '../../images/now/home3.JPG'
import nowHome4 from '../../images/now/home4.JPG'


const modelCategories = [
    {
      name: "women",
      image: nowHome1,
    },
    {
      name: "curve",
      image: nowHome2,
    },
    {
      name: "men",
      image: nowHome3,
    },
    {
      name: "image",
      image: nowHome4,
    }
]
function IGIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="currentColor"
        className="w-4 h-4"
      >
        <path d="M10.202,2.098c-1.49,.07-2.507,.308-3.396,.657-.92,.359-1.7,.84-2.477,1.619-.776,.779-1.254,1.56-1.61,2.481-.345,.891-.578,1.909-.644,3.4-.066,1.49-.08,1.97-.073,5.771s.024,4.278,.096,5.772c.071,1.489,.308,2.506,.657,3.396,.359,.92,.84,1.7,1.619,2.477,.779,.776,1.559,1.253,2.483,1.61,.89,.344,1.909,.579,3.399,.644,1.49,.065,1.97,.08,5.771,.073,3.801-.007,4.279-.024,5.773-.095s2.505-.309,3.395-.657c.92-.36,1.701-.84,2.477-1.62s1.254-1.561,1.609-2.483c.345-.89,.579-1.909,.644-3.398,.065-1.494,.081-1.971,.073-5.773s-.024-4.278-.095-5.771-.308-2.507-.657-3.397c-.36-.92-.84-1.7-1.619-2.477s-1.561-1.254-2.483-1.609c-.891-.345-1.909-.58-3.399-.644s-1.97-.081-5.772-.074-4.278,.024-5.771,.096m.164,25.309c-1.365-.059-2.106-.286-2.6-.476-.654-.252-1.12-.557-1.612-1.044s-.795-.955-1.05-1.608c-.192-.494-.423-1.234-.487-2.599-.069-1.475-.084-1.918-.092-5.656s.006-4.18,.071-5.656c.058-1.364,.286-2.106,.476-2.6,.252-.655,.556-1.12,1.044-1.612s.955-.795,1.608-1.05c.493-.193,1.234-.422,2.598-.487,1.476-.07,1.919-.084,5.656-.092,3.737-.008,4.181,.006,5.658,.071,1.364,.059,2.106,.285,2.599,.476,.654,.252,1.12,.555,1.612,1.044s.795,.954,1.051,1.609c.193,.492,.422,1.232,.486,2.597,.07,1.476,.086,1.919,.093,5.656,.007,3.737-.006,4.181-.071,5.656-.06,1.365-.286,2.106-.476,2.601-.252,.654-.556,1.12-1.045,1.612s-.955,.795-1.608,1.05c-.493,.192-1.234,.422-2.597,.487-1.476,.069-1.919,.084-5.657,.092s-4.18-.007-5.656-.071M21.779,8.517c.002,.928,.755,1.679,1.683,1.677s1.679-.755,1.677-1.683c-.002-.928-.755-1.679-1.683-1.677,0,0,0,0,0,0-.928,.002-1.678,.755-1.677,1.683m-12.967,7.496c.008,3.97,3.232,7.182,7.202,7.174s7.183-3.232,7.176-7.202c-.008-3.97-3.233-7.183-7.203-7.175s-7.182,3.233-7.174,7.203m2.522-.005c-.005-2.577,2.08-4.671,4.658-4.676,2.577-.005,4.671,2.08,4.676,4.658,.005,2.577-2.08,4.671-4.658,4.676-2.577,.005-4.671-2.079-4.676-4.656h0"></path>                           
      </svg>
    );
}
function XIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="currentColor"
        className="w-4 h-4"
      >
        <path d="M18.42,14.009L27.891,3h-2.244l-8.224,9.559L10.855,3H3.28l9.932,14.455L3.28,29h2.244l8.684-10.095,6.936,10.095h7.576l-10.301-14.991h0Zm-3.074,3.573l-1.006-1.439L6.333,4.69h3.447l6.462,9.243,1.006,1.439,8.4,12.015h-3.447l-6.854-9.804h0Z"></path>
      </svg>
    );
}
function FacebookIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="currentColor"
        className="w-4 h-4"
      >
        <path d="M16,2c-7.732,0-14,6.268-14,14,0,6.566,4.52,12.075,10.618,13.588v-9.31h-2.887v-4.278h2.887v-1.843c0-4.765,2.156-6.974,6.835-6.974,.887,0,2.417,.174,3.043,.348v3.878c-.33-.035-.904-.052-1.617-.052-2.296,0-3.183,.87-3.183,3.13v1.513h4.573l-.786,4.278h-3.787v9.619c6.932-.837,12.304-6.74,12.304-13.897,0-7.732-6.268-14-14-14Z"></path>
      </svg>
    );
}
function TiktokIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="currentColor"
        className="w-4 h-4"
      >
        <path d="M24.562,7.613c-1.508-.983-2.597-2.557-2.936-4.391-.073-.396-.114-.804-.114-1.221h-4.814l-.008,19.292c-.081,2.16-1.859,3.894-4.039,3.894-.677,0-1.315-.169-1.877-.465-1.288-.678-2.169-2.028-2.169-3.582,0-2.231,1.815-4.047,4.046-4.047,.417,0,.816,.069,1.194,.187v-4.914c-.391-.053-.788-.087-1.194-.087-4.886,0-8.86,3.975-8.86,8.86,0,2.998,1.498,5.65,3.783,7.254,1.439,1.01,3.19,1.606,5.078,1.606,4.886,0,8.86-3.975,8.86-8.86V11.357c1.888,1.355,4.201,2.154,6.697,2.154v-4.814c-1.345,0-2.597-.4-3.647-1.085Z"></path>
      </svg>
    );
}

function NowProject2() {
    const sectionTitle = `mt-5 md:mt-12 xl:mt-16 flex justify-center text-center cursor-default text-4xl md:text-5xl 2xl:text-5xl text-zinc-100 drop-shadow-[0_1px_1px_rgba(100,100,100,1)] ${playfairDisplay.className}`
    const gradientCSS = `w-full h-1/4 bg-gradient-to-b from-transparent to-zinc-950`
    return (
        <div className='w-full lg:py-8 lg:flex'
      >

            <div className='lg:hidden shadow-lg'>
                <Image
                    src={now0}
                    width={0}
                    height={0}
                    sizes="100vw"
                />
            </div>

            <div className='hidden lg:flex w-1/6'>
                
            </div>

            <div className='hidden lg:flex w-2/3 bg-white dark:bg-zinc-900 py-12 justify-center items-start'>
                <div className='w-full'>
                    <div className='w-full mx-0 px-64'>
                        <div className='w-full flex justify-between items-end cursor-default'>
                            <div className={`text-4xl text-black dark:text-white ${playfairDisplay.className}`}>
                                NOW MODELS
                            </div>

                            <div className={`flex gap-x-1 text-zinc-400 dark:text-zinc-300  ${playfairDisplay.className}`}>
                                <div className='flex gap-x-3'>
                                    <div className='text-black dark:text-white'>Toronto</div>
                                    <div>New York</div>
                                    <div>Paris</div>
                                    <div>Milan</div>
                                </div>
                                <div className='text-zinc-500 dark:text-zinc-200 mt-1 flex gap-x-3 ml-2'>
                                    <IGIcon/>
                                    <XIcon/>
                                    <FacebookIcon/>
                                    <TiktokIcon/>
                                </div>

                            </div>
                        </div>

                        
                    </div>

                    <div className='xl:grid xl:grid-cols-4 mt-6 px-16 gap-2 mx-2'>
                        {
                            modelCategories.map(category => {
                            return  <div>
                                        <div className="flex justify-center items-end"
                                            style={{
                                                background: `url(${category.image.src})`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                height: 600,
                                                opacity: 1,
                                            }}
                                        >   
                                            <div className={gradientCSS}>
                                                <div className={sectionTitle}>
                                                    {category.name}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            })
                        }
                    </div>

                    <div className={`hidden lg:flex justify-center cursor-default`}>
                        <div>
                            <div className='mt-3 md:mt-5 xl:mb-1 xl:text-3xl text-xl text-center '><div className={`lg:text-lg 2xl:text-lg  text-zinc-600 dark:text-zinc-100 ${playfairDisplay.className}`}>NOW MODELS</div></div>
                            <div className='mt-2 md:mt-2 mb-3 md:mb-1 text-md lg:text-md xl:text-xs items-end space-x-8 flex justify-center text-zinc-500 dark:text-zinc-200'>                
                                <div className=''>292 LEXINGTON AVE</div>
                                <div className=''>TORONTO, ON M7T8S7</div>
                                <div className=''>TEL (416) 473-0700</div>
                                <div className=''>FAX (416) 473-3223</div>
                            </div>
                            <div className={`mt-1 md:mt-2 xl:mt-1 mb-3 md:mb-5 lg:text-lg 2xl:text-lg space-x-16 flex justify-center uppercase text-zinc-500 dark:text-zinc-200 ${playfairDisplay.className}`}>
                                <div className=''>Privacy Policy</div>
                                <div className=''>Become a Model</div>
                                <div className=''>Talent Guidelines</div>
                                <div className=''>Booking Conditions</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='hidden lg:flex w-1/6'>
            </div>
        </div>
    )
}

export default NowProject2
