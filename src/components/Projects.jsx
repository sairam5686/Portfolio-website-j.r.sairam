import React from 'react'
import {PROJECTS} from '../constants/index';
import {motion} from 'framer-motion';
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {

  return (
    <div className='pb-4 mt-5'>
      <div className='text-center text-4xl my-20' >
        <motion.h2
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration: 0.5}}
        >My Project</motion.h2>
        </div>

        <div className=''>
        {PROJECTS.map((items,index)=>(
            <div className='flex flex-wrap mb-6 lg:justify-center '>
              <motion.div
              whileInView={{opacity:1,x:0}}
              initial={{opacity:0,x:-100}}
              transition={{duration: 1}}
              className='w-full mt-15 mr-10 lg:w-1/4' >
                <img src={items.image}  height={350} width={350} className='mb-6  rounded-2xl sm:m-auto sm:mb-3  ' />
              </motion.div>

              <motion.div 
              whileInView={{opacity:1,x:0}}
              initial={{opacity:0,x:100}}
              transition={{duration: 1}}
              className='w-full max-w-xl mt-10 lg:w-3/4'>
                    <h2 className='mb-2 font-semibold text-2xl'>{items.title}</h2>
                    <p className='mb-4  text-stone-400'>{items.description}</p>
                    {items.technologies.map((tech,index)=>(
                      <span key={index} className='mr-2 text-sm p-2 font-medium bg-stone-900'>
                      {tech}
                      </span>
                ))}
                <div className='mt-5'>
                <a href={items.link}>
                  <button className='bg-zinc-800 hover:bg-stone-800 text-stone-300 font-Medium py-1 px-2 rounded-xl'>View Project</button>
                </a>
                </div>
              </motion.div>

            </div>
        ))}
        </div>

    </div>
  )
}

export default Projects