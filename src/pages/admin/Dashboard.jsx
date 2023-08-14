import React from 'react'
import Header from '../../parts/Headers'
import Sidebar from '../../parts/Sidebars'
import Footer from '../../parts/Footer'
// import MainDashboard from './MainDashboard'

export default function Dashboard() {

  return (
    <>
      <div className="flex flex-col h-screen justify-between">
        <Header/>
        <Sidebar/>
        
        <Footer/>
      </div>
    </>
  )
}
