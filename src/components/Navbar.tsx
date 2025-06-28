import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-between px-4 md:px-8'>
      <div className='text-lg font-bold'>
        TEWABECH
      </div>
        <ul className='md:flex gap-6 hidden'>
          <li>Home</li>
          <li>About</li>
          <li>Gallery</li>
          <li>Services</li>
          <li>Contact</li>
      </ul>
      <div className='block md:hidden'>
        <button type='button'>
          <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6' viewBox="0 0 448 512">
            <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Navbar