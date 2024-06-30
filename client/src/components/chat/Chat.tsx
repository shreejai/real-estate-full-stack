'use client'
import '@/components/chat/chat.css';
import Image from 'next/image';
import { useState } from 'react';

const Chat = () => {
  const [chat, setChat] = useState<boolean | null>(true);
  const count = [1,2,3,4,5,6,7];
  return (
    <div className='chat flex flex-col bg-orange-100 p-4 gap-4 rounded-lg'>
      <div className="messages">
        <h1>Messages</h1>
        {count.map((item)=>(
          <div key={item} className="message flex gap-2 items-center bg-white p-5 rounded-lg cursor-pointer">
          <Image src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?crop=entropy&dpr=2&w=200&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8dXNlcnxlbnwwfHx8fDE3MTgyMDM2NDZ8MA&ixlib=rb-4.0.3' alt='' width={20} height={20} className='rounded-lg object-cover w-5 h-5'/>
          <span>John Doe</span>
          <p>Lorem, ipsum dolor sit amet...</p>
        </div>
        ))}
        
      </div>
      { chat && <div className="chatBox bg-white">
        <div className="top flex justify-between bg-orange-400 p-4 font-bold">
          <div className="user flex gap-2 items-center">
            <Image src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?crop=entropy&dpr=2&w=200&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8dXNlcnxlbnwwfHx8fDE3MTgyMDM2NDZ8MA&ixlib=rb-4.0.3' alt='' width={20} height={20} className='rounded-full object-cover w-5 h-5'/> 
            <span>John Doe</span>
          </div>
          <span className='close cursor-pointer' onClick={()=>setChat(null)}>x</span>
        </div>
        <div className="center p-4 h-[350px] flex flex-col gap-5 overflow-scroll">
          <div className="chatMessage">
            <p>lorem ipsum dolor sit amet...</p>
            <span>1 hour ago</span>
          </div>
          <div className="chatMessage own">
            <p>lorem ipsum dolor sit amet...</p>
            <span>1 hour ago</span>
          </div>
          <div className="chatMessage">
            <p>lorem ipsum dolor sit amet...</p>
            <span>1 hour ago</span>
          </div>
          <div className="chatMessage own">
            <p>lorem ipsum dolor sit amet...</p>
            <span>1 hour ago</span>
          </div>
        </div>
        <div className="bottom border-2 border-orange-200 flex justify-between items-center h-[60px]">
          <textarea className='flex-[3] h-full border-none'></textarea>
          <button className='flex-[1] bg-orange-400 h-full border-none cursor-pointer'>Send</button>
        </div>
      </div>}
    </div>
  )
}

export default Chat