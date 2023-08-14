import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

export default function Sidebars() {

  function HeaderView() {
    const location = useLocation();
    console.log(location.pathname);
    return location.pathname
  }
  return (
    // <!-- Sidenav -->
    <div className='absolute'>
      <nav
      id="sidenav-3"
      className="fixed left-0 top-0 z-[1035] h-screen w-[20%] -translate-x-full overflow-hidden bg-[#3B97CB] shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-hidden='false']:translate-x-0"
      data-te-sidenav-init
      data-te-sidenav-hidden="false"
      data-te-sidenav-color="white">

      <div class="pt-6">
        <div id="header-content" class="pl-4 flex flex-row">
          <div>
            <button class="rounded-full bg-[#0099EE] border-4 border-[#fff] w-16 h-16">
              <span class="ml-16 mb-8 inline-block border-4 border-[#fff] rounded-full w-5 h-5 bg-danger text-center align-baseline font-bold leading-none text-danger-700"></span>
            </button>
          </div>

          <div>
            <h4 class="mt-6 ml-10 text-2xl font-medium text-white">BeLaundry</h4>
          </div>
        </div>
      </div>

      <ul className="relative list-none mt-16 px-[0.2rem] tracking-wider" data-te-sidenav-menu-ref>
        <li className="relative">
          <span class="px-6 py-4 font-bold uppercase text-white dark:text-gray-400">
            Menu
          </span>
          <Link className={HeaderView() === '/dashboard' ? 'menu-active flex mt-4 h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-white outline-none transition duration-300hover:bg-white/10 hover:outline-none focus:bg-white/10 focus:outline-none active:bg-white/10 active:outline-none data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none' : 'menu flex mt-4 h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-white outline-none transition duration-300 ease-linear hover:bg-white/10 hover:outline-none focus:bg-white/10 focus:outline-none active:bg-white/10 active:outline-none data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none'}
            data-te-sidenav-link-ref>
            <span className="mr-4 ">
              <svg className='dashboard' width="32" height="38" viewBox="0 0 32 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.25 33.5H1.75C0.783502 33.5 0 32.7165 0 31.75V14.9745C0 14.5104 0.184539 14.0654 0.51275 13.7373L12.7628 1.48725C13.091 1.15864 13.5364 0.973999 14.0009 0.973999C14.4653 0.973999 14.9108 1.15864 15.239 1.48725L27.489 13.7373C27.8176 14.065 28.0015 14.5104 28 14.9745V31.75C28 32.7165 27.2165 33.5 26.25 33.5ZM10.5 21.25H17.5V30H24.5V15.699L14 5.199L3.5 15.699V30H10.5V21.25Z" fill="#fff"/>
              </svg>
            </span>
            <span className='text-2xl'>Home</span>
          </Link>
        </li>
        
        <li className="relative mt-8">
          <Link
            to="/dashboard/product"
            className={HeaderView() === '/dashboard/product' ? 'menu-active flex mt-4 h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-white outline-none transition duration-300hover:bg-white/10 hover:outline-none focus:bg-white/10 focus:outline-none active:bg-white/10 active:outline-none data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none' : 'menu flex mt-4 h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-white outline-none transition duration-300 ease-linear hover:bg-white/10 hover:outline-none focus:bg-white/10 focus:outline-none active:bg-white/10 active:outline-none data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none'}
            data-te-sidenav-link-ref>
            <span className="mr-4 ">
            <svg width="40" height="34" viewBox="0 0 40 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M31.3824 33.2027H2.73044C2.22348 33.2078 1.73594 33.0078 1.3787 32.648C1.02146 32.2883 0.824888 31.7994 0.833683 31.2924H0.820312V4.55061C0.820312 2.44074 2.5307 0.730347 4.64057 0.730347H16.1014C16.528 0.730754 16.9422 0.873984 17.278 1.1372L21.6407 4.55061H31.3824C33.4923 4.55061 35.2027 6.261 35.2027 8.37087V16.0114H37.1128C37.7549 16.0115 38.3539 16.3341 38.7073 16.8702C39.0607 17.4062 39.1212 18.084 38.8682 18.6741L33.1378 32.045C32.8368 32.7472 32.1464 33.2027 31.3824 33.2027ZM9.72152 19.8317L5.62811 29.3823H30.1236L34.217 19.8317H9.72152ZM4.64057 8.37087V21.9901L6.70543 17.1689C7.00643 16.4668 7.69687 16.0115 8.46084 16.0114H31.3824V8.37087H4.64057Z" fill="white"/>
            </svg>
            </span>
            <span className='text-2xl'>Products</span>
          </Link>
        </li>

        <li className="relative mt-8">
          <Link
            className="menu flex mt-4 h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-white outline-none transition duration-300 hover:bg-white/10 hover:outline-none focus:bg-white/10 focus:outline-none active:bg-white/10 active:outline-none data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none"
            data-te-sidenav-link-ref>
            <span className="mr-4 ">
              <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M35.1127 34.799H2.64048C1.58554 34.799 0.730347 33.9438 0.730347 32.8888V0.416626H4.55061V30.9787H35.1127V34.799ZM10.9935 25.2483L8.37087 22.6811L17.6465 13.5965C18.3766 12.8869 19.5389 12.8869 20.2691 13.5965L24.5229 17.7625L32.4901 9.96728L35.1127 12.5345L25.8371 21.6191C25.1069 22.3287 23.9447 22.3287 23.2145 21.6191L18.9587 17.4512L10.9954 25.2483H10.9935Z" fill="#F2F2F2"/>
              </svg>
            </span>
            <span className='text-2xl'>Sales</span>
          </Link>
        </li>

        <li className="relative mt-8">
          <Link
            className="menu flex mt-4 h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-white outline-none transition duration-300 hover:bg-white/10 hover:outline-none focus:bg-white/10 focus:outline-none active:bg-white/10 active:outline-none data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none"
            data-te-sidenav-link-ref>
            <span className="mr-4 ">
              <svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.398 38.5523H15.4451C14.5476 38.5523 13.771 37.9277 13.5789 37.051L12.8015 33.4523C11.7644 32.9979 10.781 32.4297 9.86947 31.758L6.36056 32.8754C5.50482 33.1483 4.57456 32.7882 4.1257 32.0101L0.641625 25.9913C0.197688 25.213 0.350633 24.2311 1.01028 23.6247L3.73222 21.1415C3.60843 20.0166 3.60843 18.8816 3.73222 17.7568L1.01028 15.2793C0.349662 14.6726 0.196656 13.6896 0.641625 12.9108L4.11806 6.88811C4.56692 6.11011 5.49718 5.74993 6.35292 6.02282L9.86183 7.14025C10.328 6.79481 10.8133 6.47595 11.3154 6.18518C11.7974 5.91336 12.2935 5.66724 12.8015 5.44787L13.5809 1.853C13.772 0.976195 14.5477 0.350676 15.4451 0.349731H22.398C23.2954 0.350676 24.0712 0.976195 24.2623 1.853L25.0493 5.44978C25.5856 5.68571 26.1079 5.9523 26.6137 6.24822C27.0853 6.52101 27.5413 6.82009 27.9794 7.14407L31.4902 6.02664C32.3454 5.75477 33.2745 6.11481 33.7232 6.89193L37.1996 12.9146C37.6436 13.6929 37.4906 14.6748 36.831 15.2812L34.109 17.7644C34.2328 18.8892 34.2328 20.0243 34.109 21.1491L36.831 23.6323C37.4906 24.2388 37.6436 25.2206 37.1996 25.999L33.7232 32.0216C33.2745 32.7987 32.3454 33.1588 31.4902 32.8869L27.9794 31.7695C27.5352 32.0967 27.0735 32.3996 26.5965 32.6768C26.0957 32.9669 25.5792 33.229 25.0493 33.4618L24.2623 37.051C24.0704 37.927 23.2948 38.5516 22.398 38.5523ZM10.5552 27.529L12.1215 28.6751C12.4746 28.9351 12.8426 29.1743 13.2237 29.3914C13.5822 29.599 13.9514 29.7877 14.3296 29.9568L16.1118 30.738L16.9847 34.7321H20.8623L21.7352 30.7361L23.5174 29.9548C24.2954 29.6118 25.0338 29.1852 25.7197 28.6827L27.288 27.5366L31.1865 28.7782L33.1253 25.4202L30.1016 22.6639L30.3155 20.7308C30.4095 19.8853 30.4095 19.032 30.3155 18.1865L30.1016 16.2535L33.1272 13.4914L31.1865 10.1315L27.288 11.3731L25.7197 10.227C25.0336 9.72219 24.2952 9.29249 23.5174 8.94532L21.7352 8.16408L20.8623 4.16999H16.9847L16.108 8.16599L14.3296 8.94532C13.951 9.11158 13.5818 9.29842 13.2237 9.50499C12.8449 9.72146 12.4789 9.95934 12.1272 10.2175L10.559 11.3635L6.66236 10.122L4.71976 13.4914L7.74349 16.2439L7.52956 18.1789C7.43558 19.0244 7.43558 19.8777 7.52956 20.7232L7.74349 22.6562L4.71976 25.4126L6.65854 28.7706L10.5552 27.529ZM18.9139 27.0916C14.6942 27.0916 11.2734 23.6708 11.2734 19.451C11.2734 15.2313 14.6942 11.8105 18.9139 11.8105C23.1337 11.8105 26.5545 15.2313 26.5545 19.451C26.5492 23.6686 23.1315 27.0863 18.9139 27.0916ZM18.9139 15.6308C16.8269 15.6329 15.1278 17.3095 15.0979 19.3963C15.068 21.4831 16.7184 23.2077 18.8045 23.2696C20.8906 23.3315 22.6403 21.7079 22.7342 19.623V20.387V19.451C22.7342 17.3412 21.0238 15.6308 18.9139 15.6308Z" fill="#F2F2F2"/>
              </svg>
            </span>
            <span className='text-2xl'>Settings</span>
          </Link>
        </li>
      </ul>
    </nav>
    {/* <!-- Sidenav -->

    <!-- Toggler --> */}
    <button
      className="mt-10 inline-block rounded bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
      data-te-sidenav-toggle-ref
      data-te-target="#sidenav-3"
      aria-controls="#sidenav-3"
      aria-haspopup="true">
      <span className="block [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5">
          <path
            fill-rule="evenodd"
            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
            clip-rule="evenodd" />
        </svg>
      </span>
    </button>
    {/* <!-- Toggler --> */}
    </div>
  )
}
