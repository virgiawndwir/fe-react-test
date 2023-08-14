import React from 'react'
import { Link } from 'react-router-dom'


export default function Headers() {
  return (
    <div>
      <nav className="relativ h-24 navbar-c flex w-full flex-wrap items-center justify-between bg-[#f5f5f5] py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4">
        <div className="flex flex-wrap items-center justify-between px-3">
          <div className="ml-2">
            <Link className="text-neutral-800 text-4xl tracking-wider font-bold dark:text-neutral-200" to="/invoice"
              >Home
            </Link>
          </div>
        </div>
        <div className='mx-10 flex justify-between'>
          <span className='mr-5'>
            <svg width="27" height="32" viewBox="0 0 27 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.375 9C5.375 4.51269 9.01269 0.875 13.5 0.875C17.9873 0.875 21.625 4.51269 21.625 9C21.625 13.4873 17.9873 17.125 13.5 17.125C9.01269 17.125 5.375 13.4873 5.375 9ZM13.5 13.875C16.1924 13.875 18.375 11.6924 18.375 9C18.375 6.30761 16.1924 4.125 13.5 4.125C10.8076 4.125 8.625 6.30761 8.625 9C8.625 11.6924 10.8076 13.875 13.5 13.875Z" fill="#2E3A59"/>
              <path d="M4.30761 22.5576C1.86964 24.9956 0.5 28.3022 0.5 31.75H3.75C3.75 29.1641 4.77723 26.6842 6.60571 24.8557C8.43419 23.0272 10.9141 22 13.5 22C16.0859 22 18.5658 23.0272 20.3943 24.8557C22.2228 26.6842 23.25 29.1641 23.25 31.75H26.5C26.5 28.3022 25.1304 24.9956 22.6924 22.5576C20.2544 20.1196 16.9478 18.75 13.5 18.75C10.0522 18.75 6.74558 20.1196 4.30761 22.5576Z" fill="#2E3A59"/>
            </svg>
          </span>
          <Link className='underline text-[#0099EE] text-2xl'>
            John Doe
          </Link>
        </div>
      </nav>
    </div>
  )
}
