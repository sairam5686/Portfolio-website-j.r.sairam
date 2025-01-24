import React from 'react'
import 'react-tooltip/dist/react-tooltip.css'
import { SiC, SiExpress, SiNodedotjs, SiReact } from 'react-icons/si'
import { RiJavascriptFill } from "react-icons/ri";
import { SiPython } from "react-icons/si";
import { DiGit, DiNodejs, DiPython } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import { CgFramer } from 'react-icons/cg';
import { BsGithub } from 'react-icons/bs';





const TechStack = () => {
  return (
    <div className='pb-24 '>
        <div className='text-4xl  text-center my-20'>
            <h2>My Tech Stack</h2>
        </div>

        <div className='px-5'>
            <div className='flex flex-wrap justify-center items-center mt-5 text-7xl'>
                <div className='p-4'>  
                <SiReact/>
                </div>

                
                <div className='p-4'>   
                <RiJavascriptFill />
                </div>
                

                <div className='p-4'>
                <SiPython />
                </div>

                <div className='p-4'>
                <SiNodedotjs />
                </div>

                <div className='p-4'>
                    <SiExpress />
                </div>

                <div className='p-4'>
                    <SiMongodb />
                </div >

                <div className='p-4'>
                    <CgFramer />
                </div>

                <div className='p-4'>
                    < DiGit/>
                </div >

                <div className='p-4'>
                    < SiC/>
                </div>

                


            </div>
        </div>

    </div>
  )
}

export default TechStack