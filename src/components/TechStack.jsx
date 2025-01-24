import React from 'react'
import 'react-tooltip/dist/react-tooltip.css'
import { SiC, SiExpress, SiNodedotjs, SiReact } from 'react-icons/si'
import { RiJavascriptFill } from "react-icons/ri";
import { SiPython } from "react-icons/si";
import { DiGit, DiNodejs, DiPython } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import { CgFramer } from 'react-icons/cg';
import { BsGithub } from 'react-icons/bs';
import{animate, motion} from 'framer-motion';

const iconvarient = (duration)=>({
    initial:{ y: -10},
    animate:{
        y:[10,-10],
        transition :{
            duration :duration,
            ease:"linear",
            repeat : Infinity,
            repeatType:"reverse"
        }
    }
})





const TechStack = () => {
  return (
    <div className='pb-24 '>
        <div className='text-4xl  text-center my-20'>
            <motion.h2
            whileInView={{opacity:1 , y:0}}
            initial={{opacity:0 , y:-100}}
            transition={{duration:1.5}}
            >My Tech Stack</motion.h2>
        </div>

        <div className='px-5'>
            <motion.div 
                whileInView={{opacity:1 ,x:0}}
                initial={{opacity:0 ,x:-100}}
                transition={{duration:1.5}}
            className='flex flex-wrap justify-center items-center mt-5 text-7xl'>

                <motion.div 
                initial="initial"
                animate="animate"
                variants={iconvarient(2.5)}
                className='p-4'>  
                <SiReact className='text-cyan-500' />
                </motion.div>

                
                <motion.div 
                 initial="initial"
                 animate="animate"
                 variants={iconvarient(3)}
                className='p-4'>   
                <RiJavascriptFill className='text-yellow-300' />
                </motion.div>
                

                <motion.div
                 initial="initial"
                 animate="animate"
                 variants={iconvarient(5)}
                className='p-4'>
                <SiPython className='text-amber-500' />
                </motion.div>

                <motion.div
                 initial="initial"
                 animate="animate"
                 variants={iconvarient(2)}
                className='p-4'>
                <SiNodedotjs className='text-green-400' />
                </motion.div>

                <motion.div
                 initial="initial"
                 animate="animate"
                 variants={iconvarient(6)}
                className='p-4'>
                    <SiExpress />
                </motion.div>

                <motion.div
                initial="initial"
                animate="animate"
                variants={iconvarient(4)}
                className='p-4'>
                    <SiMongodb className='text-emerald-500' />
                </motion.div >

                <motion.div
                 initial="initial"
                 animate="animate"
                 variants={iconvarient(3)}
                className='p-4'>
                    <CgFramer className='text-gray-400' />
                </motion.div>

                <motion.div 
                 initial="initial"
                 animate="animate"
                 variants={iconvarient(4.5)}
                className='p-4'>
                    < DiGit className='text-red-500' />
                </motion.div >

                <motion.div
                 initial="initial"
                 animate="animate"
                 variants={iconvarient(1)}
                className='p-4'>
                    < SiC className='text-blue-400' />
                </motion.div>
                
            </motion.div>
        </div>

    </div>
  )
}

export default TechStack