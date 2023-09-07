import React from 'react'
import Header from '../components/main/Header'
import Footer from '../components/main/Footer'
import { Outlet } from 'react-router-dom'
import ToTheTop from '../components/util/ToTheTop'

const MainLayout = () => {
  return (
    <main>
        <Header />
        <Outlet />
        <ToTheTop />
        <Footer />
    </main>
  )
}

export default MainLayout
