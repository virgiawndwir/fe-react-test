import React from 'react'
import { Link } from 'react-router-dom'
// import { TEInput } from "tw-elements-react";

export default function Product() {
  return (
    <div className='product bg-[#E7F5FD]'>
      <div className="py-5 shadow-xl rounded-b-2xl" style={{ objectFit: "cover", width: "100%", height: "300px", backgroundSize: "cover", backgroundImage: "linear-gradient(to bottom, rgba(0, 153, 238, 0), rgba(59, 151, 203, .8)), url('https://www.thespruce.com/thmb/WvUt8--TM3JM274UPKhXd6fH6XY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/how-to-fold-a-long-sleeve-shirt-5323748-hero-6ce7441e974e4d71b714ac52984a2774.JPG')" }}>
        <div className='container mx-auto py-10'>
          <Link to="/">
            <svg width="19" height="31" viewBox="0 0 19 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.374634 15.5L15.1492 30.2746L18.6253 26.7985L7.31697 15.4902L18.6253 4.18182L15.1492 0.725403L0.374634 15.5Z" fill="#2D9CDB"/>
            </svg>
          </Link>
        </div>
      </div>
      <div className='mx-6 pt-10'>
        <span className='text-[#0099EE] bg-[#CAECFF] py-2 px-3 rounded-lg text-xs'>Dry Clean</span>
        <h5 className='text-5xl font-bold text-[#3B97CB] tracking-wider mt-5'>T-Shirt</h5>
        <h5 className='text-3xl font-medium text-[#0099EE] tracking-wider mt-2'>$ 6.00/pc</h5>

        {/*  */}
        <p className='text-[#838383] mt-5 text-base w-full'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elit diam, lobortis at auctor eu, tempus eget enim. Etiam ullamcorper risus ac diam pulvinar, a auctor nunc sagittis. In euismod est est, ac pretium sem egestas eget. Nunc mollis rutrum nisl lacinia convallis. Curabitur et arcu eros. Proin eu tellus augue. Vestibulum auctor risus erat, et tempor augue 
        </p>
      </div>

      <div className='container mx-auto flex justify-center mt-10 text-center'>
        <button className='inline-block'>
          <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 37.3334C8.87939 37.3223 0.677782 29.1207 0.666668 19.0001V18.6334C0.868209 8.55836 9.16341 0.53464 19.2396 0.668334C29.3157 0.802028 37.3951 9.04301 37.3293 19.1198C37.2634 29.1967 29.077 37.3314 19 37.3334ZM9.83333 17.1667V20.8334H28.1667V17.1667H9.83333Z" fill="#E0E0E0"/>
          </svg>
        </button>
        <label className="relative flex w-24 mx-5">
          <span className="sr-only">0</span>
          <input className="text-4xl text-center rounded-xl placeholder:text-slate-400 bg-white w-full border border-slate-300 py-2 px-5 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="0" type="number"/>
        </label>
        <button className='inline-block'>
        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 37.3334C8.87939 37.3223 0.677786 29.1207 0.666672 19.0001V18.6334C0.868213 8.55836 9.16341 0.53464 19.2396 0.668334C29.3157 0.802028 37.3951 9.04301 37.3293 19.1198C37.2634 29.1967 29.077 37.3314 19 37.3334ZM9.83334 17.1667V20.8334H17.1667V28.1667H20.8333V20.8334H28.1667V17.1667H20.8333V9.83339H17.1667V17.1667H9.83334Z" fill="#2D9CDB"/>
        </svg>
        </button>
      </div>
    </div>
  )
}
