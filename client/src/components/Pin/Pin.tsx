import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { Marker, Popup } from 'react-leaflet'

const Pin = (props: any) => {
  const {property, position, title, id} = props;

  if (property.lat === null) {
    return null;
  }
  const img = "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80";
  return (
    <Marker position={[property.lat, property.lng]}>
      <Popup>
        <div className='flex gap-4'>
          <div className='flex items-center'>
            <Image src={img} width={150} height={100} alt='img' className='rounded-lg h-full object-cover'/>
          </div>
          <div className='flex flex-col gap-2'>
            <div><Link href={'#'}>{property.title}</Link></div>
              {property.beds && <div>{property.beds} bedroom</div>}
            <div className='bg-orange-200 w-fit px-4 py-2 font-bold'>{property.amount ? '₹ '+property.amount : 'Ask'}</div>
          </div>
        </div>
      </Popup>
    </Marker>
  )
}

export default Pin