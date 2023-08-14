import React from 'react';
import { Link } from 'react-router-dom';

export default function Invoice() {
  return (
    <>
      <div className='invoice bg-[#E7F5FD] py-5'>
        <div className='container mx-auto py-10'>
          <Link to="/">
            <svg width="19" height="31" viewBox="0 0 19 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.374634 15.5L15.1492 30.2746L18.6253 26.7985L7.31697 15.4902L18.6253 4.18182L15.1492 0.725403L0.374634 15.5Z" fill="#2D9CDB"/>
            </svg>
          </Link>
        </div>
        <div className="container mx-auto block rounded-xl bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          {/* Card Title */}
          <div className="rounded-t-2xl tracking-wide bg-[#0099EE] uppercase font-medium text-white text-2xl px-6 py-4 dark:border-neutral-600 dark:text-neutral-50">
            Order Summary
          </div>

          {/* Card Content */}
          <div className="pt-3 pb-3">
            <p className='px-5 text-[#0099EE] text-right text-xs'>ORDER #21340</p>
            <p className="px-5 text-left font-semibold mb-1 text-base">
              John Doe
            </p>
            <p className="px-5 text-left text-[#535353] font-normal mb-2 text-sm">
              123 Pasir Ris, <br/> 13810, Singapore
            </p>
            
            {/* Order Summary */}
            <ul>
              <li className="grid grid-cols-5 lg:grid-cols-6 border-b border-info-500 border-opacity-100 pt-3 dark:border-opacity-50 pb-2">
                {/* Product Image */}
                <img className='w-16 h-16 pl-5 my-auto object-cover' src='/images/prev-order.png' alt='Laundry' />
                {/* Product Name */}
                <div className="flex flex-col lg:col-span-3 justify-between col-span-2 ml-4 items-start">
                  <div className=''>
                    <h5 className="text-sm text-[#525252] font-medium tracking-wide dark:text-neutral-50 pl-2">
                      Bag of Laundry
                    </h5>
                  </div>
                  <div className=''>
                    <p className='text-[#0099EE] tracking-wide text-xs font-normal pl-2 dark:text-neutral-50'>QTY: 2 </p>
                  </div>
                </div>
                {/* Amount */}
                <div className="flex flex-col col-span-2 justify-between pt-1 ml-2">
                  <div>
                    <h5 className="text-xs text-[#525252] font-medium tracking-wide dark:text-neutral-50 pl-2">
                      Total
                    </h5>
                  </div>
                  <div className=''>
                    <p className='text-[#0099EE] tracking-wide text-sm font-semibold pl-2 dark:text-neutral-50'>$ 180.00 </p>
                  </div>
                </div>
              </li>

              <li className="grid grid-cols-5 lg:grid-cols-6 border-b border-info-500 border-opacity-100 pt-3 dark:border-opacity-50 pb-2">
                {/* Product Image */}
                <img className='w-16 h-16 pl-5 my-auto object-cover' src='/images/prev-order.png' alt='Laundry' />
                {/* Product Name */}
                <div className="flex flex-col lg:col-span-3 justify-between col-span-2 ml-4 items-start">
                  <div className=''>
                    <h5 className="text-sm text-[#525252] font-medium tracking-wide dark:text-neutral-50 pl-2">
                      Dry Cleaning
                    </h5>
                  </div>
                  <div className=''>
                    <p className='text-[#0099EE] tracking-wide text-xs font-normal pl-2 dark:text-neutral-50'>QTY: 3 </p>
                  </div>
                </div>
                {/* Amount */}
                <div className="flex flex-col col-span-2 justify-between pt-1 ml-2">
                  <div>
                    <h5 className="text-xs text-[#525252] font-medium tracking-wide dark:text-neutral-50 pl-2">
                      Total
                    </h5>
                  </div>
                  <div className=''>
                    <p className='text-[#0099EE] tracking-wide text-sm font-semibold pl-2 dark:text-neutral-50'>$ 10.00 </p>
                  </div>
                </div>
              </li>

              <li className="grid grid-cols-5 lg:grid-cols-6 pt-3 dark:border-opacity-50">
                {/* Product Image */}
                <img className='w-16 h-16 pl-5 my-auto object-cover' src='/images/prev-order.png' alt='Laundry' />
                {/* Product Name */}
                <div className="flex flex-col lg:col-span-3 justify-between col-span-2 ml-4 items-start">
                  <div className=''>
                    <h5 className="text-sm text-[#525252] font-medium tracking-wide dark:text-neutral-50 pl-2">
                      Rug
                    </h5>
                  </div>
                  <div className=''>
                    <p className='text-[#0099EE] tracking-wide text-xs font-normal pl-2 dark:text-neutral-50'>QTY: 1 </p>
                  </div>
                </div>
                {/* Amount */}
                <div className="flex flex-col col-span-2 justify-between pt-1 ml-2">
                  <div>
                    <h5 className="text-xs text-[#525252] font-medium tracking-wide dark:text-neutral-50 pl-2">
                      Total
                    </h5>
                  </div>
                  <div className=''>
                    <p className='text-[#0099EE] tracking-wide text-sm font-semibold pl-2 dark:text-neutral-50'>$ 14.00 </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Card Footer */}
          <div className="flex justify-between px-5 bg-[#0099EE] border-t-2 rounded-b-xl border-neutral-100 py-3 dark:border-neutral-600 dark:text-neutral-50">
            <div className=''>
              <h5 className="text-base text-white font-medium tracking-wide uppercase dark:text-neutral-50">
                Total Order
              </h5>
            </div>
            <div className=''>
              <h5 className="text-base text-white font-medium tracking-wide uppercase dark:text-neutral-50">
                $ 204.00
              </h5>
            </div>
          </div>
        </div>

        {/* Whatsapp Button */}
       <div className='container mx-auto text-center mt-10 grid col-span-1'>
          <button className='bg-[#56E4A0] flex justify-center items-center rounded-2xl uppercase text-base font-medium py-4 px- text-white tracking-wide dark:text-neutral-50'>
            <svg className='mx-3' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.6667 0.833344C22.2315 0.833344 23.5 2.10187 23.5 3.66668L3.66668 3.66667L3.66668 19.5C2.10187 19.5 0.833344 18.2315 0.833344 16.6667V3.66667C0.833344 2.10187 2.10187 0.833344 3.66668 0.833344H20.6667Z" fill="#F2F2F2"/>
              <path d="M17.8333 29.1667L14.0556 25.1667H9.33334C7.76854 25.1667 6.50001 23.8981 6.50001 22.3333V9.33334C6.50001 7.76853 7.76854 6.50001 9.33334 6.50001H26.3333C27.8981 6.50001 29.1667 7.76854 29.1667 9.33334V22.3333C29.1667 23.8982 27.8981 25.1667 26.3333 25.1667H21.6111L17.8333 29.1667ZM20.3898 22.3333L26.3333 22.3333V9.33334L9.33334 9.33334V22.3333H15.2769L17.8333 25.0402L20.3898 22.3333Z" fill="#F2F2F2"/>
            </svg>
            Whatsapp Us
          </button>
       </div>
      </div>
    </>
  );
}