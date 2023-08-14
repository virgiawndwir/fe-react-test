import React from 'react'
import Headers from '../../parts/Headers'
import Sidebars from '../../parts/Sidebars'
import Footer from '../../parts/Footer'
import MainProduct from './MainProduct'

export default function ProductDashboard() {
  return (
    <>
      <div className="flex flex-col h-screen justify-between">
        <Headers/>
        <Sidebars/>
        
        <main>
            <MainProduct/>
        </main>
        {/* <h1>asdflkjasdlfkjasdf</h1> */}

        <Footer/>
      </div>
    </>
  )
}
