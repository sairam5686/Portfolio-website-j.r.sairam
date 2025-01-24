import React from 'react'
import sairam_hero from '../assets/ravikumarProfile.webp'
import {HERO_CONTENT} from "../constants/index.js"
const Hero = () => {
  return (
    <div className='pb-4 lg:mb-36'>   

        <div className=' flex flex-wrap  lg:flex-row-reverse '>
            <div className=' w-full lg:w-1/2'>
                <div className='flex justify-center lg:p-8'>
                    <img src={sairam_hero}  alt="sairam" className='border border-stone-900 rounded-3xl' />
                </div>
            </div>  
    
        <div className='w-full lg:w-1/2 '>
            <div className='flex flex-col items-center  lg:items-start mt-10'>
                <h2 className=' pb-2 tracking-tight text-4xl lg:text-8xl'>J.R.Sairam</h2>
                <span className='bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl text-transparent'>Full Stack Developer</span>
                <p className='my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter'>
                    {HERO_CONTENT}
                </p>
                <a className='bg-white rounded-full p-4 text-sm text-stone-800 mb-10' href='./Resume(J.R.Sairam) (3).pdf' >
                    Download Resume
                </a>
            </div>
        </div>

        </div>
        </div>
  )
}

export default Hero