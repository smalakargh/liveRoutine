import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { IoMailOutline } from 'react-icons/io5'

function Footer() {
  return (
    <main className='poppins bg-[#939093] p-3'>
       <div className='bg-[#b5b2b5]  px-3 py-2 border-1 border-white rounded-sm'>
            <div className='w-full flex justify-center items-center text-[9px] md:text-[14px] gap-1 font-[600]'>© {new Date().getFullYear()} Smalakar | made with ❤️ by <a href='https://smalakar.vercel.app/' className='caveat text-[15px] md:text-[24px] font-[500]'>Supriyo Malakar</a></div>
       </div>
    </main>
  )
}

export default Footer