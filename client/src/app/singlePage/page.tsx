'use client'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Slider from '@/components/slider/Slider'
import { Map } from 'leaflet'
import Image from 'next/image'
import React, { useMemo } from 'react'
import './singlePage.css'
import dynamic from 'next/dynamic'

type Property = {
  id: number;
  title: string;
  amount: string;
  beds: string;
  bath: string;
  lat: any;
  lng: any;
}

const SinglePage = () => {

  const properties: Property[] = [
    {
      id: 1,
      title: "Cozy Cottage",
      amount: "$120,000",
      beds: "2",
      bath: "1",
      lat: 21.0499827,
      lng: 79.0385908
    }
  ];

  const Map = useMemo(() => dynamic(
    () => import('@/components/Map'),
    { 
      loading: () => <p>A map is loading</p>,
      ssr: false
    }
  ), [])

  return (
    <>
    <Navbar/>
    <div className='singlePage grid grid-cols-1 lg:grid-cols-2 px-8 py-4'>
      <div className="details mt-10 md:mt-0 md:p-10">
        <div className="wrapper">
          <Slider/>
          <div className="info mt-[50px]">
            <div className="top flex justify-between">
              <div className="post flex flex-col gap-5">
                <h1 className='text-2xl font-semibold'>Beautiful Apartment</h1>
                <div className="address flex gap-1 align-middle text-[#888] text-sm">
                  <Image src="/pin.png" width={20} height={20} alt='location' className='object-contain'/>
                  <span>Civil Lines</span>
                </div>
                <div className="price p-2 bg-orange-200 rounded-lg w-max text-xl font-light">$ 12000</div>
              </div>
              <div className="user bg-yellow-100 rounded-lg flex flex-col align-middle justify-center text-center gap-5 px-12 font-semibold">
                <Image src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?crop=entropy&dpr=2&w=200&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8dXNlcnxlbnwwfHx8fDE3MTgyMDM2NDZ8MA&ixlib=rb-4.0.3' width={50} height={50} alt='User' className='border mx-auto border-100 rounded-full'/>
                <span>Shreejai Raj</span>
              </div>
            </div>
            <div className="bottom mt-12 leading-5 text-slate-500">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
          </div>
        </div>   
      </div>
      <div className="features bg-orange-50">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
              <img src="/utility.png" alt=''/>
              <div className="featureText">
                <span>Utilities</span>
                <p>Renter is responsible</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt=''/>
              <div className="featureText">
                <span>Pet Policy</span>
                <p>Pets allowed</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt=''/>
              <div className="featureText">
                <span>Property Fees</span>
                <p>Must have 3x the rent in total household income</p>
              </div>
            </div>
          </div>
          <p className="title">Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src="/size.png" alt="size"/>
              <span>1800sqft</span>
            </div>
            <div className="size">
              <img src="/bed.png" alt="size"/>
              <span>2 beds</span>
            </div>
            <div className="size">
              <img src="/bath.png" alt="size"/>
              <span>1 bathroom</span>
            </div>
          </div>
          <p className="title">Nearby Places</p>
          <div className="listHorizontal flex">
            <div className="feature">
              <img src="/school.png" alt="" />
              <div className="featureText">
                <span>School</span>
                <p>250m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/bus.png" alt="" />
              <div className="featureText">
                <span>Bus stop</span>
                <p>100m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/restaurant.png" alt="" />
              <div className="featureText">
                <span>Restuarant</span>
                <p>200m away</p>
              </div>
            </div>
          </div>
          <p className="title">Location</p>
          <div className="mapContainer">
            <Map properties={properties} position={[21.0499827, 79.0385908]} zoom={10} className='mb-8'/>
          </div>
          <div className="buttons">
            <button>
              <img src="/chat.png" alt=''/>
              Send a message
            </button>
            <button>
              {/* <img src="/save.png" alt=''/> */}
              <Image src="/save.png" alt='' width={24} height={24}/>
              Save the Place
            </button>
          </div>     
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default SinglePage