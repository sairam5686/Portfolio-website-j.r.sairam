import React from 'react'
import {CONTACT} from '../constants/index'

const Contact = () => {
  return (
    <div className='border-t-2 border-stone-900 pb-10  ' >
        <div className='m-5 my-10'>
            <h1 className='text-center text-4xl'>Contact Me</h1>
        </div>
        <div className='flex justify-center flex-col items-center gap-4 '>
            <h3> {CONTACT.address} </h3>
            <h3>{CONTACT.phoneNo}</h3>
            <a href="#" className='border-b'>
            <h3>{CONTACT.email} </h3>
            </a>
        </div>

    </div>
  )
}

export default Contact