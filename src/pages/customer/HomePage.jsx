import React from 'react'
import Hero from './Hero'
import PreviousOrder from './PreviousOrder'
import MostOrder from './MostOrder'
import LatestProduct from './LatestProduct'

export default function HomePage() {
  return (
    <>
      <div className='bg-[#E7F5FD] pb-10'>
        <Hero/>
        <PreviousOrder/>
        <MostOrder/>
        <LatestProduct/>
      </div>
    </>
  )
}
