import React from 'react'
import { FaGithub, FaStar } from 'react-icons/fa6'
import { WiTime12 } from 'react-icons/wi'

function navbar() {
  return (
    <main className='poppins bg-[#999999] text-white w-full rounded-4xl border-1 border-purple-300'>
      <div className='flex justify-between px-3 py-2 items-center'>
        <div className='caveat text-[35px] font-[600] pr-3 flex items-center gap-1 '><WiTime12 className='text-[24px] animate-spin' />liveRoutine</div>
        <a href="https://github.com/smalakargh/liveRoutine" className='flex relative cursor-pointer items-center font-[500] gap-1 px-2 py-1 rounded-lg'><FaStar className='text-[22px] text-amber-300 animate-ping absolute' /> <FaGithub className='text-[30px] text-black' />
</a>
      </div>
    </main>
  )
}

export default navbar
