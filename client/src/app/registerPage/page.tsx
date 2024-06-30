import Link from 'next/link'
import React from 'react'
import '@/app/registerPage/register.css';
import Image from 'next/image';

const Page = () => {
  return (
    <>
      <div className='registerPage'>
        <div className="formContainer">
          <form className='flex flex-col gap-5'>
            <h1>Create an account</h1>
            <input name='username' type="text" placeholder='Username'/>
            <input name='email' type="email" placeholder='Email'/>
            <input name='password' type="password" placeholder='Password'/>
            <input name='password' type="password" placeholder='Confirm Password'/>
            <button>Register</button>
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