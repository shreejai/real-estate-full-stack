'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import '@/app/login/login.css'
import { useRouter } from 'next/navigation';
import axios from 'axios';
import apiRequest from '../libs/apiRequest'

const Page = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const password = formData.get("password");

    console.log(username, password);

    try {
      const res = await apiRequest.post("/auth/login",{
        username,
        password,
      },{
        headers:{
          "Content-Type": "application/json"
        },
        withCredentials: true
      });
      console.log(res.data);
      // Navigate on successful registration
      // router.push('/login');
    } catch (err) {
      if(axios.isAxiosError(err)){
        console.log('Axios error:', err); 
        setError(err.response?.data.message); 
      }else{
        console.log('Unexpected error', err);
        setError('An unexpected error occurred.')
      }
    } finally {
      setIsLoading(false);
    }
    
  }
  return (
    <div className='login'>
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Welcome back</h1>
          <input 
          name='username' 
          required 
          minLength={3}
          maxLength={30}
          type="text" 
          placeholder='Username'
          />
          <input 
          name='password' 
          required 
          type="password" 
          placeholder='Password'
          />
          <button disabled={isLoading} type='submit'>Sign in</button>
          {error && <span className='text-red-500'>{error}</span>}
          <Link href="/registerPage">{"Don't"} you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="login" />
      </div>
    </div>
  )
}

export default Page