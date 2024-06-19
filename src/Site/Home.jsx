import React from 'react'

export const Home = () => {
  return (
    <>
      <div className='flex flex-col md:flex-row justify-center items-center h-auto md:h-52 text-slate-200 p-4 bg-black/50'>
        <div className='text-center md:text-left'>
          <p className='text-l md:text-2xl lg:text-3xl xl:text-4xl font-serif'>Hello There</p>
        </div>
        <div className='mt-4 md:mt-0 md:ml-4'>
          <p className='text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-serif animate-marquee text'>I'm Pranav.C</p>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center h-auto text-slate-200 p-4 bg-black/50'>
        <p className='text-center text-base md:text-lg lg:text-xl xl:text-2xl'>
          An enthusiastic and proficient Full Stack Developer with expertise in the MERN stack (MongoDB, Express.js, React.js, Node.js). With solid experience in both front-end and back-end development, I adopt a holistic approach to creating robust, scalable, and user-centric web applications.
        </p>
      </div>
    </>
  )
}

export default Home
