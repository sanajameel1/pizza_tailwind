import React from 'react'
import Image from 'next/image'

export default function Banner() {
  return (
    <div className='relative overflow-hidden bg-gradient-to-r from-black to-grey-700 font-sans px-6 py-12 mb-7'>
    <div className='absolute inset-0 apacity-20'>
      <Image src='
     https://st4.depositphotos.com/3316741/22997/i/450/depositphotos_229976142-stock-photo-pizza-with-tomatoes-mozzarella-cheese.jpg '
      
      alt='delicious pizza banner'
      className='w-full h-full object-cover'/>
    </div>
    <div className='relative z-10 container mx-auto flex flex-col justify-center items-center text-center'>
      <h2 className='text-white sm:text-5xl font-bold mb-4'>Discover Our Menu</h2>
      <p className='text-white text-lg text-center mb-6 max-w-xl'>
        Shop Now For Exclusive Pizza Discount!
      </p>

      <button
      type='button'
      className='bg-blue-500 text-white text-sm font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-blue-600 transition duration-300'>
        Exciting Deals Launch at 12PM!

      </button>

    </div>
    </div>
  )
}
