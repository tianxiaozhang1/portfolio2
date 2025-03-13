"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import Now3 from '../projects/now3'
import Now2 from '../projects/now2'

import sample0 from '../../images/texas/sample0.webp'

// import sample0 from '../../images/texas/sample0.webp'
import sample1 from '../../images/texas/sample1.webp'
import sample2 from '../../images/texas/sample2.webp'
import sample3 from '../../images/texas/sample3.webp'
import sample4 from '../../images/texas/sample4.webp'

function ProjectsSection() {
    // const [currentProject, setCurrentProject] = useState(0)
    return (
        <div className='w-full  bg-white'>
            <div className='text-5xl font-semibold text-stone-700 bg-white ml-36 py-16 px-96'>Projects</div>

            <div className='bg-stone-100 py-2 px-32'>
                <Now2/>
            </div>

            <div className='bg-stone-200 py-10 lg:px-24 xl:px-32'>
                <div className='bg-amber-600 h-96 mx-2 xl:mx-96'></div>
            </div>
            


            {/* <div className='mx-12 flex'>
                <div className='w-1/4 '>
                    <div className='bg-zinc-50 text-7xl py-12'>
                        Projects
                    </div>
                    <div className='bg-zinc-50 py-6 text-2xl pl-6 cursor-pointer hover:underline' onPointerEnter={() => setCurrentProject(0)}>
                        now models
                    </div>

                    <div className='bg-zinc-50 py-6 text-2xl pl-6' onPointerEnter={() => setCurrentProject(1)}>
                        city bank
                    </div>

                    <div className='bg-zinc-50 py-6 text-2xl pl-6' onPointerEnter={() => setCurrentProject(2)}>
                        venus jewelery
                    </div>

                    <div className='bg-zinc-50 py-6 text-2xl pl-6' onPointerEnter={() => setCurrentProject(3)}>
                        burger shack
                    </div>

                    <div className='bg-zinc-50 py-6 text-2xl pl-6' onPointerEnter={() => setCurrentProject("texas")}>
                        texas house
                    </div>

                </div>

                <div className='w-3/4 text-white text-7xl flex justify-center items-center bg-lime-500'>
                    <Now3 projectName={currentProject}/>
                </div>

            </div> */}

        </div>
    )
}

export default ProjectsSection


{/* <div className='w-1/5'>
                    <div className='text-5xl py-12 flex justify-end pr-6'>
                        Projects
                    </div>
                    <div className=' py-6 text-2xl pl-6 cursor-pointer hover:underline flex justify-end pr-6' onPointerEnter={() => setCurrentProject(0)}>
                        now models
                    </div>

                    <div className='py-6 text-2xl pl-6 cursor-pointer hover:underline flex justify-end pr-6' onPointerEnter={() => setCurrentProject(1)}>
                        city bank
                    </div>

                    <div className=' py-6 text-2xl pl-6 cursor-pointer hover:underline flex justify-end pr-6' onPointerEnter={() => setCurrentProject(2)}>
                        venus jewelery
                    </div>

                    <div className=' py-6 text-2xl pl-6 cursor-pointer hover:underline flex justify-end pr-6' onPointerEnter={() => setCurrentProject(3)}>
                        burger shack
                    </div>

                    <div className=' py-6 text-2xl pl-6 cursor-pointer hover:underline flex justify-end pr-6' onPointerEnter={() => setCurrentProject("texas")}>
                        texas house
                    </div>
                </div> */}