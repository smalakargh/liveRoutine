import React from 'react'
import { motion } from "motion/react"
import { FaGithub, FaStar } from 'react-icons/fa6'
import { TiStarFullOutline } from 'react-icons/ti'
import { WiTime12 } from 'react-icons/wi'

function navbar() {
  return (
    <motion.main className='poppins bg-[#989898] text-white w-full rounded-4xl border-1 border-purple-300' >
      <div className='flex justify-between px-3 py-2 items-center'>
        <div className='caveat text-[35px] font-[600] pr-3 flex items-center gap-1 text-shadow-lg '><WiTime12 className='text-[24px] animate-spin' />liveRoutine</div>
        <a href="#">
        <motion.div className='cursor-pointer bg-gradient-to-r border-1 from-purple-500 via-purple-400 to-blue-500 rounded-full px-4 py-2 font-[600] flex items-center gap-1 text-[12px] md:text-[16px]'
        whileTap={{ scale: 0.9 }}
        animate={{ boxShadow: "2px 4px #616161" }}> Star On Github
          <div className='px-2 bg-black rounded-full py-1 border-1 text-[16px] text-amber-300'><TiStarFullOutline className='absolute' /><TiStarFullOutline className='animate-ping' /></div>
        </motion.div>
        </a>
      </div>
    </motion.main>
  )
}

export default navbar

//https://github.com/smalakargh/liveRoutine