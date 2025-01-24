import React from 'react'
import { AiOutlineLinkedin } from "react-icons/ai";
import { SiGithub } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";
import { CgPokemon } from "react-icons/cg";




import sairam_logo from '../assets/sairam_LOGO.png'

const Navbar = () => {
  return (
    <>
    <div className='Nav_container flex items-center justify-between px-8' >

        <div className='flex shrink-0 items-center'>
            <a href="/" aria-label='home'>
        <img src={sairam_logo} alt="" width={75} height={33} />
        </a>
        </div>


        <div className='m-6 flex justify-center  gap-6 items-center text-2xl sm:text-sm md:text-xl   '>
            <a href="" >
            <AiOutlineLinkedin />
            </a>
            <a href="">
            <SiGithub />
            </a>
            <a href="">
            <BsInstagram/>
            </a>            
        </div>      
    </div>

    </>
  )
}

export default Navbar