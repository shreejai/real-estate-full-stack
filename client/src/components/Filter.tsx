import React from 'react'

const Filter = () => {
  return (
    <div className='filter border mx-7 p-4 flex flex-col gap-4'>
      <h1>Search results for <b>Nagpur</b></h1>
      <div className="top">
        <div className="item">
          <label htmlFor="location" className='text-sm text-slate-400'>Location</label>
          <input type="text" id="location" name="location" placeholder='Enter location' className='border px-4 py-2 w-full' />
        </div>
      </div>

      <div className="bottom grid grid-cols-3 gap-4">
        <div className="item flex flex-col">
          <label htmlFor="location" className='text-sm text-slate-400'>Listing Type</label>
          <select id="listingType" name="listingType" className='border px-4 py-2 text-slate-400'>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>
        <div className="item flex flex-col">
          <label htmlFor="location" className='text-sm text-slate-400'>Property</label>
          <select id="propertyType" name="propertyType" className='border px-4 py-2 text-slate-400'>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="house">Land</option>
            <option value="house">Commercial</option>
          </select>
        </div>
        <div className="item flex flex-col">
          <label htmlFor="location" className='text-sm text-slate-400'>Advertiser</label>
          <select id="propertyType" name="propertyType" className='border px-4 py-2 text-slate-400'>
            <option value="owner">Owner</option>
            <option value="broker">Broker</option>
            <option value="builder">Builder</option>
          </select>
        </div>
        <div className="item flex flex-col">
          <label htmlFor="minPrice" className='text-sm text-slate-400'>Min Budget</label>
          <input
            type='number'
            id='minPrice'
            name='minPrice'
            placeholder='any'
            className='px-4 py-2 border'
          />
        </div>
        <div className="item flex flex-col">
          <label htmlFor="maxPrice" className='text-sm text-slate-400'>Max Budget</label>
          <input
            type='number'
            id='maxPrice'
            name='maxPrice'
            placeholder='any'
            className='px-4 py-2 border'
          />
        </div>
        <button className='bg-orange-400 px-4 py-2 mt-4 text-white'>Search</button>
        
      </div>
    </div>
  )
}

export default Filter