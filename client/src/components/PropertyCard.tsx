import Image from 'next/image';
import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { IoCarOutline } from "react-icons/io5";
import { LuShowerHead, LuBed } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";



const PropertyCard = (props) => {
  const {id, title, beds, bath, loc, amount, parking} = props;
  return (
    <div className='flex flex-row'>
    <a href="#" className="block rounded-lg p-4 shadow-md w-full">
  {/* <img
    alt=""
    src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    className="h-56 w-full rounded-md object-cover"
  /> */}
  <Image alt='' width={100} height={56}
  className='w-full max-w-[100%] h-56 object-cover' src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"/>

  <div className="mt-2">
    <dl>
      <div>
        <dt className="sr-only">Price</dt>
        <p>{id}</p>
        <dd className="text-sm text-black bg-orange-300 w-fit px-4 py-2 rounded-lg mb-2 mt-4">{amount?'$'+amount: 'Ask for price'}</dd>
      </div>

      <div>
        <dt className="sr-only">Location</dt>

        <dd className="text-sm text-slate-400 flex items-center gap-2"><CiLocationOn/>{loc}</dd>
      </div>
      <div>
        <dt className="sr-only">Address</dt>

        <dd className="font-medium">{title}</dd>
      </div>
    </dl>
    <div className='detail-icons flex items-center justify-between'>
    <div className="mt-6 flex items-center gap-4 text-xs">
      {parking && <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2 bg-slate-200 p-2 rounded-lg">
        
        <IoCarOutline size={20}/>

        <div className="mt-1.5 sm:mt-0">
          {/* <p className="text-gray-500">Parking</p> */}

          <p className="font-medium">2 </p>
        </div>
      </div>}

      {bath && <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2 bg-slate-200 p-2 rounded-lg">

        <LuShowerHead size={20}/>

        <div className="mt-1.5 sm:mt-0">
          {/* <p className="text-gray-500">Bathroom</p> */}
          <p className="font-medium">{ bath !== 'Not specified'? bath : 'NA' }</p>
        </div>
      </div>}
      { beds ? (
        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2 bg-slate-200 p-2 rounded-lg">
          <LuBed size={20}/>   
          <div className="mt-1.5 sm:mt-0">
            {/* <p className="text-gray-500">Bedroom</p> */}
            <p className="font-medium">{beds} </p>
          </div>
        </div>
      ) : ''
      }
    </div>

    <div className='mt-6 flex gap-4'>
      <div className='p-2 rounded-lg border border-slate-300'><FaRegHeart/></div>
    </div>
    </div>
  </div>
</a>
</div>
  )
}

export default PropertyCard