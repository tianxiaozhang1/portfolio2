import React from 'react'

// import Image from 'next/image';
// import { source_code_pro, roboto } from '../fonts'
// import Header from './components/Header'
// import Footer from './components/Footer'
// import ProjectsSection from './components/ProjectsSection'
// import nowHome1 from '../images/now/home2.JPG'
// import NowProject from './projects/now'
// import NowProject2 from './projects/now2'
// import Now3 from './projects/now3'

import Profile from './components/homepage/Profile'

import Momenta from './components/homepage/Momenta'
import BurgerShack from './components/homepage/BurgerShack'
import CityBank from './components/homepage/CityBank'
import Venus from './components/homepage/Venus'
import NowModels from './components/homepage/NowModels'

import Freecell from './projects/FreeCell'
import Minesweeper from './projects/Minesweeper'
import Sudoku from './projects/Sudoku'

import Pathfinder from './projects/Pathfinder'
// import Sorting from './projects/Sorting'
import Sorting2 from './projects/Sorting2'
// import MSN from './projects/MSN'

// import emailIcon from '../images/icons/emailicon.png';
// import pythonIcon from './components/logos/python'
// import GitHubLogo from './components/logos/github'
// import WebsiteLogo from './components/logos/website'
// import InstagramLogo from './components/logos/instagram'
// import EmailLogo from './components/logos/email'

const titleCSS = "w-92 h-18 md:w-190 md:h-22 lg:flex lg:w-26 lg:h-120 xl:w-316 xl:h-28 text-3xl lg:text-5xl font-semibold text-slate-500 mx-auto mt-3 md:mt-6 flex items-center text-center justify-center"

// import "@fontsource/cascadia-code"

export default function Home() {
    return (
            <div className='bg-slate-50'>

                {/* <div className=' h-16 bg-slate-200 w-full grid grid-cols-1 gap-6'></div> */}

                <div className='flex justify-center mt-0 md:mt-0'><Profile/></div>

                <div className={`${titleCSS}`}>Projects</div>

                <div className='flex justify-center mt-3 md:mt-6'><BurgerShack/></div>
                <div className='flex justify-center mt-3 md:mt-6'><Momenta/></div>  
                <div className='flex justify-center mt-3 md:mt-6'><CityBank/></div> 
                <div className='flex justify-center mt-3 md:mt-6'><Venus/></div>
                <div className='flex justify-center mt-3 md:mt-6'><NowModels/></div>

                <div className={`${titleCSS}`}>Games</div>

                <div className='flex justify-center mt-3 md:mt-6'><Minesweeper/></div>

                <div className='flex justify-center mt-3 md:mt-6'><Freecell/></div>

                <div className='flex justify-center mt-3 md:mt-6'><Sudoku/></div>

                <div className={`${titleCSS}`}>Algorithm</div>

                <div className='flex justify-center mt-3 md:mt-6'><Pathfinder/></div>

                <div className='flex justify-center mt-3 md:mt-6'><Sorting2/></div>
    
                <div className={`h-24 w-full`}></div>
            </div>
        )
}