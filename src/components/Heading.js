import React, { useState } from 'react'
import logo from '../images/logo-bookmark.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Heading() {
    const [ toggle, setToggle ] = useState(false);
    return (
        <div className='w-full bg-white shadow lg:px-28 xl:px-48 z-40 mx-auto flex items-center justify-between h-14 lg:h-20 fixed'>
            <div className='pl-7 md:pl-20 lg:pl-0 cursor-pointer'>
                <img src={logo} alt='boookmark' />
            </div>

            <div className='pr-7 md:pr-20 ml-auto lg:hidden' onClick={()=> setToggle(!toggle)}>
                <FontAwesomeIcon className='p-2 text-xl hover:bg-blue-100' icon={faBars} />
            </div>

            <ul className={` pt-10 px-8 md:px-24 h-screen lg:hidden bg-black opacity-80 w-full absolute top-14 flex flex-col items-center text-white text-xl ${ toggle ? "left-0 duration-500" : "-left-full duration-500" }`}>
                <li className='w-full text-center border-t border-gray-100 py-3'><a href='' className='tracking-widest hover:text-red-400'>FEATURES</a></li>
                <li className='w-full text-center border-t border-gray-100 py-3'><a href='' className='tracking-widest hover:text-red-400'>PRICING</a></li>
                <li className='w-full text-center border-t border-gray-100 py-3'><a href='' className='tracking-widest hover:text-red-400'>CONTACT</a></li>
                <li className='w-full text-center border-t border-gray-100 py-5'>
                    <button className='w-full tracking-widest rounded h-12 border-2 hover:bg-red-500'>
                        <a className='text-xl font-medium' href=''>LOGIN</a>
                    </button>
                </li>
            </ul>

            <ul className='hidden lg:flex lg:ml-auto text-gray-500 items-center gap-8 text-sm font-semibold'>
                <li><a href='' className='hover:text-red-400'>FEATURES</a></li>
                <li><a href='' className='hover:text-red-400'>PRICING</a></li>
                <li><a href='' className='hover:text-red-400'>CONTACT</a></li>
                <li className='h-8 w-24 shadow-red-900 shadow flex items-center justify-center rounded bg-red-500 border-2 border-red-500 text-white cursor-pointer hover:bg-gray-100 hover:text-red-500'><a href=''>LOGIN</a></li>
            </ul>
        </div>
    );
}

export default Heading;
