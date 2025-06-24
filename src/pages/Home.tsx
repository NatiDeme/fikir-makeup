import React from 'react'
import Image from 'next/image'

function Home() {
  return (
    <div className='md:bg-maincolor h-screen rounded-lg block md:flex justify-between md:flex-row overflow-hidden'>
      <div className='flex flex-col gap-4 pt-24 px-4'>
        <h3 className='text-xl w-60 md:text-4xl md:w-[650px]'>
          Unleash Your <b>Radiance</b> – Expert <b>Makeup for Every Occasion</b>
        </h3>
        <span className='text-sm hidden md:block md:w-[650px]'>
          Pair a decorative script font (like Great Vibes) for headlines with a clean sans-serif (like Montserrat) for body text to balance elegance with readability.
        </span>
        <button className='bg-black text-white px-4 py-3 rounded-2xl w-40 md:w-28 md:py-2 md:px-0 text-sm'>Book now</button>
      </div>
      <div className='relative w-[400px] h-[450px]'>
        <Image
        src="https://utfs.io/a/idrxejgv3w/3YsXihUpZdorxuJmsb25LDiHuAOM871mfBqlahgENJ0eQTpn"
        layout='fill'
        alt="Picture of the author"
        className='absolute w-full h-full'
    />
      </div>
      
    </div>
  )
}

export default Home