import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='bg-slate-900 text-white h-18 flex items-center px-4'>
      <div className='text-xl md:text-2xl lg:text-3xl xl:text-4xl'>
        MERN Stack Developer
      </div>
      <div className='ml-auto flex gap-2 text-sm md:text-base lg:text-lg xl:text-xl'>
        <Link to="home" className="hover:text-yellow-500">Home</Link>
        <Link to="profile" className="hover:text-yellow-500">Profile</Link>
        <Link to="projects" className="hover:text-yellow-500">Projects</Link>
        <Link to="skills" className="hover:text-yellow-500">Skills</Link>
        <Link to="viewcerti" className="hover:text-yellow-500">Certificates</Link>
      </div>
    </div>
  )
}

export default Navbar
