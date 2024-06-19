import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='bg-slate-900 text-white h-16 flex items-center px-4'>
      <div className='text-2xl'>
        MERN Stack Developer
      </div>
      <div className='ml-auto flex gap-4'>
        <Link to="home" className="hover:text-yellow-500">Home</Link>
        <Link to="profile" className="hover:text-yellow-500">Profile</Link>
        <Link to="" className="hover:text-yellow-500">Projects</Link>
        <Link to="about" className="hover:text-yellow-500">About</Link>
      </div>
    </div>
  )
}

export default Navbar
