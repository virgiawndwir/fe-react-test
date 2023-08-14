import React from 'react';

export default function CardBalance() {
  return (
      <div className="card-balance group hover:bg-sky-300 hover:ring-sky-300 hover:rounded-3xl block rounded-lg bg-white p-5 lg:w-1/2 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <div className='flex flex-col justify-between'>
          <div>
            <img
                src='/images/Ellipse22.png'
                alt='Ellipse 2'
                className='ml-20'
            />
          </div>
          <div className='text-right'>
            <h5 className="mt-10 text-xl font-medium group-hover:text-white leading-tight text-neutral-600 dark:text-neutral-50">
                Your Balance
            </h5>
            <h5 className='font-bold group-hover:text-white balance-text text-[#0099EE]'>
              $ 200.00
            </h5>
          </div>
        </div>
      </div>
  );
}