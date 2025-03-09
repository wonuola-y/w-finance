import React from 'react'
import Sidebar from "../assets/Sidebar/Sidebar.png";
import Input from '../components/input';
import Button from '../components/button';
import Image from 'next/image'
import Link from "next/link";
const login = () => {
  return (
    <div className='flex items-center justify-center bg-brand-bg_white_clr h-screen'>
      <div className='p-2 w-1/3 '>
        <Image src={Sidebar} alt='side bar'/> 
      </div>
      <div className='flex items-center justify-center w-2/3 '>
        <form className="modal h-1/2 w-1/2  ">
          <h1 className='my-4 font-bold text-3xl '>Login</h1>
          <label className=' text-sm text-brand-text_gray'>Email</label>
          <Input width='w-full' type='email' className='my-4 mt-1' />
          <label className=' text-sm text-brand-text_gray'>Password</label>
          <Input width="w-full" className='my-4 mt-1' type="password" placeholder='************' />
          <Button bgColor='bg-black' text="Login" textColor='text-white' className='my-4 flex justify-center' />
          <p className='mt-4 flex justify-center items-center'>You do not have an account? <Link href="/SignUp">Sign Up</Link></p>
        </form>
          </div>
    </div>
  )
}

export default login