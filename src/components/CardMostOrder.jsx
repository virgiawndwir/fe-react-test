import React from 'react';
import { Link } from 'react-router-dom';

export default function CardMostOrder() {
  return (
    <div className='grid grid-cols-1 gap-0 lg:gap-4 lg:grid-cols-2'>
      <div className="card-most-order flex items-end flex-row rounded-xl bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <Link className='text-2xl tracking-wide' to="/invoice">
          <h5 className='font-medium'>Dry Cleaning</h5>
          <h5 className='text-lg'>12x | total of $ 4.000</h5>
        </Link>
      </div>

      <div className="card-most-order invisible lg:visible flex items-end flex-row rounded-xl bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <Link className='text-2xl tracking-wide' to="/invoice">
          <h5 className='font-medium'>Rug</h5>
          <h5 className='text-lg'>12x | total of $ 2.990</h5>
        </Link>
      </div>
    </div>
  );
}