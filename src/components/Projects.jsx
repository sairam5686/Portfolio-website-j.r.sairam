import React from 'react'
import {PROJECTS} from '../constants/index';

const Projects = () => {
  return (
    <div className='pb-4 mt-5'>
      <div className='text-center text-4xl my-20' ><h2>My Project</h2></div>

        <div className=''>
        {PROJECTS.map((items,index)=>(
            <div className='flex flex-wrap mb-6 lg:justify-center '>
              <div className='w-full mt-10 mr-5 lg:w-1/4' >
                <img src={items.image}  height={250} width={250} className='mb-6 rounded-2xl sm:m-auto sm:mb-3  ' />
              </div>

              <div className='w-full max-w-xl lg:w-3/4'>
                <h2 className='mb-2 font-semibold text-2xl'>{items.title}</h2>
                <p className='mb-4  text-stone-400'>{items.description}</p>
                {items.technologies.map((tech,index)=>(
                  <span key={index} className='mr-2 text-sm p-2 font-medium bg-stone-900'>
                  {tech}
                  </span>
                ))}
              </div>

            </div>
        ))}
        </div>

    </div>
  )
}

export default Projects