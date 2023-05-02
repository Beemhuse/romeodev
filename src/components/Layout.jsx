import React from 'react'
import SideBar from './SideBar'
import Navbar from './Navbar'

const Layout = ({children}) => {
  return (
    <div>
        <Navbar />
        <div className='flex'>
            <SideBar />
            <div className='md:ml-[300px] ml-0 md:p-[1rem] p-[0.5rem] w-full md:pr-[6rem] pr-0'>
            {children}
            </div>
        </div>
      
       
    </div>
  )
}

export default Layout