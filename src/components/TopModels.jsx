import React from 'react'
import b1 from '../assets/./images/b1.png'
import b2 from '../assets/./images/b2.png'
import b3 from '../assets/./images/b3.png'
import b4 from '../assets/./images/b4.png'
import b5 from '../assets/./images/b5.png'
import b6 from '../assets/./images/b6.png'
import { FaArrowCircleRight } from "react-icons/fa";


const TopModels = () => {
  return (
    <div className=' mt-5'>
        <div className='max-w-6xl mx-auto'>
            <div className='flex items-center justify-between mb-5'>
                <div>
                    <h1 className='px-2 sm:px-0 font-semibold text-lg sm:text-3xl'>TOP <span className='text-black'>MODELS</span></h1>
                    <span></span>
                </div>
                <div className='flex items-center gap-2 text-red-600'>
                    <span className='text-xl'>VIEW ALL</span>
                    <FaArrowCircleRight />
                </div>
            </div>
        

        <div className='grid place-items-center  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border'>
            <div className='relative'>
                <img src={b1} alt="img" className='w-[300px] object-cover' />
                <span className='absolute bottom-12 left-[130px] text-xl font-semibold'>Dio <span className='text-red-600'>125</span></span>
                <div className='flex items-center justify-between px-3 py-2 bg-red-600 text-white'>
                    <h1>BOOK A TEST RIDE</h1>
                    <span><FaArrowCircleRight /></span>
                </div>
            </div>
            <div className='relative'>
                <img src={b2} alt="img" className='w-[300px] object-cover' />
                <span className='absolute bottom-12 left-[130px] text-xl font-semibold'>Activa <span className='text-red-600'>125</span></span>
                <div className='flex items-center justify-between px-3 py-2 bg-red-600 text-white'>
                    <h1>BOOK A TEST RIDE</h1>
                    <span><FaArrowCircleRight /></span>
                </div>
            </div>
            <div className='relative'>
                <img src={b3} alt="img" className='w-[300px] object-cover' />
                <span className='absolute bottom-12 left-[130px] text-xl font-semibold'>Activa</span>
                <div className='flex items-center justify-between px-3 py-2 bg-red-600 text-white'>
                    <h1>BOOK A TEST RIDE</h1>
                    <span><FaArrowCircleRight /></span>
                </div>
            </div>
            <div className='relative'>
                <img src={b4} alt="img" className='w-[300px] object-cover' />
                <span className='absolute bottom-12 left-[130px] text-xl font-semibold'>Dio <span className='text-red-600'>125</span></span>
                <div className='flex items-center justify-between px-3 py-2 bg-red-600 text-white'>
                    <h1>BOOK A TEST RIDE</h1>
                    <span><FaArrowCircleRight /></span>
                </div>
            </div>
            <div className='relative'>
                <img src={b5} alt="img" className='w-[300px] object-cover' />
                <span className='absolute bottom-12 left-[130px] text-xl font-semibold'>Dio <span className='text-red-600'>125</span></span>
                <div className='flex items-center justify-between px-3 py-2 bg-red-600 text-white'>
                    <h1>BOOK A TEST RIDE</h1>
                    <span><FaArrowCircleRight /></span>
                </div>
            </div>
            <div className='relative'>
                <img src={b6} alt="img" className='w-[300px] object-cover' />
                <span className='absolute bottom-12 left-[130px] text-xl font-semibold'>Dio <span className='text-red-600'>125</span></span>
                <div className='flex items-center justify-between px-3 py-2 bg-red-600 text-white'>
                    <h1>BOOK A TEST RIDE</h1>
                    <span><FaArrowCircleRight /></span>
                </div>
            </div>
            
        </div>
        </div>
    </div>
  )
}

export default TopModels