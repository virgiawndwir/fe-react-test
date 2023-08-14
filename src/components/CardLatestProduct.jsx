import React from 'react'
import { Link } from 'react-router-dom'

// import Swiffy Slider JS
import { swiffyslider } from 'swiffy-slider'

// import Swiffy Slider CSS
import "swiffy-slider/css"
window.swiffyslider = swiffyslider;

window.addEventListener("load", () => {
    window.swiffyslider.init();
});

export default function CardLatestProduct() {
  return (
    <div
      className="flex items-end flex-row rounded-xl dark:bg-neutral-700">
      <div className="swiffy-slider">
        <ul className="slider-container bg-transparent slider-item-show slider-item-reveal">
            <li className='rounded-lg flex items-end flex-row p-4 text-white' style={{ objectFit: "cover", width: "100%", height: "300px", backgroundSize: "cover", backgroundImage: "linear-gradient(to bottom, rgba(0, 153, 238, 0), rgba(59, 151, 203, .8)), url('https://bakerscentrelaundry.com/wp-content/uploads/2017/07/shutterstock_250385533.jpg')" }}>
              <Link className='text-2xl tracking-wide' to="/product">
                <span className='text-xs font-light'>Dry Cleaning</span>
                <h5 className='font-medium'>Dry Cleaning</h5>
                <h5 className='text-lg'>$ 10.00/pc</h5>
              </Link>
            </li>
            <li className='rounded-lg flex items-end flex-row p-4 text-white' style={{ objectFit: "cover", width: "100%", height: "300px", backgroundSize: "cover", backgroundImage: "linear-gradient(to bottom, rgba(0, 153, 238, 0), rgba(59, 151, 203, .8)), url('https://www.thespruce.com/thmb/u4AElq2mgfqj4QTUtEGVxUu9ioA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/folding-hacks-that-save-major-closet-and-drawer-space-3017373-Dress-Shirt-6d2d719c13f443a0a47733a26b9d7644.jpg')" }}>
              <Link className='text-2xl tracking-wide' to="/product">
                <span className='text-xs font-light'>Dry Cleaning</span>
                <h5 className='font-medium'>Dry Cleaning</h5>
                <h5 className='text-lg'>$ 6.00/pc</h5>
              </Link>
            </li>
            <li className='rounded-lg flex items-end flex-row p-4 text-white' style={{ objectFit: "cover", width: "100%", height: "300px", backgroundSize: "cover", backgroundImage: "linear-gradient(to bottom, rgba(0, 153, 238, 0), rgba(59, 151, 203, .8)), url('https://www.thespruce.com/thmb/WvUt8--TM3JM274UPKhXd6fH6XY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/how-to-fold-a-long-sleeve-shirt-5323748-hero-6ce7441e974e4d71b714ac52984a2774.JPG')" }}>
              <Link className='text-2xl tracking-wide' to="/product">
                <span className='text-xs font-light'>Dry Cleaning</span>
                <h5 className='font-medium'>Dry Cleaning</h5>
                <h5 className='text-lg'>$ 8.00/pc</h5>
              </Link>
            </li>
        </ul>
      </div>
    </div>
  )
}
