import React from 'react'
import { FaGithub, FaStar } from 'react-icons/fa6'
import { WiTime12 } from 'react-icons/wi'

function navbar() {
  return (
    <main className='poppins bg-[#888888] text-white w-full'>
      <div className='flex justify-between p-3 items-center'>
        <div className='caveat text-[27px] font-[300] flex items-center gap-1'><WiTime12 className='text-[24px] animate-spin' />live-Routine</div>
        <a href="https://github.com/smalakargh/liveRoutine"><div className='flex relative cursor-pointer items-center font-[500] gap-1  px-2 py-1 rounded-lg'><FaStar className='text-[22px] text-amber-300 animate-ping absolute' /> <FaGithub className='text-[23px] text-black' /></div>
</a>
      </div>
    </main>
  )
}

export default navbar
