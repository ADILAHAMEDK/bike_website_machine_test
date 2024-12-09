import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className='mt-10 mb-10 bg-neutral-400'>
        <div className='max-w-6xl mx-auto pt-10 pb-10'>
            <h1 className='text-red-600 text-xl text-center sm:text-start px-2 sm:px-0'>About Us</h1>
            <span className='text-black text-2xl text-center sm:text-start block px-2  sm:px-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            <p className='mt-2 mb-2 text-xl font-medium text-center sm:text-start px-2 sm:px-0'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, inventore, quam voluptatum itaque veniam, magnam exercitationem mollitia similique harum unde perferendis tempore suscipit facere iste tenetur. Sint ducimus illo tempore.
            Nobis nam quisquam atque consectetur, enim, dolores provident aspernatur eveniet, similique repellat ex quis numquam ut et iste! Ad, officiis reiciendis in at unde quo sint architecto excepturi id eligendi.</p>
            <p className='text-xl mt-5 text-center sm:text-start px-2 sm:px-0'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis dolorum vero error fuga quasi. Illo, officia, fugiat veritatis vero provident recusandae ut distinctio excepturi necessitatibus optio sit minima eos dolorum!</p>
            <div className='grid grid-cols-2 lg:grid-cols-4 place-items-center mt-6'>
                <div className='border-r-2 pr-10 border-black'>
                    <h1 className='text-red-600 text-3xl'>86089</h1>
                    <span>Bike Members</span>
                </div>
                <div className='border-r-2 pr-10 border-black'>
                    <h1 className='text-red-600 text-3xl'>86089</h1>
                    <span>Bike Members</span>
                </div>
                <div className='border-r-2 pr-10 border-black'>
                    <h1 className='text-red-600 text-3xl'>86089</h1>
                    <span>Bike Members</span>
                </div>
                <div>
                    <h1 className='text-red-600 text-3xl'>86089</h1>
                    <span>Bike Members</span>
                </div> 
            </div>
            <div className='flex items-center gap-5 mt-10 px-4 sm:px-0'>
                <div className='flex relative text-white'>
                <button className='px-6 py-3 bg-red-600'>More about us</button>
                <FaArrowRight className='absolute top-[18px] right-0 pr-2' />
                </div>
                <div className='flex relative text-red-600'>
                <button className='px-6 py-3 border border-red-600'>Contact Us</button>
                <FaArrowRight className='absolute top-[18px] right-0 pr-2' />
                </div>

            </div>
        </div>
    </div>
  )
}

export default AboutUs