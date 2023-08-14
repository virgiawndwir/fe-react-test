import React from 'react'
import CardBalance from '../../components/CardBalance'

export default function Hero() {
  return (
    <section className="flex items-center hero">
      <div className="w-full bg-danger z-20 inset-0 md:relative md:w-1/2 text-center hero-caption">
        <div className='mt-20 container mx-auto'>
          <h5 className='text-left text-white text-lg lg:text-5xl mb-2'>Welcome, John</h5>
          <CardBalance/>
        </div>
      </div>
    </section>
  )
}
