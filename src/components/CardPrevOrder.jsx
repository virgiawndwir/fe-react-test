import React from 'react';
import { Link } from 'react-router-dom';

export default function CardPrevOrder() {
  return (
    <div className='grid grid-cols-1 gap-0 lg:gap-4 lg:grid-cols-2'>
      <div className="flex rounded-lg justify-between bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04 dark:bg-neutral-700 md:max-w-xl md:flex-row">
        <img
          className="w-20 h-20 p-2 my-auto rounded-t-xl object-cover md:rounded-none md:rounded-l-lg"
          src="/images/prev-order.png"
          alt="" />
        <div className="flex flex-col justify-between mr-4">
          <div>
            <h5 className="mb-2 text-lg text-[#525252] font-medium tracking-wide dark:text-neutral-50 pl-2 pt-2">
              Bag of Laundry
            </h5>
          </div>
          <div className=''>
            <p className='text-[#525252] tracking-wide text-xs dark:text-neutral-50 pl-2'>Total Order</p>
            <p className='text-[#0099EE] tracking-wide text-lg font-bold pl-2 pb-2 dark:text-neutral-50'>$ 180.00</p>
          </div>
        </div>
        <div className='invoice-on-card rounded-r-lg'>
          <Link to="/invoice">
            <img className='' src='/images/note.png' alt='Order Invoice'/>
            <span className='uppercase text-xs text-white'>Invoice</span>
          </Link>
        </div>
      </div>

      <div className="flex invisible lg:visible rounded-lg justify-between bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04 dark:bg-neutral-700 md:max-w-xl md:flex-row">
        <img
          className="w-20 h-20 p-2 my-auto rounded-t-xl object-cover md:rounded-none md:rounded-l-lg"
          src="/images/prev-order.png"
          alt="" />
        <div className="flex flex-col justify-between mr-4">
          <div>
            <h5 className="mb-2 text-lg text-[#525252] font-medium tracking-wide dark:text-neutral-50 pl-2 pt-2">
              T-Shirt
            </h5>
          </div>
          <div className=''>
            <p className='text-[#525252] tracking-wide text-xs dark:text-neutral-50 pl-2'>Total Order</p>
            <p className='text-[#0099EE] tracking-wide text-lg font-bold pl-2 pb-2 dark:text-neutral-50'>$ 180.00</p>
          </div>
        </div>
        <div className='invoice-on-card rounded-r-lg'>
          <Link to="/invoice">
            <img className='' src='/images/note.png' alt='Order Invoice'/>
            <span className='uppercase text-xs text-white'>Invoice</span>
          </Link>
        </div>
      </div>
    </div>
  );
}