import React from 'react'
import { useForm } from 'react-hook-form'
import erricon from '../images/icon-error.svg'


function Date() {
    const {register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    console.log(watch("email")); 

    return (
        <div className='py-14 lg:px-28 bg-blue-600 lg:w-full px-5 md:px-20 flex justify-center items-center'>
            <div className='text-white lg:w-2/3 flex flex-col items-center justify-center'>
                <p className='pb-2 text-sm tracking-[.25em] font-semibold text-gray-200'>35,000+ ALREADY JOINED</p>
                <h2 className='py-3 text-2xl lg:text-3xl text-center font-semibold'>Stay up-to-date with what<br/>we're doing</h2>
                <form className='pt-5 flex flex-col lg:flex-row items-center gap-3 relative' onSubmit = { handleSubmit(onSubmit)}>
                    <input
                        className={' pl-5 outline-none rounded text-black text-sm w-80 h-10' + (errors.emailRequired ? ' border-2 border-red-500 ' : '')}
                        type='email'
                        name='email'
                        placeholder='Enter your email address'
                        {...register("emailRequired", { required: true })}
                    />
                    <button className='bg-red-500 shadow-red-900 shadow rounded text-sm border-2 border-red-500 font-semibold h-10 w-80 lg:w-32 hover:bg-white hover:text-red-500' type= 'submit'>Contact Us</button>
                    {errors.emailRequired && <img className='mr-4 lg:mr-1 absolute top-8 right-0 lg:right-36' src={erricon} alt="" />}
                    {errors.emailRequired && <span className='bg-red-500 rounded-bl rounded-br pl-3 text-gray-100 text-xs italic w-80 py-1 absolute left-0 top-14'>Whoops, make sure it's an email</span>}
                </form>
            </div>
        </div>
    )
}

export default Date
