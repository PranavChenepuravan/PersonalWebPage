import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='bg-slate-900 text-white h-16 flex items-center px-4'>
      <div className='text-xl md:text-2xl lg:text-3xl xl:text-4xl'>
        MERN Stack Developer
      </div>
      <div className='ml-auto flex gap-4 text-sm md:text-base lg:text-lg xl:text-xl'>
        <Link to="home" className="hover:text-yellow-500">Home</Link>
        <Link to="profile" className="hover:text-yellow-500">Profile</Link>
        <Link to="projects" className="hover:text-yellow-500">Projects</Link>
        <Link to="about" className="hover:text-yellow-500">About</Link>
      </div>
    </div>
  )
}

export default Navbar
