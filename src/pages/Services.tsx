import React from 'react'

function Services() {
  return (
    <div className='px-4 md:mx-6 mx-3 bg-[#F6E9E4] flex md:flex-row flex-col justify-between gap-4 py-6 rounded-2xl'>
      <h4 className='text-2xl font-bold text-[#656464]'>Services</h4>
      <div className='flex gap-10 md:gap-40 md:mr-40'>
        <ul className='text-sm gap-3 flex flex-col'>
        <li>Bridal Makeup</li>
        <li>Editorial Makeup</li>
        <li>Photo Shoot Makeup</li>
      </ul>
       <ul className='text-sm gap-3 flex flex-col'>
        <li>Event Makeup</li>
        <li>Party Makeup</li>
        <li>Personal Makeup</li>  
      </ul>
      </div>
      
    </div>
  )
}

export default Services