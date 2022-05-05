import React from 'react'
import desktop from '../images/illustration-hero.svg'

function Main() {
    return (
        <div className='lg:pl-28 lg:pr-14 xl:pl-48 pt-28 lg:pt-32 pb-14 w-full relative'>
            <div className='px-5 md:px-20 lg:px-0 flex flex-col lg:flex-row w-full items-center gap-5 lg:gap-10'>
                <div className='lg:hidden w-full z-10'>
                    <img className='w-full' src= {desktop} width='100%' alt="" />
                </div>
                <div className=' py-6 flex flex-col items-center lg:items-start gap-4 lg:gap-6 lg:w-1/2'>
                    <h1 className='text-2xl lg:text-5xl text-gray-700 text-center lg:text-left font-bold lg:font-semibold'>A Simple Bookmark<br/>Manager</h1>
                    <p className='text-gray-400 text-center lg:text-left font-medium'>
                    A clean and simple interface to organize your favourite websites. Open a new 
                    browser tab and see your sites load instantly. Try it for free.
                    </p>
                    <div className='flex gap-3 md:gap-8 lg:gap-5'>
                        <button className='bg-blue-600 shadow-blue-900 shadow border-2 border-blue-600 rounded font-medium text-sm text-gray-300 w-40 h-10 hover:bg-gray-200 hover:border-gray-200 hover:text-gray-900'>Get it on Chrome</button>
                        <button className='bg-gray-200 shadow border-2 border-gray-200 rounded font-medium text-sm text-gray-900 w-40 h-10 hover:bg-blue-600 hover:text-gray-200'>Get it on Firefox</button>
                    </div>
                </div>
                <div className='hidden lg:block ml-auto w-1/2 z-10'>
                    <img src= {desktop} alt="" className='w-full' />
                </div>
            </div>
            <div className='bg-blue-600 lg:hidden rounded-l-full absolute z-0 top-48 md:top-60 right-0 w-80 md:w-4/5 h-40 md:h-80' />
            <div className='bg-blue-600 hidden lg:block rounded-l-full lg:absolute z-0 bottom-14 right-0 w-2/6 h-64' />
        </div>
    )
}

export default Main
