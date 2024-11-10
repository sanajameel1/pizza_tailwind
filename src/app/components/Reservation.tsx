import React from 'react'

const ReservationSection = () => {
  return (
    <section className='bg-gradient-to-r from-black to bg-slate-900 py-10'>
      <div className='container mx-auto text-center'>
        <h2 className='text-3xl font-extrabold mb-6 text-white'> Make A Resvation</h2>
        <form className='max-w-md mx-auto'>
          <div className='mb-4 text-white'>
            <input
              type='text'
              placeholder='Your Name'
              className='w-full p-3 border border-grey-300 rounded-md'
              required />
          </div>

          <div className='mb-4'>
            <input type='email'
              placeholder='Your Email'
              className='w-full p-3 border border-grey-300 rounded-md'
              required />
          </div>

          <div className='mb-4'>
            <input type='date'
              placeholder='Your Email'
              className='w-full p-3 border border-grey-300 rounded-md'
              required />
          </div>

          <div className='mb-4'>
            <input type='time'
              placeholder='Your Email'
              className='w-full p-3 border border-grey-300 rounded-md'
              required />
          </div>
          <div className='mb-4'>
            <button className='bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700'> Reserved Table </button>
          </div>
        </form>
      </div>
    </section>
  )
}
export default ReservationSection;