import React from 'react';
import Image from '../react2.png';
import Javsc from '../Javascript.png';
import html5 from '../html5.png';
import github from '../github3.png'

export const Skills = () => {
  return (
    <>
      <div className='bg-black/70 text-white min-h-screen flex flex-col justify-start items-center pt-12'>
        <div className='text-center'>
          <h1 className='text-2xl md:text-4xl lg:text-6xl font-bold'>Skills</h1>
        </div>
        <div className='mt-8 flex gap-8'>
          <div className='text-center'>
            <img src={Image} alt="React" className='max-w-full h-auto' />
            <p className='mt-2'>React</p>
          </div>
          <div className='text-center'>
            <img src={Javsc} alt="JavaScript" className='max-w-full h-auto' />
            <p className='mt-2'>JavaScript</p>
          </div>
          <div className='text-center'>
            <img src={html5} alt="HTML5" className='max-w-full h-auto' />
            <p className='mt-2'>HTML5</p>
          </div>
          <div className='text-center'>
            <img src={github} alt="HTML5" className='max-w-full h-auto' />
            <p className='mt-2'>GitHub</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
