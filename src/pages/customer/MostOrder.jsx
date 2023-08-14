import React from 'react'
import CardMostOrder from '../../components/CardMostOrder'

export default function MostOrder() {
  return (
    <div>
      <div className='container mx-auto mt-10'>
        <h5 className='uppercase font-semibold text-[#3B97CB] tracking-wide mb-3'>Your Most Ordered</h5>
        <CardMostOrder/>
      </div>
    </div>
  )
}
