import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'



const MainLayout = () => {
  return (
    <>

      <Navbar />
      <Outlet />
      <Footer />
      {/* U can open the React Query Devtools */}
      <ReactQueryDevtools />

    </>
  )
}

export default MainLayout