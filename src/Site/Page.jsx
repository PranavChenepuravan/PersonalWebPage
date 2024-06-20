import React from 'react'
import Topnavig from '../Common/Navbar.jsx'
import Home from './Home.jsx'
import Profile from './Profile.jsx'
import { Outlet } from 'react-router-dom'
export const Page = () => {
  return (
    <>
      <div className='flex flex-col '>
        <Topnavig/>
         <div className='back1'>
            <Outlet/>
         </div>
      </div>
    </>
  )
}
export default Page
