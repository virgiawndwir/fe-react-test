import React from 'react'
import CardLatestProduct from '../../components/CardLatestProduct'

export default function LatestProduct() {
  return (
    <div>
      <div className='container mx-auto mt-10'>
        <h5 className='uppercase font-semibold text-[#3B97CB] tracking-wide mb-3'>Our Latest Products</h5>
        <CardLatestProduct/>
      </div>
    </div>
  )
}
