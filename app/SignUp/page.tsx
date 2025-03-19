'use client'
import React, { useState } from 'react'
import Sidebar from "../assets/Sidebar/Sidebar.png";
import Input from '../components/input';
import Button from '../components/button';
import Image from 'next/image'
import Link from "next/link";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
const SignUp = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const handleLogin = async (e:React.FormEvent) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert("Login successful!");
        } catch (err) {
           if (err instanceof Error) {
            setError(err.message)
           }
           else {
            setError("An unknown error occurred.");
          }
      
        }
    };
    return (
        <div>
            <div className="block md:hidden">
                <div className='bg-brand-brand_black text-white flex justify-center py-6 font-extrabold text-3xl rounded-b-xl '>
                    <h1>W-Finance</h1>
                </div>
            </div>
            <div className='flex items-center justify-center bg-brand-bg_white_clr h-screen md:h-screen'>
                <div className=' hidden md:block p-2 md:w-1/3 '>
                    <Image src={Sidebar} alt='side bar' />
                </div>

                <div className='flex items-center justify-center w-100 w-11/12 md:w-2/3  '>
                    <form className="modal h-1/2 w-full md:w-1/2  " onSubmit={handleLogin}>
                        <h1 className='my-4 font-bold text-3xl '>Sign In</h1>
                        <label className=' text-sm text-brand-text_gray'>Name</label>
                        <Input width='w-full' value={name} type='text' className='my-4 mt-1' onChange={(e)=> setName(e.target.value)}/>
                        <label className=' text-sm text-brand-text_gray'>Email</label>
                        <Input width='w-full' type='email' value={email} onChange={(e)=>setEmail(e.target.value) } className='my-4 mt-1' />
                        <label className=' text-sm text-brand-text_gray'>Create Password</label>
                        <Input width="w-full" className='mb-1 mt-1' type="password" value={password} onChange={(e)=> setPassword(e.target.value)}  placeholder='************' />
                        <p className="text-xs flex justify-end text-brand-text_gray"><i className="not-italic">Password must be at least 8 characters</i></p>
                        <Button bgColor='bg-black' text="Create Account" textColor='text-white' className='my-4 flex justify-center' />
                        <p className='mt-4 flex justify-center items-center text-brand-text_gray'>You have an account?  <Link className="ml-1 text-brand-brand_black font-semibold" href="/login">  Login</Link></p>
                    </form>
                    {error && <p>{error}</p>}
                </div>
            </div>
        </div>
    )
}

export default SignUp