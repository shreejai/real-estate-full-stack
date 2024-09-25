'use client'
import List from '@/components/List/List'
import Image from 'next/image'
import React from 'react'
import '@/app/profilePage/profilePage.css';
import Chat from '@/components/chat/Chat'
import apiRequest from '../libs/apiRequest';
import axios from 'axios';

const page = () => {
  const handleLogout = async () => {
    try {
      // await axios.post("http://localhost:8800/api/auth/logout/");
      await apiRequest.post("/auth/logout/");
      localStorage.removeItem("user");
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div>
      <div className='profilePage grid grid-cols-1 md:grid-cols-2'>
        <div className="details p-4 pb-10">
          <div className="wrapper flex flex-col gap-8">
            <div className="title flex justify-between">
              <h1>User Information</h1>
              <button>Update Profile</button>
            </div>
            <div className="info flex flex-col gap-4">
              <span className='flex items-center gap-2'>Avatar: <Image src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?crop=entropy&dpr=2&w=200&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8dXNlcnxlbnwwfHx8fDE3MTgyMDM2NDZ8MA&ixlib=rb-4.0.3" width={40} height={40} alt='' className='rounded-full'/></span>
              <span>Username: <b>John Doe</b></span>
              <span>Email: <b>john@gmail.com</b></span>
              <button onClick={handleLogout}>Logout</button>
            </div>
            <div className="title flex justify-between">
              <h1>My List</h1>
              <button>Create New Post</button>
            </div>
            <List/>
            <div className="title">
              <h1>Saved List</h1>
            </div>
            <List/>
          </div>
        </div>
        <div className="chatContainer p-4 ">
          <div className="wrapper">
            <Chat/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page