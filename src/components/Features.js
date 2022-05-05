import React, { useState } from 'react'
import tabone from '../images/illustration-features-tab-1.svg'
import tabtwo from '../images/illustration-features-tab-2.svg'
import tabthree from '../images/illustration-features-tab-3.svg'

function Features() {
    const [image, setImage]= useState(<img className='w-full' width='100%' src={tabone} alt="" />);
    const [texth, setTexth]= useState('Bookmark in one click');
    const [textp, setTextp]= useState('Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.');
    const handleBookmark = () => {
        setImage(<img className='w-full' src={tabone} alt="" />)
        setTexth('Bookmark in one click');
        setTextp('Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.');
        document.getElementById('two').style.color = 'grey';
        document.getElementById('three').style.color = 'grey';
        document.getElementById('two').style.borderBottom = '2px solid grey';
        document.getElementById('three').style.borderBottom = '2px solid grey';
        document.getElementById('one').style.color = '#000'
        document.getElementById('one').style.borderBottom = '4px solid hsl(0, 94%, 66%)'
    }

    const handleSearching = () => {
        setImage(<img className='w-full' src={tabtwo} alt="" />)
        setTexth('Intelligent search');
        setTextp('Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.');
        document.getElementById('one').style.color = 'grey';
        document.getElementById('three').style.color = 'grey';
        document.getElementById('one').style.borderBottom = '2px solid grey';
        document.getElementById('three').style.borderBottom = '2px solid grey';
        document.getElementById('two').style.color = '#000'
        document.getElementById('two').style.borderBottom = '4px solid hsl(0, 94%, 66%)'
    }

    const handleSharing = () => {
        setImage(<img className='w-full' src={tabthree} alt="" />);
        setTexth('Share your bookmarks');
        setTextp('Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.');
        document.getElementById('one').style.color = 'grey';
        document.getElementById('two').style.color = 'grey';
        document.getElementById('one').style.borderBottom = '2px solid grey';
        document.getElementById('two').style.borderBottom = '2px solid grey';
        document.getElementById('three').style.color = '#000'
        document.getElementById('three').style.borderBottom = '4px solid hsl(0, 94%, 66%)'
    }

    return (
        <div className='py-14 lg:pr-28 lg:pl-20 xl:pl-48 flex flex-col items-center relative'>
            <div className='px-5 md:px-20 lg:px-0 flex flex-col items-center'>
                <div className='flex flex-col gap-3 items-center'>
                    <h2 className='text-2xl font-bold'>Features</h2>
                    <p className=' text-center text-gray-500 lg:w-2/3'>
                    Our aim is to make it quick and easy for you to access your favourite websites. 
                    Your bookmarks sync between your devices so you can access them on the go.
                    </p>
                </div>
                <div className='my-8 px-5 lg:mx-0 font-medium flex flex-col lg:flex-row items-center cursor-pointer w-full lg:w-auto '>
                    <div onClick={handleBookmark} id='one' className='border-t-2 lg:border-t-0 border-t-gray-300 px-5 border-b-4 border-red-500 text-center text-black w-full lg:w-auto'>
                        <h4 className='py-3 px-2 hover:text-black'>Simple Bookmarking</h4>
                    </div>
                    <div onClick={handleSearching} id='two' className='px-5 border-b-2 border-gray-300 text-center text-gray-500 w-full lg:w-auto'>
                        <h4 className='py-3 px-2 hover:text-black'>Speedy Searching</h4>
                    </div>
                    <div onClick={handleSharing} id='three' className='px-5 border-b-2 border-gray-300 text-center text-gray-500 w-full lg:w-auto'>
                        <h4 className='py-3 px-2 hover:text-black'>Easy Sharing</h4>
                    </div>
                </div>
            </div>

            <div className='py-7 px-5 md:px-20 lg:px-0 flex flex-col lg:flex-row items-center gap-28 lg:gap-32'>
                <div className='w-full z-10'>{image}</div>
                <div className='flex flex-col items-center lg:items-start gap-6'>
                    <h3 className='text-2xl font-bold lg:font-semibold'>{texth}</h3>
                    <p className='text-gray-500 text-center lg:text-left font-medium'>{textp}</p>
                    <button className='items-center w-28 h-10 bg-blue-600 shadow-blue-900 shadow border-2 border-blue-600 rounded text-gray-200 text-sm font-semibold hover:bg-white hover:text-blue-600'>More info</button>
                </div>
            </div>
            <div className='bg-blue-600 lg:hidden rounded-r-full absolute z-0 top-1/2 left-0 w-80 md:w-4/5 h-40 md:h-72' />
            <div className='bg-blue-600 hidden lg:block rounded-r-full lg:absolute z-0 bottom-5 left-0 w-2/5 h-64' />
        </div>
    )
}

export default Features;
