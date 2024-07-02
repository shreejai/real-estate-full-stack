'use client';

import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import '@/app/registerPage/register.css';
import axios from 'axios';

const Page = () => {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const usertype = formData.get("usertype");
    const password = formData.get("password");

    console.log(username, email, password);

    try {
      const res = await axios.post("http://localhost:8800/api/auth/register/",{
        username,
        email,
        phone,
        password,
        usertype
      },{
        headers:{
          "Content-Type": "application/json"
        },
        withCredentials: true
      });
      console.log(res.data);
      // Navigate to the login page or any other page on successful registration
      router.push('/login');
    } catch (err) {
      if(axios.isAxiosError(err)){
        console.log('Axios error:', err); 
        setError(err.response?.data.message); 
      }else{
        console.log('Unexpected error', err);
        setError('An unexpected error occurred.')
      }
    }
    
  }
  return (
    <>
      <div className='registerPage'>
        <div className="formContainer">
          <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
            <h1>Create an account</h1>
            <input name='username' type="text" placeholder='Username' required/>
            <input name='email' type="email" placeholder='Email'/>
            <input name='phone' type="text" placeholder='Phone'/>
            <input name='usertype' type="text" placeholder='User Type'/>
            <input name='password' type="password" placeholder='Password'/>
            <button>Register</button>
            {error && <span className='text-red-500'>{error}</span>}
            <Link href="/login">Do you have an account?</Link>
          </form>
        </div>
        <div className="imageContainer">
          {/* <Image src="/bg.png" alt="bg image" width={100} height={100}/> */}
          <img src="/bg.png" alt="bg image"/>
        </div>
      </div>
    </>
  )
}

export default Page