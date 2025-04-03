"use client";

import React, { useState } from 'react'
import Sidebar from "../assets/Sidebar/Sidebar.png";
import Input from '../components/input';
import Button from '../components/button';
import Image from 'next/image'
import Link from "next/link";
import { useRouter } from "next/navigation"
import { signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { auth } from "../lib/firebase";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("")
    try {
      await signInWithEmailAndPassword(auth, password, email)
      router.push('/Overview')
    }
    catch (err: unknown) {
      if (err instanceof FirebaseError) {
          if (err.code === "auth/user-not-found") {
              setError("User not found. Please check your email.");
          } else if (err.code === "auth/wrong-password") {
              setError("Incorrect password. Please try again.");
          } else {
            console.log(err)
              setError("An error occurred during sign-in.");
          }
      } else {
          setError("An unexpected error occurred.");
      }
    }
  }
  return ( 
    
    <div className='flex flex-col md:flex-row items-center justify-center bg-brand-bg_white_clr h-screen'>
      {error && <p style={{color:"red"}}>{error}</p>}
      <div className="block md:hidden">
        <div className='bg-brand-brand_black text-white flex justify-center py-6 font-extrabold text-3xl rounded-b-xl w-screen md:w-100'>
          <h1>W-Finance</h1>
        </div>
      </div>
      <div className='hidden md:h-screen md:block p-2 w-1/2 '>
        <Image src={Sidebar} alt='side bar' className='h-full rounded-lg w-full object-cover' />
      </div>
      <div className='flex md:w-full items-center justify-center bg-brand-bg_white_clr h-screen md:h-screen'>
        <form className="modal h-1/2 md:w-1/2  " onSubmit={handleLogin}>
          <h1 className='my-4 font-bold text-3xl '>Login</h1>
          <label className=' text-sm text-brand-text_gray'>Email</label>
          <Input width='w-full' type='email' className='my-4 mt-1' value={email} onChange={(e) => setEmail(e.target.value)}/>
          <label className=' text-sm text-brand-text_gray'>Password</label>
          <Input width="w-full" className='my-4 mt-1' value={password} type="password" placeholder='************' onChange={(e)=> setPassword(e.target.value)} />
          <Button type='submit' bgColor='bg-black' text="Login" textColor='text-white' className='my-4 mb-2 flex justify-center' />
          <div className="flex justify-center py-4 pt-2">
            <p className='text-[#696868]'>Need an account? <Link className='text-black font-semibold' href="/SignUp">Sign Up</Link></p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login