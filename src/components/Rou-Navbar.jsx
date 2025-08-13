import React from 'react'
import { FaGithub, FaStar } from 'react-icons/fa6'
import { WiTime12 } from 'react-icons/wi'

function navbar() {
  return (
    <main className='poppins bg-[#6e6d6e] text-white fixed w-full'>
      <div className='flex justify-between p-3 items-center'>
        <div className='caveat text-[27px] font-[300] flex items-center gap-1'><WiTime12 className='text-[24px] animate-spin' />live-Routine</div>
        <a href="https://github.com/smalakargh/liveRoutine"><div className='flex relative cursor-pointer items-center bg-white text-[#6e6d6e] font-[500] gap-1 border-1 border-white px-2 py-1 rounded-lg'><FaStar className='text-[22px] text-amber-300 animate-ping fixed' /> <FaGithub className='text-[23px] text-black' /></div>
</a>
      </div>
    </main>
  )
}

export default navbar
