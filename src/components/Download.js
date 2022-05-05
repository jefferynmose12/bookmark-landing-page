import React from 'react'
import chrome from '../images/logo-chrome.svg'
import firefox from '../images/logo-firefox.svg'
import opera from '../images/logo-opera.svg'
import bgdots from '../images/bg-dots.svg'

function Download() {
    return (
        <div className='py-14 lg:px-28 xl:pl-48 flex flex-col items-center'>
            <div className='px-5 md:px-20 lg:px-0 flex flex-col gap-3 items-center'>
                <h2 className='text-2xl font-bold'>Download the extension</h2>
                <p className=' text-center text-gray-500 lg:w-2/3'>
                We've got more browsers in the pipeline. Please do let us know if you've 
                got a favourite you'd like us to prioritize.
                </p>
            </div>
            <div className='py-8 px-5 md:px-20 lg:px-0 flex flex-col lg:flex-row gap-6 items-center justify-center'>
                <div className='p-4 bg-white rounded-xl shadow-xl flex flex-col items-center gap-5 lg:w-1/4'>
                    <img src={chrome} alt="" />
                    <div className='pb-3'>
                        <h4 className='font-bold text-gray-600'>Add to Chrome</h4>
                        <p className='pt-1 text-xs text-gray-500 font-semibold'>Minimum version 62</p>
                    </div>
                    <img src={bgdots} width='100%' alt="" />
                    <button className='bg-blue-600 shadow-blue-900 shadow border-2 border-blue-600 rounded text-gray-300 w-full h-8 text-sm font-semibold hover:bg-white hover:text-blue-600'>
                        Add & Install Extension
                    </button>
                </div>
                <div className='p-4 translate-y-6 bg-white rounded-xl shadow-xl flex flex-col items-center gap-5 lg:w-1/4'>
                    <img src={firefox} alt=""/>
                    <div className='pb-3'>
                        <h4 className='font-bold text-gray-600'>Add to Firefox</h4>
                        <p className='pt-1 text-xs text-gray-500 font-semibold'>Minimum version 55</p>
                    </div>
                    <img src={bgdots} width='100%' alt="" />
                    <button className='bg-blue-600 shadow-blue-900 shadow border-2 border-blue-600 rounded text-gray-300 w-full h-8 text-sm font-semibold hover:bg-white hover:text-blue-600'>
                        Add & Install Extension
                    </button>
                </div>
                <div className='p-4 translate-y-12 bg-white rounded-xl shadow-xl flex flex-col items-center gap-5 lg:w-1/4'>
                    <img src={opera} alt="" />
                    <div className='pb-3'>
                        <h4 className='font-bold text-gray-600'>Add to Opera</h4>
                        <p className='pt-1 text-xs text-gray-500 font-semibold'>Minimum version 46</p>
                    </div>
                    <img src={bgdots} width='100%' alt="" />
                    <button className='bg-blue-600 shadow-blue-900 shadow border-2 border-blue-600 rounded text-gray-300 w-full h-8 text-sm font-semibold hover:bg-white hover:text-blue-600'>
                        Add & Install Extension
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Download
