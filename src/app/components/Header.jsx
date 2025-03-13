'use client';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react'
import {Switch, cn} from "@nextui-org/react";

import { inter } from '../../fonts'

function Header() {

    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
  
    useEffect(() => {
      setMounted(true);
    }, []);
  
    if (!mounted) return null;
  
    return (
        <div className={` sm:bg-red-600 md:bg-lime-600 lg:bg-blue-700 xl:bg-violet-600 bg-yellow-600 dark:bg-lanCaiHe py-4 md:border-b-2 md:border-stone-200 ${inter.className}`}>
            <div className='flex w-full md:px-16 xl:px-112 mx-auto'>
                <div className='w-full lg:w-1/2 flex items-center gap-x-0 justify-center lg:justify-start'>
                    <div className='flex font-semibold text-xl md:text-2xl lg:text-xl text-zinc-800  dark:text-zinc-200 cursor-default'>Tianxiao Zhang</div>
                </div>
                <div className='hidden lg:flex w-1/2 justify-end items-center gap-x-10 text-sm lg:text-lg text-zinc-600 dark:text-zinc-200 font-semibold'>
                    <div className='hover:text-zinc-950 dark:hover:text-songHua'>projects</div>
                    <div className='hover:text-zinc-950 dark:hover:text-songHua'>resume</div>
                    <div className='hover:text-zinc-950 dark:hover:text-songHua'>about</div>
                </div>
            </div>
        </div>
    )
}

export default Header

                    {/* <div className='ml-2'>
                        <Switch
                            defaultUnselected color="primary" 
                            size="lg"
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} 
                            classNames={{thumb: cn("bg-zinc-100 dark:bg-xiangYe"),  wrapper: cn("bg-zinc-200")}}
                        >
                        </Switch>  
                    </div> */}