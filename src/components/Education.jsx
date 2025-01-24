import React from 'react'
import { EXPERIENCES } from '../constants/index'
const Education = () => {
  return (
    <div className='pb-4 mt-10'>
        <div>
            <h2 className='text-4xl my-20 text-center '>Education</h2>
        </div>

        <div>{EXPERIENCES.map((items,index)=>(
                <div className='w-full mb-8 flex flex-wrap lg:justify-center'>
                   <div className='w-full  lg:w-1/4'>                    
                        <p className='mb-2 text-sm text-stone-400'>{items.year}</p>
                    </div> 
                    <div className='w-full max-w-xl  lg:w-3/4'> 
                        <h2 className='mb-2 font-semibold'>{items.role}-{" "}<span className='text-stone-400'>{items.company}</span></h2>
                        <p className='mb-2 text-stone-400'>{items.description}</p>
                        {items.technologies.map((exp,index)=>(
                            <span key={index} className='bg-stone-900 p-2 mx-1 rounded-2xl mt-2 text-sm'>{exp}</span>
                        ))}

                    </div>
            </div>
        ))}</div>
    </div>
  )
}

export default Education