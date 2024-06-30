'use client'
import Image from 'next/image'
import React, { useState } from 'react'

const Slider = () => {
  const [imageIndex, setImageIndex] = useState<number| null>(null);

  const changeSlide = (direction: string) => {
    if(direction === "left") {
      if (imageIndex === 0) {
        setImageIndex(images.length - 1)
      } else {
        setImageIndex(imageIndex - 1)
      }
    } else { 
      if (imageIndex === images.length - 1) {
        setImageIndex(0)
      } else {
        setImageIndex(imageIndex + 1)
      }
    }
  }

  const images = [
    'https://images.unsplash.com/photo-1591247378418-c77f1532d2f8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1611145367559-6089dfcdc781?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW5zaWRlJTIwaG91c2V8ZW58MHx8MHx8fDA%3D',
    'https://plus.unsplash.com/premium_photo-1684348962314-64fa628992f0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW5zaWRlJTIwaG91c2V8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1629079448105-35ab3e5152d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGluc2lkZSUyMGhvdXNlfGVufDB8fDB8fHww'
  ]

  return (
    <div className="slider w-full h-[350px] flex gap-5">

      {imageIndex !== null && <div className="fullSlider absolute bg-black w-screen h-screen top-0 left-0 flex items-center justify-between">
        <div className="arrow flex-[1]">
          <Image src='/arrow.png' alt='' width={50} height={50} onClick={() => changeSlide("left")} className='w-[20px] md:w-[30px] lg:w-[50px]'/>
        </div>
        <div className="imgContainer flex-[10]">
          <Image src={images[imageIndex]} width={100} height={100} alt='' className='w-full h-full object-contain rounded-xl'/>
        </div>
        <div className="arrow flex-[1]">
          <Image src='/arrow.png' className='rotate-180 w-[20px] md:w-[30px] lg:w-[50px]' alt='' width={50} height={50} onClick={() => changeSlide("right")}/>
        </div>
        <div className="close text-white absolute top-0 right-0 text-2xl font-bold p-[50px] cursor-pointer" onClick={() => setImageIndex(null)}>X</div>
      </div>}

      <div className="bigImage flex-[3]">
        <Image src={images[0]} alt='' width={150} height={100} onClick={() => setImageIndex(0)} className='w-full h-full object-cover rounded-lg cursor-pointer'/>
      </div>
      <div className="smallImages flex-[1] flex flex-col justify-between gap-5">
        {images.slice(1).map((image, index) => (
          <Image src={image} alt=" " width={100} height={100} key={index} className='w-full h-[100px] object-cover rounded-lg cursor-pointer' onClick={() => setImageIndex(index+1)}/>
        ))}
      </div>
    </div>
  )
}

export default Slider