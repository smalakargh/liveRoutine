import React from 'react'
import { motion } from "motion/react"
import { RiExternalLinkLine } from 'react-icons/ri'
import { IoMdInformationCircleOutline } from 'react-icons/io'

function Suggestion() {
  return (
    <main className='mt-3 flex justify-center'>
        <div className='bg-slate-500 rounded-sm py-2 px-3 gap-1 text-[9px] w-[90%] poppins text-purple-100 flex items-start justify-center'>
        <IoMdInformationCircleOutline className='text-[14px] text-blue-100'/>Got a feature idea? 💡 Help us make your experience even better—we’re all ears!
        <a href="https://forms.gle/8Q9QQFA3g1WFEo1V8">
        <motion.button
        whileTap={{ scale: 0.9 }} 
        className='flex gap-1 items-center bg-gradient-to-r border-1 from-purple-500 via-purple-400 to-blue-500 px-2 py-1 rounded-sm font-bold'>Suggest<RiExternalLinkLine /></motion.button>
        </a>
        </div>
    </main>
  )
}

export default Suggestion