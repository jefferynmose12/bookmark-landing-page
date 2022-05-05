import React, { useState } from 'react'

function Question() {
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);

    const handleButtoni = () => {
        setOpen1(!open1)
    }

    const handleButtonii = () => {
        setOpen2(!open2)
    }

    const handleButtoniii = () => {
        setOpen3(!open3)
    }

    const handleButtoniv = () => {
        setOpen4(!open4)
    }

    return (
        <div className='py-14 px-5 md:px-20 lg:px-0 flex flex-col items-center lg:w-full'>
            <div className='flex flex-col items-center justify-center lg:w-1/2'>
                <div className='flex flex-col gap-3 items-center'>
                    <h2 className='text-2xl text-center font-bold'>Frequently Asked Questions</h2>
                    <p className='text-center text-gray-500 lg:w-2/3'>
                        Here are some of our FAQs. If you have any other questions you'd like 
                        answered please feel free to email us.
                    </p>
                </div>
                <div className='mt-12 w-full lg:w-4/5 flex flex-col border-t-2 border-gray-200'>
                    <div className='w-full py-2 flex flex-col border-b-2 border-gray-200'>
                        <div className='cursor-pointer flex items-center justify-between'>
                            <div className=''>
                                <h5 className='text-gray-600 font-semibold hover:text-red-500'>What is Bookmark?</h5>
                            </div>
                            <div className='p-3' onClick={handleButtoni} >
                                <svg className={open1 === false ? ' duration-500 ' : ' duration-500 rotate-180'} xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" stroke={ open1 === false ? "#5267DF" : "hsl(0, 94%, 66%)" }  stroke-width="3" d="M1 1l8 8 8-8" id ={ open1 === false ? null : "rotate" } /></svg>
                            </div>
                        </div>
                        <p className={' py-3 text-gray-500 ' + (open1 === false ? 'hidden' : null )}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt 
                            justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.
                        </p>
                    </div>
                    <div className='w-full py-2 flex flex-col border-b-2 border-gray-200'>
                        <div className='cursor-pointer flex items-center justify-between'>
                            <div>
                                <h5 className='text-gray-600 font-semibold hover:text-red-500'>How can I request a new browser?</h5>
                            </div>
                            <div className='p-3' onClick={handleButtonii}>
                                <svg className={open2 === false ? ' duration-500 ' : ' duration-500 rotate-180'} xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" stroke={ open2 === false ? "#5267DF" : "hsl(0, 94%, 66%)" }  stroke-width="3" d="M1 1l8 8 8-8" id ={ open2 === false ? null : "rotate" }/></svg>
                            </div>
                        </div>
                        <p className={' py-3 text-gray-500 ' + (open2 === false ? 'hidden' : null )}>
                        Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. 
                        Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, 
                        ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. 
                        Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.
                        </p>
                    </div>
                    <div className='w-full py-2 flex flex-col border-b-2 border-gray-200'>
                        <div className='cursor-pointer flex items-center justify-between'>
                            <div>
                                <h5 className='text-gray-600 font-semibold hover:text-red-500'>Is there a mobile app?</h5>
                            </div>
                            <div className='p-3' onClick={handleButtoniii}>
                                <svg className={open3 === false ? ' duration-500 ' : ' duration-500 rotate-180'} xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" stroke={ open3 === false ? "#5267DF" : "hsl(0, 94%, 66%)" }  stroke-width="3" d="M1 1l8 8 8-8" id ={ open3 === false ? null : "rotate" } /></svg>
                            </div>
                        </div>
                        <p className={' py-3 text-gray-500 ' + (open3 === false ? 'hidden' : null )}>
                        Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum 
                        urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed 
                        sollicitudin ex et ultricies bibendum.
                        </p>
                    </div>
                    <div className='w-full py-2 flex flex-col border-b-2 border-gray-200'>
                        <div className='cursor-pointer flex items-center justify-between'>
                            <div>
                                <h5 className='text-gray-600 font-semibold hover:text-red-500'>What about other Chromium browsers?</h5>
                            </div>
                            <div className='p-3' onClick={handleButtoniv}>
                                <svg className={open4 === false ? ' duration-500 ' : ' duration-500 rotate-180'} xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" stroke={ open4 === false ? "#5267DF" : "hsl(0, 94%, 66%)" }  stroke-width="3" d="M1 1l8 8 8-8" id ={ open4 === false ? null : "rotate" } /></svg>
                            </div>
                        </div>
                        <p className={' py-3 text-gray-500 ' + (open4 === false ? 'hidden' : null )}>
                        Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam 
                        vitae neque eget nisl gravida pellentesque non ut velit.
                        </p>
                    </div>
                </div>
                <div className='my-10'>
                    <button className='w-28 h-10 bg-blue-600 shadow-blue-900 shadow border-2 border-blue-600 rounded text-gray-200 text-sm font-semibold hover:bg-white hover:text-blue-600'>More Info</button>
                </div>
            </div>
        </div>
    )
}

export default Question
