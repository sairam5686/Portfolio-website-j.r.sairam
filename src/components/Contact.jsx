import React from 'react'
import {CONTACT} from '../constants/index'
import {motion} from 'framer-motion'

const Contact = () => {
  return (
    <div className='border-t-2 border-stone-900 pb-10  ' >
        <div className='m-5 my-10'>
            <motion.h1
            whileInView={{opacity:1,y:0}}
            initial={{opacity:0,y:-100}}
            transition={{duration: 0.5}}
            className='text-center text-4xl'>Contact Me</motion.h1>
        </div>
        <div className='flex justify-center flex-col items-center gap-4 '>

            <motion.h3  
            whileInView={{opacity:1,y:0}}
            initial={{opacity:0,y:-100}}
            transition={{duration: 0.5}}>
              {CONTACT.phoneNo}
            </motion.h3>

            <a href="mailto:jsairam5686@gmail.com" className='border-b'>
            <h3>{CONTACT.email} </h3>
            </a>
        </div>

    </div>
  )
}

export default Contact