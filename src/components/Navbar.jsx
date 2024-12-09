import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-red-600 py-3 px-3 sm:px-0'>
        <div className='max-w-6xl mx-auto flex justify-between items-center '>
            <h1 className='text-white text-xl font-semibold'>SRIVARI <span className='font-normal'>HONDA</span></h1>
            <button className='bg-white text-red-600 px-4 py-2'>ENQUIRE NOW</button>
        </div>
    </div>
  )
}

export default Navbar