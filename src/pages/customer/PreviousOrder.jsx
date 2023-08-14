import React from 'react'
import CardPrevOrder from '../../components/CardPrevOrder'

export default function PreviousOrder() {
  return (
    <div>
      <div className='container mx-auto mt-10'>
        <h5 className='uppercase font-semibold text-[#3B97CB] text-base tracking-wide mb-3'>Previous Order</h5>
        <CardPrevOrder/>
      </div>
    </div>
  )
}
