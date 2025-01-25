import React from 'react'
import sairam_hero from "../assets/sairam_2.png"
import {HERO_CONTENT} from "../constants/index.js"
import {motion} from'framer-motion'


const containerVarient = {
    hidden :{  opacity:0, x: -100},
    visible:{
        opacity:1,
        x:0,
        transition:{
            duration:0.5,
            staggerChildern:0.5
        }
    }
}

const childVarient = {
    hidden:{opacity:0,x:-100},
    visible:{opacity:1,x:0,transition:{duration:0.5}}
}

const Hero = () => {
  return (
    <div className='pb-4 lg:mb-36'>   

        <div className=' flex flex-wrap  lg:flex-row-reverse '>
            <div className=' w-full lg:w-1/2'>
                <div className='flex justify-center lg:p-8'>
                    <motion.img src={sairam_hero} width={550} height={550} alt="sairam" className='border border-stone-900 rounded-3xl' initial={{x:100,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:1 ,delay:1.5}} />
                </div>
            </div>  
    
        <div className='w-full lg:w-1/2 '>
        <motion.div
        initial="hidden"
        animate ="visible"
        variants={containerVarient}>
            <div className='flex flex-col items-center   lg:items-start mt-20 ml-10'>
                <motion.h2 
                variants={childVarient}
                className=' pb-2 tracking-tight text-4xl lg:text-8xl'>J.R.Sairam</motion.h2>

                <motion.span 
                variants={childVarient}
                className='bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl text-transparent'>Full Stack Developer
                </motion.span>

                <motion.p variants={childVarient} className='my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter'>
                    {HERO_CONTENT}
                </motion.p>
                <motion.a 
                variants={childVarient}
                className='bg-white rounded-full p-4 text-sm text-stone-800 mb-10' href='./Resume(J.R.Sairam) (3).pdf' >
                    Download Resume
                </motion.a>
            </div>
            </motion.div>
        </div>

        </div>
        </div>
  )
}

export default Hero