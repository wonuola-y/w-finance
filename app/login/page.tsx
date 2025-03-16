import React from 'react'
import Sidebar from "../assets/Sidebar/Sidebar.png";
import Input from '../components/input';
import Button from '../components/button';
import Image from 'next/image'
import Link from "next/link";
const login = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center bg-brand-bg_white_clr h-screen'>
      <div className="block md:hidden">
        <div className='bg-brand-brand_black text-white flex justify-center py-6 font-extrabold text-3xl rounded-b-xl w-screen md:w-100'>
          <h1>W-Finance</h1>
        </div>
      </div>
      <div className='hidden md:h-screen md:block p-2 w-1/2 '>
        <Image src={Sidebar} alt='side bar'className='h-full rounded-lg w-full object-cover'/> 
      </div>
      <div className='flex md:w-full items-center justify-center bg-brand-bg_white_clr h-screen md:h-screen'>
        <form className="modal h-1/2 md:w-1/2  ">
          <h1 className='my-4 font-bold text-3xl '>Login</h1>
          <label className=' text-sm text-brand-text_gray'>Email</label>
          <Input width='w-full' type='email' className='my-4 mt-1' />
          <label className=' text-sm text-brand-text_gray'>Password</label>
          <Input width="w-full" className='my-4 mt-1' type="password" placeholder='************' />
          <Button bgColor='bg-black' text="Login" textColor='text-white' className='my-4 mb-2 flex justify-center' />
          <div className="flex justify-center py-4 pt-2">
            <p className='text-[#696868]'>Need an account? <Link className='text-black font-semibold' href="/SignUp">Sign Up</Link></p>
        </div>
        </form>
          </div>
    </div>
  )
}

export default login