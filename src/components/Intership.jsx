import React from 'react'
import { INTERN } from '../constants/index'
import {motion} from 'framer-motion'
const Intership = () => {
  return (
    <div className='pb-4  mt-10'>
        <div>
            <motion.h2
            whileInView ={{opacity:1 ,y:0}}
            initial ={{opacity:0 ,y:-100 }}
            transitions={{duration:0.5}}
            className='text-4xl my-20  text-center mr-10  '>Internship</motion.h2>
        </div>

        <div className='ml-10' >{INTERN.map((items,index)=>(
                <div key={index} className='w-full mb-8  flex flex-wrap lg:justify-center'>
                   <motion.div 
                   whileInView={{opacity:1 ,x:0}}
                   initial={{opacity:0 ,x:-100 }}
                   transitions={{duration:1}}
                   className='w-full  lg:w-1/4'>                    
                        <p className='mb-2 text-sm text-stone-400'>{items.year}</p>
                    </motion.div> 

                    <motion.div
                    whileInView={{opacity:1 ,x:0}}
                    initial={{opacity:0 ,x:100 }}
                    transitions={{duration:1}}

                    className='w-full max-w-xl  lg:w-3/4'>

                        <h2 className='mb-2 font-semibold'>{items.role}-{" "}<span className='text-stone-400'>{items.company}</span></h2>
                        <p className='mb-4 text-stone-400'>{items.description}</p>
                        {items.technologies.map((exp,index)=>(
                            <span key={index} className='bg-stone-900 p-2 mx-1  rounded-2xl mt-5 text-sm'>{exp}</span>
                        ))}
                    </motion.div>
                </div>
        ))}</div>
    </div>
  )
  
}

export default Intership