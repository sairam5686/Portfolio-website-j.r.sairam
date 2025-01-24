import React from 'react'
import { AiOutlineLinkedin } from "react-icons/ai";
import { SiGithub } from "react-icons/si";
import { BsInstagram, BsPerson } from "react-icons/bs";
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


        <div className='m-8 flex justify-center  gap-6 items-center text-2xl     '>
            <a href="https://www.linkedin.com/in/sairam-j-r/" >
            <AiOutlineLinkedin />
            </a>
            <a href="https://github.com/sairam5686">
            <SiGithub />
            </a>
            <a href="https://jrsairam.framer.website/">
            <BsPerson/>
            </a>            
        </div>      
    </div>

    </>
  )
}

export default Navbar